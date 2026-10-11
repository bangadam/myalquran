# Edisi terjemahan tambahan

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [translations/id.indonesian.json](../../data/qari/translations/id.indonesian.json)
- [translations/en.sahih.json](../../data/qari/translations/en.sahih.json)

## Isi dan perilaku sumber

- Sumber memakai `id.indonesian` dan `en.sahih`; English lokal berbeda (contoh Al-Fatihah dari Muhammad Asad).
- Simpan hanya ayat yang teksnya berbeda setelah trim: 6.195 Indonesia, 6.235 Inggris. Sebanyak 41 + 1 ayat identik tidak disalin.
- `data.edition` adalah metadata API; `data.ayahs` berisi `surah`, `ayah`, `text`. Untuk edisi penuh, isi kunci yang hilang dari padanan lokal tanpa mengubah teks yang disimpan.
- Ini delta edisi, bukan bukti kesalahan terjemahan lama. Edisi berbeda harus tetap dibedakan dalam UI dan atribusi.

## Batasan dan penggunaan

Hak distribusi masing-masing terjemahan belum diverifikasi. Jangan publikasikan otomatis.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://api.alquran.cloud/v1/quran/id.indonesian
- https://api.alquran.cloud/v1/quran/en.sahih
