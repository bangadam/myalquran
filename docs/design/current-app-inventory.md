# Inventaris aplikasi saat ini

Inventaris sumber pada 11 Oktober 2026; angka konten dihitung langsung dari `data/quran.sqlite` (`json_files`, dibuka `mode=ro`), bukan dari berkas rencana. “Halaman/lokal” di bawah ialah jumlah entri `getStaticPaths`, bukan hasil menjalankan build. Rujukan baris mengacu pada sumber saat inventaris dibuat.

## Rute

`locales = ['id','en','ja','zh-Hans']`, daftar surah divalidasi berisi 114 nomor, dan ID doa berasal dari `doa.json` (227 entri teramati): `src/lib/content.ts:5-7,128-130,177-179`. Ada **13 berkas rute**, menghasilkan **462 halaman per lokal** (7 rute tunggal + 114 surat + 114 tafsir + 227 detail doa), serta 3 halaman root: total teoretis **1.851** halaman statis; `src/pages/[locale]/doa/[id].astro:6-8`, `src/pages/[locale]/surat/[nomor].astro:9-11`, `src/pages/[locale]/tafsir/[nomor].astro:7-9`.

| Berkas → URL | Tampilan dan parameter statis (jumlah/lokal) |
|---|---|
| `src/pages/index.astro:2-12` → `/` | Pemilih empat bahasa dan ringkasan ketersediaan; tanpa parameter (1 total). |
| `src/pages/404.astro:2-64` → `/404.html` | 404 mandiri dengan pesan/link untuk empat bahasa; tanpa parameter (1 total). |
| `src/pages/offline.astro:2-62` → `/offline/` | Fallback 503 mandiri berisi link empat bahasa; tanpa parameter (1 total). |
| `src/pages/[locale]/index.astro:2-27` → `/{locale}/` | Direktori 114 surah, pencarian dan tautan bacaan tersimpan; `locale` empat bahasa (1/lokal). |
| `src/pages/[locale]/bahasa.astro:2-13` → `/{locale}/bahasa/` | Pemilih bahasa dengan penanda pilihan; empat `locale` (1/lokal). |
| `src/pages/[locale]/pengaturan.astro:2-19` → `/{locale}/pengaturan/` | Bahasa, tema, tautan pengaturan baca; empat `locale` (1/lokal). |
| `src/pages/[locale]/tersimpan.astro:2-16` → `/{locale}/tersimpan/` | Ayat tersimpan dari perangkat; empat `locale` (1/lokal). |
| `src/pages/[locale]/tentang.astro:2-40` → `/{locale}/tentang/` | Ketersediaan dan atribusi terjemahan/tafsir; empat `locale` (1/lokal). |
| `src/pages/[locale]/offline.astro:2-27` → `/{locale}/offline/` | Ketersediaan, panel unduhan/pemasangan; empat `locale` (1/lokal). |
| `src/pages/[locale]/doa/index.astro:2-57` → `/{locale}/doa/` | Direktori doa berkelompok dan pencarian; empat `locale` (1/lokal). |
| `src/pages/[locale]/doa/[id].astro:2-32` → `/{locale}/doa/{id}/` | Detail teks, latin, terjemahan, catatan; empat `locale` × 227 `prayerIds` (227/lokal). |
| `src/pages/[locale]/tafsir/[nomor].astro:2-45` → `/{locale}/tafsir/{nomor}/` | Ayat dan tafsir atau pemberitahuan ketiadaan; empat `locale` × 114 `surahNumbers` (114/lokal). |
| `src/pages/[locale]/surat/[nomor].astro:2-55` → `/{locale}/surat/{nomor}/` | Ayat Arab/latin/terjemahan, aksi simpan, catatan, navigasi; empat `locale` × 114 nomor (114/lokal). |

## Komponen

Hanya tiga berkas `.tsx` tingkat atas dihidrasikan dengan `client:load`: `ReaderControls` pada surat/tafsir/doa, `ThemeControls` pada pengaturan, `OfflinePanel` pada offline (`src/pages/[locale]/surat/[nomor].astro:29`, `src/pages/[locale]/tafsir/[nomor].astro:26`, `src/pages/[locale]/doa/[id].astro:22`, `src/pages/[locale]/pengaturan.astro:15`, `src/pages/[locale]/offline.astro:25`). Tidak ada strategi `client:*` lain pada rute ini; komponen UI React di bawah dipanggil dari pulau React, bukan pulau terpisah.

