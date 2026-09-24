import React from 'react';
import { BookOpen, BarChart3, ShieldCheck, Lock, Activity, Users, ArrowUpRight } from 'lucide-react';

export default function ProjectMockup({ type }) {
  if (type === 'edutech') {
    return (
      <div className="w-full h-48 bg-[#F4F6FC] rounded-xl p-3 border border-slate-200 overflow-hidden flex flex-col justify-between select-none">
        {/* Top Navbar */}
        <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg shadow-2xs border border-slate-100">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-md bg-[#2F4CDD] flex items-center justify-center text-white text-xs font-bold">
              B
            </div>
            <span className="text-xs font-bold text-[#101B3D]">BigBrains Learn</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">Live Class</span>
            <div className="w-5 h-5 rounded-full bg-slate-200" />
          </div>
        </div>

        {/* Content area */}
        <div className="grid grid-cols-3 gap-2 my-2">
          {/* Main Course Card */}
          <div className="col-span-2 bg-white p-2.5 rounded-lg border border-slate-100 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] text-slate-500 font-medium">Modul Aktif #04</p>
                <p className="text-xs font-bold text-[#101B3D] truncate">Arsitektur Cloud & Microservices</p>
              </div>
              <BookOpen className="w-4 h-4 text-[#2F4CDD]" />
            </div>

            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-slate-600 mb-1">
                <span>Progress Belajar</span>
                <span className="font-bold text-[#2F4CDD]">85%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#2F4CDD] rounded-full w-[85%]" />
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <div className="bg-[#101B3D] text-white p-2.5 rounded-lg flex flex-col justify-between">
            <p className="text-[9px] text-slate-300">Siswa Aktif</p>
            <p className="text-base font-extrabold">12.4k</p>
            <div className="flex -space-x-1 overflow-hidden mt-1">
              <div className="inline-block h-4 w-4 rounded-full ring-1 ring-white bg-blue-400" />
              <div className="inline-block h-4 w-4 rounded-full ring-1 ring-white bg-emerald-400" />
              <div className="inline-block h-4 w-4 rounded-full ring-1 ring-white bg-amber-400" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between text-[10px] text-slate-500 bg-white/70 px-2 py-1 rounded-md">
          <span>Real-time Analytics Engine</span>
          <span className="text-[#2F4CDD] font-medium flex items-center gap-0.5">Adaptif AI <ArrowUpRight className="w-3 h-3" /></span>
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className="w-full h-48 bg-[#F4F6FC] rounded-xl p-3 border border-slate-200 overflow-hidden flex flex-col justify-between select-none">
        {/* Top Navbar */}
        <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg stroke-slate-100 shadow-2xs">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4 text-[#2F4CDD]" />
            <span className="text-xs font-bold text-[#101B3D]">BoardInsight Executive</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-semibold text-slate-600">Q3 Realtime</span>
          </div>
        </div>

        {/* Mock Chart & Stats */}
        <div className="grid grid-cols-3 gap-2 my-2">
          {/* Main Chart Graphic */}
          <div className="col-span-2 bg-white p-2.5 rounded-lg border border-slate-100 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-[#101B3D]">Revenue & Growth</span>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">+24.5%</span>
            </div>
            {/* SVG Bars / Sparkline */}
            <div className="h-16 w-full flex items-end justify-between gap-1 pt-2">
              <div className="w-full bg-[#EEF1FA] rounded-t h-[40%]" />
              <div className="w-full bg-[#EEF1FA] rounded-t h-[60%]" />
              <div className="w-full bg-[#2F4CDD] opacity-40 rounded-t h-[50%]" />
              <div className="w-full bg-[#2F4CDD] opacity-70 rounded-t h-[80%]" />
              <div className="w-full bg-[#2F4CDD] rounded-t h-[100%]" />
            </div>
          </div>

          {/* Side Widget */}
          <div className="bg-white p-2.5 rounded-lg border border-slate-100 flex flex-col justify-between">
            <p className="text-[9px] text-slate-400 font-medium">Efficiency Index</p>
            <div>
              <p className="text-sm font-black text-[#101B3D]">98.2%</p>
              <p className="text-[9px] text-emerald-600 font-medium">Optimal KPI</p>
            </div>
            <Activity className="w-4 h-4 text-[#2F4CDD] opacity-80" />
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[10px] text-slate-500 bg-white/70 px-2 py-1 rounded-md">
          <span>Enterprise Decision Engine</span>
          <span className="font-semibold text-slate-700">Multi-tenant</span>
        </div>
      </div>
    );
  }

  // Security / PGS Mobile & Web Suite
  return (
    <div className="w-full h-48 bg-[#F4F6FC] rounded-xl p-3 border border-slate-200 overflow-hidden flex flex-col justify-between select-none">
      {/* Top Navbar */}
      <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg shadow-2xs border border-slate-100">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-bold text-[#101B3D]">PGS DRM Vault</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-[#2F4CDD] font-bold">256-bit AES</span>
      </div>

      {/* Main Security Card */}
      <div className="bg-white p-3 rounded-lg border border-slate-100 my-2 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-[#101B3D] flex items-center justify-center text-white shrink-0">
          <Lock className="w-5 h-5 text-[#2F4CDD]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <p className="text-xs font-bold text-[#101B3D] truncate">Enkripsi Data Bank</p>
            <span className="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded">TERVERIFIKASI</span>
          </div>
          <p className="text-[10px] text-slate-500 truncate mt-0.5">Proteksi DRM Berkas & Audit Log Realtime</p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-[10px] text-slate-500 bg-white/70 px-2 py-1 rounded-md">
        <span>ISO 27001 & RegBank Compliant</span>
        <span className="text-emerald-600 font-bold">100% Secure</span>
      </div>
    </div>
  );
}
