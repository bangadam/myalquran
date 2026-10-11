import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

const tab = process.argv[2];
if (!tab) throw new Error('Usage: node scripts/shell-smoke.mjs <sc-browser-tab-id> — open /id/bahasa/ on a fresh origin, wait for worker activation, then stop the origin. Do not download a language package.');
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
    path: location.pathname,
    worker: Boolean(navigator.serviceWorker.controller),
    readingsCaches: (await caches.keys()).filter(name => name.startsWith('myalquran-reading-')),
    responses,
    width: document.querySelector('.app-shell')?.getBoundingClientRect().width,
    viewport: innerWidth,
    overflow: document.documentElement.scrollWidth > innerWidth,
    mascot: Boolean(document.querySelector('.cat-mascot svg,.cat-mascot img')),
    languages: [...document.querySelectorAll('main .prayer-list a[data-locale-choice]')].map(link => link.lang),
    availability: document.querySelectorAll('main .availability section').length
  });
})()`, '--tab', tab], { encoding: 'utf8' });
const envelope = result.trim().startsWith('"') ? JSON.parse(result.trim()) : result;
const match = envelope.match(/<<<BEGIN UNTRUSTED CONTENT>>>\s*([\s\S]*?)\s*<<<END UNTRUSTED CONTENT>>>/);
assert.ok(match, 'Browser response must include a data envelope');
const state = JSON.parse(match[1]);
assert.equal(state.path, '/id/bahasa/', 'Open the relocated four-language picker for this shell check');
assert.equal(state.worker, true);
assert.deepEqual(state.readingsCaches, [], 'Initial shell must not require a downloaded reading package');
assert.ok(state.responses.some(resource => resource.url.endsWith('.css')), 'Shell stylesheet must be exercised');
assert.ok(state.responses.some(resource => resource.url.endsWith('.js')), 'Shell scripts must be exercised');
assert.deepEqual(state.responses.filter(resource => !resource.ok), [], 'Every shell asset must work with no-store requests while the origin is stopped');
assert.equal(state.width, Math.min(480, state.viewport));
assert.equal(state.overflow, false);
assert.equal(state.mascot, false, 'The v2 shell has no cat mascot on the language page');
assert.deepEqual(state.languages, ['id', 'en', 'ja', 'zh-Hans']);
assert.equal(state.availability, 4, 'The language page retains coverage for all four locales');
console.log(`Initial offline shell OK: ${state.responses.length} assets fetched without HTTP cache, no reading package, four language links and availability sections, no mascot, mobile-width layout.`);
