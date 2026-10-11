# Verifikasi independen alur Home dan aset v2

**Metode:** server milik verifikator `npm run dev -- --port 4581 --ignore-lock` pada `127.0.0.1:4581`; permintaan HTTP memakai `urllib.request` dengan `HTTPRedirectHandler.redirect_request = None`, HTML mentah diparsing memakai BeautifulSoup, SQLite dibuka `mode=ro`. Server proyek lain pada `:4322` tidak disentuh. Ini pengamatan **server development**, bukan artefak build produksi. `/404.html` memang berstatus HTTP 404. Status halaman `/{locale}/beranda/` ialah 404 tanpa `Location` pada keempat bahasa.

## Ringkasan pemeriksaan

| # | Putusan | Perintah/probe dan keluaran mentah ringkas |
|---|---|---|
| 1 | **PASS** | `npm run check` → `Result (59 files): - 0 errors - 0 warnings - 0 hints`. `npm test` → tujuh tahap: `Reading invariants OK`, `Offline safety OK: cached content/status integrity, verified repair, cross-worker exclusion, cancellation, stalled recovery, route aliases, 404/503.`, `Offline client OK`, `Content integrity OK`, `Self-test OK`, `Translation import OK`, `Tafsir import OK`. Dua `ExperimentalWarning: SQLite is an experimental feature` dari Node bukan warning diagnostik Astro. `node --experimental-strip-types scripts/prayer-selfcheck.mjs` → `25 cities, 775 days, 4650 comparisons; deterministic and invalid-input assertions passed.`; baris terakhir `PASS`. |
| 2 | **PASS** | `npm run dev -- --port 4581 --ignore-lock`; Python `urllib.request` dengan redirect dinonaktifkan dan selektor `html[lang]`, `h1`, `.service-grid`, `.home-daily`: `/`, `/id/`, `/en/`, `/ja/`, `/zh-Hans/` masing-masing `HTTP 200`, `Location=None`, `lang=id/id/en/ja/zh-Hans`, `h1=Assalamu’alaikum`, `service-grid a=17`, blok ayat harian=ada. HTML langsung memuat konten; tidak bergantung redirect atau JavaScript. |
| 3 | **PASS** | Python `urllib.request` tanpa redirect atas 87 URL; status lengkap pada tabel rute di bawah: 82 × 200, empat `/{locale}/beranda/` × 404, satu `/404.html` × 404, `Location` nonkosong=0. `/offline/` = 200. |
| 4 | **FAIL bila aturan nav diberlakukan pada SEMUA URL; PASS untuk halaman aplikasi** | BeautifulSoup untuk **87** respons HTML: `h1 variants Counter({1: 87})`, `aria-current variants Counter({1: 87})`. Pada 80 halaman aplikasi lokal + `/`, nav aktif tunggal sesuai tabel di bawah. Root `/` mengaktifkan `/id/` dengan `page`, karena ini entry **Home**, bukan redirect. Namun empat respons `/{locale}/beranda/` (404), `/404.html` (404), dan `/offline/` (standalone 503 UI, respons dev 200) masing-masing hanya memiliki breadcrumb `<span aria-current="page">` dan **nol** `.bottom-nav a`: jika “EVERY page fetched” berarti wajib nav aktif pada enam fallback itu, ada **6 mismatch**. Tidak menambahkan nav ke fallback lintas-locale karena tidak ada locale halaman yang dapat dipilih dan desain fallback sengaja berdiri sendiri. `tajwid/` = Beranda/`true`. |
| 5 | **PASS** | `a.app-bar-back` pada 76 subhalaman valid: `back 76 mismatches []`; seluruh 76 target `HTTP 200`. Pemetaan lengkap berdasarkan sufiks rute di bawah; masing-masing berlaku untuk empat locale. Root tidak punya back link; standalone fallback tidak memakai app bar. |
| 6 | **PASS, cakupan SSR** | HTML mentah (JS tidak dieksekusi) untuk `id` dan `ja`: `/{locale}/` → grid 17 dan ayat harian, nav 4; `/{locale}/surat/` → 114 baris `li[data-surah-row]`, tautan reader, nav 4; `/{locale}/surat/1/` → tujuh `.verse`, tujuh `.arabic`, tujuh `.latin`, terjemahan pada ayat, tujuh tautan tafsir dan empat tautan nav. Kontrol pencarian direktori beratribut `hidden` sebelum JS, sedangkan seluruh 114 tautan tetap tersedia tanpa JS. |
| 7 | **PASS** | Query read-only `sqlite3.connect('file:.../data/quran.sqlite?mode=ro', uri=True)`, `SELECT content FROM json_files WHERE path=?` untuk `surat/1.json`, `surat/2.json`, dibandingkan dengan teks `.verse .arabic` tanpa normalisasi Unicode: locale `id,en,ja,zh-Hans` masing-masing `7/286` ayat; direktori masing-masing 114 baris. Untuk **setiap** locale, ayat 1:1, 1:2, 1:7, 2:1, 2:2, 2:286 → `get_text() == teksArab` = `True` (24/24). Pada `id` dan `ja` setidaknya, perbandingan string Unicode tersebut byte-identik setelah UTF-8 encoding. |
| 8 | **PASS (aset yang teramati)** | HTML `/` memuat `<img class="home-art" src="/@fs/Users/bangadam.dev/superconductor/projects/myalquran/src/assets/illustrations/generated-5.webp?origWidth=512&origHeight=512&origFormat=webp" alt="" aria-hidden="true" width="170" height="150">`; GET URL tersebut → `HTTP 200`, `8904` byte, magic `RIFF…WEBP`. `src/assets/illustrations/` hanya berisi `generated-5.webp` (8904 byte). Inventaris mandiri folder Pencil `images/`: 10 PNG (sembilan selain `generated-5.png`); `references/`: `fable.jpg`, `speechify.jpg`, `apple-books.jpg`. Pencarian nama pada repo dan SHA-256 seluruh gambar sumber versus gambar repo: tidak satu pun sembilan file lain atau tiga referensi disalin secara identik; `.jpg` di repo = 0. Pemeriksaan ini tidak membuktikan asal/hak gambar yang sudah dikompresi. |
| 9 | **PASS untuk konfigurasi; manifest produksi tidak diuji** | `git diff --unified=0 -- astro.config.mjs scripts/offline-packages.mjs`: `scripts/offline-packages.mjs:24` sebelum `/\.(html\|css\|js\|woff2\|ttf\|png\|svg)$/`, sesudah `/\.(html\|css\|js\|woff2\|ttf\|png\|svg\|webp)$/`; `astro.config.mjs:28` sebelum `'_astro/*.{js,css,woff2,ttf}'`, sesudah `'_astro/*.{js,css,woff2,ttf,webp}'`. `npm test` offline: `Offline safety OK`, `Offline client OK`; tidak ada build produksi, sehingga keberadaan WebP dalam manifest hasil build **tidak dapat diklaim**. |
| 10 | **PASS setelah dua perbaikan minimal** | Pencarian seluruh `src/`: `beranda.astro`, literal `/beranda/`, template `/${locale}/beranda/` → **0 hit**; `src/pages/[locale]/` berisi `index.astro`, `surat/index.astro`, tanpa `beranda.astro`. Home body hanya `src/components/Home.astro`; `src/pages/index.astro:3,7` dan `src/pages/[locale]/index.astro:3,10` hanya mengimpor/memanggilnya. Temuan baris-per-baris dan dua orphan nyata di bawah. |
| 11 | **PASS pada inventaris kode, bukan simulasi storage browser** | `grep 'localStorage|savedKey|positionKey|amalKey|khatamKey|choiceKey|const key =' src` → seluruh nama dan titik read/write tercatat di bawah; `src/scripts/library.ts:12-13` tetap membentuk reader URL `/${locale}/surat/${item.surah}/#ayat-${item.verse}` tanpa mengganti storage key. Tidak ada migrasi/rename key pada perubahan rute yang diperiksa. |

