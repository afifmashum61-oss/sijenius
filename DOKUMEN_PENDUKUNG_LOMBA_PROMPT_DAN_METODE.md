# 📜 DOKUMEN PENDUKUNG LOMBA INOVASI MEDIA PEMBELAJARAN DIGITAL
## "PETUALANGAN ABBASIYAH: MEDIA PEMBELAJARAN INTERAKTIF BERBASIS GAMIFIKASI & KURIKULUM BERBASIS CINTA (KBC)"

---

### 📌 INFORMASI KARYA
- **Nama Karya**: *Petualangan Abbasiyah (Si Jenius Dinasti Abbasiyah)*
- **Kategori**: Media Pembelajaran Interaktif Digital / Web-Based Learning Application
- **Mata Pelajaran**: Sejarah Kebudayaan Islam (SKI)
- **Jenjang / Sasaran**: MTs / SMP (Fase D / Kelas VIII)
- **Tema Materi**: Kemajuan Peradaban Daulah Abbasiyah (Baitul Hikmah, Gerakan Keilmuan, dan Tokoh Ilmuwan Muslim)
- **Kurikulum**: Kurikulum Berbasis Cinta (KBC) & Panca Cinta (Fokus: Cinta Ilmu, Cinta Allah & Rasul)
- **URL Akses Publik**: [https://sijenius.idarah.my.id](https://sijenius.idarah.my.id)
- **Teknologi Utama**: HTML5, Modern CSS3 (Container Queries, Flexbox/Grid), Vanilla JavaScript (ES6+), Web Audio API (Sintesis Prosedural Musik Tradisional Timur Tengah Maqam Hijaz), Web Responsive Mobile First, Edge Gesture Navigation.

---

## 📑 DAFTAR ISI
1. **Latar Belakang & Nilai Kebaruan (*Novelty*)**
2. **Arsitektur & Pendekatan Pedagogis (Framework ADDIE & KBC)**
3. **Alur Tahapan Pembuatan Web (Langkah demi Langkah)**
4. **Kompilasi Prompt Engineering AI Lengkap (Dari Ideasi hingga Deployment)**
   - *Tahap 1: Prompt Desain Konsep, Kurikulum KBC & RPP*
   - *Tahap 2: Prompt Struktur Portal Web & Desain Tema Golden Age*
   - *Tahap 3: Prompt Game Petualangan Interaktif (Engine 16:9)*
   - *Tahap 4: Prompt Sintesis Audio WebAudio API (Maqam Hijaz)*
   - *Tahap 5: Prompt Pembuatan Karakter & Aset Ilustrasi Edukasi*
   - *Tahap 6: Prompt Fitur AI Chatbot (Tanya SKI)*
   - *Tahap 7: Prompt Optimasi Mobile, Fullscreen, & Gestur Layar HP*
5. **Spesifikasi Teknis & Keunggulan Arsitektur Sistem**
6. **Petunjuk Pemanfaatan dalam Sidang / Presentasi Lomba**

---

## 1. 🌟 LATAR BELAKANG & NILAI KEBARUAN (*NOVELTY*)

### A. Masalah Pembelajaran Konvensional
Mata pelajaran Sejarah Kebudayaan Islam (SKI) sering kali dipersepsikan oleh peserta didik sebagai materi hafalan tahun, nama khalifah, dan teks yang kering. Hal ini menyebabkan motivasi belajar peserta didik menurun dan nilai-nilai keteladanan peradaban Islam sulit terinternalisasi.

### B. Solusi Inovatif: "Petualangan Abbasiyah"
Media ini memadukan **pendekatan gamifikasi edukatif (Game-Based Learning)** dengan **Kurikulum Berbasis Cinta (KBC)**. Peserta didik diajak bertualang bersama karakter *Ahmad Si Jenius* menyusuri Kota Baghdad abad pertengahan, mengeksplorasi Baitul Hikmah, memecahkan teka-teki logika ilmuwan Muslim (Al-Khawarizmi & Ibnu Sina), hingga menguji pemahaman lewat evaluasi adaptif dan chatbot asisten belajar.

### C. Nilai Kebaruan (*Novelty*):
1. **Zero-Dependency Architecture**: Tidak memerlukan instalasi aplikasi tambahan, berjalan 100% cepat melalui peramban web (*browser*) HP/laptop.
2. **Procedural WebAudio Hijaz Engine**: Musik latar belakang bernuansa Timur Tengah dihasilkan secara otomatis melalui algoritma matematika sintesis suara tanpa menggunakan file MP3 berat, sehingga hemat kuota data.
3. **Smart Mobile Edge-Gesture**: Navigasi intuitif layar HP di mana siswa dapat menggeser tepi kanan/kiri layar untuk kembali (*back gesture*), layaknya aplikasi Android/iOS modern.
4. **Integrasi Multimodal Terpadu**: Menggabungkan video animasi, slide visual, komik sejarah, game interaktif 16:9, chatbot AI edukasi, dan sertifikat prestasi ber-QR Code otomatis.

---

## 2. 🎯 ARSITEKTUR & PENDEKATAN PEDAGOGIS (FRAMEWORK ADDIE)

Pengembangan media ini mengadopsi model **ADDIE** yang diselaraskan dengan **Kurikulum Berbasis Cinta (KBC)**:

```
[1. ANALISIS]       --> Analisis Capaian Pembelajaran SKI Fase D & Kebutuhan Gaya Belajar Siswa
       │
[2. DESAIN]         --> Perancangan Panca Cinta (Cinta Ilmu), Skenario Petualangan, Storyboard
       │
[3. PENGEMBANGAN]   --> Prompt Engineering AI: Koding Web SPA, Karakter Visual, Audio Sintesis
       │
[4. IMPLEMENTASI]   --> Uji Coba Lintas Perangkat (Desktop, Tablet, Smartphone Android/iOS)
       │
[5. EVALUASI]       --> Evaluasi Kuis Interaktif, Skor Wawasan, Refleksi Diri & Sertifikat
```

---

## 3. 🛠️ ALUR TAHAPAN PEMBUATAN WEB (LANGKAH DEMI LANGKAH)

### Langkah 1: Formulasi Konsep & Penyelarasan Kurikulum
- Menetapkan Capaian Pembelajaran (CP) SKI Fase D (Kemajuan Peradaban Daulah Abbasiyah).
- Memilih nilai Panca Cinta yang diintegrasikan: **Cinta Ilmu** (fokus utama) dan **Cinta Allah & Rasul-Nya** (nilai penyerta).
- Merumuskan alur petualangan 4 Pos Sejarah: (1) Kota Bundar Baghdad, (2) Baitul Hikmah, (3) Gerakan Penerjemahan & Cinta Ilmu, (4) Tokoh & Karya Monumental.

### Langkah 2: Perancangan Antarmuka & Tema Visual
- Mengembangkan tema estetika *Islamic Golden Age*: perpaduan warna hijau zamrud (`#064E3B`), emas kekhalifahan (`#F5C542`), dan biru malam Baghdad (`#070B1C`).
- Menggunakan tipografi berkarakter ramah anak dan edukatif (*Lilita One*, *Segoe UI*, *Trebuchet MS*).

### Langkah 3: Rekayasa Engine Game Petualangan (16:9 Container Queries)
- Menggunakan teknologi *CSS Container Queries* (`cqw`/`cqh`) dengan rasio aspek standar video 16:9 agar game tidak terdistorsi di berbagai resolusi layar.
- Membangun *Finite State Machine* (FSM) JavaScript untuk mengatur alur navigasi dari Cover $\rightarrow$ Peta Baghdad $\rightarrow$ Eksplorasi Pos $\rightarrow$ Misi Logika $\rightarrow$ Evaluasi Kuis $\rightarrow$ Profil & Gelar Prestasi.

### Langkah 4: Rekayasa Audio Web Audio API Prosedural
- Memprogram osilator frekuensi nada tangga lagu Arab kuno (*Maqam Hijaz*: D, Eb, F#, G, A, Bb, C, D) dengan efek gaung (*reverb convolver*) dan perkusif sintetis.

### Langkah 5: Pembuatan Modul Pendukung Multimodal
- Mengintegrasikan modul RPP digital Kurikulum Berbasis Cinta lengkap.
- Mengembangkan Komik Digital interaktif dan Slide Materi peradaban.
- Menghubungkan Chatbot AI Asisten Belajar (*Tanya SKI*) untuk pembelajaran berdiferensiasi.

### Langkah 6: Optimasi Pengalaman Seluler (Mobile Experience)
- Menambahkan tombol rotasi HP otomatis (Landscape reminder).
- Menerapkan fitur *Mobile Edge-Swipe Gesture* pada tepi kanan dan kiri layar untuk navigasi kembali yang mulus dan profesional.

### Langkah 7: Publikasi & Hosting (Production Deployment)
- Mengunggah kode sumber ke GitHub Repository.
- Menghubungkan ke Custom Domain `sijenius.idarah.my.id` dengan sertifikat keamanan SSL/HTTPS otomatis.

---

## 4. 🤖 KOMPILASI PROMPT ENGINEERING AI LENGKAP

Bagian ini memuat rekayasa prompt (*prompt engineering*) yang dapat digunakan sebagai bukti orisinalitas dan metodologi pengembangan berbasis AI:

```markdown
┌─────────────────────────────────────────────────────────────────────────────┐
│ METODOLOGI PROMPT: ROLE - CONTEXT - TASK - CONSTRAINTS - OUTPUT SPECIFICATION│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 🟢 TAHAP 1: PROMPT DESAIN KONSEP & RPP KURIKULUM BERBASIS CINTA (KBC)

```text
[ROLE]: 
Anda adalah seorang Pakar Kurikulum Pembelajaran Islam dan Pengembang Media Digital Pendidikan untuk jenjang MTs/SMP.

[CONTEXT]:
Saya sedang merancang media pembelajaran interaktif berbasis web untuk mata pelajaran Sejarah Kebudayaan Islam (SKI) Kelas VIII dengan tema "Kemajuan Peradaban Daulah Abbasiyah". Media ini menerapkan Kurikulum Berbasis Cinta (KBC).

[TASK]:
1. Susunlah Rencana Pelaksanaan Pembelajaran (RPP) inovatif berdurasi 2 JP (2 x 40 menit).
2. Integrasikan konsep Dimensi Profil Lulusan (DPL): Keimanan, Penalaran Kritis, dan Kolaborasi.
3. Petakan integrasi Topik Panca Cinta: "Cinta Ilmu" (sebagai fokus utama keteladanan Bayt al-Hikmah) dan "Cinta Allah & Rasul-Nya" (sebagai motivasi ibadah menuntut ilmu).
4. Buatlah skenario gamifikasi pembelajaran yang terdiri dari 4 pos eksplorasi, 1 misi kunci peradaban, dan evaluasi pemahaman bermakna.

[CONSTRAINTS & STYLE]:
- Bahasa Indonesia yang formal, edukatif, dan inspiratif.
- Format tabel atau card ringkas yang mudah ditampilkan di web.
```

---

### 🟢 TAHAP 2: PROMPT STRUKTUR PORTAL WEB & TEMA GOLDEN AGE (HTML/CSS)

```text
[ROLE]:
Anda adalah Senior Frontend Developer dan UI/UX Designer spesialis platform edukasi anak/remaja.

[CONTEXT]:
Saya ingin membuat portal web single-page (SPA) bertema "Petualangan Abbasiyah". Web ini harus memuat menu interaktif: Video Pembelajaran, Slide Materi, Komik Petualangan, Game Edukasi, Chatbot AI Tanya SKI, dan RPP KBC.

[TASK]:
Buatkan kode HTML5 & CSS3 modern untuk layout portal utama dengan ketentuan:
1. Palette Warna: Deep Emerald Green (#064E3B), Golden Amber (#F59E0B / #F5C542), Cream Canvas (#FFFBEB), dan Dark Navy (#070B1C).
2. Layout Hero Section: Menampilkan judul atraktif, badge akreditasi KBC, serta kartu-kartu navigasi modul dengan efek hover 3D lembut.
3. Responsif Mobile First: Elemen tombol, padding, dan teks menyesuaikan proporsional pada layar smartphone maupun desktop.
4. Single-Page Switcher: Buatkan script JavaScript ringan untuk beralih antar layar modul tanpa me-reload halaman browser (Zero dependencies, pure Vanilla JS).
```

---

### 🟢 TAHAP 3: PROMPT GAME PETUALANGAN INTERAKTIF 16:9

```text
[ROLE]:
Anda adalah Game Programmer berbasis HTML5 Canvas dan Web DOM.

[CONTEXT]:
Kami membutuhkan modul game petualangan edukatif yang tertanam di dalam web. Game bertema "Si Jenius: Petualangan Dimulai".

[TASK]:
Rancanglah game web engine mandiri dengan spesifikasi teknis:
1. Layar Game Rasio 16:9: Gunakan container query (cqw/cqh) agar ukuran canvas dan antarmuka selalu terkunci pada proporsi 16:9 tanpa merusak aspect ratio di layar mana pun.
2. Alur 9 Halaman Terstruktur:
   - Hal 1: Cover Game dengan animasi tombol mulai bersinar.
   - Hal 2: Peta Interaktif Kota Baghdad dengan 6 titik pin penjelajahan.
   - Hal 3-6: Eksplorasi 4 Pos Sejarah (Kota Bundar Baghdad, Baitul Hikmah, Gerakan Penerjemahan, Tokoh Ilmuwan Al-Khawarizmi & Ibnu Sina) disertai koleksi Permata Wawasan (+10 Wawasan).
   - Hal 7: Misi Interaktif Menempa Kunci Gerbang Ilmu (mencocokkan ilmuwan dan karya).
   - Hal 8: Kuis Evaluasi Pemahaman (5 soal pilihan ganda adaptif, feedback langsung, auto-scroll ke tombol soal berikutnya).
   - Hal 9: Penutup & Gelar Pencapaian (Gelar: Pemula Berani, Penjelajah Ilmu, atau Si Jenius).
3. State Management: Buat objek state 'st' untuk menyimpan skor wawasan, status misi, kuis, dan posisi karakter Ahmad.
```

---

### 🟢 TAHAP 4: PROMPT SINTESIS MUSIK MAQAM HIJAZ (WEB AUDIO API)

```text
[ROLE]:
Anda adalah Audio Engineer dan Web Audio API Specialist.

[CONTEXT]:
Dalam game sejarah Islam abad pertengahan, kami membutuhkan musik latar belakang (BGM) khas Timur Tengah yang sangat ringan (0 KB file audio eksternal) agar game dapat dimuat dalam hitungan milidetik di jaringan lambat.

[TASK]:
Tuliskan fungsi JavaScript murni yang memanfaatkan Web Audio API bawaan peramban:
1. Bangun nada dasar Maqam Hijaz: [0, 1, 4, 5, 7, 8, 10, 12, 13, 16] semitone dengan frekuensi dasar D (293.66 Hz).
2. Implementasikan sintesis petikan senar (pluck string) menggunakan kombinasi Triangle dan Sine Oscillator dengan exponential gain decay.
3. Tambahkan pad ambient berfrekuensi hangat menggunakan Sawtooth Oscillator dengan Low-Pass Filter.
4. Tambahkan ritme perkusi lembut (Doh dan Tak) menggunakan Noise Buffer dan Pitch-drop Oscillator.
5. Tambahkan Convolver Reverb prosedural agar suara terdengar megah seperti di dalam istana Baghdad.
6. Berikan tombol toggle Mute/Unmute audio yang ramah pengguna.
```

---

### 🟢 TAHAP 5: PROMPT GENERASI ASET VISUAL & KARAKTER EDUKASI

```text
[PROMPT AI IMAGE GENERATOR (Midjourney / DALL-E / Imagen 3)]:

1. Karakter Utama (Ahmad Si Jenius):
"A cute 3D cartoon Muslim boy character, smiling cheerfully, wearing a neat white Islamic shirt with subtle gold arabesque embroidery and a clean white peci cap. Warm and friendly expression, giving a thumbs up. High quality 3D animated movie render style, Pixar/Disney inspired, clean lighting, soft volumetric shadows, isolated circular avatar portrait on soft pastel background --ar 1:1 --v 6.0"

2. Tokoh Sejarah (Harun ar-Rasyid & Baitul Hikmah):
"Flat vector art icon of a wise Abbasid Caliph in profile silhouette, wearing an elegant green and gold turban, sitting before an open golden manuscript book. In the background, majestic domes and minarets of medieval Baghdad Bayt al-Hikmah library under warm golden sunlight. Minimalist luxury Islamic emblem, circular frame, clean lines, emerald green and gold palette --ar 1:1"
```

---

### 🟢 TAHAP 6: PROMPT INTEGRASI CHATBOT ASISTEN BELAJAR (TANYA SKI)

```text
[SYSTEM PROMPT CHATBOT EDUKASI]:
Anda adalah "Si Jenius AI", asisten belajar Sejarah Kebudayaan Islam (SKI) yang ramah, santun, dan inspiratif untuk siswa MTs/SMP.

[PRINSIP UTAMA]:
1. Bahasa: Ramah, penuh semangat, menggunakan sapaan hangat ("Halo Sahabat Jenius!", "Masya Allah, pertanyaan yang luar biasa!").
2. Konten: Berikan jawaban akurat dan ringkas mengenai kejayaan Daulah Abbasiyah (Baitul Hikmah, Khalifah Harun ar-Rasyid, Al-Ma'mun, Al-Khawarizmi, Ibnu Sina, Jabir bin Hayyan, dll.).
3. Nilai Karakter: Selalu tautkan jawaban dengan nilai Panca Cinta (Cinta Ilmu, adab belajar, kejujuran, dan empati).
4. Batasan: Jangan memberikan jawaban di luar topik sejarah Islam dan materi edukasi. Jika ditanya hal umum, ajak kembali belajar sejarah kejayaan Islam secara santun.
```

---

### 🟢 TAHAP 7: PROMPT OPTIMASI RESPONSIVITAS MOBILE & GESTUR LAYAR HP

```text
[ROLE]:
Anda adalah pakar Mobile Web Usability dan Touch Gesture Interaction.

[CONTEXT]:
Saat siswa mengakses web game di smartphone, mereka membutuhkan navigasi yang ergonomis saat memegang HP dalam posisi landscape maupun portrait.

[TASK]:
Implementasikan fitur Gestur Geser Tepi Layar (Mobile Edge-Swipe Back Gesture):
1. Deteksi Sentuhan Tepi Layar:
   - Deteksi touchstart pada tepi kiri (<= 65px dari layar) dan tepi kanan (>= lebar layar - 65px).
2. Arah Geser:
   - Geser dari kiri ke dalam (kanan) ATAU geser dari kanan ke dalam (kiri) sejauh minimal 48px.
3. Indikator Visual Minimalis Modern:
   - Munculkan indikator visual berupa lingkaran kaca melayang (frosted glass bubble) berisi ikon panah chevron minimalis (<svg>).
   - Tanpa teks agar tampilan terlihat bersih, modern, dan profesional layaknya navigasi iOS/Android native.
   - Berikan efek perubahan warna ke hijau emerald dan getaran halus (haptic feedback) saat tarikan siap dieksekusi.
4. Pencegahan Salah Sentuh:
   - Batalkan gestur jika pengguna sedang menggulir layar secara vertikal (misalnya saat membaca teks soal).
```

---

## 5. ⚙️ SPESIFIKASI TEKNIS & EFISIENSI SISTEM

| Parameter | Spesifikasi Teknis | Manfaat Pedagogis / Teknis |
| :--- | :--- | :--- |
| **Arsitektur** | Single Page Application (SPA) murni | Akses instan tanpa loading berulang-ulang |
| **Framework/Library** | Vanilla HTML5, CSS3, JavaScript ES6+ | Zero external dependency, tahan lama & mudah dimaintain |
| **Audio Engine** | Web Audio API Polyphonic Synth | Musik khas Baghdad tanpa unduh file MP3 (0 KB data) |
| **Ukuran Bundle Web** | Ringan & teroptimasi WebP | Cepat dimuat di daerah dengan koneksi internet terbatas |
| **Kompatibilitas** | Chrome, Safari, Edge, Firefox, Mobile Browser | Dapat diakses dari Chromebook sekolah, laptop guru, maupun HP siswa |
| **Aspek Rasio Game** | 16:9 Flexible Container Query | Tampilan stabil dan tidak terpotong di smartphone layar lebar |
| **Fitur Aksesibilitas** | Tombol Layar Penuh, Pengingat Landscape, Edge Swipe | Memudahkan interaksi motorik siswa saat memegang gawai |

---

## 6. 🏆 TIPS SUKSES DALAM SIDANG / PRESENTASI LOMBA

Saat mempresentasikan karya ini di hadapan dewan juri, fokuskan penjelasan Anda pada 4 pilar kekuatan karya:

1. **Inovasi Kurikulum (Panca Cinta - KBC)**:
   > *"Karya ini bukan sekadar web interaktif, melainkan pengejawantahan Kurikulum Berbasis Cinta. Siswa tidak lagi merasa dipaksa menghafal tahun sejarah, melainkan ditumbuhkan rasa 'Cinta Ilmu' melalui keteladanan para ilmuwan Muslim di Baitul Hikmah."*

2. **Kecanggihan & Efisiensi Teknologi (Zero-Dependency & WebAudio)**:
   > *"Kami merancang media ini seringan mungkin. Musik latarnya tidak menggunakan file audio yang memakan memori, melainkan disintesis secara langsung oleh browser dengan Web Audio API. Media ini juga responsif dan memiliki fitur gestur sentuh layaknya aplikasi smartphone modern."*

3. **Diferensiasi Gaya Belajar (VARK)**:
   > *"Media ini memfasilitasi seluruh gaya belajar: siswa Visual dengan peta dan komik, siswa Auditori dengan narasi dan musik maqam, siswa Kinestetik dengan game petualangan interaktif, serta siswa Mandiri dengan kuis adaptif dan Chatbot AI."*

4. **Keterukuran Hasil Belajar**:
   > *"Setiap aktivitas belajar menghasilkan skor Wawasan terukur yang bermuara pada penerbitan Sertifikat Penghargaan otomatis sebagai bentuk apresiasi terhadap capaian setiap siswa."*

---
*Dokumen ini disusun sebagai lampiran portofolio dan bukti rekayasa inovasi media pembelajaran digital 'Petualangan Abbasiyah'.*

