import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/labstechData';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center space-x-2.5 group">
            <img src="/logo.png" alt="Labstech Logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
            <span className="text-2xl font-extrabold tracking-tight text-[#101B3D]">
              Labs<span className="text-[#042C94]">tech.</span>
            </span>
          </a>

          {/* Desktop Navigation Menu (Gooey Nav Style) */}
          <nav className="hidden lg:flex items-center space-x-1 p-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-[#101B3D]/80 hover:text-[#042C94]'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-[#042C94] rounded-full z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#kontak"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#042C94] text-white text-sm font-semibold hover:bg-[#101B3D] transition-colors shadow-sm group"
            >
              Hubungi Kami
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#101B3D] hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#042C94]/10 text-[#042C94]'
                    : 'text-[#101B3D] hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-5 py-3 rounded-full bg-[#042C94] text-white text-base font-semibold hover:bg-[#101B3D] transition-colors shadow-sm"
            >
              Hubungi Kami
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