`npm test` adalah **tujuh** perintah berantai persis: `node --experimental-strip-types scripts/selfcheck.ts && node scripts/offline-selfcheck.mjs && node scripts/offline-client-selfcheck.mjs && node scripts/translation-selfcheck.mjs && python3 json_to_sqlite.py --selftest && python3 scripts/import-translations-selfcheck.py && python3 scripts/import-tafsir-selfcheck.py`. Keluaran keberhasilan berturut-turut: `Reading invariants OK`, `Offline safety OK`, `Offline client OK`, `Content integrity OK`, `Self-test OK`, `Translation import OK`, `Tafsir import OK`. `scripts/outcome-smoke.mjs` tidak termasuk tujuh tahap tersebut dan tidak dijalankan sebagai bagian pemeriksaan ini. `git diff -- scripts/shell-smoke.mjs scripts/reader-smoke.mjs scripts/outcome-smoke.mjs` menunjukkan hanya dua file pertama berubah; assertion baru language picker `/id/bahasa/`, empat pilihan + tabel, serta deep-link `?from=`; `outcome-smoke.mjs` tidak berubah.

## Status semua rute

Perintah: `npm run dev -- --port 4581 --ignore-lock`, lalu GET per URL via Python `urllib.request.build_opener(NoRedirect)`; `NoRedirect.redirect_request` mengembalikan `None`, `HTTPError.code` dipakai sebagai status. Kolom menyatakan HTTP untuk `/{locale}/<sufiks>`; setiap permintaan tanpa header `Location`.

