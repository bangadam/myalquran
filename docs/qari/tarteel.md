# Studio Tarteel

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [tarteel/presets.json](../../data/qari/tarteel/presets.json)
- [tarteel/recording-formats.json](../../data/qari/tarteel/recording-formats.json)

## Isi dan perilaku sumber

- Lima preset akustik lengkap dengan nama, deskripsi, setting reverb/delay/EQ/compression. Nama qari di preset adalah label sumber, bukan model peniruan suara.
- Lima MIME recording yang dicoba sumber disimpan menurut urutan fallback.
- Sumber merekam dengan MediaRecorder, memproses Web Audio, dan mengekspor PCM WAV stereo 16-bit. Tidak merekam mikrofon atau mengambil rekaman pengguna.

## Batasan dan penggunaan

Verifikasi halaman/preset saja; jalur mikrofon dan DSP tidak dijalankan.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/tarteel
- https://qari.solusikoding.com/assets/TarteelStudioPage-BG4z_1-z.js
