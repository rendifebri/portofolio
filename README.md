# 🌟 Website Portofolio Pribadi (Dark Modern & Purple Glow)

Website portofolio pribadi modern, elegan, dan responsif yang dibangun menggunakan **React JS + Vite**, dengan tema **DARK MODERN** dan perpaduan warna **HITAM & UNGU GLOW**.

---

## 🚀 Fitur Utama
- 🎨 **Desain Dark Modern & Purple Glow**: Latar belakang hitam gelap (`#07050d`) dipadukan dengan aksen neon ungu (`#9333ea`, `#a855f7`, `#c084fc`) dan ambient glow halus.
- 🪟 **Glassmorphism**: Kartu transparan dengan efek blur kaca (`backdrop-filter`) dan border ungu halus yang menyala saat di-hover.
- 📱 **100% Responsif**: Tampilan optimal di smartphone, tablet, laptop, dan layar monitor desktop.
- ⚡ **Animasi & Interaktivitas**:
  - Teks role/profesi dinamis berganti otomatis di Hero section.
  - Navbar transparan dengan glassmorphism blur & pendeteksi posisi scroll otomatis.
  - Menu hamburger responsif untuk perangkat mobile/smartphone.
  - Baris keahlian (Skills) dengan progress bar ungu bersinar dan filter kategori.
  - Kartu proyek dengan efek zoom gambar, tag teknologi, link demo, dan link GitHub.
  - Garis waktu (timeline) pendidikan vertikal bernuansa neon.
  - Formulir kontak interaktif dengan validasi, status pengiriman, notifikasi sukses, serta tautan langsung ke WhatsApp, Instagram, GitHub, dan Email.

---

## 📁 Struktur File & Komponen
```text
portofolio/
├── public/                 # Aset publik statis (gambar, favicon, cv.pdf)
├── src/
│   ├── components/         # Komponen Modular Halaman
│   │   ├── Navbar.jsx      # Navigasi atas dengan efek glassmorphism & mobile menu
│   │   ├── Home.jsx        # Hero section: Foto, Nama, Profesi, CV, Kontak, Sosmed
│   │   ├── About.jsx       # Biodata diri, statistik, tujuan & minat
│   │   ├── Skills.jsx      # Kartu & progress bar keahlian (HTML, CSS, JS, React, PHP, Laravel, MySQL, Database)
│   │   ├── Projects.jsx    # Showcase portofolio proyek + link Demo & GitHub
│   │   ├── Education.jsx   # Timeline riwayat pendidikan & pencapaian
│   │   ├── Contact.jsx     # Form kontak interaktif & saluran pesan langsung
│   │   ├── Footer.jsx      # Catatan kaki, navigasi cepat, & tombol back to top
│   │   └── SocialIcons.jsx # Ikon SVG bersih untuk GitHub, Instagram, LinkedIn, WhatsApp
│   ├── data/
│   │   └── portfolioData.js # 🎯 PUSAT PENGATURAN DATA (Identitas, Foto, Proyek, Skills, Edukasi)
│   ├── App.jsx             # Komponen utama yang merangkai seluruh halaman
│   ├── index.css           # Styling global tema gelap, animasi, & warna ungu
│   └── main.jsx            # Entry point React Vite
├── index.html              # HTML utama & import Google Font (Plus Jakarta Sans)
├── package.json            # Daftar dependensi & script proyek
└── vite.config.ts          # Konfigurasi bundler Vite
```

---

## 🛠️ Langkah Instalasi & Menjalankan Proyek

### 1. Buka Proyek di Visual Studio Code
- Buka software **Visual Studio Code**.
- Klik menu **File > Open Folder...**, lalu pilih folder `D:\portofolio`.
- Buka terminal terintegrasi di VS Code dengan menekan tombol kombinasi:
  ```text
  Ctrl + ` (Backtick)
  ```
  *(Atau melalui menu atas: **Terminal > New Terminal**)*

### 2. Instalasi Dependensi (Jika baru di-clone / pertama kali)
Ketik perintah berikut di terminal:
```bash
npm install
```

### 3. Jalankan Server Development
Ketik perintah berikut di terminal:
```bash
npm run dev
```

Terminal akan menampilkan link lokal, contohnya:
```text
  VITE v8.3.5  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
- Tekan `Ctrl + Klik` pada link `http://localhost:5173/` atau buka browser Anda dan ketikkan alamat tersebut.
- Website portofolio langsung aktif dengan fitur live-reload (setiap perubahan kode langsung tampak tanpa refresh manual).

### 4. Build untuk Produksi
Jika ingin mempublikasikan website ke hosting (Vercel, Netlify, GitHub Pages, dll):
```bash
npm run build
```
File siap rilis akan otomatis berada di dalam folder `dist/`.

