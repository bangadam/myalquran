# MyAlQuran

Astro 7 + SQLite lokal + shadcn/ui + PWA. Satu kolom maksimal 480px; desain `myalquran.pen` memakai Inter, Andada Pro, Noto Naskh Arabic, dan ikon Lucide. Tidak ada scraping, fetch konten eksternal, atau database yang dikirim ke browser.

Acuan: [PRD.md](../PRD.md), [ARCHITECTURE.md](../ARCHITECTURE.md), [DESIGN.md](../DESIGN.md).

Implementasi desain Pencil: direktori tanpa maskot, menu ringkas, Pengaturan/Bahasa/Ayat tersimpan, dock kontrol baca, ukuran Arab/terjemahan independen, tema terang/gelap, validasi Ke ayat, dan menu aksi ayat. Teks ilustratif canvas tidak menggantikan teks agama atau atribusi. Font lokal beserta lisensi ada di `src/assets/fonts`; `.ttf` termasuk paket offline.

Verifikasi perubahan: `npm test` lulus; 51 route lintas empat locale merespons dengan heading; Al-Baqarah tetap merender seluruh 286 ayat. Smoke browser membuktikan pencarian surah 114, pencarian doa/no-result, ukuran Arab 38→40px tanpa mengubah terjemahan 19px, penolakan ayat 8 pada Al-Fatihah, jump/fokus ke ayat 7, simpan/hapus bookmark lintas halaman, tema gelap, dan tautan empat bahasa mempertahankan `#ayat-21`. Pengujian packaging sementara membuktikan font disertakan pada keempat manifest. Production build tidak dijalankan; viewport mobile belum diuji karena browser terkelola tidak mendukung resize.

## Jalankan

Node 22.22.3 telah diuji. `node:sqlite` masih memberi warning experimental pada Node 22; warning tidak disembunyikan.

```sh
npm install
npm run dev
npm run check
npm test
npm run check:release
```

Cache Vite dipisahkan di `node_modules/.vite/{dev,sync,build}` melalui hook `astro:config:setup`. `astro check` menjalankan sync dengan optimizer production; cache yang sama sebelumnya menimpa JSX development runtime server aktif dan menyebabkan `_jsxDEV is not a function`. Jangan menyatukan kembali cache command tersebut. Verifikasi yang dijalankan: dev tetap hidup selama `npm run check` dan `npm test`, kemudian import runtime baru dengan URL cache-busting tetap menyediakan `jsxDEV`; kontrol bahasa EN → JA → Mandarin → ID menjaga `#ayat-3`, ukuran 100/125/150% mengubah bacaan menjadi 16/20/24px, preferensi bertahan setelah reload, tanpa error hydration atau overflow pada viewport yang diamati.

Build/preview setelah persetujuan sesuai aturan proyek:

```sh
npm run build
npm run preview
```

`npm run check:release` sengaja gagal bila konten keagamaan empat bahasa belum lengkap. Build untuk verifikasi lokal bukan persetujuan publikasi. Domain produksi belum ditetapkan; canonical/hreflang absolut memerlukan `site` yang sebenarnya, bukan domain contoh.

## Konten dan bahasa

Website membaca `data/quran.sqlite` read-only, tabel `json_files(path, content)`. Total 927 dokumen: 348 arsip existing, empat kamus UI, 228 surat terjemahan JA/ZH, 342 tafsir EN/JA/ZH, dan lima dokumen provenance sumber.