| Berkas | Jenis; tujuan, props/state | Pemakai/evidensi |
|---|---|---|
| `src/components/ReaderControls.tsx:8-66` | React; `labels`, `locale`, `verseCount?`; state skala/ukuran Arab-terjemahan/jarak baris, toggle latin/terjemahan, lompat ayat, kesalahan input; preferensi `localStorage`. | Surat, tafsir, detail doa (`src/pages/[locale]/surat/[nomor].astro:29`; `tafsir/[nomor].astro:26`; `doa/[id].astro:22`). |
| `src/components/ThemeControls.tsx:6-27` | React; `locale`; state tema terang/gelap mengikuti sistem, `data-theme` dan `localStorage`. | Pengaturan (`src/pages/[locale]/pengaturan.astro:15`); juga anak `ReaderControls` (`src/components/ReaderControls.tsx:38`). |
| `src/components/OfflinePanel.tsx:9-19,31-46,75-123` | React; `locale`, `labels`; state paket siap/tersedia, progres, gagal, dukungan SW, pembaruan, pemasangan PWA; mengirim permintaan ke SW. | Halaman offline lokal (`src/pages/[locale]/offline.astro:25`). |
| `src/components/ContentAvailability.astro:2-18` | Astro saja; `locale`, `displayLocale?`, `headingLevel?`; menghitung dan menampilkan jumlah terjemahan/tafsir/doa tanpa state klien. | Root, tentang, offline lokal, direktori doa (`src/pages/index.astro:11`; `src/pages/[locale]/tentang.astro:21`; `offline.astro:21`; `doa/index.astro:22`). |
| `src/components/TranslationCredit.astro:2-12` | Astro saja; `source` (judul, edisi, penerbit, tautan syarat) tanpa state. | Surat, tafsir, tentang (`src/pages/[locale]/surat/[nomor].astro:30`; `tafsir/[nomor].astro:27-28`; `tentang.astro:27-32`). |
| `src/components/ui/button.tsx:6-63` | React/shadcn; props button + `variant`, `size`, `asChild`; tanpa state internal. | `ReaderControls.tsx:3,45,63`, `OfflinePanel.tsx:2,112-120` melalui kedua pulau. |
| `src/components/ui/alert.tsx:5-65` | React/shadcn; `Alert`, `AlertTitle`, `AlertDescription`, props elemen + varian; tanpa state. | `OfflinePanel.tsx:3,107,115` → offline lokal. |
| `src/components/ui/progress.tsx:5-28` | React/Radix; `value` dan props root; indikator progres tanpa state. | `OfflinePanel.tsx:4,110` → offline lokal. |
| `src/components/ui/select.tsx:1-20,26-50,52-87,89-189` | React/Radix, berisi Root/Group/Value/Trigger/Content/Label/Item/Separator/scroll buttons; props Radix, state seleksi di Root; memiliki direktif teks `"use client"`, **bukan** Astro `client:*`. | Tidak diimpor halaman maupun komponen aplikasi yang tercantum (pemakai: tidak ada dalam `src/components/`/`src/pages/`). |

`BaseLayout` bukan berkas di `src/components/`: ia merakit header, menu, navigasi, footer, skrip registrasi SW, pengaturan awal dan pustaka ayat; `src/layouts/BaseLayout.astro:2-18,24-37,47-51,70-88`.

## Data, penyimpanan, dan offline

