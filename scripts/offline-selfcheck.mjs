import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash, webcrypto } from 'node:crypto';
import vm from 'node:vm';
import ts from 'typescript';
import { z } from 'zod';

const origin = 'https://offline-check.invalid';
const handlers = new Map();
const requestDeadlines = new Map();
const stores = new Map();
const heldLocks = new Map();
const lockQueue = [];
let activationCount = 0;
const locks = {
  async request(name, options, callback) {
    if (typeof options === 'function') { callback = options; options = {}; }
    const mode = options.mode ?? 'exclusive';
    const available = !heldLocks.has(name) || (mode === 'shared' && heldLocks.get(name).every(lock => lock.mode === 'shared'));
    if (!available) {
      if (options.ifAvailable) return callback(null);
      const waiting = Promise.withResolvers();
      lockQueue.push(() => locks.request(name, options, callback).then(waiting.resolve, waiting.reject));
      return waiting.promise;
    }
    const lock = { name, mode };
    heldLocks.set(name, [...(heldLocks.get(name) ?? []), lock]);
    try { return await callback(lock); }
    finally {
      const remaining = heldLocks.get(name).filter(held => held !== lock);
      if (remaining.length) heldLocks.set(name, remaining); else heldLocks.delete(name);
      for (const pending of lockQueue.splice(0)) pending();
    }
  }
};
const key = input => new URL(typeof input === 'string' ? input : input.url, origin).href;
const cacheStorage = {
  async open(name) {
    if (!stores.has(name)) stores.set(name, new Map());
    const entries = stores.get(name);
    return {
      async match(input) { return entries.get(key(input))?.clone(); },
      async put(input, response) { entries.set(key(input), response.clone()); }
    };
  },
  async has(name) { return stores.has(name); },
  async delete(name) { return stores.delete(name); },
  async keys() { return [...stores.keys()]; }
};
let network = new Map();
const precached = new Map([
  ['/offline/', new Response('<h1>Reading not saved offline</h1>', { headers: { 'Content-Type': 'text/html' } })],
  ['/404.html', new Response('<h1>Page not found</h1>', { headers: { 'Content-Type': 'text/html' } })]
]);
const source = await readFile(new URL('../src/sw.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const contract = { exports: {} };
const clientWork = [];
const worker = {
  postMessage(data, ports) {
    handlers.get('message')({ data, ports, waitUntil(promise) { clientWork.push(promise); } });
  }
};
vm.runInNewContext(ts.transpileModule(await readFile(new URL('../src/lib/offline.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, {
  exports: contract.exports,
  window: { setTimeout, clearTimeout },
  navigator: { serviceWorker: { ready: Promise.resolve({ active: worker }) } },
  MessageChannel,
  require(name) { if (name === 'zod') return { z }; throw new Error(`Unexpected contract dependency: ${name}`); }
});
const workerContext = {
  exports: {},
  require(name) {
    if (name === 'workbox-precaching') return { precache() {}, async matchPrecache(path) { return precached.get(path)?.clone(); } };
    if (name === './lib/offline') return contract.exports;
    throw new Error(`Unexpected worker dependency: ${name}`);
  },
  self: { __WB_MANIFEST: [], location: { origin }, addEventListener(type, callback) { handlers.set(type, callback); }, clients: { async claim() {} }, async skipWaiting() { activationCount++; } },
  caches: cacheStorage, URL, Response, crypto: webcrypto, console,
  navigator: { locks },
  AbortController,
  AbortSignal: {
    any(signals) {
      const combined = AbortSignal.any(signals);
      const deadline = signals.map(signal => requestDeadlines.get(signal)).find(Boolean);
      if (deadline) requestDeadlines.set(combined, deadline);
      return combined;
    },
    timeout(milliseconds) {
      assert.ok(milliseconds > 0 && milliseconds < 30000, 'Worker deadline must expire before the UI response deadline');
      const controller = new AbortController();
      requestDeadlines.set(controller.signal, controller);
      return controller.signal;
    }
  },
  async fetch(input, options = {}) {
    const response = network.get(key(input));
    if (!response) throw new Error('Origin unavailable');
    if (typeof response === 'function') return response(options);
    return response.clone();
  }
};
vm.runInNewContext(compiled, workerContext);
async function message(type) {
  const replies = [];
  const finished = Promise.withResolvers();
  handlers.get('message')({ data: { type, locale: 'en' }, ports: [{ postMessage(value) { replies.push(value); }, start() {}, close() {} }], waitUntil(promise) { promise.then(finished.resolve, finished.reject); } });
  await finished.promise;
  return replies.at(-1);
}
const oldVersion = 'a'.repeat(20), newVersion = 'b'.repeat(20);
const url = '/en/surat/1/';
const html = '<h1>Verified reading</h1>';
const resource = { url, bytes: Buffer.byteLength(html), hash: createHash('sha256').update(html).digest('hex') };
const oldPackage = { locale: 'en', version: oldVersion, bytes: resource.bytes, resources: [resource] };
const pointers = await cacheStorage.open('myalquran-package-pointers');
const oldCache = await cacheStorage.open(`myalquran-reading-en-${oldVersion}`);
await pointers.put('/__offline-active/en', new Response(JSON.stringify(oldPackage)));
await oldCache.put(url, new Response(html));
await oldCache.put('/__offline-complete', new Response(oldVersion));
let reply = await message('status');
assert.equal(reply.type, 'status');
assert.equal(reply.package.version, oldVersion);
assert.equal(reply.available, null, 'Offline must not imply an available update');

await oldCache.put(url, new Response('x'.repeat(resource.bytes)));
reply = await message('status');
assert.equal(reply.package, null, 'Same-size corrupted cached content must invalidate readiness');
const corruptedPage = await navigate(url);
assert.equal(corruptedPage.status, 503, 'Corrupt cached reading must not be served as valid offline content');
assert.doesNotMatch(await corruptedPage.text(), /^x+$/);
network.set(key('/packages/en.json'), new Response(JSON.stringify(oldPackage)));
network.set(key(url), new Response('y'.repeat(resource.bytes)));
reply = await message('download');
assert.equal(reply.type, 'error', 'A corrupted cached entry must not pass the already-saved fast path');
assert.equal((await (await pointers.match('/__offline-active/en')).json()).version, oldVersion);
network.set(key(url), new Response(html));
reply = await message('download');
assert.equal(reply.type, 'complete', 'Repair must fetch and verify corrupted entries');
assert.equal(await (await oldCache.match(url)).text(), html);
await oldCache.put(url, new Response(html, { status: 503 }));
reply = await message('status');
assert.equal(reply.package, null, 'Correct bytes with an error status must not count as ready');
reply = await message('download');
assert.equal(reply.type, 'complete', 'Repair must replace cached error responses even when their bytes match');
assert.equal((await oldCache.match(url)).status, 200);
network.clear();

stores.get(`myalquran-reading-en-${oldVersion}`).delete(key(url));
reply = await message('status');
assert.equal(reply.package, null, 'Evicted reading must invalidate readiness');
await oldCache.put(url, new Response(html));
await pointers.put('/__offline-active/en', new Response('{broken'));
reply = await message('status');
assert.equal(reply.type, 'status', 'Corrupted metadata must report not-ready instead of leaving the UI waiting');
assert.equal(reply.package, null);
await pointers.put('/__offline-active/en', new Response(JSON.stringify(oldPackage)));

const nextPackage = { ...oldPackage, version: newVersion };
network = new Map([[key('/packages/en.json'), new Response(JSON.stringify(nextPackage))], [key(url), new Response('<h1>Wrong version</h1>')]]);
reply = await message('download');
assert.equal(reply.type, 'error');
assert.equal((await (await pointers.match('/__offline-active/en')).json()).version, oldVersion);
assert.equal(await cacheStorage.has(`myalquran-reading-en-${newVersion}`), false, 'Failed staging must be removed');
assert.equal(await (await oldCache.match(url)).text(), html, 'Failure must preserve existing reading');
network.set(key(url), new Response(html));
reply = await message('download');
assert.equal(reply.type, 'complete');
assert.equal(reply.package.version, newVersion);
assert.equal((await (await pointers.match('/__offline-active/en')).json()).version, newVersion);
assert.equal(await (await oldCache.match(url)).text(), html, 'Open tabs retain their previous complete package');

const repairVersion = 'd'.repeat(20);
const missingUrl = '/en/surat/2/';
const missingHTML = '<h1>Missing reading</h1>';
const missingResource = { url: missingUrl, bytes: Buffer.byteLength(missingHTML), hash: createHash('sha256').update(missingHTML).digest('hex') };
const repairPackage = { locale: 'en', version: repairVersion, bytes: resource.bytes + missingResource.bytes, resources: [resource, missingResource] };
const repairCacheName = `myalquran-reading-en-${repairVersion}`;
const repairCache = await cacheStorage.open(repairCacheName);
await repairCache.put(url, new Response(html));
await repairCache.put('/__offline-complete', new Response(repairVersion));
await pointers.put('/__offline-active/en', new Response(JSON.stringify(repairPackage)));
network.set(key('/packages/en.json'), new Response(JSON.stringify(repairPackage)));
network.delete(key(url));
network.delete(key(missingUrl));
reply = await message('download');
assert.equal(reply.type, 'error');
const remaining = await (await cacheStorage.open(repairCacheName)).match(url);
assert.ok(remaining, 'Failed same-version repair must not delete remaining saved pages');
assert.equal(await remaining.text(), html);
assert.equal((await (await pointers.match('/__offline-active/en')).json()).version, repairVersion);
network.set(key(missingUrl), new Response(missingHTML));
reply = await message('download');
assert.equal(reply.type, 'complete', 'Repair must only require the missing resource, not re-fetch readable pages');
assert.equal(await (await repairCache.match(missingUrl)).text(), missingHTML);
await pointers.put('/__offline-active/en', new Response(JSON.stringify(nextPackage)));
network.set(key(url), new Response(html));

const manifestStarted = Promise.withResolvers();
network.set(key('/packages/en.json'), ({ signal }) => {
  const pending = Promise.withResolvers();
  signal?.addEventListener('abort', () => pending.reject(signal.reason), { once: true });
  manifestStarted.resolve(signal);
  return pending.promise;
});
const stalledManifest = message('download');
const manifestSignal = await manifestStarted.promise;
assert.ok(manifestSignal, 'Manifest requests must have a worker deadline');
requestDeadlines.get(manifestSignal).abort(new DOMException('Manifest request timed out', 'TimeoutError'));
reply = await stalledManifest;
assert.equal(reply.type, 'error');
assert.equal((await (await pointers.match('/__offline-active/en')).json()).version, newVersion, 'Manifest stall must preserve active content');

const stalledVersion = 'c'.repeat(20);
const stalledPackage = { ...oldPackage, version: stalledVersion };
network.set(key('/packages/en.json'), new Response(JSON.stringify(stalledPackage)));
const fetchStarted = Promise.withResolvers();
network.set(key(url), ({ signal }) => {
  const body = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode('<h1>Partial reading'));
      signal?.addEventListener('abort', () => controller.error(signal.reason), { once: true });
    }
  });
  fetchStarted.resolve(signal);
  return new Response(body);
});
const stalled = message('download');
const signal = await fetchStarted.promise;
assert.ok(signal, 'Resource body must have a worker deadline; otherwise retry remains locked indefinitely');
const busy = await message('download');
assert.equal(busy.type, 'error');
assert.match(busy.message, /already in progress/);
const nextWorkerHandlers = new Map();
vm.runInNewContext(compiled, { ...workerContext,
  self: { ...workerContext.self, addEventListener(type, callback) { nextWorkerHandlers.set(type, callback); } }
});
const nextWorkerReplies = [];
const nextWorkerFinished = Promise.withResolvers();
nextWorkerHandlers.get('message')({ data: { type: 'download', locale: 'en' }, ports: [{ postMessage(value) { nextWorkerReplies.push(value); }, start() {} }], waitUntil(promise) { promise.then(nextWorkerFinished.resolve, nextWorkerFinished.reject); } });
const crossWorkerDeadline = setTimeout(() => { throw new Error('New worker version started an overlapping package download'); }, 1000);
try { await nextWorkerFinished.promise; } finally { clearTimeout(crossWorkerDeadline); }
assert.equal(nextWorkerReplies.at(-1).type, 'error');
assert.match(nextWorkerReplies.at(-1).message, /already in progress/);
const activation = Promise.withResolvers();
nextWorkerHandlers.get('message')({ data: { type: 'SKIP_WAITING' }, waitUntil(promise) { promise.then(activation.resolve, activation.reject); } });
assert.equal(activationCount, 0, 'Update activation must wait for the current package writer');
requestDeadlines.get(signal).abort(new DOMException('Resource download timed out', 'TimeoutError'));
const responseDeadline = setTimeout(() => { throw new Error('Stalled worker did not release its download lock'); }, 1000);
reply = await stalled;
clearTimeout(responseDeadline);
await activation.promise;
assert.equal(activationCount, 1, 'Update can activate after download failure and staging cleanup');
assert.equal(reply.type, 'error');
assert.equal((await (await pointers.match('/__offline-active/en')).json()).version, newVersion, 'Stall must preserve the active package');
assert.equal(await cacheStorage.has(`myalquran-reading-en-${stalledVersion}`), false, 'Stalled staging must be removed');
network.set(key(url), new Response(html));
reply = await message('download');
assert.equal(reply.type, 'complete', 'Retry must start after stalled body timeout');
assert.equal(reply.package.version, stalledVersion);
const cancelPackage = { ...oldPackage, version: 'e'.repeat(20) };
network.set(key('/packages/en.json'), new Response(JSON.stringify(cancelPackage)));
const cancelFetchStarted = Promise.withResolvers();
network.set(key(url), ({ signal }) => {
  const pending = Promise.withResolvers();
  signal.addEventListener('abort', () => pending.reject(signal.reason), { once: true });
  cancelFetchStarted.resolve(signal);
  return pending.promise;
});
const ownerChannel = new MessageChannel();
const ownerFinished = Promise.withResolvers();
const ownerReplies = [];
ownerChannel.port1.onmessage = event => ownerReplies.push(event.data);
handlers.get('message')({ data: { type: 'download', locale: 'en' }, ports: [ownerChannel.port2], waitUntil(promise) { promise.then(ownerFinished.resolve, ownerFinished.reject); } });
const ownerSignal = await cancelFetchStarted.promise;
const otherChannel = new MessageChannel();
const busyFinished = Promise.withResolvers();
handlers.get('message')({ data: { type: 'download', locale: 'en' }, ports: [otherChannel.port2], waitUntil(promise) { promise.then(busyFinished.resolve, busyFinished.reject); } });
otherChannel.port1.postMessage({ type: 'cancel' });
await busyFinished.promise;
assert.equal(ownerSignal.aborted, false, 'A second client must not cancel the owner download');
ownerChannel.port1.postMessage({ type: 'cancel' });
const cancelDeadline = setTimeout(() => { throw new Error('Client cancellation did not abort the worker download'); }, 1000);
try { await ownerFinished.promise; } finally {
  clearTimeout(cancelDeadline);
  ownerChannel.port1.close(); ownerChannel.port2.close();
  otherChannel.port1.close(); otherChannel.port2.close();
}
assert.equal(ownerSignal.aborted, true, 'Owner cancellation must abort the active fetch immediately');
assert.equal(await cacheStorage.has(`myalquran-reading-en-${cancelPackage.version}`), false);
assert.equal((await (await pointers.match('/__offline-active/en')).json()).version, stalledVersion);
network.set(key(url), new Response(html));
reply = await message('download');
assert.equal(reply.type, 'complete', 'Cancellation must release the lock so another request can retry');
const clientPackage = { ...oldPackage, version: 'f'.repeat(20) };
network.set(key('/packages/en.json'), new Response(JSON.stringify(clientPackage)));
const clientFetchStarted = Promise.withResolvers();
network.set(key(url), ({ signal }) => {
  const pending = Promise.withResolvers();
  signal.addEventListener('abort', () => pending.reject(signal.reason), { once: true });
  clientFetchStarted.resolve(signal);
  return pending.promise;
});
const clientAbort = new AbortController();
const clientResult = assert.rejects(contract.exports.requestOffline('download', 'en', clientAbort.signal), /cancelled/);
const clientSignal = await clientFetchStarted.promise;
clientAbort.abort();
await clientResult;
const clientCleanupDeadline = setTimeout(() => { throw new Error('UI abort did not reach its worker request'); }, 1000);
try { await Promise.all(clientWork); } finally { clearTimeout(clientCleanupDeadline); }
assert.equal(clientSignal.aborted, true, 'UI transport abort must reach the owner worker fetch');
assert.equal(await cacheStorage.has(`myalquran-reading-en-${clientPackage.version}`), false);
assert.equal((await (await pointers.match('/__offline-active/en')).json()).version, cancelPackage.version);
network.set(key(url), new Response(html));
reply = await message('download');
assert.equal(reply.type, 'complete', 'Another request can download immediately after a UI abort');
// Restore the earlier active package for the independent navigation cases below.
await pointers.put('/__offline-active/en', new Response(JSON.stringify(nextPackage)));

