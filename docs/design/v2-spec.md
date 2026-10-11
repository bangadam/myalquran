# Spesifikasi desain v2 — MyAlQuran

## Otoritas, batas, dan cara membaca bukti

Dokumen Pencil **31238c97-dc57-4a03-a12c-1460f1408892** dibaca **langsung melalui Pencil MCP** pada 11 Oktober 2026; berkas terenkripsi `myalquran.pen` tidak dibaca, di-grep, atau didekripsi. Bukti di bawah adalah kueri live `pencil/get_app_state`, `pencil/execute: Get(id)`, `GetVariables()` dan screenshot `TakeScreenshot([id])` pada dokumen tersebut. Sitasi `[P:id]` berarti node `id` pada hasil `Get(id)` live; untuk tiap baris hierarki, ID node sendiri adalah sitasi. Kueri node bersifat titik waktu: perubahan kolaborator sesudah pembacaan perlu pengambilan ulang. `[APP:...]` menunjuk kode aplikasi, bukan sumber desain.

Hasil `get_app_state`: akar hanya `sbjR9` **v2** dan `F2BrjS` **Design System · v2**; seleksi aktif **`u0nUVL`** (Layar · Preview main · Pembaca ayat / widget minimal) dengan badan `UFHvH`. Jadi v2 adalah koleksi **yang terlihat dan aktif saat inspeksi**; **layar yang sedang dipilih** ialah pembaca minimal, bukan Home atau Revamp #19. Seluruh 45 layar di bawah berada dalam v2, termasuk yang berlabel Qari, Preview, dan Revamp; label itu **subkelompok/varian dalam koleksi sama**, bukan bukti bahwa salah satunya telah dihapus atau versi lain lebih baru. `Emgiq` sendiri berbunyi `45 layar · Home ringkas, tema hijau, fitur ibadah, dan seluruh state pembaca. Data ilustratif mengikuti keterangan masing-masing layar.` Urutan canvas bukan kronologi edit; tidak tersedia penanda waktu tiap node. **[INFERENCE]** Penamaan “Revamp” memberi indikasi varian revisi, tetapi tidak membuktikan bahwa kelompok itu merupakan revisi final yang menggantikan layar Preview/Qari; keduanya tetap ada dalam koleksi v2. [P:sbjR9, F2BrjS, u0nUVL, UFHvH, Emgiq]

**Perubahan dari shell hijau yang saat ini berjalan:** v2 masih hijau (bukan oranye), mempertahankan satu kolom 480px tetapi menambah Home bergambar, app bar hijau 72px, navigasi bawah empat tujuan, fitur ibadah/Ramadan, dan **menentukan penggantian** menu hamburger/footer teks lama; desain menyatakan **tanpa audio**. Shell saat ini sudah hijau satu kolom, tetapi masih header menu/tab dan footer teks, tanpa Home maupun bottom nav. [P:Z7H9PL, o8mYia, c4K2mR, MAF4b, i3Vgv; APP:src/layouts/BaseLayout.astro:73-85, src/styles/global.css:60-78]

## Peta dokumen (urutan anak canvas)

| Urutan | Akar/koleksi | Isi dan ID |
|---|---|---|
| 1 | `sbjR9` · v2 | Judul `w417P`, cakupan `Emgiq`, delapan kelompok di bawah. |
| 2 | `F2BrjS` · Design System · v2 | `ZhRP6` judul; `MAF4b` acuan; `q9s95` warna, `aaV5l` tipografi, `OXk0o` layout, `wcCtJ` komponen, `CQwrb` navigasi/aksi, `CncsQ` aturan/state. |

| Kelompok v2 | Baris canvas | Layar: wrapper → badan; nama persis; ukuran wrapper (px) |
|---|---|---|
| `RBxuI` Beranda & Al-Qur’an | `Zzh8S`, `Mk1ea` | 1. `Yz0C4` → `Z7H9PL` Layar · Qari · Ruang ibadahmu (480×1125)<br>2. `R98Ft9` → `ceqlT` Layar · Preview · Fable-inspired / Direktori surah (480×1458)<br>3. `u0nUVL` → `UFHvH` Layar · Preview main · Pembaca ayat / widget minimal (480×1313)<br>4. `j8v0g` → `IIPH8` Layar · Preview main · Surah panjang / widget minimal (480×1441)<br>5. `BKrfL` → `Yikq2` Layar · Qari · Belajar tajwid (480×1273)<br>6. `M2MTiS` → `v98Nm5` Layar · Qari · Ayat harian (480×1126)<br>7. `e20oKa` → `IOUUz` Layar · Preview · Ayat tersimpan (480×784) |
| `gbYQU` Ibadah harian | `Z5wvd2`, `i4Ja8S` | 8. `Wv0DU` → `cH4kO` Layar · Qari · Jadwal sholat (480×1459)<br>9. `JZRLL` → `tGsdR` Layar · Qari · Pengingat sholat (480×1643)<br>10. `K8OPj` → `aHmwp` Layar · Qari · Kalender Hijriyah (480×1158)<br>11. `SqGt9` → `opTVu` Layar · Qari · Arah kiblat (480×1128)<br>12. `aKgXm` → `FvrtW` Layar · Qari · Masjid sekitar (480×1222)<br>13. `qGXbQ` → `BIAvz` Layar · Qari · Tasbih digital (480×1304) |
| `w0GTg` Ramadan | `AZk2w` | 14. `PNWo6` → `oxZa2` Layar · Qari · Doa Ramadan (480×1314)<br>15. `AYq1i` → `U3DsbC` Layar · Qari · Checklist amal (480×1562) |
| `T6e3nV` Pengaturan & aplikasi | `A9AQ3G`, `k6pZ5J` | 16. `sWJpr` → `kW2pD` Layar · Preview · Fable-inspired / Pengaturan (480×680)<br>17. `iSOKq` → `FhHmh` Layar · Preview · Fable-inspired / Bahasa (480×869)<br>18. `xtWNC` → `QVcOb` Layar · Preview · Fable-inspired / Tentang (480×835)<br>19. `RiWNG` → `UkcF9` Layar · Preview · Fable-inspired / Unduhan (480×775)<br>20. `yXaaQ` → `E6o2md` Layar · Qari · Pasang MyAlQuran (480×1211) |
| `csZHv` Pembaca · panel dan aksesibilitas | `Rs8QQ`, `vQ6S9` | 21. `T9q2Tq` → `XsIPr` Layar · Preview · Tampilan baca / panel terbuka (480×2013)<br>22. `oz5WT` → `z4gPQ` Layar · Preview · Ke ayat / validasi nomor (480×1824)<br>23. `j3opNf` → `kPcXB` Layar · Preview · Mode gelap / Arab saja (480×1318)<br>24. `PcsAj` → `M8lNam` Layar · Preview · Widget minimal / tertutup (480×1348)<br>25. `FudL9` → `Bze5g` Layar · Preview · Widget minimal / kontrol terbuka (480×1415)<br>26. `qCTq7` → `nzpeb` Layar · Preview · Widget minimal / aksi ayat terbuka (480×1443) |
| `F56BJc` Bacaan & bahasa · varian lengkap | `gCBS2`, `y7hoF` | 27. `aH08Q` → `hkkTM` Layar · Revamp · 01 · Bahasa / empat locale (480×869)<br>28. `xJuqh` → `Ze9qs` Layar · Revamp · 02 · Direktori surah (480×1458)<br>29. `WC6rX` → `uhxNq` Layar · Revamp · 03 · Pembaca ayat / catatan (480×1235)<br>30. `Ge7mZ` → `liJLo` Layar · Revamp · 04 · Tafsir Indonesia (480×1091)<br>31. `fFKAx` → `B8L6J` Layar · Revamp · 05 · Direktori doa (480×1143)<br>32. `STG9u` → `XE8hp` Layar · Revamp · 06 · Pembaca doa (480×1127)<br>33. `J18tLR` → `DsvLY` Layar · Revamp · 07 · Tentang dan sumber (480×835) |
| `OxbZb` Unduhan · seluruh state | `GVwyg`, `gi646` | 34. `Ug5Ps` → `aqgji` Layar · Revamp · 08 · Offline / belum tersimpan (480×775)<br>35. `ESdZD` → `Wu074` Layar · Revamp · 09 · Offline fallback / 4 bahasa (480×869)<br>36. `wrgLS` → `uTNMG` Layar · Revamp · 10 · 404 / 4 bahasa (480×869)<br>37. `NczY1` → `W1z9g` Layar · Revamp · 11 · Offline / memeriksa (480×775)<br>38. `sqaoO` → `U0m8D` Layar · Revamp · 12 · Offline / mengunduh (480×775)<br>39. `TP9YA` → `mIKHC` Layar · Revamp · 13 · Offline / pembaruan (480×775)<br>40. `JHqTd` → `J8I27` Layar · Revamp · 14 · Offline / gagal (480×775)<br>41. `l0HQMT` → `w4VxEA` Layar · Revamp · 15 · Offline / tidak didukung (480×775) |
| `dl83x` Pembaca · ukuran dan locale | `qoYVM` | 42. `k2vri` → `UDaFp` Layar · Revamp · 16 · Pembaca / 125% (480×1313)<br>43. `euycD` → `DodUu` Layar · Revamp · 17 · Pembaca / 150% (480×1313)<br>44. `XU3M0` → `JIWyb` Layar · Revamp · 18 · 日本語 / terjemahan tidak tersedia (480×1313)<br>45. `YmYLw` → `Syacp` Layar · Revamp · 19 · English / commentary unavailable (480×1313) |

Tiap wrapper `Layar` memuat label `Label layar` dan satu frame badan yang ditabelkan; kelompok/baris hanyalah tata letak canvas. Seluruh wrapper 480px, tinggi contoh bervariasi; badan `clip:true` dan memakai layout vertikal. [P:sbjR9; `Get('u0nUVL',{depth:1})`]

## Token hidup dan komponen

Tabel berikut **nilai variabel dokumen**, bukan asumsi token CSS. Kueri: `pencil/execute: Print(GetVariables())`; swatch literal desain `q9s95`. Warna utama yang terpakai pada badan-badan dan sistem mengacu ke `$fable-*`, bukan `$primary` oranye. [P:q9s95, F2BrjS, sbjR9]

| Token | Nilai | Pemakaian/bukti |
|---|---|---|
| `$paper` | `#fffaf3` | warisan di variabel dokumen, bukan warna badan v2 [P:sbjR9] |
| `$ink` | `#39271d` | warisan di variabel dokumen, bukan warna badan v2 [P:sbjR9] |
| `$primary` | `#a64612` | warisan di variabel dokumen, bukan warna badan v2 [P:sbjR9] |
| `$secondary` | `#faebdc` | warisan di variabel dokumen, bukan warna badan v2 [P:sbjR9] |
| `$muted` | `#755947` | warisan di variabel dokumen, bukan warna badan v2 [P:sbjR9] |
| `$border` | `#dedfd7` | warisan di variabel dokumen, bukan warna badan v2 [P:sbjR9] |
| `$warm` | `#fff0df` | warisan di variabel dokumen, bukan warna badan v2 [P:sbjR9] |
| `$canvas` | `#f3e7da` | warisan di variabel dokumen, bukan warna badan v2 [P:sbjR9] |
| `$fable-bg` | `#FFFFFF` | v2 terang; swatch kpVfh |
| `$fable-ink` | `#171717` | v2 terang; swatch T2b6F |
| `$fable-muted` | `#626966` | v2 terang; swatch ezlrt |
| `$fable-accent` | `#1E5546` | v2 terang; swatch i7wZz |
| `$fable-soft` | `#E7EEEB` | v2 terang; swatch N5QXzw |
| `$fable-border` | `#E3E7E5` | v2 terang; swatch fXn7d |
| `$preview-font-ui` | `Inter` | token preview/reusable [P:QxvDj] |
| `$preview-font-reading` | `Andada Pro` | token preview/reusable [P:QxvDj] |
| `$preview-font-arabic` | `Noto Naskh Arabic` | token preview/reusable [P:QxvDj] |
| `$preview-touch` | `44` | token preview/reusable [P:QxvDj] |
| `$preview-radius-pill` | `24` | token preview/reusable [P:QxvDj] |
| `$preview-radius-panel` | `16` | token preview/reusable [P:QxvDj] |
| `$preview-dark-bg` | `#171C19` | v2 gelap; swatch e0eWY4 |
| `$preview-dark-ink` | `#EDF2EF` | v2 gelap; swatch LAmpA |
| `$preview-dark-muted` | `#AAB8B0` | v2 gelap; swatch Y0tDfq |
| `$preview-dark-accent` | `#9BD1B9` | v2 gelap; swatch LvllN |
| `$preview-dark-soft` | `#283E34` | v2 gelap; swatch z7MB0 |
| `$preview-dark-border` | `#3A4A41` | v2 gelap; swatch geHBN |

**Klasifikasi:** `$paper` #fffaf3, `$ink` #39271d, `$primary` **#a64612**, `$secondary` #faebdc, `$muted` #755947, `$border` #dedfd7, `$warm` #fff0df, `$canvas` #f3e7da tetap tersimpan sebagai **variabel warisan/tidak dipakai** pada properti `fill`/`stroke` node v2. Pemeriksaan `Get('sbjR9', visitor)` terhadap referensi warna tersebut tidak menghasilkan satu pun node; `#a64612` **bukan** primary v2. Home `Z7H9PL` berlatar `$fable-bg` = **#FFFFFF** dan header `$fable-accent` = **#1E5546**, dengan gambar di `pevfi` (`images/generated-5.png`); bukan oranye. [P:Z7H9PL, pevfi, q9s95, i7wZz]

| Properti | Nilai persis dan bukti |
|---|---|
| Tipografi | `AR6FK` Inter 20/600 judul halaman; `ATzXT` Inter 14/1.5 UI/isi; `Uq2pa` Inter 12/1.5 keterangan; `K6LoC` Andada Pro 28 judul Home/bacaan; `D1UlNo` Noto Naskh Arabic 36 spesimen. Body ayat pada `UFHvH`: Arab 38, terjemahan 19, latin 14; judul Arab 42, Latin 32. Variasi adalah nilai node, bukan token global. |
| Grid/ruang | `XMLiD`: “Spacing: 4 · 8 · 12 · 16 · 20 · 24 · 32”; padding layar 20, gap konten 14, header 72, target sentuh minimum 44×44, ikon 20–22, Home menu empat kolom, footer empat tujuan. Mayoritas isi frame `padding:[20,20,24,20]` dan `gap:14`; header `padding:[12,20]`, tinggi 72. [P:XMLiD, ceqlT] |
| Radius & stroke | `XMLiD`: 6 input/button, 8 panel, 22 pill. Instans `QxvDj`: `$preview-radius-pill`=24, border 1; `q63oq` 44×44; `kr1cB` 360×44 radius 24 stroke 1; `c5QJ3` radius 12 stroke 1; `c4K2mR` border atas 1; `rgCVv` 112×44 radius 22; `wEegf` 280×48 radius 8 stroke 2. Nilai instans yang berbeda dari narasi `XMLiD` didahulukan untuk komponen itu. [P:QxvDj, q63oq, kr1cB, c5QJ3, c4K2mR, rgCVv, wEegf] |
| Bayangan | Tidak ada token bayangan global pada `GetVariables()`/`F2BrjS`; satu efek yang ditemukan pada layar: menu aksi `v1Ga8D`, shadow outer `#17171714`, offset (0,4), blur 16; bukan default semua card. [P:v1Ga8D] |
| Tema | Light `#FFFFFF/#171717/#626966/#1E5546/#E7EEEB/#E3E7E5`; dark `#171C19/#EDF2EF/#AAB8B0/#9BD1B9/#283E34/#3A4A41` berturut background/ink/muted/primary/soft/border. [P:kpVfh,T2b6F,ezlrt,i7wZz,N5QXzw,fXn7d,e0eWY4,LAmpA,Y0tDfq,LvllN,z7MB0,geHBN] |

**Komponen reusable (node sumber, bukan tautan runtime):** `QxvDj` kontrol baca (ikon `sliders-horizontal`, teks “Kontrol baca”, `chevron-up`); `q63oq` ellipsis ayat; `kr1cB` tema Terang/Gelap (`sun`/`moon`, Terang terpilih); `c5QJ3` ukuran 100/125/150%; `o8mYia` app bar; `c4K2mR` bottom navigation; `rgCVv` tombol “Tambah +1”; `tKKAC` sebelumnya, `BMSWw` berikutnya, `wEegf` input ayat. Penggunaan instance `ref` per layar dicatat pada pohon di bawah. [P:F2BrjS, QxvDj, q63oq, kr1cB, c5QJ3, o8mYia, c4K2mR, rgCVv, tKKAC, BMSWw, wEegf]

## Navigasi bawah dan tautan

Komponen `c4K2mR` berukuran 480px, latar `$fable-bg`, garis atas `$fable-border` 1px, padding [12,20]. Urutan elemen 1–4 berikut **persis**; contoh komponen memakai Beranda aktif (`X7qVke`): permukaan `$fable-soft`, ikon+teks `$fable-accent`, 11px/600; yang lain ikon+teks `$fable-muted`, 11px normal. Layar direktori `ceqlT` mengaktifkan Al-Qur’an; tersimpan `IOUUz` mengaktifkan Tersimpan; pengaturan `kW2pD` mengaktifkan Pengaturan. [P:c4K2mR, X7qVke, ceqlT, IOUUz, kW2pD]

| No | Label persis · ikon Lucide · node | Target URL yang akan diimplementasi |
|---|---|---|
| 1 | `Beranda` · `house` · `X7qVke/n2d58/TCsKk` | **[INFERENCE]** `/{locale}/beranda/` (tidak ada path/href di objek Pencil; butuh route baru, sebab `/{locale}/` dipakai direktori saat ini). |
| 2 | `Al-Qur’an` · `book-open` · `GYcvF/fMQiN/KlNWU` | **[INFERENCE]** `/{locale}/` (direktori surat sekarang). |
| 3 | `Tersimpan` · `bookmark` · `d9t70/Ltlz6/eMZwm` | **[INFERENCE]** `/{locale}/tersimpan/`. |
| 4 | `Pengaturan` · `settings` · `Q0b5kd/PFxnw/HyHEZ` | **[INFERENCE]** `/{locale}/pengaturan/`. |

Pencil hanya punya frame/ikon/teks, **tanpa href, prototipe interaksi, atau kontrak route**. Semua target dan tata kelola `aria-current` di atas merupakan rancangan implementasi, bukan fakta canvas; detail pembaca kembali ke daftar lewat panah `arrow-left`, tafsir menuju ayat sama, menu Home menuju fitur masing-masing **[INFERENCE]** berdasarkan label/frame. Ketika URL Home diputuskan, jangan menimpa pilihan bahasa awal di `/` tanpa keputusan produk [APP:src/pages/index.astro:8-12]. [P:i3Vgv, UFHvH]

## State, interaksi, dan ketidakpastian lintas layar

`i3Vgv` menyatakan `States: default, active, disabled, loading, empty, error, permission denied.`, validasi ayat angka bulat dalam rentang surah; kosong tidak dapat dibuka; data jadwal/lokasi/progres hanyalah contoh; warna tajwid harus disertai nama hukum; **tidak ada audio, footer teks lama, menu hamburger, atau aset tambahan Ramadan/tasbih/PWA**. Kalimat terakhir merujuk *aset tambahan*, bukan melarang layar fitur Ramadan dan tasbih yang justru ada di `w0GTg`/`BIAvz`. Itu aturan tertulis, **bukan bukti setiap state digambar**. Home, jadwal, masjid, kalender, ayat harian dan checklist memuat contoh dengan disclaimer di node masing-masing; jangan terbitkan angka/ayat/jadwal tiruan sebagai data live. [P:i3Vgv, Emgiq, Z7H9PL, cH4kO, FvrtW, aHmwp]

- Default/selected: bottom nav aktif berdasar halaman; bookmark aktif/tidak pada `UFHvH`; tema terang/gelap `kr1cB`; ukuran 100/125/150 `c5QJ3`; checklist sudah/belum `U3DsbC`. [P:c4K2mR, UFHvH, kr1cB, c5QJ3, U3DsbC]
- Reader: panel tampilan terbuka `XsIPr` (toggle transliterasi dan terjemahan), validasi Ke ayat `z4gPQ`, Arab saja gelap `kPcXB`, dock tertutup `M8lNam`, menu dock terbuka `Bze5g`, menu ellipsis terbuka `nzpeb`; `UDaFp`/`DodUu` skala 125%/150%. [P:XsIPr, z4gPQ, kPcXB, M8lNam, Bze5g, nzpeb, UDaFp, DodUu]
- Variasi terjemahan Jepang tidak tersedia `JIWyb` dan commentary EN unavailable `Syacp`: label wrapper menamainya, tetapi konten yang tampak tetap Arab + **kalimat contoh bahasa Indonesia**; beberapa toolbar/Latin/catatan/aksi justru `enabled:false`. **Jangan** menyalin fallback contoh itu ke locale lain atau menyimpulkan data saat ini tidak tersedia. [P:JIWyb, Syacp; APP:docs/design/current-app-inventory.md:91-98]
- Offline: `aqgji` (belum), `W1z9g` (memeriksa), `U0m8D` (mengunduh), `mIKHC` (pembaruan), `J8I27` (gagal), `w4VxEA` (tidak didukung) memang **nama wrapper berbeda tetapi isi yang dirender identik**: “Belum diunduh”, “Unduh untuk baca offline”; progress/pembaruan/install `enabled:false`. Screenshot `TakeScreenshot(['W1z9g','U0m8D','J8I27'])` mengonfirmasi ketiganya sama. Perlakukan state fungsional menurut label `i3Vgv`, **jangan klaim copy/tampilan loading-error yang tidak digambar**. [P:aqgji, W1z9g, U0m8D, mIKHC, J8I27, w4VxEA]
- Fallback/404 `Wu074`/`uTNMG` bernama demikian, tetapi badan menggandakan **pemilih Bahasa**, bukan pesan 503/404; HTTP status, detail error, versi offline, empty saved/search, denied notification, reduced-motion dan desktop terpisah tidak termodel penuh. [P:Wu074, uTNMG, i3Vgv]

## Inventaris per layar: hierarki literal dan seluruh salinan

Setiap subbagian: **wrapper/body di tabel peta**, lalu daftar praorder seluruh lapisan badan (kedalaman sesuai indentasi). `t`=text, `f`=frame, `i`=icon, `r`=instance ref, `s`=shape; nilai `isi` adalah JSON string literal sehingga `\n` menyatakan pemisah baris sebenarnya, tanpa penerjemahan. Properti ditulis hanya bila ada: `w/h`, `layout`, `gap`, `pad`, `align`/`justify`, koordinat `x/y` dan posisi absolut `pos`, `fill`, `radius`, `stroke`/`strokeWidth`, `font`/`size`/`weight`/`line`, `icon`, `ref`, `off` (`enabled:false`). Nilai dinamis seperti `fill_container`/`fit_content` dipertahankan. Semua ID baris adalah `[P:ID]` node asli via kueri `Get(badan, visitor)`; tidak ada halaman/teks yang direka. Hubungan parent mengikuti indentasi, susunan mengikuti canvas. [P:sbjR9]

### 1. Layar · Qari · Ruang ibadahmu [P:Yz0C4, Z7H9PL]

State **default/ilustratif**; hierarki utama: Header · Ruang ibadahmu [P:wtVfK] → Konten · Ruang ibadahmu [P:Lrwur] → Navigasi bawah [P:JoKPg]. Badan selebar 480px dalam wrapper tinggi 1125px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (90 node)</summary>

