# Audit aset desain Pencil

**Putusan: desain saat ini membutuhkan 1 aset gambar berbeda (`images/generated-5.png`), dan aplikasi sudah mengimplementasikan 1/1 sebagai `src/assets/illustrations/generated-5.webp` di Home.** Delapan gambar `generated*.png` lain serta satu CleanShot berada di folder dokumen, tetapi **tidak ditemukan oleh pencarian seluruh node kanvas**; keberadaan berkas saja bukan bukti pemakaian desain. Audit ini tidak menilai hak redistribusi ilustrasi AI.

## Metode dan cakupan

Sumber otoritatif ialah `Get` dari Pencil MCP pada dokumen aktif `myalquran.pen` (berkas terenkripsi **tidak** dibaca langsung). `get_app_state` mencatat dua root `sbjR9` (v2), `F2BrjS` (Design System · v2), serta komponen reusable. Query seluruh dokumen berikut, **tanpa filter root, visibility, atau enabled**, menemukan **1** node gambar di antara **2.743** node setelah instance diuraikan; traversal tanpa penguraian instance memeriksa **2.685** node dan juga menemukan **1**. Visitor ikut memeriksa `fill`, `stroke`, `effect` (tunggal/array), URL shader, dan properti non-`children` berisi `images/`, `references/`, `generated-`, `CleanShot`, `"type":"image"`, atau `"type":"shader"`; pemeriksaan kedua menghasilkan node yang sama saja. `GetVariables()` tidak memuat tipe image atau nilai URL aset (variabelnya warna, font-string, angka). Perbedaan 58 node antarmode adalah ekspansi instance, bukan gambar yang terlewat.

```js
const hits = Get((n, c) => {
  const refs = ['fill', 'stroke', 'effect'].flatMap(property =>
    [n[property]].flat().filter(x => x && typeof x === 'object' &&
      (x.type === 'image' || typeof x.url === 'string'))
      .map(x => ({ property, type: x.type, url: x.url, mode: x.mode,
        enabled: x.enabled, opacity: x.opacity, transform: x.transform })));
  if (refs.length) return { id: n.id, name: n.name, refs,
    width: n.width, height: n.height, radius: n.cornerRadius,
    enabled: n.enabled, visible: n.visible,
    ancestors: (() => { const a = []; for (let p = c.parentCtx; p; p = p.parentCtx)
      a.push({ id: p.node.id, name: p.node.name, enabled: p.node.enabled,
        visible: p.node.visible }); return a; })() };
}, { resolveInstances: true });
Print(hits.length, hits); // 1: pevfi, fill image, images/generated-5.png
Print(Get(() => 1, { resolveInstances: true }).length); // 2743
Print(GetVariables()); // tidak ada variabel image/URL aset
```

Pemeriksaan lintas properti tambahan yang dijalankan: `JSON.stringify(n, (k,v) => k === 'children' ? undefined : v)` pada **setiap** node dengan dan tanpa `resolveInstances`, lalu cari literal `images/`, `references/`, `generated-`, `CleanShot`, `"type":"image"`, `"type":"shader"`: **hanya `pevfi`** pada kedua mode. `Get` mengunjungi node `enabled:false` juga; query terpisah menemukan banyak node disabled tetapi tidak satu pun bergambar. Skema Pencil mengenal `enabled` pada node/fill, bukan properti `visible`; tidak adanya `visible` dicatat apa adanya, bukan ditafsirkan sebagai filter tersembunyi.

## Gambar pada kanvas dan klasifikasi folder

