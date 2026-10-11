import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { computePrayerTimes, formatPrayerTime } from '../src/lib/prayer.ts';

const snapshot = JSON.parse(await readFile(new URL('../data/qari/prayer/snapshot-2026-10.json', import.meta.url), 'utf8'));
const cities = JSON.parse(await readFile(new URL('../data/qari/prayer/city-coordinates.json', import.meta.url), 'utf8'));
const locations = new Map(cities.data.map(city => [city.id, city]));
const names = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
const deviations = Object.fromEntries(names.map(name => [name, { sum: 0, max: 0, count: 0, worst: '' }]));
let days = 0;

for (const entry of snapshot.data) {
  const city = locations.get(entry.cityId);
  assert.ok(city, `Missing coordinates: ${entry.cityId}`);
  const url = new URL(entry.source);
  assert.equal(Number(url.searchParams.get('latitude')), city.latitude);
  assert.equal(Number(url.searchParams.get('longitude')), city.longitude);
  assert.equal(url.searchParams.get('method'), '20');
  for (const day of entry.data) {
    const [d, m, y] = day.date.gregorian.date.split('-');
    const date = `${y}-${m}-${d}`;
    const zone = day.meta.timezone;
    const options = { latitude: city.latitude, longitude: city.longitude, date, timeZoneOffsetOrIanaZone: zone, method: 20 };
    const times = computePrayerTimes(options);
    assert.deepEqual(computePrayerTimes(options), times, `Nondeterministic result for ${entry.cityId}/${date}`);
    for (const name of names) {
      const observed = Number(day.timings[name].slice(0, 2)) * 60 + Number(day.timings[name].slice(3, 5));
      const rounded = formatPrayerTime(times[name]);
      const computed = Number(rounded.slice(0, 2)) * 60 + Number(rounded.slice(3, 5));
      const difference = Math.abs(((computed - observed + 720 + 1440) % 1440) - 720);
      const stat = deviations[name];
      stat.sum += difference;
      stat.count++;
      if (!stat.worst || difference > stat.max) { stat.max = difference; stat.worst = `${city.name} ${date} (${rounded} vs ${day.timings[name]})`; }
    }
    days++;
  }
}

assert.equal(locations.size, 25);
assert.equal(snapshot.data.length, 25);
assert.equal(days, 775);
assert.throws(() => computePrayerTimes({ latitude: 91, longitude: 0, date: '2026-10-01', timeZoneOffsetOrIanaZone: 7, method: 20 }), RangeError);
assert.throws(() => computePrayerTimes({ latitude: 0, longitude: 0, date: '2026-02-30', timeZoneOffsetOrIanaZone: 7, method: 20 }), RangeError);
assert.throws(() => computePrayerTimes({ latitude: 0, longitude: 0, date: '2026-10-01', timeZoneOffsetOrIanaZone: 'Not/AZone', method: 20 }), RangeError);
assert.throws(() => computePrayerTimes({ latitude: 0, longitude: 0, date: '2026-10-01', timeZoneOffsetOrIanaZone: 7, method: 999 }), RangeError);
assert.throws(() => computePrayerTimes({ latitude: 80, longitude: 0, date: '2026-06-21', timeZoneOffsetOrIanaZone: 0, method: 20 }), RangeError);
const standard = computePrayerTimes({ latitude: -6.2088, longitude: 106.8456, date: '2026-10-01', timeZoneOffsetOrIanaZone: 7, method: 20 });
const hanafi = computePrayerTimes({ latitude: -6.2088, longitude: 106.8456, date: '2026-10-01', timeZoneOffsetOrIanaZone: 'Asia/Jakarta', method: 20, asrSchool: 'hanafi' });
assert.ok(hanafi.Asr > standard.Asr);
assert.ok(Math.abs(hanafi.Dhuhr - standard.Dhuhr) < 0.01);

// This bound checks approximate solar astronomy against one provider/month, not legal or religious equivalence.
const maxTolerance = 3;
const meanTolerance = 1;
let passed = true;
for (const name of names) {
  const { sum, count, max, worst } = deviations[name];
  const mean = sum / count;
  console.log(`${name}: mean ${mean.toFixed(3)} min; max ${max} min; worst ${worst}`);
  if (mean > meanTolerance || max > maxTolerance) passed = false;
}
const overallWorst = Object.entries(deviations).reduce((worst, [name, stat]) => stat.max > worst.max ? { name, ...stat } : worst, { name: '', max: -1 });
console.log(`Overall worst: ${overallWorst.name} at ${overallWorst.worst}; ${overallWorst.max} min.`);
console.log(`${snapshot.data.length} cities, ${days} days, ${days * names.length} comparisons; deterministic and invalid-input assertions passed.`);
console.log(`Tolerance: mean <= ${meanTolerance} min per prayer, max <= ${maxTolerance} min per prayer. Solar coordinates and fixed twilight angles approximate Aladhan; provider conventions and minute rounding can differ. This is not local-authority certification.`);
console.log(passed ? 'PASS' : 'FAIL');
if (!passed) process.exitCode = 1;
