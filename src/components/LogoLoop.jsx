import React from 'react';

const technologies = [
  "WEB DEVELOPMENT", "UI/UX DESIGN", "CLOUD ARCHITECTURE", "IT CONSULTING",
  "MOBILE APPS", "ENTERPRISE SOLUTIONS", "DATA ANALYTICS", "SYSTEM INTEGRATION"
];

export default function LogoLoop() {
  return (
    <div className="w-full overflow-hidden bg-[#F8FAFC] border-y border-slate-200 py-5 relative flex items-center z-20">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-loop {
          display: flex;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }
      `}</style>

      {/* Fading Edges for smooth blending */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

      <div className="animate-loop flex items-center">
        {[...technologies, ...technologies, ...technologies, ...technologies].map((text, idx) => (
          <div key={idx} className="flex items-center mx-6 md:mx-12 shrink-0">
            <span className="text-xs md:text-sm font-extrabold text-[#042C94] tracking-[0.2em] whitespace-nowrap opacity-80">
              {text}
            </span>
            <span className="ml-12 md:ml-24 w-1.5 h-1.5 rounded-full bg-blue-200"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