---

## 🎯 Petunjuk Bagian yang Harus Diedit

Semua data teks, foto, riwayat, dan proyek telah dipusatkan di dalam satu file agar Anda tidak perlu mencari-cari ke banyak file.

👉 **Buka file:** `src/data/portfolioData.js`

### 1. Mengganti Identitas Diri (Nama, Profesi, Email, Domisili)
Cari bagian `personalData` di baris paling atas:
```javascript
export const personalData = {
  name: "Nama Lengkap Anda",           // Ganti dengan nama Anda
  shortName: "Nama Panggilan",         // Nama pendek untuk logo navbar
  profession: "Web Developer / Programmer", 
  roles: [
    "Web Developer",
    "Frontend Specialist",
    "Backend & Laravel Enthusiast"
  ],
  location: "Kota Anda, Indonesia",   // Ganti dengan kota Anda
  email: "emailanda@example.com",     // Ganti dengan email aktif Anda
  phone: "+62 812 3456 7890",         // Ganti nomor WhatsApp Anda
  shortBio: "Tuliskan deskripsi singkat Anda di sini...",
  aboutBio: `Tuliskan deskripsi lengkap tentang diri Anda di sini...`,
  ...
```

### 2. Mengganti Foto Profil Sendiri
1. Siapkan foto Anda (format `.jpg` atau `.png`).
2. Masukkan file foto ke dalam folder `public/`, misalnya beri nama `foto-profil.jpg`.
3. Buka `src/data/portfolioData.js`, lalu ubah:
```javascript
avatarUrl: "/foto-profil.jpg",
aboutImageUrl: "/foto-profil.jpg",
```

### 3. Mengganti File CV (Download CV)
1. Simpan file CV Anda berformat PDF di folder `public/`, contohnya `cv.pdf`.
2. Buka `src/data/portfolioData.js`, lalu ubah:
```javascript
cvUrl: "/cv.pdf",
```

### 4. Mengubah Akun Media Sosial
Ubah URL akun Anda pada bagian `socials`:
```javascript
socials: {
  github: "https://github.com/username-anda",
  instagram: "https://instagram.com/username-anda",
  whatsapp: "https://wa.me/6281234567890", // Ganti dengan no WhatsApp berawalan 62
  email: "mailto:emailanda@example.com",
  linkedin: "https://linkedin.com/in/username-anda",
},
```

### 5. Menambah / Mengubah Keahlian (Skills)
Buka array `skillsData` di `src/data/portfolioData.js`:
```javascript
export const skillsData = [
  {
    name: "React JS",
    category: "Frontend",
    percentage: 90,
    icon: "Layers",
    description: "Hooks, component lifecycle, state management, SPA routing.",
  },
  // Anda bisa mengubah persentase atau menambah skill baru
];
```

### 6. Menambah / Mengubah Portofolio Proyek
Buka array `projectsData` di `src/data/portfolioData.js`:
```javascript
export const projectsData = [
  {
    id: 1,
    title: "Nama Proyek Anda",
    category: "Fullstack", // Kategori: Frontend / Backend / Fullstack
    description: "Deskripsi singkat tentang apa yang dibuat dan fungsinya.",
    technologies: ["React JS", "Laravel", "MySQL"],
    image: "https://link-gambar-proyek.com/gambar.jpg", // Atau letakkan di /public/
    demoUrl: "https://link-live-demo.com",
    githubUrl: "https://github.com/username/repo-proyek",
    featured: true,
  },
  ...
];
```

### 7. Mengubah Riwayat Pendidikan
Buka array `educationData` di `src/data/portfolioData.js`:
```javascript
export const educationData = [
  {
    id: 1,
    institution: "Nama Universitas / Sekolah Anda",
    degree: "Jurusan / Gelar",
    period: "2021 - 2025",
    status: "Mahasiswa Aktif", // Atau "Lulus"
    description: "Penjelasan mengenai fokus pembelajaran dan prestasi.",
    highlights: [
      "IPK: 3.80",
      "Asisten Lab Komputer",
    ],
  },
  ...
];
```

---

## 🎨 Kustomisasi Warna & Tema
Jika ingin menyesuaikan kecerahan warna ungu atau efek glow, semua variabel warna CSS tersedia di bagian atas file `src/index.css`:
- `--bg-primary`: `#07050d` (Latar belakang gelap)
- `--purple-primary`: `#9333ea` (Ungu utama)
- `--purple-glow`: `#a855f7` (Ungu neon bercahaya)
- `--purple-secondary`: `#c084fc` (Ungu terang lavender)
