# Pengaturan, backup dan PWA

[Indeks ekstraksi](README.md) · Tanggal pengambilan: 2026-10-11T13:57:52.593Z

## Data JSON

- [settings/preferences.json](../../data/qari/settings/preferences.json)
- [settings/arabic-fonts.json](../../data/qari/settings/arabic-fonts.json)
- [pwa/manifest.json](../../data/qari/pwa/manifest.json)
- [personal-state/contracts.json](../../data/qari/personal-state/contracts.json)

## Isi dan perilaku sumber

- Default preferensi dan tiga font Arab disimpan. Bahasa sumber Indonesia/Inggris menggunakan edisi berbeda seperti dijelaskan di translations.md.
- Backup source version 2026.1 membungkus state pengguna; hanya schema kontrak disimpan.
- Web manifest asli menyimpan metadata install/PWA. Service worker pada browser capture diblokir untuk isolasi; install/offline sumber tidak diuji.

## Batasan dan penggunaan

Tidak menyalin cache, memasang PWA, mengubah preferensi pengguna, atau mengekspor backup pribadi.

Semua file menggunakan envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data`. Dataset ini arsip terpisah; belum diimpor ke SQLite atau dipakai UI MyAlQuran.

## Sumber

- https://qari.solusikoding.com/settings
- https://qari.solusikoding.com/manifest.webmanifest
