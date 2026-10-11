# PRD — MyAlQuran

Status: website telah diimplementasikan untuk verifikasi lokal; rilis penuh tertahan konten terjemahan terverifikasi. [ARCHITECTURE.md](ARCHITECTURE.md) mengatur teknis, [DESIGN.md](DESIGN.md) mengatur pengalaman membaca; [README.md](README.md) mencatat hasil cek dan keterbatasan.

## 1. Keputusan wajib

- Website baca informasi menggunakan **Astro**, dengan **shadcn/ui** sebagai library UI.
- **SQLite lokal `data/quran.sqlite` menjadi satu-satunya sumber konten**, dibaca saat prerender. Tidak ada scraping, fetch konten eksternal, atau fallback ke file JSON terpisah.
- **PWA offline**: pembaca dapat menyimpan seluruh konten bahasa pilihan, bukan hanya halaman yang pernah dibuka.
- **Empat bahasa**: Indonesia, Inggris, Jepang, dan Mandarin.
- **Aksesibilitas mudah**: navigasi jelas, teks nyaman, keyboard/screen reader berfungsi, zoom tidak dibatasi.
- **Mobile-first di semua perangkat**: satu kolom maksimal `480px`, tetap terpusat di desktop; tanpa sidebar atau bingkai ponsel tiruan.
- **Tema orange dan maskot kucing orange**, memakai `lottie-react` dengan aset lokal. Animasi singkat di beranda; reduced motion memakai versi statis, tidak ada animasi pada ayat.

Tujuan: menemukan surat, membaca ayat dan terjemahan, memahami tafsir, serta membaca doa tanpa akun dan tetap dapat digunakan setelah koneksi terputus.

## 2. Bahasa dan cakupan konten

| Sebutan pengguna | Locale teknis | Label pemilih |
| --- | --- | --- |
| IN — Indonesia | `id` | Bahasa Indonesia |
| EN — Inggris | `en` | English |
| JP — Jepang | `ja` | 日本語 |
| CN — Mandarin | `zh-Hans` | 简体中文 |

`IN` diartikan sebagai Indonesia, bukan Hindi. Mandarin memakai aksara sederhana sebagai pilihan awal; aksara tradisional belum diminta. Bahasa antarmuka dan bahasa terjemahan mengikuti locale pilihan; teks Al-Qur'an Arab tetap sama di semua locale.

Dukungan bahasa mencakup navigasi, pesan status/error, metadata SEO, nama/arti yang diterjemahkan, terjemahan ayat, tafsir, doa, dan informasi situs. Bukan sekadar menerjemahkan tombol.

- URL memakai prefix `/id/`, `/en/`, `/ja/`, `/zh-Hans/` sehingga tautan bahasa dapat dibagikan dan disimpan offline.
- Berpindah bahasa mempertahankan surat/doa/nomor ayat dan anchor ketika konten padanannya tersedia.
- Jangan menyajikan teks Indonesia sebagai Jepang/Mandarin atau menganggap bahasa lengkap hanya karena UI berubah.
- Terjemahan keagamaan harus terverifikasi dan memiliki izin penggunaan. Tidak membuat terjemahan otomatis atau referensi buatan.
- Bahasa yang belum lengkap harus diberi keterangan jelas saat pengembangan; dukungan penuh empat bahasa tetap syarat rilis, bukan fitur opsional.

## 3. Halaman dan alur

`{locale}` mengacu pada empat locale di atas.

| Halaman | Kebutuhan |
| --- | --- |
| `/` | Masuk ke pilihan bahasa; pilihan awal Indonesia, tanpa deteksi lokasi atau redirect paksa. |
| `/{locale}/` | Daftar 114 surat urut nomor; nama Arab/Latin, arti, jumlah ayat. Langsung berguna, tanpa hero promosi. |
| `/{locale}/surat/{nomor}/` | Metadata, seluruh ayat berurutan, Arab, transliterasi, terjemahan bahasa pilihan, tautan tafsir dan surat sebelumnya/berikutnya. |
| `/{locale}/tafsir/{nomor}/` | Tafsir per ayat dengan konteks ayat dan tautan kembali ke ayat yang sama. |
| `/{locale}/doa/` dan `/{locale}/doa/{id}/` | Daftar berdasarkan grup; detail teks utama, transliterasi/terjemahan jika tersedia, dan rujukan. |
| `/{locale}/tentang/` | Tujuan, hak penggunaan/kredit yang diwajibkan, keterbatasan, tanggal pembaruan yang benar-benar tercatat. |
| `/{locale}/offline/` | Status paket bahasa, tindakan simpan offline, progres, kegagalan dan coba lagi. |
| Tidak ditemukan | HTTP 404 untuk route tidak dikenal; tautan kembali. Beda dari halaman valid yang belum tersimpan offline. |

