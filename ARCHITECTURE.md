# ARCHITECTURE — MyAlQuran

Status: implementasi Astro/SQLite/shadcn/PWA berjalan untuk verifikasi lokal; konten empat bahasa belum lengkap. Kebutuhan wajib ada di [PRD.md](PRD.md); visual/aksesibilitas di [DESIGN.md](DESIGN.md); bukti dan batas verifikasi di [README.md](README.md).

## 1. Stack dan batas sistem

**Astro static output + SQLite build-time + shadcn/ui + PWA.** Konten dihasilkan sebagai HTML; tidak memerlukan server database atau SSR saat dibaca.

- SQLite: gunakan `node:sqlite` bawaan Node yang kompatibel dengan versi Astro terpilih; read-only. Runtime lokal Node 22.22.3 berhasil membaca database dengan `DatabaseSync`, tetapi modulnya masih berstatus experimental pada versi itu. Pin versi Node yang diuji saat implementasi; jangan menekan warning atau menambah driver tanpa kebutuhan.
- shadcn/ui: ikuti integrasi resmi Astro dengan `@astrojs/react` dan Tailwind. Komponen dipasang sebagai source lokal; ambil hanya kontrol yang dipakai.
- React untuk islands kontrol interaktif, bukan seluruh halaman bacaan. Markup bacaan dan navigasi utama tetap HTML Astro.
- PWA: `vite-plugin-pwa`/Workbox melalui hook Astro lokal `scripts/pwa.mjs`, memakai `injectManifest`. Wrapper lama hanya mendukung Astro 5; integrasi langsung memungkinkan Astro 7 yang telah diperbarui keamanan.
- Tidak ada scraping, pengambilan konten dari API, ORM, SPA router, database client/WASM, backend, atau CMS.
- `lottie-react` hanya pada island maskot beranda, aset lokal; reduced motion menampilkan SVG statis dan runtime animasi tidak diperlukan untuk bacaan.

Penambahan React/Tailwind/PWA adalah konsekuensi kebutuhan shadcn dan offline yang diminta, bukan mengganti Astro menjadi SPA.

## 2. Alur data

```text
data/quran.sqlite (read-only)
              ↓
 validasi dokumen + locale
              ↓
        prerender Astro
              ↓
 HTML locale + CSS/JS/font + manifest resource offline
              ↓
       static hosting HTTPS
              ↓
  browser / cache service worker per locale
```

Website hanya membaca SQLite. JSON di luar database dan `json_to_sqlite.py` merupakan arsip/tooling pemeliharaan, tidak dijalankan saat dev/prerender/request dan tidak menjadi fallback.

Pembaruan database adalah perubahan lokal yang divalidasi dan diikuti publikasi ulang. Database tidak dikirim ke browser atau disalin ke `public/`. Browser offline membaca resource hasil prerender, bukan query SQLite.

Tool refresh arsip mempertahankan seluruh key `locales/` SQLite existing. Konflik isi dengan file locale arsip menghentikan refresh; output tak terkait/custom schema atau rusak juga ditolak. Dokumen arsip lain mengikuti snapshot sumber. File output diganti atomik setelah transaksi sukses; jalankan pemeliharaan tanpa penulis database lain, bukan dari lifecycle website.

## 3. Struktur minimum yang direncanakan

Struktur aplikasi telah dibuat. Konfigurasi PWA terhubung melalui `scripts/pwa.mjs`; paket resource dibuat oleh `scripts/offline-packages.mjs`.

```text
data/quran.sqlite
src/
  lib/content.ts                 # pembacaan SQLite dan validasi konten
  layouts/BaseLayout.astro       # head, shell mobile, skip link, PWA
  components/ui/                 # source shadcn yang digunakan
  components/ReaderControls.tsx  # ukuran bacaan dan kontrol terkait
  pages/
    index.astro                  # pilihan bahasa /
    [locale]/
      index.astro
      surat/[nomor].astro
      tafsir/[nomor].astro
      doa/index.astro
      doa/[id].astro
      tentang.astro
      offline.astro
    404.astro
  pwa.ts                         # registrasi/status/pesan ke worker
  sw.ts                          # paket offline dan routing cache
  styles/global.css              # Tailwind, token shadcn, tipografi/shell
public/                          # ikon dan aset publik saja
astro.config.mjs
components.json                  # konfigurasi shadcn
package.json
```

Satu modul pembaca konten cukup; tidak perlu repository/service/factory atau interface dengan satu implementation. Jangan mengirim modul `content.ts` atau import `node:sqlite` ke island React/browser.

