import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { mkdtemp, mkdir, copyFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const temporary = await mkdtemp(join(tmpdir(), 'myalquran-translation-check-'));
const original = new URL('../data/quran.sqlite', import.meta.url);
const originalHash = createHash('sha256').update(await readFile(original)).digest('hex');
try {
  await mkdir(join(temporary, 'data'));
  await copyFile(new URL('../data/quran.sqlite', import.meta.url), join(temporary, 'data/quran.sqlite'));
  const database = new DatabaseSync(join(temporary, 'data/quran.sqlite'));
  const source = JSON.parse(database.prepare("SELECT content FROM json_files WHERE path = 'doa.json'").get().content);
  const translated = source.map(prayer => ({ id: prayer.id, nama: `TEST title ${prayer.id}`, grup: 'TEST group', idn: prayer.idn || !/\p{Script=Arabic}/u.test(prayer.ar) ? `TEST translation ${prayer.id}` : '', tentang: prayer.tentang ? `TEST notes ${prayer.id}` : '' }));
  const insert = database.prepare('INSERT INTO json_files(path, content) VALUES (?, ?) ON CONFLICT(path) DO UPDATE SET content = excluded.content');
  database.prepare("DELETE FROM json_files WHERE path = 'locales/en/doa.json'").run();
  database.prepare("DELETE FROM json_files WHERE path GLOB 'locales/ja/surat/*.json' OR path GLOB 'locales/ja/tafsir/*.json'").run();
  const module = new URL('../src/lib/content.ts', import.meta.url).href;
  const check = code => spawnSync(process.execPath, ['--experimental-strip-types', '--input-type=module', '-e', `import assert from 'node:assert/strict'; import { prayers, contentAvailability, localizedSurah } from ${JSON.stringify(module)}; ${code}`], { cwd: temporary, encoding: 'utf8' });
  let result = check("assert.equal(contentAvailability('en').prayers, 0); assert.equal(contentAvailability('id').prayers, 227);");
  assert.equal(result.status, 0, result.stderr);
  insert.run('locales/en/doa.json', JSON.stringify(translated));
  result = check("const entries = prayers('en'); const prayer = entries.find(p => p.id === 1); assert.equal(prayer.translation, 'TEST translation 1'); assert.equal(prayer.language, 'en'); assert.equal(contentAvailability('en').prayers, 227); const instruction = entries.find(p => p.id === 42); assert.equal(instruction.text, 'TEST translation 42'); assert.equal(instruction.textLanguage, 'en'); assert.equal(instruction.translation, ''); assert.equal(entries.find(p => p.id === 144).notes, '');");
  assert.equal(result.status, 0, result.stderr);
  translated.find(prayer => prayer.id === 1).idn = '';
  insert.run('locales/en/doa.json', JSON.stringify(translated));
  result = check("assert.throws(() => prayers('en'), /Incomplete prayer translation/, 'Empty translated text must not silently count as complete');");
  assert.equal(result.status, 0, result.stderr);
  translated.find(prayer => prayer.id === 1).idn = 'TEST translation 1';
  translated.find(prayer => prayer.id === 1).tentang = '   ';
  insert.run('locales/en/doa.json', JSON.stringify(translated));
  result = check("assert.throws(() => prayers('en'), /Incomplete prayer translation/, 'Required translated notes must not be dropped');");
  assert.equal(result.status, 0, result.stderr);
  database.prepare("DELETE FROM json_files WHERE path = 'locales/en/doa.json'").run();
  const originalSurah = JSON.parse(database.prepare("SELECT content FROM json_files WHERE path = 'surat/1.json'").get().content);
  for (const [field, value] of [['jumlahAyat', 8], ['tempatTurun', 'Unknown place']]) {
    insert.run('surat/1.json', JSON.stringify({ ...originalSurah, [field]: value }));
    result = check("prayers('id');");
    assert.notEqual(result.status, 0, `Invalid surat ${field} must fail content ingestion`);
    assert.match(result.stderr, /surat\/1|Surah metadata mismatch/);
  }
  insert.run('surat/1.json', JSON.stringify(originalSurah));
  const localized = { nomor: 1, ayat: originalSurah.ayat.map(verse => ({ nomorAyat: verse.nomorAyat, terjemahan: `TEST translation ${verse.nomorAyat}`, catatan: verse.nomorAyat === 1 ? ' TEST notes preserved\n ' : '' })) };
  insert.run('locales/ja/surat/1.json', JSON.stringify({ ...localized, nomor: 2 }));
  result = check("contentAvailability('ja');");
  assert.notEqual(result.status, 0, 'Wrong locale surat identity must not increase available coverage');
  assert.match(result.stderr, /Locale surah mismatch/);
  insert.run('locales/ja/surat/1.json', JSON.stringify({ ...localized, ayat: localized.ayat.map((verse, index) => ({ ...verse, nomorAyat: index === 1 ? 1 : verse.nomorAyat })) }));
  result = check("contentAvailability('ja');");
  assert.notEqual(result.status, 0, 'Duplicate translated verses must not count as available');
  assert.match(result.stderr, /Invalid verse sequence/);
  insert.run('locales/ja/surat/1.json', JSON.stringify(localized));
  result = check("assert.equal(contentAvailability('ja').surahs, 1); const surah = localizedSurah(1, 'ja'); assert.equal(surah.meaning, null); assert.equal(surah.verses[0].translationNotes, ' TEST notes preserved\\n ');");
  assert.equal(result.status, 0, result.stderr);
  const localTafsir = { nomor: 1, tafsir: originalSurah.ayat.map(verse => ({ ayat: verse.nomorAyat, teks: `TEST commentary ${verse.nomorAyat}` })) };
  insert.run('locales/ja/tafsir/1.json', JSON.stringify({ ...localTafsir, nomor: 2 }));
  result = check("contentAvailability('ja');");
  assert.notEqual(result.status, 0, 'Wrong commentary identity must not count as available');
  assert.match(result.stderr, /Commentary identity mismatch/);
  insert.run('locales/ja/tafsir/1.json', JSON.stringify(localTafsir));
  result = check("assert.equal(contentAvailability('ja').surahs, 1); assert.equal(contentAvailability('ja').commentary, 1);");
  assert.equal(result.status, 0, result.stderr);
  const uiRows = database.prepare("SELECT path, content FROM json_files WHERE path GLOB 'locales/*/ui.json'").all();
  for (const row of uiRows) {
    const dictionary = JSON.parse(row.content);
    delete dictionary.retry;
    insert.run(row.path, JSON.stringify(dictionary));
  }
  result = check("prayers('id');");
  assert.notEqual(result.status, 0, 'Removing a required label from every locale must fail instead of creating blank controls');
  assert.match(result.stderr, /ui\.json[\s\S]*retry/);
  for (const row of uiRows) insert.run(row.path, row.content);
  const japaneseUI = uiRows.find(row => row.path === 'locales/ja/ui.json');
  for (const value of ['   ', 123]) {
    const dictionary = JSON.parse(japaneseUI.content);
    dictionary.language = value;
    insert.run(japaneseUI.path, JSON.stringify(dictionary));
    result = check("prayers('id');");
    assert.notEqual(result.status, 0, 'Blank or non-string language labels must fail ingestion');
    assert.match(result.stderr, /locales\/ja\/ui\.json[\s\S]*language/);
  }
  insert.run(japaneseUI.path, japaneseUI.content);
  const sourceRow = database.prepare("SELECT content FROM json_files WHERE path = 'locales/ja/source.json'").get();
  assert.ok(sourceRow, 'Expected a published attribution record');
  for (const [field, value] of [['url', 'javascript:alert(1)'], ['termsUrl', 'https://quranenc.com.evil.example/terms'], ['url', 'https://user:pass@quranenc.com/']]) {
    insert.run('locales/ja/source.json', JSON.stringify({ ...JSON.parse(sourceRow.content), [field]: value }));
    result = check("prayers('id');");
    assert.notEqual(result.status, 0, `Unapproved attribution ${field} must fail ingestion`);
    assert.match(result.stderr, /locales\/ja\/source\.json/);
  }
  insert.run('locales/ja/source.json', sourceRow.content);
  result = check("assert.equal(contentAvailability('id').surahs, 114);");
  assert.equal(result.status, 0, result.stderr);
  database.close();
  assert.equal(createHash('sha256').update(await readFile(original)).digest('hex'), originalHash);
  console.log('Content integrity OK: prayer/surat/locale contracts, shared missing UI labels, blank and malformed labels. Original SQLite untouched.');
} finally { await rm(temporary, { recursive: true, force: true }); }