| Status | Berkas dalam `images/` | Node dan layar | Geometri / status |
|---|---|---|---|
| **REFERENCED — terlihat** | `generated-5.png` | `pevfi` · “Asset AI · Quran dan taman miniatur”; Home `Z7H9PL` · “v2 · Ruang ibadahmu”, di bawah `Yz0C4`, root `sbjR9` | Rectangle **170×150**, radius **12**, image fill `mode:"cover"`, fill `enabled:true`; node dan semua ancestor tanpa `enabled:false`/`visible:false` (properti tidak ada). |
| **UNREFERENCED menurut query seluruh kanvas** | `generated.png`, `generated-1.png`, `generated-2.png`, `generated-3.png`, `generated-4.png`, `generated-6.png`, `generated-7.png`, `generated-8.png` | Tidak ditemukan oleh kedua visitor di atas | Delapan berkas ada pada direktori, bukan pada node/fill/URL yang dikembalikan Pencil. |
| **UNREFERENCED menurut query seluruh kanvas** | `CleanShot 2026-10-11 at 21.57.54@2x.png` | Tidak ditemukan oleh kedua visitor | Berkas ada pada direktori; tidak ada frame pemakai yang ditemukan. |
| **REFERENCED BUT HIDDEN/DISABLED** | — | Tidak ada | Tidak ada image fill pada node atau ancestor disabled. |

Tidak ada frame lain yang membutuhkan gambar tambahan menurut snapshot dokumen ini. `docs/design/v2-spec.md:118` juga mencatat `pevfi` sebagai satu-satunya `"type":"image"` dalam spesifikasi hasil pemulihan; sumber utama putusan tetap query Pencil di atas.

| Berkas pada `references/` | Status Pencil | Tafsir yang didukung bukti |
|---|---|---|
| `fable.jpg` | Tidak ditemukan oleh query seluruh node/URL | Referensi suasana yang tersimpan di folder, bukan aset yang ditempatkan pada kanvas teramati. |
| `speechify.jpg` | Tidak ditemukan oleh query seluruh node/URL | Sama; jangan masukkan ke produk dari folder saja. |
| `apple-books.jpg` | Tidak ditemukan oleh query seluruh node/URL | Sama; jangan masukkan ke produk dari folder saja. |

## Aset yang ada pada repo

`grep` seluruh `src/` untuk `generated-5|\.webp|noto-naskh-arabic|andada-pro|inter\.ttf|/icons/|icon-192|icon-512|orange-cat|/packages/|assets/fonts|assets/illustrations|public/`, lalu query `HomeIllustration|orange-cat|\.svg|\.png|\.webp`, mencatat rujukan berikut. Pencarian lintas repo `icon-512|icon-192|icon\.svg|orange-cat|packages/|inter-OFL|andada-pro-OFL|noto-naskh-arabic-OFL` memastikan ikon 512 dipakai konfigurasi walaupun tidak disebut dalam `src/`.

| Berkas/direktori | Rujukan aktual | Status |
|---|---|---|
| `src/assets/illustrations/generated-5.webp` | `src/components/HomeIllustration.astro:2,7-10`; dipanggil `src/layouts/BaseLayout.astro:6,80` pada Home | Dipakai; dimensi HTML 170×150, `object-fit:cover`, radius 12. |
| `src/assets/fonts/inter.ttf`, `andada-pro.ttf`, `noto-naskh-arabic.ttf` | `src/styles/global.css:3-5` melalui `@font-face` | Dipakai. |
| `src/assets/fonts/inter-OFL.txt`, `andada-pro-OFL.txt`, `noto-naskh-arabic-OFL.txt` | **0 hasil untuk nama lisensi ini dalam `src/`** | Tidak diimpor runtime; berkas lisensi, **bukan** kandidat hapus otomatis (kewajiban distribusi perlu dinilai). |
| `public/icons/icon.svg` | `src/layouts/BaseLayout.astro:44` (`rel=icon`) | Dipakai. |
| `public/icons/icon-192.png` | `src/layouts/BaseLayout.astro:45` (`apple-touch-icon`); `astro.config.mjs:27` manifest PWA | Dipakai. |
| `public/icons/icon-512.png` | **0 hasil nama berkas dalam `src/`**; `astro.config.mjs:27` manifest PWA | Dipakai secara tidak langsung; **bukan dead weight**. |
| `public/icons/orange-cat.svg` | **0 hasil `orange-cat` dalam seluruh `src/` dan pencarian lintas repo di atas** | Kandidat aset tak terpakai; `astro.config.mjs:28` mengizinkan precache `icons/*.{png,svg}` sehingga tetap dapat terbawa build meski tidak dirender. |
| `public/packages/` | Direktori **kosong pada saat audit**; `src/sw.ts:47,124` meminta/mengecualikan `/packages/`; `scripts/offline-packages.mjs` adalah hook pembuat paket output build | Bukan aset gambar statis; nama jalur dipakai runtime, berkas paket dibuat saat build (build tidak dijalankan pada audit ini). |

