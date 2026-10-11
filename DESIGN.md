# DESIGN — MyAlQuran

Status: Implementasi shell v2 mengikuti spesifikasi [v2-spec.md](docs/design/v2-spec.md) dari koleksi Pencil 45 layar dan [peta kesenjangannya](docs/design/v2-gap.md); perilaku aktual mengacu kode. Data ilustratif canvas tidak disalin: teks agama, atribusi, cakupan bahasa, dan status offline tetap berasal dari aplikasi. Kebutuhan di [PRD.md](PRD.md); implementasi SQLite/Astro/PWA di [ARCHITECTURE.md](ARCHITECTURE.md).

## 1. Prinsip dan shell

**Mobile-first dan tetap mobile di desktop.** Satu kolom maksimal `480px`, terpusat jika layar lebih lebar; tanpa sidebar, panel tafsir kanan, grid bacaan, notch palsu, atau frame ponsel.

| Viewport | Perilaku |
| --- | --- |
| 320–480px | Shell selebar layar; padding isi minimal 16px dan safe area. |
| >480px termasuk desktop | Shell tetap 480px; ruang kosong kiri/kanan tidak menjadi area fitur. |
| Zoom/teks membesar | Teks/kontrol wrap, satu kolom, tanpa scroll horizontal atau fixed height. |

Scroll mengikuti dokumen browser, bukan scroll container seperti layar ponsel. App bar hijau kontekstual (`72px` minimum) menampilkan wordmark Andada Pro pada Home; pada setiap halaman lain, tautan kembali 44×44 dan judul halaman sebagai satu-satunya `h1` dalam Inter 20px/600. App bar tetap in-flow dan tidak menutupi konten; navigasi bawah empat tautan berada di footer **in-flow**, bukan fixed/sticky. Keduanya mengikuti tinggi konten dan tidak menutupi ayat. Tab atas, menu hamburger, dan footer teks lama telah dihapus.

Pengecualian: hanya dock **Kontrol baca** yang fixed di dasar viewport pada halaman bacaan; shell menyisakan sekitar 100px agar akhir bacaan tidak tertutup. Geometri dock terhadap navigasi bawah v2 telah diverifikasi lewat browser: pada 480×900 di akhir `/{locale}/surat/1/`, ayat terakhir berakhir sekitar 550px, dock mulai sekitar 740px, dan footer/navigasi bawah mulai sekitar 823px; ayat terakhir jelas dan navigasi tidak tertutup. Pada 390×844, dock juga tidak menutupi ayat terakhir, dan panel tampilan membuka tepat di tepi ayat tanpa menutupinya. Panel dapat di-scroll dan ditutup dengan Escape. Menu ayat kontekstual memakai `<details>`; tafsir tetap halaman tersendiri.

CSS shell minimum, tetap digunakan bersama Tailwind/shadcn:

```css
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; background: var(--outer); }
.app-shell {
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  min-height: 100svh;
  margin-inline: auto;
  background: var(--background);
  display: flex;
  flex-direction: column;
}
.site-header { min-height: 72px; background: var(--primary); color: var(--primary-foreground); }
.page-content { flex: 1; min-width: 0; padding: 20px; }
.site-footer { border-top: 1px solid var(--divider); }
.bottom-nav { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); }
.app-shell:has(.reader-dock) { padding-bottom: 100px; }
.arabic { direction: rtl; text-align: right; line-height: 2; }
.prose { white-space: pre-wrap; overflow-wrap: anywhere; }
[id^="ayat-"] { scroll-margin-block-start: 16px; }
```

`min-width: 0` pada isi flex/grid bila digunakan; tidak ada ellipsis atau `overflow: hidden` pada bacaan/harakat. Border shell termasuk dalam 480px. Kontrol shadcn yang memakai portal tetap mengikuti lebar viewport/shell, bukan popover desktop lebar.

## 2. shadcn/ui dan visual

**shadcn/ui wajib**, tetapi bacaan tidak diubah menjadi tumpukan card atau dashboard. Gunakan primitive yang diperlukan, dengan token tema yang konsisten dan label lokal.

