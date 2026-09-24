import React from 'react';
import { aboutPoints } from '../data/labstechData';
import { Zap, Target, Code2, BookOpen, Users, Sparkles } from 'lucide-react';

const iconMap = {
  Zap,
  Target,
  Code2,
  BookOpen,
  Users,
  Sparkles
};

export default function About() {
  return (
    <section id="tentang-kami" className="py-20 lg:py-32 animate-gradient-wave">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <img src="/tentangkami.png" alt="Tentang Kami" className="w-full max-w-[420px] h-auto object-contain" />
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-3 text-xs sm:text-sm font-bold tracking-wider text-[#042C94] uppercase">
                <span className="w-8 h-[2px] bg-[#042C94]" />
                <span>TENTANG KAMI</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101B3D] tracking-tight leading-tight">
                Membangun Website Digital yang Inovatif, Andal, dan Berkelanjutan
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Berdedikasi dalam menciptakan solusi perangkat lunak yang fungsional, efisien, dan berskala tinggi dengan pengalaman pengguna yang luar biasa. Kami mencintai teknologi mutakhir yang mendorong inovasi web dan sistem modern ke level berikutnya untuk membantu korporasi bertumbuh secara tangkas.
              </p>

              {/* 3 columns x 2 rows grid of points */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 pt-4">
                {aboutPoints.map((point) => {
                  const IconComponent = iconMap[point.iconName] || Zap;
                  return (
                    <div
                      key={point.title}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 rounded-md bg-[#042C94]/10 text-[#042C94] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#101B3D]">{point.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
