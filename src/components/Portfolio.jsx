import React, { useState, useCallback, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { portfolioProjects } from "../data/labstechData";
import ProjectMockup from "./illustrations/ProjectMockup";

const EASE = [0.22, 1, 0.36, 1];
const SWIPE_THRESHOLD = 50;

/* Responsive Card Dimensions (Disesuaikan agar muat vertikal di laptop) */
const CARD_SIZE_CLASSES =
  "w-[140px] sm:w-[170px] lg:w-[190px] xl:w-[210px] aspect-[3/4.2]";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

function ProjectMedia({ project, className = "" }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (project.image && !imgFailed) {
    return (
      <img
        src={project.image}
        alt={project.title}
        onError={() => setImgFailed(true)}
        loading="lazy"
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-[#EAF0FF] ${className}`}
    >
      <ProjectMockup type={project.mockupType} />
    </div>
  );
}

function getWrapOffset(index, activeIndex, total) {
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function PortfolioHeader({ prefersReducedMotion }) {
  const headerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE },
    },
  };

  return (
    <motion.div
      variants={headerVariants}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="mb-4 lg:mb-6"
    >
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#123B9B] mb-2"
      >
        <span className="w-6 h-[2px] bg-[#123B9B] rounded-full" />
        PORTOFOLIO
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-[clamp(24px,3vw,40px)] leading-[1.2] font-bold tracking-[-0.03em] text-[#10213F] max-w-[680px] mb-2"
      >
        Karya Nyata, Solusi Digital
        <br className="hidden sm:block" /> untuk Berbagai Kebutuhan
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-[#66758F] font-normal leading-[1.5] max-w-[560px] text-xs sm:text-sm md:text-base"
      >
        Berbagai proyek pilihan yang kami rancang untuk membantu bisnis dan
        organisasi mencapai efisiensi dan transformasi digital secara
        berkelanjutan.
      </motion.p>
    </motion.div>
  );
}

function ProjectInfoPanel({ project, onClose, prefersReducedMotion }) {
  const panelVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: EASE },
    },
    exit: {
      opacity: 0,
      x: 15,
      transition: { duration: 0.25, ease: EASE },
    },
  };

  return (
    <motion.div
      key={project.id}
      variants={panelVariants}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      animate="visible"
      exit="exit"
      className="flex flex-col justify-center bg-white border border-[#E2E8F0] lg:border-none p-5 lg:p-2 rounded-2xl shadow-xl lg:shadow-none min-h-[360px]"
    >
      <div className="flex items-center justify-between gap-4 mb-3">
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center bg-[#EAF0FF] text-[#123B9B] px-3 py-1 rounded-full text-xs font-semibold"
        >
          {project.category}
        </motion.span>

        <motion.button
          variants={itemVariants}
          onClick={onClose}
          aria-label="Tutup detail proyek"
          className="w-7 h-7 shrink-0 rounded-full border border-[#E2E8F0] bg-white text-[#66758F] flex items-center justify-center hover:bg-[#123B9B] hover:text-white transition-colors duration-200"
        >
          <X className="w-3.5 h-3.5" />
        </motion.button>
      </div>

      <motion.h3
        variants={itemVariants}
        className="text-xl md:text-2xl font-bold text-[#10213F] tracking-tight leading-snug mb-2"
      >
        {project.title}
      </motion.h3>

      <motion.p
        variants={itemVariants}
        className="text-[#66758F] text-xs md:text-sm leading-relaxed mb-4"
      >
        {project.shortDesc}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-[#475569] mb-5"
      >
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-[#F1F5F9] border border-[#E2E8F0] rounded-md text-[#475569]"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-3"
      >
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#123B9B] text-white px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-[#0B2E82] transition-colors duration-200 shadow-md"
          >
            Lihat Demo
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        ) : (
          <span className="text-gray-400 text-xs font-medium italic">
            Demo belum tersedia
          </span>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#66758F] text-xs md:text-sm font-semibold hover:text-[#123B9B] transition-colors duration-200"
          >
            Source Code
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const sectionRef = useRef(null);
  const total = portfolioProjects.length;

  const activeProject = portfolioProjects[activeIndex];
  const isSelected = isDesktop && panelOpen;

  const pad = (val) => String(val).padStart(2, "0");

  const goTo = useCallback(
    (index) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  const selectProject = useCallback((index) => {
    setActiveIndex(index);
    setPanelOpen(true);
  }, []);

  const closePanel = useCallback(() => setPanelOpen(false), []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setPanelOpen(false);
        }
      },
      {
        threshold: 0,
        rootMargin: "100px 0px 100px 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isVisible) return;

      if (e.key === "Escape" && panelOpen) closePanel();
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "Enter" && !panelOpen) setPanelOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closePanel, goNext, goPrev, panelOpen]);

  const handleDragEnd = (_event, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goNext();
    else if (info.offset.x > SWIPE_THRESHOLD) goPrev();
  };

  const cardTargets = (offset, isShifted) => {
    const distance = Math.abs(offset);
    const side = offset > 0 ? 1 : -1;

    const gap1 = isShifted ? 70 : 100;
    const gap2 = isShifted ? 130 : 185;

    if (distance === 0) {
      return {
        x: "0%",
        rotateY: 0,
        z: 70,
        scale: isShifted ? 0.95 : 1,
        opacity: 1,
        zIndex: 30,
        filter: "blur(0px)",
        transformPerspective: 1000,
      };
    }

    if (distance === 1) {
      return {
        x: `${side * gap1}%`,
        rotateY: side * -22,
        z: -50,
        scale: isShifted ? 0.82 : 0.85,
        opacity: isShifted && side > 0 ? 0.25 : 0.95,
        zIndex: 20,
        filter: "blur(0px)",
        transformPerspective: 1000,
      };
    }

    if (distance === 2) {
      return {
        x: `${side * gap2}%`,
        rotateY: side * -32,
        z: -120,
        scale: isShifted ? 0.68 : 0.72,
        opacity: isShifted && side > 0 ? 0.05 : 0.75,
        zIndex: 10,
        filter: "blur(0px)",
        transformPerspective: 1000,
      };
    }

    return {
      x: `${side * (gap2 + (distance - 2) * 55)}%`,
      rotateY: side * -40,
      z: -180,
      scale: 0.6,
      opacity: 0,
      zIndex: 0,
      filter: "blur(2px)",
      transformPerspective: 1000,
    };
  };

  return (
    <section
      id="portofolio"
      ref={sectionRef}
      className="py-6 sm:py-8 lg:py-10 bg-[#FFFFFF] overflow-hidden isolate min-h-[100vh] lg:min-h-[calc(100vh-80px)] flex flex-col justify-center"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 w-full flex flex-col justify-between my-auto">
        <PortfolioHeader prefersReducedMotion={prefersReducedMotion} />

        {/* LAYOUT CONTAINER DENGAN TINGGI RESPONSIF */}
        <motion.div
          layout
          transition={{ duration: 0.5, ease: EASE }}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
            isSelected ? "max-w-full" : "max-w-5xl mx-auto w-full"
          }`}
        >
          {/* CAROUSEL CONTAINER */}
          <motion.div
            layout
            transition={{ duration: 0.5, ease: EASE }}
            className={`${isSelected ? "lg:col-span-7" : "lg:col-span-12 w-full"}`}
          >
            <motion.div
              drag={prefersReducedMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              dragDirectionLock
              onDragEnd={handleDragEnd}
              style={{
                perspective: prefersReducedMotion ? "none" : "1200px",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
              className="relative cursor-grab active:cursor-grabbing py-1"
            >
              {/* JUDUL PROYEK */}
              {/* JUDUL PROYEK (Fixed Height & GPU Accelerated untuk Mencegah Lag) */}
              <div className="w-full max-w-xl mx-auto mb-4 sm:mb-6 h-[68px] sm:h-[72px] flex items-center justify-center px-4 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center text-center w-full will-change-transform"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-[#10213F] leading-snug break-words max-w-lg line-clamp-2">
                      {activeProject.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#66758F] font-medium mt-1">
                      {activeProject.category}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* AREA CAROUSEL 3D */}
              <div
                className="relative my-1 px-8 sm:px-12"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`mx-auto ${CARD_SIZE_CLASSES}`}
                  aria-hidden="true"
                />

                <button
                  onClick={goPrev}
                  aria-label="Proyek sebelumnya"
                  className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E2E8F0] bg-white/95 text-[#10213F] flex items-center justify-center hover:bg-[#123B9B] hover:text-white hover:border-[#123B9B] transition-all duration-200 shadow-lg backdrop-blur-sm active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={goNext}
                  aria-label="Proyek selanjutnya"
                  className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E2E8F0] bg-white/95 text-[#10213F] flex items-center justify-center hover:bg-[#123B9B] hover:text-white hover:border-[#123B9B] transition-all duration-200 shadow-lg backdrop-blur-sm active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {portfolioProjects.map((project, index) => {
                    const offset = getWrapOffset(index, activeIndex, total);
                    const isActive = offset === 0;
                    const target = prefersReducedMotion
                      ? {
                          x: `${offset * (isSelected ? 50 : 65)}%`,
                          rotateY: 0,
                          z: 0,
                          scale: isActive ? 1 : 0.85,
                          opacity: isActive ? 1 : 0.5,
                          zIndex: 10 - Math.abs(offset),
                        }
                      : cardTargets(offset, isSelected);

                    return (
                      <motion.button
                        key={project.id}
                        type="button"
                        onClick={() =>
                          isActive ? setPanelOpen(true) : goTo(index)
                        }
                        aria-label={`Lihat detail proyek: ${project.title}`}
                        aria-current={isActive ? "true" : undefined}
                        animate={target}
                        transition={{ duration: 0.5, ease: EASE }}
                        style={{ transformStyle: "preserve-3d" }}
                        className={`absolute ${CARD_SIZE_CLASSES} rounded-2xl overflow-hidden bg-[#F8FAFC] border border-[#E2E8F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123B9B] transition-shadow duration-300 ${
                          isActive
                            ? "shadow-[0_20px_45px_-10px_rgba(0,0,0,0.3)]"
                            : "shadow-[0_10px_25px_-10px_rgba(0,0,0,0.2)]"
                        }`}
                      >
                        <ProjectMedia
                          project={project}
                          className="w-full h-full object-cover"
                        />

                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: EASE,
                              delay: 0.1,
                            }}
                            className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-[#10213F]/90 px-3 py-1 text-[11px] font-semibold text-white whitespace-nowrap backdrop-blur-md shadow-lg hover:bg-[#10213F]"
                          >
                            Lihat Detail
                            <ArrowRight className="w-3 h-3" />
                          </motion.span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* INDIKATOR PAGINATION */}
              <div className="mt-5 sm:mt-10 flex items-center justify-center gap-3">
                <div
                  className="flex items-center gap-1.5"
                  role="tablist"
                  aria-label="Pilih proyek"
                >
                  {portfolioProjects.map((proj, idx) => (
                    <button
                      key={proj.id}
                      onClick={() => selectProject(idx)}
                      role="tab"
                      aria-selected={idx === activeIndex}
                      aria-label={proj.title}
                      className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
                        idx === activeIndex
                          ? "w-7 bg-[#123B9B]"
                          : "w-1.5 bg-[#E4EAF2] hover:bg-[#CBD5E1]"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-[11px] font-semibold text-[#94A3B8] tabular-nums tracking-wider pl-1.5">
                  {pad(activeIndex + 1)} / {pad(portfolioProjects.length)}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* PANEL DETAIL */}
          <AnimatePresence mode="wait">
            {panelOpen && (
              <motion.div
                key="detail-panel-wrapper"
                layout
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: prefersReducedMotion ? 0 : 15 }}
                transition={{ duration: 0.4, ease: EASE }}
                className={`${
                  isSelected ? "lg:col-span-5" : "w-full lg:hidden mt-4"
                }`}
              >
                <ProjectInfoPanel
                  key={activeProject.id}
                  project={activeProject}
                  onClose={closePanel}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