| Kebutuhan | Pilihan UI |
| --- | --- |
| Simpan offline / coba lagi / update | Button dengan teks tindakan yang jelas. |
| Pilih bahasa | Halaman Bahasa dengan tautan empat locale, tersedia tanpa JavaScript. |
| Kesiapan/kegagalan offline | Alert in-flow, bukan toast yang cepat hilang. |
| Unduhan paket | Progress dengan teks jumlah/ukuran, cancel hanya bila benar-benar didukung. |
| Ukuran bacaan | Tombol kecil/sedang/besar atau kontrol berlabel, bukan ikon A tanpa penjelasan. |

React hanya diperlukan untuk kontrol interaktif. Teks ayat, daftar, dan tautan tetap langsung tampil. Jangan membuat desain kedua berbasis primitive lain atau memasang seluruh katalog shadcn.

Token v2 berikut dipakai oleh CSS aplikasi (nilai terang/gelap); palet `$fable-*` dalam spesifikasi Pencil selaras untuk warna isi, sementara batas input dan latar luar adalah nilai aplikasi:

| Peran / token CSS | Terang | Gelap |
| --- | --- | --- |
| Latar luar `--outer` | `#f2f4f2` | `#101512` |
| Isi `--background` | `#ffffff` | `#171c19` |
| Teks `--foreground` | `#171717` | `#edf2ef` |
| Muted `--muted-foreground` | `#626966` | `#aab8b0` |
| App bar, link, ring `--primary` | `#1e5546` | `#9bd1b9` |
| Teks pada primary `--primary-foreground` | `#ffffff` | `#171c19` |
| Surface terpilih `--secondary` / `--highlight` | `#e7eeeb` | `#283e34` |
| Divider `--divider` | `#e3e7e5` | `#3a4a41` |
| Batas input `--border` | `#8d9993` | `#81958a` |

Variabel `$primary #a64612` oranye di berkas desain adalah **warisan yang tidak dipakai** pada node v2; bukan primary aplikasi. Tema gelap mengikuti OS sebelum pengguna memilih Terang/Gelap. App bar menampilkan wordmark Andada Pro hanya pada Home, sedangkan halaman lain menampilkan tautan kembali dan judul; ikon tetap memakai Lucide, dan tidak ada maskot pada halaman bacaan/direktori.

## 3. Tipografi dan kontrol membaca

| Elemen | Default |
| --- | --- |
| H1 judul app bar | Inter 20px/600. |
| H2 nama surah pada pembaca | Andada Pro 32px/1.25; judul Arab/metadata tetap tampilan bacaan. |
| Heading bagian | Inter 17–20px. |
| Arab | Noto Naskh Arabic 38px/1.8; judul 42px/1.6; RTL. |
| Terjemahan/tafsir | Andada Pro 19px/1.65; fallback sistem untuk JA/ZH. |
| Transliterasi / metadata | Inter 14px italic / 12–13px. |

Ukuran bacaan tersedia dengan pilihan 100%, 125%, 150% untuk blok bacaan (Latin/JA/ZH dan Arab); default 100%. Preferensi dapat diingat di perangkat bila storage tersedia; jangan menghalangi baca saat storage gagal. Tidak membatasi zoom browser dan tidak mengubah semua navigasi menjadi teks raksasa.

Dock menyediakan ukuran Arab 26–60px, terjemahan 15–30px, jarak baris 1.5–2.3, transliterasi dan terjemahan on/off. Ukuran Arab dan terjemahan independen; skala 100/125/150% tetap tersedia. Transliterasi default disembunyikan dengan JavaScript; tanpa JavaScript seluruh bacaan tetap tampil. Ke ayat memvalidasi angka bulat sesuai jumlah ayat lalu memindahkan fokus dan hash, tanpa pagination.

Terapkan ukuran tersimpan pada head sebelum parsing body untuk mencegah perpindahan posisi deep link saat hydration. Kontrol membaca keadaan yang sudah diterapkan, bukan mengubah ukuran kembali saat mount.

Inter, Andada Pro, dan Noto Naskh Arabic disimpan lokal bersama lisensi SIL OFL. Font `.ttf` disertakan dalam precache dan setiap paket bahasa; tidak ada font eksternal saat membaca. Jepang/Mandarin wrap secara alami tanpa `word-break: break-all`.

