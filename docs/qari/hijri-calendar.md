# Kalender Hijriyah

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [calendar/months.json](../../data/qari/calendar/months.json)
- [calendar/weekdays.json](../../data/qari/calendar/weekdays.json)
- [calendar/events.json](../../data/qari/calendar/events.json)
- [calendar/snapshot-1448.json](../../data/qari/calendar/snapshot-1448.json)

## Isi dan perilaku sumber

- 12 nama bulan, tujuh label hari, 12 definisi event/puasa sumber.
- Snapshot tahun 1448 H: 12 respons bulan dan 355 hari, termasuk tanggal Gregorian/Hijri serta holiday API.
- Definisi event (`month`, `day`, `type`, `description`) terpisah dari konversi tanggal provider.

## Batasan dan penggunaan

Tidak mencakup seluruh tahun. Penentuan awal bulan dan hari raya lokal dapat berbeda; tidak ada keputusan rukyat baru dalam dataset ini.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/calendar
- https://api.aladhan.com/v1/hToGCalendar/1/1448