```text
Z7H9PL f v2 · Ruang ibadahmu  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  wtVfK f Header · Ruang ibadahmu  w="fill_container" h=230 layout="vertical" gap=12 pad=[16,24,20,24] fill="$fable-accent"
    JCzW5 f Merek dan menu  w="fill_container" align="center" justify="space_between" x=null y=null pos=null rotation=null
      McYhL t Merek MyAlQuran isi="MyAlQuran"  fill="#FFFFFF" font="Andada Pro" size=23 weight="normal"
    Sz70v f Header · Salam dan ilustrasi  w="fill_container" h=150 gap=8 align="center" justify=null x=null y=null pos=null rotation=null
      BXfT6 f Salam beranda  w="fill_container" layout="vertical" gap=8
        uoVIK t Salam isi="Assalamu’alaikum"  w="fill_container" fill="#FFFFFF" font="Andada Pro" size=29 weight="normal" line=1.2
        Fqr2M t Ajakan singkat isi="Mulai dari satu ayat,\nsatu kebaikan hari ini."  w="fill_container" fill="#E3EEE9" font="Inter" size=13 weight="normal" line=1.5
      pevfi s Asset AI · Quran dan taman miniatur  w=170 h=150 fill={"type":"image","enabled":true,"url":"images/generated-5.png","mode":"cover"} radius=12
  Lrwur f Konten · Ruang ibadahmu  w="fill_container" layout="vertical" gap=14 pad=[18,20,20,20]
    RMnCD f Semua layanan · grid empat kolom  w="fill_container" layout="vertical" gap=8
      O5dTW f Baris layanan 1  w="fill_container" gap=8
        ydlZq f Menu · Baca Quran  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          RUMaE f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            EArAq i Ikon book-open  w=22 h=22 fill="$fable-accent" icon="book-open"
          kTY2Z t Baca Quran isi="Baca Quran"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
        bGjbJ f Menu · Tajwid  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          MoQw4 f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            PqdBR i Ikon panduan tajwid  w=22 h=22 fill="$fable-accent" icon="book-open"
          wSghW t Tajwid isi="Tajwid"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
        L3aZv f Menu · Ayat harian  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          Q34r5l f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            shNcR i Ikon sun  w=22 h=22 fill="$fable-accent" icon="sun"
          Hoaqy t Ayat harian isi="Ayat harian"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
        MxjGO f Menu · Jadwal sholat  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          eaWQU f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            JjlqT i Ikon clock-3  w=22 h=22 fill="$fable-accent" icon="clock-3"
          b0ymNP t Jadwal sholat isi="Jadwal sholat"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
      T0HfrB f Baris layanan 2  w="fill_container" gap=8
        B1P3TY f Menu · Pengingat  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          bmKKA f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            CFDCQ i Ikon bell  w=22 h=22 fill="$fable-accent" icon="bell"
          cbV3f t Pengingat isi="Pengingat"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
        Se9m5 f Menu · Kalender  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          h0QLK f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            klh3q i Ikon calendar-days  w=22 h=22 fill="$fable-accent" icon="calendar-days"
          u63eo t Kalender isi="Kalender"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
        Gbf05 f Menu · Arah kiblat  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          I95At f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            I2hjqH i Ikon compass  w=22 h=22 fill="$fable-accent" icon="compass"
          j0MoAh t Arah kiblat isi="Arah kiblat"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
        n1XU6S f Menu · Masjid sekitar  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          Bu6XN f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            sDHdZ i Ikon map-pin  w=22 h=22 fill="$fable-accent" icon="map-pin"
          hbbsE t Masjid sekitar isi="Masjid sekitar"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
      z0Rk3Q f Baris layanan 3  w="fill_container" gap=8
        IonQg f Menu · Tasbih  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          yobZR f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            s6kxX i Ikon circle-dot  w=22 h=22 fill="$fable-accent" icon="circle-dot"
          bif44 t Tasbih isi="Tasbih"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
        FLAOm f Menu · Doa Ramadan  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          OTONr f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            j26PXu i Ikon moon  w=22 h=22 fill="$fable-accent" icon="moon"
          NJ3FW t Doa Ramadan isi="Doa Ramadan"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
        BK1hQ f Menu · Checklist amal  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          a0Lvaf f Wadah ikon  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            VHQla i Ikon list-checks  w=22 h=22 fill="$fable-accent" icon="list-checks"
          EKskh t Checklist amal isi="Checklist amal"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
        slX8b f Menu · Pasang aplikasi  w="fill_container" h=94 layout="vertical" gap=7 pad=[4,2] align="center" justify=null x=null y=null pos=null rotation=null
          FwyJE f Wadah ikon pasang  w=48 h=48 fill="$fable-soft" radius=14 align="center" justify="center" x=null y=null pos=null rotation=null
            NQqmV i Ikon pasang  w=22 h=22 fill="$fable-accent" icon="download"
          g7LIj t Pasang aplikasi isi="Pasang\naplikasi"  w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="500" line=1.3
    tyQgu f Ringkasan sholat berikutnya  w="fill_container" gap=12 pad=[14,16] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      kFHSd t Lokasi dan status isi="Jakarta\nJadwal contoh"  w="fill_container" fill="$fable-accent" font="Inter" size=12 weight="normal" line=1.5
      zkpm1 f Sholat berikutnya  w=170 gap=12 align="center" justify="space_between" x=null y=null pos=null rotation=null
        OzeVG t Ashar isi="Ashar"  fill="$fable-accent" font="Andada Pro" size=19 weight="normal" line=1.5
        HkeMk t Waktu isi="15.12"  fill="$fable-accent" font="Inter" size=24 weight="600" line=1.5
    thrXx f Lanjutkan membaca  w="fill_container" gap=14 pad=[10,0] align="center" justify=null x=null y=null pos=null rotation=null
      Q0zqZu i Ikon book-open  w=22 h=22 fill="$fable-accent" icon="book-open"
      k2phIa f Teks · Lanjutkan membaca  w="fill_container" layout="vertical" gap=4
        cWUOD t Lanjutkan membaca isi="Lanjutkan membaca"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        X9iJfv t Keterangan isi="Al-Baqarah · Ayat 21 · contoh posisi"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    k37lI f Bagian · Ayat hari ini  w="fill_container" layout="vertical" gap=7 pad=[14,16] fill="$fable-soft" radius=8
      Z1nfJO t Ayat hari ini isi="Ayat hari ini"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.5
      IVb4y t Tema ayat isi="Al-Insyirah 94:5 · Harapan & ketabahan"  w="fill_container" fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
      IfQzb t Terjemahan isi="“Maka, sesungguhnya beserta kesulitan ada kemudahan.”"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.4
      q6Clia t Buka ayat isi="Baca & renungkan  →"  w="fill_container" fill="$fable-accent" font="Inter" size=12 weight="normal" line=1.5
  JoKPg f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    LNRWX f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      hoUT8 i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      FyaCT t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    X23s5 f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      iibrx i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      ULfVv t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    YjQay f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      b7FnH i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      C3ZC06 t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    d0lJy f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      xmpmu i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      p3Jgt t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 2. Layar · Preview · Fable-inspired / Direktori surah [P:R98Ft9, ceqlT]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:AU8aU] → Konten utama [P:Y70IaQ] → Navigasi bawah [P:EXuRN]. Badan selebar 480px dalam wrapper tinggi 1458px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (61 node)</summary>

```text
ceqlT f v2 · Fable-inspired / Direktori surah  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  AU8aU f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    QsOMd t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  Y70IaQ f Konten utama  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    K1jLa t Label kategori isi="BACA · PAHAMI · RENUNGKAN"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.5 off align=null justify=null x=20 y=188 pos=null rotation=null
    Tgkts t Pengantar direktori isi="Temukan surah, lalu lanjutkan membaca ayat dan tafsir dalam ritmemu sendiri."  w=388 fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.65 off align=null justify=null x=28 y=95 pos=null rotation=null
    U1KIZl f Pencarian surah  w="fill_container" gap=12 pad=[16,14] radius=6 stroke="#8D9993" strokeWidth=1 align="center" justify=null x=null y=null pos=null rotation=null
      U1Ixs i Ikon pencarian  w=20 h=20 fill="$fable-muted" icon="search"
      Y3lRcL t Placeholder pencarian surah isi="Cari nama atau nomor surah"  fill="$fable-muted" font="Inter" size=15 weight="normal"
    UDe8K f Lanjutkan membaca · posisi contoh tersimpan  w="fill_container" layout="vertical" gap=8 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1}
      ruZYi t Aksi lanjut membaca isi="Lanjutkan membaca"  fill="$fable-accent" font="Inter" size=15 weight="600"
      NTu8H f Posisi bacaan tersimpan  w="fill_container" align="center" justify="space_between" x=null y=null pos=null rotation=null
        H3zDup t Surah dan posisi terakhir isi="Al-Baqarah · Ayat 21"  fill="$fable-ink" font="Inter" size=17 weight="normal"
        hW5mF i Buka bacaan terakhir  w=20 h=20 fill="$fable-accent" icon="arrow-right"
    plouY f Buka daftar bookmark  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
      zYgbu i Ikon daftar tersimpan  w=20 h=20 fill="$fable-accent" icon="bookmark"
      m93U2 t Daftar tersimpan isi="Ayat tersimpan · 2"  w="fill_container" fill="$fable-accent" font="Inter" size=15 weight="normal" line=1.5
    qlQca f Heading daftar surah  w="fill_container" pad=[24,0,12,0] stroke="$fable-border" strokeWidth={"bottom":1} align=null justify="space_between" x=null y=null pos=null rotation=null
      YHo9I t Label daftar isi="Daftar surah"  fill="$fable-ink" font="Inter" size=17 weight="bold" line=1.5
      Wlvxt t Jumlah surah isi="114 surah"  fill="$fable-muted" font="Inter" size=12 weight="normal"
    pUPkC f Surah 1 · Al-Fatihah  w="fill_container" gap=12 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      mOwMe f Nomor 1  w=24 h=32 stroke="$fable-border" align="center" justify="center" x=null y=null pos=null rotation=null
        t4Hziq t Angka 1 isi="1"  fill="$fable-muted" font="Inter" size=12 weight="normal"
      DZBLA f Nama dan jumlah ayat 1  w="fill_container" layout="vertical" gap=4
        B5psFx t Nama latin 1 isi="Al-Fatihah"  fill="$fable-ink" font="Inter" size=17 weight="600" line=1.5
        r4Jkf t Arti dan jumlah ayat 1 isi="Pembukaan · 7 ayat"  fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      I8NylX t Nama Arab 1 isi="الفاتحة"  w=92 fill="$fable-ink" font="Noto Naskh Arabic" size=25 weight="normal"
    Tq55S f Surah 2 · Al-Baqarah  w="fill_container" gap=12 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      jzpfl f Nomor 2  w=24 h=32 stroke="$fable-border" align="center" justify="center" x=null y=null pos=null rotation=null
        w7k47 t Angka 2 isi="2"  fill="$fable-muted" font="Inter" size=12 weight="normal"
      KbdYg f Nama dan jumlah ayat 2  w="fill_container" layout="vertical" gap=4
        KHuZ2 t Nama latin 2 isi="Al-Baqarah"  fill="$fable-ink" font="Inter" size=17 weight="600" line=1.5
        e0JRR t Arti dan jumlah ayat 2 isi="Sapi Betina · 286 ayat"  fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      GnklK t Nama Arab 2 isi="البقرة"  w=92 fill="$fable-ink" font="Noto Naskh Arabic" size=25 weight="normal"
    X92nh0 f Surah 3 · Ali Imran  w="fill_container" gap=12 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      trHm0 f Nomor 3  w=24 h=32 stroke="$fable-border" align="center" justify="center" x=null y=null pos=null rotation=null
        Z3UTEj t Angka 3 isi="3"  fill="$fable-muted" font="Inter" size=12 weight="normal"
      NFGEW f Nama dan jumlah ayat 3  w="fill_container" layout="vertical" gap=4
        OAdsf t Nama latin 3 isi="Ali Imran"  fill="$fable-ink" font="Inter" size=17 weight="600" line=1.5
        Sq8Ga t Arti dan jumlah ayat 3 isi="Keluarga Imran · 200 ayat"  fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      OxWRT t Nama Arab 3 isi="آل عمران"  w=92 fill="$fable-ink" font="Noto Naskh Arabic" size=25 weight="normal"
    vN6Gn f Surah 4 · An-Nisa  w="fill_container" gap=12 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      Z4m0uX f Nomor 4  w=24 h=32 stroke="$fable-border" align="center" justify="center" x=null y=null pos=null rotation=null
        l8UKFA t Angka 4 isi="4"  fill="$fable-muted" font="Inter" size=12 weight="normal"
      fOYeB f Nama dan jumlah ayat 4  w="fill_container" layout="vertical" gap=4
        jz6Yu t Nama latin 4 isi="An-Nisa"  fill="$fable-ink" font="Inter" size=17 weight="600" line=1.5
        LFEIV t Arti dan jumlah ayat 4 isi="Perempuan · 176 ayat"  fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      Z5K7c0 t Nama Arab 4 isi="النساء"  w=92 fill="$fable-ink" font="Noto Naskh Arabic" size=25 weight="normal"
  EXuRN f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    EGqyh f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      t0QgfP i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      p1Bn5 t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    hM9up f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      x8Fcu1 i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      kvYtR t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    fbmkJ f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      z2MetS i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      f8Do21 t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    P3jGV f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Q5FZlE i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      YxlG3 t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 3. Layar · Preview main · Pembaca ayat / widget minimal [P:u0nUVL, UFHvH]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:L5Fsu] → Konten pembaca ayat · acuan widget minimal [P:X2zRIa] → Dock · Kontrol baca tertutup [P:SrbNX] → Navigasi bawah [P:NL1Ru]. Badan selebar 480px dalam wrapper tinggi 1313px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (68 node)</summary>

```text
UFHvH f v2 · Pembaca ayat / widget minimal  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  L5Fsu f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    wBphR f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      XApfm i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    cPOPo t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  X2zRIa f Konten pembaca ayat · acuan widget minimal  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    iudh5 f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      g3gnR t Nama Arab surah isi="الفاتحة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      HZziF t Nama latin surah isi="Al-Fatihah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      Zmciy t Meta surah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    Y3dJQ f Toolbar pembaca  w=424 gap=12 off align=null justify=null x=28 y=245 pos=null rotation=null
      k7NMn f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        L8APCJ i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        nrh23 t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      m0kfYr f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        QKNqg i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        dXtNV t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    dqOEl f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      K9iOQH t Judul kredit isi="Data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      lupja t Keterangan kredit isi="Konten pendek untuk rancangan visual; bukan sumber terjemahan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    W6dRr f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      BBKqr f Nomor dan aksi ayat 1  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        EouCM t Nomor ayat isi="Ayat 1 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        ivsA9 i Bookmark aktif · Ayat 1  w=16 h=16 fill="$fable-accent" icon="bookmark-check"
        KQzTG r Menu aksi ayat 1  ref="q63oq"
      mUb8G t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      sRFFe t Latin contoh isi="Transliterasi contoh untuk tata letak."  w=424 fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=139 pos=null rotation=null
      Oy6oR t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      sn0Vt f Catatan terjemahan · tertutup  w=424 h=44 off align="center" justify="space_between" x=0 y=255 pos=null rotation=null
        WcbZi t Label catatan tertutup isi="Catatan terjemahan"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        K7Gr9 i Buka catatan  w=18 h=18 fill="$fable-accent" icon="chevron-down"
      surpd f Catatan terjemahan · terbuka  w=424 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        UMw69 t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        xCDbr t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      TsOEQ t Tautan tafsir isi="Baca tafsir · Ayat 1 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=315 pos=null rotation=null
      IPzD7 f Aksi · Ayat 1  w=424 off align=null justify="end" x=0 y=353 pos=null rotation=null
        VsNz7 f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          zCIoF i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          oxtCr t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    RHujL f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      M6MV6B f Nomor dan aksi ayat 2  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        tfLjG t Label ayat kedua isi="Ayat 2 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        i2S3pf r Menu aksi ayat 2  ref="q63oq"
      p4J1xQ t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      yaW7x t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      MBcRz t Link tafsir kedua isi="Baca tafsir · Ayat 2 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=186 pos=null rotation=null
      gHePy f Aksi · Ayat 2  w=424 off align=null justify="end" x=0 y=224 pos=null rotation=null
        HVJ6c f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          YR4Kg i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          R1JZm t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    R8j2z f Paginasi surah  w="fill_container" pad=[18,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      Sx4jN t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      iNj2M t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal"
  SrbNX f Dock · Kontrol baca tertutup  w="fill_container" h=84 pad=[16,20,20,20] fill="$fable-bg" align=null justify="center" x=null y=null pos=null rotation=null
    N47Gz r Widget · Kontrol baca  ref="QxvDj"
  NL1Ru f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    ZYE7R f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      YiswO i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      kHB2i t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    sCUkl f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      T02LKD i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      JJ0AH t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    KX4YK f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      BunB2 i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      QVj1U t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    ruOEr f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      WAa46 i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      U0RVh0 t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 4. Layar · Preview main · Surah panjang / widget minimal [P:j8v0g, IIPH8]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:gG8R2] → Konten pembaca ayat [P:HLUrC] → Dock · Kontrol baca tertutup [P:Jnfrd] → Navigasi bawah [P:x8O3w0]. Badan selebar 480px dalam wrapper tinggi 1441px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (77 node)</summary>

```text
IIPH8 f v2 · Surah panjang / widget minimal  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  gG8R2 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    hGNON f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      M1hIPb i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    w3RixE t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  HLUrC f Konten pembaca ayat  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    GHogO f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      S4Q0f t Nama Arab surah isi="البقرة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      pWTsO t Nama latin surah isi="Al-Baqarah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      WGtNT t Meta surah isi="Sapi Betina · 286 ayat · Madinah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    nIpvZ f Navigasi rentang ayat  w="fill_container" pad=[14,0] stroke="$fable-border" strokeWidth={"top":1,"bottom":1} align="center" justify="space_between" x=null y=null pos=null rotation=null
      rkTTK t Rentang yang dibaca isi="Ayat 21–40 dari 286"  fill="$fable-muted" font="Inter" size=14 weight="normal"
      ISY2q f Tombol lompat ke ayat  w=424 gap=8 pad=[12,14] radius=4 stroke="#8D9993" strokeWidth=1 off align="center" justify=null x=311 y=14 pos=null rotation=null
        R8KM4m t Label ke ayat isi="Ke ayat…"  fill="$fable-ink" font="Inter" size=14 weight="normal"
        Qo8Zp i Buka pemilih ayat  w=16 h=16 fill="$fable-muted" icon="chevron-down"
    wRZ3n f Toolbar pembaca  w=424 gap=12 off align=null justify=null x=28 y=334 pos=null rotation=null
      gHDTk f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        vodoF i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        HeY4h t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      F8fcT f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        M0ltpR i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        Zwnju t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    mGZwo f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      HumUI t Judul kredit isi="Data contoh · preview tata letak"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      Cu11e t Keterangan kredit isi="Dua ayat ditampilkan sebagai sampel bagian 21–40; bukan teks Al-Qur’an atau terjemahan resmi."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    jYf7n f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      j2DXPI f Nomor dan aksi ayat 21  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        KTcPd t Nomor ayat isi="Ayat 21 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        o1jvu i Bookmark aktif · Ayat 21  w=16 h=16 fill="$fable-accent" icon="bookmark-check"
        YQHu9 r Menu aksi ayat 21  ref="q63oq"
      rHgbv t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      d5SvY t Latin contoh isi="Transliterasi contoh untuk tata letak."  w=424 fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=139 pos=null rotation=null
      NtlA7 t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      Wetjg f Catatan terjemahan · terbuka  w=388 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        zzu33 t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        qZToj t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      dHx5S t Tautan tafsir isi="Baca tafsir · Ayat 21"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=255 pos=null rotation=null
      uO6GI f Aksi · Ayat 21  w=424 off align=null justify="end" x=0 y=293 pos=null rotation=null
        h65oY f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          t8ObMR i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          n13nU t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    c0XaBZ f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      ejiZw f Nomor dan aksi ayat 22  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        gP8KJ t Label ayat kedua isi="Ayat 22 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        mKHO7 r Menu aksi ayat 22  ref="q63oq"
      ZBn2g t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      i4PS2 t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      PyNqC t Link tafsir kedua isi="Baca tafsir · Ayat 22"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=186 pos=null rotation=null
      zHz6n f Aksi · Ayat 22  w=424 off align=null justify="end" x=0 y=224 pos=null rotation=null
        xq8K9 f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          J7sNU i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          DDDAs t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    f6b4iH f Paginasi surah  w=388 h="fit_content(35)" pad=[18,0,0,0] off align=null justify="space_between" x=28 y=1019 pos=null rotation=null
      qhQFy t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal" off align=null justify=null x=0 y=18 pos=null rotation=null
      Ey5fb t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal" off align=null justify=null x=336 y=18 pos=null rotation=null
    z6xd0 f Pindah bagian ayat  w="fill_container" gap=12 pad=[12,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      Dwguw f Ayat sebelumnya  h=44 gap=8 pad=[0,12] radius=22 stroke="$fable-border" strokeWidth=1 align="center" justify=null x=null y=null pos=null rotation=null
        y6376 i Ayat sebelumnya  w=16 h=16 fill="$fable-accent" icon="chevron-left"
        lSRR5 t Aksi · Ayat sebelumnya isi="Sebelumnya · 1–20"  fill="$fable-accent" font="Inter" size=12 weight="normal"
      QxjAP f Ayat berikutnya  h=44 gap=8 pad=[0,12] radius=22 stroke="$fable-border" strokeWidth=1 align="center" justify=null x=null y=null pos=null rotation=null
        Ca6rW t Aksi · Ayat berikutnya isi="Berikutnya · 41–60"  fill="$fable-accent" font="Inter" size=12 weight="normal"
        VGbjF i Ayat berikutnya  w=16 h=16 fill="$fable-accent" icon="chevron-right"
  Jnfrd f Dock · Kontrol baca tertutup  w="fill_container" h=84 pad=[16,20,20,20] fill="$fable-bg" align=null justify="center" x=null y=null pos=null rotation=null
    mf4Df r Widget · Kontrol baca  ref="QxvDj"
  x8O3w0 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    bHSQF f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      uPaxv i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      L51r9 t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    yyQPR f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      bGnPx i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      Jpi2y t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    sXVxx f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      useY6 i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      Y9DVSG t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    rehUp f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      DUaym i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      C4e7M t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 5. Layar · Qari · Belajar tajwid [P:BKrfL, Yikq2]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:i4uKZ] → Isi Belajar tajwid [P:mW9Rg] → Navigasi bawah [P:spIQW]. Badan selebar 480px dalam wrapper tinggi 1273px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (46 node)</summary>

```text
Yikq2 f v2 · Belajar tajwid  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  i4uKZ f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    fT63V t Judul halaman isi="Belajar tajwid"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  mW9Rg f Isi Belajar tajwid  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    Xi9k1 t Kenali hukum bacaan, lalu praktikkan saat membaca  isi="Kenali hukum bacaan, lalu praktikkan saat membaca Al-Qur’an."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    EtjEk f Tajwid di pembaca  w="fill_container" layout="vertical" gap=12 pad=20 fill="$fable-soft" radius=8
      ysbYo t Tajwid dalam bacaan isi="Tajwid dalam bacaan"  w="fill_container" fill="$fable-accent" font="Andada Pro" size=23 weight="normal" line=1.5
      rGWoP t Tampilkan warna dan ketuk penandaan untuk melihat  isi="Tampilkan warna dan ketuk penandaan untuk melihat hukum bacaan."  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
      VFHh4 f Aksi Buka pembaca dengan tajwid  w="fill_container" h=48 pad=14 fill="$fable-accent" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
        h9FvV t Buka pembaca dengan tajwid isi="Buka pembaca dengan tajwid"  fill="#FFFFFF" font="Inter" size=14 weight="600" line=1.5
    Ikj6r t Hukum bacaan isi="Hukum bacaan"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
    w7cAN f Nun sukun & tanwin  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      CIQk8 i Ikon panduan tajwid  w=22 h=22 fill="$fable-accent" icon="book-open"
      LNDf7 f Deksripsi Nun sukun & tanwin  w="fill_container" layout="vertical" gap=4
        AzoSa t Nun sukun & tanwin isi="Nun sukun & tanwin"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        iPAZb t Izhar, idgham, iqlab, dan ikhfa isi="Izhar, idgham, iqlab, dan ikhfa"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    fIZ8T f Mim sukun  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      DJOlH i Ikon panduan tajwid  w=22 h=22 fill="$fable-accent" icon="book-open"
      F4yrYs f Deksripsi Mim sukun  w="fill_container" layout="vertical" gap=4
        s4SEUi t Mim sukun isi="Mim sukun"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        pxIcn t Ikhfa syafawi, idgham mimi, izhar syafawi isi="Ikhfa syafawi, idgham mimi, izhar syafawi"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    qYbS1 f Mad  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      hxQtn i Ikon panduan tajwid  w=22 h=22 fill="$fable-accent" icon="book-open"
      j77D4q f Deksripsi Mad  w="fill_container" layout="vertical" gap=4
        Zdyt2 t Mad isi="Mad"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        KaW7Q t Kenali panjang bacaan isi="Kenali panjang bacaan"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    WyyLk f Detail contoh · Mad asli  w="fill_container" layout="vertical" gap=12 pad=20 radius=8 stroke="$fable-border" strokeWidth=1
      GvYuT t Mad asli isi="Mad asli"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
      HI5ac t Dibaca panjang 2 harakat. isi="Dibaca panjang 2 harakat."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      Ds5f4 f Legenda hukum  w="fill_container" gap=10 align="center" justify=null x=null y=null pos=null rotation=null
        d9hlo s Warna Mad asli  w=12 h=12 fill="#B42318" radius=3
        Z9ay0 t Warna + nama hukum, bukan warna saja isi="Warna + nama hukum, bukan warna saja"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    qAdPD t Panduan sumber Qari · perlu review editorial sebel isi="Panduan sumber Qari · perlu review editorial sebelum publikasi."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  spIQW f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    DQk8E f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      jjZaW i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      wvnlS t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    llxk6 f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      B1E9uA i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      IWh5l t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    Gq28h f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      XlRoM i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      hgRUn t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    h9Tzk f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      mDzGS i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      M3OHI t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 6. Layar · Qari · Ayat harian [P:M2MTiS, v98Nm5]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:p84IS] → Isi Ayat harian [P:v2sQjE] → Navigasi bawah [P:TWhR3]. Badan selebar 480px dalam wrapper tinggi 1126px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (35 node)</summary>

```text
v98Nm5 f v2 · Ayat harian  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  p84IS f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    LOMWv t Judul halaman isi="Ayat harian"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  v2sQjE f Isi Ayat harian  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    ieqG3 t Satu ayat untuk dibaca dan direnungkan hari ini. isi="Satu ayat untuk dibaca dan direnungkan hari ini."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    FvHxu t Harapan & ketabahan isi="Harapan & ketabahan"  w="fill_container" fill="$fable-accent" font="Inter" size=16 weight="600" line=1.5
    n883WF t Al-Insyirah · Ayat 5 isi="Al-Insyirah · Ayat 5"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    n8Xt5G t فَاِنَّ مَعَ الْعُسْرِ يُسْرًاۙ isi="فَاِنَّ مَعَ الْعُسْرِ يُسْرًاۙ"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.8
    b9IT1 t Maka, sesungguhnya beserta kesulitan ada kemudahan isi="Maka, sesungguhnya beserta kesulitan ada kemudahan."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=26 weight="normal" line=1.5
    N9Mwq9 f Aksi Baca surat lengkap  w="fill_container" h=48 pad=14 fill="$fable-accent" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
      u2yUhm t Baca surat lengkap isi="Baca surat lengkap"  fill="#FFFFFF" font="Inter" size=14 weight="600" line=1.5
    Z9TQ7v f Simpan ayat  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      t5i4Cn i Ikon bookmark  w=22 h=22 fill="$fable-accent" icon="bookmark"
      hfOcl f Deksripsi Simpan ayat  w="fill_container" layout="vertical" gap=4
        P90Jy6 t Simpan ayat isi="Simpan ayat"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        zr9Kx t Tambahkan ke ayat tersimpan isi="Tambahkan ke ayat tersimpan"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    q4ZgHS f Bagikan  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      CevsO i Ikon share-2  w=22 h=22 fill="$fable-accent" icon="share-2"
      a0zkY1 f Deksripsi Bagikan  w="fill_container" layout="vertical" gap=4
        c1yzd t Bagikan isi="Bagikan"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        bHXUl t Salin ayat beserta sumbernya isi="Salin ayat beserta sumbernya"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    F1BTeH t Teks: dataset Quran lokal · 94:5. Pilihan tema: Qa isi="Teks: dataset Quran lokal · 94:5. Pilihan tema: Qari."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  TWhR3 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    qp9Iy f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      zcjol i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      XuAVa t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    Mex9V f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      fE02P i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      sA4k1 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    TYVS4 f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Y9O0PC i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      RYFJc t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    HpFbo f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      WFOep i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      OP53c t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 7. Layar · Preview · Ayat tersimpan [P:e20oKa, IOUUz]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:V3mo3] → Konten · Ayat tersimpan [P:s4jmJX] → Navigasi bawah [P:ktVL5]. Badan selebar 480px dalam wrapper tinggi 784px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (32 node)</summary>

```text
IOUUz f v2 · Ayat tersimpan  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  V3mo3 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    iSQGY t Judul halaman isi="Assalamu’alaikum"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  s4jmJX f Konten · Ayat tersimpan  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    PDg9n t Kembali ke daftar surah isi="Kembali ke daftar surah"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
    I49Z9 t Penyimpanan lokal isi="2 ayat · disimpan di perangkat ini"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    Z8ZX6 f Bookmark · Al-Fatihah  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20] stroke="$fable-border" strokeWidth={"bottom":1}
      O65mc2 t Surah tersimpan · Al-Fatihah isi="Al-Fatihah · Ayat 1"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="normal" line=1.5
      E7M5X t Cuplikan · Al-Fatihah isi="Cuplikan terjemahan contoh untuk tata letak."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
      j2T0hO f Aksi bookmark · Al-Fatihah  w="fill_container" gap=24
        vlzpD t Buka · Al-Fatihah isi="Buka ayat"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        w1zgN t Hapus · Al-Fatihah isi="Hapus bookmark"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    BLX5S f Bookmark · Al-Baqarah  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20] stroke="$fable-border" strokeWidth={"bottom":1}
      i1XTF t Surah tersimpan · Al-Baqarah isi="Al-Baqarah · Ayat 21"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="normal" line=1.5
      y44He t Cuplikan · Al-Baqarah isi="Cuplikan terjemahan contoh untuk tata letak."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
      epZh0 f Aksi bookmark · Al-Baqarah  w="fill_container" gap=24
        tr0hy t Buka · Al-Baqarah isi="Buka ayat"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        gj9kE t Hapus · Al-Baqarah isi="Hapus bookmark"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    g33Kt t Catatan data bookmark isi="Data contoh · bukan kutipan Al-Qur’an atau terjemahan resmi."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  ktVL5 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    N8BUO f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      ihCoc i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      NAXyr t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    hdoGC f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      n16dcy i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      y9hDFW t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    XHxJC f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      zTqEl i Ikon bookmark  w=20 h=20 fill="$fable-accent" icon="bookmark"
      PbIUC t Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    T7Ttf f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      H2Qpfc i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      KtYgA t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 8. Layar · Qari · Jadwal sholat [P:Wv0DU, cH4kO]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:SQrV8] → Isi Jadwal sholat [P:C7JYs] → Navigasi bawah [P:mxKNx]. Badan selebar 480px dalam wrapper tinggi 1459px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (67 node)</summary>

```text
cH4kO f v2 · Jadwal sholat  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  SQrV8 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    tyVG5 t Judul halaman isi="Jadwal sholat"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  C7JYs f Isi Jadwal sholat  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    L1VUmb t Periksa waktu sholat untuk lokasi pilihanmu. isi="Periksa waktu sholat untuk lokasi pilihanmu."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    dgjuw f Jakarta  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      K5hQ3 i Ikon map-pin  w=22 h=22 fill="$fable-accent" icon="map-pin"
      i9eHsS f Deksripsi Jakarta  w="fill_container" layout="vertical" gap=4
        Y1Wj1 t Jakarta isi="Jakarta"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        nil39 t Lokasi dipilih manual · Ubah kota isi="Lokasi dipilih manual · Ubah kota"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    IRl4B t Minggu, 11 Oktober 2026 isi="Minggu, 11 Oktober 2026"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.5
    xiY6x t Contoh tampilan · waktu berikut bukan jadwal live isi="Contoh tampilan · waktu berikut bukan jadwal live"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    Ng4vq f Sholat berikutnya  w="fill_container" layout="vertical" gap=8 pad=20 fill="$fable-soft" radius=8
      Qi4X3 t Berikutnya · Ashar isi="Berikutnya · Ashar"  w="fill_container" fill="$fable-accent" font="Inter" size=16 weight="normal" line=1.5
      aw8f7 t 15.12 isi="15.12"  w="fill_container" fill="$fable-accent" font="Inter" size=42 weight="600" line=1.5
    iBNvV f Subuh  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      B5Q8R i Ikon sun  w=22 h=22 fill="$fable-accent" icon="sun"
      O2Q11 f Deksripsi Subuh  w="fill_container" layout="vertical" gap=4
        gKCit t Subuh isi="Subuh"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        mCld0 t WIB isi="WIB"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      XoZ4O t 04.25 isi="04.25"  fill="$fable-accent" font="Inter" size=16 weight="normal" line=1.5
    gEMem f Terbit  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      BI2Aq i Ikon sun  w=22 h=22 fill="$fable-accent" icon="sun"
      saxeW f Deksripsi Terbit  w="fill_container" layout="vertical" gap=4
        a4jKR t Terbit isi="Terbit"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        R1iYRL t WIB isi="WIB"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      hENC4 t 05.42 isi="05.42"  fill="$fable-accent" font="Inter" size=16 weight="normal" line=1.5
    hjuhD f Dzuhur  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      oKBA0 i Ikon sun  w=22 h=22 fill="$fable-accent" icon="sun"
      c2boqa f Deksripsi Dzuhur  w="fill_container" layout="vertical" gap=4
        K58AGj t Dzuhur isi="Dzuhur"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        dPjLD t WIB isi="WIB"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      cAlO5 t 11.42 isi="11.42"  fill="$fable-accent" font="Inter" size=16 weight="normal" line=1.5
    w5Dwv f Ashar  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      JUmxP i Ikon clock-3  w=22 h=22 fill="$fable-accent" icon="clock-3"
      mAPyt f Deksripsi Ashar  w="fill_container" layout="vertical" gap=4
        fXQ8y t Ashar isi="Ashar"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        xoZS6 t WIB isi="WIB"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      vCGBB t 15.12 isi="15.12"  fill="$fable-accent" font="Inter" size=16 weight="normal" line=1.5
    wcZY0 f Maghrib  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      kS5iM i Ikon sun  w=22 h=22 fill="$fable-accent" icon="sun"
      ROCdg f Deksripsi Maghrib  w="fill_container" layout="vertical" gap=4
        avjeL t Maghrib isi="Maghrib"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        T2mPf7 t WIB isi="WIB"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      h45Bp t 17.49 isi="17.49"  fill="$fable-accent" font="Inter" size=16 weight="normal" line=1.5
    eTe9S f Isya  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      AEjDM i Ikon sun  w=22 h=22 fill="$fable-accent" icon="sun"
      MFxNi f Deksripsi Isya  w="fill_container" layout="vertical" gap=4
        nb3GA t Isya isi="Isya"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        S9FRZD t WIB isi="WIB"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      UYkgA t 18.59 isi="18.59"  fill="$fable-accent" font="Inter" size=16 weight="normal" line=1.5
    y1VOKW f Aksi Atur pengingat sholat  w="fill_container" h=48 pad=14 fill="$fable-soft" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
      D2ged t Atur pengingat sholat isi="Atur pengingat sholat"  fill="$fable-accent" font="Inter" size=14 weight="600" line=1.5
    K2ijw6 t Metode Kemenag RI · Aladhan. Cocokkan dengan jadwa isi="Metode Kemenag RI · Aladhan. Cocokkan dengan jadwal otoritas setempat."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  mxKNx f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    jg6i8 f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      kfIgm i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      ijCjo t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    b4vjg f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      mdBdH i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      SpinF t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    SA1a4 f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      K92rQQ i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      G0bO7A t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    DNgfF f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      KAC0I i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      gYN7F t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 9. Layar · Qari · Pengingat sholat [P:JZRLL, tGsdR]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:j4jz12] → Isi Pengingat sholat [P:H0qhs0] → Navigasi bawah [P:gC0mq]. Badan selebar 480px dalam wrapper tinggi 1643px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (76 node)</summary>

