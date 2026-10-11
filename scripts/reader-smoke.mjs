import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

const tab = process.argv[2];
if (!tab) throw new Error('Usage: node scripts/reader-smoke.mjs <sc-browser-tab-id> — open a deep-linked verse with saved 150% reading size first.');
const result = execFileSync('sc', ['browser', 'eval', `(async () => {
  const hash = location.hash;
  const state = {
    hash,
    scale: getComputedStyle(document.documentElement).getPropertyValue('--reading-scale'),
    top: document.querySelector(':target')?.getBoundingClientRect().top,
    verses: document.querySelectorAll('.verse').length,
    selected: document.querySelector('.reader-controls button[aria-pressed="true"]')?.textContent,
    overflow: document.documentElement.scrollWidth > innerWidth,
    settings: document.querySelector('.bottom-nav a[data-settings-link]')?.href
  };
  const frame = document.createElement('iframe');
  frame.hidden = true;
  const load = url => new Promise((resolve, reject) => {
    frame.onload = () => resolve(frame.contentDocument);
    frame.onerror = reject;
    frame.src = url;
  });
  document.body.append(frame);
  try {
    const settings = await load(state.settings);
    state.languagePage = settings.querySelector('[data-language-settings]')?.href;
    const language = await load(state.languagePage);
    state.links = [...language.querySelectorAll('a[data-locale-choice]')].map(link => ({ locale: link.dataset.localeChoice, path: new URL(link.href).pathname, hash: new URL(link.href).hash }));
  } finally { frame.remove(); }
  return JSON.stringify(state);
})()`, '--tab', tab], { encoding: 'utf8' });
// sc escapes its untrusted-content envelope as a JSON string; only parse the enclosed data.
const envelope = result.trim().startsWith('"') ? JSON.parse(result.trim()) : result;
const match = envelope.match(/<<<BEGIN UNTRUSTED CONTENT>>>\s*([\s\S]*?)\s*<<<END UNTRUSTED CONTENT>>>/);
assert.ok(match, 'Browser response must include a data envelope');
const state = JSON.parse(match[1]);
assert.match(state.hash, /^#ayat-\d+$/);
assert.equal(state.scale, '1.5', 'Saved large-text size must be applied');
assert.ok(Math.abs(state.top - 16) <= 2, `Deep-linked verse moved to ${state.top}px after hydration`);
assert.ok(state.verses > 0 && state.selected, 'Reader content and selected size must be present');
assert.match(state.settings, /\/pengaturan\/\?from=/, 'Reader settings must carry the deep-linked verse');
assert.match(state.languagePage, /\/bahasa\/\?from=/, 'Settings must carry the deep-linked verse to Bahasa');
assert.deepEqual(state.links.map(link => link.locale), ['id', 'en', 'ja', 'zh-Hans']);
const source = new URL(state.settings).searchParams.get('from');
assert.ok(state.links.every(link => link.path === source.replace(/^\/(id|en|ja|zh-Hans)\//, `/${link.locale}/`).split('#')[0] && link.hash === state.hash), 'Bahasa links must preserve the reader surah and verse across all four locales');
assert.equal(state.overflow, false, 'Reader must not overflow the observed viewport');
console.log(`Reader smoke OK: ${state.hash}, 150% text, ${state.top}px alignment, reader → settings → Bahasa → four anchored language URLs, no horizontal overflow.`);
