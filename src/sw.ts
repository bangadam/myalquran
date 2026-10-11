/// <reference lib="webworker" />
import { precache, matchPrecache } from 'workbox-precaching';
import { packageSchema, type OfflinePackage } from './lib/offline';

declare const self: ServiceWorkerGlobalScope & { __WB_MANIFEST: { url: string; revision: string | null }[] };
const languages = ['id', 'en', 'ja', 'zh-Hans'];
const metadataCache = 'myalquran-package-pointers';
const prefix = 'myalquran-reading-';
precache(self.__WB_MANIFEST);

async function savedPackage(locale: string): Promise<OfflinePackage | null> {
  const stored = await (await caches.open(metadataCache)).match(`/__offline-active/${locale}`);
  if (!stored) return null;
  let value: unknown;
  try { value = await stored.json(); } catch { return null; }
  const parsed = packageSchema.safeParse(value);
  return parsed.success && parsed.data.locale === locale ? parsed.data : null;
}

async function verifiedBytes(response: Response | undefined, resource: OfflinePackage['resources'][number]): Promise<ArrayBuffer | null> {
  if (!response?.ok || response.type === 'opaque') return null;
  try {
    const bytes = await response.arrayBuffer();
    if (bytes.byteLength !== resource.bytes) return null;
    const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)), byte => byte.toString(16).padStart(2, '0')).join('');
    return hash === resource.hash ? bytes : null;
  } catch { return null; }
}

async function verifiedCachedResponse(cache: Cache, resource: OfflinePackage['resources'][number]): Promise<Response | null> {
  const response = await cache.match(resource.url);
  const bytes = await verifiedBytes(response, resource);
  return bytes && response ? new Response(bytes, { status: response.status, statusText: response.statusText, headers: response.headers }) : null;
}