## Jenis aset visual lain

Query nama seluruh node (`icon app`, `app icon`, `logo`, `wordmark`, `mascot`, `maskot`, `splash`, `launch`, `pattern`, `pola`, `ilustrasi`, `illustration`) hanya menemukan header ilustrasi, beberapa frame “Kredit ilustrasi”, dan catatan desain “Ilustrasi hanya pada Home”; **tidak ditemukan** node khusus logo, wordmark gambar, mascot, pola, app icon, atau splash/launch art. Inventaris tipe node Pencil tanpa ekspansi: 1.095 frame, 1.169 text, 16 rectangle, 365 icon perpustakaan, 26 ref, 14 ellipse; **0 path/script/browser**. Dengan demikian ikon UI adalah node `icon` library, bukan file gambar tambahan. Tidak ada shader fill/effect ber-URL. Aplikasi sudah mempunyai ikon PWA `public/icons/icon.svg`, `icon-192.png`, `icon-512.png` walaupun **tidak ditemukan padanan file ikon aplikasi yang dispesifikasikan dalam Pencil**; `orange-cat.svg` juga tidak punya padanan mascot yang ditemukan dalam Pencil. Font desain (`Inter`, `Andada Pro`, `Noto Naskh Arabic` pada `GetVariables()`) mempunyai berkas TTF di repo.

Batas putusan: ini snapshot dari seluruh node dan variabel yang dikembalikan Pencil MCP, bukan klaim tentang sejarah berkas, maksud pengarang di luar dokumen, impor eksternal yang tidak diungkap API, atau versi dokumen pada masa mendatang.

## Audit lanjutan: registri, dokumen saudara, dan jenis node

**Putusan diperinci (sepuluh berkas `myalquran/images/`): (a) 1 ditempatkan pada kanvas, (b) 0 dapat *dibuktikan* terdaftar namun belum ditempatkan—registri tidak dapat diakses oleh API yang tersedia, (c) 0 dapat *dibuktikan* dipakai dokumen saudara—kanvas saudara tidak berhasil diakses, (d) 9 belum terjelaskan asal/tujuan pemakaiannya.** Angka (b) dan (c) adalah jumlah yang terkonfirmasi, **bukan** bukti bahwa registri atau pemakaian lintas dokumen mustahil.