| Sufiks / rute | id | en | ja | zh-Hans |
|---|---:|---:|---:|---:|
| `/` (root setiap locale) | 200 | 200 | 200 | 200 |
| `/surat/` | 200 | 200 | 200 | 200 |
| `/surat/1/` | 200 | 200 | 200 | 200 |
| `/surat/2/` | 200 | 200 | 200 | 200 |
| `/tafsir/1/` | 200 | 200 | 200 | 200 |
| `/doa/` | 200 | 200 | 200 | 200 |
| `/doa/42/` | 200 | 200 | 200 | 200 |
| `/tersimpan/` | 200 | 200 | 200 | 200 |
| `/pengaturan/` | 200 | 200 | 200 | 200 |
| `/bahasa/` | 200 | 200 | 200 | 200 |
| `/offline/` | 200 | 200 | 200 | 200 |
| `/tentang/` | 200 | 200 | 200 | 200 |
| `/tasbih/` | 200 | 200 | 200 | 200 |
| `/kalender/` | 200 | 200 | 200 | 200 |
| `/kiblat/` | 200 | 200 | 200 | 200 |
| `/masjid/` | 200 | 200 | 200 | 200 |
| `/jadwal-shalat/` | 200 | 200 | 200 | 200 |
| `/pengingat/` | 200 | 200 | 200 | 200 |
| `/ramadan/` | 200 | 200 | 200 | 200 |
| `/tajwid/` | 200 | 200 | 200 | 200 |
| `/beranda/` (sudah dihapus) | **404** | **404** | **404** | **404** |
| **URL literal `/`** | **200**, `lang=id`, tanpa redirect | — | — | — |
| **URL literal `/404.html`** | **404**, tanpa redirect | — | — | — |
| **URL literal `/offline/`** | **200**, tanpa redirect | — | — | — |

## Pemetaan nav dan back link

Semua target ditulis dengan `{l}` = salah satu dari `id,en,ja,zh-Hans`; masing-masing baris dinilai **empat kali** pada HTML mentah. Kolom nav menunjukkan **target elemen yang benar-benar memiliki** `aria-current`, bukan sekadar nilai yang diperkirakan. `—` berarti Home tanpa app-bar back link. Nama nav: `/{l}/` = Beranda, `/{l}/surat/` = Al-Qur'an, `/{l}/tersimpan/` = Tersimpan, `/{l}/pengaturan/` = Pengaturan. 76 back link = 19 sufiks × empat locale, semua target 200.

