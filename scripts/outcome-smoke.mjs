import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { DatabaseSync } from 'node:sqlite';

const [tab, expected] = process.argv.slice(2);
if (!tab || !['failed', 'ready'].includes(expected)) throw new Error('Usage: node scripts/outcome-smoke.mjs <sc-browser-tab-id> failed|ready — run on an Offline page after a download settles.');
const result = execFileSync('sc', ['browser', 'eval', `(async () => {
  const locale = location.pathname.split('/')[1];
  const settled = Promise.withResolvers();
  const matchesOutcome = () => {
    const button = document.querySelector('main button');
    const status = document.querySelector('[role="status"]')?.textContent;
    return button && !document.querySelector('[role="progressbar"]') && (${JSON.stringify(expected)} === 'failed'
      ? !button.disabled
      : button.disabled && button.textContent === status && document.querySelector('main [data-slot="alert-title"]')?.textContent === status);
  };
  const observer = new MutationObserver(() => { if (matchesOutcome()) settled.resolve(); });
  observer.observe(document.querySelector('main'), { childList: true, subtree: true, attributes: true, characterData: true });
  const deadline = setTimeout(() => settled.reject(new Error('Download outcome did not settle')), 35000);
  if (matchesOutcome()) settled.resolve();
  try { await settled.promise; } finally { clearTimeout(deadline); observer.disconnect(); }
  const pointers = await caches.open('myalquran-package-pointers');
  const stored = await pointers.match('/__offline-active/' + locale);
  const value = stored ? await stored.json() : null;
  let complete = false;
  if (value) {
    const cache = await caches.open('myalquran-reading-' + locale + '-' + value.version);
    complete = true;
    for (const resource of value.resources) {
      const response = await cache.match(resource.url);
      if (!response?.ok) { complete = false; break; }
      const bytes = await response.arrayBuffer();
      const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)), byte => byte.toString(16).padStart(2, '0')).join('');
      if (bytes.byteLength !== resource.bytes || hash !== resource.hash) { complete = false; break; }
    }
  }
  const button = document.querySelector('main button');
  return JSON.stringify({ locale, complete,
    alert: document.querySelector('main [data-slot="alert-title"]')?.textContent,
    status: document.querySelector('[role="status"]')?.textContent,
    button: button?.textContent, disabled: button?.disabled,
    progress: Boolean(document.querySelector('[role="progressbar"]')) });
})()`, '--tab', tab], { encoding: 'utf8' });
const envelope = result.trim().startsWith('"') ? JSON.parse(result.trim()) : result;
const match = envelope.match(/<<<BEGIN UNTRUSTED CONTENT>>>\s*([\s\S]*?)\s*<<<END UNTRUSTED CONTENT>>>/);
assert.ok(match, 'Browser response must include a data envelope');
const state = JSON.parse(match[1]);
assert.ok(['id', 'en', 'ja', 'zh-Hans'].includes(state.locale));
const database = new DatabaseSync('data/quran.sqlite', { readOnly: true });
let labels;
try { labels = JSON.parse(database.prepare('SELECT content FROM json_files WHERE path = ?').get(`locales/${state.locale}/ui.json`).content); }
finally { database.close(); }
assert.equal(state.progress, false, 'Settled download must not retain progress');
assert.equal(state.alert, state.complete ? labels.ready : labels.notSaved, 'Readiness alert must agree with verified cache completeness');
if (expected === 'failed') {
  assert.equal(state.status, labels.downloadFailed, 'Actual download failure must remain visible');
  assert.equal(state.button, labels.retry);
  assert.equal(state.disabled, false, 'Retry must be available after reconciliation');
} else {
  assert.equal(state.complete, true);
  assert.equal(state.status, labels.ready);
  assert.equal(state.button, labels.ready);
  assert.equal(state.disabled, true);
}
console.log(`Download outcome smoke OK: ${expected}, cache complete=${state.complete}, truthful alert, settled progress, correct retry control.`);
