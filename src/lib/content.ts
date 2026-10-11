import { DatabaseSync } from 'node:sqlite';
import { createHash } from 'node:crypto';
import { z } from 'zod';

export const locales = ['id', 'en', 'ja', 'zh-Hans'] as const;
export type Locale = typeof locales[number];
export const localeNames: Record<Locale, string> = { id: 'Bahasa Indonesia', en: 'English', ja: '日本語', 'zh-Hans': '简体中文' };
const requiredText = z.string().refine(value => value.trim().length > 0, 'Empty required text');
const uiLabelsSchema = z.object({
  languageName: requiredText,
  quran: requiredText,
  prayers: requiredText,
  about: requiredText,
  offline: requiredText,
  language: requiredText,
  skip: requiredText,
  headline: requiredText,
  intro: requiredText,
  directory: requiredText,
  surahs: requiredText,
  verses: requiredText,
  readSurah: requiredText,
  back: requiredText,
  tafsir: requiredText,
  readTafsir: requiredText,
  backVerse: requiredText,
  previous: requiredText,
  next: requiredText,
  readingSize: requiredText,
  small: requiredText,
  medium: requiredText,
  large: requiredText,
  translation: requiredText,
  transliteration: requiredText,
  noSource: requiredText,
  missingTranslation: requiredText,
  missingTafsir: requiredText,
  readIndonesian: requiredText,
  arabicOnly: requiredText,
  offlineTitle: requiredText,
  saveOffline: requiredText,
  ready: requiredText,
  notSaved: requiredText,
  downloading: requiredText,
  downloadFailed: requiredText,
  retry: requiredText,
  updateAvailable: requiredText,
  updateNow: requiredText,
  notCached: requiredText,
  backReading: requiredText,
  unsupported: requiredText,
  install: requiredText,
  installHelp: requiredText,
  offlineScope: requiredText,
  storageWarning: requiredText,
  estimatedSize: requiredText,
  complete: requiredText,
  chooseLanguage: requiredText,
  notFound: requiredText,
  notFoundText: requiredText,
  aboutTitle: requiredText,
  aboutText: requiredText,
  rights: requiredText,
  updateDate: requiredText,
  availability: requiredText,
  availabilityText: requiredText,
  verse: requiredText,
  mecca: requiredText,
  medina: requiredText,
  available: requiredText,
  prayerDirectory: requiredText,
  notes: requiredText,
  otherLanguages: requiredText,
  oldPackage: requiredText,
  readUnderstand: requiredText,
  quiet: requiredText,
  menu: requiredText,
  search: requiredText,
  searchEmpty: requiredText,
  saved: requiredText,
  savedEmpty: requiredText,
  savedUnavailable: requiredText,
  saveVerse: requiredText,
  removeVerse: requiredText,
  resume: requiredText,
  lightTheme: requiredText,
  darkTheme: requiredText
});
export type Labels = z.infer<typeof uiLabelsSchema>;
const number = z.number().int().positive();
const metadata = z.object({ nomor: number, nama: requiredText, namaLatin: requiredText, jumlahAyat: number, tempatTurun: z.enum(['Mekah', 'Madinah']), arti: requiredText });
const surahSchema = metadata.extend({ ayat: z.array(z.object({ nomorAyat: number, teksArab: requiredText, teksLatin: requiredText, teksIndonesia: requiredText })) });
const tafsirSchema = z.object({ nomor: number, format: z.enum(['text', 'paragraph-html']).optional(), tafsir: z.array(z.object({ ayat: number, teks: requiredText })) });
const englishSchema = z.object({ number, englishNameTranslation: requiredText, ayahs: z.array(z.object({ numberInSurah: number, textEnglish: requiredText })) });
const prayerSchema = z.object({ id: number, nama: requiredText, grup: requiredText, ar: requiredText, tr: z.string(), idn: z.string(), tentang: z.string() });
const translatedSurahSchema = z.object({ nomor: number, arti: requiredText.optional(), ayat: z.array(z.object({ nomorAyat: number, terjemahan: requiredText, catatan: z.string().optional() })) });
const translatedPrayerSchema = z.array(z.object({ id: number, nama: requiredText, grup: requiredText, idn: z.string(), tentang: z.string() }));
const approvedSourceUrl = z.string().url().refine(value => {
  const url = new URL(value);
  return url.protocol === 'https:' && ['quranenc.com', 'qul.tarteel.ai', 'creativecommons.org'].includes(url.hostname) && !url.username && !url.password;
}, 'Expected an approved HTTPS attribution URL');
const translationSourceSchema = z.object({ publisher: requiredText, title: requiredText, description: requiredText, version: requiredText,
  url: approvedSourceUrl, termsUrl: approvedSourceUrl, sourceUpdatedAt: requiredText, importedAt: requiredText });