| Probe | Hasil / batas bukti |
|---|---|
| Registri aset dokumen | `get_app_state` hanya mengembalikan editor aktif, pilihan, dua root, komponen reusable, status browser dan akun—**tidak ada daftar uploads/assets**. Dokumentasi `execute.md` hanya mengizinkan `Get`, `GetVariables`, serta operasi node lain; `GetVariables()` mengembalikan **hanya kunci `variables`**, berisi definisi warna, font, angka—tidak ada `assets`/`images`/variabel gambar. `Get(document,{depth:0})` ditolak oleh Pencil karena pembacaan dokumen penuh tanpa visitor; `Get(document,(n,c)=>c.depth===0 ? {keys:Object.keys(n)} : undefined,{depth:0})` hanya mengembalikan dua node root (bukan metadata dokumen). Dokumentasi skema `Document` memuat `version`, `themes`, `imports`, `variables`, `children`, **tanpa** properti `assets`/`images`; dokumentasi `generate.md` menjelaskan hasil `Generate` menjadi URL fill pada node dan URL transformasi bisa dihasilkan tanpa penempatan, tetapi **tidak menyediakan API registri**. Jadi kesepuluh berkas ada di folder dokumen, namun status upload/registrinya sebagai entitas independen **tidak dapat diuji** melalui MCP yang tersedia; jangan menyamakan folder dengan panel aset editor. |
| Dokumen saudara | Folder `45b2a8e2-87ec-4f04-886e-361c38107e52/` memuat `my-personal-site.pen`, `images/generated.png`, `images/brand/{apple-touch-icon.png,favicon-16.png,favicon-32.png,site-icon.png,mascot-source.png}`, dan `images/127.0.0.1/` (39 file PNG/JPG/GIF): total **45 berkas gambar** (`find images -type f | wc -l`). Folder `references/` **tidak ada**. `shasum -a 256` atas sepuluh gambar MyAlQuran dan semua 45 gambar saudara, diurutkan lalu dicari hash berulang (`sort | uniq -d`), menghasilkan **nol berkas identik byte-per-byte**. Bahkan kedua `generated.png` berbeda SHA-256: MyAlQuran `5364b4ef…`, saudara `a77b7719…`. Ini tidak menolak kemungkinan berkas yang diubah ukuran/encode ulang, URL lintas folder, atau pemakaian kanvas saudara. |
| Upaya query kanvas saudara | `mcp__pencil_execute` dengan `filePath` **eksplisit** ke `.../45b2a8e2-87ec-4f04-886e-361c38107e52/my-personal-site.pen` justru mengembalikan **2.685 node dan `pevfi → images/generated-5.png` milik MyAlQuran** beserta variabel `$fable-*`; `get_app_state` sesudahnya tetap menyebut dokumen aktif MyAlQuran. Tool tampaknya mengabaikan `filePath` untuk target bukan editor aktif; perilaku tidak konsisten ini telah dilaporkan via `xd://report_issue`. Karena larangan membaca/dekripsi `.pen`, **tidak ada hasil traversal kanvas saudara yang sah**. Jumlah penggunaan sepuluh berkas oleh saudara tetap **tidak diketahui**, bukan nol terverifikasi. |
| Jenis dan properti node MyAlQuran | Visitor persis: `const kinds={},keys={},other=[];let total=0;Get((n,c)=>{total++;const k=n.type||n.kind||n.class||'(none)';kinds[k]=(kinds[k]||0)+1;for(const p of Object.keys(n)){keys[p]=(keys[p]||0)+1;if(['children','name','content','fill','stroke','effect'].includes(p))continue;const v=n[p];if(typeof v==='string'&&['images/','references/','generated','CleanShot','pencil:','data:image'].some(s=>v.includes(s)))other.push({id:n.id,key:p,value:v});if(v&&typeof v==='object'&&JSON.stringify(v).includes('images/'))other.push({id:n.id,key:p,value:v})}},{resolveInstances:true});Print(total,kinds,keys,other)`; hasil `other=[]`. Histogram **2.743 node expanded**: `frame` **1.127**, `text` **1.185**, `rectangle` **16**, `icon` **401**, `ellipse` **14**; **0** jenis `image`, `group`, `path`, `script`, `browser`, atau jenis tanpa `type`. Kunci properti yang muncul: `type,id,x,y,name,width,height,fill,layout,children,layoutPosition,content,fontFamily,fontSize,fontWeight,textGrowth,lineHeight,clip,gap,padding,justifyContent,alignItems,cornerRadius,icon,library,textAlign,stroke,strokeWidth,enabled,fontStyle,effect,reusable`—**tidak muncul** `backgroundImage`, `mask`, `pattern`, `src`, `image`, `asset`, maupun `kind`/`class`. Pencarian URL pada `fill`/`stroke`/`effect` menemukan **hanya** `pevfi`. Menurut `generate.md`, Pencil memang **tidak memiliki node `image` tersendiri**: gambar raster adalah fill, sedangkan SVG berupa `path` di dalam frame. |

Kesimpulan yang aman: **9 berkas hadir di folder MyAlQuran namun tidak ditemukan pada node kanvasnya**; kemungkinan residu generasi/unggahan dan kemungkinan daftar editor di luar API masih terbuka. Dokumen saudara memiliki direktori gambar tersendiri tanpa hash duplikat persis, tetapi akses kanvasnya melalui Pencil MCP gagal sehingga hubungan penggunaan lintas dokumen belum dapat diputuskan.
