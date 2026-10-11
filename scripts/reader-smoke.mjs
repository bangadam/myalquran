import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

const tab = process.argv[2];
if (!tab) throw new Error('Usage: node scripts/reader-smoke.mjs <sc-browser-tab-id> — open a deep-linked verse with saved 150% reading size first.');
const result = execFileSync('sc', ['browser', 'eval', `JSON.stringify({
  hash: location.hash,
  scale: getComputedStyle(document.documentElement).getPropertyValue('--reading-scale'),
  top: document.querySelector(':target')?.getBoundingClientRect().top,
  verses: document.querySelectorAll('.verse').length,
  links: [...document.querySelectorAll('a[data-language-link]')].map(link => link.hash),
  selected: document.querySelector('.reader-controls button[aria-pressed="true"]')?.textContent,
  overflow: document.documentElement.scrollWidth > innerWidth
})`, '--tab', tab], { encoding: 'utf8' });
// sc escapes its untrusted-content envelope as a JSON string; only parse the enclosed data.
const envelope = result.trim().startsWith('"') ? JSON.parse(result.trim()) : result;
const match = envelope.match(/<<<BEGIN UNTRUSTED CONTENT>>>\s*([\s\S]*?)\s*<<<END UNTRUSTED CONTENT>>>/);
assert.ok(match, 'Browser response must include a data envelope');
const state = JSON.parse(match[1]);
assert.match(state.hash, /^#ayat-\d+$/);
assert.equal(state.scale, '1.5', 'Saved large-text size must be applied');
assert.ok(Math.abs(state.top - 16) <= 2, `Deep-linked verse moved to ${state.top}px after hydration`);
assert.ok(state.verses > 0 && state.selected, 'Reader content and selected size must be present');
assert.equal(state.links.length, 4);
assert.ok(state.links.every(hash => hash === state.hash), 'Language URLs must preserve the current verse before clicking');
assert.equal(state.overflow, false, 'Reader must not overflow the observed viewport');
console.log(`Reader smoke OK: ${state.hash}, 150% text, ${state.top}px alignment, four anchored language URLs, no horizontal overflow.`);
