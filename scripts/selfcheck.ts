import assert from 'node:assert/strict';
import { localizedSurah, commentary, prayers, surahNumbers, locales } from '../src/lib/content.ts';

for (const n of surahNumbers) {
  const id = localizedSurah(n, 'id');
  for (const locale of locales) {
    const translated = localizedSurah(n, locale);
    assert.deepEqual(translated.verses.map(v => v.number), id.verses.map(v => v.number));
    assert.deepEqual(translated.verses.map(v => v.arabic), id.verses.map(v => v.arabic));
    assert.deepEqual(commentary(n, locale)!.map(v => v.number), translated.verses.map(v => v.number), `${locale}/${n}: commentary alignment`);
    assert.ok(translated.verses.every(v => typeof v.translation === 'string' && v.translation.trim().length > 0), `${locale}/${n}: incomplete verse translations`);
  }
}
assert.equal(localizedSurah(2, 'id').verses.at(-1)!.number, 286);
const instruction = prayers('id').find(p => p.id === 42)!;
assert.equal(/\p{Script=Arabic}/u.test(instruction.text), false);
assert.equal(instruction.latin, '');
assert.equal(instruction.translation, '');
assert.equal(prayers('id').find(p => p.id === 144)!.notes, '');
assert.throws(() => localizedSurah(115, 'id'), /Unknown surah/);
console.log('Reading invariants OK: all four verse translations, shared Arabic, numbering, commentary alignment, optional prayer fields, unknown IDs.');
