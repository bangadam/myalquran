# Al-Quran, metadata ayat, dan Juz

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [quran/ayah-metadata-tajwid.json](../../data/qari/quran/ayah-metadata-tajwid.json)
- [quran/featured-surahs.json](../../data/qari/quran/featured-surahs.json)

## Isi dan perilaku sumber

- 6.236 ayat dari 114 surat: `surah`, `ayah` adalah kunci join dengan data lokal; `number` adalah nomor global API.
- `juz`, `manzil`, `page`, `ruku`, `hizbQuarter`, `sajda` dipertahankan dari edisi quran-tajweed. `textTajweed` menyimpan anotasi asli, bukan HTML siap render.
- Teks Arab polos, transliterasi lokal, dan direktori surat tidak disalin lagi. `textTajweed` perlu teks sumbernya sendiri untuk menjaga indeks anotasi.
- Daftar tujuh surat pilihan dipertahankan. `/juz` pada runtime justru menampilkan direktori surat; jangan menyimpulkan ada katalog juz tersendiri.

## Batasan dan penggunaan

Validasi kunci 1..114 dan jumlah ayat per surat sebelum join. Jangan mengganti Quran lokal atau memperlakukan markup sebagai HTML tepercaya.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://api.alquran.cloud/v1/quran/quran-tajweed
- https://qari.solusikoding.com/