## 4. SQLite dan kontrak query

Skema existing: `json_files(path TEXT PRIMARY KEY, content TEXT NOT NULL CHECK(json_valid(content))) WITHOUT ROWID`. Nilai `path` adalah **key dokumen di database**, bukan file yang dibuka website.

| Key existing | Field | Penggunaan |
| --- | --- | --- |
| `surat.json` | `nomor`, `nama`, `namaLatin`, `jumlahAyat`, `tempatTurun`, `arti` | Daftar surat dan route. |
| `surat/{nomor}.json` | `ayat[].nomorAyat`, `teksArab`, `teksLatin`, `teksIndonesia` | Teks Arab/transliterasi dan terjemahan ID. |
| `en/{nomor}.json` | `number`, `ayahs[].numberInSurah`, `textEnglish` | Terjemahan ayat EN, dipasangkan lewat nomor. |
| `tafsir/{nomor}.json` | `tafsir[].ayat`, `teks` | Tafsir ID. |
| `doa.json` | `id`, `grup`, `nama`, `ar`, `tr`, `idn`, `tentang`, `tag` | Doa ID dan rujukan. |

Query dokumen: `SELECT content FROM json_files WHERE path = ?`. Bind parameter, parse hanya dokumen yang diperlukan, validasi sebelum render. PRIMARY KEY sudah menyediakan indeks; jangan menambah indeks/tabel normalisasi tanpa query yang membutuhkan.

Tidak ada query per ayat: satu dokumen memuat seluruh ayat surat. Baca daftar/daftar doa sekali per proses prerender; per surat baca dokumen relevan untuk locale tersebut. Jangan memuat kajian/bookmark/wilayah shalat yang tidak dipakai. Koneksi harus ditutup pada akhir lifecycle dan tidak boleh membuat database kosong ketika file hilang.

## 5. Locale dan data tambahan

Locale yang diizinkan: `id`, `en`, `ja`, `zh-Hans`. Astro menghasilkan route hanya untuk kombinasi locale/nomor/ID yang valid melalui `getStaticPaths()`. `/` menjadi pemilih bahasa; canonical dan hreflang memakai prefix locale. Pergantian bahasa mempertahankan key konten dan hash ayat.

Tambahan konten tetap disimpan di tabel existing, tanpa database kedua. Rencana key untuk dokumen baru:

| Key locale (UI, terjemahan ayat JA/ZH, dan tafsir EN/JA/ZH tersedia; doa non-ID belum tersedia) | Kontrak |
| --- | --- |
| `locales/{locale}/ui.json` | Kamus key UI, status offline, label aksesibilitas, judul informasi situs. Key yang diwajibkan harus lengkap. |
| `locales/{locale}/surat/{nomor}.json` | `nomor`, `arti` opsional jika tidak ada metadata terverifikasi, `ayat: [{nomorAyat, terjemahan, catatan}]`; JA/ZH tersedia. Teks terjemahan dan footnotes tetap identik sumber. |
| `locales/{locale}/tafsir/{nomor}.json` | `nomor`, `format` opsional (`text`/`paragraph-html`), `tafsir: [{ayat, teks}]`; EN/JA/ZH tersedia. Teks mentah sumber dipertahankan. |
| `locales/{locale}/doa.json` | ID yang sama, nama/grup lokal, terjemahan dan keterangan yang diverifikasi; tambahan EN/JA/ZH. |
| `locales/{locale}/source.json` | Publisher, judul/deskripsi edisi, versi, URL/source terms, timestamp sumber/import, transcript/catalogue utuh serta checksum file sumber. JA/ZH tersedia. |
| `locales/{locale}/tafsir-source.json` | Metadata edisi tafsir terpisah dari terjemahan: publisher, title/description, version, source/terms URL, timestamp, transcript/catalogue, sumber lisensi dan checksum. EN/JA/ZH tersedia. |

Key JSON adalah isi SQLite, bukan kewajiban membuat file JSON sumber. Reuse Arab/transliterasi dari dokumen inti; jangan menggandakan atau mengubah teks Arab untuk tiap bahasa. Entri dengan field opsional kosong mengikuti sifat data asli, bukan wajib membuat teks yang tidak ada.

Build rilis empat bahasa gagal bila key/ayat/terjemahan yang wajib tidak lengkap. Selama pengembangan, status locale belum lengkap boleh ditampilkan dengan jelas tetapi tidak dianggap dukungan selesai. Tidak ada fallback bahasa diam-diam atau layanan terjemahan eksternal.

