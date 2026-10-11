# Arsip data Qari

Sumber: https://qari.solusikoding.com/ · Pengambilan: 2026-10-11T13:57:52.593Z

Data tambahan disimpan di [data/qari](../../data/qari/manifest.json), terpisah dari dataset MyAlQuran. **Tidak diimpor ke SQLite (`data/quran.sqlite`). Sebanyak 17 file JSON dipakai langsung oleh modul dan halaman fitur v2 pada waktu build, mengubah UI dan masuk ke build preview yang dipublikasikan; file tersebut ikut di-commit agar clone baru dapat dibangun. Manifest, lima file indeks provenance, dan 20 file indeks kecil lainnya juga di-commit agar tautan dokumentasi dapat dibuka; 20 payload besar yang tidak dipakai build (katalog URL audio, delta terjemahan, metadata ayat, dan snapshot penyedia) tetap lokal melalui `.gitignore`. Provenance, hak publikasi ulang, dan review editorial keagamaan masih belum tuntas; meng-commit atau mengabaikan file tidak menyelesaikan status tersebut.**

## Hasil

- 63 file JSON termasuk manifest; 18 dokumentasi fitur.
- 6.236 metadata ayat + markup tajwid; 16 qari × 6.236 URL utama audio. Tidak mengunduh MP3.
- Delta terjemahan: 6.195 Indonesia dan 6.235 Inggris; 42 teks identik tidak disalin ulang.
- 17 rule tajwid, 17 contoh audio, 10 topik pencarian, 15 referensi ayat harian, delapan preset tasbih, lima doa baru, lima preset studio.
- Snapshot: 775 jadwal harian untuk 25 kota pada Oktober 2026; 355 hari tahun 1448 H; 959 objek OSM sekitar Jakarta radius 5 km; harga token emas bertimestamp.

## Dokumentasi per fitur

- [Al-Quran, metadata ayat, dan Juz](quran.md)
- [Edisi terjemahan tambahan](translations.md)
- [Panduan tajwid](tajwid.md)
- [Audio murottal](audio.md)
- [Ayat harian](daily-verses.md)
- [Pencarian ayat dan alias surat](search.md)
- [Jadwal sholat dan notifikasi](prayer-times.md)
- [Kalender Hijriyah](hijri-calendar.md)
- [Arah kiblat](qibla.md)
- [Masjid sekitar](mosques.md)
- [Tasbih digital](tasbih.md)
- [Ramadan, doa, amal dan khatam](ramadan.md)
- [Kalkulator zakat dan harga emas](zakat.md)
- [Studio Tarteel](tarteel.md)
- [Ayat tersimpan](bookmarks.md)
- [Riwayat dan progres baca](history.md)
- [Pengaturan, backup dan PWA](settings-pwa.md)
- [Navigasi dan cakupan](navigation.md)

## Metode dan provenance

1. MCP REA `capture_browser_scenario` membuka situs memakai profil Chromium terisolasi; home dan 13 route fitur diamati. Tidak memakai login atau izin mikrofon/lokasi/notifikasi.
2. MCP REA `analyze_javascript_application` menganalisis bundle utama secara statis. Import JS literal ditelusuri rekursif sampai 26 asset; parser TypeScript membaca literal tanpa mengeksekusi JavaScript situs.
3. Katalog embedded diekstrak; endpoint API yang ditemukan di source diambil via HTTP. Quran/audio menggunakan endpoint seluruh edisi untuk menghindari ribuan request per surat/ayat. Snapshot jadwal/kalender mengikuti parameter source.
4. Deduplikasi mengacu file baseline, bukan sekadar nama fitur. Edisi terjemahan berbeda dipertahankan sebagai delta. Teks doa identik dirujuk; tema, metadata, target dan catatan baru tetap disimpan.
5. Verifikasi JSON, hash, rentang kunci surat/ayat, coverage, referensi dan ketidakberubahan baseline.

[Manifest dan checksum](../../data/qari/manifest.json) · [Baseline hash](../../data/qari/provenance/baseline.json) · [Deduplikasi](../../data/qari/provenance/deduplication.json) · [Asset source hash](../../data/qari/provenance/source-assets.json) · [Ringkasan evidence REA](../../data/qari/provenance/rea-evidence-summary.json) · [Hasil verifikasi](../../data/qari/provenance/verification.json)

Setiap JSON memakai envelope `schemaVersion`, `sourceSite`, `extractedAt`, `sources`, `notes`, `data` (manifest mempunyai daftar file). `sources` menyimpan URL, hash respons/source atau binding dan rentang UTF-16 jika berasal dari literal. Ringkasan REA adalah turunan, bukan bundle lengkap untuk import REA. Asset hash mengunci versi source; nama bundle dapat berubah pada deploy berikutnya.

## Cara memperbarui

Baca HTML homepage untuk menemukan entry asset terbaru, lalu ulangi inspeksi REA dan traversal import. Jangan menggunakan nama hash bundle lama sebagai discovery. Ambil hanya endpoint yang terbukti dipakai fitur; jangan menjalankan bundle lewat eval. Gunakan parameter snapshot eksplisit dan timestamp, bandingkan ulang dengan baseline terkini, tulis ke direktori baru, dan validasi semua referensi/checksum sebelum mengganti arsip. Edisi delta harus direkonstruksi dengan baseline yang hash-nya tercatat.

## Batas cakupan

**Tidak mengklaim seluruh kemungkinan data layanan dinamis.** Jadwal semua tanggal, kalender semua tahun, masjid seluruh koordinat, hasil pencarian semua query, dan harga sepanjang waktu tidak mempunyai batas koleksi yang sama dengan situs statis. Arsip menyimpan seluruh katalog statis yang ditemukan plus snapshot berbatas di atas dan kontrak/query untuk fitur dinamis. Bookmark, riwayat, lokasi pribadi dan rekaman adalah data per perangkat; tidak diambil atau dibuat-buat.

`robots.txt` mengembalikan HTML SPA, bukan aturan robots yang dapat diparse; hal itu bukan izin redistribusi. Lisensi konten Qari/terjemahan/audio belum terverifikasi. Data OpenStreetMap berlisensi ODbL dan wajib atribusi ke [kontributor OpenStreetMap](https://www.openstreetmap.org/copyright). Klaim tajwid, hadis/fadhilah, pengkhususan doa Ramadan dan aturan zakat memerlukan review editorial. Tidak ada teks agama hasil generasi.

## Verifikasi yang dilakukan

87 pemeriksaan data lulus sebelum manifest dibuat. Baseline 349 file tidak berubah. MCP REA berhasil menavigasi semua route fitur; `/juz` menampilkan direktori, dan state pribadi kosong pada profil baru. Pemeriksaan ini bukan validasi sanad, bukan pengujian seluruh audio, bukan tes sensor/mikrofon, dan bukan production build.
