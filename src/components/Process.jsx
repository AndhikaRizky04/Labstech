import React from 'react';
import { processSteps } from '../data/labstechData';
import {
  Search,
  MessageSquare,
  FileText,
  CheckSquare,
  CreditCard,
  Code,
  ShieldCheck,
  Eye,
  Rocket,
  Headphones,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Search,
  MessageSquare,
  FileText,
  CheckSquare,
  CreditCard,
  Code,
  ShieldCheck,
  Eye,
  Rocket,
  Headphones
};

export default function Process() {
  return (
    <section id="proses" className="py-20 lg:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-left space-y-4 mb-16">
          <div className="flex flex-wrap items-center gap-4">
            <span className="hidden sm:block w-10 h-[3px] bg-[#042C94]" />
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#101B3D] tracking-tight">
              Proses Kerja Kami
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#042C94] text-xs font-semibold shadow-sm border border-slate-200">
              <ArrowRight className="w-3.5 h-3.5" />
              10 Tahap Rekayasa Terstruktur
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-500 max-w-2xl sm:ml-14">
            Standar alur kerja end-to-end transparan, terukur, dan adaptif dari formulasi gagasan hingga pemeliharaan sistem skala enterprise.
          </p>
        </div>

        {/* 10-Step Horizontal Timeline */}
        <div className="relative pt-6 pb-12 overflow-x-auto no-scrollbar">
          {/* Connecting Line background */}
          <div className="hidden lg:block absolute top-[54px] left-12 right-12 h-1 bg-[#042C94]/20 z-0" />

          <div className="flex space-x-6 lg:space-x-4 min-w-max lg:min-w-0 px-2 lg:px-0">
            {processSteps.map((step) => {
              const IconComponent = iconMap[step.icon] || Code;
              return (
                <div
                  key={step.number}
                  className="relative z-10 w-64 lg:w-auto lg:flex-1 bg-transparent rounded-none p-0 flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#042C94] text-[#042C94] flex flex-col items-center justify-center shadow-md mb-4 group-hover:bg-[#042C94] group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6 mb-0.5" />
                    <span className="text-[10px] font-black tracking-wider">{step.number}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[13px] font-extrabold text-[#101B3D] mb-1 group-hover:text-[#042C94] transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[10px] text-slate-500 leading-relaxed max-w-[120px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
