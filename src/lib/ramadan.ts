import prayerArchive from '../../data/qari/ramadan/prayers-new.json';
import usageArchive from '../../data/qari/ramadan/prayer-usage.json';
import amalArchive from '../../data/qari/ramadan/amal-tasks.json';
import defaultsArchive from '../../data/qari/ramadan/khatam-defaults.json';
import milestonesArchive from '../../data/qari/ramadan/khatam-milestones.json';

export interface ArchivedPrayer {
  id: string;
  title: string;
  arabic: string;
  latin: string;
  translation: string;
  when: string;
}
export interface PrayerUsage {
  id: string;
  category: string;
  title: string;
  when: string;
  newRef?: string;
  existingRef?: { file: string; id?: number; ayah?: number; relation?: string };
}
export interface AmalTask { id: string; label: string; category: string; labelAlt?: string }
export interface KhatamDefaults {
  targetKhatam: number;
  currentPage: number;
  totalPages: number;
  targetPerDay: number;
  lastReadDate: string | null;
  streak: number;
  longestStreak: number;
}
export interface KhatamMilestone { pages: number; label: string }

export const archivedPrayers: readonly ArchivedPrayer[] = prayerArchive.data;
export const prayerUsage: readonly PrayerUsage[] = usageArchive.data;
export const amalTasks: readonly AmalTask[] = amalArchive.data;
export const khatamDefaults: KhatamDefaults = defaultsArchive.data;
export const khatamMilestones: readonly KhatamMilestone[] = milestonesArchive.data;

export type RamadanPrayer =
  | { kind: 'new'; usage: PrayerUsage; prayer: ArchivedPrayer }
  | { kind: 'existing-prayer'; usage: PrayerUsage; prayerId: number }
  | { kind: 'quran-excerpt'; usage: PrayerUsage; surah: number; ayah: number };

export function ramadanPrayers(): RamadanPrayer[] {
  const newById = new Map(archivedPrayers.map(prayer => [prayer.id, prayer]));
  const entries = prayerUsage.map((usage): RamadanPrayer => {
    if (usage.newRef) {
      const prayer = newById.get(usage.id);
      if (!prayer || usage.newRef !== `ramadan/prayers-new.json#${usage.id}` || usage.existingRef) throw new Error(`Invalid archived Ramadan prayer reference: ${usage.id}`);
      return { kind: 'new', usage, prayer };
    }
    if (usage.existingRef?.file === 'data/doa.json' && usage.existingRef.id) return { kind: 'existing-prayer', usage, prayerId: usage.existingRef.id };
    if (usage.existingRef?.file === 'data/surat/23.json' && usage.existingRef.ayah === 118) return { kind: 'quran-excerpt', usage, surah: 23, ayah: 118 };
    throw new Error(`Unknown archived Ramadan prayer reference: ${usage.id}`);
  });
  if (newById.size !== entries.filter(entry => entry.kind === 'new').length) throw new Error('Unclassified archived Ramadan prayer');
  return entries;
}

