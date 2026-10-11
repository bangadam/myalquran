import { z } from 'zod';
import dailyArchive from '../../data/qari/quran/daily-verses.json' with { type: 'json' };
import { localizedSurah, type Locale } from './content.ts';

const entrySchema = z.object({
  theme: z.string().min(1), surahNumber: z.number().int().min(1).max(114),
  ayahNumber: z.number().int().positive(),
  existingRef: z.object({ file: z.string().regex(/^data\/surat\/(?:[1-9]|[1-9]\d|1(?:0\d|1[0-4]))\.json$/), ayah: z.number().int().positive() }),
});
export type DailyVerseEntry = z.infer<typeof entrySchema>;
export const dailyVerseEntries: readonly DailyVerseEntry[] = z.array(entrySchema).length(15).parse(dailyArchive.data);
for (const entry of dailyVerseEntries) {
  if (entry.existingRef.file !== `data/surat/${entry.surahNumber}.json` || entry.existingRef.ayah !== entry.ayahNumber) {
    throw new Error(`Daily verse reference mismatch: ${entry.surahNumber}:${entry.ayahNumber}`);
  }
}

/** Select by UTC calendar date, independent of server timezone and time of day. */
export function selectDailyVerse(date: Date): DailyVerseEntry {
  if (!Number.isFinite(date.getTime())) throw new RangeError('Invalid daily verse date');
  const day = Math.floor(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) / 86_400_000);
  return dailyVerseEntries[((day % dailyVerseEntries.length) + dailyVerseEntries.length) % dailyVerseEntries.length];
}

/** Theme is archived Indonesian copy; religious text comes exclusively from the local validated SQLite content loader. */
export function dailyVerseForDate(date: Date, locale: Locale) {
  const entry = selectDailyVerse(date);
  const surah = localizedSurah(entry.surahNumber, locale);
  const verse = surah.verses.find(item => item.number === entry.existingRef.ayah);
  if (!verse?.arabic.trim()) throw new Error(`Missing local daily verse: ${entry.surahNumber}:${entry.existingRef.ayah}`);
  return {
    theme: entry.theme, themeLanguage: 'id' as const,
    surah: surah.number, surahName: surah.latin, ayah: verse.number,
    arabic: verse.arabic, translation: verse.translation,
    translationSource: surah.translationSource,
  };
}
