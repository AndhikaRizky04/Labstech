import React, { useRef, useState } from 'react';
import { portfolioProjects } from '../data/labstechData';
import { ExternalLink, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectMockup from './illustrations/ProjectMockup';

export default function Portfolio() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleScrollDetect = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.clientWidth * 0.75;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), portfolioProjects.length - 1));
    }
  };

  return (
    <section id="portofolio" className="py-20 lg:py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="hidden sm:block w-10 h-[3px] bg-[#042C94]" />
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#101B3D] tracking-tight">
                Karya Unggulan
              </h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-[#042C94] text-xs font-semibold">
                <ArrowRight className="w-3.5 h-3.5" />
                Geser untuk melihat karya
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl sm:ml-14">
              Kompilasi sistem enterprise, aplikasi cloud modern, dan solusi digital berdampak tinggi.
            </p>
          </div>

          {/* Right Controls: Arrow Buttons & View All */}
          <div className="flex items-center space-x-4">
            <a
              href="#kontak"
              className="hidden sm:inline-flex items-center text-sm font-bold text-[#101B3D] hover:text-[#042C94] transition-colors group"
            >
              Lihat Semua Proyek
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white text-[#101B3D] flex items-center justify-center hover:bg-[#042C94]/10 hover:border-[#042C94] transition-colors shadow-xs"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white text-[#101B3D] flex items-center justify-center hover:bg-[#042C94]/10 hover:border-[#042C94] transition-colors shadow-xs"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Draggable & Scrollable Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScrollDetect}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth pb-8 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        >
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="w-[85vw] sm:w-[420px] lg:w-[460px] shrink-0 snap-start bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all p-6 flex flex-col justify-between"
            >
              {/* Card Top: Mockup */}
              <div>
                <div className="relative mb-6">
                  <span className="absolute top-3 right-3 z-10 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/90 text-[#042C94] shadow-xs backdrop-blur-xs border border-slate-100">
                    {project.category}
                  </span>
                  <ProjectMockup type={project.mockupType} />
                </div>

                {/* Project Header */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#101B3D] tracking-tight">
                    {project.title}
                  </h3>
                  <a
                    href="#kontak"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-[#042C94] hover:bg-[#042C94]/10 transition-colors"
                    title="Detail Proyek"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-[#042C94]/10 text-[#101B3D]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Bottom Indicator & Helper text */}
        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
          <div className="flex space-x-2">
            {portfolioProjects.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-[#042C94]' : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-slate-400">
            Gunakan tombol panah atau geser ke samping
          </p>
        </div>
      </div>
    </section>
  );
}
