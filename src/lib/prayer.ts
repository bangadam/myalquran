/* Solar positions follow the PrayTimes solar-position approximation
 * (https://praytimes.org/docs/calculation): mean anomaly/longitude, ecliptic
 * longitude and obliquity give declination and equation of time. The sun is
 * treated as a point; 0.833° sunrise refraction/solar radius and the horizon
 * dip from elevation are approximations. These are calculations, not rulings.
 */
export const calculationMethods = {
  20: { name: 'Kemenag RI', fajrAngle: 20, ishaAngle: 18 },
  3: { name: 'Muslim World League', fajrAngle: 18, ishaAngle: 17 },
  2: { name: 'ISNA', fajrAngle: 15, ishaAngle: 15 },
  4: { name: 'Umm Al-Qura', fajrAngle: 18.5, ishaInterval: 90 },
  5: { name: 'Egyptian', fajrAngle: 19.5, ishaAngle: 17.5 },
} as const;

export type CalculationMethod = keyof typeof calculationMethods;
export type AsrSchool = 'standard' | 'hanafi';
export type PrayerName = 'Fajr' | 'Sunrise' | 'Dhuhr' | 'Asr' | 'Maghrib' | 'Isha';
export type PrayerTimes = Record<PrayerName, number>; // unrounded local minutes after midnight

export interface PrayerOptions {
  latitude: number;
  longitude: number;
  date: string; // Gregorian YYYY-MM-DD, proleptic Gregorian 1600–9999
  timeZoneOffsetOrIanaZone: number | string; // UTC offset in hours, or an IANA time zone
  method: CalculationMethod;
  elevation?: number; // metres above sea level
  asrSchool?: AsrSchool;
}

const radians = Math.PI / 180;
const sin = (degrees: number) => Math.sin(degrees * radians);
const cos = (degrees: number) => Math.cos(degrees * radians);
const asin = (value: number) => Math.asin(value) / radians;
const atan2 = (y: number, x: number) => Math.atan2(y, x) / radians;
const fractionalDay = (hours: number) => hours / 24;
const normalize = (angle: number) => ((angle % 360) + 360) % 360;

function solarPosition(julianDay: number): { declination: number; equation: number } {
  const days = julianDay - 2451545;
  const anomaly = normalize(357.529 + 0.98560028 * days);
  const meanLongitude = normalize(280.459 + 0.98564736 * days);
  const longitude = normalize(meanLongitude + 1.915 * sin(anomaly) + 0.020 * sin(2 * anomaly));
  const obliquity = 23.439 - 0.00000036 * days;
  const declination = asin(sin(obliquity) * sin(longitude));
  const rightAscension = normalize(atan2(cos(obliquity) * sin(longitude), cos(longitude))) / 15;
  const equation = ((meanLongitude / 15 - rightAscension + 12) % 24 + 24) % 24 - 12;
  return { declination, equation };
}

function hourAngle(latitude: number, declination: number, altitude: number): number {
  const denominator = cos(latitude) * cos(declination);
  const cosine = (sin(altitude) - sin(latitude) * sin(declination)) / denominator;
  if (!Number.isFinite(cosine) || cosine < -1 || cosine > 1) {
    // No twilight/sunrise on this date: don't invent a high-latitude time.
    throw new RangeError('Solar event does not occur at this latitude/date; no high-latitude adjustment is applied');
  }
  return Math.acos(cosine) / radians / 15;
}