Anchor stabil: `#ayat-{nomorAyat}`, misalnya `/id/surat/1/#ayat-1`. ID/nomor mengikuti SQLite, bukan slug nama yang dapat berubah.

Alur utama: pilih bahasa → pilih surat → baca → buka tafsir → kembali ke ayat; atau pilih doa → baca. Alur offline: pilih **Simpan bahasa ini untuk offline** → tunggu seluruh paket selesai → buka kembali tanpa jaringan.

## 4. Kontrak PWA offline

- Manifest, ikon install, HTTPS, dan service worker; instalasi mengikuti kemampuan browser. Sediakan panduan Add to Home Screen saat tidak ada prompt install bawaan.
- Unduhan paket dilakukan atas tindakan pengguna, per bahasa, dengan ukuran perkiraan dan progres yang terlihat. Paket meliputi seluruh surat, tafsir, doa, navigasi, informasi situs, CSS, font, dan JavaScript yang diperlukan untuk bahasa itu.
- Status **Siap offline** hanya setelah semua resource paket terverifikasi tersimpan. Halaman yang belum pernah dibuka juga dapat diakses, termasuk deep link ayat.
- Kegagalan jaringan/quota tidak menghasilkan status sukses. Paket lama yang lengkap tetap dapat dibaca; versi baru tidak menggantikannya sebelum lengkap.
- Pembaruan tidak memaksa reload ketika pengguna membaca. Beri pilihan menerapkan pembaruan saat pengguna siap.
- Cache browser dapat dihapus/diusir oleh sistem; tampilkan kesiapan berdasarkan resource yang masih tersedia, bukan flag sukses lama. Tidak menjanjikan penyimpanan permanen.
- Kunjungan pertama tanpa jaringan dan tanpa cache tidak dapat membaca konten. PWA memerlukan JavaScript untuk registrasi dan pengelolaan cache; konten/navigasi online tetap tersedia sebagai HTML tanpa JavaScript.
- SQLite tidak diunduh ke browser. Offline memakai halaman/aset yang dihasilkan dari SQLite, bukan database client atau API.

## 5. Aksesibilitas dan kualitas

- Target **WCAG 2.2 AA**, dengan pengujian keyboard dan screen reader, bukan klaim berdasarkan library saja.
- Label teks jelas dan terlokalisasi; tidak memakai bendera sebagai label bahasa atau ikon tanpa nama aksesibel.
- Target sentuh minimal `44 × 44px`; fokus terlihat; skip link; landmark dan heading semantik. Navigasi tidak mengandalkan hover/gestur.
- Arab memakai `lang="ar" dir="rtl"`; blok lain mengikuti bahasa sebenarnya dan LTR. Harakat tidak dipotong; teks dapat dipilih/disalin.
- Zoom 200%, reflow pada 320 CSS px, tanpa horizontal overflow. Pengguna dapat membesarkan ukuran bacaan; kontrol ini tidak menggantikan zoom browser.
- Kontras teks normal ≥ 4,5:1, teks besar ≥ 3:1. Status offline/progres tidak disampaikan lewat warna saja; pengumuman screen reader tidak membanjiri setiap perubahan persen.
- Animasi maskot hanya singkat dan tidak berulang terus-menerus; reduced motion menampilkan kucing statis. Dialog/pemilih shadcn tidak menjebak fokus dan dapat ditutup dengan keyboard.
- Metadata/canonical/hreflang/sitemap sesuai locale dan domain sebenarnya. Tidak menerbitkan domain/tanggal contoh.
- Target performa, belum hasil ukur: LCP ≤ 2,5 detik, CLS ≤ 0,1, INP ≤ 200 ms pada persentil ke-75 jika data lapangan cukup. Hydration hanya untuk kontrol yang membutuhkan interaksi.

## 6. Integritas dan batasan

Tabel SQLite existing `json_files(path, content)` menyimpan dokumen JSON utuh. Website hanya membacanya read-only. Hilang/rusak/kontrak tidak sesuai menghentikan prerender; jangan fallback atau diam-diam melewati ayat.

Teks ayat/tafsir/doa tidak dikoreksi atau dinormalisasi otomatis. Field doa `tr`/`idn` dapat kosong; `ar` kadang berisi petunjuk Indonesia. Bagian kosong tidak menjadi blok bacaan kosong; rujukan kosong dinyatakan tidak tercantum, tanpa dibuat-buat. Nomor dan pasangan ayat–tafsir harus sesuai.

Tidak termasuk: akun/login, sinkronisasi bookmark, backend/database server, CMS, komentar, chatbot, audio/qari, kajian, jadwal shalat, pencarian seluruh teks. Jangan menambah fitur hanya karena datanya tersedia. Jangan menghapus arsip/tooling pemeliharaan yang tidak terkait.