export type TranslationSource = z.infer<typeof translationSourceSchema>;
export interface Verse { number: number; arabic: string; latin: string; translation: string | null; translationNotes: string }
export interface Surah { number: number; name: string; latin: string; meaning: string | null; count: number; place: string; verses: Verse[]; translationSource: TranslationSource | null }
export interface Prayer { id: number; name: string; group: string; text: string; textLanguage: string; latin: string; translation: string; notes: string; language: string; notesLanguage: string }
const documents = new Map<string, unknown>();
const digest = createHash('sha256');
const database = new DatabaseSync('data/quran.sqlite', { readOnly: true });
try {
  for (const row of database.prepare("SELECT path, content FROM json_files WHERE path = 'surat.json' OR path = 'doa.json' OR path GLOB 'surat/*.json' OR path GLOB 'tafsir/*.json' OR path GLOB 'en/*.json' OR path GLOB 'locales/*' ORDER BY path").iterate()) {
    const path = String(row.path), content = String(row.content);
    try { documents.set(path, JSON.parse(content) as unknown); }
    catch { throw new Error(`Invalid JSON in SQLite: ${path}`); }
    digest.update(path).update(content);
  }
} finally { database.close(); }
export const contentVersion = digest.digest('hex').slice(0, 16);
function parse<T>(path: string, schema: z.ZodType<T>): T {
  const result = schema.safeParse(documents.get(path));
  if (!result.success) throw new Error(`SQLite ${path}: ${result.error.message}`);
  return result.data;
}
function sequence(values: number[], count: number, path: string) {
  if (values.length !== count || values.some((value, index) => value !== index + 1)) throw new Error(`Invalid verse sequence: ${path}`);
}
const listing = parse('surat.json', z.array(metadata));
sequence(listing.map(s => s.nomor), 114, 'surat.json');
export const surahNumbers = listing.map(s => s.nomor);
const surahs = new Map<number, z.infer<typeof surahSchema>>();
const tafsirs = new Map<number, z.infer<typeof tafsirSchema>>();
const english = new Map<number, z.infer<typeof englishSchema>>();
for (const item of listing) {
  const n = item.nomor;
  const detail = parse(`surat/${n}.json`, surahSchema);
  const tafsir = parse(`tafsir/${n}.json`, tafsirSchema);
  const translated = parse(`en/${n}.json`, englishSchema);
  if (detail.nomor !== n || tafsir.nomor !== n || translated.number !== n) throw new Error(`Surah identity mismatch: ${n}`);
  for (const field of ['nama', 'namaLatin', 'jumlahAyat', 'tempatTurun', 'arti'] as const) {
    if (detail[field] !== item[field]) throw new Error(`Surah metadata mismatch: surat/${n}.json.${field}`);
  }
  sequence(detail.ayat.map(v => v.nomorAyat), item.jumlahAyat, `surat/${n}`);
  sequence(tafsir.tafsir.map(v => v.ayat), item.jumlahAyat, `tafsir/${n}`);
  sequence(translated.ayahs.map(v => v.numberInSurah), item.jumlahAyat, `en/${n}`);
  surahs.set(n, detail); tafsirs.set(n, tafsir); english.set(n, translated);
}
const localeSurahs = new Map<string, z.infer<typeof translatedSurahSchema>>();
const localeCommentaries = new Map<string, z.infer<typeof tafsirSchema>>();
for (const locale of locales) {
  for (const n of surahNumbers) {
    const count = surahs.get(n)!.jumlahAyat;
    const surahPath = `locales/${locale}/surat/${n}.json`;
    if (documents.has(surahPath)) {
      const translated = parse(surahPath, translatedSurahSchema);
      if (translated.nomor !== n) throw new Error(`Locale surah mismatch: ${surahPath}`);
      sequence(translated.ayat.map(v => v.nomorAyat), count, surahPath);
      localeSurahs.set(surahPath, translated);
    }
    const tafsirPath = `locales/${locale}/tafsir/${n}.json`;
    if (documents.has(tafsirPath)) {
      const translated = parse(tafsirPath, tafsirSchema);
      if (translated.nomor !== n) throw new Error(`Commentary identity mismatch: ${tafsirPath}`);
      sequence(translated.tafsir.map(v => v.ayat), count, tafsirPath);
      localeCommentaries.set(tafsirPath, translated);
    }
  }
}
const translationSources = new Map<Locale, TranslationSource>();
const commentarySources = new Map<Locale, TranslationSource>();
for (const locale of locales) {
  const path = `locales/${locale}/source.json`;
  if (documents.has(path)) translationSources.set(locale, parse(path, translationSourceSchema));
  const tafsirPath = `locales/${locale}/tafsir-source.json`;
  if (documents.has(tafsirPath)) commentarySources.set(locale, parse(tafsirPath, translationSourceSchema));
}
const prayerSource = parse('doa.json', z.array(prayerSchema));
if (new Set(prayerSource.map(p => p.id)).size !== prayerSource.length) throw new Error('Duplicate prayer IDs');
export const prayerIds = prayerSource.map(p => p.id);
const dictionaries = new Map<Locale, Labels>();
for (const locale of locales) {
  dictionaries.set(locale, parse(`locales/${locale}/ui.json`, uiLabelsSchema));
}
export function labels(locale: Locale): Labels {
  const dictionary = dictionaries.get(locale);
  if (!dictionary) throw new Error(`Unknown UI locale: ${locale}`);
  return dictionary;
}
export function isLocale(value: string | undefined): value is Locale { return locales.includes(value as Locale); }
export function localizedSurah(n: number, locale: Locale): Surah {
  const source = surahs.get(n), en = english.get(n);
  if (!source || !en) throw new Error(`Unknown surah: ${n}`);
  const path = `locales/${locale}/surat/${n}.json`;
  const local = localeSurahs.get(path);
  return { number: n, name: source.nama, latin: source.namaLatin, meaning: locale === 'id' ? source.arti : locale === 'en' ? en.englishNameTranslation : local?.arti ?? null,
    count: source.jumlahAyat, place: source.tempatTurun, translationSource: translationSources.get(locale) ?? null,
    verses: source.ayat.map((v, i) => ({ number: v.nomorAyat, arabic: v.teksArab, latin: v.teksLatin,
      translation: locale === 'id' ? v.teksIndonesia : locale === 'en' ? en.ayahs[i].textEnglish : local?.ayat[i].terjemahan ?? null,
      translationNotes: local?.ayat[i].catatan ?? '' })) };
}
export function surahDirectory(locale: Locale) {
  return listing.map(s => {
    const path = `locales/${locale}/surat/${s.nomor}.json`;
    const local = localeSurahs.get(path);
    return { number: s.nomor, name: s.nama, latin: s.namaLatin, count: s.jumlahAyat, place: s.tempatTurun,
      meaning: locale === 'id' ? s.arti : locale === 'en' ? english.get(s.nomor)!.englishNameTranslation : local?.arti ?? null };
  });
}
export function translationSource(locale: Locale): TranslationSource | null {
  return translationSources.get(locale) ?? null;
}
export function commentarySource(locale: Locale): TranslationSource | null {
  return commentarySources.get(locale) ?? null;
}
export function commentary(n: number, locale: Locale): { number: number; text: string }[] | null {
  const path = `locales/${locale}/tafsir/${n}.json`;
  const source = locale === 'id' ? tafsirs.get(n) : localeCommentaries.get(path);
  if (!source) return null;
  return source.tafsir.map(v => ({ number: v.ayat, text: source.format === 'paragraph-html' ? v.teks.replace(/<\/?p>/g, '\n') : v.teks }));
}
export function prayers(locale: Locale): Prayer[] {
  const path = `locales/${locale}/doa.json`;
  const local = documents.has(path) ? parse(path, translatedPrayerSchema) : null;
  if (local && (local.length !== prayerSource.length || new Set(local.map(p => p.id)).size !== local.length || local.some(p => !prayerIds.includes(p.id)))) throw new Error(`Prayer identity mismatch: ${path}`);
  const translated = new Map(local?.map(p => [p.id, p]));
  if (local) {
    for (const source of prayerSource) {
      const entry = translated.get(source.id)!;
      if (((source.idn.trim() || !/\p{Script=Arabic}/u.test(source.ar)) && !entry.idn.trim()) || (source.tentang.trim() && !entry.tentang.trim())) throw new Error(`Incomplete prayer translation: ${path}:${source.id}`);
    }
  }
  return prayerSource.map(p => {
    const t = translated.get(p.id), arabic = /\p{Script=Arabic}/u.test(p.ar);
    return { id: p.id, name: t?.nama ?? p.nama, group: t?.grup ?? p.grup,
      text: !arabic && t ? t.idn : p.ar, textLanguage: arabic ? 'ar' : t ? locale : 'id', latin: p.tr,
      translation: !arabic ? '' : locale === 'id' ? p.idn : t?.idn ?? '', notes: t?.tentang ?? p.tentang,
      language: t || locale === 'id' ? locale : 'id', notesLanguage: t ? locale : 'id' };
  });
}