async function activePackage(locale: string): Promise<OfflinePackage | null> {
  const value = await savedPackage(locale);
  if (!value) return null;
  const name = `${prefix}${locale}-${value.version}`;
  if (!await caches.has(name)) return null;
  const cache = await caches.open(name);
  for (const resource of value.resources) if (!await verifiedBytes(await cache.match(resource.url), resource)) return null;
  return value;
}
async function manifest(locale: string, signal?: AbortSignal): Promise<OfflinePackage> {
  const deadline = AbortSignal.timeout(20000);
  const response = await fetch(`/packages/${locale}.json`, { cache: 'no-store', signal: signal ? AbortSignal.any([signal, deadline]) : deadline });
  if (!response.ok) throw new Error('Package manifest unavailable');
  const value = packageSchema.parse(await response.json());
  if (value.locale !== locale || value.resources.some(resource => new URL(resource.url, self.location.origin).origin !== self.location.origin)) throw new Error('Invalid package origin or locale');
  return value;
}
async function savePackage(locale: string, port: MessagePort) {
  // ponytail: one package writer per origin; split locks only if concurrent language downloads become necessary.
  await navigator.locks.request('myalquran-offline-write', { ifAvailable: true }, async lock => {
    if (!lock) throw new Error('Download already in progress');
    const request = new AbortController();
    port.onmessage = event => { if (event.data?.type === 'cancel') request.abort(); };
    port.start();
    let staging: string | null = null;
    try {
      const value = await manifest(locale, request.signal), current = await activePackage(locale);
      request.signal.throwIfAborted();
      if (current?.version === value.version) { port.postMessage({ type: 'complete', package: current }); return; }
      port.postMessage({ type: 'progress', completed: 0, total: value.resources.length });
      const saved = current ?? await savedPackage(locale);
      const repairing = saved?.version === value.version;
      const cacheName = `${prefix}${locale}-${value.version}`;
      if (!repairing) {
        staging = cacheName;
        await caches.delete(cacheName);
      }
      const cache = await caches.open(cacheName);
      let completed = 0;
      for (const resource of value.resources) {
        request.signal.throwIfAborted();
        if (repairing && await verifiedBytes(await cache.match(resource.url), resource)) {
          port.postMessage({ type: 'progress', completed: ++completed, total: value.resources.length });
          continue;
        }
        const response = await fetch(resource.url, { cache: 'no-store', signal: AbortSignal.any([request.signal, AbortSignal.timeout(20000)]) });
        if (!response.ok || response.type === 'opaque') throw new Error(`Resource unavailable: ${resource.url}`);
        const bytes = await verifiedBytes(response, resource);
        if (!bytes) throw new Error(`Resource version mismatch: ${resource.url}`);
        request.signal.throwIfAborted();
        await cache.put(resource.url, new Response(bytes, { status: response.status, statusText: response.statusText, headers: response.headers }));
        port.postMessage({ type: 'progress', completed: ++completed, total: value.resources.length });
      }
      request.signal.throwIfAborted();
      await cache.put('/__offline-complete', new Response(JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } }));
      const pointers = await caches.open(metadataCache);
      request.signal.throwIfAborted();
      await pointers.put(`/__offline-active/${locale}`, new Response(JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } }));
      staging = null;
      port.postMessage({ type: 'complete', package: value });
      // ponytail: retain previous complete caches for open tabs; reclaim obsolete versions when tab-safe version tracking is introduced.
    } finally {
      port.onmessage = null;
      if (staging) await caches.delete(staging);
    }
  });
}
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    event.waitUntil(navigator.locks.request('myalquran-offline-write', () => self.skipWaiting()));
    return;
  }
  const port = event.ports[0], locale = event.data?.locale;
  if (!port || !languages.includes(locale)) return;
  event.waitUntil((async () => {
    try {
      if (event.data.type === 'status') {
        const current = await activePackage(locale);
        let available: OfflinePackage | null = null;
        try { available = await manifest(locale); } catch { /* Offline status is determined from the complete local package. */ }
        port.postMessage({ type: 'status', package: current, available });
      } else if (event.data.type === 'download') await savePackage(locale, port);
    } catch (error) { port.postMessage({ type: 'error', message: error instanceof Error ? error.message : 'Offline operation failed' }); }
  })());
});
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/packages/') || url.pathname.startsWith('/@') || url.pathname.startsWith('/src/')) return;
  const locale = url.pathname.split('/')[1];
  const navigation = event.request.mode === 'navigate';
  if (!navigation && !url.pathname.startsWith('/_astro/') && !url.pathname.startsWith('/icons/') && url.pathname !== '/manifest.webmanifest') return;
  event.respondWith((async () => {
    const path = navigation
      ? url.pathname.endsWith('/index.html') ? url.pathname.slice(0, -10) : url.pathname.endsWith('/') || url.pathname.endsWith('.html') ? url.pathname : `${url.pathname}/`
      : url.pathname;
    const precached = await matchPrecache(path);
    if (precached) return path === '/404.html' ? new Response(precached.body, { status: 404, headers: precached.headers }) : precached;
    let routeKnown: boolean | undefined;
    if (languages.includes(locale)) {
      const current = await savedPackage(locale);
      if (current) {
        const resource = current.resources.find(resource => resource.url === path);
        if (navigation) routeKnown = Boolean(resource);
        if (resource) {
          const cached = await verifiedCachedResponse(await caches.open(`${prefix}${locale}-${current.version}`), resource);
          if (cached) return cached;
        }
      }
    } else if (!navigation) {
      for (const language of languages) {
        const current = await savedPackage(language);
        if (current) {
          const resource = current.resources.find(resource => resource.url === path);
          if (resource) {
            const cached = await verifiedCachedResponse(await caches.open(`${prefix}${language}-${current.version}`), resource);
            if (cached) return cached;
          }
        }
      }
    }
    if (!navigation) {
      for (const name of await caches.keys()) {
        if (!name.startsWith(prefix)) continue;
        const previous = await caches.open(name);
        const complete = await previous.match('/__offline-complete');
        if (!complete) continue;
        let value: unknown;
        try { value = await complete.json(); } catch { continue; }
        const parsed = packageSchema.safeParse(value);
        if (!parsed.success) continue;
        const resource = parsed.data.resources.find(resource => resource.url === path);
        if (resource) {
          const cached = await verifiedCachedResponse(previous, resource);
          if (cached) return cached;
        }
      }
    }
    try { return await fetch(event.request); }
    catch {
      if (navigation) {
        const status = routeKnown === false ? 404 : 503;
        const fallback = await matchPrecache(status === 404 ? '/404.html' : '/offline/');
        if (fallback) return new Response(fallback.body, { status, headers: fallback.headers });
      }
      return Response.error();
    }
  })());
});