Coverage UI memakai `contentAvailability(locale)` dari SQLite saat prerender. Doa locale lengkap harus mempertahankan seluruh ID dan menyediakan terjemahan/rujukan jika sumber memiliki teks tersebut; blank tidak berarti lengkap. Untuk petunjuk non-Arab, `idn` locale menjadi teks utama dengan `textLanguage` sesuai locale, bukan teks Indonesia yang salah ditandai sebagai bahasa lain.

Terjemahan ayat JA/ZH diimpor sebagai pekerjaan pemeliharaan lokal dari SQLite/XML/catalogue resmi publisher. Website hanya membaca app SQLite; tidak ada downloader pada dev/prerender/request/browser. Seluruh 114 surat/6.236 ayat tiap edisi divalidasi dan SQLite/XML dibandingkan sebelum transaksi write tunggal. Catatan ditampilkan dengan disclosure native, tidak diringkas menjadi tafsir buatan. Kredit edisi/source/version muncul di semua reader yang menampilkan teks impor dan di Tentang.

Tafsir EN/JA/ZH memakai `scripts/import-tafsir.py` dengan download lokal. Metadata JA/ZH dibaca dari card edisi resmi QuranEnc; setiap respons API wajib memiliki seluruh nomor ayat surat tersebut dan tidak memiliki footnotes yang akan hilang. EN memakai QUL resource-content 171 dengan grup ayat eksplisit, dipasangkan ke corpus publisher Tafsir Center yang berlisensi CC BY 4.0 dan hash-pinned. Perbedaan sumber tercatat, bukan diperbaiki/inventasikan otomatis. Semua identitas/string diperiksa sebelum satu transaksi menulis 342 tafsir dan tiga provenance. `commentarySource(locale)` menyajikan kredit tafsir; `commentary()` mengubah hanya `<p>`/`</p>` EN menjadi newline untuk display ter-escape. Importer menolak markup lainnya. Rendering tetap tidak mengakses jaringan publisher.

## 6. Validasi dan keamanan konten

- SQLite dapat dibuka read-only, integritas database baik, tabel/kolom sesuai, seluruh `content` valid JSON.
- Daftar surat unik 1–114; identitas dokumen cocok; ayat dan tafsir mencakup nomor 1–`jumlahAyat` tanpa duplikasi. EN/JA/ZH cocok pada pasangan nomor surat/ayat, tidak dicocokkan lewat posisi array semata.
- Metadata detail surat (nama Arab/Latin, arti, jumlah ayat, tempat turun) harus identik dengan direktori; lokasi hanya Mekah/Madinah. Validasi surat/tafsir locale dilakukan saat ingestion sebelum data dipakai oleh reader, direktori, atau coverage. Cache hasil parse yang tervalidasi agar rendering tidak mengulang parsing seluruh dokumen.
- Kamus UI memakai schema key wajib independen dari isi locale dan tipe `Labels` yang dihasilkan schema. Semua locale divalidasi saat ingestion; missing/blank/non-string label gagal dengan path/key, termasuk ketika key yang sama hilang dari seluruh bahasa. Cache kamus tervalidasi agar tiap consumer tidak mengulang parsing.
- Teks ayat/tafsir wajib string tidak kosong. ID doa unik; grup/judul/teks utama wajib tersedia; field opsional mengikuti sumber.
- Doa `ar` tidak selalu Arab: teks petunjuk Indonesia memakai bahasa/arah sebenarnya, bukan special-case ID. `tentang` kosong dinyatakan tidak tercantum.
- Database/key hilang atau JSON rusak menghentikan prerender dengan lokasi masalah; tidak membuat placeholder atau fallback file/API.
- String dirender ter-escape, tanpa `set:html` untuk dataset. `deskripsi` HTML existing tidak dirender pada cakupan ini. Jika rich text diperlukan, gunakan sanitizer allowlist teruji.
- Teks bacaan/harakat/rujukan dipertahankan. Referensi media audio sudah dikeluarkan dan URL gambar penyedia dikosongkan; audio/kajian tidak digunakan website.
- Jangan menerbitkan database, bookmark, environment, atau kredensial sebagai aset. Izin penggunaan/atribusi tetap harus diperiksa.

## 7. shadcn dan progressive enhancement

Pasang hanya komponen relevan: Button, Select atau kontrol pemilih bahasa, Alert, Progress, dan kontrol ukuran bacaan. Pilih satu primitive family shadcn yang konsisten saat setup; jangan mencampur dua implementasi untuk kontrol yang sama.

