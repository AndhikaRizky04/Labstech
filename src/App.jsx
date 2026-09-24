import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Process from './components/Process';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import LogoLoop from './components/LogoLoop';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#101B3D] font-sans selection:bg-[#042C94] selection:text-white relative">
      {/* Global Texture & Animation Styles */}
      <style>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E");
        }
        @keyframes gradient-wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-wave {
          background: linear-gradient(110deg, #F8FAFC 0%, #E8EEFB 25%, #F8FAFC 50%, #E1E9F9 75%, #F8FAFC 100%);
          background-size: 400% 400%;
          animation: gradient-wave 15s ease-in-out infinite;
        }
      `}</style>

      {/* Overlay noise texture that covers the whole app */}
      <div className="fixed inset-0 z-50 pointer-events-none bg-noise mix-blend-multiply"></div>

      {/* 1. Navbar */}
      <Navbar />

      {/* Main Sections with smooth scroll targets & Framer Motion fade-in on scroll */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* Logo Loop Separator */}
        <LogoLoop />

        {/* 3. Tentang Kami */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.div>

        {/* 4. Teknologi & Standar Arsitektur */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <TechStack />
        </motion.div>

        {/* 5. Karya Unggulan (Portfolio Carousel) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Portfolio />
        </motion.div>

        {/* 6. Pengalaman & Rekam Jejak */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Experience />
        </motion.div>

        {/* 7. Proses Kerja Kami */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Process />
        </motion.div>

        {/* 8. CTA Kontak */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <ContactCTA />
        </motion.div>
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default App;