```text
tGsdR f v2 · Pengingat sholat  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  j4jz12 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    lKqzG t Judul halaman isi="Pengingat sholat"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  H0qhs0 f Isi Pengingat sholat  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    E8B9L t Atur pengingat sesuai ritme ibadahmu. isi="Atur pengingat sesuai ritme ibadahmu."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    p889f f Izin notifikasi belum diberikan  w="fill_container" layout="vertical" gap=12 pad=20 fill="$fable-soft" radius=8
      edcdd t Notifikasi belum diaktifkan isi="Notifikasi belum diaktifkan"  w="fill_container" fill="$fable-accent" font="Andada Pro" size=22 weight="normal" line=1.5
      WrTzN t Izinkan notifikasi saat kamu siap. Dukungan p isi="Izinkan notifikasi saat kamu siap. Dukungan pengingat saat aplikasi ditutup bergantung pada perangkat."  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
      EsgMx f Aksi Aktifkan notifikasi  w="fill_container" h=48 pad=14 fill="$fable-accent" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
        MgTL6 t Aktifkan notifikasi isi="Aktifkan notifikasi"  fill="#FFFFFF" font="Inter" size=14 weight="600" line=1.5
    Ak6Cs t Waktu pengingat isi="Waktu pengingat"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
    p72PNB f Sebelum sholat  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      KlNKS i Ikon bell  w=22 h=22 fill="$fable-accent" icon="bell"
      z4UpQQ f Teks Sebelum sholat  w="fill_container" layout="vertical" gap=4
        G79y3 t Sebelum sholat isi="Sebelum sholat"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        egDyB t Pilihan waktu pengingat isi="Pilihan waktu pengingat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      X1DlGf t 5 menit isi="5 menit"  fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
    pO6Z5 f Sesudah sholat  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      ZzPrI i Ikon bell  w=22 h=22 fill="$fable-accent" icon="bell"
      H1ObhP f Teks Sesudah sholat  w="fill_container" layout="vertical" gap=4
        gGjct t Sesudah sholat isi="Sesudah sholat"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        ZtkLO t Pengingat tambahan isi="Pengingat tambahan"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      KwkgZ t 5 menit isi="5 menit"  fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
    ImNZk f Menjelang sholat berikutnya  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      wSKhZ i Ikon clock-3  w=22 h=22 fill="$fable-accent" icon="clock-3"
      wG3Y6 f Teks Menjelang sholat berikutnya  w="fill_container" layout="vertical" gap=4
        s7MB5F t Menjelang sholat berikutnya isi="Menjelang sholat berikutnya"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        mj2Nz t Jeda sebelum waktu masuk isi="Jeda sebelum waktu masuk"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      M8tJz t 15 menit isi="15 menit"  fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
    WcZ9w t Sholat yang diingatkan isi="Sholat yang diingatkan"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
    Y8jhw f Subuh  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      R15AY i Ikon circle-check  w=22 h=22 fill="$fable-accent" icon="circle-check"
      mikjf f Teks Subuh  w="fill_container" layout="vertical" gap=4
        ngtOf t Subuh isi="Subuh"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        AM8Zh t Pengaturan contoh isi="Pengaturan contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      PAgrh t Aktif isi="Aktif"  fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
    NBSdo f Dzuhur  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      wf0Qg i Ikon circle-check  w=22 h=22 fill="$fable-accent" icon="circle-check"
      RWSpn f Teks Dzuhur  w="fill_container" layout="vertical" gap=4
        uULKf t Dzuhur isi="Dzuhur"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        g8qDja t Pengaturan contoh isi="Pengaturan contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      RmueT t Aktif isi="Aktif"  fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
    U9xTT f Ashar  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      r27KXN i Ikon circle-check  w=22 h=22 fill="$fable-accent" icon="circle-check"
      HblhN f Teks Ashar  w="fill_container" layout="vertical" gap=4
        HOrdV t Ashar isi="Ashar"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        ygJ1V t Pengaturan contoh isi="Pengaturan contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      y11eUL t Aktif isi="Aktif"  fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
    Acjaw f Maghrib  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      k7lArt i Ikon circle-check  w=22 h=22 fill="$fable-accent" icon="circle-check"
      t62sxn f Teks Maghrib  w="fill_container" layout="vertical" gap=4
        r2XSNz t Maghrib isi="Maghrib"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        sDwwu t Pengaturan contoh isi="Pengaturan contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      CqOWY t Aktif isi="Aktif"  fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
    e68zAs f Isya  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      uNOpD i Ikon circle-check  w=22 h=22 fill="$fable-accent" icon="circle-check"
      QqmAN f Teks Isya  w="fill_container" layout="vertical" gap=4
        d3Gwyh t Isya isi="Isya"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        raAyO t Pengaturan contoh isi="Pengaturan contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      NFngg t Aktif isi="Aktif"  fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
    J3hGi f Aksi Simpan pengingat  w="fill_container" h=48 pad=14 fill="$fable-accent" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
      f8961 t Simpan pengingat isi="Simpan pengingat"  fill="#FFFFFF" font="Inter" size=14 weight="600" line=1.5
    S6BFkA t Jika izin diblokir, buka pengaturan situs di  isi="Jika izin diblokir, buka pengaturan situs di browser. Pengingat bukan jaminan alarm tepat waktu."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  gC0mq f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    wLsxd f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Di8XH i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      J3FLO t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    pfhiE f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      eeNSv i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      wFAq2 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    wuDMX f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      B29e1O i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      KKpc4 t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    rVuh1 f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Ts6sC i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      uuzdo t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 10. Layar · Qari · Kalender Hijriyah [P:K8OPj, aHmwp]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:b1F3ql] → Isi Kalender Hijriyah [P:q706p] → Navigasi bawah [P:cQtoi]. Badan selebar 480px dalam wrapper tinggi 1158px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (116 node)</summary>

```text
aHmwp f v2 · Kalender Hijriyah  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  b1F3ql f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    JtCZN t Judul halaman isi="Kalender Hijriyah"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  q706p f Isi Kalender Hijriyah  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    bD3io t Lihat tanggal Hijri dan agenda ibadah. isi="Lihat tanggal Hijri dan agenda ibadah."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    G0AFT t ‹     Rabiulakhir 1448 H     › isi="‹     Rabiulakhir 1448 H     ›"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
    Zd55W t Contoh susunan kalender · bukan konversi tang isi="Contoh susunan kalender · bukan konversi tanggal live"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    MViCw f Kalender bulanan  w="fill_container" layout="vertical" gap=6
      eGBNh f Nama hari  w="fill_container" gap=4
        CIn0O t Sen isi="Sen"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
        i3A7AG t Sel isi="Sel"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
        z0ezUj t Rab isi="Rab"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
        JZQI4 t Kam isi="Kam"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
        elNkv t Jum isi="Jum"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
        ClUjC t Sab isi="Sab"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
        gpBk9 t Min isi="Min"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      qpPwf f Pekan 1  w="fill_container" gap=4
        jFnGP f Tanggal -1  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          x3iY2 t   w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        F5CEgm f Tanggal 0  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          JFhEM t   w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        VuR1H f Tanggal 1  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          Zw1oN t 1 isi="1"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        ttc50 f Tanggal 2  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          WRNBP t 2 isi="2"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        BhGlZ f Tanggal 3  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          Tei1Y t 3 isi="3"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        n6RVA f Tanggal 4  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          wn0q0 t 4 isi="4"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        ZwPtc f Tanggal 5  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          w9Zsds t 5 isi="5"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      T6a1hI f Pekan 2  w="fill_container" gap=4
        vBv3p f Tanggal 6  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          qATMB t 6 isi="6"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        rCWOA f Tanggal 7  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          khdcU t 7 isi="7"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        xVPAH f Tanggal 8  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          WygAy t 8 isi="8"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        voVF2 f Tanggal 9  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          xl9XQ t 9 isi="9"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        eIbjn f Tanggal 10  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          XuYS5 t 10 isi="10"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        nEnX5 f Tanggal 11  w="fill_container" h=46 fill="$fable-accent" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          ZcBh0 t 11 isi="11"  w="fill_container" fill="#FFFFFF" font="Inter" size=14 weight="normal" line=1.5
        WF2lz f Tanggal 12  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          yBVgu t 12 isi="12"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      AzXLZ f Pekan 3  w="fill_container" gap=4
        p1bVR f Tanggal 13  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          X96Jk t 13 isi="13"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        R6U6i6 f Tanggal 14  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          EBb5R t 14 isi="14"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        q9NxX f Tanggal 15  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          O0ve5 t 15 isi="15"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        L4Yd1 f Tanggal 16  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          tih7s t 16 isi="16"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        LsbGV f Tanggal 17  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          G6P4Y t 17 isi="17"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        Gcttd f Tanggal 18  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          D0azZ t 18 isi="18"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        s5GcL f Tanggal 19  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          XHp2c t 19 isi="19"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      i3PAU f Pekan 4  w="fill_container" gap=4
        Yokup f Tanggal 20  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          I4sps t 20 isi="20"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        lUZwL f Tanggal 21  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          xphAb t 21 isi="21"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        b26ToU f Tanggal 22  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          KL4SX t 22 isi="22"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        h8fAI f Tanggal 23  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          xtmiv t 23 isi="23"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        K3usjH f Tanggal 24  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          NwJBB t 24 isi="24"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        j2nlvC f Tanggal 25  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          Wk3qr t 25 isi="25"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        OmVIU f Tanggal 26  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          ZB8Rs t 26 isi="26"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      r7oxOo f Pekan 5  w="fill_container" gap=4
        ObGkk f Tanggal 27  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          E1v7o t 27 isi="27"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        VcsVs f Tanggal 28  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          MqggM t 28 isi="28"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        p5PMNm f Tanggal 29  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          j5JKh5 t 29 isi="29"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        zUZiV f Tanggal 30  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          FZS8U t 30 isi="30"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        Rgwhv f Tanggal 31  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          G6Aap t   w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        Yd5iT f Tanggal 32  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          GVeB8 t   w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        ZeWkE f Tanggal 33  w="fill_container" h=46 fill="$fable-bg" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
          qzJCx t   w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
    bpm6z t Agenda ibadah isi="Agenda ibadah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
    N1lEe5 f Puasa Senin & Kamis  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      A85V7i i Ikon calendar-days  w=22 h=22 fill="$fable-accent" icon="calendar-days"
      HU0Dd f Teks Puasa Senin & Kamis  w="fill_container" layout="vertical" gap=4
        y0xXbT t Puasa Senin & Kamis isi="Puasa Senin & Kamis"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        tJBdm t Setiap pekan isi="Setiap pekan"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    fd5CM f Ayyamul Bidh  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      LDpwn i Ikon moon  w=22 h=22 fill="$fable-accent" icon="moon"
      AtQzX f Teks Ayyamul Bidh  w="fill_container" layout="vertical" gap=4
        lTKS4 t Ayyamul Bidh isi="Ayyamul Bidh"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        GzeRR t 13, 14, dan 15 setiap bulan Hijri isi="13, 14, dan 15 setiap bulan Hijri"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    Zmg3D t Tanggal dan awal bulan dapat berbeda menurut  isi="Tanggal dan awal bulan dapat berbeda menurut rukyat serta keputusan otoritas setempat."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  cQtoi f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    ntt6P f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      TrdYt i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      ojtlB t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    efrfu f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      BjQUB i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      snYuu t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    ohjII f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      gl0ng i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      L9omMR t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    VXsbj f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      nMhe5 i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      oiHV0 t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 11. Layar · Qari · Arah kiblat [P:SqGt9, opTVu]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:Edshp] → Isi Arah kiblat [P:JmVN7] → Navigasi bawah [P:B8c5T]. Badan selebar 480px dalam wrapper tinggi 1128px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (33 node)</summary>

```text
opTVu f v2 · Arah kiblat  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  Edshp f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    ro8Gd t Judul halaman isi="Arah kiblat"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  JmVN7 f Isi Arah kiblat  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    QqSPw t Temukan arah Kaabah dari lokasi kamu. isi="Temukan arah Kaabah dari lokasi kamu."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    Wm7Vc f Lokasi belum dipilih  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      VcCzm i Ikon map-pin  w=22 h=22 fill="$fable-accent" icon="map-pin"
      B50cy f Teks Lokasi belum dipilih  w="fill_container" layout="vertical" gap=4
        Q23hD t Lokasi belum dipilih isi="Lokasi belum dipilih"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        bdqgu t Gunakan lokasi hanya setelah kamu memberi izi isi="Gunakan lokasi hanya setelah kamu memberi izin"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    Jdo21 f Kompas belum aktif  w="fill_container" h=240 layout="vertical" gap=18 fill="$fable-soft" radius=8 align="center" justify="center" x=null y=null pos=null rotation=null
      qHuZC i Kompas  w=120 h=120 fill="$fable-accent" icon="compass"
      wqx9P t Arah belum tersedia isi="Arah belum tersedia"  w="fill_container" fill="$fable-accent" font="Inter" size=15 weight="normal" line=1.5
    uPYQs f Aksi Gunakan lokasi saya  w="fill_container" h=48 pad=14 fill="$fable-accent" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
      iR2Mh t Gunakan lokasi saya isi="Gunakan lokasi saya"  fill="#FFFFFF" font="Inter" size=14 weight="600" line=1.5
    wyKy4 f Aksi Pilih lokasi manual  w="fill_container" h=48 pad=14 fill="$fable-soft" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
      Zg64F t Pilih lokasi manual isi="Pilih lokasi manual"  fill="$fable-accent" font="Inter" size=14 weight="600" line=1.5
    q5XgwC t Cara menggunakan isi="Cara menggunakan"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
    X18Sq t Letakkan perangkat mendatar dan jauhkan dari  isi="Letakkan perangkat mendatar dan jauhkan dari benda logam. Aktifkan sensor orientasi jika diminta."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
    Q2Xo5 t Jika sensor tidak didukung, tampilkan sudut k isi="Jika sensor tidak didukung, tampilkan sudut kiblat dari utara berdasarkan lokasi. Jangan tampilkan kompas seolah aktif."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  B8c5T f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    VpMSc f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      EhicI i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      LRxaT t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    dyaDy f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      YOBpS i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      u7TPY t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    umjrg f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      pbfiP i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      TsxGv t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    sZNVz f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Bm0RV i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      MccAV t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 12. Layar · Qari · Masjid sekitar [P:aKgXm, FvrtW]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:GMRsT] → Isi Masjid sekitar [P:Wy8yP] → Navigasi bawah [P:EmKU8]. Badan selebar 480px dalam wrapper tinggi 1222px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (47 node)</summary>

```text
FvrtW f v2 · Masjid sekitar  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  GMRsT f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    Fb4tN t Judul halaman isi="Masjid sekitar"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  Wy8yP f Isi Masjid sekitar  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    Mv8V7 t Cari tempat sholat di sekitar lokasi pilihanm isi="Cari tempat sholat di sekitar lokasi pilihanmu."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    W6AORY f Lokasi manual  w="fill_container" layout="vertical" gap=10 pad=20 fill="$fable-soft" radius=8
      xLaHv t Mulai dari lokasi pilihanmu isi="Mulai dari lokasi pilihanmu"  w="fill_container" fill="$fable-accent" font="Andada Pro" size=22 weight="normal" line=1.5
      K5G9l t Lokasi perangkat belum digunakan. Kamu tetap  isi="Lokasi perangkat belum digunakan. Kamu tetap bisa memilih area secara manual."  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
      JYYEp f Aksi Gunakan lokasi saya  w="fill_container" h=48 pad=14 fill="$fable-accent" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
        ml9xs t Gunakan lokasi saya isi="Gunakan lokasi saya"  fill="#FFFFFF" font="Inter" size=14 weight="600" line=1.5
      KvoLD f Aksi Pilih area manual  w="fill_container" h=48 pad=14 fill="$fable-soft" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
        H4sZib t Pilih area manual isi="Pilih area manual"  fill="$fable-accent" font="Inter" size=14 weight="600" line=1.5
    yUW0d f Jakarta · radius 5 km  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      tvmDp i Ikon map-pin  w=22 h=22 fill="$fable-accent" icon="map-pin"
      jL1Zp f Teks Jakarta · radius 5 km  w="fill_container" layout="vertical" gap=4
        p6zr6 t Jakarta · radius 5 km isi="Jakarta · radius 5 km"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        dl5Ol t Contoh hasil, bukan lokasi perangkat isi="Contoh hasil, bukan lokasi perangkat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    sT931 t Daftar masjid isi="Daftar masjid"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
    qgbJz f Masjid contoh A  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      KxLzn i Ikon map-pin  w=22 h=22 fill="$fable-accent" icon="map-pin"
      S4ycM f Teks Masjid contoh A  w="fill_container" layout="vertical" gap=4
        XRwzr t Masjid contoh A isi="Masjid contoh A"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        UFfrz t Contoh hasil · detail & buka petunjuk arah isi="Contoh hasil · detail & buka petunjuk arah"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    dnZqP f Masjid contoh B  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      G15NiQ i Ikon map-pin  w=22 h=22 fill="$fable-accent" icon="map-pin"
      tOfDG f Teks Masjid contoh B  w="fill_container" layout="vertical" gap=4
        y3lvy t Masjid contoh B isi="Masjid contoh B"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        DQ1HY t Contoh hasil · detail & buka petunjuk arah isi="Contoh hasil · detail & buka petunjuk arah"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    PfkGy f Masjid contoh C  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      ZhyiN i Ikon map-pin  w=22 h=22 fill="$fable-accent" icon="map-pin"
      BeyLN f Teks Masjid contoh C  w="fill_container" layout="vertical" gap=4
        ereJS t Masjid contoh C isi="Masjid contoh C"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        v3XgA t Contoh hasil · detail & buka petunjuk arah isi="Contoh hasil · detail & buka petunjuk arah"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    M8HhsN t Data © kontributor OpenStreetMap · ODbL. Hasi isi="Data © kontributor OpenStreetMap · ODbL. Hasil dapat memuat objek duplikat; pastikan lokasi sebelum berangkat."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  EmKU8 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    h0zqE f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      k0jHqp i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      J33V8 t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    P2uFN f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Irqz0 i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      ldS4f t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    mL9MC f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      tcgZ7 i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      qHhzm t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    OsQul f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      RKfnU i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      lFQ4a t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 13. Layar · Qari · Tasbih digital [P:qGXbQ, BIAvz]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:lcLjS] → Isi Tasbih digital [P:tQS09] → Navigasi bawah [P:AH9kQ]. Badan selebar 480px dalam wrapper tinggi 1304px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (45 node)</summary>

```text
BIAvz f v2 · Tasbih digital  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  lcLjS f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    j9fqj t Judul halaman isi="Tasbih digital"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  tQS09 f Isi Tasbih digital  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    cezUH t Hitung dzikir dengan tenang, satu ketukan set isi="Hitung dzikir dengan tenang, satu ketukan setiap bacaan."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    Ooi13 f Subhanallah  w="fill_container" gap=12 pad=[10,0] align="center" justify=null x=null y=null pos=null rotation=null
      J7JAW i Ikon chevron-down  w=22 h=22 fill="$fable-accent" icon="chevron-down"
      u1JFDl f Teks Subhanallah  w="fill_container" layout="vertical" gap=4
        OWbpw t Subhanallah isi="Subhanallah"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        xe5yN t Dzikir pilihan · Ubah bacaan isi="Dzikir pilihan · Ubah bacaan"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    y2ghid t سُبْحَانَ اللّٰهِ isi="سُبْحَانَ اللّٰهِ"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=32 weight="normal" line=1.6
    O0l7ho f Hitungan sesi · tampilan  w="fill_container" layout="vertical" gap=6 pad=[20,0,16,0] align="center" justify="center" x=null y=null pos=null rotation=null
      MLAID t 12 isi="12"  w="fill_container" fill="$fable-accent" font="Inter" size=88 weight="500" line=1.05
      Qz4rI t dari target 33 isi="12 dari 33 bacaan"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
      wedOg f Progress 12 dari 33  w=180 h=4 fill="$fable-soft" radius=2
        kiBRp s Progress terisi 36 persen  w=65 h=4 fill="$fable-accent" radius=2
    VDvKY f Kontrol hitungan · satu aksi utama  w="fill_container" gap=10 pad=[4,0,12,0] align="center" justify="center" x=null y=null pos=null rotation=null
      E8sgGp f Aksi Kurangi satu  w=44 h=44 radius=22 stroke="$fable-border" strokeWidth=1 align="center" justify="center" x=null y=null pos=null rotation=null
        V7p0Q t Kurangi satu isi="−"  fill="$fable-accent" font="Inter" size=22 weight="normal" line=1.5
      x6nx6 f Aksi Tambah hitungan  w=112 h=44 layout="vertical" gap=4 pad=[0,12] fill="$fable-accent" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
        nWA7M t Tambah hitungan isi="Tambah +1"  fill="#FFFFFF" font="Inter" size=14 weight="600" line=1.5
    O7JN2 f Atur target  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      AKstF i Ikon sliders-horizontal  w=22 h=22 fill="$fable-accent" icon="sliders-horizontal"
      wyW6C f Teks Atur target  w="fill_container" layout="vertical" gap=4
        FnCaw t Atur target isi="Atur target"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        mg8M8 t 33 bacaan · contoh sesi isi="33 bacaan · contoh sesi"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    oIbxF f Mulai ulang sesi  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      VHdlT i Ikon rotate-ccw  w=22 h=22 fill="$fable-accent" icon="rotate-ccw"
      wpc4H f Teks Mulai ulang sesi  w="fill_container" layout="vertical" gap=4
        ev0g5 t Mulai ulang sesi isi="Mulai ulang sesi"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        HlFqi t Minta konfirmasi sebelum menghapus hitungan isi="Minta konfirmasi sebelum menghapus hitungan"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    BNrsf t Hitungan disimpan pada perangkat ini. Getaran isi="Hitungan disimpan pada perangkat ini. Getaran hanya jika didukung dan diaktifkan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  AH9kQ f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    USz0D f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      O4Q15q i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      s5KQM t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    DyXSL f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Q8LTQK i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      KZmZY t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    Pyvvu f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      S41A16 i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      s8MF1 t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    A6prs f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Dt2qE i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      r993qf t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 14. Layar · Qari · Doa Ramadan [P:PNWo6, oxZa2]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:tGqWK] → Isi Doa Ramadan [P:TawwD] → Navigasi bawah [P:lImdd]. Badan selebar 480px dalam wrapper tinggi 1314px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (42 node)</summary>

```text
oxZa2 f v2 · Doa Ramadan  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  tGqWK f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    MOlEf t Judul halaman isi="Doa Ramadan"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  TawwD f Isi Doa Ramadan  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    zJuYh t Temukan bacaan untuk menemani ibadah Ramadan. isi="Temukan bacaan untuk menemani ibadah Ramadan."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    Gz0nP f Cari doa  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      mxtcy i Ikon search  w=22 h=22 fill="$fable-accent" icon="search"
      bh63Y f Teks Cari doa  w="fill_container" layout="vertical" gap=4
        cX3yN t Cari doa isi="Cari doa"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        E6Wnj t Cari berdasarkan judul isi="Cari berdasarkan judul"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    Zabhe t Sahur & berbuka isi="Sahur & berbuka"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
    Sfa7g f Niat Puasa Ramadan  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      O7PkPl i Ikon moon  w=22 h=22 fill="$fable-accent" icon="moon"
      Ga8zm f Teks Niat Puasa Ramadan  w="fill_container" layout="vertical" gap=4
        QofCJ t Niat Puasa Ramadan isi="Niat Puasa Ramadan"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        x11AqJ t Buka bacaan Arab, latin, dan terjemahan isi="Buka bacaan Arab, latin, dan terjemahan"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    zvbhR f Doa berbuka puasa  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      r09YJp i Ikon book-open  w=22 h=22 fill="$fable-accent" icon="book-open"
      S3ODp f Teks Doa berbuka puasa  w="fill_container" layout="vertical" gap=4
        QFDML t Doa berbuka puasa isi="Doa berbuka puasa"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        ns8wo t Buka bacaan dan rujukan isi="Buka bacaan dan rujukan"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    Z8F5m3 f Bacaan · Niat Puasa Ramadan  w="fill_container" layout="vertical" gap=16 pad=20 radius=8 stroke="$fable-border" strokeWidth=1
      Ojra8 t Niat Puasa Ramadan isi="Niat Puasa Ramadan"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
      S2d9F t نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْ isi="نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هٰذِهِ السَّنَةِ لِلَّهِ تَعَالَى"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=30 weight="normal" line=1.8
      tjPQL t Nawaitu shauma ghadin 'an adaa'i fardhi syahr isi="Nawaitu shauma ghadin 'an adaa'i fardhi syahri ramadhana hadzihis sanati lillahi ta'ala"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
      SWP43 t Aku niat puasa esok hari untuk menunaikan far isi="Aku niat puasa esok hari untuk menunaikan fardhu bulan Ramadan tahun ini karena Allah Ta’ala"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.5
      oMj1Q f Aksi Simpan doa  w="fill_container" h=48 pad=14 fill="$fable-soft" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
        h8Iqo t Simpan doa isi="Simpan doa"  fill="$fable-accent" font="Inter" size=14 weight="600" line=1.5
    XvGKy t Bacaan dari arsip Qari. Rujukan dan penggunaa isi="Bacaan dari arsip Qari. Rujukan dan penggunaan perlu review editorial sebelum diterbitkan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  lImdd f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    Plugv f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      G3elw i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      sEU5z t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    yFqml f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      f0KO6s i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      uE1NY t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    Q53ha f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      zC10N i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      K1xqm8 t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    udbyJ f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      yKBds i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      BydvS t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 15. Layar · Qari · Checklist amal [P:AYq1i, U3DsbC]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:Ce1uo] → Isi Checklist amal [P:i5Qz6] → Navigasi bawah [P:kTb5U]. Badan selebar 480px dalam wrapper tinggi 1562px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (70 node)</summary>

