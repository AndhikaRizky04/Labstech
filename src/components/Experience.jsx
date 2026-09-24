import React, { useRef, useState } from 'react';
import { experienceTrack } from '../data/labstechData';
import { Cloud, BrainCircuit, Smartphone, ChevronLeft, ChevronRight, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Cloud,
  BrainCircuit,
  Smartphone
};

export default function Experience() {
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
      setActiveIndex(Math.min(Math.max(newIndex, 0), experienceTrack.length - 1));
    }
  };

  return (
    <section id="pengalaman" className="py-20 lg:py-32 bg-white overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="hidden sm:block w-10 h-[3px] bg-[#042C94]" />
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#101B3D] tracking-tight">
                Pengalaman & Rekam Jejak
              </h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#042C94] text-xs font-semibold shadow-sm border border-slate-200">
                <ArrowRight className="w-3.5 h-3.5" />
                Geser untuk melihat semua pengalaman kami
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl sm:ml-14">
              Perjalanan dedikasi dan rekam jejak inovasi teknologi yang kami bangun bersama berbagai mitra dan industri.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white text-[#101B3D] flex items-center justify-center hover:bg-[#042C94] hover:text-white transition-colors shadow-xs"
              aria-label="Previous experience"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white text-[#101B3D] flex items-center justify-center hover:bg-[#042C94] hover:text-white transition-colors shadow-xs"
              aria-label="Next experience"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Experience Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScrollDetect}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth pb-8 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        >
          {experienceTrack.map((exp) => {
            const IconComponent = iconMap[exp.icon] || Cloud;
            return (
              <motion.div
                key={exp.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="w-[85vw] sm:w-[420px] lg:w-[460px] shrink-0 snap-start bg-[#F8FAFC] hover:bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Year & Badges */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#042C94]/10 text-[#042C94] text-xs font-bold">
                      {exp.year}
                    </span>
                    {exp.isActive && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                        Aktif
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-xl bg-[#042C94]/10 text-[#042C94] flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#101B3D] tracking-tight mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-bold text-[#042C94] mb-4">
                    {exp.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-[#042C94]/10 text-[#101B3D]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Bottom Indicator */}
        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
          <div className="flex space-x-2">
            {experienceTrack.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-[#042C94]' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-slate-500">
            Gunakan tombol panah atau geser ke samping untuk melihat seluruhnya
          </p>
        </div>
      </div>
    </section>
  );
}