network.clear();
async function navigate(path) {
  let response;
  handlers.get('fetch')({ request: { method: 'GET', mode: 'navigate', url: new URL(path, origin).href }, respondWith(value) { response = value; } });
  assert.ok(response, 'Worker must handle same-origin navigation');
  return response;
}
for (const path of ['/en/surat/1', '/en/surat/1/', '/en/surat/1/index.html?source=bookmark']) {
  const response = await navigate(path);
  assert.equal(response.status, 200, `Saved route alias must be readable: ${path}`);
  assert.equal(await response.text(), html, `Saved route alias must resolve to its reading: ${path}`);
}
const missing = await navigate('/en/surat/999/');
assert.equal(missing.status, 404, 'Unknown route in the saved locale must be a genuine 404');
assert.match(await missing.text(), /Page not found/);
stores.get(`myalquran-reading-en-${newVersion}`).delete(key(url));
const evicted = await navigate(url);
assert.equal(evicted.status, 503, 'A known but evicted reading is unavailable offline, not a missing page');
assert.match(await evicted.text(), /not saved offline/);
const otherLanguage = await navigate('/ja/surat/1/');
assert.equal(otherLanguage.status, 503, 'An unsaved language must not be called a 404 without its route catalog');
const assetURL = '/_astro/retained-reader.js';
const assetBody = 'console.log("retained reader")';
const assetResource = { url: assetURL, bytes: Buffer.byteLength(assetBody), hash: createHash('sha256').update(assetBody).digest('hex') };
const assetPackage = { locale: 'en', version: '9'.repeat(20), bytes: assetResource.bytes, resources: [assetResource] };
const assetCache = await cacheStorage.open(`myalquran-reading-en-${assetPackage.version}`);
await assetCache.put('/__offline-complete', new Response(JSON.stringify(assetPackage)));
await assetCache.put(assetURL, new Response(assetBody));
async function retainedAsset() {
  let response;
  handlers.get('fetch')({ request: { method: 'GET', mode: 'same-origin', url: new URL(assetURL, origin).href }, respondWith(value) { response = value; } });
  assert.ok(response, 'Worker must handle retained script requests');
  return response;
}
assert.equal(await (await retainedAsset()).text(), assetBody, 'Open tabs can load verified assets from a previous complete package');
await assetCache.put(assetURL, new Response('x'.repeat(assetResource.bytes)));
assert.equal((await retainedAsset()).type, 'error', 'Corrupted retained assets must not be delivered');
stores.clear();
const webmanifest = '{"name":"MyAlQuran","start_url":"/"}';
precached.set('/manifest.webmanifest', new Response(webmanifest, { headers: { 'Content-Type': 'application/manifest+json' } }));
const manifestResponse = Promise.withResolvers();
let manifestHandled = false;
handlers.get('fetch')({ request: { method: 'GET', mode: 'same-origin', url: new URL('/manifest.webmanifest', origin).href }, respondWith(value) { manifestHandled = true; manifestResponse.resolve(value); } });
assert.equal(manifestHandled, true, 'Worker must handle install metadata offline');
const manifestResult = await manifestResponse.promise;
assert.equal(manifestResult.status, 200, 'Install metadata must be available offline without a reading package');
assert.equal(await manifestResult.text(), webmanifest);
console.log('Offline safety OK: cached content/status integrity, verified repair, cross-worker exclusion, cancellation, stalled recovery, route aliases, 404/503.');
