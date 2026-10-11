# Audio murottal

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [audio/reciters.json](../../data/qari/audio/reciters.json)
- [audio/ar.alafasy.json](../../data/qari/audio/ar.alafasy.json)
- [audio/ar.abdulbasitmurattal.json](../../data/qari/audio/ar.abdulbasitmurattal.json)
- [audio/ar.abdulsamad.json](../../data/qari/audio/ar.abdulsamad.json)
- [audio/ar.husary.json](../../data/qari/audio/ar.husary.json)
- [audio/ar.husarymujawwad.json](../../data/qari/audio/ar.husarymujawwad.json)
- [audio/ar.minshawi.json](../../data/qari/audio/ar.minshawi.json)
- [audio/ar.minshawimujawwad.json](../../data/qari/audio/ar.minshawimujawwad.json)
- [audio/ar.shaatree.json](../../data/qari/audio/ar.shaatree.json)
- [audio/ar.hanirifai.json](../../data/qari/audio/ar.hanirifai.json)
- [audio/ar.mahermuaiqly.json](../../data/qari/audio/ar.mahermuaiqly.json)
- [audio/ar.hudhaify.json](../../data/qari/audio/ar.hudhaify.json)
- [audio/ar.ahmedajamy.json](../../data/qari/audio/ar.ahmedajamy.json)
- [audio/ar.abdurrahmaansudais.json](../../data/qari/audio/ar.abdurrahmaansudais.json)
- [audio/ar.saoodshuraym.json](../../data/qari/audio/ar.saoodshuraym.json)
- [audio/ar.muhammadayyoub.json](../../data/qari/audio/ar.muhammadayyoub.json)
- [audio/ar.muhammadjibreel.json](../../data/qari/audio/ar.muhammadjibreel.json)

## Isi dan perilaku sumber

- 16 qari; setiap file memuat 6.236 referensi ayat (99.776 pasangan qari/ayat).
- Catalog berisi ID edisi, nama Latin/Arab dan bitrate khusus bila didefinisikan sumber.
- Per qari: `edition` dan `ayahs` dengan `surah`, `ayah`, `number`, `audio`, `audioSecondary`. Nilai URL asli API tidak direkayasa dari template.
- Tidak mengunduh MP3: output JSON berisi seluruh URL audio dan alternatif yang disediakan API. App Qari mengubah awalan http ke https saat pemutaran.

## Batasan dan penggunaan

Respons katalog diperiksa; tidak semua URL MP3 diputar atau diuji tersedia. Izin redistribusi rekaman belum dipastikan.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/settings
- https://api.alquran.cloud/v1/quran/ar.alafasy
