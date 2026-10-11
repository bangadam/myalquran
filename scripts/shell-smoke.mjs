import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

const tab = process.argv[2];
if (!tab) throw new Error('Usage: node scripts/shell-smoke.mjs <sc-browser-tab-id> — open / on a fresh origin, wait for worker activation, then stop the origin. Do not download a language package.');
const result = execFileSync('sc', ['browser', 'eval', `(async () => {
  const resources = new Set([
    ...document.querySelectorAll('link[rel="stylesheet"],link[rel="modulepreload"],link[rel="icon"],link[rel="manifest"],link[rel="apple-touch-icon"]')
  ].map(link => link.href));
  for (const script of document.querySelectorAll('script[src]')) resources.add(script.src);
  for (const resource of performance.getEntriesByType('resource')) {
    const url = new URL(resource.name);
    if (url.origin === location.origin && url.pathname.startsWith('/_astro/')) resources.add(url.href);
  }
  const responses = [];
  for (const url of resources) {
    try { const response = await fetch(url, { cache: 'no-store' }); responses.push({ url, ok: response.ok, status: response.status }); }
    catch (error) { responses.push({ url, ok: false, error: String(error) }); }
  }
  return JSON.stringify({
    worker: Boolean(navigator.serviceWorker.controller),
    readingsCaches: (await caches.keys()).filter(name => name.startsWith('myalquran-reading-')),
    responses,
    width: document.querySelector('.app-shell')?.getBoundingClientRect().width,
    viewport: innerWidth,
    overflow: document.documentElement.scrollWidth > innerWidth,
    mascot: Boolean(document.querySelector('.cat-mascot svg,.cat-mascot img')),
    languages: [...document.querySelectorAll('main .prayer-list a')].map(link => link.lang)
  });
})()`, '--tab', tab], { encoding: 'utf8' });
const envelope = result.trim().startsWith('"') ? JSON.parse(result.trim()) : result;
const match = envelope.match(/<<<BEGIN UNTRUSTED CONTENT>>>\s*([\s\S]*?)\s*<<<END UNTRUSTED CONTENT>>>/);
assert.ok(match, 'Browser response must include a data envelope');
const state = JSON.parse(match[1]);
assert.equal(state.worker, true);
assert.deepEqual(state.readingsCaches, [], 'Initial shell must not require a downloaded reading package');
assert.ok(state.responses.some(resource => resource.url.endsWith('.css')), 'Shell stylesheet must be exercised');
assert.ok(state.responses.some(resource => resource.url.endsWith('.js')), 'Shell scripts must be exercised');
assert.deepEqual(state.responses.filter(resource => !resource.ok), [], 'Every shell asset must work with no-store requests while the origin is stopped');
assert.equal(state.width, Math.min(480, state.viewport));
assert.equal(state.overflow, false);
assert.equal(state.mascot, true);
assert.deepEqual(state.languages, ['id', 'en', 'ja', 'zh-Hans']);
console.log(`Initial offline shell OK: ${state.responses.length} assets fetched without HTTP cache, no reading package, four language links, mascot, mobile-width layout.`);
