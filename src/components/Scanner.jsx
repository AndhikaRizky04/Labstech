import React from 'react';

export default function Scanner() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes scan-line {
          0% { transform: translateY(-150%); }
          50% { transform: translateY(300%); }
          100% { transform: translateY(-150%); }
        }
      `}</style>

      {/* Subtle background to support the scanner */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#EEF2FF]/40 to-[#F8FAFC]" />

      {/* Scanner Beam */}
      <div
        className="absolute top-0 left-0 w-full h-[30vh] sm:h-[45vh]"
        style={{
          animation: 'scan-line 8s ease-in-out infinite',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(4,44,148, 0.02) 60%, rgba(4,44,148, 0.15) 98%, rgba(4,44,148, 0.8) 100%)',
        }}
      >
        {/* Glowing Laser Edge */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#042C94] shadow-[0_0_30px_8px_rgba(4,44,148,0.4)] blur-[1px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.8)]"></div>
      </div>
    </div>
  );
}