Navigasi biasa tetap `<a>` dan konten tetap Astro. Komponen React statis tidak memerlukan hydration; kontrol yang membutuhkan event/keyboard diberi hydration eksplisit seperti `client:load`. Jangan memakai `client:only` untuk menyembunyikan bacaan sampai JavaScript siap. Pemilih bahasa tetap mempunyai alternatif tautan HTML.

Cache dependency Vite dipisahkan per command Astro melalui hook `astro:config:setup`: `node_modules/.vite/dev`, `sync`, dan `build`. Sync yang dipakai `astro check` membuat optimizer production walau tidak melakukan production build; berbagi cache dengan dev dapat mengganti `react/jsx-dev-runtime` menjadi versi production dengan `jsxDEV` undefined pada server aktif. Isolasi cache menjaga konfigurasi React standar tanpa alias/shim runtime dan memungkinkan typecheck saat dev berjalan.

Preferensi ukuran font dapat memakai penyimpanan lokal kecil dengan penanganan storage unavailable. Konten tidak disimpan di localStorage; tidak ada state manager global. shadcn memberi primitive, bukan bukti aksesibilitas otomatis—label, fokus, dialog dan kontras tetap diuji.

## 8. PWA dan cache offline

Gunakan manifest `display: standalone`, scope `/`, start URL `/`, ikon 192/512 serta maskable yang valid; HTTPS (localhost untuk pengembangan). Registrasi service worker memakai mode **prompt**, bukan reload otomatis.

### Paket bahasa

- Saat prerender, hasilkan manifest resource per locale dengan versi/hash, daftar route yang benar-benar dibuat, aset CSS/JS/font yang dibutuhkan, dan perkiraan ukuran. Jangan hardcode daftar ayat/route di worker.
- Precache awal mencakup shell/pemilih bahasa, bantuan offline/404, bundle `_astro/` CSS/JS/font, ikon SVG/PNG dan manifest web. Bundle kecil yang dipakai lintas kontrol ikut disimpan agar hydration tidak bergantung pada memori HTTP. HTML bacaan locale tetap hanya diunduh setelah tindakan pengguna **Simpan bahasa ini untuk offline**.
- Paket locale mencakup seluruh surat/tafsir/doa/informasi/halaman offline dalam locale itu, bukan sekadar route yang sudah dibuka. SQLite/raw JSON tidak termasuk.
- Semua resource harus sukses HTTP dan cocok versi sebelum status siap. Pakai cache staging bernama versi; tandai lengkap terakhir. Paket lama tetap aktif bila unduhan baru gagal; resource tidak lengkap tidak disajikan sebagai paket selesai.
- Repair paket aktif dengan versi yang sama dilakukan in-place tanpa menghapus halaman yang masih ada; unduh hanya resource hilang dan verifikasi hash sebelum menambahkannya. Gagal repair tidak menghapus cache aktif atau mengganti pointer; readiness tetap ditentukan dari kelengkapan seluruh resource. Staging terpisah tetap dipakai untuk versi baru.
- Respons paket cache diverifikasi terhadap status sukses, ukuran dan SHA-256 manifest untuk readiness, reuse repair, dan delivery. Korupsi tidak menghasilkan kesiapan palsu atau bacaan palsu; repair hanya mengganti entri invalid. Marker complete menyimpan manifest agar aset paket lama dapat diverifikasi tanpa pointer aktif. Marker legacy string tidak cukup untuk fallback aset lama. Hash melindungi konsistensi terhadap manifest, bukan perubahan manifest oleh script same-origin.
- Progress/status dikirim lewat pesan worker; quota/jaringan/cache eviction terdeteksi dan ditampilkan. Dukungan cache persisten tidak dijamin; permintaan persistence opsional setelah tindakan unduh, tanpa klaim permanen.
- Transport memvalidasi locale setiap package/manifest reply terhadap request. Progress tidak boleh mundur atau mengganti total; jika progress pernah dikirim, complete memerlukan completed=total dan jumlah resource package yang sama. Already-saved complete tanpa progress tetap diperbolehkan. Reply tidak valid menghasilkan error/cancel owner, bukan readiness palsu.
- Abort manifest/resource setelah 20 detik (sampai body selesai), lebih pendek dari deadline idle UI 30 detik; kirim progres awal setelah manifest. Baca body sekali untuk hashing dan cache, sehingga tidak menunggu clone stream kedua. Kegagalan berjalan melalui `finally`: lock dilepas, staging dibuang, pointer paket lama dipertahankan.
- Cancellation berjalan pada MessagePort request owner, bukan pesan global per locale. Timeout/abort transport dan pagehide menghentikan fetch request itu; tab lain ditolak sebagai busy tanpa memperoleh kendali cancel. Bersihkan staging sebelum melepas lock; repair cache aktif tidak dihapus. `pageshow` memeriksa readiness ulang agar back/forward cache tidak mempertahankan progress palsu.
- Outcome download gagal harus direkonsiliasi dengan status cache worker: kosongkan readiness stale terlebih dahulu, lalu perbarui package/manifest terverifikasi. Pertahankan error jika versi yang diminta belum lengkap; anggap sukses hanya jika versi tersebut lengkap dan manifest tidak menunjuk update berbeda. Kegagalan recheck tidak menjadi fallback sukses.
- Penulisan paket dikoordinasikan oleh Web Locks origin-wide `myalquran-offline-write` dengan `ifAvailable`; satu writer saja melintasi tab/versi worker. Worker waiting mengambil lock yang sama sebelum `skipWaiting`, sehingga menunggu transaksi/cleanup writer selesai. Browser tanpa Web Locks tidak mendapat unduhan offline; bacaan online tetap berfungsi. Upgrade dari worker legacy tanpa lock membutuhkan verifikasi terpisah.