export function contentAvailability(locale: Locale) {
  const localPrayers = prayers(locale);
  return {
    surahs: locale === 'id' || locale === 'en' ? surahNumbers.length : surahNumbers.filter(n => localeSurahs.has(`locales/${locale}/surat/${n}.json`)).length,
    commentary: locale === 'id' ? surahNumbers.length : surahNumbers.filter(n => localeCommentaries.has(`locales/${locale}/tafsir/${n}.json`)).length,
    prayers: localPrayers.filter(prayer => prayer.language === locale).length,
    totalSurahs: surahNumbers.length, totalPrayers: prayerIds.length
  };
}
export function releaseMissing(): string[] {
  const missing: string[] = [];
  for (const locale of locales) {
    for (const n of surahNumbers) {
      localizedSurah(n, locale); commentary(n, locale);
      if ((locale === 'ja' || locale === 'zh-Hans') && !localeSurahs.has(`locales/${locale}/surat/${n}.json`)) missing.push(`${locale}/surat/${n}`);
      if (locale !== 'id' && !localeCommentaries.has(`locales/${locale}/tafsir/${n}.json`)) missing.push(`${locale}/tafsir/${n}`);
    }
    prayers(locale);
    if (locale !== 'id' && !documents.has(`locales/${locale}/doa.json`)) missing.push(`${locale}/doa`);
  }
  return missing;
}
