# Kalkulator zakat dan harga emas

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [ramadan/zakat-configuration.json](../../data/qari/ramadan/zakat-configuration.json)
- [ramadan/gold-price-snapshot.json](../../data/qari/ramadan/gold-price-snapshot.json)

## Isi dan perilaku sumber

- Konstanta sumber: nisab emas 85g, zakat maal 2.5%, fitrah 2.5kg/orang. Harga beras default Rp15.000/kg bukan harga pasar hasil scraping.
- Harga PAX Gold/Tether Gold IDR diambil dari CoinGecko sebagai snapshot; source membagi per troy ounce 31.1035 untuk estimasi gram.
- Fallback sumber (Rp1.450.000/g; alternatif 88 × kurs USD-IDR) disimpan sebagai konfigurasi dan tidak disamarkan sebagai harga live. Cache sumber satu jam.

## Batasan dan penggunaan

Tidak mengisi formulir finansial, tidak membayar zakat. Parameter/harga token bukan fatwa atau harga ritel emas terverifikasi.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/ramadan
- https://api.coingecko.com/api/v3/simple/price?ids=pax-gold,tether-gold&vs_currencies=idr