| Halaman `/{l}/…` | Nav aktif → token | Back link → status |
|---|---|---|
| root `/` | `/{l}/` → `page` | — |
| `surat/` | `/{l}/surat/` → `page` | `/{l}/` → 200 |
| `surat/1/` | `/{l}/surat/` → `true` | `/{l}/surat/` → 200 |
| `surat/2/` | `/{l}/surat/` → `true` | `/{l}/surat/` → 200 |
| `tafsir/1/` | `/{l}/surat/` → `true` | `/{l}/surat/1/` → 200 |
| `doa/` | `/{l}/` → `true` | `/{l}/` → 200 |
| `doa/42/` | `/{l}/` → `true` | `/{l}/doa/` → 200 |
| `tersimpan/` | `/{l}/tersimpan/` → `page` | `/{l}/` → 200 |
| `pengaturan/` | `/{l}/pengaturan/` → `page` | `/{l}/` → 200 |
| `bahasa/` | `/{l}/pengaturan/` → `true` | `/{l}/` → 200 |
| `offline/` | `/{l}/pengaturan/` → `true` | `/{l}/` → 200 |
| `tentang/` | `/{l}/pengaturan/` → `true` | `/{l}/` → 200 |
| `tasbih/` | `/{l}/` → `true` | `/{l}/` → 200 |
| `kalender/` | `/{l}/` → `true` | `/{l}/` → 200 |
| `kiblat/` | `/{l}/` → `true` | `/{l}/` → 200 |
| `masjid/` | `/{l}/` → `true` | `/{l}/` → 200 |
| `jadwal-shalat/` | `/{l}/` → `true` | `/{l}/` → 200 |
| `pengingat/` | `/{l}/` → `true` | `/{l}/` → 200 |
| `ramadan/` | `/{l}/` → `true` | `/{l}/` → 200 |
| `tajwid/` | `/{l}/` → `true` | `/{l}/` → 200 |
| **URL literal `/`** | `/id/` → `page` | — |
| `/404.html`, `/offline/`, `/{l}/beranda/` | breadcrumb `<span aria-current="page">`; **tidak ada bottom nav** | — |

## Regresi rute: semua temuan relevan

| Lokasi/baris | Bukti dan penilaian |
|---|---|
| Pencarian `src/**`: `beranda.astro`, `/beranda/`, `/${locale}/beranda/` | **0 hit**. Pencarian luas `beranda` hanya memberi label bahasa Indonesia `src/lib/interface-labels.ts:113` ("Beranda"), **benar** sebagai nama tab, bukan tautan lama. Tidak ada file bekas di `src/pages/[locale]/`. |
| `src/pages/index.astro:3,6-7`; `src/pages/[locale]/index.astro:3,9-10`; `src/components/Home.astro:35-57` | Dua route memanggil satu Home body; tidak ada duplikasi markup. Header greeting tunggal dikelola `src/layouts/BaseLayout.astro:76-80`; **benar**. |
| `src/layouts/BaseLayout.astro:13,14-18,89-95` | Back reader menuju direktori baru; tab Home/surat/tersimpan/pengaturan serta `aria-current` sesuai hasil HTTP; **benar**. |
| `src/components/Home.astro:16,46,56,83` | Service Al-Qur'an dan tautan “Daftar surah” menuju `/surat/`, ayat harian menuju reader; **benar**. |
| `src/scripts/library.ts:1-2,12-13,52-53,78-79,131-144` | Saved dan resume memakai key lama, konstruksi link menuju `/surat/{n}/#ayat-{verse}`; **benar**. `src/pages/[locale]/tersimpan.astro:9-14` tidak memiliki tautan “buka direktori” di konten (bukan tautan usang); bottom nav menyediakan `/{l}/surat/`. |
| `src/pages/[locale]/surat/index.astro:11-25` | 114 link `/{l}/surat/{n}/`; search input semula `hidden` dan diaktifkan client script; **benar**, namun pencarian interaktif tidak teruji pada no-JS. |
| `src/pages/[locale]/tafsir/[nomor].astro:38,42`; `src/pages/[locale]/surat/[nomor].astro:38,49-51` | Tafsir↔reader dan pagination menuju jalur baru; **benar**. |
| `src/pages/[locale]/bahasa.astro:11-14`; `src/components/Home.astro:10,42`; `src/components/ContentAvailability.astro:2,7` | Bahasa: empat locale choices + empat baris coverage; Home: current-locale coverage hanya bila tidak lengkap (`id=0`, `en/ja/zh-Hans=1` baris). **Benar**. |
| `src/pages/[locale]/offline.astro:5,20`; `src/pages/[locale]/doa/index.astro:4,19` | `ContentAvailability` untuk locale berjalan pada halaman unduhan, dan pada doa bila translation fallback; ini **bukan tabel empat-locale**; benar sebagai pengungkapan kontekstual. |
| `src/pages/[locale]/tentang.astro:4,17-22` **sebelum perbaikan** | **Orphan:** tabel empat-locale identik pada halaman Tentang, padahal `bahasa/` telah menjadi pemilik tunggal. Sebelum: `/{l}/tentang/` = 4 coverage rows untuk tiap locale; setelah: `/{l}/tentang/` = 0 coverage rows, dua section sumber terjemahan/tafsir masih ada, `/{l}/bahasa/` = 4 coverage rows, masing-masing HTTP 200. Perbaikan minimal: hapus import dan satu section duplikat; lihat perubahan pada file tersebut. |
| `src/pages/404.astro:57`; `src/pages/offline.astro:55` **sebelum perbaikan** | **Orphan label→target:** teks `Kembali ke bacaan` / `Back to reading` / `閲覧に戻る` / `返回阅读` masih menuju `/{l}/` yang sekarang Home, bukan direktori bacaan. Setelah mengganti hanya `href` ke `/{l}/surat/`: empat target pada **masing-masing** fallback menjadi HTTP 200; `/404.html` tetap 404 dan `/offline/` tetap 200; teks tetap. |
| `src/pages/[locale]/pengaturan.astro:13,15`; `src/layouts/BaseLayout.astro:54-65`; `src/pages/404.astro:57`; `src/pages/offline.astro:55` | Pemilih bahasa `/{l}/bahasa/`, pembaca preferensi `/{l}/surat/1/`, language links standalone kini reader directory, pengubah locale mempertahankan deep link jika valid; **benar**. |