```text
U3DsbC f v2 · Checklist amal  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  Ce1uo f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    V56Rs t Judul halaman isi="Checklist amal"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  i5Qz6 f Isi Checklist amal  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    u3xfw t Catat ibadahmu untuk hari ini. Bukan penilaia isi="Catat ibadahmu untuk hari ini. Bukan penilaian kualitas ibadah."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    oZ7fp t Hari ini · contoh catatan isi="Hari ini · contoh catatan"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    R5iWje f Ringkasan amal  w="fill_container" layout="vertical" gap=10 pad=20 fill="$fable-soft" radius=8
      S2CKfb t 3 dari 9 aktivitas dicatat isi="3 dari 9 aktivitas dicatat"  w="fill_container" fill="$fable-accent" font="Andada Pro" size=23 weight="normal" line=1.5
      rh9ZY f Progress aktivitas  w="fill_container" h=6 fill="#CBD8D1" radius=3
        pg9Y1 s Progress 3 dari 9  w=128 h=6 fill="$fable-accent" radius=3
    l9JYq2 t Ramadan isi="Ramadan"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
    Romtt f Puasa Ramadan  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      DJxoW i Ikon square-check  w=22 h=22 fill="$fable-accent" icon="square-check"
      AgvGF f Teks Puasa Ramadan  w="fill_container" layout="vertical" gap=4
        gLe5l t Puasa Ramadan isi="Puasa Ramadan"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        o5IVT t Sudah dicatat isi="Sudah dicatat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    YoBZA f Sholat 5 Waktu  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      vFAFo i Ikon square  w=22 h=22 fill="$fable-accent" icon="square"
      v15Ikg f Teks Sholat 5 Waktu  w="fill_container" layout="vertical" gap=4
        Om0fu t Sholat 5 Waktu isi="Sholat 5 Waktu"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        pnP7q t Belum dicatat isi="Belum dicatat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    msnuD f Sholat Tarawih  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      QDeQo i Ikon square  w=22 h=22 fill="$fable-accent" icon="square"
      W7yMYU f Teks Sholat Tarawih  w="fill_container" layout="vertical" gap=4
        tmbSl t Sholat Tarawih isi="Sholat Tarawih"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        djsmB t Belum dicatat isi="Belum dicatat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    mewhb f Sholat Witir  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      Ltbkd i Ikon square  w=22 h=22 fill="$fable-accent" icon="square"
      Qf6EM f Teks Sholat Witir  w="fill_container" layout="vertical" gap=4
        m8ds4 t Sholat Witir isi="Sholat Witir"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        Y1Y2i2 t Belum dicatat isi="Belum dicatat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    by915 f Sholat Tahajjud  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      qqBLI i Ikon square  w=22 h=22 fill="$fable-accent" icon="square"
      cIa99 f Teks Sholat Tahajjud  w="fill_container" layout="vertical" gap=4
        d65SA t Sholat Tahajjud isi="Sholat Tahajjud"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        eaMlN t Belum dicatat isi="Belum dicatat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    JLs1d f Sholat Dhuha  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      txp8I i Ikon square  w=22 h=22 fill="$fable-accent" icon="square"
      A4E8Cp f Teks Sholat Dhuha  w="fill_container" layout="vertical" gap=4
        uJNy3 t Sholat Dhuha isi="Sholat Dhuha"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        GFddD t Belum dicatat isi="Belum dicatat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    tNeE6 f Tilawah Quran  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      mMwTh i Ikon square-check  w=22 h=22 fill="$fable-accent" icon="square-check"
      dOABF f Teks Tilawah Quran  w="fill_container" layout="vertical" gap=4
        PUzjb t Tilawah Quran isi="Tilawah Quran"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        iuLxt t Sudah dicatat isi="Sudah dicatat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    ViEKy f Sedekah  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      zNrO6 i Ikon square  w=22 h=22 fill="$fable-accent" icon="square"
      uM2SQ f Teks Sedekah  w="fill_container" layout="vertical" gap=4
        lZMSW t Sedekah isi="Sedekah"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        OXknO t Belum dicatat isi="Belum dicatat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    daiYD f Dzikir Pagi Petang  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      zf0DK i Ikon square-check  w=22 h=22 fill="$fable-accent" icon="square-check"
      vEX3s f Teks Dzikir Pagi Petang  w="fill_container" layout="vertical" gap=4
        riEWK t Dzikir Pagi Petang isi="Dzikir Pagi Petang"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        czmhw t Sudah dicatat isi="Sudah dicatat"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    mQRuu t Catatan tersimpan di perangkat ini. Kamu bisa isi="Catatan tersimpan di perangkat ini. Kamu bisa membatalkan centang kapan saja."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
  kTb5U f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    fli8m f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      M2EaYB i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      n5YRC t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    ZRR2s f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      l8eKi i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      D32fG0 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    brEop f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      B3Wrh i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      ieZrx t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    t2r5c f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Y6w31D i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      kFqfC t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 16. Layar · Preview · Fable-inspired / Pengaturan [P:sWJpr, kW2pD]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:ncby8] → Isi pengaturan [P:AiPD0] → Navigasi bawah [P:sbJCA]. Badan selebar 480px dalam wrapper tinggi 680px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (29 node)</summary>

```text
kW2pD f v2 · Fable-inspired / Pengaturan  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  ncby8 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    IvcWW t Judul halaman isi="Pengaturan"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  AiPD0 f Isi pengaturan  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    znhmu f Buka pengaturan bahasa  w="fill_container" h=110 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify="space_between" x=null y=null pos=null rotation=null
      y2mcHg f Bahasa saat ini  h=58 layout="vertical" gap=6
        x27ZKw t Label bahasa isi="Bahasa"  fill="$fable-ink" font="Inter" size=16 weight="normal"
        iuaks t Bahasa terpilih isi="Indonesia"  fill="$fable-muted" font="Inter" size=14 weight="normal"
      dTyhV i Buka pilihan bahasa  w=20 h=20 fill="$fable-muted" icon="chevron-right"
    Z9Jam f Tampilan · Fable-inspired  w="fill_container" layout="vertical" gap=16 pad=[0,0,24,0] stroke="$fable-border" strokeWidth={"bottom":1}
      s9OFx r Tema · Terang dan Gelap  w="fill_container" ref="kr1cB"
    Qmkjw f Pengaturan keterbacaan di reader  w="fill_container" gap=12 pad=[12,0] align="center" justify=null x=null y=null pos=null rotation=null
      Yvbwv t Akses tampilan baca isi="Tampilan bacaan"  w="fill_container" fill="$fable-ink" font="Inter" size=16 weight="normal" line=1.5
      TREGZ i Buka tampilan bacaan  w=20 h=20 fill="$fable-accent" icon="chevron-right"
    xqd8b r Pengaturan · Ukuran bacaan  w=424 layout="vertical" gap=12 pad=[0,0,20,0] radius=0 stroke="$fable-border" strokeWidth={"bottom":1} ref="c5QJ3" off align="start" justify="space_between" x=null y=null pos=null rotation=null
    AwZpa t Cakupan ukuran bacaan isi="Atur teks Arab dan terjemahan secara terpisah lewat Tampilan di halaman baca."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.6
  sbJCA f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    iniOr f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      N3Dl8c i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      VKUg3 t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    el81S f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      nfo8z i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      QPKUI t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    xH3Wm f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      NurCE i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      La8eT t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    tdAEj f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      XAVvt i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      r1YVHz t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 17. Layar · Preview · Fable-inspired / Bahasa [P:iSOKq, FhHmh]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:RmM62] → Pengaturan bahasa [P:f4hjF] → Navigasi bawah [P:g3EBg]. Badan selebar 480px dalam wrapper tinggi 869px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (39 node)</summary>

```text
FhHmh f v2 · Fable-inspired / Bahasa  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  RmM62 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    j9rDzD t Judul halaman isi="Bahasa"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  f4hjF f Pengaturan bahasa  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    PidEI t Penjelasan bahasa isi="Pilih bahasa tampilan dan terjemahan. Teks Al-Qur’an tetap dalam bahasa Arab."  w="fill_container" fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.6
    jxL0R f Pilih bahasa · Bahasa Indonesia  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      F1tS0b f Nama dan cakupan · Bahasa Indonesia  w="fill_container" layout="vertical" gap=3
        CiVVB t Nama · Bahasa Indonesia isi="Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        u0MZAF t Cakupan · Bahasa Indonesia isi="Terjemahan, tafsir, dan doa"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      Wg4Qv i Bahasa terpilih  w=24 h=24 fill="$fable-accent" icon="check"
    THHsN f Pilih bahasa · English  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      rWG7K f Nama dan cakupan · English  w="fill_container" layout="vertical" gap=3
        NMnSS t Nama · English isi="English"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        CD6tP t Cakupan · English isi="Terjemahan dan doa"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      ufFit s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    A6YR4 f Pilih bahasa · 日本語  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      k4f78 f Nama dan cakupan · 日本語  w="fill_container" layout="vertical" gap=3
        DgpBJ t Nama · 日本語 isi="日本語"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        we1Ld t Cakupan · 日本語 isi="Sebagian terjemahan"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      eKsgc s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    a9dpFx f Pilih bahasa · 简体中文  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      jVCLd f Nama dan cakupan · 简体中文  w="fill_container" layout="vertical" gap=3
        L8zeKn t Nama · 简体中文 isi="简体中文"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        Mi4eC t Cakupan · 简体中文 isi="Sebagian terjemahan"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      EmheZ s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    VnqIH t Keterangan ketersediaan contoh isi="Cakupan bahasa pada preview ini menggunakan data contoh."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.6
  g3EBg f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    agXMq f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      C8iZJ i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      f1nKDB t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    UXmxm f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      O3nco i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      G8izj t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    F7io7 f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      YHApQ i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      nFWxN t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    i9cWXO f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      n5KqD i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      PsNFV t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 18. Layar · Preview · Fable-inspired / Tentang [P:xtWNC, QVcOb]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:BM838] → Konten tentang [P:cDUIR] → Navigasi bawah [P:ZtHA8]. Badan selebar 480px dalam wrapper tinggi 835px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (44 node)</summary>

```text
QVcOb f v2 · Fable-inspired / Tentang  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  BM838 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    UcQyt t Judul halaman isi="Tentang"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  cDUIR f Konten tentang  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    nuFEa t Eyebrow tentang isi="MYALQURAN"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.55 off align=null justify=null x=20 y=28 pos=null rotation=null
    EInYU t Deskripsi aplikasi isi="Ruang baca Al-Qur’an, tafsir, dan doa dengan navigasi sederhana dalam beberapa bahasa. Teks ini adalah ringkasan ilustratif untuk desain."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="normal" line=1.55
    LmsEw t Judul ketersediaan isi="Ketersediaan konten"  w=424 fill="$fable-ink" font="Inter" size=19 weight="bold" line=1.55 off align=null justify=null x=20 y=204 pos=null rotation=null
    Al4vz f Bahasa Bahasa Indonesia  w=424 layout="vertical" gap=4 pad=[10,14] fill="$fable-soft" radius=8 off align=null justify=null x=20 y=249 pos=null rotation=null
      S3sUly t Nama Bahasa Indonesia isi="Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="bold" line=1.55
      QA2w4 t Cakupan Bahasa Indonesia isi="Al-Qur’an · terjemahan · tafsir · doa"  w=396 fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    PZwC8 f Bahasa English  w=424 layout="vertical" gap=4 pad=[10,14] fill="$fable-soft" radius=8 off align=null justify=null x=20 y=330 pos=null rotation=null
      UYSXG t Nama English isi="English"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="bold" line=1.55
      hW2np t Cakupan English isi="Al-Qur’an · translation · prayers"  w=396 fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    S2GNFh f Bahasa 日本語  w=424 layout="vertical" gap=4 pad=[10,14] fill="$fable-soft" radius=8 off align=null justify=null x=20 y=411 pos=null rotation=null
      qkMLg t Nama 日本語 isi="日本語"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="bold" line=1.55
      KU2NR t Cakupan 日本語 isi="Al-Qur’an · selected translation"  w=396 fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    yOgFu f Bahasa 简体中文  w=424 layout="vertical" gap=4 pad=[10,14] fill="$fable-soft" radius=8 off align=null justify=null x=20 y=492 pos=null rotation=null
      Egovs t Nama 简体中文 isi="简体中文"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="bold" line=1.55
      e4HmM t Cakupan 简体中文 isi="Al-Qur’an · selected translation"  w=396 fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    vUu6C t Judul kredit sumber isi="Sumber bacaan"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="bold" line=1.55
    H0x8Qx f Kredit Terjemahan contoh  w="fill_container" layout="vertical" gap=5 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1}
      s6s9w t Nama Terjemahan contoh isi="Terjemahan contoh"  w="fill_container" fill="$fable-ink" font="Inter" size=13 weight="bold" line=1.55
      tkElP t Deskripsi Terjemahan contoh isi="Contoh sumber · v0 · keterangan edisi"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    E8QyO f Kredit Tafsir contoh  w="fill_container" layout="vertical" gap=5 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1}
      ih44P t Nama Tafsir contoh isi="Tafsir contoh"  w="fill_container" fill="$fable-ink" font="Inter" size=13 weight="bold" line=1.55
      V2EvOE t Deskripsi Tafsir contoh isi="Contoh sumber · v0 · keterangan edisi"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    wgHjt t Tanggal pembaruan isi="Diperbarui: tanggal contoh"  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55 off align=null justify=null x=20 y=790 pos=null rotation=null
    K6aOx f Hak penggunaan  w="fill_container" layout="vertical" gap=5 pad=[8,0]
      l3F52 t Teks hak isi="Hak dan perizinan mengikuti sumber masing-masing."  w="fill_container" fill="$fable-ink" font="Inter" size=13 weight="normal" line=1.55
    QEE1l t Link offline isi="Kelola bacaan offline →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=20 y=886 pos=null rotation=null
    N0IQw t Versi preview isi="Versi data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal"
  ZtHA8 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    gMw2X f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      eyfNv i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      SfSvj t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    gLgQG f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      vrEbz i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      S7vHU t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    L21G6y f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      ruodg i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      wX2Gz t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    avBum f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      ZwLoA i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      kNOh8 t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 19. Layar · Preview · Fable-inspired / Unduhan [P:RiWNG, UkcF9]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:WjfNR] → Konten kelola offline [P:WmF3m] → Navigasi bawah [P:oeGZU]. Badan selebar 480px dalam wrapper tinggi 775px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (40 node)</summary>

```text
UkcF9 f v2 · Fable-inspired / Unduhan  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  WjfNR f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    hw4cJ t Judul halaman isi="Unduhan"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  WmF3m f Konten kelola offline  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    i5rH0v t Eyebrow bahasa isi="BAHASA INDONESIA"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.5 off align=null justify=null x=20 y=28 pos=null rotation=null
    JpAGY f Informasi ketersediaan  w=440 layout="vertical" gap=6 pad=[12,16] fill="$fable-soft" stroke="$fable-accent" strokeWidth={"left":3} off align=null justify=null x=20 y=118 pos=null rotation=null
      IFgiq t Isi ketersediaan isi="Paket untuk bahasa ini mencakup bacaan yang tersedia di aplikasi."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
    i1JM8T f Ringkasan paket  w="fill_container" layout="vertical" gap=10 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1}
      oZTqR t Status paket utama isi="Bacaan · Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="bold" line=1.5
      xMVWK t Cakupan paket isi="Al-Qur’an, terjemahan, tafsir, dan doa.\nTeks Arab tetap disertakan."  w=396 fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.5
    srEsV t Estimasi ukuran isi="Perkiraan ukuran: 12,4 MB · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
    m9qAfO f Kemajuan unduh  w=440 layout="vertical" gap=9 off align=null justify=null x=0 y=0 pos=null rotation=null
      MzdUg t Label kemajuan isi="Mengunduh: 3 / 10 berkas"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      Vqtku f Latar bilah kemajuan  w="fill_container" h=10 fill="$fable-soft" radius=6
        o4s1k f Bagian bilah terisi  w=132 h=10 fill="$fable-accent" radius=6
    SXN7Q t Status langsung isi="Belum diunduh"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    ZJusX f Aksi utama  w="fill_container" pad=[16,12] fill="$fable-accent" radius=6 align=null justify="center" x=null y=null pos=null rotation=null
      GMML6 t Label aksi utama isi="Unduh untuk baca offline"  fill="#ffffff" font="Inter" size=15 weight="bold"
    IcMcV t Paket lama isi="Paket lama masih tersimpan hingga pembaruan selesai."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=435 pos=null rotation=null
    NHNhO f Pembaruan aplikasi tersedia  w=440 layout="vertical" gap=10 pad=[15,16] radius=10 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=0 y=0 pos=null rotation=null
      XNnDC t Pesan pembaruan isi="Versi aplikasi baru tersedia."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="bold" line=1.5
      jEDVS f Tombol perbarui aplikasi  pad=[12,16] radius=8 stroke="$fable-accent" strokeWidth=1
        auOgO t Teks perbarui aplikasi isi="Perbarui sekarang"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    EVZFc f Tombol pemasangan  w=440 pad=[13,16] radius=8 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=20 y=435 pos=null rotation=null
      wbr9L t Teks tombol pemasangan isi="Pasang aplikasi"  fill="$fable-ink" font="Inter" size=15 weight="normal"
    o7lgsd t Bantuan pemasangan isi="Jika pemasangan otomatis tidak tersedia, gunakan menu browser untuk menambahkan aplikasi ke layar utama."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=495 pos=null rotation=null
    lqmuX t Peringatan penyimpanan isi="Tersimpan di perangkat ini. Browser dapat menghapus unduhan saat ruang penyimpanan terbatas."  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
  oeGZU f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    DwzNd f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      WTbMR i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      IrCEM t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    IjDgE f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      SYyF0 i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      BGUZ3 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    c2Bhi9 f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      b9Mno i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      h6XOdr t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    jeQx6 f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      TYFNp i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      P4K01w t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 20. Layar · Qari · Pasang MyAlQuran [P:yXaaQ, E6o2md]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:s7wlon] → Isi Pasang MyAlQuran [P:N9vaN9] → Navigasi bawah [P:zFcCS]. Badan selebar 480px dalam wrapper tinggi 1211px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (39 node)</summary>

```text
E6o2md f v2 · Pasang MyAlQuran  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  s7wlon f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    Q0YnL t Judul halaman isi="Pasang MyAlQuran"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  N9vaN9 f Isi Pasang MyAlQuran  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    L0TjTK t Buka lebih cepat dari layar utama perangkatmu isi="Buka lebih cepat dari layar utama perangkatmu."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    r83Mo f Aksi Pasang aplikasi  w="fill_container" h=48 pad=14 fill="$fable-accent" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
      s6uA5S t Pasang aplikasi isi="Pasang aplikasi"  fill="#FFFFFF" font="Inter" size=14 weight="600" line=1.5
    h9MuRH t Jika tombol pasang tidak tersedia isi="Jika tombol pasang tidak tersedia"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=23 weight="normal" line=1.5
    nPx5A f Safari di iPhone / iPad  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      C661Ss i Ikon share-2  w=22 h=22 fill="$fable-accent" icon="share-2"
      nasDn f Teks Safari di iPhone / iPad  w="fill_container" layout="vertical" gap=4
        v40G2G t Safari di iPhone / iPad isi="Safari di iPhone / iPad"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        G9QGj t Buka Bagikan → Tambahkan ke Layar Utama isi="Buka Bagikan → Tambahkan ke Layar Utama"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    g9Dts9 f Chrome di Android  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      Z69Rfu i Ikon download  w=22 h=22 fill="$fable-accent" icon="download"
      jnN5s f Teks Chrome di Android  w="fill_container" layout="vertical" gap=4
        rRkt7 t Chrome di Android isi="Chrome di Android"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        U2iSK t Buka menu browser → Pasang aplikasi atau Tamb isi="Buka menu browser → Pasang aplikasi atau Tambahkan ke layar utama"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    uXysG f Sudah terpasang?  w="fill_container" gap=12 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      J4AeT i Ikon circle-check  w=22 h=22 fill="$fable-accent" icon="circle-check"
      p1csdM f Teks Sudah terpasang?  w="fill_container" layout="vertical" gap=4
        EKXws t Sudah terpasang? isi="Sudah terpasang?"  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="500" line=1.5
        CYNGr t Buka MyAlQuran dari layar utama isi="Buka MyAlQuran dari layar utama"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    P5EN1 t Pemasangan tidak otomatis mengunduh semua bac isi="Pemasangan tidak otomatis mengunduh semua bacaan. Kelola unduhan melalui menu Unduhan."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    xeNP3 f Aksi Kelola unduhan  w="fill_container" h=48 pad=14 fill="$fable-soft" radius=6 align="center" justify="center" x=null y=null pos=null rotation=null
      gP4n0 t Kelola unduhan isi="Kelola unduhan"  fill="$fable-accent" font="Inter" size=14 weight="600" line=1.5
  zFcCS f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    qGKSo f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      efWHg i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      ljfUx t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    Q5IYY f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      YRhRN i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      f7zm3 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    rxcSK f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      OOzZB i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      rLp2m t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    W3bwa f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      VB8D7 i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      EpZBw t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 21. Layar · Preview · Tampilan baca / panel terbuka [P:T9q2Tq, XsIPr]

State **Tampilan baca / panel terbuka**; hierarki utama: Header · App bar ringkas [P:b0daXt] → Konten pembaca ayat [P:ak2cA] → Navigasi bawah [P:G9pbu4]. Badan selebar 480px dalam wrapper tinggi 2013px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (108 node)</summary>

