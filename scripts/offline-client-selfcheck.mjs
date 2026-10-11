import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';
import { z } from 'zod';

let replies = [];
const ports = [];
const worker = {
  postMessage(_request, [port]) {
    ports.push(port);
    for (const reply of replies) port.postMessage(reply);
  }
};
const contract = { exports: {} };
vm.runInNewContext(ts.transpileModule(await readFile(new URL('../src/lib/offline.ts', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
}).outputText, {
  exports: contract.exports,
  window: { setTimeout, clearTimeout },
  navigator: { serviceWorker: { ready: Promise.resolve({ active: worker }) } },
  MessageChannel,
  require(name) { if (name === 'zod') return { z }; throw new Error(`Unexpected dependency: ${name}`); }
});
const packageInfo = { locale: 'en', version: 'a'.repeat(20), bytes: 5,
  resources: [{ url: '/en/surat/1/', bytes: 5, hash: 'b'.repeat(64) }] };
const progress = (completed, total) => ({ type: 'progress', completed, total });
async function request(type, messages, onProgress) {
  replies = messages;
  const controller = new AbortController();
  try { return await contract.exports.requestOffline(type, 'en', controller.signal, onProgress); }
  finally {
    controller.abort();
    for (const port of ports.splice(0)) port.close();
  }
}

await assert.rejects(request('status', [{ type: 'status', package: { ...packageInfo, locale: 'ja' }, available: null }]), /locale/i, 'A saved package in a different language must not set readiness');
await assert.rejects(request('status', [{ type: 'status', package: null, available: { ...packageInfo, locale: 'id' } }]), /locale/i, 'An available package in a different language must not offer an update');
await assert.rejects(request('download', [{ type: 'complete', package: { ...packageInfo, locale: 'zh-Hans' } }]), /locale/i, 'Completion must belong to the requested language');
await assert.rejects(request('download', [progress(1, 2), progress(0, 2), { type: 'complete', package: packageInfo }]), /progress/i, 'Progress cannot move backward');
await assert.rejects(request('download', [progress(0, 2), progress(1, 3), { type: 'complete', package: packageInfo }]), /progress/i, 'Progress total must stay stable');
await assert.rejects(request('download', [progress(0, 1), { type: 'complete', package: packageInfo }]), /progress|complete/i, 'Completion cannot precede the announced resource count');
await assert.rejects(request('download', [progress(2, 2), { type: 'complete', package: packageInfo }]), /progress|complete/i, 'Completion resource count must match progress');
const seen = [];
const completed = await request('download', [progress(0, 1), progress(0, 1), progress(1, 1), { type: 'complete', package: packageInfo }], (count, total) => seen.push([count, total]));
assert.equal(completed.package.locale, 'en');
assert.deepEqual(seen, [[0, 1], [0, 1], [1, 1]], 'Stable duplicate progress remains valid');
const cached = await request('download', [{ type: 'complete', package: packageInfo }]);
assert.equal(cached.package.version, packageInfo.version, 'Already-saved completion needs no new download progress');
const offline = await request('status', [{ type: 'status', package: packageInfo, available: null }]);
assert.equal(offline.package.locale, 'en');
assert.equal(offline.available, null);
console.log('Offline client OK: requested locale, monotonic/stable progress, complete resource counts, cached fast path, offline status.');
