# Pencarian ayat dan alias surat

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [search/topics.json](../../data/qari/search/topics.json)
- [search/surah-aliases.json](../../data/qari/search/surah-aliases.json)

## Isi dan perilaku sumber

- 10 topik: `id`, `label`, `labelId`, `keywords`. Object alias memetakan ejaan pencarian ke nomor surat.
- Pencarian jarak jauh memakai `/search/{query}/all/id.indonesian`; UI membatasi hasil 30.
- Hasil pencarian tidak disimpan terpisah karena mengulang korpus. Metadata juz/page bernilai 1 pada pemetaan hasil UI bukan metadata ayat yang sah; gunakan file Quran supplemental.

## Batasan dan penggunaan

Topik dan alias bukan indeks pencarian lengkap.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/search
- https://api.alquran.cloud/v1
