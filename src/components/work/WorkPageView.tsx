"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { allProjects, Project } from "@/data/projects";
import SafeVideo from "@/components/ui/SafeVideo";

function WorkProjectCard({
  project,
  index,
  totalCount,
  isLead = false,
}: {
  project: Project;
  index: number;
  totalCount: number;
  isLead?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const formattedNumber = `${(index + 1).toString().padStart(2, "0")} / ${totalCount.toString().padStart(2, "0")}`;

  if (isLead) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="col-span-12 group relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] hover:border-red-500/40 p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.06)] transition-all duration-500 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Glowing Red Accent Edge */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Visual Container (7 cols) */}
          <div className="lg:col-span-7">
            <Link
              href={`/work/${project.slug}`}
              className="block relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[1.5rem] overflow-hidden bg-[#0a0a0a] border border-white/[0.08] group-hover:border-red-500/40 transition-all duration-500"
              aria-label={`View ${project.title} case study`}
            >
              {project.heroVideo && isHovered ? (
                <SafeVideo
                  src={project.heroVideo}
                  poster={project.poster}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  preload="auto"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                  containerClassName="absolute inset-0 w-full h-full"
                />
              ) : project.poster ? (
                <Image
                  src={project.poster}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                  <span className="font-mono text-xs text-white/50">{project.title}</span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent pointer-events-none" />

              {/* HUD Markers */}
              <div className="absolute top-3.5 left-3.5 font-mono text-[10px] text-white/40 group-hover:text-red-400 transition-colors pointer-events-none">
                +
              </div>
              <div className="absolute top-3.5 right-3.5 font-mono text-[10px] text-white/40 group-hover:text-red-400 transition-colors pointer-events-none">
                +
              </div>

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80 uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-red-500/20 backdrop-blur-md border border-red-500/30 text-[10px] font-mono text-red-400 uppercase tracking-widest font-semibold">
                  LEAD FEATURE
                </span>
              </div>
            </Link>
          </div>

          {/* Metadata Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-semibold">
                  {formattedNumber}
                </span>
                <span className="font-mono text-xs text-white/40">
                  YEAR {project.year}
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-3 group-hover:text-red-100 transition-colors">
                <Link href={`/work/${project.slug}`}>{project.title}</Link>
              </h3>

              <div className="flex items-center gap-3 font-mono text-xs text-white/60 mb-4">
                <span className="text-white font-medium">{project.client}</span>
                {project.location && (
                  <>
                    <span>•</span>
                    <span>{project.location}</span>
                  </>
                )}
              </div>

              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-light leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Services Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {project.services.map((srv) => (
                  <span
                    key={srv}
                    className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-white/70"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-[var(--color-accent)] hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_5px_20px_rgba(229,9,20,0.3)]"
              >
                <span>View Case Study</span>
                <span>→</span>
              </Link>
              <span className="font-mono text-xs text-white/40">
                PRORES 4K // LOG
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard / Medium Bento Card (6 cols)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="col-span-12 md:col-span-6 group relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] hover:border-red-500/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <Link
          href={`/work/${project.slug}`}
          className="block mb-6 relative w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-[#0a0a0a] border border-white/[0.08] group-hover:border-red-500/40 transition-all duration-500"
          aria-label={`View ${project.title} case study`}
        >
          {project.heroVideo && isHovered ? (
            <SafeVideo
              src={project.heroVideo}
              poster={project.poster}
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              preload="auto"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
              containerClassName="absolute inset-0 w-full h-full"
            />
          ) : project.poster ? (
            <Image
              src={project.poster}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
              <span className="font-mono text-xs text-white/50">{project.title}</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent pointer-events-none" />

          {/* HUD Crosshairs */}
          <div className="absolute top-3.5 left-3.5 font-mono text-[10px] text-white/40 group-hover:text-red-400 transition-colors pointer-events-none">
            +
          </div>
          <div className="absolute top-3.5 right-3.5 font-mono text-[10px] text-white/40 group-hover:text-red-400 transition-colors pointer-events-none">
            +
          </div>

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80 uppercase tracking-widest">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-red-500/20 backdrop-blur-md border border-red-500/30 text-[10px] font-mono text-red-400 uppercase tracking-widest">
              {project.year}
            </span>
          </div>
        </Link>

        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-semibold">
            {formattedNumber}
          </span>
          <span className="font-mono text-xs text-white/40">
            {project.category}
          </span>
        </div>

        <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-red-100 transition-colors">
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
        </h3>

        <div className="flex items-center gap-2 font-mono text-xs text-white/60 mb-4">
          <span className="text-white/90">{project.client}</span>
          {project.location && (
            <>
              <span>•</span>
              <span>{project.location}</span>
            </>
          )}
        </div>

        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 text-xs font-mono text-red-400 hover:text-white uppercase tracking-wider transition-colors font-semibold"
        >
          <span>View Case Study</span>
          <span>→</span>
        </Link>
        <div className="flex items-center gap-1.5">
          {project.services.slice(0, 2).map((srv) => (
            <span
              key={srv}
              className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.05] text-[9px] font-mono text-white/50"
            >
              {srv}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkPageView() {
  const [selectedCategory, setSelectedCategory] = useState("All Work");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allProjects.map((p) => p.category)));
    return ["All Work", ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All Work") {
      return allProjects;
    }
    return allProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 md:pt-36 pb-24 md:pb-36 relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════
          BACKGROUND AMBIENCE & HUD GRID
          ═══════════════════════════════════════════════════ */}
      <div
        className="absolute top-20 left-1/4 w-[600px] h-[500px] bg-red-600/[0.04] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-2/3 right-10 w-[550px] h-[450px] bg-red-900/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* ═══════════════════════════════════════════════════
            1. PORTFOLIO HERO
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(229,9,20,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>Portfolio / 01</span>
            </div>

            <h1 className="font-heading font-bold uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white">
              Selected Work
              <span className="text-[var(--color-accent)] drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]">
                .
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed max-w-2xl">
              Cinematic FPV footage and dynamic visual storytelling crafted for
              commercial films, automotive campaigns, luxury properties, travel
              documentaries, and brand narratives across India.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <div className="px-3.5 py-2 rounded-xl bg-[#120e0e]/80 backdrop-blur-md border border-white/[0.08] font-mono text-xs text-white/80">
              <span className="text-red-400 font-bold mr-2">
                {allProjects.length.toString().padStart(2, "0")} PROJECTS
              </span>
              <span>VERIFIED ARCHIVE</span>
            </div>
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
              NATIONWIDE DEPLOYMENT
            </span>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            2. GLASS CATEGORY FILTER CHIPS
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 py-2"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-red-600/20 border border-red-500/50 text-white shadow-[0_0_20px_rgba(229,9,20,0.25)] font-semibold"
                    : "bg-[#120e0e]/60 backdrop-blur-md border border-white/[0.06] text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                <span>{category}</span>
                {isActive && (
                  <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            3. PORTFOLIO BENTO PROJECT GRID
            ═══════════════════════════════════════════════════ */}
        <motion.div
          layout
          className="grid grid-cols-12 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isLead = (selectedCategory === "All Work" && index === 0) || filteredProjects.length === 1;
              return (
                <WorkProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  totalCount={filteredProjects.length}
                  isLead={isLead}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            4. PREMIUM CLOSING CTA PANEL
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-[2rem] bg-[#120e0e]/80 backdrop-blur-[20px] border border-white/[0.08] p-8 sm:p-14 text-center flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Radiant Red Bloom */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Top Edge Line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-70" />

          <span className="font-mono text-xs uppercase tracking-widest text-red-400 mb-3 block">
            COLLABORATION // PERSPECTIVE
          </span>

          <h2 className="font-heading font-bold uppercase tracking-tight text-2xl sm:text-4xl md:text-5xl text-white mb-4 max-w-3xl leading-[1.05]">
            Your Story Deserves a Different Perspective
            <span className="text-[var(--color-accent)]">.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-secondary)] font-light max-w-2xl mb-8 leading-relaxed">
            Equipped with self-contained flight kits for rapid travel to sets,
            architectural builds, and remote landscapes nationwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-[var(--color-accent)] hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_5px_25px_rgba(229,9,20,0.35)] w-full sm:w-auto"
            >
              <span>Start a Project</span>
              <span>→</span>
            </Link>

            <a
              href="mailto:nivas.fpv@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 w-full sm:w-auto"
            >
              <span>Contact Nivas</span>
              <span>→</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[var(--color-text-muted)]">
            <span>BASED IN INDIA</span>
            <span>•</span>
            <span>AVAILABLE NATIONWIDE &amp; GLOBAL</span>
            <span>•</span>
            <span>24-HOUR RESPONSE</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