- Indonesia: 114 surat, 6.236 ayat/tafsir, 227 doa.
- Inggris: terjemahan dan tafsir 6.236 ayat; doa locale belum tersedia.
- Jepang/Mandarin: 114 surat/6.236 ayat dan tafsir lengkap, beserta footnotes terjemahan dan atribusi edisi; doa locale belum tersedia. Coverage otomatis mengikuti SQLite.
- Semua teks bacaan dan rujukan existing dipertahankan. Metadata audio dihapus dan URL gambar kajian penyedia dikosongkan; audio/kajian bukan fitur website.
- Edisi JA/ZH memiliki [izin republication bersyarat dari QuranEnc](https://quranenc.com/en/home/api/): konten tidak diubah, publisher/source dan versi disebutkan, transcript dipertahankan, update sumber diikuti, catatan koreksi dilaporkan ke sumber, dan tidak ada iklan tidak pantas. Izin dataset ID/EN existing tetap harus diverifikasi sebelum publikasi.

Ketersediaan di beranda/Tentang/Offline dihitung dari SQLite per locale (terjemahan surat, tafsir, doa), bukan klaim tetap di kamus UI. Penambahan dokumen terverifikasi diperhitungkan pada prerender berikutnya. Field doa terjemahan wajib tidak kosong jika teks/rujukan sumber tersedia; petunjuk non-Arab menggunakan teks dan atribut bahasa locale, tanpa menyisipkan ulang petunjuk Indonesia sebagai terjemahan baru.

`npm test` menjaga penomoran, kesamaan Arab antarbahasa, pasangan tafsir, field doa opsional, ID tidak dikenal, serta transisi cache offline. `scripts/offline-selfcheck.mjs` menjalankan handler worker asli untuk metadata rusak, resource terhapus, kegagalan hash, aktivasi paket lengkap, dan pelestarian paket lama. `scripts/seed-ui.mjs` hanya memperbarui kamus UI di SQLite.

`scripts/translation-selfcheck.mjs` membuat copy SQLite sementara dan menguji perubahan coverage 0→227, petunjuk terlokalisasi, field sumber opsional, serta penolakan terjemahan/rujukan wajib kosong. Data `TEST` hanya hidup pada copy yang langsung dibersihkan; hash SQLite aplikasi dibuktikan tidak berubah. Smoke sebelum import JA/ZH menunjukkan ID 114/114/227, EN 114/0/0, JA/ZH 0/0/0; setelah import ayat JA/ZH coverage menjadi 114/0/0 untuk tiap locale tersebut. Ini validasi struktur/perilaku, bukan verifikasi teologis independen seluruh terjemahan.

Validasi metadata membandingkan nama Arab/Latin, arti, jumlah ayat, dan tempat turun detail surat dengan direktori; tempat turun hanya menerima Mekah/Madinah. Dokumen surat/tafsir locale diparse dan dicek identitas/urutan ayat sekali saat ingestion, lalu coverage dihitung dari hasil yang valid. Regression pada copy SQLite menolak detail 8 ayat dengan isi 7, lokasi tak dikenal, identitas locale salah, dan nomor terjemahan duplikat; dokumen locale valid meningkatkan coverage. Smoke dataset asli merender Al-Baqarah dengan 286 ayat, metadata Madinah, dan anchor ayat 255; tidak mengubah isi keagamaan.

Kamus UI sekarang divalidasi terhadap schema key wajib di kode, bukan key bahasa Indonesia sebagai baseline. Missing label yang sama di semua locale, nilai whitespace-only, atau non-string menghentikan ingestion dengan lokasi `locales/{locale}/ui.json` dan key. `Labels` adalah tipe hasil schema, sehingga typo akses label juga dapat tertangkap typecheck. Hasil parse disimpan sekali, bukan diparse ulang pada setiap akses. Regression memakai copy SQLite dan membuktikan hash database asli tetap sama; browser smoke keempat locale menampilkan navigasi, download/install, status dan label pemilih bahasa tanpa kontrol kosong.

### Edisi terjemahan ayat yang diimpor

| Locale | Edisi publisher | Versi | Data yang dipertahankan |
| --- | --- | --- | --- |
| `ja` | [Japanese Translation — Saeed Sato](https://quranenc.com/en/browse/japanese_saeedsato), di bawah supervisi Rowwad Translation Center | 1.0.13 | 114 surat, 6.236 ayat, 3.484 footnotes tidak kosong. |
| `zh-Hans` | [Chinese Translation — Muhammad Suleiman](https://quranenc.com/en/browse/chinese_suliman); deskripsi sumber menyatakan terjemahan Muhammad Makeen, direview Muhammad Sulaiman dan ahli bahasa | 1.0.8 | 114 surat, 6.236 ayat; edisi tidak menyediakan footnotes. |

Metadata primer: [catalogue JA](https://quranenc.com/api/v1/translations/list/ja?localization=en), [catalogue ZH](https://quranenc.com/api/v1/translations/list/zh?localization=en), [dokumen API/terms](https://quranenc.com/en/home/api/). Sumber [Tanzil](https://tanzil.net/trans/) tidak dipakai untuk import ini: lisensi translations membatasi non-komersial dan edisi Jepang mencantumkan translator Unknown; lisensi teks Arab Tanzil bukan lisensi semua terjemahan.

Importer pemeliharaan `scripts/import-translations.py` tidak memiliki akses jaringan. Ia menerima file resmi yang sudah diunduh, membandingkan seluruh string SQLite/XML, memeriksa versi catalogue dan semua nomor ayat, lalu menulis kedua edisi dalam satu transaksi. Konten, whitespace, penanda `*`/catatan dan footnotes tidak ditulis ulang. Nama/arti chapter tidak diinventasikan; field `arti` tetap kosong jika tidak tersedia terverifikasi. Footnotes adalah catatan penerjemah, bukan tafsir locale lengkap.

File input yang diperlukan pada folder download: `japanese_saeedsato.sqlite`, `chinese_suliman.sqlite`, `japanese-source.xml`, `chinese-source.xml`, `japanese-source.json`, `chinese-source.json`. Gunakan URL resmi dari catalogue dan [export XML JA](https://quranenc.com/en/home/d/xml/japanese_saeedsato)/[ZH](https://quranenc.com/en/home/d/xml/chinese_suliman). Bandingkan versi pada catalogue/check-update sebelum refresh; website tidak mengecek sumber eksternal saat rendering atau membaca.

```sh
python3 scripts/import-translations.py --source-dir /path/to/downloaded-editions
```

`locales/{locale}/source.json` mempertahankan catalogue/transcript, timestamp sumber dan import nyata, SHA-256 file input, terms, publisher dan versi. Kredit tampil di reader dan Tentang; semua isi lokal tetap tersedia dalam paket PWA. Perubahan konten/edisi memerlukan publikasi ulang dan update paket offline.

Verifikasi import: dua export publisher (SQLite dan XML) identik, masing-masing 6.236 identitas ayat lengkap; app SQLite dibandingkan ulang dengan sumber untuk seluruh terjemahan/footnotes. Seluruh 352 dokumen sebelumnya byte-identical setelah 230 dokumen baru masuk; backup pre-import retained di `.astro/`. Browser smoke membuktikan Jepang Al-Fatihah/footnotes, Mandarin Al-Baqarah 286 ayat dan ayat 255, atribusi/versi, serta kedua locale tersimpan/terbaca setelah origin berhenti. `npm test` mencakup import atomik, preservasi whitespace/notes dan penolakan source mismatch dengan fixture sintetis pada database sementara.

`npm run check:release` kini melaporkan tiga dokumen doa non-ID belum tersedia (`en/doa`, `ja/doa`, `zh-Hans/doa`; sebelumnya 345 dokumen tafsir/doa). Metadata chapter lokal, akurasi editorial/izin dataset ID/EN existing, domain/SEO dan verifikasi aksesibilitas penuh masih diperlukan; import tafsir tidak diklaim sebagai rilis penuh empat bahasa.

### Pemeriksaan sumber doa EN/JA/Mandarin

Pemeriksaan sumber primer belum menemukan edisi terverifikasi yang bisa dipetakan utuh ke 227 ID existing, sehingga tidak ada dokumen `locales/{locale}/doa.json` baru yang diimpor. [Dokumentasi eQuran Doa](https://equran.id/apidev/doa) menyediakan terjemahan Indonesia; [English API](https://equran.id/apidev/english) adalah terjemahan surat, bukan doa. Dokumentasi Doa menyebut 228, tetapi respons langsung [`/api/doa`](https://equran.id/api/doa) pada pemeriksaan ini berisi 227 record yang identik dengan seluruh record SQLite existing; snapshot tidak diperbarui hanya berdasarkan angka dokumentasi.

Koleksi existing bukan salinan satu buku dengan nomor yang sama: 77 record menyebut Hisnul Muslim secara eksplisit, sementara 150 lainnya memakai rujukan hadis atau situs berbeda. Angka ini menghitung atribusi tertulis, bukan menyatakan semua 150 doa tidak ada dalam Hisnul Muslim. ID 42 adalah petunjuk sujud syukur dalam field `ar` non-Arab; ID 144 menyimpan pembahasan takbir, sanad dan tautan sumber Indonesia dalam `idn`, dengan `tentang` kosong; ID 227 menyebut riwayat Dhuha al-Adab al-Mufrad 619 dan SalamDakwah. Kesamaan lafaz doa saja tidak memverifikasi judul/grup, petunjuk, konteks dan seluruh keterangan sumber.

| Kandidat primer | Identitas terverifikasi | Batas pemakaian untuk koleksi existing |
| --- | --- | --- |
| [EN: Osoul Fortress of the Muslim](https://www.osoulstore.com/book/en/Muslim_Fortress), juga [IslamHouse 39062](https://islamhouse.com/en/books/39062/) | Saeed bin Ali bin Wahf al-Qahtani; translator/publisher Osoul Foundation, 2025, 204 halaman | Buku Hisnul Muslim bernomor sendiri; kemiripan sujud syukur bukan pemetaan 227 ID. Pembahasan sumber Indonesia ID 144/227 belum mempunyai padanan terverifikasi. |
| [JA: IslamHouse 45218](https://islamhouse.com/ja/books/45218/) | Saeed Sato, reviewer Fatima Sato; publisher kantor dakwah Rabwah/Riyadh. [PDF](https://d1.islamhouse.com/data/ja/ih_books/single/ja_Hisn_Almuslim.pdf) tersedia; kandidat edisi 2007 juga diperiksa dari [HisnulMuslim.org](https://hisnulmuslim.org/hisnul-muslim/japanese/). | Kata pengantar penerjemah menyatakan rujukan hadis non-Qur'an dihilangkan dan pembaca harus merujuk edisi asli/Inggris. Tidak dapat mengisi seluruh `tentang` dengan rujukan/petunjuk existing secara utuh. |
| [ZH: IslamHouse 2842278](https://islamhouse.com/zh/books/2842278/) | [PDF](https://d1.islamhouse.com/data/zh/ih_books/single/risala_zh_hisn_new.pdf) menyebut Ye Sai'er/叶赛儿, tim masjid Qianheyan Linxia dan tim bahasa China IslamHouse; kata pengantar penerjemah 1999 | Kata pengantar menyebut 132 topik/267 bacaan dengan singkatan periwayat; bukan nomor 227 eQuran. Ekstraksi PDF memiliki masalah layout/teks dan tidak boleh langsung dipublikasikan sebagai hasil verifikasi editorial. |

[Kebijakan konten akun IslamHouse-API](https://github.com/IslamHouse-API/multilingual-quran-hadith-islamic-content-database-api-hub/blob/main/README.md) secara eksplisit mengizinkan republication, offline dan aplikasi dengan preservasi teks, metadata dan atribusi; ini berbeda dari lisensi MIT kode. Identitas/otoritas akun sebagai penerbit kebijakan belum dikonfirmasi lewat backlink dari domain publisher yang diperiksa; PDF gratis atau profil akun saja tidak menyelesaikan verifikasi izin edisi tertentu. Kebijakan itu juga tidak memberikan terjemahan pembahasan dari situs Indonesia yang berbeda. Tidak ada klaim bahwa terjemahan/izin tersebut mustahil ada di sumber lain.

Prasyarat import yang masih dibutuhkan: terjemahan EN/JA/zh-Hans yang diperiksa editor untuk seluruh `nama`, `grup`, `idn` dan `tentang` pada 227 ID, pemetaan tiap ID ke lokasi/edisi sumber, serta bukti hak penggunaan dari penerjemah/publisher yang berwenang. Bila memakai buku berbeda atau mengurangi cakupan/menulis ulang catatan, itu perubahan kontrak produk yang memerlukan keputusan terpisah; jangan mengganti koleksi atau melemahkan release gate otomatis.

Verifikasi pemeriksaan ini: hash SQLite aplikasi sebelum/sesudah sama, respons eQuran 227 record identik dengan snapshot, dan `npm run check:release` tetap gagal dengan tepat `en/doa`, `ja/doa`, `zh-Hans/doa`. Smoke reader EN 1, JA 42 dan ZH 144 menampilkan keterbatasan/tautan Indonesia secara eksplisit; JA 42 memakai `lang="id"`, LTR, tanpa overflow pada viewport browser yang diamati. Rujukan lengkap ID 144 tetap tersedia pada reader Indonesia, bukan dibuat menjadi referensi Mandarin. Tidak ada konten terjemahan buatan, importer scaffold, test baru atau production build.

#### Sumber tambahan dari situs Jepang

Penelusuran lanjutan menemukan teks doa Jepang nyata di situs organisasi Jepang, bukan sekadar UI yang diterjemahkan. Sumber berikut merupakan kandidat padanan bacaan, bukan sertifikasi bahwa seluruh field/rujukan 227 ID sudah terlokalisasi atau berizin impor:

| Situs/sumber primer | Teks yang benar-benar diperiksa | Padanan dan batas |
| --- | --- | --- |
| [Japan Muslim Association — 就寝前の祈願について](https://www.muslim.or.jp/hadith/vol3-613.html), Sahih Muslim jilid 3 hlm. 613–616 | Beberapa doa sebelum tidur/bangun, narator dan petunjuk tidur/menyapu tempat tidur | Kandidat ID 1, 2, 6; beberapa varian riwayat mempunyai ungkapan berbeda. Tidak otomatis menggantikan seluruh lafaz/catatan existing. |
| [JMA — doa bagian tubuh yang sakit](https://www.muslim.or.jp/hadith/vol3-256.html), jilid 3 hlm. 256–257 | Lafaz Arab `أعوذ بالله و قدرته من شر ما أجد و أحاذر`, makna Jepang, petunjuk meletakkan tangan dan membaca Bismillah 3 kali/doa 7 kali | Kandidat kuat ID 25 untuk lafaz dan hitungan; situs ini tidak menyediakan dokumen dengan skema/ID eQuran. |
| [JMA — 無力、怠惰に対する祈願について](https://www.muslim.or.jp/hadith/vol3-612.html), jilid 3 hlm. 612 | Riwayat Anas tentang perlindungan dari kelemahan, malas, pengecut, usia tua, kikir, kubur, kehidupan/kematian | Kandidat ID 152; urutan dan varian teks tetap perlu dicocokkan ke edisi Arab. |
| [JMA — 悪行について](https://www.muslim.or.jp/hadith/vol3-617.html), jilid 3 hlm. 617–621 | Doa perlindungan amal buruk, perbaikan agama/dunia/akhirat, petunjuk/ketakwaan serta riwayat-riwayat lain | Kandidat ID 155, 104, 101. Bagian Ali menerjemahkan perintah meminta petunjuk dan kelurusan, tetapi tidak menampilkan lafaz Arab; jangan dianggap sama persis dengan ID 118 tanpa pemeriksaan varian riwayat. |
| [Tokyo Camii — khutbah doa Nabi](https://tokyocamii.org/ja/khutba/2470/) dan [PDF 2020-01-24](https://tokyocamii.org/wp-content/uploads/2020/01/2020.01.24_Khutba_JP.pdf) | Doa pagi/malam, kebaikan dunia/akhirat dan petunjuk; catatan Tirmidhi/Abu Dawud/Muslim | Kandidat parsial ID 172 dan 101, tetapi khutbah tidak selalu memuat setiap unsur/varian lafaz. Doa malam tidak otomatis doa sebelum tidur. |
| [Tokyo Camii — イスラームの基本知識](https://tokyocamii.org/wp-content/uploads/2024/07/2012.06_Basic-Knowledge-of-ISLAM.pdf) | Buku oleh Seyfettin Yazıcı, Diyanet/宗務庁, Ankara 2012; diterbitkan dalam terjemahan oleh Tokyo Camii. Hlm. 125–126 menjelaskan takbir tashriq; hlm. 258–263 memuat doa ritual dan makna Jepang | Kandidat lafaz takbir ID 144 hanya berupa katakana/konteks tashriq, bukan pembahasan Ibn Mas'ud dan sanad existing. Bukan antologi seluruh 227 doa. |

[Katalog resmi JMA](https://www.muslim.or.jp/publications/) menautkan arsip Sahih Muslim dan [e-book resmi](https://puboo.jp/book/73111). Pengantar e-book menjelaskan terbitan awal 1987 oleh Japan Saudi Arabia Association, cetak ulang JMA 2001 dan publikasi web 2009; pengantar jilid 1 menamai tiga penerjemahnya, tetapi tidak menetapkan siapa penerjemah tiap bagian jilid 3. Katalog menyatakan All Rights Reserved; tidak ditemukan izin republication yang eksplisit pada halaman yang diperiksa. Ini sumber nyata untuk pemetaan/review, bukan izin yang dapat digantikan persetujuan pemilik aplikasi.

[Tokyo Camii Publishing](https://tokyocamii.org/tc-publishing/) menyebut terbitan `Prayers Chart from the Language of Our Prophet` dan `40 Prayer Charts from the Quran`; tautan file kedua chart tidak tersedia pada katalog/publications yang diperiksa. Salinan dan izin bisa diminta lewat [kontak resmi Tokyo Camii](https://tokyocamii.org/contact/). [Japan Dawah Centre](https://japandawah.com/) dan halaman [kegiatannya](https://japandawah.com/dawah) juga diperiksa pada browser live: ada kelas bahasa Arab/Al-Qur'an dan kegiatan komunitas, tetapi halaman tersebut tidak memberi tautan PDF/antologi doa. Pembacaan Islamic Circle of Japan gagal HTTP 406; ini bukan bukti bahwa mereka tidak mempunyai buku doa. Tidak ada pesan ke publisher yang dikirim dan tidak ada teks doa dari situs-situs ini dimasukkan ke SQLite.

### Edisi tafsir yang diimpor

| Locale | Edisi dan sumber primer | Versi dan izin |
| --- | --- | --- |
| EN | [English Al-Mukhtasar, QUL resource 266](https://qul.tarteel.ai/resources/tafsir/266), resource-content 171; © Tafsir Center for Quranic Studies | Snapshot `QUL-171-3fa2af31fcefdd2a`, update sumber 2026-01-21; [publisher corpus CC BY 4.0](https://huggingface.co/datasets/tafsircenter/tafsir-mcp-data/tree/dbbfa77518a724a10e72d8d7fd48d2d36a50fa9e) |
| JA | [Japanese Al-Mukhtasar](https://quranenc.com/en/browse/japanese_mokhtasar), Tafsir Center melalui QuranEnc | v1.0.0, 2020-10-01; [republication bersyarat](https://quranenc.com/en/home/api/) |
| ZH | [Chinese Al-Mukhtasar](https://quranenc.com/en/browse/chinese_mokhtasar), Tafsir Center melalui QuranEnc | v1.0.0, 2020-09-29; [republication bersyarat](https://quranenc.com/en/home/api/) |

`scripts/import-tafsir.py` menerima download lokal, tanpa jaringan. Input: `tafsir-official-index.html` dari `https://quranenc.com/en/home`, `tafsir-terms.html` dari halaman API, folder `japanese_mokhtasar/` dan `chinese_mokhtasar/` masing-masing `1.json`–`114.json` dari endpoint resmi `/api/v1/translation/sura/{key}/{nomor}`, `english-tafsir.json` dari `https://qul.tarteel.ai/api/v1/tafsirs/171/by_range?from=1:1&to=114:6&per_page=10000`, `qul-tafsir-index.json` dari `/api/v1/resources/tafsirs`, serta `tafsir-center.db` (`quran.db`) dan `tafsir-center-license.md` (`README.md`) dari revisi publisher yang ditautkan di atas.

```sh
python3 scripts/import-tafsir.py --source-dir /path/to/downloaded-tafsir
```

Importer memeriksa 6.236 identitas tiap edisi dan grup ayat eksplisit, lalu menyimpan 345 dokumen dalam satu transaksi. JA/ZH tidak punya footnotes tafsir pada snapshot ini; jika sumber menambahkan catatan, importer menolak sampai catatan dapat direpresentasikan, bukan membuangnya. Edisi EN memakai QUL terkini karena snapshot SQLite berlisensi kehilangan sebagian angka/rujukan. SHA-256 source berlisensi dipin; daftar 57 perbedaan teks terhadap snapshot disimpan tanpa koreksi buatan. Teks mentah QUL termasuk `<p>` dipertahankan di SQLite; saat display, hanya tag paragraf diganti newline dan hasil tetap ter-escape. Tag lain ditolak saat import. `locales/{locale}/tafsir-source.json` menyimpan transcript/catalogue, sumber lisensi, versi/timestamp, hash sumber dan kredit. Kredit tafsir terpisah dari kredit terjemahan ayat, tampil di reader dan Tentang.

Verifikasi: 18.708 pasangan nomor/teks sama persis dengan download primer; seluruh 582 dokumen sebelumnya tidak berubah; SQLite integrity `ok`. Typecheck dan seluruh `npm test` lulus, termasuk regression grup ayat, whitespace, duplicate/blank/markup/footnote rejection dan atomicity. Browser dev merender tafsir JA/ZH serta EN Al-Baqarah dengan rujukan `7:172` yang utuh. Smoke worker menggunakan snapshot HTML dev stabil berisi surat 1/2/114 per locale: download 3/3 lalu origin dihentikan; deep link EN 2:27, JA/ZH 114:6 yang belum dikunjungi tetap memuat tafsir/kredit. Ini bukan verifikasi paket produksi penuh; tidak ada production build dijalankan. Error hydration yang ditemukan pada smoke ini kemudian diperbaiki dengan pemisahan cache optimizer per command Astro; smoke kontrol nyata dan typecheck saat dev aktif lulus seperti dicatat di bagian Jalankan.

## Offline

Di halaman Offline, pilih **Simpan bahasa ini untuk offline**. Paket meliputi semua route locale dan aset, termasuk halaman yang belum dibuka. Instal aplikasi berbeda dari mengunduh paket.

Worker memverifikasi hash setiap resource; hanya paket lengkap menjadi aktif. Kegagalan menyisakan paket lama; update worker membutuhkan tindakan pengguna. Cache versi lama dipertahankan untuk tab yang masih terbuka, sehingga pemakaian storage dapat bertambah setelah pembaruan. Browser dapat menghapus cache; status diperiksa ulang, bukan janji penyimpanan permanen.

Panel hanya menawarkan pembaruan jika manifest versi baru benar-benar diketahui. Paket yang sudah lengkap menampilkan **Siap offline**, termasuk ketika server tidak tersedia. Readiness diperiksa lagi saat fokus/visibilitas/koneksi berubah; metadata rusak atau resource hilang membatalkan status siap. Pesan worker divalidasi; registrasi dibatasi 15 detik dan respons idle 30 detik agar kegagalan tidak mengunci kontrol. Permintaan persistence gagal tidak otomatis membatalkan unduhan.

Client hanya menerima status/package/manifest dengan locale yang diminta. Progress harus monoton, total tetap, dan complete setelah progress terakhir selesai dengan jumlah resource yang sesuai; completion cache fast-path tanpa progress tetap valid. `scripts/offline-client-selfcheck.mjs` menjalankan transport asli melalui MessageChannel untuk wrong-locale, regression progress, total berubah, completion prematur dan jalur valid. Smoke package ID menyelesaikan 480 resource, status tetap siap setelah origin mati, dan An-Nas enam ayat/deep link terbaca; tidak mengubah SQLite.

Fetch manifest/resource worker memiliki batas 20 detik, termasuk pembacaan body; progres awal setelah manifest mereset deadline UI sebelum resource berikutnya. Body dibaca sekali, diverifikasi hash, lalu disimpan dari byte yang sama. Timeout melepaskan lock dan menghapus staging tanpa mengganti paket aktif. Regression mempercepat sinyal abort untuk membuktikan manifest/body macet, lock saat busy, pelestarian paket lama dan retry berhasil.

Repair versi yang sama tidak menghapus cache aktif: resource yang masih ada dipakai ulang, hanya yang hilang diunduh dan diverifikasi. Jika repair gagal, halaman tersisa dan pointer tetap dipertahankan; status paket tidak mengklaim lengkap sampai semua resource tersedia. Pembaruan ke versi berbeda tetap menggunakan staging terpisah.

Readiness dan reuse saat repair tidak cukup mengecek URL cache: respons paket harus status sukses, ukuran byte sesuai, dan SHA-256 cocok manifest. Delivery halaman/aset paket juga memverifikasi byte sebelum disajikan; respons rusak tidak diteruskan sebagai bacaan, dan repair menggantinya tanpa menghapus halaman sehat. Marker paket complete kini menyimpan manifest untuk verifikasi aset versi lama; marker legacy berupa string tidak dipakai untuk fallback aset lama. Ini mendeteksi kerusakan relatif terhadap manifest tersimpan, bukan perlindungan terhadap script same-origin yang dapat mengganti manifest sekaligus konten.

Abort client (timeout, unmount, navigation/pagehide) mengirim cancel melalui MessagePort milik request itu; worker menggabungkan sinyal cancel dengan deadline fetch, membuang staging, lalu melepas lock. Request tab lain tidak bisa membatalkan owner; repair in-place tetap menyimpan halaman yang sudah ada. `pageshow` memeriksa ulang readiness saat kembali dari cache navigasi. Urutan cleanup selesai sebelum lock dibuka agar retry tidak berbenturan dengan penghapusan staging sebelumnya.

Setelah download gagal, panel menghapus readiness lama dan meminta status worker yang diverifikasi ulang. Paket rusak/hilang tidak lagi meninggalkan alert **Ready offline**; kegagalan aktual tetap tampil dengan Retry. Error hanya boleh hilang jika versi yang diminta terbukti lengkap dan tidak ada versi berbeda yang masih perlu diunduh. Jika recheck gagal, readiness tetap tidak diketahui, bukan asumsi sukses.

Penulisan paket memakai Web Locks origin-wide (`myalquran-offline-write`), bukan lock lokal satu worker. Hanya satu writer diizinkan; request worker/tab lain mendapat busy tanpa menghapus cache. Worker waiting menunggu lock yang sama sebelum `skipWaiting`, sehingga aktivasi berlangsung setelah download/cleanup selesai. Tombol update lokal disabled saat checking/download, dan prompt dibersihkan saat controller berubah. Browser tanpa Web Locks tetap bisa membaca online; unduhan offline tidak ditawarkan karena koordinasi write tidak dapat dijamin.

Bukti yang telah dijalankan: build 1.839 halaman, typecheck tanpa error, self-check lulus, audit dependency produksi tanpa temuan, tampilan desktop 480px tanpa overflow, kontrol teks 150%, paket ID/EN dan halaman/deep link terbaca setelah origin server dihentikan. Maskot Lottie ter-render dan tetap tersedia offline. Paket keempat locale diverifikasi cakupan/hash pada artefak.

Smoke perbaikan terbaru: paket locale Jepang dengan konten yang tersedia berhasil diunduh; server dihentikan, panel tetap **Siap offline** tanpa update palsu. Satu resource dihapus sementara → status belum tersimpan; resource dipulihkan → siap lagi tanpa reload. Metadata test dirusakkan sementara → belum tersimpan tanpa hang; metadata asli dipulihkan. Ini bukti mekanisme cache/antarmuka Jepang, bukan bukti terjemahan keagamaan Jepang lengkap.

Smoke reader terbaru: preferensi 150% diterapkan sebelum body dirender, sehingga deep link Al-Fatihah ayat 4 dan Al-Baqarah ayat 255 tetap 16px dari atas setelah hydration/reload (sebelumnya Al-Fatihah bergeser ke 303px). Tautan bahasa menyimpan hash pada URL sejak halaman dibuka dan diperbarui ketika ayat berubah, termasuk untuk copy/open-new-tab. Pemilih bahasa dapat dibuka dengan Enter, ditutup dengan Escape, mengembalikan fokus ke trigger, dan tiap opsi memiliki `lang` sendiri. Ini bukan pengujian screen reader penuh.

Ulangi cek reader pada tab browser yang membuka deep link ayat dengan preferensi 150%: `node scripts/reader-smoke.mjs <sc-browser-tab-id>`. Cek memakai `sc browser` pada halaman nyata dan memverifikasi posisi ayat setelah hydration, pilihan ukuran, href bahasa, serta overflow viewport; tidak dijalankan sebagai unit test atau pengganti screen reader.

Smoke navigasi offline: dengan server dihentikan, URL `/zh-Hans/surat/1/index.html?source=bookmark#ayat-3` membuka tujuh ayat dan mempertahankan anchor. Worker menyamakan route folder, tanpa trailing slash, dan `index.html`. ID yang tidak ada dalam katalog paket menghasilkan halaman 404 mandiri dalam empat bahasa; halaman valid yang resource-nya hilang atau bahasa tanpa katalog mendapat bantuan offline HTTP 503. Regression worker memverifikasi status 200/404/503 dan isi yang berbeda; screenshot/browser membuktikan surface, bukan pengukuran status HTTP navigasi oleh WebKit.

Smoke app-shell awal memakai origin baru tanpa paket bacaan: sebelum perbaikan, CSS/JS/SVG/manifest gagal saat server dihentikan (memori HTTP sempat menyamarkan tampilan). Precache kini menyertakan bundle CSS/JS/font, SVG/PNG lokal dan manifest—bukan HTML bacaan locale. Setelah tab ditutup dan dibuka lagi tanpa server, `scripts/shell-smoke.mjs <sc-browser-tab-id>` membuktikan 14 aset berhasil di-fetch dengan `cache: 'no-store'`, tanpa cache paket bacaan; maskot, empat tautan bahasa, selector interaktif dan lebar 480px tetap tersedia. Religious content tetap memerlukan unduhan bahasa eksplisit.

Smoke recovery memakai server lokal sementara yang menahan satu respons manifest 35 detik: UI menghasilkan **Retry** yang aktif; retry kemudian menyelesaikan 480 resource EN dan **Ready offline**. Server dihentikan; An-Nas enam ayat dan deep link ayat 3 tetap terbaca. Bukti ini untuk timeout/retry nyata, bukan browser network-mocking atau seluruh variasi koneksi lambat.

Smoke repair nyata: satu halaman EN (`surat/114`) dihapus dari paket uji, server menggagalkan satu fetch pengganti dengan HTTP 503. UI menampilkan Retry; halaman `surat/1` tetap identik dan versi pointer tidak berubah. Retry memperbaiki resource hilang; setelah server dihentikan, An-Nas enam ayat dan Al-Fatihah tujuh ayat/deep link tetap terbaca. Regression juga membuktikan repair tidak perlu fetch ulang halaman yang masih tersimpan.

Smoke cancellation nyata: server menahan request manifest, pengguna uji menavigasi ke Tentang lalu kembali ke Offline; download baru menyelesaikan 480 resource tanpa lock tersangkut. Server dihentikan; Al-Ikhlas empat ayat dan anchor ayat 2 terbaca. Regression memakai MessageChannel asli untuk membuktikan cancel owner/client transport meng-abort fetch, cancel tab non-owner tidak memengaruhi unduhan, paket aktif tetap utuh dan retry berhasil.

Smoke outcome nyata: update uji gagal pada resource akhir sementara satu halaman paket aktif dihapus; sebelum fix alert masih Ready offline, sesudah fix menjadi Not downloaded + Download failed + Retry aktif. Manifest asli dipulihkan, retry memperbaiki paket dan kembali ke Ready offline; Al-Fatihah tujuh ayat/anchor ayat 3 terbaca setelah server dihentikan. Ulangi pemeriksaan cache/UI setelah outcome settles: `node scripts/outcome-smoke.mjs <sc-browser-tab-id> failed|ready`. Race completion-ack hilang belum disimulasikan pada browser; keputusan sukses tetap membutuhkan versi paket lengkap dari worker.

Smoke update nyata: dua revisi worker pada origin uji, satu respons bacaan ditahan. Tombol update disabled; `SKIP_WAITING` ke worker waiting menghasilkan lock pending sementara writer masih held dan worker belum aktif. Respons dilepas → 480 resource lengkap, worker baru activated, tidak ada lock tersisa atau prompt update stale. Server dihentikan; An-Nas enam ayat/anchor ayat 3 terbaca. Regression memuat dua konteks worker yang berbagi lock manager untuk memastikan writer kedua ditolak dan aktivasi menunggu cleanup. Ini bukan bukti seluruh variasi upgrade dari worker lama yang belum mengenal Web Locks.

Smoke integritas nyata: HTML An-Nas diganti dengan byte rusak berukuran sama pada origin uji. Panel berubah menjadi Not downloaded; dengan server mati, route tersebut mendapat bantuan offline, bukan HTML rusak. Repair mengembalikan hash yang benar; setelah server dimatikan lagi, An-Nas enam ayat dan Al-Fatihah tujuh ayat/deep link tetap terbaca. Regression juga menolak respons cache HTTP 503 dengan byte benar dan aset retained yang rusak. Recheck seluruh 480 resource EN terukur 1.483 ms pada workstation ini; tiap pemeriksaan membaca body paket, sehingga biaya I/O/hash pada perangkat mobile belum diukur.

Belum dibuktikan: pengujian menyeluruh VoiceOver/TalkBack, browser install pada perangkat fisik, forced-colors/zoom/mobile viewport, quota penuh, penghentian worker saat unduh, dan seluruh skenario update lintas tab. `sc browser` tidak mendukung resize atau network interception; bukti desktop tidak diklaim sebagai bukti viewport mobile.

## Tool pemeliharaan arsip

`json_to_sqlite.py` bukan bagian proses website. Konverter memperbarui dokumen arsip dan mengganti output hanya setelah transaksi sukses. Dokumen `locales/` yang sudah ada di SQLite dipertahankan tanpa perubahan; arsip yang mencoba memberi isi berbeda untuk key locale yang sama ditolak. Key locale baru boleh ditambahkan. Dokumen arsip non-locale yang file sumbernya dihapus tidak dipertahankan.

Output existing harus database `json_files` yang kompatibel dan lolos pemeriksaan integritas; database tak terkait/custom schema ditolak, bukan ditimpa. Refresh adalah pekerjaan pemeliharaan satu penulis: tutup proses penulisan database lain dan buat backup sebelum pembaruan. Website tetap membaca SQLite saja, tidak menjalankan konverter otomatis.

```sh
python3 json_to_sqlite.py --source data --output /tmp/quran-archive.sqlite
python3 json_to_sqlite.py --selftest
```

Verifikasi refresh dijalankan lagi setelah import pada copy SQLite aplikasi: semua 582 dokumen identik, dokumen locale dan provenance bertahan, dan hash database asli tidak berubah. `npm test` juga menjalankan self-test konverter untuk konflik locale, output tak terkait, dan JSON rusak; kegagalan tidak mengubah file sebelumnya.

Contoh query:

```sql
SELECT json_extract(content, '$.ayat[0].teksArab') AS arab,
       json_extract(content, '$.ayat[0].teksIndonesia') AS terjemah
FROM json_files
WHERE path = 'surat/114.json';
```
