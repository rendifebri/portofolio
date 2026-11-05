/**
 * =========================================================================
 * PUSAT PENGATURAN DATA PORTOFOLIO
 * =========================================================================
 * Silakan edit isi variabel di bawah ini untuk mengubah identitas,
 * foto profil, proyek, keahlian, dan riwayat pendidikan Anda.
 */

export const personalData = {
  // IDENTITAS UTAMA
  name: "Rendi Febri Yusrimel, S.kom", // Ganti dengan nama lengkap Anda
  shortName: "Rendi febri",
  profession: "Fullstack Web Developer, IoT & Programmer", // Ganti dengan profesi Anda
 roles: [
  "Web Developer",
  "Laravel Developer",
  "Internet of Things (IoT) Enthusiast",
  "Arduino & Robotik Programmer"
],
  location: "sumatera Barat, Indonesia", // Ganti dengan kota Anda
  email: "rendi05yusrimel@gmail.com", // Ganti dengan email Anda
  phone: "+62 812 6839 2048", // Ganti nomor WhatsApp Anda
  
  // DESKRIPSI SINGKAT DIRI
  shortBio: "Lulusan S1 Sistem Komputer yang memiliki minat di bidang Web Development, Internet of Things (IoT), dan teknologi informasi. Memiliki pengalaman dalam mengembangkan website responsif, aplikasi berbasis web, serta proyek monitoring berbasis mikrokontroler. Berkomitmen untuk terus mengembangkan kemampuan pemrograman, kreativitas, dan inovasi dalam menciptakan solusi teknologi yang bermanfaat.",
  
  aboutBio: `Halo! Saya merupakan lulusan S1 Sistem Komputer dari STMIK Jaya Nusa Padang dengan Indeks Prestasi Kumulatif (IPK) sebesar 3,68. Saya memiliki minat di bidang teknologi informasi, khususnya pemrograman dan Internet of Things (IoT). Saya bersemangat untuk terus belajar dan mengembangkan kemampuan sesuai dengan perkembangan teknologi.

Saya memiliki pengalaman magang di Sekretariat DPRD Kota Padang pada Bagian Umum. Selama magang, saya bertugas membantu kegiatan administrasi perkantoran, mengelola arsip dokumen, melakukan penginputan data menggunakan Microsoft Office, menyusun laporan kegiatan, serta membantu persiapan rapat dan pelayanan informasi kepada pengunjung. Pengalaman ini melatih saya untuk bekerja secara teliti, disiplin, bertanggung jawab, dan mengikuti prosedur yang berlaku.


`,

  // LINK DOWNLOAD CV (Bisa berupa link Google Drive atau file lokal di folder /public/cv.pdf)
  cvUrl: "/cv.pdf", 

  // FOTO PROFIL
  // Tip: Simpan foto Anda di folder public/ dengan nama profil.jpg, lalu ubah jadi "/profil.jpg"
  // Saat ini menggunakan placeholder avatar modern bergradasi ungu yang elegan
  avatarUrl: "/profil.jpeg",
  aboutImageUrl: "/profil.jpeg",

  // LINK SOSIAL MEDIA
  socials: {
    github: "https://github.com/rendifebri",
    instagram: "https://instagram.com/rendifebri38",
    whatsapp: "https://wa.me/6281268392048",
    email: "mailto:rendi05yusrimel@gmail.com",
    linkedin: "https://www.linkedin.com/in/rendi-febri-yusrimel-526497395/",
  },

  // STATISTIK SINGKAT (Tampil di About Me)
  stats: [
    { label: "Tahun Pengalaman / Magang", value: "1+" },
    { label: "Proyek Selesai", value: "25+" },
    { label: "Klien & Kepuasan", value: "90%" },
    { label: "Teknologi Dikuasai", value: "10+" },
  ],

  // TUJUAN & MINAT
  goalsAndInterests: [
    {
      title: "Clean Code & Best Practices",
      desc: "Menulis kode yang rapi, modular, mudah dirawat, dan teruji dengan standar industri terkini.",
    },
    {
      title: "Dark Modern UI/UX",
      desc: "Menciptakan estetika antarmuka modern bernuansa gelap dengan efek neon glow dan micro-interactions.",
    },
    {
      title: "Fullstack Architecture",
      desc: "Mengintegrasikan Frontend React JS yang reaktif dengan Backend RESTful API bertenaga Laravel & SQL.",
    },
    {
      title: "Continuous Learning",
      desc: "Selalu mengeksplorasi teknologi web mutakhir, AI tools, dan optimasi performa web berkelanjutan.",
    },
  ],
};

// DAFTAR KEAHLIAN (SKILLS)
// Sesuai permintaan: HTML, CSS, JavaScript, React JS, PHP, Laravel, MySQL, Database
export const skillsData = [
  {
    name: "HTML",
    category: "Frontend",
    percentage: 95,
    icon: "Code",
    description: "Semantik HTML5, SEO-friendly, struktur aksesibilitas tinggi.",
  },
  {
    name: "CSS",
    category: "Frontend",
    percentage: 90,
    icon: "Palette",
    description: "Responsive layout, Flexbox, Grid, Glassmorphism, animasi keyframes.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    percentage: 88,
    icon: "FileCode",
    description: "ES6+, Async/Await, manipulasi DOM, Fetch API, modular pattern.",
  },
  {
    name: "React JS",
    category: "Frontend",
    percentage: 86,
    icon: "Layers",
    description: "Hooks, component lifecycle, state management, SPA routing, Vite ecosystem.",
  },
  {
    name: "PHP",
    category: "Backend",
    percentage: 82,
    icon: "Server",
    description: "OOP PHP modern, MVC pattern, autentikasi sesi, RESTful API design.",
  },
  {
    name: "Laravel",
    category: "Backend",
    percentage: 80,
    icon: "Cpu",
    description: "Blade templating, Eloquent ORM, Migration, Middleware, API Resource.",
  },
  {
    name: "MySQL",
    category: "Database",
    percentage: 85,
    icon: "Database",
    description: "Relational schema design, Query optimization, Indexing, Triggers, Joins.",
  },
  {
    name: "Database",
    category: "Database",
    percentage: 84,
    icon: "HardDrive",
    description: "Normalisasi data, ACID compliance, ERD design, Backup & Migration data.",
  },
  {
    name: "Internet of Things (IoT)",
    category: "IoT & Robotik",
    percentage: 86,
    icon: "Wifi",
    description: "Integrasi sensor pintar, mikrokontroler, protokol komunikasi data nirkabel, dan sistem monitoring otomatis.",
  },
  {
    name: "Arduino Uno & Robotika",
    category: "IoT & Robotik",
    percentage: 88,
    icon: "Bot",
    description: "Pemrograman mikrokontroler Arduino C/C++, interfacing komponen elektronika, aktuator, servo motor, dan perancangan mekanik kendali robotik.",
  },
];

