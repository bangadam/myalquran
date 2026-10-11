# Jadwal sholat dan notifikasi

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [prayer/calculation-methods.json](../../data/qari/prayer/calculation-methods.json)
- [prayer/city-coordinates.json](../../data/qari/prayer/city-coordinates.json)
- [prayer/names.json](../../data/qari/prayer/names.json)
- [prayer/notification-templates.json](../../data/qari/prayer/notification-templates.json)
- [prayer/snapshot-2026-10.json](../../data/qari/prayer/snapshot-2026-10.json)

## Isi dan perilaku sumber

- Delapan metode perhitungan dan 25 kota bawaan dengan koordinat. Nama kota tetap sebagai identitas; direktori provinsi/kabupaten lama tidak diduplikasi.
- 775 hari jadwal: 25 kota × 31 hari Oktober 2026, Aladhan method 20 (Kemenag RI). Setiap kota menyimpan URL request serta respons harian lengkap (`timings`, tanggal, metadata).
- Sumber memiliki notifikasi sebelum/sesudah sholat dan pengingat menjelang berikutnya. Default 5/5/15 menit disimpan sebagai konfigurasi, bukan notifikasi pengguna.
- Ekspresi template adalah string bukti source, tidak boleh di-eval. Tidak meminta permission notifikasi atau mengubah jadwal pengguna.

## Batasan dan penggunaan

Snapshot terbatas bulan/kota di atas. Jadwal masa depan/semua lokasi tidak berhingga; perlu request baru per lokasi/tanggal. Hasil perhitungan dapat berbeda dari otoritas lokal.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/prayer
- https://api.aladhan.com/v1/calendar/2026/10?latitude=-6.2088&longitude=106.8456&method=20