Dokumen memakai `lang` locale (`id`, `en`, `ja`, `zh-Hans`). Arab diberi `lang="ar" dir="rtl"`; teks rujukan/petunjuk yang masih menggunakan bahasa asal diberi bahasa yang benar. Shell/navigasi tetap LTR. Tidak menghapus harakat, mengganti teks, atau menyisipkan basmalah sintetis.

Spasi awal: 8px metadata, 12px antarjenis bacaan, 24px antarayat. Nomor ayat/permalink terpisah dari blok Arab; tidak menyisipkan angka LTR yang mengacaukan urutan baca.

## 4. Bahasa dan navigasi

Header in-flow adalah app bar hijau kontekstual: wordmark MyAlQuran (Andada Pro) hanya tampil pada Home bersama salam dan ilustrasi dekoratif lokal dari `src/components/HomeIllustration.astro`; halaman lain menampilkan tautan kembali 44×44 dan judul masing-masing sebagai satu-satunya `h1`. Halaman `/` langsung menampilkan Home bahasa default `id` tanpa redirect atau JavaScript; `/{locale}/` menampilkan Home bahasa tersebut. Keduanya memakai isi bersama `src/components/Home.astro`. Isi utama memakai padding 20px, turun ke 16px pada viewport ≤360px.

Footer in-flow berisi tepat empat tautan berurutan: **Beranda** (`house`, `/{locale}/`), **Al-Qur'an** (`book-open`, `/{locale}/surat/`), **Tersimpan** (`bookmark`, `/{locale}/tersimpan/`), **Pengaturan** (`settings`, `/{locale}/pengaturan/`). Label dilokalisasi untuk empat locale. Direktori 114 surat dengan pencarian berada di `/{locale}/surat/`; reader `/{locale}/surat/{nomor}/` dan tafsir `/{locale}/tafsir/{nomor}/` mengaktifkan Al-Qur'an. Kecocokan tepat target navigasi memakai `aria-current="page"`, termasuk Home `/` dan `/{locale}/`; detail surat/tafsir mengaktifkan Al-Qur'an, sedangkan Bahasa, Unduhan, dan Tentang mengaktifkan Pengaturan dengan `aria-current="true"`. Semua rute fitur tanpa tab tersendiri—Tasbih, Kalender, Kiblat, Masjid, Jadwal Shalat, Pengingat, Ramadan, dan Tajwid—mengaktifkan Beranda sebagai induk fallback dengan `aria-current="true"`. Tepat satu item aktif pada setiap halaman dan satu `h1` per halaman. `/{locale}/beranda/` sudah dihapus dan merespons 404, tanpa alias redirect. Tab atas, hamburger, dan footer teks lama tidak lagi digunakan.

Pemilih bahasa dan tabel ketersediaan konten empat locale berada di `/{locale}/bahasa/`, menampilkan **Bahasa Indonesia**, **English**, **日本語**, **简体中文** tanpa bendera atau singkatan saja. Home hanya menampilkan keterangan ketersediaan locale saat cakupannya belum lengkap. Pilihan bahasa tidak menghapus nomor surat/doa/hash ayat. Locale yang kontennya belum lengkap diberi keterangan terlokalisasi yang jujur selama pengembangan; tidak mengklaim terjemahan tersedia dengan teks fallback tersembunyi.

Alur reader → Pengaturan → Bahasa membawa path dan hash melalui query `from` yang divalidasi. Tautan bahasa diperbarui sebelum interaksi dan pada hashchange/pageshow; open-new-tab mempertahankan ayat. Tanpa JavaScript, tautan pemilih menuju Home setiap bahasa di `/{locale}/`; direktori surat tetap tersedia melalui tab Al-Qur'an di `/{locale}/surat/`.

Navigasi halaman adalah tautan, bukan tombol JavaScript. Target sentuh minimal 44px dan sasaran WCAG 2.2 AA tetap berlaku; bacaan/navigasi HTML tidak tergantung JavaScript. Pemeriksaan screen reader penuh dan perangkat mobile belum dilakukan.

### Daftar dan halaman surat

Daftar vertikal 1–114: nomor tanpa badge, nama Latin/Arab, arti lokal, jumlah ayat; pencarian nama/nomor. Posisi terakhir dan jumlah bookmark berasal dari storage, bukan contoh canvas. Halaman `/{locale}/tersimpan/` memuat tautan ayat dan hapus bookmark; kegagalan storage ditampilkan. Reader: kembali → judul/metadata → atribusi → semua ayat → sebelumnya/berikutnya. Aksi simpan/tafsir/catatan ada dalam menu ellipsis setiap ayat.

