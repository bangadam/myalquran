# Masjid sekitar

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [mosques/query.json](../../data/qari/mosques/query.json)
- [mosques/snapshot-jakarta-5km.json](../../data/qari/mosques/snapshot-jakarta-5km.json)

## Isi dan perilaku sumber

- 959 node/way OSM bertag masjid/tempat ibadah Muslim dalam query radius 5 km dari koordinat default Jakarta (-6.2088,106.8456).
- `osmId` stabil dalam namespace node/way; `tags`, koordinat dan nodeIds dipertahankan. Node geometri tanpa tag hasil rekursi tidak diperlakukan sebagai masjid.
- Lima nama/koordinat cocok dengan lokasi kajian lokal; nama duplikat dirujuk melalui `existingRef`. Metadata OSM baru tetap disimpan.
- UI sumber menggabungkan hasil berjarak <20m; arsip ini mempertahankan identitas node/way agar tidak menghapus fitur berbeda secara salah.
- Tiga endpoint POST gagal (504, 500, timeout); GET pada endpoint pertama kemudian berhasil. Bukti kegagalan ikut disimpan.

## Batasan dan penggunaan

Bukan semua masjid di seluruh dunia. OSM ODbL dan atribusi wajib; 959 adalah objek OSM, bukan jaminan 959 bangunan unik.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/mosque
- https://overpass-api.de/api/interpreter
- https://www.openstreetmap.org/copyright