// DAFTAR PROYEK (PROJECTS)
export const projectsData = [
  {
    id: 1,
    title: "Sistem Monitoring & Pendeteksi Banjir Berbasis IoT",
    category: "IoT",
    description: "Perancangan sistem monitoring dan deteksi dini banjir secara real-time berbasis mikrokontroler Arduino Uno / ESP, sensor ketinggian air (water level & ultrasonik), serta notifikasi peringatan otomatis.",
    technologies: ["Arduino Uno", "Sensor IoT", "C/C++", "Sistem Komputer"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com/rendifebri",
    featured: true,
  },
  {
    id: 2,
    title: "Sistem Informasi Akademik & Portal PMB",
    category: "Frontend",
    description: "Aplikasi portal penerimaan mahasiswa baru (PMB) dan sistem informasi akademik dengan antarmuka modern, interaktif, cepat, dan responsif.",
    technologies: ["React JS", "Vite", "JavaScript", "CSS3"],
    image: "/pmb.png",
    demoUrl: "https://rendifebri.github.io/PMB/",
    githubUrl: "https://rendifebri.github.io/PMB/",
    featured: true,
  },
  {
    id: 3,
    title: "Dark Modern Developer Portfolio",
    category: "Frontend",
    description: "Website portofolio interaktif bertema gelap futuristik dengan aksen ungu neon, animasi halus, glassmorphism, dan form kontak responsif.",
    technologies: ["React JS", "Vite", "CSS3 Glow", "Lucide Icons"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com/rendifebri/rendifebri.github.io",
    featured: true,
  },
  {
    id: 4,
    title: "Sistem Kendali Robotik & Otomasi Arduino",
    category: "IoT",
    description: "Proyek perancangan sistem mekanik dan elektronik kendali robotik berbasis Arduino Uno, motor driver, sensor jarak, serta algoritma penavigasian otomatis.",
    technologies: ["Arduino Uno", "Robotika", "Mikrokontroler", "Sensor"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com/rendifebri",
    featured: false,
  },
  {
    id: 5,
    title: "E-Commerce & Kasir Point of Sale (POS)",
    category: "Fullstack",
    description: "Aplikasi toko dan kasir modern dengan manajemen katalog produk, keranjang transaksi, dan integrasi database relational.",
    technologies: ["React JS", "PHP", "Laravel", "MySQL"],
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com/rendifebri",
    featured: false,
  },
  {
    id: 6,
    title: "Dashboard Analitik & Monitoring Database",
    category: "Backend",
    description: "Visualisasi metrik transaksi dan performa query database secara real-time dengan chart interaktif dan alert status server.",
    technologies: ["PHP", "MySQL", "Chart.js", "RESTful API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com/rendifebri",
    featured: false,
  },
];

// RIWAYAT PENDIDIKAN (EDUCATION)
export const educationData = [
  {
    id: 1,
    institution: "STMIK Jaya Nusa",
    degree: "Sarjana Komputer (S.Kom)-Sistem Komputer",
    period: "2022 - 2026 (Lulus 2026)",
    status: "Mahasiswa Aktif",
    description: "Fokus studi pada Sistem Komputer, Mikrokontroler, Internet of Things (IoT), Jaringan Komputer, Pemrograman, Sistem Digital, serta Perancangan dan Implementasi Perangkat Keras dan Perangkat Lunak.",
   highlights: [
  "IPK: 3.68 / 4.00",
  "Aktif dalam Organisasi Robotik STMIK Jayanusa",
  "Anggota Badan Eksekutif Mahasiswa (BEM) STMIK Jayanusa",
  "Mengembangkan Proyek Sistem Monitoring dan Pendeteksi Banjir Berbasis IoT",
  "Memiliki minat dalam Pemrograman, Jaringan Komputer, dan Internet of Things (IoT)",
],
  },
  {
    id: 2,
    institution: "MAN 1 Pesisir Selatan",
    degree: "Jurusan Ilmu Pengetahuan Alam (IPA)",
    period: "2019 - 2022",
    status: "Lulus",
    description: "Mempelajari ilmu pengetahuan alam yang meliputi Matematika, Fisika, Kimia, dan Biologi, serta mengembangkan kemampuan berpikir logis, analitis, disiplin, dan kerja sama.",
    highlights: [
      "Aktif dalam kegiatan ekstrakurikuler Pramuka",
      "Aktif dalam kegiatan Paskibra",
      "Meraih Juara 2 Lomba Sepak Bola Tingkat MAN",
      "Mengembangkan kemampuan kepemimpinan, kedisiplinan, dan kerja sama tim",
],
  },
];