| Sumber | Akses saat ini |
|---|---|
| `src/lib/content.ts:108-124` | Membuka **`data/quran.sqlite` read-only**, melakukan satu iterasi `SELECT path, content FROM json_files` dengan filter `surat.json`, `doa.json`, `surat/*.json`, `tafsir/*.json`, `en/*.json`, `locales/*`; `JSON.parse` ke `Map` memori, hash SHA-256 path+isi untuk `contentVersion`, lalu menutup koneksi. Parser Zod membaca Map; tidak menulis DB. |
| `src/lib/content.ts:128-183,190-249` | `surat.json`, `surat/{n}.json`, `tafsir/{n}.json`, `en/{n}.json`, `doa.json`; opsional `locales/{locale}/surat/{n}.json`, `tafsir/{n}.json`, `doa.json`, `source.json`, `tafsir-source.json`; wajib `locales/{locale}/ui.json`. Indonesia memakai ayat/tafsir dasar, Inggris ayat `en/`, JA/ZH memakai dokumen lokal; doa tanpa terjemahan memakai sumber Indonesia. Semua tervalidasi dan di-cache dalam Map sepanjang proses impor modul. |
| `src/lib/interface-labels.ts:3-8` | Objek statis empat lokal untuk **26** label UI tambahan; tidak membaca/menulis DB atau penyimpanan. |
| `src/lib/utils.ts:1-6` | `cn()` menggabungkan kelas `clsx` lalu `tailwind-merge`; tanpa I/O. |
| `src/scripts/library.ts:1-31,49-92,95-159` | Skrip browser membaca/menulis **localStorage** `myalquran:saved-verses:v1` dan `myalquran:reading-position:v1`; validasi sebelum ditampilkan, simpan/hapus bookmark dan posisi, pencarian surah DOM. Bukan SQLite; kegagalan penyimpanan tidak menghapus data lama. Diimpor `src/layouts/BaseLayout.astro:47-50`. |
| `src/lib/offline.ts:3-20,22-65` | Skema paket/response Zod dan klien `MessageChannel` (`status`/`download`), menunggu SW aktif, timeout, batal/progres; tidak menulis cache sendiri. |
| `src/sw.ts:5-9,11-51,53-102,103-184` | Workbox precache shell; status mengecek paket aktif dan manifest `/packages/{locale}.json`; unduh di bawah Web Lock, cocokkan ukuran/SHA-256 semua resource, simpan ke Cache Storage `myalquran-reading-{locale}-{version}`, lalu atomik menunjuk `/__offline-active/{locale}` dalam `myalquran-package-pointers`. Jika unduhan belum selesai hapus staging; versi lama utuh untuk tab terbuka. Fetch mencoba precache, paket lengkap terverifikasi, jaringan, lalu fallback 404/503. **Write hanya Cache Storage browser**, bukan SQLite. |
| `scripts/offline-packages.mjs:10-35`, `scripts/pwa.mjs:3-20` | Hook build membuat manifest per lokal dari output HTML/CSS/JS/font/gambar dengan ukuran/hash; hook PWA menghasilkan SW. Ini jalur tulis **output build**, bukan jalur tulis aplikasi runtime. |

## Gaya dan font

Semua nilai berikut dari `src/styles/global.css:7-48`; token `@theme inline` adalah alias ke variabel root dan sama di kedua tema kecuali targetnya berubah.

| Token root | Terang (`:root`) | Gelap (`prefers-color-scheme:dark` kecuali pilihan eksplisit light; juga `[data-theme=dark]`) |
|---|---|---|
| `--background` | `#fff` | `#171c19` |
| `--outer` | `#f2f4f2` | `#101512` |
| `--foreground` | `#171717` | `#edf2ef` |
| `--primary` | `#1e5546` | `#9bd1b9` |
| `--primary-foreground` | `#fff` | `#171c19` |
| `--secondary` | `#e7eeeb` | `#283e34` |
| `--muted-foreground` | `#626966` | `#aab8b0` |
| `--border` | `#8d9993` | `#81958a` |
| `--divider` | `#e3e7e5` | `#3a4a41` |
| `--highlight` | `#e7eeeb` | `#283e34` |
| `--reading-scale` | `1` | `1` (diwarisi) |
| `--arabic-size` | `38px` | `38px` (diwarisi) |
| `--translation-size` | `19px` | `19px` (diwarisi) |
| `--reading-line` | `1.65` | `1.65` (diwarisi) |

| Token `@theme inline` | Nilai kedua tema |
|---|---|
| `--color-background`, `--color-foreground`, `--color-primary`, `--color-primary-foreground`, `--color-secondary`, `--color-muted-foreground`, `--color-border` | Berturut-turut `var(--background)`, `var(--foreground)`, `var(--primary)`, `var(--primary-foreground)`, `var(--secondary)`, `var(--muted-foreground)`, `var(--border)` (`src/styles/global.css:8-18`). |
| `--color-secondary-foreground`, `--color-accent-foreground`, `--color-card-foreground`, `--color-popover-foreground` | `var(--foreground)` (`src/styles/global.css:13,17,22,24`). |
| `--color-muted`, `--color-accent` | `var(--secondary)` (`src/styles/global.css:14,16`). |
| `--color-input`, `--color-ring`, `--color-card`, `--color-popover` | `var(--border)`, `var(--primary)`, `var(--background)`, `var(--background)` (`src/styles/global.css:19-24`). |
| `--color-destructive`, `--radius-sm`, `--radius-md`, `--radius-lg` | `#a12d2d`, `.375rem`, `.5rem`, `.75rem` (`src/styles/global.css:25-28`). |

