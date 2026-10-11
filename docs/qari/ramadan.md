# Ramadan, doa, amal dan khatam

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [ramadan/prayers-new.json](../../data/qari/ramadan/prayers-new.json)
- [ramadan/prayer-usage.json](../../data/qari/ramadan/prayer-usage.json)
- [ramadan/amal-tasks.json](../../data/qari/ramadan/amal-tasks.json)
- [ramadan/khatam-defaults.json](../../data/qari/ramadan/khatam-defaults.json)
- [ramadan/khatam-milestones.json](../../data/qari/ramadan/khatam-milestones.json)

## Isi dan perilaku sumber

- Lima doa baru dari delapan entri sumber. Dua merujuk data/doa.json ID 141 dan 143; satu adalah kutipan Quran 23:118.
- Delapan usage records mempertahankan judul, kategori dan waktu penggunaan yang diklaim sumber, termasuk entri yang teksnya dideduplikasi.
- Sembilan template amal, default target khatam, lima milestone halaman. Progress pengguna tidak diekstrak.
- Fitur musiman tetap dapat diakses melalui /ramadan meskipun tidak tampil di navigasi pada waktu capture.

## Batasan dan penggunaan

Penetapan doa khusus 10 hari pertama/tengah/akhir adalah klaim sumber; perlu review ulama/editor sebelum dipakai. Tidak menghasilkan teks agama baru.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/ramadan
- https://qari.solusikoding.com/assets/RamadanPage-D5oWvCfN.js
