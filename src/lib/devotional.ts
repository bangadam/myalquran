import { z } from 'zod';
import { prayers } from './content';
import dhikrArchive from '../../data/qari/tasbih/dhikr.json';
import calendarArchive from '../../data/qari/calendar/snapshot-1448.json';
import monthArchive from '../../data/qari/calendar/months.json';
import weekdayArchive from '../../data/qari/calendar/weekdays.json';
import eventArchive from '../../data/qari/calendar/events.json';
import qiblaArchive from '../../data/qari/qibla/calculation.json';
import mosqueArchive from '../../data/qari/mosques/snapshot-jakarta-5km.json';

const required = z.string().min(1);
const presetSchema = z.object({ id: required, name: required, target: z.number().int().positive(), fadhilah: required, arabic: required.optional(), latin: required.optional(), translation: required.optional(), existingRef: z.object({ id: z.number().int().positive() }).optional() });
const presets = z.array(presetSchema).length(8).parse(dhikrArchive.data);
const doaById = new Map(prayers('id').map(entry => [entry.id, entry]));
export const dhikr = presets.map(preset => {
  const source = preset.existingRef ? doaById.get(preset.existingRef.id) : undefined;
  if (preset.existingRef && !source) throw new Error(`Missing archived dhikr reference ${preset.id}`);
  const arabic = preset.arabic ?? source?.text;
  const latin = preset.latin ?? source?.latin;
  const translation = preset.translation ?? source?.translation;
  if (!arabic || !latin || !translation) throw new Error(`Incomplete dhikr ${preset.id}`);
  return { id: preset.id, name: preset.name, arabic, latin, translation, target: preset.target, virtue: preset.fadhilah };
});

const dateSchema = z.object({ hijri: z.object({ day: z.coerce.number().int().min(1).max(30), month: z.object({ number: z.number().int().min(1).max(12) }), year: z.literal('1448') }), gregorian: z.object({ date: z.string().regex(/^\d{2}-\d{2}-\d{4}$/) }) });
const monthSchema = z.object({ month: z.number().int().min(1).max(12), year: z.literal(1448), data: z.array(dateSchema).min(29).max(30) });
export const hijriMonths = z.array(monthSchema).length(12).parse(calendarArchive.data);
export const monthNames = z.array(z.object({ number: z.number().int(), en: required, ar: required })).length(12).parse(monthArchive.data);
export const weekdayNames = z.array(z.object({ name: required, full: required })).length(7).parse(weekdayArchive.data);
export const hijriEvents = z.array(z.object({ month: z.number().int(), day: z.union([z.number().int(), z.array(z.number().int())]), name: required, nameId: required })).parse(eventArchive.data);
export function hijriMonth(month: number, year = 1448) { return year === 1448 ? hijriMonths.find(item => item.month === month) ?? null : null; }
export function gregorianDate(raw: string) { const [day, month, year] = raw.split('-').map(Number); return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`; }

const calc = z.object({ kaaba: z.object({ latitude: z.number(), longitude: z.number() }), earthRadiusKm: z.number().positive(), alignmentToleranceDegrees: z.number().positive() }).parse(qiblaArchive.data);
export const qiblaDefinition = calc;
export function qiblaBearing(latitude: number, longitude: number): number | null {
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude) || Math.abs(latitude) > 90 || Math.abs(longitude) > 180 || (latitude === calc.kaaba.latitude && longitude === calc.kaaba.longitude)) return null;
  const radians = Math.PI / 180, phi = latitude * radians, delta = (calc.kaaba.longitude - longitude) * radians;
  return (Math.atan2(Math.sin(delta), Math.cos(phi) * Math.tan(calc.kaaba.latitude * radians) - Math.sin(phi) * Math.cos(delta)) / radians + 360) % 360;
}

const mosqueSchema = z.object({ osmId: required, latitude: z.number().min(-90).max(90), longitude: z.number().min(-180).max(180), tags: z.object({ name: required.optional() }).passthrough() });
const snapshot = z.object({ center: z.object({ latitude: z.number(), longitude: z.number() }), radiusMeters: z.number().positive(), osmBaseTimestamp: required, elements: z.array(mosqueSchema) }).parse(mosqueArchive.data);
export const mosqueSnapshot = { center: snapshot.center, radiusMeters: snapshot.radiusMeters, timestamp: snapshot.osmBaseTimestamp, entries: snapshot.elements.map(item => {
  const radians = Math.PI / 180, dLat = (item.latitude - snapshot.center.latitude) * radians, dLon = (item.longitude - snapshot.center.longitude) * radians;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(snapshot.center.latitude * radians) * Math.cos(item.latitude * radians) * Math.sin(dLon / 2) ** 2;
  return { id: item.osmId, name: item.tags.name ?? null, distanceKm: calc.earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) };
}).sort((a, b) => a.distanceKm - b.distanceKm) };