function zoneMinutes(instant: number, zone: string): number {
  const fields = new Intl.DateTimeFormat('en-US', {
    timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date(instant));
  const part = (type: string) => Number(fields.find(field => field.type === type)?.value);
  const local = Date.UTC(part('year'), part('month') - 1, part('day'), part('hour'), part('minute'), part('second'));
  return (local - Math.floor(instant / 1000) * 1000) / 60000;
}

/** Return local civil clock minutes, retaining fractional minutes for callers to round.
 * An explicit numeric UTC offset is fixed for the date; IANA zones resolve the
 * offset independently at each event (including DST). No host time zone is used.
 * At extreme latitudes, if an event does not occur, this throws instead of
 * silently applying an arbitrary twilight interpolation.
 */
export function computePrayerTimes(options: PrayerOptions): PrayerTimes {
  const { latitude, longitude, date, timeZoneOffsetOrIanaZone, method, elevation = 0, asrSchool = 'standard' } = options;
  if (!Number.isFinite(latitude) || Math.abs(latitude) > 90 || !Number.isFinite(longitude) || Math.abs(longitude) > 180 ||
      !Number.isFinite(elevation) || elevation < 0 || elevation > 10000 || !Object.hasOwn(calculationMethods, method) ||
      (asrSchool !== 'standard' && asrSchool !== 'hanafi')) throw new RangeError('Invalid prayer calculation parameters');
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!match) throw new RangeError('Expected a Gregorian date in YYYY-MM-DD format');
  const [, year, month, day] = match.map(Number);
  const midnight = Date.UTC(year, month - 1, day);
  if (year < 1600 || year > 9999 || !Number.isFinite(midnight) ||
      new Date(midnight).toISOString().slice(0, 10) !== date) throw new RangeError('Invalid Gregorian date');
  if (typeof timeZoneOffsetOrIanaZone === 'number') {
    if (!Number.isFinite(timeZoneOffsetOrIanaZone) || Math.abs(timeZoneOffsetOrIanaZone) > 14) throw new RangeError('Invalid UTC offset');
  } else if (typeof timeZoneOffsetOrIanaZone === 'string') {
    try { new Intl.DateTimeFormat('en-US', { timeZone: timeZoneOffsetOrIanaZone }); }
    catch { throw new RangeError('Invalid IANA time zone'); }
  } else throw new RangeError('Expected an explicit UTC offset or IANA time zone');

  const parameters = calculationMethods[method];
  const julianDay = midnight / 86400000 + 2440587.5 - longitude / 360;
  // Iterate once: the equation of time and declination change during the day.
  const position = (guess: number) => solarPosition(julianDay + fractionalDay(guess));
  const noon = (guess: number) => 12 - position(guess).equation;
  const transit = noon(noon(12));
  const event = (guess: number, altitude: number, afternoon: boolean) => {
    const { declination, equation } = position(guess);
    const hours = hourAngle(latitude, declination, altitude);
    return 12 - equation + (afternoon ? hours : -hours);
  };
  const morning = (angle: number, guess: number) => event(event(guess, -angle, false), -angle, false);
  const evening = (angle: number, guess: number) => event(event(guess, -angle, true), -angle, true);
  const horizon = 0.833 + 0.0347 * Math.sqrt(elevation);
  const asr = (guess: number) => {
    const { declination } = position(guess);
    const altitude = Math.atan(1 / ((asrSchool === 'hanafi' ? 2 : 1) + Math.tan(Math.abs(latitude - declination) * radians))) / radians;
    return event(guess, altitude, true);
  };
  const sunrise = morning(horizon, 6);
  const sunset = evening(horizon, 18);
  const isha = 'ishaInterval' in parameters ? sunset + parameters.ishaInterval / 60 : evening(parameters.ishaAngle, 18);
  const solarHours = {
    Fajr: morning(parameters.fajrAngle, 5), Sunrise: sunrise, Dhuhr: transit,
    Asr: asr(asr(15)), Maghrib: sunset, Isha: isha,
  };
  const result = {} as PrayerTimes;
  for (const prayer of Object.keys(solarHours) as PrayerName[]) {
    const utcHours = solarHours[prayer] - longitude / 15;
    const instant = midnight + utcHours * 3600000;
    const offset = typeof timeZoneOffsetOrIanaZone === 'number'
      ? timeZoneOffsetOrIanaZone * 60 : zoneMinutes(instant, timeZoneOffsetOrIanaZone);
    result[prayer] = utcHours * 60 + offset;
  }
  return result;
}

/** Round to nearest minute; minutes may exceed 24h for events on an adjacent civil day. */
export function formatPrayerTime(minutes: number): string {
  if (!Number.isFinite(minutes)) throw new RangeError('Invalid time');
  const rounded = ((Math.round(minutes) % 1440) + 1440) % 1440;
  return `${String(Math.floor(rounded / 60)).padStart(2, '0')}:${String(rounded % 60).padStart(2, '0')}`;
}
