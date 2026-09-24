import React from 'react';
import { contactInfo } from '../data/labstechData';
import { Mail, Phone, MapPin } from 'lucide-react';

const SocialIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      );
    case 'X':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'Email':
      return <Mail className="w-4 h-4" />;
    case 'Instagram':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'TikTok':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      );
    default:
      return <Mail className="w-4 h-4" />;
  }
};

export default function ContactCTA() {
  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left side: Heading & CTA text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-[#101B3D] tracking-tight leading-[1.1]">
              Mari bangun sesuatu<br className="hidden lg:block" />
              yang berdampak<br className="hidden lg:block" />
              <span className="text-[#042C94] relative inline-block">
                bersama.
                <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-[#042C94]"></span>
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-sm pt-2">
              Punya gagasan produk baru atau ingin memperbarui infrastruktur perangkat lunak Anda? Tim ahli kami siap berkolaborasi.
            </p>
          </div>

          {/* Right side Wrapper */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col sm:flex-row gap-10 sm:gap-16 pt-4 lg:pt-0">
            {/* Middle side: Direct Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] text-[#042C94] flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-sm font-semibold text-slate-600 hover:text-[#042C94] transition-colors">
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] text-[#042C94] flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-semibold text-slate-600 hover:text-[#042C94] transition-colors">
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] text-[#042C94] flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-slate-600">
                  {contactInfo.location}
                </p>
              </div>
            </div>

            {/* Right side: Social Channels */}
            <div className="flex-1">
              <span className="text-[11px] font-extrabold text-[#101B3D] uppercase tracking-wider block mb-4">
                KANAL TERHUBUNG
              </span>
              <div className="flex flex-wrap gap-3 max-w-[180px]">
                {contactInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F8FAFC] text-[#101B3D] flex items-center justify-center border border-slate-200 shadow-sm hover:bg-[#042C94] hover:text-white transition-colors"
                    title={social.name}
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
