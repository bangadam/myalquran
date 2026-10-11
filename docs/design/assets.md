# Aset gambar v2

> **Hak redistribusi ilustrasi hasil AI belum ditetapkan.** Penyertaan dalam build publik adalah keputusan pemilik produk setelah pemeriksaan hak. Referensi Mobbin sengaja tidak disalin dan tidak boleh dikirim sebagai aset produk.

Inventaris dibaca langsung dengan visitor `Get` pada akar Pencil `sbjR9` (v2) dan `F2BrjS` (Design System · v2), termasuk instance, lalu dicocokkan dengan `v2-spec.md`. Hanya satu node memiliki `fill.type === "image"`; varian terang, gelap, dan frame fitur lainnya tidak menambah gambar.

| Node | Berkas sumber | Layar pemilik | Geometri kanvas | Jalur repo | Format | Sebelum → sesudah | Hak/status |
|---|---|---|---|---|---|---:|---|
| `pevfi` | `images/generated-5.png` | Home `Z7H9PL` · Ruang ibadahmu | 170×150 px; radius 12; `cover` | `src/assets/illustrations/generated-5.webp` | WebP | 411.548 → 8.904 byte | Ilustrasi AI; hak redistribusi belum ditetapkan, keputusan rilis pada pemilik. |

Sumber 1024×1024 piksel dioptimalkan ke 512×512 tanpa mengubah rasio gambar; komponen menampilkan area 170×150 dengan `object-fit: cover`, sama seperti kanvas. WebP didukung browser modern target PWA ini; fallback PNG/JPEG tidak diperlukan dan akan menggandakan unduhan/offline bytes. Perintah yang dipakai dari akar repo:

```sh
mkdir -p src/assets/illustrations
cwebp -q 82 -m 6 -resize 512 512 '/Users/bangadam.dev/.pencil/documents/31238c97-dc57-4a03-a12c-1460f1408892/images/generated-5.png' -o src/assets/illustrations/generated-5.webp
```

Tidak disalin: `images/generated.png`, `generated-1.png` sampai `generated-4.png`, `generated-6.png` sampai `generated-8.png`, dan `images/CleanShot 2026-10-11 at 21.57.54@2x.png` karena tidak direferensikan oleh satu pun fill gambar v2; `references/fable.jpg`, `references/speechify.jpg`, `references/apple-books.jpg` adalah tangkapan UI pihak ketiga/Mobbin, bukan aset produk. Tidak ada gambar lain yang direferensikan desain tetapi ditinggalkan.
