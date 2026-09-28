export const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Tentang Kami", href: "#tentang-kami" },
  { name: "Teknologi", href: "#teknologi" },
  { name: "Portofolio", href: "#portofolio" },
  { name: "Pengalaman", href: "#pengalaman" },
  { name: "Proses", href: "#proses" },
  { name: "Kontak", href: "#kontak" },
];

export const aboutPoints = [
  {
    iconName: "Zap",
    title: "Pemecah Masalah",
    description: "Fokus pada akar masalah bisnis untuk memberikan solusi berbasis rekayasa software yang efektif."
  },
  {
    iconName: "Target",
    title: "Detail Oriented",
    description: "Memastikan presisi standar piksel, pengalaman pengguna optimal, dan konsistensi seluruh alur produk."
  },
  {
    iconName: "Code2",
    title: "Clean Code",
    description: "Menulis kode yang rapi, terstruktur, teruji, modular, dan mudah dikembangkan dalam jangka panjang."
  },
  {
    iconName: "BookOpen",
    title: "Terus Belajar",
    description: "Selalu beradaptasi dengan tren teknologi terkini dan mengadopsi standar arsitektur terbaik."
  },
  {
    iconName: "Users",
    title: "Kolaborasi Tim",
    description: "Bekerja secara transparan dan komunikatif bersama tim Anda dengan metodologi Agile modern."
  },
  {
    iconName: "Sparkles",
    title: "Selalu Inovatif",
    description: "Meningkatkan daya saing produk melalui integrasi teknologi mutakhir dan kecerdasan buatan."
  }
];

export const techStack = [
  { name: "Laravel", label: "Laravel", icon: "Server", type: "Backend Framework" },
  { name: "React.js", label: "React.js", icon: "Atom", type: "Frontend Library" },
  { name: "Next.js", label: "Next.js", icon: "Layers", type: "Fullstack Framework" },
  { name: "Node.js", label: "Node.js", icon: "Cpu", type: "Runtime Environment" },
  { name: "Tailwind", label: "Tailwind", icon: "Palette", type: "CSS Framework" },
  { name: "PostgreSQL", label: "PostgreSQL", icon: "Database", type: "Relational DB" },
  { name: "Lainnya", label: "Lainnya", icon: "Box", type: "Docker, Redis, AWS" },
];

export const portfolioProjects = [
  {
    id: "project-pos-bengkel",
    title: "Sistem POS & Manajemen Bengkel Motor Berbasis Web",
    category: "ERP & POS",
    shortDesc: "Aplikasi Full-Stack ERP & Point-of-Sale (POS) modular yang dirancang untuk digitalisasi operasional, pembayaran online, dan manajemen inventaris UMKM bengkel motor.",
    longDesc: "Solusi digital end-to-end yang saya bangun dari awal untuk mengatasi kendala pencatatan manual pada UMKM bengkel. Sistem ini memisahkan hak akses secara dinamis: Owner dapat memantau laporan omzet real-time melalui dashboard analitik, sedangkan Kasir fokus pada transaksi penjualan cepat di menu POS. Dilengkapi dengan fitur pemantauan stok otomatis, integrasi Payment Gateway untuk pembayaran online, serta sistem booking servis yang terintegrasi langsung dengan notifikasi WhatsApp.",
    tech: [
      "React Vite + TypeScript",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "Payment Gateway API",
      "WhatsApp Business API",
    ],
    image: "/demo1.png",
    videoUrl: "https://www.youtube.com/watch?v=fv6b9UYz23s",
    demoUrl: "https://sistem-manajemen-pos-bengkel-motor.vercel.app",
    githubUrl: "https://github.com/AzhuraaaReyy/Sistem-Manajemen-POS-BengkelMotor",
    featured: true,
    mockupType: "dashboard",
  },
  {
    id: "project-2",
    title: "Website Landing Page & Manajemen Admin UMKM Mulya Bakery",
    category: "E-Commerce & UMKM",
    shortDesc: "Sistem e-commerce dan internal untuk modernisasi Mulya Bakery. Dilengkapi fitur ongkir otomatis berbasis jarak (Haversine), manajemen inventaris, moderasi ulasan, dan dashboard analitik penjualan terpusat.",
    longDesc: "Aplikasi web end-to-end yang dirancang untuk digitalisasi bisnis bakery. Menyediakan landing page publik dengan fitur keranjang belanja interaktif yang langsung terhubung ke WhatsApp Checkout (termasuk kalkulasi jarak otomatis menggunakan Haversine & Nominatim). Di sisi manajemen, sistem ini dilengkapi panel Admin (/admin) tangguh untuk mengelola inventaris produk, moderasi ulasan berfoto, penyesuaian biaya pengiriman pesanan, serta visualisasi laporan penjualan berkala.",
    tech: [
      "React Vite + TypeScript",
      "Supabase (BaaS)",
      "Row Level Security (RLS)",
      "Tailwind CSS",
      "MapLibre GL",
      "Framer Motion",
      "PostgreSQL",
    ],
    image: "/demo2.png",
    videoUrl: "https://youtu.be/yXBCTtxpmRE",
    demoUrl: "https://rotimulya.vercel.app/",
    githubUrl: "https://github.com/AzhuraaaReyy/Website_MulyaBakery",
    featured: true,
    mockupType: "dashboard",
  },
  {
    id: "project-stunting-detection",
    title: "GrowthChildCare — Sistem Deteksi & Monitoring Stunting Anak Berbasis Rule-Based Berbasis Web",
    category: "HealthTech",
    shortDesc: "Aplikasi Full-Stack rekam medis digital untuk deteksi dini stunting anak menggunakan mesin inferensi Rule-Based yang divalidasi dengan standar antropometri WHO.",
    longDesc: "Sistem berbasis riset yang saya bangun sebagai Proyek Tugas Akhir Universitas, bekerja sama dengan Puskesmas setempat untuk digitalisasi penanganan stunting. Mengembangkan mesin inferensi berbasis aturan (Rule-Based) yang mengintegrasikan data klinis riil Puskesmas dengan standar pertumbuhan anak World Health Organization (WHO) untuk menjamin akurasi diagnosis status gizi secara real-time. Dilengkapi dengan Dasbor Orang Tua interaktif untuk pemantauan kurva tumbuh kembang anak, serta modul generator otomatis yang memberikan rekomendasi intervensi gizi berbasis indikator stunting.",
    tech: [
      "React Vite + TypeScript",
      "Laravel (REST API)",
      "MySQL",
      "Tailwind CSS",
      "Rule-Based Inference Engine",
      "React Leaflet",
      "Framer Motion",
      "React Recharts",
    ],
    image: "/demo3.png",
    videoUrl: "https://youtu.be/aYD5yEHJ9JI",
    demoUrl: "https://tugas-akhir-web-rho.vercel.app",
    githubUrl: "https://github.com/AzhuraaaReyy/Website-Stunting-Anak",
    featured: true,
    mockupType: "dashboard",
  },
 
];