Tipografi: badan Inter `1.65`; brand Andada Pro 21px; `h1` Andada 36px/1.2 (judul surah 32px); `h2` 1.12rem/1.4, eyebrow 12px; teks Arab Noto Naskh Arabic `38px × --reading-scale` dan line-height maksimum 1.8/`--reading-line`; teks pembaca Andada `19px × --reading-scale`; latin Inter 14px miring (`src/styles/global.css:52,63,79-81,91-98,108-109,135`). Shell satu kolom `max-width:480px`, tinggi minimal viewport, header/main/footer dan padding aman notch; dock baca tetap di bawah dan lebar maksimal 480px; breakpoint <=360px serta preferensi reduced motion (`src/styles/global.css:60-78,133-134,142-162,175`). Font terpasang `src/assets/fonts/inter.ttf` + `inter-OFL.txt`, `andada-pro.ttf` + `andada-pro-OFL.txt`, `noto-naskh-arabic.ttf` + `noto-naskh-arabic-OFL.txt` (`src/styles/global.css:3-5`; berkas lisensi pada `src/assets/fonts/`).

## Label dan cakupan SQLite

26 kunci objek `interfaceLabels`: `settings`, `downloads`, `sources`, `controls`, `display`, `reading`, `jump`, `openVerse`, `arabicSize`, `translationSize`, `lineSpacing`, `actions`, `light`, `dark`, `theme`, `languageHelp`, `readingHelp`, `range`, `invalid`, `searchPrayer`, `directory`, `surahs`, `search`, `stored`, `smaller`, `larger` (`src/lib/interface-labels.ts:3-8`). Ini berbeda dari **78 kunci** di setiap kamus `locales/{locale}/ui.json`, yang dibaca dan divalidasi oleh `src/lib/content.ts:9-89,180-187`; nilai 78 diperoleh dari `json.loads(content)` pada `data/quran.sqlite:json_files`.

| Lokal | Kamus UI di `json_files` (kunci) | Dokumen terjemahan surah | Dokumen tafsir | Dokumen doa lokal; entri doa tersedia |
|---|---:|---:|---:|---:|
| `id` | `locales/id/ui.json` (78) | 114 `surat/{n}.json` dasar | 114 `tafsir/{n}.json` dasar | tanpa `locales/id/doa.json`; 227 entri `doa.json` dasar |
| `en` | `locales/en/ui.json` (78) | 114 `en/{n}.json` | 114 `locales/en/tafsir/{n}.json` | 0 lokal; 227 entri sumber Indonesia sebagai fallback |
| `ja` | `locales/ja/ui.json` (78) | 114 `locales/ja/surat/{n}.json` | 114 `locales/ja/tafsir/{n}.json` | 0 lokal; 227 fallback |
| `zh-Hans` | `locales/zh-Hans/ui.json` (78) | 114 `locales/zh-Hans/surat/{n}.json` | 114 `locales/zh-Hans/tafsir/{n}.json` | 0 lokal; 227 fallback |

Penghitungan ialah jumlah path sesuai prefiks pada `data/quran.sqlite:json_files` menggunakan koneksi SQLite read-only; sumber dan aturan fallback `src/lib/content.ts:128-179,190-249`. **0 doa lokal bukan 0 doa yang bisa dibuka**: seluruh 227 ID tetap diprerender per bahasa (`src/pages/[locale]/doa/[id].astro:6-11`). SQLite berisi 927 baris `json_files`, termasuk dokumen lain yang tidak dipilih query aplikasi (`src/lib/content.ts:110-118`).

## Skrip `scripts/`

`npm test` menjalankan tepat `selfcheck.ts`, `offline-selfcheck.mjs`, `offline-client-selfcheck.mjs`, `translation-selfcheck.mjs`, lalu `json_to_sqlite.py --selftest` (di luar `scripts/`), `import-translations-selfcheck.py`, `import-tafsir-selfcheck.py`, berurutan (`package.json:8-14`). **Inventaris ini tidak menjalankan tes/build.**

