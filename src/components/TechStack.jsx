import React, { useState } from 'react';
import { techStack } from '../data/labstechData';
import { Server, Atom, Layers, Cpu, Palette, Database, Box } from 'lucide-react';

const iconMap = {
  Server,
  Atom,
  Layers,
  Cpu,
  Palette,
  Database,
  Box
};

export default function TechStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="teknologi" className="py-20 lg:py-28 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center space-x-4">
          <span className="hidden sm:block w-10 h-[3px] bg-[#042C94]" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101B3D] tracking-tight">
            Teknologi & Standar Arsitektur
          </h2>
        </div>

        {/* Accordion Gallery dari React Bits */}
        <div className="flex flex-col sm:flex-row h-[600px] sm:h-[360px] lg:h-[400px] w-full gap-2 sm:gap-3 lg:gap-4">
          {techStack.map((tech, index) => {
            const isActive = activeIndex === index;
            const IconComponent = iconMap[tech.icon] || Box;

            return (
              <div
                key={tech.name}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border ${
                  isActive
                    ? 'flex-[5] sm:flex-[4] lg:flex-[3] bg-[#042C94] border-[#042C94] shadow-lg'
                    : 'flex-[1] bg-[#F8FAFC] border-slate-200 hover:bg-[#EEF2FF] shadow-sm'
                }`}
              >
                {/* Konten saat Aktif */}
                <div
                  className={`flex flex-col items-center justify-center transition-opacity duration-500 delay-150 ${
                    isActive ? 'opacity-100 w-full px-4' : 'opacity-0 absolute pointer-events-none'
                  }`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 text-white flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-sm border border-white/20 shadow-inner">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white mb-1 tracking-tight text-center whitespace-nowrap">
                    {tech.label}
                  </h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm font-semibold text-blue-200 text-center whitespace-nowrap uppercase tracking-wider">
                    {tech.type}
                  </p>
                </div>

                {/* Ikon saat Inaktif */}
                <div
                  className={`absolute transition-opacity duration-300 ${
                    isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  } flex items-center justify-center w-full h-full`}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#101B3D]/70" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
