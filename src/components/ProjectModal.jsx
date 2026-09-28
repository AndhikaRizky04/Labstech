import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Play, ExternalLink } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

const toEmbedUrl = (url) => {
  if (!url) return '';
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtube.com') || u.hostname === 'youtu.be') {
      let id = '';
      if (u.hostname === 'youtu.be') {
        id = u.pathname.replace(/^\//, '');
      } else if (u.pathname === '/watch') {
        id = u.searchParams.get('v') || '';
      }
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (u.hostname.includes('vimeo.com')) {
      const id = u.pathname.split('/').filter(Boolean)[0] || '';
      if (id) return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return url;
  } catch {
    return url;
  }
};

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prevFocus = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);

    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
      prevFocus?.focus();
    };
  }, [onClose]);

  const embedUrl = toEmbedUrl(project.videoUrl);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-modal-${project.id}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#101B3D]/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        initial={{ scale: 0.95, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 16 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 py-4 sm:px-6 bg-white/95 backdrop-blur border-b border-slate-100 rounded-t-2xl">
          <div className="flex items-center gap-3 min-w-0">
            <h3
              id={`project-modal-${project.id}`}
              className="text-lg sm:text-xl font-extrabold text-[#101B3D] tracking-tight truncate"
            >
              {project.title}
            </h3>
            <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#042C94]/10 text-[#042C94]">
              {project.category}
            </span>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-[#F8FAFC] text-[#101B3D] hover:bg-[#042C94] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#042C94] focus-visible:ring-offset-2"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video */}
        <div className="aspect-video bg-[#101B3D]">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={`Video demo ${project.title}`}
              className="w-full h-full"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-slate-400">
              <Play className="w-10 h-10" />
              <p className="text-sm text-center px-4">Video demo belum tersedia</p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5 sm:p-7">
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            {project.longDesc || project.shortDesc}
          </p>
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-[#042C94]/10 text-[#101B3D]/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#042C94] hover:text-[#101B3D] transition-colors focus-visible:ring-2 focus-visible:ring-[#042C94] focus-visible:ring-offset-2 rounded-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  Buka Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101B3D] hover:text-[#042C94] transition-colors focus-visible:ring-2 focus-visible:ring-[#042C94] focus-visible:ring-offset-2 rounded-md"
                >
                  <GithubIcon className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}