| Berkas | Bahasa; fungsi | Dalam `npm test`? |
|---|---|---|
| `scripts/selfcheck.ts:1-21` | TypeScript; keselarasan ayat/Arab/tafsir empat lokal dan atribut doa. | Ya |
| `scripts/offline-selfcheck.mjs:1-6,50-58` | JS; simulasi SW, cache/network/lock, hash, paket dan fallback. | Ya |
| `scripts/offline-client-selfcheck.mjs:1-5,25-46` | JS; respons klien offline, lokal dan progres invalid/valid. | Ya |
| `scripts/translation-selfcheck.mjs:1-27` | JS; salinan DB temporer dan validasi/fallback terjemahan/doa tanpa mengubah sumber. | Ya |
| `scripts/import-translations-selfcheck.py:1-12,44-76` | Python; fixture sintetis impor publisher, penolakan URL/konten yang tidak cocok tanpa memutasi DB sebelumnya. | Ya |
| `scripts/import-tafsir-selfcheck.py:1-12,47-63` | Python; fixture sumber tafsir, urutan dan penolakan impor sambil menjaga DB lama. | Ya |
| `scripts/import-translations.py:1-12,28-30,93-112` | Python; importer edisi publisher yang telah diunduh ke SQLite; **jalur tulis eksplisit**, bukan runtime. | Tidak |
| `scripts/import-tafsir.py:1-14,59-62,160-176` | Python; importer tafsir EN/JA/ZH offline ke SQLite; **jalur tulis eksplisit**. | Tidak |
| `scripts/seed-ui.mjs:1-13` | JS; seed/update `locales/*/ui.json` di DB, **jalur tulis manual**. | Tidak |
| `scripts/release-check.ts:1-6` | TypeScript; melaporkan dokumen wajib yang hilang; `npm run check:release`. | Tidak |
| `scripts/offline-packages.mjs:6-38` | JS; hook build membuat daftar resource paket offline berhash. | Tidak |
| `scripts/pwa.mjs:1-22` | JS; integrasi plugin VitePWA dan pembuatan SW pada build. | Tidak |
| `scripts/shell-smoke.mjs:1-5,30-44` | JS; pemeriksaan browser manual shell offline tanpa paket, aset, lebar, empat bahasa. | Tidak |
| `scripts/reader-smoke.mjs:1-5,14-27` | JS; pemeriksaan browser manual deep-link, ukuran baca, tautan bahasa dan overflow. | Tidak |
| `scripts/outcome-smoke.mjs:1-6,43-65` | JS; pemeriksaan browser manual hasil unduhan gagal/siap terhadap label SQLite dan cache. | Tidak |

## Arsip `data/qari/` (belum menjadi fitur aplikasi)

`data/qari/manifest.json:1-52,53-426` menyebut ekstraksi data dari situs lain, 62 payload, status data-only dan tanpa impor SQLite/UI. **Tidak ada kode `src/` yang mengonsumsi `data/qari/`**: pemilihan data aplikasi dibatasi oleh `src/lib/content.ts:110-118` dan sumber daya offline oleh `scripts/offline-packages.mjs:20-35`. Permintaan membaca `data/qari/README.md` tidak dapat dipenuhi karena berkas tersebut **tidak ada** dalam direktori saat inventaris; hanya `manifest.json` dan 62 JSON payload di bawah. Hitungan berikut diperiksa terhadap struktur `data` tiap JSON (array: elemen; objek: anggota, kecuali koleksi `ayahs`/`elements`/`checks` yang disebut eksplisit); nama/tujuan didasarkan pada path dan payload, **bukan fitur aktif**. Semua berkas di bawah relatif terhadap `data/qari/`, setiap baris dibuktikan oleh berkas yang disebut dan daftar `manifest.json:53-426`.