Penghapusan nama penyedia atau URL media tidak mengubah hak penggunaan. Izin konten/font dan atribusi yang diwajibkan tetap harus dipenuhi sebelum rilis publik.

## 7. Kriteria penerimaan

| ID | Skenario | Hasil |
| --- | --- | --- |
| AC-01 | Prerender dengan SQLite saja dan jaringan keluar diblokir | Semua halaman berasal dari SQLite; file JSON arsip tidak dibaca dan tidak ada fetch konten eksternal. |
| AC-02 | Baca surat pendek dan Al-Baqarah | Seluruh ayat sesuai nomor/jumlah; teks tidak hilang, berulang, terpotong, atau berubah. |
| AC-03 | Buka deep link → tafsir → kembali | Konteks ayat benar; refresh mempertahankan locale dan anchor. |
| AC-04 | Baca doa 42/144 | Petunjuk tidak dipaksa menjadi RTL; bagian kosong tidak dibuat-buat; rujukan yang tidak tersedia dinyatakan. |
| AC-05 | Viewport 320, 390, 768, 1440px; zoom 200% | Selalu satu kolom maksimal 480px; terpusat bila ruang cukup; kontrol wrap tanpa scroll horizontal. |
| AC-06 | Keyboard, VoiceOver/TalkBack, ukuran bacaan, reduced motion | Navigasi, bahasa, fokus, status unduhan, dan teks dapat dipahami; tidak ada keyboard trap. |
| AC-07 | Pilih keempat bahasa dan ubah bahasa pada suatu ayat | UI dan bacaan benar-benar sesuai locale; ayat yang sama dipertahankan; tidak ada fallback diam-diam. |
| AC-08 | Selesaikan paket bahasa, tutup aplikasi, blokir jaringan, buka halaman yang belum dikunjungi | Semua surat/tafsir/doa paket, CSS/font, navigasi dan deep link tersedia offline. Ulangi untuk empat bahasa. |
| AC-09 | Unduhan terputus/quota penuh/cache terhapus | Tidak mengklaim siap offline; kegagalan jelas, bisa dicoba lagi, paket lama tidak rusak. |
| AC-10 | Pembaruan saat membaca offline | Tidak reload paksa; hanya versi lengkap diaktifkan, konteks ayat dipertahankan. |
| AC-11 | ID tak dikenal atau SQLite gagal | Route tak dikenal HTTP 404; database gagal menghentikan prerender, tanpa fallback ke JSON/API. |
| AC-12 | Pemeriksaan rilis | Empat bahasa lengkap/terverifikasi, hak penggunaan jelas, manifest/install dan SEO locale benar. |

## 8. Data yang tersedia dan prasyarat

SQLite berisi 927 dokumen: 348 arsip konten, empat kamus UI, 228 terjemahan surat JA/ZH, 342 tafsir EN/JA/ZH, dan lima dokumen provenance. Seluruh 6.236 ayat dan tafsir tersedia dalam bahasa Indonesia, Inggris, Jepang, dan Mandarin; 227 doa lengkap masih berbahasa Indonesia. Edisi impor berasal dari publisher bernama dengan versi, atribusi, ketentuan penggunaan, dan catatan terjemahan yang dipertahankan. Tafsir Al-Mukhtasar terpisah dari footnotes terjemahan; EN berlisensi CC BY 4.0, JA/ZH mengikuti terms QuranEnc.

**Prasyarat dukungan penuh empat bahasa:** doa EN/JA/ZH serta metadata lokal terverifikasi belum lengkap. `npm run check:release` melaporkan tiga dokumen doa belum tersedia. Hak penggunaan dataset ID/EN existing, kebutuhan domain/SEO, aksesibilitas dan smoke paket produksi penuh tetap perlu dipastikan sebelum rilis penuh. Smoke dev import tafsir membuktikan bacaan/kredit offline pada tiga route per locale. Error hydration akibat cache optimizer dev/sync bersama telah diperbaiki; kontrol bahasa menjaga anchor dan ukuran bacaan 100/125/150% berfungsi serta bertahan setelah reload, termasuk setelah typecheck dijalankan saat dev aktif. Ini bukan bukti paket produksi atau aksesibilitas penuh.

Pemeriksaan sumber doa sudah dilakukan pada API eQuran serta edisi Hisnul Muslim EN/JA/ZH; rinciannya di [README — Pemeriksaan sumber doa](README.md#pemeriksaan-sumber-doa-enjamandarin). Koleksi kandidat tidak identik dengan 227 ID/catatan existing, dan edisi JA menghilangkan rujukan hadis non-Qur'an. Import tetap diblokir sampai tersedia terjemahan yang ditinjau editor, pemetaan per ID dan hak penggunaan yang terverifikasi; jangan mengganti koleksi dengan 267 bacaan dari buku lain atau menghapus keterangan existing agar dukungan bahasa tampak lengkap.