```text
XsIPr f v2 · Tampilan baca / panel terbuka  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  b0daXt f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    zQWTY f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      U0xhDV i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    t14WZ t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  ak2cA f Konten pembaca ayat  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    HgnMf f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      k8LMx2 t Nama Arab surah isi="الفاتحة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      lXqDb t Nama latin surah isi="Al-Fatihah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      rSZlF t Meta surah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    xf4wd f Toolbar pembaca  w="fill_container" gap=12
      HFzcq f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        h7MmP i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        GiVyq t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      zGl0G f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        O95HJj i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        F6aSaq t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    xMyji f Panel tampilan baca · terbuka  w="fill_container" layout="vertical" gap=12 pad=16 fill="$fable-soft" radius=12
      P10ym f Heading pengaturan  w="fill_container" gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        CcvcO t Judul panel isi="Tampilan bacaan"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="600" line=1.5
        UWFPW f Tutup pengaturan  w=44 h=44 align="center" justify="center" x=null y=null pos=null rotation=null
          xUynL i Tutup  w=20 h=20 fill="$fable-accent" icon="x"
      lclTb f Pilihan tema baca  w="fill_container" h=44 radius=8 stroke="$fable-border" strokeWidth=1
        C3fAvr f Tema · Terang  w="fill_container" h="fill_container" gap=8 fill="$fable-accent" radius=8 align="center" justify="center" x=null y=null pos=null rotation=null
          WIwtb i Ikon tema · Terang  w=18 h=18 fill="#FFFFFF" icon="sun"
          EDJbj t Label tema · Terang isi="Terang"  fill="#FFFFFF" font="Inter" size=14 weight="600"
        HbDfS f Tema · Gelap  w="fill_container" h="fill_container" gap=8 fill="$fable-bg" radius=8 align="center" justify="center" x=null y=null pos=null rotation=null
          GSayT i Ikon tema · Gelap  w=18 h=18 fill="$fable-ink" icon="moon"
          cHBsf t Label tema · Gelap isi="Gelap"  fill="$fable-ink" font="Inter" size=14 weight="normal"
      sFWKg f Ukuran teks Arab  w="fill_container" gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        OkYtI t Ukuran teks Arab label isi="Ukuran teks Arab"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        G6ajzo f Kontrol ukuran teks  fill="#FFFFFF" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
          OmcIx f Ukuran teks Arab · −  h=44 pad=[0,12] align="center" justify="center" x=null y=null pos=null rotation=null
            Zmloo t Nilai · Ukuran teks Arab · − isi="−"  fill="$fable-accent" font="Inter" size=14 weight="normal"
          k4hPp f Ukuran teks Arab · 36 px  h=44 pad=[0,12] align="center" justify="center" x=null y=null pos=null rotation=null
            Wxngc t Nilai · Ukuran teks Arab · 36 px isi="36 px"  fill="$fable-accent" font="Inter" size=14 weight="normal"
          TUWqx f Ukuran teks Arab · +  h=44 pad=[0,12] align="center" justify="center" x=null y=null pos=null rotation=null
            fgtzf t Nilai · Ukuran teks Arab · + isi="+"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      X0NSeG f Ukuran terjemahan  w="fill_container" gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        RPX9Y t Ukuran terjemahan label isi="Ukuran terjemahan"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        HtIap f Kontrol ukuran teks  fill="#FFFFFF" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
          NlXKn f Ukuran terjemahan · −  h=44 pad=[0,12] align="center" justify="center" x=null y=null pos=null rotation=null
            o4zJm t Nilai · Ukuran terjemahan · − isi="−"  fill="$fable-accent" font="Inter" size=14 weight="normal"
          Y0gUwq f Ukuran terjemahan · 19 px  h=44 pad=[0,12] align="center" justify="center" x=null y=null pos=null rotation=null
            xXwDl t Nilai · Ukuran terjemahan · 19 px isi="19 px"  fill="$fable-accent" font="Inter" size=14 weight="normal"
          L3znhP f Ukuran terjemahan · +  h=44 pad=[0,12] align="center" justify="center" x=null y=null pos=null rotation=null
            cyRXR t Nilai · Ukuran terjemahan · + isi="+"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      kcIbE f Jarak baris  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        ba7RC t Label jarak baris isi="Jarak baris"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal"
        Ksh39 f Jarak Rapat  h=44 pad=[0,10] radius=6 align="center" justify=null x=null y=null pos=null rotation=null
          RZ9MU t Rapat isi="Rapat"  fill="$fable-accent" font="Inter" size=12 weight="normal"
        hhS44 f Jarak Nyaman  h=44 pad=[0,10] fill="#FFFFFF" radius=6 align="center" justify=null x=null y=null pos=null rotation=null
          gafcq t Nyaman isi="Nyaman"  fill="$fable-accent" font="Inter" size=12 weight="normal"
        PT9St f Jarak Lega  h=44 pad=[0,10] radius=6 align="center" justify=null x=null y=null pos=null rotation=null
          oOAOK t Lega isi="Lega"  fill="$fable-accent" font="Inter" size=12 weight="normal"
      fSb3q f Tampilkan Transliterasi  w="fill_container" gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        hRXPb t Label toggle Transliterasi isi="Transliterasi"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        tgZSd f Toggle aktif · Transliterasi  w=64 h=44 pad=6 fill="$fable-accent" radius=24 align="center" justify="end" x=null y=null pos=null rotation=null
          H0TnNO s Thumb toggle · Transliterasi  w=30 h=30 fill="#FFFFFF"
      lkMRv f Tampilkan Terjemahan  w="fill_container" gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        ITwKR t Label toggle Terjemahan isi="Terjemahan"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
        CnpG5 f Toggle aktif · Terjemahan  w=64 h=44 pad=6 fill="$fable-accent" radius=24 align="center" justify="end" x=null y=null pos=null rotation=null
          yIrBZ s Thumb toggle · Terjemahan  w=30 h=30 fill="#FFFFFF"
      TqlQb t Font tunggal isi="Ukuran Arab dan terjemahan diatur terpisah."  w="fill_container" fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    y9QYj f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      ZxFpS t Judul kredit isi="Data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      KUuMK t Keterangan kredit isi="Konten pendek untuk rancangan visual; bukan sumber terjemahan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    f07DCB f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      n89EZx t Nomor ayat isi="Ayat 1 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
      ROLZn t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      Eq7fn t Latin contoh isi="Transliterasi contoh untuk tata letak."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55
      L3weZ4 t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      onIK7 f Catatan terjemahan · tertutup  w="fill_container" h=44 align="center" justify="space_between" x=null y=null pos=null rotation=null
        I2rBsz t Label catatan tertutup isi="Catatan terjemahan"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        RtipY i Buka catatan  w=18 h=18 fill="$fable-accent" icon="chevron-down"
      YN8rK f Catatan terjemahan · terbuka  w=424 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        GOwns t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        b5ruhF t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      JT9SQ t Tautan tafsir isi="Baca tafsir · Ayat 1 →"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55
      NLyCp f Aksi · Ayat 1  w="fill_container" align=null justify="end" x=null y=null pos=null rotation=null
        ckcSA f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          AyFp4 i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          x3lvV t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    D3CaDz f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      Fbqpg t Label ayat kedua isi="Ayat 2 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
      f3aUNX t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      SqPI1 t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      G1bxsO t Link tafsir kedua isi="Baca tafsir · Ayat 2 →"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55
      L46Hzp f Aksi · Ayat 2  w="fill_container" align=null justify="end" x=null y=null pos=null rotation=null
        Rekf0 f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          Wh0CI i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          FEJDy t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    IxfZO f Paginasi surah  w="fill_container" pad=[18,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      v0FH4 t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      Fsir6 t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal"
  G9pbu4 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    zTQH4 f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      FSoMD i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      eLSld t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    NZeBz f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      aYFjr i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      yyjcz t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    q6rhkq f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      U3Fru i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      Wj83m t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    b1kgN f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      AgymJ i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      IdYtO t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 22. Layar · Preview · Ke ayat / validasi nomor [P:oz5WT, z4gPQ]

State **Ke ayat / validasi nomor**; hierarki utama: Header · App bar ringkas [P:BCRQc] → Konten pembaca ayat [P:S7G6L] → Navigasi bawah [P:gB0EB]. Badan selebar 480px dalam wrapper tinggi 1824px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (76 node)</summary>

```text
z4gPQ f v2 · Ke ayat / validasi nomor  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  BCRQc f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    ut5Di f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      ARked i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    XdCpC t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  S7G6L f Konten pembaca ayat  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    tCe1d f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      sgqt6 t Nama Arab surah isi="البقرة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      UgvQq t Nama latin surah isi="Al-Baqarah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      LURLp t Meta surah isi="Sapi Betina · 286 ayat · Madinah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    ORWd4 f Navigasi rentang ayat  w="fill_container" pad=[8,0] align="center" justify="space_between" x=null y=null pos=null rotation=null
      t1BkT t Rentang yang dibaca isi="Ayat 21–40 dari 286"  fill="$fable-muted" font="Inter" size=14 weight="normal"
    uMPxv f Lompat ke ayat · form  w="fill_container" layout="vertical" gap=8 pad=16 fill="$fable-soft" radius=8
      MouuF t Judul lompat isi="Ke ayat"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="600" line=1.5
      sRQVN t Rentang valid isi="Nomor ayat · 1–286"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      q03n3h f Input nomor dan aksi  w="fill_container" gap=12
        quWmJ f Input nomor ayat · 21  w="fill_container" h=48 pad=[0,14] fill="#FFFFFF" radius=8 stroke="$fable-accent" strokeWidth=2 align="center" justify=null x=null y=null pos=null rotation=null
          B23Cw t Nomor ayat valid isi="21"  w="fill_container" fill="$fable-ink" font="Inter" size=16 weight="normal" line=1.5
        RQ5Qf f Buka nomor ayat valid  h=48 pad=[0,20] fill="$fable-accent" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
          DGHEj t Label buka nomor isi="Buka ayat"  fill="#FFFFFF" font="Inter" size=14 weight="normal"
      Y8ipd t Error validasi contoh isi="Masukkan angka bulat 1–286."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
    CWteC f Toolbar pembaca  w="fill_container" gap=12
      hO4dp f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        gJDPP i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        cHUZP t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      tP7uw f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        B6K6P i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        D40vmw t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    fpqMt f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      c3u6W t Judul kredit isi="Data contoh · preview tata letak"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      ANEGa t Keterangan kredit isi="Dua ayat ditampilkan sebagai sampel bagian 21–40; bukan teks Al-Qur’an atau terjemahan resmi."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    pTsLD f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      n5x89 t Nomor ayat isi="Ayat 21 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
      EbWOE t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      bFZxI t Latin contoh isi="Transliterasi contoh untuk tata letak."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55
      qhA5y t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      eJZ3F f Catatan terjemahan · terbuka  w=388 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        z00K7V t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        TdQxi t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      YDnQz t Tautan tafsir isi="Baca tafsir · Ayat 21"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55
      j6RiwZ f Aksi · Ayat 21  w="fill_container" align=null justify="end" x=null y=null pos=null rotation=null
        W3x9Th f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          TrRNa i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          N0Dql t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    NSj8u f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      nKrHr t Label ayat kedua isi="Ayat 22 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
      erCBy t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      NLcgs t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      SpBxu t Link tafsir kedua isi="Baca tafsir · Ayat 22"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55
      cl7Gd f Aksi · Ayat 22  w="fill_container" align=null justify="end" x=null y=null pos=null rotation=null
        i9e8CC f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          e6C2w i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          h4UJ5 t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    tFQU8 f Paginasi surah  w=388 h="fit_content(35)" pad=[18,0,0,0] off align=null justify="space_between" x=28 y=1019 pos=null rotation=null
      W9Ln6L t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal" off align=null justify=null x=0 y=18 pos=null rotation=null
      D9VlnA t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal" off align=null justify=null x=336 y=18 pos=null rotation=null
    at44S f Pindah bagian ayat  w="fill_container" gap=12 pad=[12,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      tLJIj f Ayat sebelumnya  h=44 gap=8 pad=[0,12] radius=22 stroke="$fable-border" strokeWidth=1 align="center" justify=null x=null y=null pos=null rotation=null
        JOu8Y i Ayat sebelumnya  w=16 h=16 fill="$fable-accent" icon="chevron-left"
        oTJl1 t Aksi · Ayat sebelumnya isi="Sebelumnya · 1–20"  fill="$fable-accent" font="Inter" size=12 weight="normal"
      R40sEC f Ayat berikutnya  h=44 gap=8 pad=[0,12] radius=22 stroke="$fable-border" strokeWidth=1 align="center" justify=null x=null y=null pos=null rotation=null
        w32yBV t Aksi · Ayat berikutnya isi="Berikutnya · 41–60"  fill="$fable-accent" font="Inter" size=12 weight="normal"
        I8dDI i Ayat berikutnya  w=16 h=16 fill="$fable-accent" icon="chevron-right"
  gB0EB f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    h1niby f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      EacGV i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      On3oQ t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    D5QAmH f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      WohhP i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      m2d42 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    lGuWX f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      VXPh7 i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      P24oJx t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    y5VUAF f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      XXZ2C i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      SS5yP t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 23. Layar · Preview · Mode gelap / Arab saja [P:j3opNf, kPcXB]

State **Mode gelap / Arab saja**; hierarki utama: Header · App bar ringkas [P:Kwtw0] → Konten pembaca ayat [P:YAYgP] → Navigasi bawah [P:xYg5v]. Badan selebar 480px dalam wrapper tinggi 1318px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (62 node)</summary>

```text
kPcXB f v2 · Mode gelap / Arab saja  w=480 layout="vertical" fill="#171C19" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  Kwtw0 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    lgCS0 f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      GQrcW i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    pD5bt t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  YAYgP f Konten pembaca ayat  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    d9Ckm f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      BQx2E t Nama Arab surah isi="الفاتحة"  w="fill_container" fill="#EDF2EF" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      bBhFL t Nama latin surah isi="Al-Fatihah"  w="fill_container" fill="#EDF2EF" font="Andada Pro" size=32 weight="500" line=1.25
      apO5t t Meta surah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="#AAB8B0" font="Inter" size=13 weight="normal" line=1.55
    td1RV f Toolbar pembaca  w="fill_container" gap=12
      zJwxS f Tampilan  h=44 gap=8 pad=[0,12] fill="#283E34" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        Ltjee i Ikon · Tampilan  w=18 h=18 fill="#9BD1B9" icon="type"
        q5UtL t Label · Tampilan isi="Tampilan"  fill="#9BD1B9" font="Inter" size=14 weight="normal"
      ZgtGF f Tersimpan  h=44 gap=8 pad=[0,12] fill="#283E34" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        NC4h7 i Ikon · Tersimpan  w=18 h=18 fill="#9BD1B9" icon="bookmark"
        rDAuj t Label · Tersimpan isi="Tersimpan"  fill="#9BD1B9" font="Inter" size=14 weight="normal"
    c430ap t Status mode Arab saja isi="Arab saja · transliterasi dan terjemahan disembunyikan"  w="fill_container" fill="#AAB8B0" font="Inter" size=13 weight="normal" line=1.5
    cqtsc f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="#3A4A41"
      jwAuP t Judul kredit isi="Data contoh · v0"  w="fill_container" fill="#AAB8B0" font="Inter" size=13 weight="normal" line=1.55
      gpUSC t Keterangan kredit isi="Konten pendek untuk rancangan visual; bukan sumber terjemahan."  w="fill_container" fill="#AAB8B0" font="Inter" size=12 weight="normal" line=1.55
    eYRuL f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="#3A4A41" strokeWidth={"bottom":1}
      RViwj t Nomor ayat isi="Ayat 1 · data contoh"  w="fill_container" fill="#AAB8B0" font="Inter" size=12 weight="500" line=1.55
      LPA2I t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="#EDF2EF" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      f7qV0 t Latin contoh isi="Transliterasi contoh untuk tata letak."  w=424 fill="#AAB8B0" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=139 pos=null rotation=null
      ZA89C t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w=424 fill="#EDF2EF" font="Andada Pro" size=19 weight="normal" line=1.65 off align=null justify=null x=0 y=177 pos=null rotation=null
      l8OHH f Catatan terjemahan · tertutup  w=424 h=44 off align="center" justify="space_between" x=0 y=255 pos=null rotation=null
        NiPr4 t Label catatan tertutup isi="Catatan terjemahan"  w="fill_container" fill="#9BD1B9" font="Inter" size=14 weight="normal" line=1.5
        kkKzK i Buka catatan  w=18 h=18 fill="#9BD1B9" icon="chevron-down"
      dNUS0 f Catatan terjemahan · terbuka  w=424 layout="vertical" gap=10 pad=18 fill="#283E34" off align=null justify=null x=0 y=255 pos=null rotation=null
        qrFYD t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="#9BD1B9" font="Inter" size=14 weight="bold" line=1.55
        rU6tQ t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="#EDF2EF" font="Inter" size=14 weight="normal" line=1.55
      H68hMH t Tautan tafsir isi="Baca tafsir · Ayat 1 →"  w="fill_container" fill="#9BD1B9" font="Inter" size=14 weight="normal" line=1.55
      QTQpG f Aksi · Ayat 1  w="fill_container" align=null justify="end" x=null y=null pos=null rotation=null
        cDko9 f Tersimpan  h=44 gap=8 pad=[0,12] fill="#283E34" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          HIbNe i Ikon · Tersimpan  w=18 h=18 fill="#9BD1B9" icon="bookmark-check"
          ZkEpd t Label · Tersimpan isi="Tersimpan"  fill="#9BD1B9" font="Inter" size=14 weight="normal"
    s5WEK f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="#3A4A41" strokeWidth={"bottom":1}
      IqVu9 t Label ayat kedua isi="Ayat 2 · data contoh"  w="fill_container" fill="#AAB8B0" font="Inter" size=12 weight="500" line=1.55
      JcR89 t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="#EDF2EF" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      N1woZ t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w=424 fill="#EDF2EF" font="Andada Pro" size=19 weight="normal" line=1.65 off align=null justify=null x=0 y=139 pos=null rotation=null
      N1mrZC t Link tafsir kedua isi="Baca tafsir · Ayat 2 →"  w="fill_container" fill="#9BD1B9" font="Inter" size=14 weight="normal" line=1.55
      dxzus f Aksi · Ayat 2  w="fill_container" align=null justify="end" x=null y=null pos=null rotation=null
        r6Dtp f Simpan ayat  h=44 gap=8 pad=[0,12] fill="#283E34" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          NAFQD i Ikon · Simpan ayat  w=18 h=18 fill="#9BD1B9" icon="bookmark"
          QLs9G t Label · Simpan ayat isi="Simpan ayat"  fill="#9BD1B9" font="Inter" size=14 weight="normal"
    M7bLbo f Paginasi surah  w="fill_container" pad=[18,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      y29eg t Surah sebelumnya isi="← Sebelumnya"  fill="#9BD1B9" font="Inter" size=14 weight="normal"
      ehl1D t Surah berikutnya isi="Berikutnya →"  fill="#9BD1B9" font="Inter" size=14 weight="normal"
  xYg5v f Navigasi bawah  w="fill_container" pad=[12,20] fill="$preview-dark-bg" stroke="$preview-dark-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    DMfhr f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$preview-dark-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      aoY2P i Ikon house  w=20 h=20 fill="$preview-dark-accent" icon="house"
      V6Lgd t Beranda isi="Beranda"  fill="$preview-dark-accent" font="Inter" size=11 weight="600" line=1.5
    UZJO5 f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      nkK7j i Ikon book-open  w=20 h=20 fill="$preview-dark-muted" icon="book-open"
      LUlpm t Al-Qur’an isi="Al-Qur’an"  fill="$preview-dark-muted" font="Inter" size=11 weight="normal" line=1.5
    uIKhI f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      FkFb0 i Ikon bookmark  w=20 h=20 fill="$preview-dark-muted" icon="bookmark"
      ig098 t Tersimpan isi="Tersimpan"  fill="$preview-dark-muted" font="Inter" size=11 weight="normal" line=1.5
    Ywcki f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      i4Q3kl i Ikon settings  w=20 h=20 fill="$preview-dark-muted" icon="settings"
      N9EjRP t Pengaturan isi="Pengaturan"  fill="$preview-dark-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 24. Layar · Preview · Widget minimal / tertutup [P:PcsAj, M8lNam]

State **Widget minimal / tertutup**; hierarki utama: Header · App bar ringkas [P:H8mcZ7] → Konten pembaca ayat [P:JMSJO] → Dock · Kontrol baca tertutup [P:URQ3w] → Navigasi bawah [P:fVhXn]. Badan selebar 480px dalam wrapper tinggi 1348px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (68 node)</summary>

```text
M8lNam f v2 · Widget minimal / tertutup  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  H8mcZ7 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    F20YGh f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      G9PAnx i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    o2GG6Z t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  JMSJO f Konten pembaca ayat  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    rzNJE f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      xrEEb t Nama Arab surah isi="الفاتحة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      ocujC t Nama latin surah isi="Al-Fatihah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      D2EKl8 t Meta surah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    M2nU6R f Toolbar pembaca  w=424 gap=12 off align=null justify=null x=28 y=245 pos=null rotation=null
      NfvP4 f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        seoCb i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        P9eQE t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      r4Sn0 f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        fRKk6 i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        Acyem t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    EY5Hx f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      UjLEb t Judul kredit isi="Data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      VLAzC t Keterangan kredit isi="Konten pendek untuk rancangan visual; bukan sumber terjemahan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    LY0U8 f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      C1PAJT f Nomor dan aksi ayat 1  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        K0MxYz t Nomor ayat isi="Ayat 1 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        SGBBR i Bookmark aktif · Ayat 1  w=16 h=16 fill="$fable-accent" icon="bookmark-check"
        h4RtoV r Menu aksi ayat 1  ref="q63oq"
      FaVUl t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      i7AShT t Latin contoh isi="Transliterasi contoh untuk tata letak."  w=424 fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=139 pos=null rotation=null
      u5lSj t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w=440 h=64 fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      oXWNA f Catatan terjemahan · tertutup  w=424 h=44 off align="center" justify="space_between" x=0 y=255 pos=null rotation=null
        U1w4h t Label catatan tertutup isi="Catatan terjemahan"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        DzwyS i Buka catatan  w=18 h=18 fill="$fable-accent" icon="chevron-down"
      we9FO f Catatan terjemahan · terbuka  w=424 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        tM0vi t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        mcQ8T t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      xLGN8 t Tautan tafsir isi="Baca tafsir · Ayat 1 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=315 pos=null rotation=null
      Z6onZ9 f Aksi · Ayat 1  w=424 off align=null justify="end" x=0 y=353 pos=null rotation=null
        eFWHT f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          B9n3QR i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          B5NiA t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    GZ1vn f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      xQLXP f Nomor dan aksi ayat 2  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        b01lXY t Label ayat kedua isi="Ayat 2 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        i1tjd r Menu aksi ayat 2  ref="q63oq"
      y5w8Dk t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      rEh7W t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w=440 h=64 fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      Uy3RD t Link tafsir kedua isi="Baca tafsir · Ayat 2 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=186 pos=null rotation=null
      SDiR2 f Aksi · Ayat 2  w=424 off align=null justify="end" x=0 y=224 pos=null rotation=null
        iY8WC f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          sYyt7 i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          nlDay t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    n4o4k f Paginasi surah  w="fill_container" pad=[18,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      pwDLu t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      L6yGa t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal"
  URQ3w f Dock · Kontrol baca tertutup  w="fill_container" h=84 pad=[16,20,20,20] fill="$fable-bg" align=null justify="center" x=null y=null pos=null rotation=null
    gBNYb r Widget · Kontrol baca  ref="QxvDj"
  fVhXn f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    psgU0 f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      R56q4T i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      b5RnG t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    d1dF3 f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      QLeOW i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      kBIQl t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    mitdN f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      rUI2z i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      ljVSH t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    GJBk5 f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      y0aeHK i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      W93hX t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 25. Layar · Preview · Widget minimal / kontrol terbuka [P:FudL9, Bze5g]

State **Widget minimal / kontrol terbuka**; hierarki utama: Header · App bar ringkas [P:nOPKl] → Konten pembaca ayat [P:JCdiX] → Navigasi bawah [P:xl4Ii]. Badan selebar 480px dalam wrapper tinggi 1415px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (83 node)</summary>

```text
Bze5g f v2 · Widget minimal / kontrol terbuka  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  nOPKl f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    BgZR5 f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      v7yRPJ i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    b2obpI t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  JCdiX f Konten pembaca ayat  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    QR0ew f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      gwkKZ t Nama Arab surah isi="الفاتحة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      n6qRcN t Nama latin surah isi="Al-Fatihah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      xzXEH t Meta surah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    cshyc f Kontrol baca · menu terbuka  w="fill_container" layout="vertical" gap=8 align="end" justify=null x=null y=null pos=null rotation=null
      NwEDl f Kontrol baca · pemicu aktif  h=44 gap=8 pad=[0,16] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        m26EO i Ikon kontrol baca  w=18 h=18 fill="$fable-accent" icon="sliders-horizontal"
        ZxQJm t Label Kontrol baca isi="Kontrol baca"  fill="$fable-accent" font="Inter" size=14 weight="500"
        H6AeY0 i Tutup menu kontrol  w=16 h=16 fill="$fable-accent" icon="chevron-up"
      knL3B f Menu kontrol baca · tiga pilihan  w=224 layout="vertical" pad=6 fill="$fable-bg" radius=12 stroke="$fable-border" strokeWidth=1
        YvQug f Menu · Tampilan  w="fill_container" h=44 gap=12 pad=[0,12] align="center" justify=null x=null y=null pos=null rotation=null
          YY3d2 i Ikon · Tampilan  w=18 h=18 fill="$fable-muted" icon="type"
          mt6TG t Label · Tampilan isi="Tampilan"  fill="$fable-ink" font="Inter" size=14 weight="normal"
        oJ6Ll f Menu · Ke ayat  w="fill_container" h=44 gap=12 pad=[0,12] align="center" justify=null x=null y=null pos=null rotation=null
          rjSWM i Ikon · Ke ayat  w=18 h=18 fill="$fable-muted" icon="list-ordered"
          kpgYE t Label · Ke ayat isi="Ke ayat"  fill="$fable-ink" font="Inter" size=14 weight="normal"
        B8GBj f Menu · Ayat tersimpan  w="fill_container" h=44 gap=12 pad=[0,12] align="center" justify=null x=null y=null pos=null rotation=null
          UZshg i Ikon · Ayat tersimpan  w=18 h=18 fill="$fable-muted" icon="bookmark"
          Aojih t Label · Ayat tersimpan isi="Ayat tersimpan"  fill="$fable-ink" font="Inter" size=14 weight="normal"
    IvThv f Toolbar pembaca  w=424 gap=12 off align=null justify=null x=28 y=245 pos=null rotation=null
      d2QDp f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        ZNWuR i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        htuEn t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      oirCt f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        alBZr i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        mgBDJ t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    fj677 f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      YJwrj t Judul kredit isi="Data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      TQT9v t Keterangan kredit isi="Konten pendek untuk rancangan visual; bukan sumber terjemahan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    TELRl f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      d3kUg9 f Nomor dan aksi ayat 1  w="fill_container" gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        ZN5Qe t Nomor ayat isi="Ayat 1 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        RnNQl i Bookmark aktif · Ayat 1  w=16 h=16 fill="$fable-accent" icon="bookmark-check"
        ecfn0 f Menu aksi ayat 1  w=44 h=44 align="center" justify="center" x=null y=null pos=null rotation=null
          s5579q i Buka aksi · Ayat 1  w=20 h=20 fill="$fable-muted" icon="ellipsis"
      C3iRW t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      PiL8n t Latin contoh isi="Transliterasi contoh untuk tata letak."  w=424 fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=139 pos=null rotation=null
      VkjxM t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      mPKYi f Catatan terjemahan · tertutup  w=424 h=44 off align="center" justify="space_between" x=0 y=255 pos=null rotation=null
        iJ4zI t Label catatan tertutup isi="Catatan terjemahan"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        pTFtS i Buka catatan  w=18 h=18 fill="$fable-accent" icon="chevron-down"
      P9Gj26 f Catatan terjemahan · terbuka  w=424 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        nMip8 t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        yxWOm t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      ecyz7 t Tautan tafsir isi="Baca tafsir · Ayat 1 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=315 pos=null rotation=null
      ANG4g f Aksi · Ayat 1  w=424 off align=null justify="end" x=0 y=353 pos=null rotation=null
        khM4D f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          sBjWR i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          Nq6sL t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    UYJt6 f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      amYqK f Nomor dan aksi ayat 2  w="fill_container" gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        L5vd4J t Label ayat kedua isi="Ayat 2 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        o7nIn f Menu aksi ayat 2  w=44 h=44 align="center" justify="center" x=null y=null pos=null rotation=null
          a1cMB7 i Buka aksi · Ayat 2  w=20 h=20 fill="$fable-muted" icon="ellipsis"
      mvCHM t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      se4nF t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      ztErv t Link tafsir kedua isi="Baca tafsir · Ayat 2 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=186 pos=null rotation=null
      IObs2 f Aksi · Ayat 2  w=424 off align=null justify="end" x=0 y=224 pos=null rotation=null
        JJZJk f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          F8Vlcw i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          A6jlp t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    wAtug f Paginasi surah  w="fill_container" pad=[18,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      PrXpo t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      FXodC t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal"
  xl4Ii f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    s5d1oa f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      CYkw6 i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      a874h t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    TqpYt f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      t57KQb i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      XBxJ2 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    t76gkn f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      M2haL3 i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      GrZBz t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    p202w f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      VIJql i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      dj8IB t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 26. Layar · Preview · Widget minimal / aksi ayat terbuka [P:qCTq7, nzpeb]

State **Widget minimal / aksi ayat terbuka**; hierarki utama: Header · App bar ringkas [P:AX8EZ] → Konten pembaca ayat [P:upCES] → Navigasi bawah [P:V7XT4]. Badan selebar 480px dalam wrapper tinggi 1443px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (85 node)</summary>

```text
nzpeb f v2 · Widget minimal / aksi ayat terbuka  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  AX8EZ f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    IhBju f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      Jhj1p i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    rfhwc t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  upCES f Konten pembaca ayat  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    GMkG8 f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      GzB8k t Nama Arab surah isi="الفاتحة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      Xv3tc t Nama latin surah isi="Al-Fatihah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      L0b12u t Meta surah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    R6yT7 f Kontrol baca · tertutup  w="fill_container" h=64 gap=12 pad=[0,16] fill="$fable-soft" radius=12 align="center" justify=null x=null y=null pos=null rotation=null
      X5dCjF i Ikon kontrol baca  w=20 h=20 fill="$fable-accent" icon="sliders-horizontal"
      rw1bU f Label kontrol global  w="fill_container" layout="vertical" gap=4
        pTbvR t Kontrol baca isi="Kontrol baca"  fill="$fable-ink" font="Inter" size=14 weight="500"
        QFqC3 t Ringkasan aksi global isi="Tampilan · Ke ayat"  fill="$fable-muted" font="Inter" size=12 weight="normal"
      QLIiW i Buka kontrol baca  w=18 h=18 fill="$fable-accent" icon="chevron-down"
    YNf5k f Toolbar pembaca  w=424 gap=12 off align=null justify=null x=28 y=245 pos=null rotation=null
      bs7rX f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        dywZs i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        bxoKZ t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      sxnB0 f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        B5S8p i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        Q9eJg t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    tKCVD f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      c5PAUt t Judul kredit isi="Data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      kejeK t Keterangan kredit isi="Konten pendek untuk rancangan visual; bukan sumber terjemahan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    xJOOb f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      CVfmN f Nomor dan aksi ayat 1  w="fill_container" gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        ykP6y t Nomor ayat isi="Ayat 1 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        lctHn i Bookmark aktif · Ayat 1  w=16 h=16 fill="$fable-accent" icon="bookmark-check"
        zv7V2 f Menu aksi ayat 1 · terbuka  w=44 h=44 fill="$fable-soft" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
          lsf7O i Aksi ayat 1 · menu terbuka  w=20 h=20 fill="$fable-accent" icon="ellipsis"
      i5pQ5e f Aksi kontekstual · melekat pada menu ayat 1  w="fill_container" align=null justify="end" x=null y=null pos=null rotation=null
        v1Ga8D f Menu ayat 1 · sudah dibookmark  w=220 layout="vertical" pad=6 fill="$fable-bg" radius=10 stroke="$fable-border" strokeWidth=1 effect={"type":"shadow","shadowType":"outer","color":"#17171714","offset":{"x":0,"y":4},"blur":16}
          WmdyW f Hapus bookmark · Ayat 1  w="fill_container" h=44 gap=12 pad=[0,12] align="center" justify=null x=null y=null pos=null rotation=null
            eIOBz i Ikon Hapus bookmark  w=18 h=18 fill="$fable-accent" icon="bookmark-minus"
            Z2wVm t Label Hapus bookmark isi="Hapus bookmark"  fill="$fable-ink" font="Inter" size=14 weight="normal"
          GBSKn f Baca tafsir · Ayat 1  w="fill_container" h=44 gap=12 pad=[0,12] align="center" justify=null x=null y=null pos=null rotation=null
            MYDAd i Ikon Baca tafsir  w=18 h=18 fill="$fable-accent" icon="book-open"
            wpy5O t Label Baca tafsir isi="Baca tafsir"  fill="$fable-ink" font="Inter" size=14 weight="normal"
          IqrIZ f Catatan · Ayat 1  w="fill_container" h=44 gap=12 pad=[0,12] align="center" justify=null x=null y=null pos=null rotation=null
            k0r2i8 i Ikon Catatan  w=18 h=18 fill="$fable-accent" icon="notebook-pen"
            pCd1g t Label Catatan isi="Catatan"  fill="$fable-ink" font="Inter" size=14 weight="normal"
      AKGDF t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      e4DAL t Latin contoh isi="Transliterasi contoh untuk tata letak."  w=424 fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=139 pos=null rotation=null
      RRWok t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      eOUxY f Catatan terjemahan · tertutup  w=424 h=44 off align="center" justify="space_between" x=0 y=255 pos=null rotation=null
        yjCg3 t Label catatan tertutup isi="Catatan terjemahan"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        uJECa i Buka catatan  w=18 h=18 fill="$fable-accent" icon="chevron-down"
      m3Pe3q f Catatan terjemahan · terbuka  w=424 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        DBygN t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        ZA1tF t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      nCvRP t Tautan tafsir isi="Baca tafsir · Ayat 1 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=315 pos=null rotation=null
      x0DzG f Aksi · Ayat 1  w=424 off align=null justify="end" x=0 y=353 pos=null rotation=null
        hTCl1 f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          K0di9R i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          mvWes t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    cTg8P f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      RW19o f Nomor dan aksi ayat 2  w="fill_container" gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        r3ai8C t Label ayat kedua isi="Ayat 2 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        K6JAGw f Menu aksi ayat 2  w=44 h=44 align="center" justify="center" x=null y=null pos=null rotation=null
          D2oAjX i Buka aksi · Ayat 2  w=20 h=20 fill="$fable-muted" icon="ellipsis"
      q8xIx7 t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      EQ6LM t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      GpeRS t Link tafsir kedua isi="Baca tafsir · Ayat 2 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=186 pos=null rotation=null
      HMbN8 f Aksi · Ayat 2  w=424 off align=null justify="end" x=0 y=224 pos=null rotation=null
        GR6gJ f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          QWwli i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          nAIP5 t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    NdgJ5 f Paginasi surah  w="fill_container" pad=[18,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      jCEJy t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      KXbtW t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal"
  V7XT4 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    B4I28J f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      cI9Qf i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      IwmdD t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    xb7fK f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      E8h1s i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      Ywlvp t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    fd8mE f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      tc5Zi i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      fCVER t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    n2qVS f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      qyr1a i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      tvySG t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 27. Layar · Revamp · 01 · Bahasa / empat locale [P:aH08Q, hkkTM]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:Z1mzGJ] → Pengaturan bahasa [P:chIZY] → Navigasi bawah [P:dnfzr]. Badan selebar 480px dalam wrapper tinggi 869px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (39 node)</summary>

```text
hkkTM f v2 · 01 · Bahasa / empat locale  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  Z1mzGJ f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    V4c3C t Judul halaman isi="Bahasa"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  chIZY f Pengaturan bahasa  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    CeeNt t Penjelasan bahasa isi="Pilih bahasa tampilan dan terjemahan. Teks Al-Qur’an tetap dalam bahasa Arab."  w="fill_container" fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.6
    ofymJ f Pilih bahasa · Bahasa Indonesia  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      AvshM f Nama dan cakupan · Bahasa Indonesia  w="fill_container" layout="vertical" gap=3
        Td9PY t Nama · Bahasa Indonesia isi="Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        CoBlE t Cakupan · Bahasa Indonesia isi="Terjemahan, tafsir, dan doa"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      Obf1s i Bahasa terpilih  w=24 h=24 fill="$fable-accent" icon="check"
    rNJia f Pilih bahasa · English  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      ATTvt f Nama dan cakupan · English  w="fill_container" layout="vertical" gap=3
        GwPDN t Nama · English isi="English"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        xCcMA t Cakupan · English isi="Terjemahan dan doa"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      T7yyac s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    Ri6cT f Pilih bahasa · 日本語  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      VVk0t f Nama dan cakupan · 日本語  w="fill_container" layout="vertical" gap=3
        Y2m6IC t Nama · 日本語 isi="日本語"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        zHQKU t Cakupan · 日本語 isi="Sebagian terjemahan"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      yO24o s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    O3hL5 f Pilih bahasa · 简体中文  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      Y4NRAA f Nama dan cakupan · 简体中文  w="fill_container" layout="vertical" gap=3
        eulGL t Nama · 简体中文 isi="简体中文"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        QLMGb t Cakupan · 简体中文 isi="Sebagian terjemahan"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      EvCTW s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    Qzcsb t Keterangan ketersediaan contoh isi="Cakupan bahasa pada preview ini menggunakan data contoh."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.6
  dnfzr f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    MGj7M f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      IfaYD i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      i8MLH t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    AETta f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      pYHu3 i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      SsNcR t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    sujt2 f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      aE7IS i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      YMFQg t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    bWlOx f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      WEOGj i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      ELut9 t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 28. Layar · Revamp · 02 · Direktori surah [P:xJuqh, Ze9qs]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:qwJTR] → Konten utama [P:esVtj] → Navigasi bawah [P:C8DIlB]. Badan selebar 480px dalam wrapper tinggi 1458px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (61 node)</summary>

```text
Ze9qs f v2 · 02 · Direktori surah  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  qwJTR f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    GMjUe t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  esVtj f Konten utama  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    C8XUv t Label kategori isi="BACA · PAHAMI · RENUNGKAN"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.5 off align=null justify=null x=20 y=188 pos=null rotation=null
    vSt4K t Pengantar direktori isi="Temukan surah, lalu lanjutkan membaca ayat dan tafsir dalam ritmemu sendiri."  w=388 fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.65 off align=null justify=null x=28 y=95 pos=null rotation=null
    sYAfM f Pencarian surah  w="fill_container" gap=12 pad=[16,14] radius=6 stroke="#8D9993" strokeWidth=1 align="center" justify=null x=null y=null pos=null rotation=null
      VlzRG i Ikon pencarian  w=20 h=20 fill="$fable-muted" icon="search"
      CzslD t Placeholder pencarian surah isi="Cari nama atau nomor surah"  fill="$fable-muted" font="Inter" size=15 weight="normal"
    SmSRT f Lanjutkan membaca · posisi contoh tersimpan  w="fill_container" layout="vertical" gap=8 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1}
      FnTgK t Aksi lanjut membaca isi="Lanjutkan membaca"  fill="$fable-accent" font="Inter" size=15 weight="600"
      CmrPt f Posisi bacaan tersimpan  w="fill_container" align="center" justify="space_between" x=null y=null pos=null rotation=null
        qOt2h t Surah dan posisi terakhir isi="Al-Baqarah · Ayat 21"  fill="$fable-ink" font="Inter" size=17 weight="normal"
        IvrMD i Buka bacaan terakhir  w=20 h=20 fill="$fable-accent" icon="arrow-right"
    gIImk f Buka daftar bookmark  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
      JCKAb i Ikon daftar tersimpan  w=20 h=20 fill="$fable-accent" icon="bookmark"
      NWNOX t Daftar tersimpan isi="Ayat tersimpan · 2"  w="fill_container" fill="$fable-accent" font="Inter" size=15 weight="normal" line=1.5
    Q29FfA f Heading daftar surah  w="fill_container" pad=[24,0,12,0] stroke="$fable-border" strokeWidth={"bottom":1} align=null justify="space_between" x=null y=null pos=null rotation=null
      QLR5m t Label daftar isi="Daftar surah"  fill="$fable-ink" font="Inter" size=17 weight="bold" line=1.5
      LXlAP t Jumlah surah isi="114 surah"  fill="$fable-muted" font="Inter" size=12 weight="normal"
    giTH8 f Surah 1 · Al-Fatihah  w="fill_container" gap=12 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      u0T6yQ f Nomor 1  w=24 h=32 stroke="$fable-border" align="center" justify="center" x=null y=null pos=null rotation=null
        sF1XR t Angka 1 isi="1"  fill="$fable-muted" font="Inter" size=12 weight="normal"
      yGU8p f Nama dan jumlah ayat 1  w="fill_container" layout="vertical" gap=4
        Tp4uW t Nama latin 1 isi="Al-Fatihah"  fill="$fable-ink" font="Inter" size=17 weight="600" line=1.5
        RG4TT t Arti dan jumlah ayat 1 isi="Pembukaan · 7 ayat"  fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      X7kBIb t Nama Arab 1 isi="الفاتحة"  w=92 fill="$fable-ink" font="Noto Naskh Arabic" size=25 weight="normal"
    bCTMa f Surah 2 · Al-Baqarah  w="fill_container" gap=12 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      hQIq1 f Nomor 2  w=24 h=32 stroke="$fable-border" align="center" justify="center" x=null y=null pos=null rotation=null
        lIBsD t Angka 2 isi="2"  fill="$fable-muted" font="Inter" size=12 weight="normal"
      Ed5di f Nama dan jumlah ayat 2  w="fill_container" layout="vertical" gap=4
        afnuT t Nama latin 2 isi="Al-Baqarah"  fill="$fable-ink" font="Inter" size=17 weight="600" line=1.5
        DKdLO t Arti dan jumlah ayat 2 isi="Sapi Betina · 286 ayat"  fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      gopZr t Nama Arab 2 isi="البقرة"  w=92 fill="$fable-ink" font="Noto Naskh Arabic" size=25 weight="normal"
    VJtO3 f Surah 3 · Ali Imran  w="fill_container" gap=12 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      CGCXR f Nomor 3  w=24 h=32 stroke="$fable-border" align="center" justify="center" x=null y=null pos=null rotation=null
        csUJS t Angka 3 isi="3"  fill="$fable-muted" font="Inter" size=12 weight="normal"
      i1xAJ2 f Nama dan jumlah ayat 3  w="fill_container" layout="vertical" gap=4
        jyj7Y t Nama latin 3 isi="Ali Imran"  fill="$fable-ink" font="Inter" size=17 weight="600" line=1.5
        hWws1 t Arti dan jumlah ayat 3 isi="Keluarga Imran · 200 ayat"  fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      bf3ox t Nama Arab 3 isi="آل عمران"  w=92 fill="$fable-ink" font="Noto Naskh Arabic" size=25 weight="normal"
    myVFp f Surah 4 · An-Nisa  w="fill_container" gap=12 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      CaftM f Nomor 4  w=24 h=32 stroke="$fable-border" align="center" justify="center" x=null y=null pos=null rotation=null
        Nydut t Angka 4 isi="4"  fill="$fable-muted" font="Inter" size=12 weight="normal"
      bJnlr f Nama dan jumlah ayat 4  w="fill_container" layout="vertical" gap=4
        HKbkK t Nama latin 4 isi="An-Nisa"  fill="$fable-ink" font="Inter" size=17 weight="600" line=1.5
        MRwvp t Arti dan jumlah ayat 4 isi="Perempuan · 176 ayat"  fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.5
      RS1Ws t Nama Arab 4 isi="النساء"  w=92 fill="$fable-ink" font="Noto Naskh Arabic" size=25 weight="normal"
  C8DIlB f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    Xgy9T f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      UHSS3 i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      r48IY t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    Y3KrT f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      JC461 i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      x2IMgF t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    DaXCo f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      UXTP8 i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      tXNMJ t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    V9KOus f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      tzDgN i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      XvWFF t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 29. Layar · Revamp · 03 · Pembaca ayat / catatan [P:WC6rX, uhxNq]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:s5qPQ] → Pembaca ayat · catatan dan aksi kontekstual [P:oVhKX] → Dock · Kontrol baca tertutup [P:C0qv8m] → Navigasi bawah [P:DiqcS]. Badan selebar 480px dalam wrapper tinggi 1235px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (42 node)</summary>