Semua ayat tersedia tanpa infinite scroll, pagination, atau “muat lagi”. Kontrol offline tidak diulang di setiap ayat. Arab dan terjemahan sama-sama dapat dipilih/disalin.

Terjemahan ayat Jepang/Mandarin memakai edisi publisher bernama; pertahankan whitespace, penanda catatan dan footnotes dari sumber. Kredit publisher/translator dan versi tampil di area reader sebelum ayat, dengan source/terms link tanpa auto-fetch. Footnotes dibuka melalui `<details>`/`<summary>` berlabel lokal dengan target 44px, bahasa teks sesuai locale, dan ukuran bacaan yang sama. Jangan mengklaim footnotes sebagai tafsir lengkap atau mengisi arti/nama chapter yang belum diverifikasi.

### Tafsir dan doa

Tafsir tetap halaman satu kolom, bukan modal/panel desktop. Setiap bagian memuat nomor/konteks ayat, penjelasan, dan tautan kembali ke ayat. Tafsir Al-Mukhtasar EN/JA/ZH memiliki kredit edisi/source/version tersendiri sebelum ayat, tidak memakai kredit terjemahan sebagai atribusi tafsir. Teks JA/ZH dan isi paragraf EN dipertahankan; markup paragraf EN menjadi pemisah baris, tanpa menyajikan HTML mentah atau menghasilkan penjelasan baru.

Daftar doa dikelompokkan; detail memuat nama/grup, teks utama, transliterasi/terjemahan bila tersedia, serta rujukan. Field `ar` tidak otomatis bergaya Arab: contoh doa 42 adalah petunjuk Indonesia. Field kosong tidak menciptakan heading kosong; rujukan kosong seperti doa 144 diberi pesan sumber tidak tercantum, bukan referensi buatan.

### Tentang, 404, dan fallback offline

Tentang memuat keterbatasan, kredit yang diwajibkan, dan pembaruan tercatat. Halaman 404 mandiri menjelaskan halaman tidak ada dalam empat bahasa, dengan blok `lang` dan tautan kembali masing-masing. Bantuan offline juga mandiri empat bahasa, menyatakan **halaman ini belum tersimpan**, bukan 404 atau beranda halaman yang diminta. Keduanya terbaca tanpa JavaScript/aset eksternal; HTTP 404 untuk route tak dikenal, HTTP 503 untuk konten valid yang tidak tersedia offline.

## 5. PWA dan status offline

Kontrol paket terpusat di halaman Offline bahasa saat ini; indikator kesiapan ringkas boleh muncul di header tanpa menghalangi bacaan. Instal aplikasi dan unduh bahasa adalah dua tindakan berbeda—install saja tidak menjamin semua bacaan tersimpan.

| Keadaan | Tampilan dan tindakan |
| --- | --- |
| Belum diunduh | Ukuran perkiraan, cakupan **seluruh surat/tafsir/doa bahasa ini**, Button **Simpan bahasa ini untuk offline**. |
| Mengunduh | Progress dan teks `n / total`, ukuran bila diketahui; bacaan tetap dapat digunakan. |
| Siap | Bahasa dan versi/tanggal nyata, pesan **Siap offline**; tanpa janji penyimpanan permanen. |
| Gagal/ruang penuh | Pesan tindakan yang bisa dipahami, retry; tidak meninggalkan indikator sukses. |
| Cache hilang | Nyatakan perlu unduh ulang; jangan memakai status lama yang menyesatkan. |
| Update tersedia | Alert in-flow, **Perbarui saat siap**; disabled saat checking/download lokal, tanpa reload paksa ketika membaca. Prompt hilang setelah controller baru aktif. |
| Browser tidak mendukung | Bacaan online tetap bekerja; jelaskan offline/install tidak tersedia, bukan error fatal. Unduhan offline memerlukan service worker, Cache API, dan Web Locks. |

Teks status wajib dalam empat bahasa. Gunakan `role="status"`/`aria-live="polite"` untuk awal/selesai/gagal; jangan mengumumkan setiap persen. Progress bernama aksesibel. Tidak memindahkan fokus otomatis ketika koneksi berubah.

