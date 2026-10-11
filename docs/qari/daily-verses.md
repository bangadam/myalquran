# Ayat harian

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [quran/daily-verses.json](../../data/qari/quran/daily-verses.json)

## Isi dan perilaku sumber

- 15 pilihan ayat beserta tema sumber. `existingRef` menunjuk file dan nomor ayat lokal.
- Teks Arab dan terjemahan pilihan tidak diulang; referensi ayat adalah identitas deduplikasi.
- Sumber memilih index berdasarkan hari dalam tahun modulo 15, dihitung dari waktu perangkat.

## Batasan dan penggunaan

Koleksi editorial sumber, bukan kumpulan ayat baru.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/