```text
uhxNq f v2 · 03 · Pembaca ayat / catatan  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  s5qPQ f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    WdG3H f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      oTwq9 i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    AXyVO t Judul halaman isi="Al-Fatihah"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  oVhKX f Pembaca ayat · catatan dan aksi kontekstual  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20] fill="$fable-bg"
    g6yJ5 t Eyebrow · BACA · DATA CONTOH isi="BACA · DATA CONTOH"  w="fill_container" fill="$fable-accent" font="Inter" size=11 weight="600" line=1.4
    LyxMb t Deskripsi · Al-Fatihah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.4
    G6pqKx f Keterangan materi ilustratif  w="fill_container" layout="vertical" gap=8 pad=18 fill="$fable-soft" radius=8
      u0l5py t Materi contoh isi="Teks Arab dan terjemahan di layar ini hanya ilustrasi tata letak, bukan kutipan ayat."  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.4
    nXNO9 f Ayat contoh 1  w="fill_container" layout="vertical" gap=13 pad=[18,0] stroke="$fable-border" strokeWidth={"top":1}
      k4oQVF t Nomor ayat 1 isi="AYAT 1 · DATA CONTOH"  w="fill_container" fill="$fable-accent" font="Inter" size=11 weight="600" line=1.4
      CWEw1 t Teks Arab contoh 1 isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.9
      jg69g t Transliterasi contoh 1 isi="Transliterasi contoh untuk tata letak."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.4
      Hlsnb t Terjemahan contoh 1 isi="Terjemahan contoh; bukan kutipan atau sumber asli."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      t1ZdWZ f Catatan terjemahan · contoh  w="fill_container" layout="vertical" gap=8 pad=18 fill="$fable-soft" radius=8
        GJrmG t Judul catatan isi="Catatan terjemahan · contoh"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="600" line=1.4
        mF6q4 t Isi catatan contoh isi="Penjelasan singkat sebagai contoh tampilan catatan."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="normal" line=1.4
      PcPzc t Tautan tafsir isi="Baca tafsir →"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.4
      Q6Uw38 f Aksi kontekstual ayat 1  w="fill_container" h=56 gap=8 align="center" justify=null x=null y=null pos=null rotation=null
        TnRPy f Tombol · Simpan ayat  w="fill_container" h=48 fill="#E7EEEB" radius=10 align="center" justify="center" x=null y=null pos=null rotation=null
          uD8uO t Aksi ♧ Simpan isi="♧ Simpan"  fill="$fable-accent" font="Inter" size=13 weight="normal" line=1.4
        rh6zV f Tombol · Buka tafsir  w="fill_container" h=48 fill="#E7EEEB" radius=10 align="center" justify="center" x=null y=null pos=null rotation=null
          JfOOt t Aksi ☷ Tafsir isi="☷ Tafsir"  fill="$fable-accent" font="Inter" size=13 weight="normal" line=1.4
        U9iUO f Tombol · Buka catatan  w="fill_container" h=48 fill="#E7EEEB" radius=10 align="center" justify="center" x=null y=null pos=null rotation=null
          AudGI t Aksi ✎ Catatan isi="✎ Catatan"  fill="$fable-accent" font="Inter" size=13 weight="normal" line=1.4
    IAWVM t Halaman selanjutnya isi="Ayat berikutnya →"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.4
  C0qv8m f Dock · Kontrol baca tertutup  w="fill_container" h=84 pad=[16,20,20,20] fill="$fable-bg" align=null justify="center" x=null y=null pos=null rotation=null
    njHAI r Widget · Kontrol baca  ref="QxvDj"
  DiqcS f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    c49N0t f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      KDznn i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      v586Hb t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    EHt3a f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Z8ljUy i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      p3jM0A t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    q9Md9 f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      ue5di i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      NqH7L t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    R7ZYC f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      FStnq i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      vy3je t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 30. Layar · Revamp · 04 · Tafsir Indonesia [P:Ge7mZ, liJLo]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:Lf2Dl] → Tafsir · Bahasa Indonesia [P:S11xPo] → Dock · Kontrol baca tertutup [P:OPrC1] → Navigasi bawah [P:HVzee]. Badan selebar 480px dalam wrapper tinggi 1091px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (33 node)</summary>

```text
liJLo f v2 · 04 · Tafsir Indonesia  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  Lf2Dl f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    d17X8 t Judul halaman isi="Al-Fatihah"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  S11xPo f Tafsir · Bahasa Indonesia  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20] fill="$fable-bg"
    sTqG7 t Kembali ke ayat isi="← Kembali ke surah"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.4
    v0B6b t Eyebrow · TAFSIR · BAHASA INDONESIA isi="TAFSIR · BAHASA INDONESIA"  w="fill_container" fill="$fable-accent" font="Inter" size=11 weight="600" line=1.4
    q2E0H3 t Deskripsi · Al-Fatihah isi="Bacaan dan penjelasan ayat dalam satu alur yang tenang."  w="fill_container" fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.4
    G8sTJX f Sumber ilustratif · bukan referensi  w="fill_container" layout="vertical" gap=8 pad=18 fill="$fable-soft" radius=8
      xwU7s t Label sumber isi="Data contoh untuk rancangan · bukan sumber tafsir"  w="fill_container" fill="$fable-accent" font="Inter" size=13 weight="600" line=1.4
      DVVoK t Penjelas sumber isi="Nama penerbit dan edisi asli akan mengikuti data aplikasi."  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.4
    eHSF5 f Tafsir ayat 1 · contoh  w="fill_container" layout="vertical" gap=12 pad=[18,0] stroke="$fable-border" strokeWidth={"top":1}
      I3n6xc t Penanda ayat isi="AYAT 1 · DATA CONTOH"  w="fill_container" fill="$fable-accent" font="Inter" size=11 weight="600" line=1.4
      y1sxXr t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=36 weight="normal" line=1.9
      mG91Z t Terjemahan contoh isi="Terjemahan contoh; bukan kutipan sumber asli."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      lSQSB f Isi tafsir contoh  w="fill_container" layout="vertical" gap=8 pad=18 fill="$fable-soft" radius=8
        CXXJa t Judul penjelasan isi="Penjelasan ilustratif"  w="fill_container" fill="$fable-ink" font="Inter" size=16 weight="600" line=1.4
        B6tqP t Paragraf contoh isi="Teks ini memperlihatkan keterbacaan tafsir panjang. Isi sebenarnya diambil dari sumber aplikasi."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="normal" line=1.4
      UUGEx t Link balik isi="← Kembali ke ayat 1"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.4
  OPrC1 f Dock · Kontrol baca tertutup  w="fill_container" h=84 pad=[16,20,20,20] fill="$fable-bg" align=null justify="center" x=null y=null pos=null rotation=null
    npx10 r Widget · Kontrol baca  ref="QxvDj"
  HVzee f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    H5wMqT f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      z47D9g i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      m4aUXY t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    Eac26 f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      E1Gqcw i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      nbzd9 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    SrqvT f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      dQ5G1 i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      y4QoM t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    v50E8 f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      rRCdY i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      Ygxj6 t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 31. Layar · Revamp · 05 · Direktori doa [P:fFKAx, B8L6J]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:dZH4i] → Direktori doa · kategori dan pencarian [P:bvIDF] → Navigasi bawah [P:ShHvL]. Badan selebar 480px dalam wrapper tinggi 1143px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (31 node)</summary>

```text
B8L6J f v2 · 05 · Direktori doa  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  dZH4i f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    knvK6 t Judul halaman isi="Doa"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  bvIDF f Direktori doa · kategori dan pencarian  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20] fill="$fable-bg"
    Pnrq5 t Eyebrow · JELAJAHI · DATA CONTOH isi="JELAJAHI · DATA CONTOH"  w="fill_container" fill="$fable-accent" font="Inter" size=11 weight="600" line=1.4
    XIlKG t Deskripsi · Doa isi="Temukan doa berdasarkan kebutuhan dan lanjutkan membaca."  w="fill_container" fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.4
    U1svBR f Cari doa  w="fill_container" h=48 pad=[0,16] radius=12 stroke="$fable-border" strokeWidth=1 align="center" justify=null x=null y=null pos=null rotation=null
      E2HRw t Placeholder cari doa isi="⌕  Cari judul atau tema doa"  w="fill_container" fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.4
    H99Xrq t Kategori doa isi="KATEGORI · CONTOH"  w="fill_container" fill="$fable-accent" font="Inter" size=11 weight="600" line=1.4
    HxFSO f Doa contoh 1  w="fill_container" layout="vertical" gap=4 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1}
      RPoBk t Nama doa 1 isi="Doa contoh pagi   →"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="600" line=1.4
      jSF5f t Kategori 1 isi="Harian · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.4
    izajM f Doa contoh 2  w="fill_container" layout="vertical" gap=4 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1}
      gQeT1 t Nama doa 2 isi="Doa contoh belajar   →"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="600" line=1.4
      gGEXr t Kategori 2 isi="Belajar · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.4
    EJXJJ f Doa contoh 3  w="fill_container" layout="vertical" gap=4 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1}
      r7O4l t Nama doa 3 isi="Doa contoh perjalanan   →"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="600" line=1.4
      ePa4f t Kategori 3 isi="Perjalanan · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.4
  ShHvL f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    ZwPas f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      a1Kq74 i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      Dkfg3 t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    Ynjm3 f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      X82In i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      iMwvb t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    y4ZsO f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      mpBek i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      kwLIQ t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    iBMOG f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Q2pQS i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      jJcr0 t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 32. Layar · Revamp · 06 · Pembaca doa [P:STG9u, XE8hp]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:zRpgl] → Pembaca doa · contoh [P:nYLuA] → Dock · Kontrol baca tertutup [P:D9jDVh] → Navigasi bawah [P:UqoIe]. Badan selebar 480px dalam wrapper tinggi 1127px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (34 node)</summary>

```text
XE8hp f v2 · 06 · Pembaca doa  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  zRpgl f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    KavT4 f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      N5yA2d i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    Uh5fc t Judul halaman isi="Doa contoh pagi"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  nYLuA f Pembaca doa · contoh  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20] fill="$fable-bg"
    wxH3T t Eyebrow · DOA · DATA CONTOH isi="DOA · DATA CONTOH"  w="fill_container" fill="$fable-accent" font="Inter" size=11 weight="600" line=1.4
    QdjZ2 t Deskripsi · Doa contoh pagi isi="Tema harian · teks ilustratif untuk desain"  w="fill_container" fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.4
    muVy1 f Bahasa dan konten doa  w="fill_container" layout="vertical" gap=8 pad=18 fill="$fable-soft" radius=8
      K0JEBW t Label bahasa isi="Bahasa Indonesia · konten contoh"  w="fill_container" fill="$fable-accent" font="Inter" size=13 weight="600" line=1.4
      bsOvR t Penjelasan dummy isi="Teks ini bukan doa asli. Bacaan sebenarnya tetap berasal dari data aplikasi."  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.4
    LW1LF t Teks Arab contoh doa isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.9
    OusUp t Transliterasi contoh doa isi="Transliterasi contoh untuk menguji jarak antarbaris."  w="fill_container" fill="$fable-muted" font="Inter" size=16 weight="normal" line=1.4
    b74Lzd t Arti contoh doa isi="Arti doa contoh untuk memeriksa keterbacaan paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
    ma8bK f Tentang doa · ilustratif  w="fill_container" layout="vertical" gap=8 pad=18 fill="$fable-soft" radius=8
      N126zz t Label konteks isi="TENTANG DOA · CONTOH"  w="fill_container" fill="$fable-accent" font="Inter" size=11 weight="600" line=1.4
      EkPR0 t Keterangan doa isi="Keterangan contoh; bukan penjelasan atau sumber asli."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="normal" line=1.4
    mLWfd f Aksi kembali ke daftar  w="fill_container" h=48 layout="vertical" fill="#E7EEEB" radius=10 align="center" justify="center" x=null y=null pos=null rotation=null
      BaVov t Label · Lihat doa lainnya isi="Lihat doa lainnya"  fill="$fable-accent" font="Inter" size=14 weight="600" line=1.4
  D9jDVh f Dock · Kontrol baca tertutup  w=440 h=84 pad=[16,20,20,20] fill="$fable-bg" off align=null justify="center" x=0 y=824 pos=null rotation=null
    eg6jF r Widget · Kontrol baca  ref="QxvDj"
  UqoIe f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    F5TCd f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      FGBLb i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      Eom0n t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    Bk7CB f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Jydiv i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      tQLEg t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    YCZpc f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      AmVhi i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      oDaGR t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    NuaG4 f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      i7Nrhu i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      T3ZdT9 t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 33. Layar · Revamp · 07 · Tentang dan sumber [P:J18tLR, DsvLY]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:xSsPw] → Konten tentang [P:u9UfGP] → Navigasi bawah [P:irNun]. Badan selebar 480px dalam wrapper tinggi 835px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (44 node)</summary>

```text
DsvLY f v2 · 07 · Tentang dan sumber  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  xSsPw f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    nPjNs t Judul halaman isi="Tentang"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  u9UfGP f Konten tentang  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    XIfaT t Eyebrow tentang isi="MYALQURAN"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.55 off align=null justify=null x=20 y=28 pos=null rotation=null
    dned0 t Deskripsi aplikasi isi="Ruang baca Al-Qur’an, tafsir, dan doa dengan navigasi sederhana dalam beberapa bahasa. Teks ini adalah ringkasan ilustratif untuk desain."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="normal" line=1.55
    N7LaT t Judul ketersediaan isi="Ketersediaan konten"  w=424 fill="$fable-ink" font="Inter" size=19 weight="bold" line=1.55 off align=null justify=null x=20 y=204 pos=null rotation=null
    PrVGd f Bahasa Bahasa Indonesia  w=424 layout="vertical" gap=4 pad=[10,14] fill="$fable-soft" radius=8 off align=null justify=null x=20 y=249 pos=null rotation=null
      h5FDS t Nama Bahasa Indonesia isi="Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="bold" line=1.55
      s1R2W6 t Cakupan Bahasa Indonesia isi="Al-Qur’an · terjemahan · tafsir · doa"  w=396 fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    KOTdk f Bahasa English  w=424 layout="vertical" gap=4 pad=[10,14] fill="$fable-soft" radius=8 off align=null justify=null x=20 y=330 pos=null rotation=null
      L27q0 t Nama English isi="English"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="bold" line=1.55
      e8rMeI t Cakupan English isi="Al-Qur’an · translation · prayers"  w=396 fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    KjPvv f Bahasa 日本語  w=424 layout="vertical" gap=4 pad=[10,14] fill="$fable-soft" radius=8 off align=null justify=null x=20 y=411 pos=null rotation=null
      no66L t Nama 日本語 isi="日本語"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="bold" line=1.55
      d99jVs t Cakupan 日本語 isi="Al-Qur’an · selected translation"  w=396 fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    p8qwEz f Bahasa 简体中文  w=424 layout="vertical" gap=4 pad=[10,14] fill="$fable-soft" radius=8 off align=null justify=null x=20 y=492 pos=null rotation=null
      L2HpQ t Nama 简体中文 isi="简体中文"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="bold" line=1.55
      sfj13 t Cakupan 简体中文 isi="Al-Qur’an · selected translation"  w=396 fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    TlwWF t Judul kredit sumber isi="Sumber bacaan"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="bold" line=1.55
    bPgar f Kredit Terjemahan contoh  w="fill_container" layout="vertical" gap=5 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1}
      lV86z t Nama Terjemahan contoh isi="Terjemahan contoh"  w="fill_container" fill="$fable-ink" font="Inter" size=13 weight="bold" line=1.55
      LxDvL t Deskripsi Terjemahan contoh isi="Contoh sumber · v0 · keterangan edisi"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    wJ3k8 f Kredit Tafsir contoh  w="fill_container" layout="vertical" gap=5 pad=[16,0] stroke="$fable-border" strokeWidth={"bottom":1}
      sTxh2 t Nama Tafsir contoh isi="Tafsir contoh"  w="fill_container" fill="$fable-ink" font="Inter" size=13 weight="bold" line=1.55
      Oqnf7 t Deskripsi Tafsir contoh isi="Contoh sumber · v0 · keterangan edisi"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    PmgVF t Tanggal pembaruan isi="Diperbarui: tanggal contoh"  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55 off align=null justify=null x=20 y=790 pos=null rotation=null
    JKIan f Hak penggunaan  w="fill_container" layout="vertical" gap=5 pad=[8,0]
      ewhtc t Teks hak isi="Hak dan perizinan mengikuti sumber masing-masing."  w="fill_container" fill="$fable-ink" font="Inter" size=13 weight="normal" line=1.55
    Vz2RU t Link offline isi="Kelola bacaan offline →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=20 y=886 pos=null rotation=null
    ubWA8 t Versi preview isi="Versi data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal"
  irNun f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    JvQFa f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      YRmBf i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      jX5il t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    D5W817 f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      TCNgt i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      nzRLu t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    fRIxg f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      U8KaKJ i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      WXnRz t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    mKPhA f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      NhOSZ i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      X2EEoZ t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 34. Layar · Revamp · 08 · Offline / belum tersimpan [P:Ug5Ps, aqgji]

State **default/ilustratif**; hierarki utama: Header · App bar ringkas [P:G54Uh8] → Konten kelola offline [P:M5abJc] → Navigasi bawah [P:uiOXg]. Badan selebar 480px dalam wrapper tinggi 775px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (40 node)</summary>

```text
aqgji f v2 · 08 · Offline / belum tersimpan  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  G54Uh8 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    cXprl t Judul halaman isi="Unduhan"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  M5abJc f Konten kelola offline  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    Wskk0 t Eyebrow bahasa isi="BAHASA INDONESIA"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.5 off align=null justify=null x=20 y=28 pos=null rotation=null
    NvSJQ f Informasi ketersediaan  w=440 layout="vertical" gap=6 pad=[12,16] fill="$fable-soft" stroke="$fable-accent" strokeWidth={"left":3} off align=null justify=null x=20 y=118 pos=null rotation=null
      aijuy t Isi ketersediaan isi="Paket untuk bahasa ini mencakup bacaan yang tersedia di aplikasi."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
    iPOzM f Ringkasan paket  w="fill_container" layout="vertical" gap=10 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1}
      ho0N1 t Status paket utama isi="Bacaan · Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="bold" line=1.5
      zEsyj t Cakupan paket isi="Al-Qur’an, terjemahan, tafsir, dan doa.\nTeks Arab tetap disertakan."  w=396 fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.5
    vGsdT t Estimasi ukuran isi="Perkiraan ukuran: 12,4 MB · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
    XDO5N f Kemajuan unduh  w=440 layout="vertical" gap=9 off align=null justify=null x=0 y=0 pos=null rotation=null
      f5zeQ5 t Label kemajuan isi="Mengunduh: 3 / 10 berkas"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      FW8re f Latar bilah kemajuan  w="fill_container" h=10 fill="$fable-soft" radius=6
        BDMNP f Bagian bilah terisi  w=132 h=10 fill="$fable-accent" radius=6
    Z0K6cj t Status langsung isi="Belum diunduh"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    X5JqJU f Aksi utama  w="fill_container" pad=[16,12] fill="$fable-accent" radius=6 align=null justify="center" x=null y=null pos=null rotation=null
      WCzj6 t Label aksi utama isi="Unduh untuk baca offline"  fill="#ffffff" font="Inter" size=15 weight="bold"
    Lr2ZX t Paket lama isi="Paket lama masih tersimpan hingga pembaruan selesai."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=435 pos=null rotation=null
    MyBiS f Pembaruan aplikasi tersedia  w=440 layout="vertical" gap=10 pad=[15,16] radius=10 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=0 y=0 pos=null rotation=null
      OzMcg t Pesan pembaruan isi="Versi aplikasi baru tersedia."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="bold" line=1.5
      H8kLS f Tombol perbarui aplikasi  pad=[12,16] radius=8 stroke="$fable-accent" strokeWidth=1
        HprVU t Teks perbarui aplikasi isi="Perbarui sekarang"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    FjFFG f Tombol pemasangan  w=440 pad=[13,16] radius=8 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=20 y=435 pos=null rotation=null
      F7nyIP t Teks tombol pemasangan isi="Pasang aplikasi"  fill="$fable-ink" font="Inter" size=15 weight="normal"
    u1mh7t t Bantuan pemasangan isi="Jika pemasangan otomatis tidak tersedia, gunakan menu browser untuk menambahkan aplikasi ke layar utama."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=495 pos=null rotation=null
    ZTrnz t Peringatan penyimpanan isi="Tersimpan di perangkat ini. Browser dapat menghapus unduhan saat ruang penyimpanan terbatas."  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
  uiOXg f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    T9bR24 f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Z7G4W i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      VePcm t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    Kp9YC f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      vvEtP i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      BkwhX t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    m2myO f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      oBqkV i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      Aictm t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    hihBX f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      h1Pcda i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      FxcQZ t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 35. Layar · Revamp · 09 · Offline fallback / 4 bahasa [P:ESdZD, Wu074]

State **fallback/404 (nama saja; render pemilih bahasa)**; hierarki utama: Header · App bar ringkas [P:OcpqP] → Pengaturan bahasa [P:v1rgy] → Navigasi bawah [P:fsOx9]. Badan selebar 480px dalam wrapper tinggi 869px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (39 node)</summary>