### Request dan pembaruan

- Cache hanya request GET same-origin dalam manifest. Cache key memuat pathname locale penuh; hash tidak dikirim ke jaringan dan tetap mengarahkan ayat pada HTML yang tersimpan.
- Navigasi ke halaman tersimpan dapat dilayani dari paket lengkap ketika offline. Paket menggunakan versi yang sama agar HTML dan aset tidak tercampur.
- Normalisasi navigasi folder, tanpa trailing slash, dan `/index.html` ke cache key yang sama; query tidak mengubah konten statis. Route tidak dikenal pada katalog locale tersimpan mendapat HTTP 404; halaman dikenal tetapi belum tersedia, atau locale tanpa katalog, mendapat bantuan offline HTTP 503. Kedua fallback adalah HTML mandiri empat bahasa, bukan beranda palsu atau HTTP 200.
- Jangan mengaktifkan fallback SPA yang mengembalikan `index.html` untuk semua route; Astro memakai banyak halaman.
- Worker baru menunggu; pengguna memilih menerapkan update. Jangan menghapus paket lama sebelum penggantinya lengkap atau saat tab lama masih bergantung padanya. Refresh yang disetujui mempertahankan locale/path/hash.
- Online HTML tetap dapat dibaca tanpa JavaScript, tetapi install/cache offline/React controls memerlukan JavaScript. Tanpa cache pada kunjungan pertama offline tidak mungkin tersedia bacaan.

## 9. Publikasi dan verifikasi

Hosting hanya menyajikan artefak statis via HTTPS; domain/provider belum ditentukan. `site`, canonical, sitemap/hreflang, robots, manifest dan service worker memakai origin sebenarnya; `sw.js` harus direvalidasi agar pembaruan terdeteksi. Aset fingerprint boleh cache panjang; route 404 tidak dipetakan ke fallback SPA.

Verifikasi implementasi: jalur SQLite-only tanpa JSON arsip dan tanpa jaringan keluar; validasi seluruh ayat/locale; smoke dev server pada empat bahasa dan ukuran layar; keyboard/screen reader; PWA install, paket belum pernah dikunjungi offline, gangguan unduhan/quota, dan pembaruan dari dua versi. Gunakan dukungan dev PWA saat membangun; bukti dev saja tidak membuktikan artefak produksi.

Build produksi untuk verifikasi lokal telah dijalankan dengan persetujuan pengguna. Tidak ada deploy, commit, atau push. Bukti offline ID/EN dan hasil pemeriksaan dicatat di README; kelengkapan terjemahan dan domain/lisensi masih membatasi rilis publik.

## 10. Referensi

- [Astro prerender](https://docs.astro.build/en/guides/on-demand-rendering/) dan [routing statis](https://docs.astro.build/en/guides/routing/#static-ssg-mode).
- [shadcn/ui untuk Astro](https://ui.shadcn.com/docs/installation/astro).
- [SQLite bawaan Node 22](https://nodejs.org/docs/latest-v22.x/api/sqlite.html).
- [PWA integration Astro](https://vite-pwa-org.netlify.app/frameworks/astro) dan [lifecycle service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers).