## Inventaris seluruh localStorage di `src/`

| Key | Pembacaan → penulisan/penghapusan | Pengaruh rute |
|---|---|---|
| `myalquran:saved-verses:v1` | `src/scripts/library.ts:1,23` → `:79,132` | Tidak berubah; URL reader dari `:12-13` sudah `/surat/{n}/`. |
| `myalquran:reading-position:v1` | `src/scripts/library.ts:2,25` → `:144` | Tidak berubah; resume ke `/surat/{n}/`. |
| `reading-scale` | `src/layouts/BaseLayout.astro:28` → `src/components/ReaderControls.tsx:67` | Tidak berubah. |
| `myalquran:reading-display:v1` | `src/layouts/BaseLayout.astro:32` → `src/components/ReaderControls.tsx:48` | Tidak berubah. |
| `myalquran:theme:v1` | `src/layouts/BaseLayout.astro:30` → `src/components/ThemeControls.tsx:22` | Tidak berubah. |
| `myalquran:prayer-choice:v1` | `src/pages/[locale]/jadwal-shalat.astro:20,47,85` dan `pengingat.astro:47,82` → `jadwal-shalat.astro:95` | Sama untuk keempat locale; tidak bergantung path. |
| `myalquran:prayer-reminders:v1` | `src/pages/[locale]/pengingat.astro:46,64` → `:121` | Tidak berubah. |
| `myalquran:tasbih-counts:v1` | `src/pages/[locale]/tasbih.astro:35,44` → `:60` | Tidak berubah. |
| `myalquran:ramadan:amal:v1:${date}` | `src/pages/[locale]/ramadan.astro:97,116` → `:151` | Tanggal lokal, bukan route. |
| `myalquran:ramadan:khatam:v1` | `src/pages/[locale]/ramadan.astro:98,118` → `:164` | Tidak berubah. |
| `myalquran:storage-probe` | `src/scripts/library.ts:20-22` dan `src/pages/[locale]/ramadan.astro:114-115` → `setItem` lalu `removeItem` | Probe sementara; bukan data pengguna. |
| `myalquran:tasbih-probe` | `src/pages/[locale]/tasbih.astro:42-43` → `setItem` lalu `removeItem` | Probe sementara; bukan data pengguna. |

## Tidak dapat diverifikasi di sini

- Manifest precache/package dan URL aset produksi: **tidak menjalankan build produksi**; regex/glob dan dev URL WebP yang teramati tidak membuktikan output produksi.
- Perangkat fisik, ukuran/warna tampilan sungguhan, pengaturan offline aktual di perangkat, dan pemakaian app install.
- Pembaca layar sesungguhnya: hanya jumlah/atribut HTML yang diperiksa.
- Jalur izin notification/geolocation dan penolakan izin oleh browser/perangkat; tidak diuji.
- Hak konten, provenance penerbit dan persetujuan editorial/redistribusi, termasuk ilustrasi.
- Browser JavaScript sungguhan untuk fitur pencarian, penyimpanan dan interaksi PWA: pemeriksaan no-JS memakai SSR HTML, bukan eksekusi browser.