```text
Wu074 f v2 · 09 · Offline fallback / 4 bahasa  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  OcpqP f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    g3adf t Judul halaman isi="Bahasa"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  v1rgy f Pengaturan bahasa  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    Kl9w2 t Penjelasan bahasa isi="Pilih bahasa tampilan dan terjemahan. Teks Al-Qur’an tetap dalam bahasa Arab."  w="fill_container" fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.6
    JKhad f Pilih bahasa · Bahasa Indonesia  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      s2X1U f Nama dan cakupan · Bahasa Indonesia  w="fill_container" layout="vertical" gap=3
        Lzmm1 t Nama · Bahasa Indonesia isi="Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        n3SM3 t Cakupan · Bahasa Indonesia isi="Terjemahan, tafsir, dan doa"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      KHUcD i Bahasa terpilih  w=24 h=24 fill="$fable-accent" icon="check"
    rHI4X f Pilih bahasa · English  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      MIuAu f Nama dan cakupan · English  w="fill_container" layout="vertical" gap=3
        jy8PD t Nama · English isi="English"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        eds7v t Cakupan · English isi="Terjemahan dan doa"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      JhRmi s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    qfCSB f Pilih bahasa · 日本語  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      IEJrO f Nama dan cakupan · 日本語  w="fill_container" layout="vertical" gap=3
        T8UkeT t Nama · 日本語 isi="日本語"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        RjdjK t Cakupan · 日本語 isi="Sebagian terjemahan"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      q25AFf s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    t55O6 f Pilih bahasa · 简体中文  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      J8LPca f Nama dan cakupan · 简体中文  w="fill_container" layout="vertical" gap=3
        IUpo4 t Nama · 简体中文 isi="简体中文"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        xiEId t Cakupan · 简体中文 isi="Sebagian terjemahan"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      y1bd3E s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    DmczB t Keterangan ketersediaan contoh isi="Cakupan bahasa pada preview ini menggunakan data contoh."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.6
  fsOx9 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    k7lnU f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      zJIob i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      PU1MG t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    s8NrL f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      pR86I i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      yhezd t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    AcoVl f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      m9aoA i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      btV94 t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    FxgOc f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      AsecX i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      YhbQJ t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 36. Layar · Revamp · 10 · 404 / 4 bahasa [P:wrgLS, uTNMG]

State **fallback/404 (nama saja; render pemilih bahasa)**; hierarki utama: Header · App bar ringkas [P:KqOm2] → Pengaturan bahasa [P:Z3ojC] → Navigasi bawah [P:TU8h8]. Badan selebar 480px dalam wrapper tinggi 869px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (39 node)</summary>

```text
uTNMG f v2 · 10 · 404 / 4 bahasa  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  KqOm2 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    tuzWK t Judul halaman isi="Bahasa"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  Z3ojC f Pengaturan bahasa  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    MzJJg t Penjelasan bahasa isi="Pilih bahasa tampilan dan terjemahan. Teks Al-Qur’an tetap dalam bahasa Arab."  w="fill_container" fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.6
    KVPdX f Pilih bahasa · Bahasa Indonesia  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      YHmfT f Nama dan cakupan · Bahasa Indonesia  w="fill_container" layout="vertical" gap=3
        V4Eji t Nama · Bahasa Indonesia isi="Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        Mxfrt t Cakupan · Bahasa Indonesia isi="Terjemahan, tafsir, dan doa"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      Tx10s i Bahasa terpilih  w=24 h=24 fill="$fable-accent" icon="check"
    ufL0S f Pilih bahasa · English  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      Ylv3b f Nama dan cakupan · English  w="fill_container" layout="vertical" gap=3
        bD9QT t Nama · English isi="English"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        oqwHf t Cakupan · English isi="Terjemahan dan doa"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      G4hsiO s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    EpfL0 f Pilih bahasa · 日本語  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      mF4Dm f Nama dan cakupan · 日本語  w="fill_container" layout="vertical" gap=3
        tfVpQ t Nama · 日本語 isi="日本語"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        y57zC5 t Cakupan · 日本語 isi="Sebagian terjemahan"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      ofSBh s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    HEYBe f Pilih bahasa · 简体中文  w="fill_container" gap=16 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1} align="center" justify=null x=null y=null pos=null rotation=null
      tj2bC f Nama dan cakupan · 简体中文  w="fill_container" layout="vertical" gap=3
        qzQTq t Nama · 简体中文 isi="简体中文"  w="fill_container" fill="$fable-ink" font="Inter" size=17 weight="normal" line=1.6
        H1B3pA t Cakupan · 简体中文 isi="Sebagian terjemahan"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.6
      EzUqU s Pilihan belum dipilih  w=20 h=20 stroke="#8D9993" strokeWidth=1.5
    P6evp0 t Keterangan ketersediaan contoh isi="Cakupan bahasa pada preview ini menggunakan data contoh."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.6
  TU8h8 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    kjU4e f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      R1pd7D i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      NgpfM t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    VNRRl f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      KMPSF i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      sqGbk t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    uRVwE f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      ewt2s i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      XlsOG t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    C9Lpf9 f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      L771As i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      YkWcJ t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 37. Layar · Revamp · 11 · Offline / memeriksa [P:NczY1, W1z9g]

State **memeriksa (nama saja; render default)**; hierarki utama: Header · App bar ringkas [P:tje71] → Konten kelola offline [P:fKpn7] → Navigasi bawah [P:c5b9gf]. Badan selebar 480px dalam wrapper tinggi 775px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (40 node)</summary>

```text
W1z9g f v2 · 11 · Offline / memeriksa  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  tje71 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    R5pyR t Judul halaman isi="Unduhan"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  fKpn7 f Konten kelola offline  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    o0WhB t Eyebrow bahasa isi="BAHASA INDONESIA"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.5 off align=null justify=null x=20 y=28 pos=null rotation=null
    OvT2Q f Informasi ketersediaan  w=440 layout="vertical" gap=6 pad=[12,16] fill="$fable-soft" stroke="$fable-accent" strokeWidth={"left":3} off align=null justify=null x=20 y=118 pos=null rotation=null
      B9VT0 t Isi ketersediaan isi="Paket untuk bahasa ini mencakup bacaan yang tersedia di aplikasi."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
    C4Uuv f Ringkasan paket  w="fill_container" layout="vertical" gap=10 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1}
      IVwQd t Status paket utama isi="Bacaan · Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="bold" line=1.5
      njY6u t Cakupan paket isi="Al-Qur’an, terjemahan, tafsir, dan doa.\nTeks Arab tetap disertakan."  w=396 fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.5
    v3ZIAT t Estimasi ukuran isi="Perkiraan ukuran: 12,4 MB · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
    K3jlCT f Kemajuan unduh  w=440 layout="vertical" gap=9 off align=null justify=null x=0 y=0 pos=null rotation=null
      oBH2i t Label kemajuan isi="Mengunduh: 3 / 10 berkas"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      i9CxsR f Latar bilah kemajuan  w="fill_container" h=10 fill="$fable-soft" radius=6
        KNWsI f Bagian bilah terisi  w=132 h=10 fill="$fable-accent" radius=6
    KCqsJ t Status langsung isi="Belum diunduh"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    fuOJJ f Aksi utama  w="fill_container" pad=[16,12] fill="$fable-accent" radius=6 align=null justify="center" x=null y=null pos=null rotation=null
      gRFIp t Label aksi utama isi="Unduh untuk baca offline"  fill="#ffffff" font="Inter" size=15 weight="bold"
    Hbhhp t Paket lama isi="Paket lama masih tersimpan hingga pembaruan selesai."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=435 pos=null rotation=null
    zdiZr f Pembaruan aplikasi tersedia  w=440 layout="vertical" gap=10 pad=[15,16] radius=10 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=0 y=0 pos=null rotation=null
      Vnedb t Pesan pembaruan isi="Versi aplikasi baru tersedia."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="bold" line=1.5
      F92Ke f Tombol perbarui aplikasi  pad=[12,16] radius=8 stroke="$fable-accent" strokeWidth=1
        T8oQ0 t Teks perbarui aplikasi isi="Perbarui sekarang"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    u2poW f Tombol pemasangan  w=440 pad=[13,16] radius=8 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=20 y=435 pos=null rotation=null
      nujrb t Teks tombol pemasangan isi="Pasang aplikasi"  fill="$fable-ink" font="Inter" size=15 weight="normal"
    Bzz43 t Bantuan pemasangan isi="Jika pemasangan otomatis tidak tersedia, gunakan menu browser untuk menambahkan aplikasi ke layar utama."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=495 pos=null rotation=null
    R8RRI t Peringatan penyimpanan isi="Tersimpan di perangkat ini. Browser dapat menghapus unduhan saat ruang penyimpanan terbatas."  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
  c5b9gf f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    MtVTR f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      G1fNvA i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      yx20s t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    BTN96 f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      dj6FX i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      DYIan t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    H0nGP f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      EpNsK i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      N0kGX t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    tXms4 f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      FAlo0 i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      WcbA8 t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 38. Layar · Revamp · 12 · Offline / mengunduh [P:sqaoO, U0m8D]

State **mengunduh (nama saja; render default)**; hierarki utama: Header · App bar ringkas [P:SSrrN] → Konten kelola offline [P:IR9CM] → Navigasi bawah [P:EuDWR]. Badan selebar 480px dalam wrapper tinggi 775px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (40 node)</summary>

```text
U0m8D f v2 · 12 · Offline / mengunduh  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  SSrrN f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    za4OZ t Judul halaman isi="Unduhan"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  IR9CM f Konten kelola offline  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    A1X82 t Eyebrow bahasa isi="BAHASA INDONESIA"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.5 off align=null justify=null x=20 y=28 pos=null rotation=null
    itp5V f Informasi ketersediaan  w=440 layout="vertical" gap=6 pad=[12,16] fill="$fable-soft" stroke="$fable-accent" strokeWidth={"left":3} off align=null justify=null x=20 y=118 pos=null rotation=null
      VejZb t Isi ketersediaan isi="Paket untuk bahasa ini mencakup bacaan yang tersedia di aplikasi."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
    N4r7TJ f Ringkasan paket  w="fill_container" layout="vertical" gap=10 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1}
      yEz5M t Status paket utama isi="Bacaan · Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="bold" line=1.5
      V6WoRi t Cakupan paket isi="Al-Qur’an, terjemahan, tafsir, dan doa.\nTeks Arab tetap disertakan."  w=396 fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.5
    XN3Pj t Estimasi ukuran isi="Perkiraan ukuran: 12,4 MB · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
    xIv4L f Kemajuan unduh  w=440 layout="vertical" gap=9 off align=null justify=null x=0 y=0 pos=null rotation=null
      A22EeS t Label kemajuan isi="Mengunduh: 3 / 10 berkas"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      LSSJc f Latar bilah kemajuan  w="fill_container" h=10 fill="$fable-soft" radius=6
        sCtqy f Bagian bilah terisi  w=132 h=10 fill="$fable-accent" radius=6
    w1LHhC t Status langsung isi="Belum diunduh"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    yUsWZ f Aksi utama  w="fill_container" pad=[16,12] fill="$fable-accent" radius=6 align=null justify="center" x=null y=null pos=null rotation=null
      blufg t Label aksi utama isi="Unduh untuk baca offline"  fill="#ffffff" font="Inter" size=15 weight="bold"
    vaA0a t Paket lama isi="Paket lama masih tersimpan hingga pembaruan selesai."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=435 pos=null rotation=null
    CnY7e f Pembaruan aplikasi tersedia  w=440 layout="vertical" gap=10 pad=[15,16] radius=10 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=0 y=0 pos=null rotation=null
      a7iQkM t Pesan pembaruan isi="Versi aplikasi baru tersedia."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="bold" line=1.5
      A9b2zw f Tombol perbarui aplikasi  pad=[12,16] radius=8 stroke="$fable-accent" strokeWidth=1
        v5C0H9 t Teks perbarui aplikasi isi="Perbarui sekarang"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    UwsHj f Tombol pemasangan  w=440 pad=[13,16] radius=8 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=20 y=435 pos=null rotation=null
      PQZUJ t Teks tombol pemasangan isi="Pasang aplikasi"  fill="$fable-ink" font="Inter" size=15 weight="normal"
    ZNBMA t Bantuan pemasangan isi="Jika pemasangan otomatis tidak tersedia, gunakan menu browser untuk menambahkan aplikasi ke layar utama."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=495 pos=null rotation=null
    L50tU4 t Peringatan penyimpanan isi="Tersimpan di perangkat ini. Browser dapat menghapus unduhan saat ruang penyimpanan terbatas."  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
  EuDWR f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    wGBDv f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      GWQIU i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      igxZF t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    jRuWL f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      q9DQoB i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      a4eSH t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    hQKyi f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      dB2UX i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      TsrZ5 t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    qYyTp f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      r2Urf i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      o1bBj t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 39. Layar · Revamp · 13 · Offline / pembaruan [P:TP9YA, mIKHC]

State **pembaruan (nama saja; render default)**; hierarki utama: Header · App bar ringkas [P:eOI88] → Konten kelola offline [P:XVALt] → Navigasi bawah [P:F8WH3]. Badan selebar 480px dalam wrapper tinggi 775px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (40 node)</summary>

```text
mIKHC f v2 · 13 · Offline / pembaruan  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  eOI88 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    lvp17 t Judul halaman isi="Unduhan"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  XVALt f Konten kelola offline  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    W9Mqj t Eyebrow bahasa isi="BAHASA INDONESIA"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.5 off align=null justify=null x=20 y=28 pos=null rotation=null
    sXvSM f Informasi ketersediaan  w=440 layout="vertical" gap=6 pad=[12,16] fill="$fable-soft" stroke="$fable-accent" strokeWidth={"left":3} off align=null justify=null x=20 y=118 pos=null rotation=null
      qkGHV t Isi ketersediaan isi="Paket untuk bahasa ini mencakup bacaan yang tersedia di aplikasi."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
    v3ODOn f Ringkasan paket  w="fill_container" layout="vertical" gap=10 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1}
      ZT4xF t Status paket utama isi="Bacaan · Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="bold" line=1.5
      QOWWO t Cakupan paket isi="Al-Qur’an, terjemahan, tafsir, dan doa.\nTeks Arab tetap disertakan."  w=396 fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.5
    jo7nH t Estimasi ukuran isi="Perkiraan ukuran: 12,4 MB · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
    LlceQ f Kemajuan unduh  w=440 layout="vertical" gap=9 off align=null justify=null x=0 y=0 pos=null rotation=null
      Csn8l t Label kemajuan isi="Mengunduh: 3 / 10 berkas"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      a863G f Latar bilah kemajuan  w="fill_container" h=10 fill="$fable-soft" radius=6
        AFOuQ f Bagian bilah terisi  w=132 h=10 fill="$fable-accent" radius=6
    f5vqYU t Status langsung isi="Belum diunduh"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    ab8Vz f Aksi utama  w="fill_container" pad=[16,12] fill="$fable-accent" radius=6 align=null justify="center" x=null y=null pos=null rotation=null
      EOAh8 t Label aksi utama isi="Unduh untuk baca offline"  fill="#ffffff" font="Inter" size=15 weight="bold"
    XuCxo t Paket lama isi="Paket lama masih tersimpan hingga pembaruan selesai."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=435 pos=null rotation=null
    pl3FJ f Pembaruan aplikasi tersedia  w=440 layout="vertical" gap=10 pad=[15,16] radius=10 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=0 y=0 pos=null rotation=null
      eiApQ t Pesan pembaruan isi="Versi aplikasi baru tersedia."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="bold" line=1.5
      K1thZy f Tombol perbarui aplikasi  pad=[12,16] radius=8 stroke="$fable-accent" strokeWidth=1
        d7shcn t Teks perbarui aplikasi isi="Perbarui sekarang"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    nZ3WR f Tombol pemasangan  w=440 pad=[13,16] radius=8 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=20 y=435 pos=null rotation=null
      PAoWK t Teks tombol pemasangan isi="Pasang aplikasi"  fill="$fable-ink" font="Inter" size=15 weight="normal"
    rKObp t Bantuan pemasangan isi="Jika pemasangan otomatis tidak tersedia, gunakan menu browser untuk menambahkan aplikasi ke layar utama."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=495 pos=null rotation=null
    zG7KR t Peringatan penyimpanan isi="Tersimpan di perangkat ini. Browser dapat menghapus unduhan saat ruang penyimpanan terbatas."  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
  F8WH3 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    x09i2 f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      hPUeN i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      Jvdkr t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    Dt26G f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      VtRKg i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      LQHu7 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    zmk3O f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      iLFwi i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      VuesZ t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    x1GwD f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      z94HbV i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      VWxsS t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 40. Layar · Revamp · 14 · Offline / gagal [P:JHqTd, J8I27]

State **gagal (nama saja; render default)**; hierarki utama: Header · App bar ringkas [P:r1TLN] → Konten kelola offline [P:PqmB8] → Navigasi bawah [P:Ep4Ak]. Badan selebar 480px dalam wrapper tinggi 775px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (40 node)</summary>

```text
J8I27 f v2 · 14 · Offline / gagal  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  r1TLN f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    Z2I1E3 t Judul halaman isi="Unduhan"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  PqmB8 f Konten kelola offline  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    hXgKF t Eyebrow bahasa isi="BAHASA INDONESIA"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.5 off align=null justify=null x=20 y=28 pos=null rotation=null
    nQ5so f Informasi ketersediaan  w=440 layout="vertical" gap=6 pad=[12,16] fill="$fable-soft" stroke="$fable-accent" strokeWidth={"left":3} off align=null justify=null x=20 y=118 pos=null rotation=null
      TH7aH t Isi ketersediaan isi="Paket untuk bahasa ini mencakup bacaan yang tersedia di aplikasi."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
    bxu5T f Ringkasan paket  w="fill_container" layout="vertical" gap=10 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1}
      Waxvk t Status paket utama isi="Bacaan · Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="bold" line=1.5
      Aghkf t Cakupan paket isi="Al-Qur’an, terjemahan, tafsir, dan doa.\nTeks Arab tetap disertakan."  w=396 fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.5
    kmcHA t Estimasi ukuran isi="Perkiraan ukuran: 12,4 MB · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
    SsCzR f Kemajuan unduh  w=440 layout="vertical" gap=9 off align=null justify=null x=0 y=0 pos=null rotation=null
      ZG7Nw t Label kemajuan isi="Mengunduh: 3 / 10 berkas"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      tZgA3 f Latar bilah kemajuan  w="fill_container" h=10 fill="$fable-soft" radius=6
        pfYmV f Bagian bilah terisi  w=132 h=10 fill="$fable-accent" radius=6
    t20iz t Status langsung isi="Belum diunduh"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    xjuIP f Aksi utama  w="fill_container" pad=[16,12] fill="$fable-accent" radius=6 align=null justify="center" x=null y=null pos=null rotation=null
      M9tnTJ t Label aksi utama isi="Unduh untuk baca offline"  fill="#ffffff" font="Inter" size=15 weight="bold"
    t3c8wk t Paket lama isi="Paket lama masih tersimpan hingga pembaruan selesai."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=435 pos=null rotation=null
    J3W4H f Pembaruan aplikasi tersedia  w=440 layout="vertical" gap=10 pad=[15,16] radius=10 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=0 y=0 pos=null rotation=null
      o8s1IQ t Pesan pembaruan isi="Versi aplikasi baru tersedia."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="bold" line=1.5
      OClZI f Tombol perbarui aplikasi  pad=[12,16] radius=8 stroke="$fable-accent" strokeWidth=1
        hZWkA t Teks perbarui aplikasi isi="Perbarui sekarang"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    jdQna f Tombol pemasangan  w=440 pad=[13,16] radius=8 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=20 y=435 pos=null rotation=null
      V0e4H t Teks tombol pemasangan isi="Pasang aplikasi"  fill="$fable-ink" font="Inter" size=15 weight="normal"
    Af29I t Bantuan pemasangan isi="Jika pemasangan otomatis tidak tersedia, gunakan menu browser untuk menambahkan aplikasi ke layar utama."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=495 pos=null rotation=null
    qsgHW t Peringatan penyimpanan isi="Tersimpan di perangkat ini. Browser dapat menghapus unduhan saat ruang penyimpanan terbatas."  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
  Ep4Ak f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    s1Vi7 f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      HNImP i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      PzBvc t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    TFyqt f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      DY1de i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      QS6P8 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    g9GVe f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      c3EIF i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      ZOd2W t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    w24z6U f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      qoGwy i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      GtvRS t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 41. Layar · Revamp · 15 · Offline / tidak didukung [P:l0HQMT, w4VxEA]

State **tidak didukung (nama saja; render default)**; hierarki utama: Header · App bar ringkas [P:MqpXv] → Konten kelola offline [P:ccuCW] → Navigasi bawah [P:X3Hse8]. Badan selebar 480px dalam wrapper tinggi 775px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (40 node)</summary>

```text
w4VxEA f v2 · 15 · Offline / tidak didukung  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  MqpXv f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    l1ePFN t Judul halaman isi="Unduhan"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  ccuCW f Konten kelola offline  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    xCVw9 t Eyebrow bahasa isi="BAHASA INDONESIA"  w=424 fill="$fable-accent" font="Inter" size=11 weight="bold" line=1.5 off align=null justify=null x=20 y=28 pos=null rotation=null
    Y257Ny f Informasi ketersediaan  w=440 layout="vertical" gap=6 pad=[12,16] fill="$fable-soft" stroke="$fable-accent" strokeWidth={"left":3} off align=null justify=null x=20 y=118 pos=null rotation=null
      cWR5C t Isi ketersediaan isi="Paket untuk bahasa ini mencakup bacaan yang tersedia di aplikasi."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
    FlgPl f Ringkasan paket  w="fill_container" layout="vertical" gap=10 pad=[20,0] stroke="$fable-border" strokeWidth={"bottom":1}
      wiEYB t Status paket utama isi="Bacaan · Bahasa Indonesia"  w="fill_container" fill="$fable-ink" font="Inter" size=18 weight="bold" line=1.5
      qk8F3 t Cakupan paket isi="Al-Qur’an, terjemahan, tafsir, dan doa.\nTeks Arab tetap disertakan."  w=396 fill="$fable-muted" font="Inter" size=15 weight="normal" line=1.5
    LWUw8 t Estimasi ukuran isi="Perkiraan ukuran: 12,4 MB · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
    s6Jdue f Kemajuan unduh  w=440 layout="vertical" gap=9 off align=null justify=null x=0 y=0 pos=null rotation=null
      QWNwn t Label kemajuan isi="Mengunduh: 3 / 10 berkas"  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
      BF4jG f Latar bilah kemajuan  w="fill_container" h=10 fill="$fable-soft" radius=6
        y55i8j f Bagian bilah terisi  w=132 h=10 fill="$fable-accent" radius=6
    r7E5P8 t Status langsung isi="Belum diunduh"  w="fill_container" fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.5
    PlxZe f Aksi utama  w="fill_container" pad=[16,12] fill="$fable-accent" radius=6 align=null justify="center" x=null y=null pos=null rotation=null
      MvKUb t Label aksi utama isi="Unduh untuk baca offline"  fill="#ffffff" font="Inter" size=15 weight="bold"
    E74Mc t Paket lama isi="Paket lama masih tersimpan hingga pembaruan selesai."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=435 pos=null rotation=null
    GMJHN f Pembaruan aplikasi tersedia  w=440 layout="vertical" gap=10 pad=[15,16] radius=10 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=0 y=0 pos=null rotation=null
      Hsh3e t Pesan pembaruan isi="Versi aplikasi baru tersedia."  w="fill_container" fill="$fable-ink" font="Inter" size=15 weight="bold" line=1.5
      ozUJY f Tombol perbarui aplikasi  pad=[12,16] radius=8 stroke="$fable-accent" strokeWidth=1
        Q8cUo2 t Teks perbarui aplikasi isi="Perbarui sekarang"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    Cacr6 f Tombol pemasangan  w=440 pad=[13,16] radius=8 stroke="$fable-border" strokeWidth=1 off align=null justify=null x=20 y=435 pos=null rotation=null
      zQ1FR t Teks tombol pemasangan isi="Pasang aplikasi"  fill="$fable-ink" font="Inter" size=15 weight="normal"
    F738u t Bantuan pemasangan isi="Jika pemasangan otomatis tidak tersedia, gunakan menu browser untuk menambahkan aplikasi ke layar utama."  w=424 fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5 off align=null justify=null x=20 y=495 pos=null rotation=null
    ZYtOM t Peringatan penyimpanan isi="Tersimpan di perangkat ini. Browser dapat menghapus unduhan saat ruang penyimpanan terbatas."  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.5
  X3Hse8 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    gTKO1 f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Z7gIkD i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      FNC4r t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    qFB6o f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      s8qu5 i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      irnbf t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    QJETI f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      McYrG i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      zplI2 t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    sAA5X f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      BoR4Q i Ikon settings  w=20 h=20 fill="$fable-accent" icon="settings"
      Ty3E1 t Pengaturan isi="Pengaturan"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
```

</details>

### 42. Layar · Revamp · 16 · Pembaca / 125% [P:k2vri, UDaFp]

State **Pembaca / 125%**; hierarki utama: Header · App bar ringkas [P:Ls92F] → Konten pembaca ayat · acuan widget minimal [P:vEcxj] → Dock · Kontrol baca tertutup [P:PGYZM] → Navigasi bawah [P:IbnPO]. Badan selebar 480px dalam wrapper tinggi 1313px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (68 node)</summary>

