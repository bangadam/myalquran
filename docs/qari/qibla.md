# Arah kiblat

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [qibla/calculation.json](../../data/qari/qibla/calculation.json)
- [qibla/cardinal-directions.json](../../data/qari/qibla/cardinal-directions.json)
- [qibla/compass-labels.json](../../data/qari/qibla/compass-labels.json)

## Isi dan perilaku sumber

- Kaabah sumber: 21.4225, 39.8262; radius bumi 6.371 km. Empat arah utama dan 16 label kompas disimpan.
- Bearing dihitung lokal dengan atan2, bukan endpoint data arah statis. Simpan konstanta/formula dan toleransi 5 derajat, smoothing 0.3.
- Tidak mengambil geolokasi pengguna atau memberikan izin sensor.

## Batasan dan penggunaan

Browser tanpa sensor orientasi tidak membuktikan kompas perangkat bekerja. Data ini konfigurasi, bukan hasil ukur arah perangkat.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/qibla
- https://qari.solusikoding.com/assets/QiblaPage-FvCyQS4k.js