export const experienceTrack = [
  {
    id: 1,
    year: "2026",
    isActive: true,
    title: "Solusi Enterprise & Arsitektur Cloud",
    subtitle: "Global Clients & Large Scale",
    description: "Memimpin perancangan sistem backend microservices, otomatisasi cloud pipelines multi-region, dan arsitektur keamanan finansial berskala jutaan pengguna aktif harian.",
    tags: ["Kubernetes", "AWS Cloud", "Terraform"],
    icon: "Cloud"
  },
  {
    id: 2,
    year: "2026",
    isActive: false,
    title: "Transformasi Digital & AI Integration",
    subtitle: "SaaS & Modern Web Architecture",
    description: "Mengintegrasikan alur kerja otomatis dengan kecerdasan buatan (LLM APIs) dan rekayasa platform web interaktif untuk akselerasi efisiensi operasional korporat.",
    tags: ["OpenAI API", "Next.js 14", "Vector DB"],
    icon: "BrainCircuit"
  },
  {
    id: 3,
    year: "2026",
    isActive: false,
    title: "Konsultan Web & Mobile App",
    subtitle: "Startup Ecosystem & FinTech",
    description: "Membangun MVP berkualitas tinggi untuk venture-backed startups dengan kecepatan peluncuran pasar, kepatuhan, dan kestabilan kode modular.",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    icon: "Smartphone"
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Lead",
    description: "Inisiasi awal, observasi peluang & penjajakan solusi digital.",
    icon: "Search"
  },
  {
    number: "02",
    title: "Konsultasi",
    description: "Analisis kebutuhan bisnis mendalam & arsitektur teknis.",
    icon: "MessageSquare"
  },
  {
    number: "03",
    title: "Proposal & Quotation",
    description: "Lingkup teknis, SLA, estimasi biaya & jadwal kerja.",
    icon: "FileText"
  },
  {
    number: "04",
    title: "Deal & Contract",
    description: "Penandatanganan kontrak kerja sama & pakta NDA.",
    icon: "CheckSquare"
  },
  {
    number: "05",
    title: "Down Payment",
    description: "Konfirmasi deposit, alokasi tim & setup sprint awal.",
    icon: "CreditCard"
  },
  {
    number: "06",
    title: "Design & Dev",
    description: "UI/UX interaktif, arsitektur kode & pengembangan sistem.",
    icon: "Code"
  },
  {
    number: "07",
    title: "Testing",
    description: "Uji performa, QA automation & audit keamanan siber.",
    icon: "ShieldCheck"
  },
  {
    number: "08",
    title: "Client Review",
    description: "Sesi UAT terstruktur dan review komprehensif.",
    icon: "Eye"
  },
  {
    number: "09",
    title: "Launch",
    description: "Deployment live ke cloud server & verifikasi domain.",
    icon: "Rocket"
  },
  {
    number: "10",
    title: "Maintenance",
    description: "Dukungan teknis 24/7 & pembaruan berkesinambungan.",
    icon: "Headphones"
  }
];

export const contactInfo = {
  email: "info@labstech.id",
  phone: "+62 21 8900 1234",
  location: "Semarang, Jawa Tengah",
  socials: [
    { name: "GitHub", icon: "Github", url: "https://github.com" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" },
    { name: "X", icon: "Twitter", url: "https://x.com" },
    { name: "Email", icon: "Mail", url: "mailto:info@labstech.id" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com" },
    { name: "TikTok", icon: "Video", url: "https://tiktok.com" }
  ]
};
