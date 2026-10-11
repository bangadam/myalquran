# Panduan tajwid

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [tajwid/rules.json](../../data/qari/tajwid/rules.json)
- [tajwid/categories.json](../../data/qari/tajwid/categories.json)
- [tajwid/audio-examples.json](../../data/qari/tajwid/audio-examples.json)

## Isi dan perilaku sumber

- 17 entri rule dengan ID kode, nama Arab/Indonesia, warna, class CSS, deskripsi dan contoh sumber.
- UI menampilkan 14 hukum karena sejumlah kode mempunyai kategori/nama yang digabung; jumlah ini bukan kehilangan tiga record.
- Tujuh kategori UI dan 17 contoh audio dipertahankan. Kunci object audio adalah ID rule; `url`, `ayahRef`, `textExample` tetap dari sumber.
- Markup Quran lengkap disimpan di file metadata ayat, bukan diduplikasi di sini.

## Batasan dan penggunaan

Definisi tajwid dan contoh dari sumber belum ditashih. Gunakan parser markup terbatas, bukan innerHTML langsung.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/tajweed
- https://qari.solusikoding.com/assets/TajweedGuidePage-DYkYuBcm.js