Jika prompt install tidak didukung, tampilkan instruksi platform yang akurat, misalnya Add to Home Screen; jangan membuat tombol yang menjanjikan install tapi tidak melakukan apa-apa. Permintaan hapus paket, bila ditambahkan, harus menyebut paket yang akan hilang dan memerlukan tindakan eksplisit.

## 6. Wireframe konseptual

```text
Mobile dan desktop memakai struktur yang sama; desktop terpusat, max 480px.
┌──────────────────────────────────┐
│ ← Al-Qur'an (ke /{locale}/surat/) │
├──────────────────────────────────┤
│ Al-Fatihah · 7 ayat              │
│                                  │
│ Ayat 1 · tautan                  │
│ [Arab RTL]                       │
│ [Transliterasi]                  │
│ [Terjemahan locale]              │
│ Baca tafsir ayat 1               │
│                                  │
│ [Ayat berikutnya]                │
├──────────────────────────────────┤
│ Beranda → /{locale}/             │
│ Al-Qur'an → /{locale}/surat/      │
│ Tersimpan → /{locale}/tersimpan/  │
│ Pengaturan → /{locale}/pengaturan/│
└──────────────────────────────────┘
Dock Kontrol baca fixed di viewport pembaca; ruang ~100px disisihkan.
```

Label contoh bukan teks dummy untuk diterbitkan; struktur menyesuaikan label lokal yang panjang. Tinggi mengikuti isi, bukan perangkat palsu.

## 7. Aksesibilitas mudah, bukan sekadar checklist

- Target WCAG 2.2 AA. Satu H1, hierarki heading benar, skip link terlihat saat fokus, landmark `header/nav/main/footer`.
- Semua tindakan bernama jelas dan berlabel lokal; ikon dekoratif disembunyikan dari screen reader. Tidak bergantung pada warna, hover, atau swipe.
- Target kontrol minimal 44 × 44px, termasuk permalink ayat. Fokus outline minimal 2px dengan offset dan kontras cukup; tidak terpotong shell.
- shadcn Select/Dialog bila digunakan: keyboard berfungsi, Escape menutup, fokus dikembalikan ke trigger, nama/description aksesibel. Jangan override primitive sampai semantik rusak.
- Zoom 200%, teks 150%, reflow 320 CSS px, reduced motion, forced colors bila tersedia. Tidak `user-scalable=no`, orientation lock, atau gesture-only action.
- Bacaan/navigasi utama dapat digunakan online tanpa JavaScript. PWA, status unduh, dan ukuran bacaan memerlukan enhancement; kegagalannya tidak menyembunyikan HTML.
- Hilangnya koneksi tidak membuka modal penghalang. Bacaan panjang tidak didominasi notifikasi atau panel pengaturan.

## 8. Pemeriksaan implementasi

Uji keempat locale pada daftar, surat pendek, Al-Baqarah, tafsir panjang, doa panjang/42/144, dan halaman offline:
- Viewport 320, 390, 768, 1440px; max 480px di desktop, selalu satu kolom.
- Zoom 200%/ukuran bacaan 150%, teks Jepang/Mandarin/harakat Arab tidak overflow atau terpotong.
- Keyboard serta VoiceOver/TalkBack: bahasa, heading, link, fokus controls dan status offline benar.
- JavaScript dimatikan untuk konten/navigasi online; JavaScript aktif untuk PWA dan shadcn interaction.
- Selesaikan paket, putus jaringan, tutup/buka PWA, buka halaman yang belum dikunjungi; deep link dan perpindahan ke locale yang telah diunduh tetap bekerja.
- Ganggu unduhan, simulasikan quota/cache eviction dan update; status jujur, versi lama tetap terbaca, tidak ada reload paksa.

Bukti visual desktop, kontrol bacaan dan offline pada shell sebelum v2 telah dikumpulkan; geometri dock bersama navigasi bawah v2 telah diverifikasi lewat browser pada 480×900 dan 390×844 seperti dijelaskan di §1. Pengujian perangkat mobile, reduced-motion OS, forced-colors, screen reader penuh, dan edge case storage masih diperlukan. Lihat README dan catatan implementasi untuk cakupan cek aktual.
