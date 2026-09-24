import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import GradientWaves from './GradientWaves';

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 bg-transparent overflow-hidden">
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 100%; }
          100% { left: 100%; }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>

      {/* Gradient Waves WebGL Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.85]">
        <GradientWaves
          horizonColor="#FFFFFF"
          waveColor="#3B82F6"
          crestColor="#042C94"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center text-sm font-semibold">
              <span className="text-[#101B3D]">Halo, Kami</span>
              <span className="ml-2.5 w-6 h-[2px] bg-[#042C94] inline-block"></span>
            </div>

            <h1 className="relative block w-fit text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
              <span className="text-[#101B3D]">Labs</span><span className="text-[#042C94]">tech.</span>
              <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg] animate-shine" style={{ left: '-100%' }}></div>
              </div>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-[#042C94] tracking-tight">
              Software House & Konsultan Rekayasa Digital
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Kami membangun produk digital inovatif yang memecahkan masalah nyata dan memberikan dampak berkelanjutan. Mulai dari ide hingga deployment, kami menghadirkan solusi teknologi yang tangguh, aman, dan estetis.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#portofolio"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#042C94] text-white font-semibold text-base shadow-md hover:bg-[#101B3D] hover:shadow-lg transition-all group"
              >
                Lihat Portofolio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#kontak"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-transparent text-[#042C94] font-semibold text-base border border-[#042C94] shadow-xs hover:bg-[#042C94] hover:text-white transition-colors group"
              >
                Unduh Company Profile
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Vector Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <img src="/assetbanner.png" alt="Hero Banner" className="w-full max-w-[480px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