| JSON payload | Rekaman diamati; kandidat fitur |
|---|---|
| `audio/reciters.json` | 16 qari; pemilih pembaca audio. |
| `audio/ar.alafasy.json`, `audio/ar.abdulbasitmurattal.json`, `audio/ar.abdulsamad.json`, `audio/ar.husary.json`, `audio/ar.husarymujawwad.json`, `audio/ar.minshawi.json`, `audio/ar.minshawimujawwad.json`, `audio/ar.shaatree.json` | **Masing-masing 6.236 ayat/audio URL**; pemutaran audio ayat per qari. |
| `audio/ar.hanirifai.json`, `audio/ar.mahermuaiqly.json`, `audio/ar.hudhaify.json`, `audio/ar.ahmedajamy.json`, `audio/ar.abdurrahmaansudais.json`, `audio/ar.saoodshuraym.json`, `audio/ar.muhammadayyoub.json`, `audio/ar.muhammadjibreel.json` | **Masing-masing 6.236 ayat/audio URL**; pemutaran audio ayat per qari (`data/qari/audio/ar.alafasy.json:16-34` untuk bentuk data). |
| `translations/id.indonesian.json` / `translations/en.sahih.json` | 6.195 / 6.235 entri `data.ayahs`; pilihan terjemahan alternatif. |
| `quran/ayah-metadata-tajwid.json`, `quran/daily-verses.json`, `quran/featured-surahs.json` | 6.236 / 15 / 7; metadata tajwid, ayat harian, surah unggulan. |
| `tajwid/rules.json`, `tajwid/categories.json`, `tajwid/audio-examples.json` | 17 aturan / 7 kategori / 17 contoh (key objek); pelajaran dan contoh tajwid. |
| `search/topics.json`, `search/surah-aliases.json` | 10 topik / 146 alias (key objek); pencarian tematik/surah. |
| `calendar/months.json`, `calendar/events.json`, `calendar/weekdays.json`, `calendar/snapshot-1448.json` | 12 bulan / 12 acara / 7 hari / 12 bulan snapshot; kalender Hijriah. |
| `prayer/calculation-methods.json`, `prayer/city-coordinates.json`, `prayer/names.json`, `prayer/notification-templates.json`, `prayer/snapshot-2026-10.json` | 8 metode / 25 kota / 7 nama (key) / 2 field (termasuk 8 default pengingat) / 25 kota snapshot; jadwal salat/pengingat. Snapshot memuat 775 hari menurut `data/qari/manifest.json:22-28`. |
| `mosques/query.json`, `mosques/snapshot-jakarta-5km.json` | 6 field konfigurasi / 959 `data.elements`; pencarian masjid sekitar Jakarta. |
| `navigation/features.json`, `navigation/routes.json` | 13 fitur / 27 key rute; navigasi kandidat. |
| `personal-state/contracts.json` | 6 field (termasuk 7 key penyimpanan); kontrak riwayat/bookmark/cadangan kandidat. |
| `pwa/manifest.json` | 15 field manifest (5 shortcut, 4 ikon); metadata pemasangan kandidat, bukan manifest aplikasi aktif. |
| `qibla/calculation.json`, `qibla/cardinal-directions.json`, `qibla/compass-labels.json` | 5 parameter / 4 arah / 16 label; kompas kiblat. |
| `ramadan/amal-tasks.json`, `ramadan/prayers-new.json`, `ramadan/prayer-usage.json` | 9 / 5 / 8; checklist amal dan doa Ramadan. |
| `ramadan/khatam-defaults.json`, `ramadan/khatam-milestones.json` | 7 field / 5 milestone; pelacakan khatam. |
| `ramadan/zakat-configuration.json`, `ramadan/gold-price-snapshot.json` | 9 parameter / 2 field harga; hitung zakat dengan snapshot harga emas. |
| `settings/arabic-fonts.json`, `settings/preferences.json` | 3 font / 14 preferensi (termasuk 8 subopsi salat); pengaturan kandidat. |
| `tarteel/presets.json`, `tarteel/recording-formats.json` | 5 / 5; rekaman/latihan tilawah. |
| `tasbih/dhikr.json` | 8 dzikir; tasbih digital. |
| `provenance/baseline.json`, `provenance/source-assets.json`, `provenance/rea-evidence-summary.json` | 349 / 26 / 7; bukti ekstraksi/deduplikasi, bukan tampilan aplikasi. |
| `provenance/deduplication.json`, `provenance/verification.json` | 8 field keputusan / 2 field (87 pemeriksaan); audit ekstraksi, bukan tampilan aplikasi. |

`data/qari/manifest.json` sendiri berisi 5 field tingkat atas termasuk array `files` berisi 62 catatan (`data/qari/manifest.json:1-5,53-426`); bukan payload fitur. Keterbatasan hak dan cakupan sumber dinyatakan oleh arsip (`data/qari/manifest.json:41-50`), tidak dianggap implementasi aplikasi.
