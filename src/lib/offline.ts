import { z } from 'zod';

export const packageSchema = z.object({
  locale: z.enum(['id', 'en', 'ja', 'zh-Hans']),
  version: z.string().regex(/^[a-f0-9]{20}$/),
  bytes: z.number().int().nonnegative(),
  resources: z.array(z.object({
    url: z.string().refine(value => value.startsWith('/') && !value.startsWith('//') && !value.includes('\\'), 'Invalid resource path'),
    bytes: z.number().int().nonnegative(),
    hash: z.string().regex(/^[a-f0-9]{64}$/)
  })).nonempty()
}).refine(value => new Set(value.resources.map(resource => resource.url)).size === value.resources.length, 'Duplicate resource paths');
export type OfflinePackage = z.infer<typeof packageSchema>;
const replySchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('status'), package: packageSchema.nullable(), available: packageSchema.nullable() }),
  z.object({ type: z.literal('progress'), completed: z.number().int().nonnegative(), total: z.number().int().positive() }),
  z.object({ type: z.literal('complete'), package: packageSchema }),
  z.object({ type: z.literal('error'), message: z.string() })
]);
export type OfflineReply = z.infer<typeof replySchema>;

export async function requestOffline(type: 'status' | 'download', locale: OfflinePackage['locale'], signal: AbortSignal, onProgress?: (completed: number, total: number) => void): Promise<OfflineReply> {
  if (signal.aborted) throw new Error('Offline request cancelled');
  const registrationReady = Promise.withResolvers<ServiceWorkerRegistration>();
  const registrationTimer = window.setTimeout(() => { clearRegistration(); registrationReady.reject(new Error('Offline worker registration timed out')); }, 15000);
  const cancelRegistration = () => { clearRegistration(); registrationReady.reject(new Error('Offline request cancelled')); };
  const clearRegistration = () => { window.clearTimeout(registrationTimer); signal.removeEventListener('abort', cancelRegistration); };
  signal.addEventListener('abort', cancelRegistration, { once: true });
  navigator.serviceWorker.ready.then(value => { clearRegistration(); registrationReady.resolve(value); }, error => { clearRegistration(); registrationReady.reject(error); });
  const registration = await registrationReady.promise;
  if (signal.aborted || !registration.active) throw new Error('Offline worker unavailable');
  const response = Promise.withResolvers<OfflineReply>();
  const channel = new MessageChannel();
  // ponytail: 30 seconds without a worker reply fails visibly; revise only if real downloads need longer idle periods.
  let timer: number;
  let progress: { completed: number; total: number } | null = null;
  const cleanup = () => { window.clearTimeout(timer); channel.port1.close(); signal.removeEventListener('abort', abort); };
  const fail = (error: Error) => {
    if (type === 'download') channel.port1.postMessage({ type: 'cancel' });
    cleanup(); response.reject(error);
  };
  const abort = () => fail(new Error('Offline request cancelled'));
  const resetDeadline = () => { window.clearTimeout(timer); timer = window.setTimeout(() => fail(new Error('Offline worker response timed out')), 30000); };
  signal.addEventListener('abort', abort, { once: true });
  channel.port1.onmessageerror = () => fail(new Error('Unreadable offline worker response'));
  channel.port1.onmessage = event => {
    const parsed = replySchema.safeParse(event.data);
    if (!parsed.success) { fail(new Error('Invalid offline worker response')); return; }
    const reply = parsed.data;
    if (reply.type === 'progress') {
      if (type !== 'download' || reply.completed > reply.total || (progress && (reply.total !== progress.total || reply.completed < progress.completed))) { fail(new Error('Invalid offline progress')); return; }
      progress = { completed: reply.completed, total: reply.total };
      resetDeadline(); onProgress?.(reply.completed, reply.total); return;
    }
    if (reply.type === 'error') { fail(new Error(reply.message)); return; }
    if ((type === 'status' && reply.type !== 'status') || (type === 'download' && reply.type !== 'complete')) { fail(new Error('Unexpected offline worker response')); return; }
    if ((reply.package && reply.package.locale !== locale) || (reply.type === 'status' && reply.available && reply.available.locale !== locale)) { fail(new Error('Offline reply locale mismatch')); return; }
    if (reply.type === 'complete' && progress && (progress.completed !== progress.total || reply.package.resources.length !== progress.total)) { fail(new Error('Incomplete offline progress')); return; }
    cleanup(); response.resolve(reply);
  };
  resetDeadline();
  try { registration.active.postMessage({ type, locale }, [channel.port2]); }
  catch (error) { fail(error instanceof Error ? error : new Error('Offline worker message failed')); }
  return response.promise;
}