```text
UDaFp f v2 · 16 · Pembaca / 125%  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  Ls92F f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    uB3Sh f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      U6ahhs i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    zufWr t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  vEcxj f Konten pembaca ayat · acuan widget minimal  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    Jm3HE f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      K68YJ t Nama Arab surah isi="الفاتحة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      Ms8il t Nama latin surah isi="Al-Fatihah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      oqJYe t Meta surah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    ascKu f Toolbar pembaca  w=424 gap=12 off align=null justify=null x=28 y=245 pos=null rotation=null
      pJa9U f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        pkxDa i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        cKGQj t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      w4MnaX f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        xqaH8 i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        iL1gh t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    zXuh3 f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      D30l1H t Judul kredit isi="Data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      YyN4C t Keterangan kredit isi="Konten pendek untuk rancangan visual; bukan sumber terjemahan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    O1yV5p f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      ttKBb f Nomor dan aksi ayat 1  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        qd4gl t Nomor ayat isi="Ayat 1 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        OQJDj i Bookmark aktif · Ayat 1  w=16 h=16 fill="$fable-accent" icon="bookmark-check"
        ujl2S r Menu aksi ayat 1  ref="q63oq"
      xEMqO t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      ONtbA t Latin contoh isi="Transliterasi contoh untuk tata letak."  w=424 fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=139 pos=null rotation=null
      yxFWR t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      EzVAl f Catatan terjemahan · tertutup  w=424 h=44 off align="center" justify="space_between" x=0 y=255 pos=null rotation=null
        STZ6d t Label catatan tertutup isi="Catatan terjemahan"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        DwBFe i Buka catatan  w=18 h=18 fill="$fable-accent" icon="chevron-down"
      DqnCg f Catatan terjemahan · terbuka  w=424 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        S6tcll t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        TDdvU t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      H23nm t Tautan tafsir isi="Baca tafsir · Ayat 1 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=315 pos=null rotation=null
      J5prEA f Aksi · Ayat 1  w=424 off align=null justify="end" x=0 y=353 pos=null rotation=null
        tvENt f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          n9OYyl i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          V5Di8 t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    b1fCNW f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      RiPLx f Nomor dan aksi ayat 2  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        yC0Tn t Label ayat kedua isi="Ayat 2 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        R5qlg r Menu aksi ayat 2  ref="q63oq"
      qBu1R t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      bsLV9 t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      kTmXH t Link tafsir kedua isi="Baca tafsir · Ayat 2 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=186 pos=null rotation=null
      nR2Hr f Aksi · Ayat 2  w=424 off align=null justify="end" x=0 y=224 pos=null rotation=null
        EpHT8 f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          wviTz i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          ctaE4 t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    mwhY5 f Paginasi surah  w="fill_container" pad=[18,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      y8avJ t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      QbBAn t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal"
  PGYZM f Dock · Kontrol baca tertutup  w="fill_container" h=84 pad=[16,20,20,20] fill="$fable-bg" align=null justify="center" x=null y=null pos=null rotation=null
    pnJsO r Widget · Kontrol baca  ref="QxvDj"
  IbnPO f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    PpsJ2 f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      s060a i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      YH6z5 t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    hhPob f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      XJRog i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      Q8HJ0 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    XkijV f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      rmrWF i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      a9gVG t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    XG8Tc f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      mzkRZ i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      omtIK t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 43. Layar · Revamp · 17 · Pembaca / 150% [P:euycD, DodUu]

State **Pembaca / 150%**; hierarki utama: Header · App bar ringkas [P:hCbbC] → Konten pembaca ayat · acuan widget minimal [P:vYMek] → Dock · Kontrol baca tertutup [P:H8yuTC] → Navigasi bawah [P:ZDX4s]. Badan selebar 480px dalam wrapper tinggi 1313px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (68 node)</summary>

```text
DodUu f v2 · 17 · Pembaca / 150%  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  hCbbC f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    D2a4T f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      zI9jX i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    BydM9 t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  vYMek f Konten pembaca ayat · acuan widget minimal  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    jwbB6 f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      L5x1Qz t Nama Arab surah isi="الفاتحة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      spm2T t Nama latin surah isi="Al-Fatihah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      rq0A4 t Meta surah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    nabb0 f Toolbar pembaca  w=424 gap=12 off align=null justify=null x=28 y=245 pos=null rotation=null
      j3Tlv f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        HBh3p i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        j4BRf t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      X8X7Yd f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        B36AmW i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        b6Mv7E t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    rhlcB f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      B9rIx9 t Judul kredit isi="Data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      bF48c t Keterangan kredit isi="Konten pendek untuk rancangan visual; bukan sumber terjemahan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    KONb5 f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      udK2o f Nomor dan aksi ayat 1  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        yaY9a t Nomor ayat isi="Ayat 1 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        AS8U7 i Bookmark aktif · Ayat 1  w=16 h=16 fill="$fable-accent" icon="bookmark-check"
        dUdom r Menu aksi ayat 1  ref="q63oq"
      Mxjrm t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      Y9zeU t Latin contoh isi="Transliterasi contoh untuk tata letak."  w=424 fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=139 pos=null rotation=null
      qIDp2 t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      I58njs f Catatan terjemahan · tertutup  w=424 h=44 off align="center" justify="space_between" x=0 y=255 pos=null rotation=null
        gPglu t Label catatan tertutup isi="Catatan terjemahan"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        D890hr i Buka catatan  w=18 h=18 fill="$fable-accent" icon="chevron-down"
      PPXTt f Catatan terjemahan · terbuka  w=424 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        hVCCn t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        bWYA3 t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      nscpJ t Tautan tafsir isi="Baca tafsir · Ayat 1 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=315 pos=null rotation=null
      HgnI0 f Aksi · Ayat 1  w=424 off align=null justify="end" x=0 y=353 pos=null rotation=null
        i6RCB4 f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          Mxr4o i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          mmEHE t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    M5BuYN f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      Ygcky f Nomor dan aksi ayat 2  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        BWPhE t Label ayat kedua isi="Ayat 2 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        Kf18M r Menu aksi ayat 2  ref="q63oq"
      e6y8f t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      H7RUT2 t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      TnBRc t Link tafsir kedua isi="Baca tafsir · Ayat 2 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=186 pos=null rotation=null
      FY721 f Aksi · Ayat 2  w=424 off align=null justify="end" x=0 y=224 pos=null rotation=null
        sgznP f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          JY4jb i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          U6E9C t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    B7Yv5 f Paginasi surah  w="fill_container" pad=[18,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      NLRyH t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      tu1EN t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal"
  H8yuTC f Dock · Kontrol baca tertutup  w="fill_container" h=84 pad=[16,20,20,20] fill="$fable-bg" align=null justify="center" x=null y=null pos=null rotation=null
    Wo5FW r Widget · Kontrol baca  ref="QxvDj"
  ZDX4s f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    Z2V5HV f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      J2ytwx i Ikon house  w=20 h=20 fill="$fable-muted" icon="house"
      m5gF47 t Beranda isi="Beranda"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    lnz27 f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      gly5q i Ikon book-open  w=20 h=20 fill="$fable-accent" icon="book-open"
      Z3QmLC t Al-Qur’an isi="Al-Qur’an"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    mRV6m f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      Ikz5H i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      GArI1 t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    WVQ1m f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      SKwqL i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      Pr0gQ t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 44. Layar · Revamp · 18 · 日本語 / terjemahan tidak tersedia [P:XU3M0, JIWyb]

State **日本語 / terjemahan tidak tersedia**; hierarki utama: Header · App bar ringkas [P:b7kX3] → Konten pembaca ayat · acuan widget minimal [P:U7Swg] → Dock · Kontrol baca tertutup [P:vfjJR] → Navigasi bawah [P:V3m18]. Badan selebar 480px dalam wrapper tinggi 1313px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (68 node)</summary>

```text
JIWyb f v2 · 18 · 日本語 / terjemahan tidak tersedia  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  b7kX3 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    A5ZMK5 f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      KSd06 i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    j6Fke t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  U7Swg f Konten pembaca ayat · acuan widget minimal  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    QP9hP f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      WdjeD t Nama Arab surah isi="الفاتحة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      ut7at t Nama latin surah isi="Al-Fatihah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      wGNU8 t Meta surah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    OV8Zv f Toolbar pembaca  w=424 gap=12 off align=null justify=null x=28 y=245 pos=null rotation=null
      Qi8Ib f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        QdmEf i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        H81cSk t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      a4LVX f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        W6tfwt i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        zZtZ6 t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    R2BZto f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      GIvIq t Judul kredit isi="Data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      qXhvG t Keterangan kredit isi="Konten pendek untuk rancangan visual; bukan sumber terjemahan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    prb3S f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      U5opp f Nomor dan aksi ayat 1  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        NASjo t Nomor ayat isi="Ayat 1 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        UgHlG i Bookmark aktif · Ayat 1  w=16 h=16 fill="$fable-accent" icon="bookmark-check"
        gfZC2 r Menu aksi ayat 1  ref="q63oq"
      Z5sGzd t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      hDoeF t Latin contoh isi="Transliterasi contoh untuk tata letak."  w=424 fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=139 pos=null rotation=null
      V3OLDC t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      RaHQx f Catatan terjemahan · tertutup  w=424 h=44 off align="center" justify="space_between" x=0 y=255 pos=null rotation=null
        m5f1d t Label catatan tertutup isi="Catatan terjemahan"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        u3ZxJ i Buka catatan  w=18 h=18 fill="$fable-accent" icon="chevron-down"
      P5IBCv f Catatan terjemahan · terbuka  w=424 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        Umemh t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        mOdq8 t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      t1SvfV t Tautan tafsir isi="Baca tafsir · Ayat 1 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=315 pos=null rotation=null
      IU1EG f Aksi · Ayat 1  w=424 off align=null justify="end" x=0 y=353 pos=null rotation=null
        sQuGV f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          QE57d i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          NFkl9 t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    ThmXf f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      PDulB f Nomor dan aksi ayat 2  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        bdjNE t Label ayat kedua isi="Ayat 2 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        tvOq0 r Menu aksi ayat 2  ref="q63oq"
      R0Pdbt t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      xwwfq t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      VkLkY t Link tafsir kedua isi="Baca tafsir · Ayat 2 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=186 pos=null rotation=null
      Diacn f Aksi · Ayat 2  w=424 off align=null justify="end" x=0 y=224 pos=null rotation=null
        SSE8g f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          f0D0DJ i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          mY1qr t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    oct8D f Paginasi surah  w="fill_container" pad=[18,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      UgTbF t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      C1HNM t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal"
  vfjJR f Dock · Kontrol baca tertutup  w="fill_container" h=84 pad=[16,20,20,20] fill="$fable-bg" align=null justify="center" x=null y=null pos=null rotation=null
    a4FwY r Widget · Kontrol baca  ref="QxvDj"
  V3m18 f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    b6d6H f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      PssIM i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      m2uCU3 t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    VQIrB f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      B9UiFq i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      NOTpP t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    fsa9F f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      ffWYk i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      J1SPlS t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    WeJ9m f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      fsxjb i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      j7epF t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

### 45. Layar · Revamp · 19 · English / commentary unavailable [P:YmYLw, Syacp]

State **English / commentary unavailable**; hierarki utama: Header · App bar ringkas [P:l5WbB6] → Konten pembaca ayat · acuan widget minimal [P:dbJ85] → Dock · Kontrol baca tertutup [P:t6GJG] → Navigasi bawah [P:RPDoM]. Badan selebar 480px dalam wrapper tinggi 1313px. Node `off` tidak terlihat di render tetapi salinannya tetap didokumentasikan sebagai bahan varian, bukan copy tampak.

<details><summary>Seluruh lapisan, copy verbatim, ikon, gaya, dan instance (68 node)</summary>

```text
Syacp f v2 · 19 · English / commentary unavailable  w=480 layout="vertical" fill="$fable-bg" align=null justify=null x=0 y=46 pos="absolute" rotation=null
  l5WbB6 f Header · App bar ringkas  w="fill_container" h=72 gap=12 pad=[12,20] fill="$fable-accent" align="center" justify=null x=null y=null pos=null rotation=null
    i7LhD f Kembali ke daftar · kontekstual  w=44 h=44 fill="#FFFFFF18" radius=22 align="center" justify="center" x=null y=null pos=null rotation=null
      xE0m6 i Kembali ke daftar  w=22 h=22 fill="#FFFFFF" icon="arrow-left"
    t6WUo8 t Judul halaman isi="Al-Qur’an"  w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
  dbJ85 f Konten pembaca ayat · acuan widget minimal  w="fill_container" layout="vertical" gap=14 pad=[20,20,24,20]
    cwAl0 f Judul surah  w="fill_container" layout="vertical" gap=4 pad=[12,0,8,0] align="center" justify=null x=null y=null pos=null rotation=null
      V64jN t Nama Arab surah isi="الفاتحة"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=42 weight="normal" line=1.6
      v1AAY t Nama latin surah isi="Al-Fatihah"  w="fill_container" fill="$fable-ink" font="Andada Pro" size=32 weight="500" line=1.25
      hIFZK t Meta surah isi="Pembukaan · 7 ayat · Mekah"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
    ujdSp f Toolbar pembaca  w=424 gap=12 off align=null justify=null x=28 y=245 pos=null rotation=null
      evzez f Tampilan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        G1aRG i Ikon · Tampilan  w=18 h=18 fill="$fable-accent" icon="type"
        S2rBz t Label · Tampilan isi="Tampilan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      ccZ4y f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
        bzkz4 i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark"
        M6DYE t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    v2X0p f Kredit ilustrasi  w="fill_container" layout="vertical" gap=4 pad=[12,0] stroke="$fable-border"
      l2qxXp t Judul kredit isi="Data contoh · v0"  w="fill_container" fill="$fable-muted" font="Inter" size=13 weight="normal" line=1.55
      K6CTJ t Keterangan kredit isi="Konten pendek untuk rancangan visual; bukan sumber terjemahan."  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="normal" line=1.55
    IWANn f Ayat 1 · contoh tampilan  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      B31UKV f Nomor dan aksi ayat 1  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        D8a61 t Nomor ayat isi="Ayat 1 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        v2sJqg i Bookmark aktif · Ayat 1  w=16 h=16 fill="$fable-accent" icon="bookmark-check"
        nZza6 r Menu aksi ayat 1  ref="q63oq"
      W08bsn t Arab contoh isi="نص عربي تجريبي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      e4jFz t Latin contoh isi="Transliterasi contoh untuk tata letak."  w=424 fill="$fable-muted" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=139 pos=null rotation=null
      qzMk3 t Terjemahan contoh isi="Terjemahan contoh untuk melihat keterbacaan teks."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      MPp5X f Catatan terjemahan · tertutup  w=424 h=44 off align="center" justify="space_between" x=0 y=255 pos=null rotation=null
        kdxFa t Label catatan tertutup isi="Catatan terjemahan"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.5
        r0H7D i Buka catatan  w=18 h=18 fill="$fable-accent" icon="chevron-down"
      AuwAY f Catatan terjemahan · terbuka  w=424 layout="vertical" gap=10 pad=18 fill="$fable-soft" off align=null justify=null x=0 y=255 pos=null rotation=null
        cLacE t Ringkasan catatan isi="Catatan terjemahan  ⌄"  w="fill_container" fill="$fable-accent" font="Inter" size=14 weight="bold" line=1.55
        eJsLx t Isi catatan isi="Penjelasan singkat contoh saat panel catatan dibuka."  w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.55
      Fqe4z t Tautan tafsir isi="Baca tafsir · Ayat 1 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=315 pos=null rotation=null
      Hgaqc f Aksi · Ayat 1  w=424 off align=null justify="end" x=0 y=353 pos=null rotation=null
        vaVtL f Tersimpan  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          L6d1Fh i Ikon · Tersimpan  w=18 h=18 fill="$fable-accent" icon="bookmark-check"
          AOFJ6 t Label · Tersimpan isi="Tersimpan"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    u73no f Ayat 2 · contoh ringkas  w="fill_container" layout="vertical" gap=16 pad=[20,0,28,0] stroke="$fable-border" strokeWidth={"bottom":1}
      O3vdiY f Nomor dan aksi ayat 2  w="fill_container" h=44 gap=12 align="center" justify=null x=null y=null pos=null rotation=null
        QLBgq t Label ayat kedua isi="Ayat 2 · data contoh"  w="fill_container" fill="$fable-muted" font="Inter" size=12 weight="500" line=1.55
        SOGJd r Menu aksi ayat 2  ref="q63oq"
      m7JNA t Arab ayat kedua isi="مثال للنص العربي"  w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=38 weight="normal" line=1.8
      XCZaN t Terjemahan ayat kedua isi="Kalimat kedua sebagai contoh panjang paragraf."  w="fill_container" fill="$fable-ink" font="Andada Pro" size=19 weight="normal" line=1.65
      txLY5 t Link tafsir kedua isi="Baca tafsir · Ayat 2 →"  w=424 fill="$fable-accent" font="Inter" size=14 weight="normal" line=1.55 off align=null justify=null x=0 y=186 pos=null rotation=null
      UNZlU f Aksi · Ayat 2  w=424 off align=null justify="end" x=0 y=224 pos=null rotation=null
        gYykR f Simpan ayat  h=44 gap=8 pad=[0,12] fill="$fable-soft" radius=22 align="center" justify=null x=null y=null pos=null rotation=null
          yExAX i Ikon · Simpan ayat  w=18 h=18 fill="$fable-accent" icon="bookmark"
          tDAWL t Label · Simpan ayat isi="Simpan ayat"  fill="$fable-accent" font="Inter" size=14 weight="normal"
    HXCdV f Paginasi surah  w="fill_container" pad=[18,0,0,0] align=null justify="space_between" x=null y=null pos=null rotation=null
      hmnP6 t Surah sebelumnya isi="← Sebelumnya"  fill="$fable-accent" font="Inter" size=14 weight="normal"
      z0I3q t Surah berikutnya isi="Berikutnya →"  fill="$fable-accent" font="Inter" size=14 weight="normal"
  t6GJG f Dock · Kontrol baca tertutup  w="fill_container" h=84 pad=[16,20,20,20] fill="$fable-bg" align=null justify="center" x=null y=null pos=null rotation=null
    u9B1Gq r Widget · Kontrol baca  ref="QxvDj"
  RPDoM f Navigasi bawah  w="fill_container" pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1} align=null justify="space_between" x=null y=null pos=null rotation=null
    OYr2e f Menu Beranda  w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      WS4p5 i Ikon house  w=20 h=20 fill="$fable-accent" icon="house"
      QNfpM t Beranda isi="Beranda"  fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
    GweWm f Menu Al-Qur’an  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      r7QHVc i Ikon book-open  w=20 h=20 fill="$fable-muted" icon="book-open"
      P9byl5 t Al-Qur’an isi="Al-Qur’an"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    iNHoR f Menu Tersimpan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      i26GDu i Ikon bookmark  w=20 h=20 fill="$fable-muted" icon="bookmark"
      F6TYG9 t Tersimpan isi="Tersimpan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    d4OL4x f Menu Pengaturan  w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8 align="center" justify=null x=null y=null pos=null rotation=null
      wpBlV i Ikon settings  w=20 h=20 fill="$fable-muted" icon="settings"
      gmkah t Pengaturan isi="Pengaturan"  fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
```

</details>

## Bagian Design System: hierarki dan salinan

Bagian `F2BrjS` punya `ZhRP6`, `MAF4b`, warna `q9s95` (`fufaU`/`Ysojc`), tipografi `aaV5l`, ukuran `OXk0o`, library `wcCtJ/Us3lr`, aksi `CQwrb`, aturan `CncsQ`. Semua node dan copy bagian ini tersaji secara literal di bawah, termasuk warna swatch. [P:F2BrjS]

<details><summary>Seluruh lapisan Design System (`110` node)</summary>

```text
F2BrjS frame Design System · v2 w=1440 layout="vertical" gap=32 pad=40 fill="#F2F5F3"
  ZhRP6 text MyAlQuran · Design System v2 isi="MyAlQuran · Design System v2" w="fill_container" fill="$fable-accent" font="Inter" size=36 weight="normal" line=1.5
  MAF4b text Acuan: v2. Header ringkas, navigasi bawah, tanpa audio. Ilustrasi hanya pada Home. isi="Acuan: v2. Header ringkas, navigasi bawah, tanpa audio. Ilustrasi hanya pada Home." w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
  q9s95 frame Warna · Light & Dark w="fill_container" layout="vertical" gap=16 pad=24 fill="#FFFFFF" radius=8
    uoPgt text Warna · Light & Dark isi="Warna · Light & Dark" w="fill_container" fill="$fable-ink" font="Inter" size=24 weight="normal" line=1.5
    y81BG text Light isi="Light" w="fill_container" fill="$fable-ink" font="Inter" size=16 weight="normal" line=1.5
    fufaU frame Palette Light w="fill_container" gap=16
      hmIWm frame Background Light w="fill_container" layout="vertical" gap=8
        kpVfh rectangle Swatch #FFFFFF w="fill_container" h=64 fill="#FFFFFF" radius=6 stroke="$fable-border" strokeWidth=1
        ZHqHB text Background
#FFFFFF isi="Background\n#FFFFFF" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
      jAgEE frame Ink Light w="fill_container" layout="vertical" gap=8
        T2b6F rectangle Swatch #171717 w="fill_container" h=64 fill="#171717" radius=6 stroke="$fable-border" strokeWidth=1
        NDb89 text Ink
#171717 isi="Ink\n#171717" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
      cjJe6 frame Muted Light w="fill_container" layout="vertical" gap=8
        ezlrt rectangle Swatch #626966 w="fill_container" h=64 fill="#626966" radius=6 stroke="$fable-border" strokeWidth=1
        RamJ9 text Muted
#626966 isi="Muted\n#626966" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
      IoQyF frame Primary Light w="fill_container" layout="vertical" gap=8
        i7wZz rectangle Swatch #1E5546 w="fill_container" h=64 fill="#1E5546" radius=6 stroke="$fable-border" strokeWidth=1
        Q0io6M text Primary
#1E5546 isi="Primary\n#1E5546" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
      Qun99 frame Soft Light w="fill_container" layout="vertical" gap=8
        N5QXzw rectangle Swatch #E7EEEB w="fill_container" h=64 fill="#E7EEEB" radius=6 stroke="$fable-border" strokeWidth=1
        e02t5Q text Soft
#E7EEEB isi="Soft\n#E7EEEB" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
      BYxSi frame Border Light w="fill_container" layout="vertical" gap=8
        fXn7d rectangle Swatch #E3E7E5 w="fill_container" h=64 fill="#E3E7E5" radius=6 stroke="$fable-border" strokeWidth=1
        b1uBlv text Border
#E3E7E5 isi="Border\n#E3E7E5" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
    YkFOi text Dark isi="Dark" w="fill_container" fill="$fable-ink" font="Inter" size=16 weight="normal" line=1.5
    Ysojc frame Palette Dark w="fill_container" gap=16
      naZih frame Background Dark w="fill_container" layout="vertical" gap=8
        e0eWY4 rectangle Swatch #171C19 w="fill_container" h=64 fill="#171C19" radius=6 stroke="$fable-border" strokeWidth=1
        PyDu6 text Background
#171C19 isi="Background\n#171C19" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
      GEzId frame Ink Dark w="fill_container" layout="vertical" gap=8
        LAmpA rectangle Swatch #EDF2EF w="fill_container" h=64 fill="#EDF2EF" radius=6 stroke="$fable-border" strokeWidth=1
        rCctT text Ink
#EDF2EF isi="Ink\n#EDF2EF" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
      etU75 frame Muted Dark w="fill_container" layout="vertical" gap=8
        Y0tDfq rectangle Swatch #AAB8B0 w="fill_container" h=64 fill="#AAB8B0" radius=6 stroke="$fable-border" strokeWidth=1
        tjzvb text Muted
#AAB8B0 isi="Muted\n#AAB8B0" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
      YU2wu frame Primary Dark w="fill_container" layout="vertical" gap=8
        LvllN rectangle Swatch #9BD1B9 w="fill_container" h=64 fill="#9BD1B9" radius=6 stroke="$fable-border" strokeWidth=1
        p05dn text Primary
#9BD1B9 isi="Primary\n#9BD1B9" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
      aMOKv frame Soft Dark w="fill_container" layout="vertical" gap=8
        z7MB0 rectangle Swatch #283E34 w="fill_container" h=64 fill="#283E34" radius=6 stroke="$fable-border" strokeWidth=1
        aOs3V text Soft
#283E34 isi="Soft\n#283E34" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
      V5GkxD frame Border Dark w="fill_container" layout="vertical" gap=8
        geHBN rectangle Swatch #3A4A41 w="fill_container" h=64 fill="#3A4A41" radius=6 stroke="$fable-border" strokeWidth=1
        Ww1VJ text Border
#3A4A41 isi="Border\n#3A4A41" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
  aaV5l frame Tipografi w="fill_container" layout="vertical" gap=16 pad=24 fill="#FFFFFF" radius=8
    M3hr5 text Tipografi isi="Tipografi" w="fill_container" fill="$fable-ink" font="Inter" size=24 weight="normal" line=1.5
    AR6FK text Spec Inter 20 isi="Judul halaman · 20 / 600" w="fill_container" fill="$fable-ink" font="Inter" size=20 weight="600" line=1.5
    ATzXT text Spec Inter 14 isi="UI & isi · 14 / 1.5" w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
    Uq2pa text Spec Inter 12 isi="Keterangan · 12 / 1.5" w="fill_container" fill="$fable-ink" font="Inter" size=12 weight="normal" line=1.5
    K6LoC text Spec Andada Pro 28 isi="Judul Home & bacaan · 28" w="fill_container" fill="$fable-ink" font="Andada Pro" size=28 weight="normal" line=1.5
    D1UlNo text Spec Noto Naskh Arabic 36 isi="سُبْحَانَ اللّٰهِ" w="fill_container" fill="$fable-ink" font="Noto Naskh Arabic" size=36 weight="normal" line=1.8
  OXk0o frame Layout & ukuran w="fill_container" layout="vertical" gap=16 pad=24 fill="#FFFFFF" radius=8
    kaRgB text Layout & ukuran isi="Layout & ukuran" w="fill_container" fill="$fable-ink" font="Inter" size=24 weight="normal" line=1.5
    XMLiD text Spacing: 4 · 8 · 12 · 16 · 20 · 24 · 32
Padding layar: 20 · Gap konten: 14 · Header: 72
Target sentuh minimum: 44 × 44 · Ikon: 20–22
Radius: 6 input/button · 8 panel · 22 pill
Home: menu 4 kolom · footer 4 tujuan · bacaan tanpa dekorasi. isi="Spacing: 4 · 8 · 12 · 16 · 20 · 24 · 32\nPadding layar: 20 · Gap konten: 14 · Header: 72\nTarget sentuh minimum: 44 × 44 · Ikon: 20–22\nRadius: 6 input/button · 8 panel · 22 pill\nHome: menu 4 kolom · footer 4 tujuan · bacaan tanpa dekorasi." w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
  wcCtJ frame Komponen reusable w="fill_container" layout="vertical" gap=16 pad=24 fill="#FFFFFF" radius=8
    jult1 text Komponen reusable isi="Komponen reusable" w="fill_container" fill="$fable-ink" font="Inter" size=24 weight="normal" line=1.5
    Us3lr frame Library controls w="fill_container" layout="vertical" gap=20
      QxvDj frame v2 · Kontrol baca h=48 gap=10 pad=[0,20] fill="$fable-soft" radius="$preview-radius-pill" stroke="$fable-border" strokeWidth=1
        cVoYt icon Ikon kontrol baca w=20 h=20 fill="$fable-accent" icon="sliders-horizontal"
        M5xq5 text Label kontrol baca isi="Kontrol baca" fill="$fable-accent" font="Inter" size=14 weight="normal"
        E4RmB4 icon Buka menu kontrol w=16 h=16 fill="$fable-accent" icon="chevron-up"
      q63oq frame v2 · Aksi ayat w=44 h=44
        gLILa icon Buka aksi · Ayat 1 w=20 h=20 fill="$fable-muted" icon="ellipsis"
      kr1cB frame v2 · Pilihan tema w=360 h=44 radius=24 stroke="$fable-border" strokeWidth=1
        rYUiJ frame Tema · Terang w="fill_container" h="fill_container" gap=8 fill="$fable-soft" radius=24
          xnXxi icon Ikon tema · Terang w=18 h=18 fill="$fable-accent" icon="sun"
          MZfKl text Label tema · Terang isi="Terang" fill="$fable-accent" font="Inter" size=14 weight="normal"
        ZnLhm frame Tema · Gelap w="fill_container" h="fill_container" gap=8 fill="$fable-bg" radius=24
          n5DIx icon Ikon tema · Gelap w=18 h=18 fill="$fable-ink" icon="moon"
          n2o2l text Label tema · Gelap isi="Gelap" fill="$fable-ink" font="Inter" size=14 weight="normal"
      c5QJ3 frame v2 · Ukuran bacaan w=440 layout="vertical" gap=9 pad=16 radius=12 stroke="$fable-border" strokeWidth=1
        t5iVsd text Label kontrol isi="Ukuran bacaan" fill="$fable-muted" font="Inter" size=13 weight="normal"
        bmInL frame Pilihan ukuran gap=8
          C0I2gN frame Pilihan 100% pad=[8,16] fill="$fable-accent" radius=8 stroke="$fable-accent" strokeWidth=1
            WxlO3 text Teks 100% isi="100%" fill="#ffffff" font="Inter" size=13 weight="normal"
          SgeGc frame Pilihan 125% pad=[8,16] fill="$fable-bg" radius=8 stroke="$fable-border" strokeWidth=1
            c2nfUm text Teks 125% isi="125%" fill="$ink" font="Inter" size=13 weight="normal"
          MTl5L frame Pilihan 150% pad=[8,16] fill="$fable-bg" radius=8 stroke="$fable-border" strokeWidth=1
            k6YoD text Teks 150% isi="150%" fill="$ink" font="Inter" size=13 weight="normal"
  CQwrb frame Navigation & actions w="fill_container" layout="vertical" gap=16 pad=24 fill="#FFFFFF" radius=8
    vkcdm text Navigation & actions isi="Navigation & actions" w="fill_container" fill="$fable-ink" font="Inter" size=24 weight="normal" line=1.5
    o8mYia frame v2 · App bar w=480 h=72 gap=12 pad=[12,20] fill="$fable-accent"
      GM4kf text Judul halaman isi="Jadwal sholat" w="fill_container" fill="#FFFFFF" font="Inter" size=20 weight="600" line=1.25
    c4K2mR frame v2 · Bottom navigation w=480 pad=[12,20] fill="$fable-bg" stroke="$fable-border" strokeWidth={"top":1}
      X7qVke frame Menu Beranda w="fill_container" layout="vertical" gap=6 pad=[6,0] fill="$fable-soft" radius=8
        n2d58 icon Ikon house w=20 h=20 fill="$fable-accent" icon="house"
        TCsKk text Beranda isi="Beranda" fill="$fable-accent" font="Inter" size=11 weight="600" line=1.5
      GYcvF frame Menu Al-Qur’an w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8
        fMQiN icon Ikon book-open w=20 h=20 fill="$fable-muted" icon="book-open"
        KlNWU text Al-Qur’an isi="Al-Qur’an" fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
      d9t70 frame Menu Tersimpan w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8
        Ltlz6 icon Ikon bookmark w=20 h=20 fill="$fable-muted" icon="bookmark"
        eMZwm text Tersimpan isi="Tersimpan" fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
      Q0b5kd frame Menu Pengaturan w="fill_container" layout="vertical" gap=6 pad=[6,0] radius=8
        PFxnw icon Ikon settings w=20 h=20 fill="$fable-muted" icon="settings"
        HyHEZ text Pengaturan isi="Pengaturan" fill="$fable-muted" font="Inter" size=11 weight="normal" line=1.5
    rgCVv frame v2 · Primary compact w=112 h=44 layout="vertical" gap=4 pad=[0,12] fill="$fable-accent" radius=22
      oROjz text Tambah hitungan isi="Tambah +1" fill="#FFFFFF" font="Inter" size=14 weight="600" line=1.5
    tKKAC frame v2 · Previous w=180 h=44 gap=8 pad=[0,12] radius=22 stroke="$fable-border" strokeWidth=1
      hGsZJ icon Ayat sebelumnya w=16 h=16 fill="$fable-accent" icon="chevron-left"
      obICR text Aksi · Ayat sebelumnya isi="Sebelumnya · 1–20" fill="$fable-accent" font="Inter" size=12 weight="normal"
    BMSWw frame v2 · Next w=180 h=44 gap=8 pad=[0,12] radius=22 stroke="$fable-border" strokeWidth=1
      po3m3 text Aksi · Ayat berikutnya isi="Berikutnya · 41–60" fill="$fable-accent" font="Inter" size=12 weight="normal"
      nx5Sv icon Ayat berikutnya w=16 h=16 fill="$fable-accent" icon="chevron-right"
    wEegf frame v2 · Verse input w=280 h=48 pad=[0,14] fill="#FFFFFF" radius=8 stroke="$fable-accent" strokeWidth=2
      oTngb text Nomor ayat valid isi="21" w="fill_container" fill="$fable-ink" font="Inter" size=16 weight="normal" line=1.5
  CncsQ frame Règles & states w="fill_container" layout="vertical" gap=16 pad=24 fill="#FFFFFF" radius=8
    eYtuM text Règles & states isi="Règles & states" w="fill_container" fill="$fable-ink" font="Inter" size=24 weight="normal" line=1.5
    i3Vgv text Navigation: footer = Beranda / Al-Qur’an / Tersimpan / Pengaturan. Retour hanya konteks daftar.
States: default, active, disabled, loading, empty, error, permission denied.
Validasi ayat: angka bulat dalam rentang surah; kosong tidak bisa dibuka.
Jadwal / lokasi / progres contoh bukan data live. Warna tajwid selalu dilengkapi nama hukum.
Tidak ada audio, footer teks lama, menu hamburger, atau asset tambahan Ramadan/tasbih/PWA. isi="Navigation: footer = Beranda / Al-Qur’an / Tersimpan / Pengaturan. Retour hanya konteks daftar.\nStates: default, active, disabled, loading, empty, error, permission denied.\nValidasi ayat: angka bulat dalam rentang surah; kosong tidak bisa dibuka.\nJadwal / lokasi / progres contoh bukan data live. Warna tajwid selalu dilengkapi nama hukum.\nTidak ada audio, footer teks lama, menu hamburger, atau asset tambahan Ramadan/tasbih/PWA." w="fill_container" fill="$fable-ink" font="Inter" size=14 weight="normal" line=1.5
```

</details>

## Yang tidak dapat dipulihkan dari MCP

Seluruh **45 wrapper/badan** dan **seluruh Design System v2** berhasil dipulihkan secara struktural lewat MCP; **tidak ada layar terdaftar yang gagal diambil**. Namun tidak ada timestamp revisi tiap node, histori edit, link prototipe/href, state machine runtime, aturan persis pemilihan lokasi/kalender/hasil pencarian, respons jaringan, ukuran breakpoint desktop lain, spesifikasi gesture/animasi, gambar sumber/lisensi asset AI, teks sebenarnya untuk status offline bernama tetapi identik, empty search/bookmark, notifikasi ditolak setelah permission, dan fallback 404/503 yang benar-benar digambar. **[INFERENCE]** Semua tujuan URL dan alur dari nama tombol perlu dikonfirmasi saat implementasi; default source of truth konten agama tetap SQLite, bukan teks ilustratif di canvas. Akses Pencil MCP adalah sumber primer; arsip sesi plaintext **tidak digunakan**. [P:i3Vgv, Emgiq, uTNMG, Wu074, W1z9g, U0m8D, J8I27; APP:src/lib/content.ts:108-124]
