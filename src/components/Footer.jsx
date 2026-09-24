import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 text-[#101B3D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-100">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#beranda" className="flex items-center space-x-2.5">
              <img src="/logo.png" alt="Labstech Logo" className="h-9 w-auto" />
              <span className="text-2xl font-extrabold tracking-tight text-[#101B3D]">
                Labs<span className="text-[#042C94]">tech.</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Mitra rekayasa teknologi dan konsultan perangkat lunak andalan untuk bisnis yang siap bertumbuh dengan arsitektur modern, tangguh, dan skalabel.
            </p>
          </div>

          {/* Column 2: Navigasi */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-[#101B3D]">
              NAVIGASI
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>
                <a href="#beranda" className="hover:text-[#042C94] transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-[#042C94] transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-[#042C94] transition-colors">Portofolio</a>
              </li>
              <li>
                <a href="#teknologi" className="hover:text-[#042C94] transition-colors">Layanan & Solusi</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#042C94] transition-colors">Karir & Peluang</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Layanan Rekayasa */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-[#101B3D]">
              LAYANAN REKAYASA
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>Web Engineering & Microservices</li>
              <li>UI/UX Design & System Design</li>
              <li>AI & Data Analytics Integration</li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-[#101B3D]">
              TETAP TERHUBUNG
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Dapatkan wawasan teknologi terbaru dan studi kasus rekayasa digital secara langsung di email Anda.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="nama@perusahaan.com"
                  required
                  className="w-full px-4 py-2.5 rounded-sm bg-white border border-slate-200 text-sm text-[#101B3D] placeholder:text-slate-400 focus:outline-none focus:border-[#042C94] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-2.5 rounded-sm bg-[#042C94] text-white text-xs font-bold hover:bg-[#101B3D] transition-colors shadow-sm"
              >
                {subscribed ? (
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4" /> Terkirim! Terima kasih
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    Kirim
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
          <div>
            © 2026 Labstech Inc.
          </div>
          <div className="flex flex-wrap items-center space-x-6">
            <a href="#" className="hover:text-[#042C94] transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[#042C94] transition-colors">Syarat & Ketentuan</a>
            <span>Dibuat dengan dedikasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
