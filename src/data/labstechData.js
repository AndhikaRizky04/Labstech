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
    id: 1,
    title: "BigBrains",
    category: "EduTech Platform",
    description: "Platform e-learning interaktif dengan analitik real-time progress siswa, kurikulum adaptif, dan multi-gateway settlement.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    mockupType: "edutech"
  },
  {
    id: 2,
    title: "BoardInsight Enterprise",
    category: "BI & SaaS",
    description: "Dashboard visualisasi data metrik kinerja dan analitik bisnis terpusat untuk efisiensi pengambilan keputusan manajerial.",
    tags: ["Next.js", "Recharts", "Node.js"],
    mockupType: "dashboard"
  },
  {
    id: 3,
    title: "PGS Mobile & Web Suite",
    category: "Security & FinTech",
    description: "Aplikasi keamanan, proteksi DRM berkas, dan enkripsi data transaksi terintegrasi regulasi perbankan.",
    tags: ["Next.js", "MongoDB", "Stripe"],
    mockupType: "security"
  }
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
