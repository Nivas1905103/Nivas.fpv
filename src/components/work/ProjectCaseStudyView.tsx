"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { Project } from "@/data/projects";
import SafeVideo from "@/components/ui/SafeVideo";

interface ProjectCaseStudyViewProps {
  project: Project;
  nextProject?: Project;
}

export default function ProjectCaseStudyView({
  project,
  nextProject,
}: ProjectCaseStudyViewProps) {
  const masterVideoSrc = project.finalVideo || project.heroVideo;
  const masterPosterSrc = project.finalPoster || project.poster;

  return (
    <article className="min-h-screen bg-[#050505] text-white pt-24 md:pt-28 pb-24 md:pb-36 relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════
          BACKGROUND AMBIENCE & HUD GRID
          ═══════════════════════════════════════════════════ */}
      <div
        className="absolute top-1/4 left-10 w-[600px] h-[500px] bg-red-600/[0.04] rounded-full blur-[150px] pointer-events-none"
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

      <div className="container-site relative z-10 max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* ═══════════════════════════════════════════════════
            1. TOP NAVIGATION / BACK LINK
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-between gap-3 pt-4"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#120e0e]/80 backdrop-blur-md border border-white/[0.08] hover:border-red-500/40 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
          >
            <span className="text-red-400">←</span>
            <span>Back to All Work</span>
          </Link>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>Case Study // {project.category}</span>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            2. PROJECT HERO TITLE & CINEMATIC FRAME
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6"
        >
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white">
              {project.title}
              <span className="text-[var(--color-accent)] drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]">
                .
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Cinematic Hero Media Container */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.06)]">
            {project.heroVideo ? (
              <SafeVideo
                src={project.heroVideo}
                poster={project.poster}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                preload="auto"
                priority={true}
                className="w-full h-full object-cover"
                containerClassName="absolute inset-0 w-full h-full"
              />
            ) : project.poster ? (
              <Image
                src={project.poster}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-neutral-900">
                <span className="font-mono text-xs text-white/50">{project.title}</span>
              </div>
            )}

            {/* Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-black/40 pointer-events-none" />

            {/* Corner HUD Crosshairs */}
            <div className="absolute top-4 left-4 font-mono text-xs text-white/40 pointer-events-none">
              +
            </div>
            <div className="absolute top-4 right-4 font-mono text-xs text-white/40 pointer-events-none">
              +
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-xs text-white/40 pointer-events-none">
              +
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-xs text-white/40 pointer-events-none">
              +
            </div>

            {/* Bottom Overlay Telemetry Badges */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-white/80">
                <span className="text-red-400 font-bold">CLIENT:</span>
                <span>{project.client}</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-white/80">
                <span className="text-red-400 font-bold">TIMELINE:</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            3. SPECIFICATION HUD / TELEMETRY BAR
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="rounded-[1.25rem] bg-[#120e0e]/75 backdrop-blur-[16px] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between">
            <span className="font-mono text-[10px] sm:text-xs text-red-400 uppercase tracking-wider mb-2">
              01 // CLIENT
            </span>
            <span className="font-heading font-bold text-base sm:text-lg text-white truncate">
              {project.client}
            </span>
          </div>

          <div className="rounded-[1.25rem] bg-[#120e0e]/75 backdrop-blur-[16px] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between">
            <span className="font-mono text-[10px] sm:text-xs text-red-400 uppercase tracking-wider mb-2">
              02 // LOCATION
            </span>
            <span className="font-heading font-bold text-base sm:text-lg text-white truncate">
              {project.location || "India"}
            </span>
          </div>

          <div className="rounded-[1.25rem] bg-[#120e0e]/75 backdrop-blur-[16px] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between">
            <span className="font-mono text-[10px] sm:text-xs text-red-400 uppercase tracking-wider mb-2">
              03 // TIMELINE
            </span>
            <span className="font-heading font-bold text-base sm:text-lg text-white">
              {`${project.year} // IST`}
            </span>
          </div>

          <div className="rounded-[1.25rem] bg-[#120e0e]/75 backdrop-blur-[16px] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between">
            <span className="font-mono text-[10px] sm:text-xs text-red-400 uppercase tracking-wider mb-2">
              04 // DISCIPLINE
            </span>
            <span className="font-heading font-bold text-base sm:text-lg text-white truncate">
              {project.role || "Cinematographer"}
            </span>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            4. CREATIVE NARRATIVE & DELIVERABLES BENTO
            ═══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Editorial Story & Creative Brief (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />

              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
                  PROJECT OVERVIEW // 01
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-6">
                The Vision &amp; Cinematic Scope<span className="text-[var(--color-accent)]">.</span>
              </h2>

              <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-white/50">
                <span>FPV KINETIC VECTORING</span>
                <span className="text-red-400">4K LOG COLOR PIPELINE</span>
              </div>
            </motion.div>

            {/* Creative Brief Card */}
            {project.brief && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                className="relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
                    CREATIVE BRIEF // 02
                  </span>
                </div>

                <h2 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-6">
                  Flight Strategy &amp; Execution<span className="text-[var(--color-accent)]">.</span>
                </h2>

                <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
                  {project.brief}
                </p>
              </motion.div>
            )}
          </div>

          {/* Right Column: Services & Technical Toolkit (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Services Provided */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-semibold">
                  DELIVERABLES // SERVICES
                </span>
                <span className="font-mono text-[10px] text-white/40">
                  FULL PIPELINE
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {project.services.map((service, i) => (
                  <div
                    key={service}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-md bg-red-500/10 border border-red-500/30 flex items-center justify-center font-mono text-[10px] font-bold text-red-400">
                        0{(i + 1).toString()}
                      </span>
                      <span className="text-sm text-white font-medium">
                        {service}
                      </span>
                    </div>
                    <span className="text-red-400 font-mono text-xs">✓</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hardware & Flight Gear */}
            {project.equipment && project.equipment.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                className="rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-semibold">
                    FLIGHT GEAR &amp; TOOLKIT
                  </span>
                  <span className="font-mono text-[10px] text-white/40">
                    PRECISION OPS
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {project.equipment.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Technical Master Specs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="rounded-[2rem] bg-gradient-to-br from-[#181111]/80 to-[#120e0e]/90 backdrop-blur-[20px] border border-red-500/20 p-6 sm:p-8"
            >
              <span className="font-mono text-xs text-red-400 uppercase tracking-widest block mb-4 font-semibold">
                MASTER EXPORT SPECIFICATIONS
              </span>

              <div className="space-y-3 font-mono text-xs text-white/70">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                  <span>Capture Profile:</span>
                  <span className="text-white">4K D-Log 10-Bit</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                  <span>Master Codec:</span>
                  <span className="text-white">Apple ProRes 422 HQ</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                  <span>Color Space:</span>
                  <span className="text-white">Rec.709 / Cinema Gamut</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Audio Design:</span>
                  <span className="text-white">Spatial Sound Design</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            5. FINAL FILM MASTER CINEMA FRAME
            ═══════════════════════════════════════════════════ */}
        {masterVideoSrc && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-widest uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>Final Film // 03</span>
                </div>
                <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white">
                  Master Cinema Cut<span className="text-[var(--color-accent)]">.</span>
                </h2>
              </div>

              <span className="font-mono text-xs text-white/50">
                NATIVE 4K REEL // STEREO SFX
              </span>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden bg-black border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(229,9,20,0.1)]">
              <video
                src={masterVideoSrc}
                poster={masterPosterSrc || undefined}
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              />

              {/* Corner HUD markers */}
              <div className="absolute top-4 left-4 font-mono text-xs text-white/40 pointer-events-none">
                +
              </div>
              <div className="absolute top-4 right-4 font-mono text-xs text-white/40 pointer-events-none">
                +
              </div>
            </div>
          </motion.div>
        )}

        {/* ═══════════════════════════════════════════════════
            6. NEXT PROJECT TEASER & CLOSING CTA
            ═══════════════════════════════════════════════════ */}
        <div className="space-y-12">
          {nextProject && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              <Link
                href={`/work/${nextProject.slug}`}
                className="group block relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] hover:border-red-500/40 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="relative w-28 sm:w-36 aspect-[16/10] rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
                      {nextProject.poster ? (
                        <Image
                          src={nextProject.poster}
                          alt={nextProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="200px"
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-900" />
                      )}
                    </div>

                    <div>
                      <span className="font-mono text-xs text-red-400 uppercase tracking-widest block mb-1">
                        CONTINUE THE REEL // NEXT PROJECT
                      </span>
                      <h3 className="font-heading font-bold text-xl sm:text-3xl uppercase text-white group-hover:text-red-100 transition-colors">
                        {nextProject.title}
                      </h3>
                      <p className="font-mono text-xs text-white/50 mt-1">
                        {nextProject.category} • {nextProject.client}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 text-white group-hover:text-red-400 font-mono text-xs uppercase tracking-wider transition-all duration-300 self-start md:self-auto">
                    <span>View Next Case Study</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Start a Project Closing Glass CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="relative rounded-[2rem] bg-[#120e0e]/80 backdrop-blur-[20px] border border-white/[0.08] p-8 sm:p-14 text-center flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.12)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-70" />

            <span className="font-mono text-xs uppercase tracking-widest text-red-400 mb-3 block">
              AVAILABLE NATIONWIDE FOR COMMISSION
            </span>

            <h2 className="font-heading font-bold uppercase tracking-tight text-2xl sm:text-4xl md:text-5xl text-white mb-4 max-w-3xl leading-[1.05]">
              Ready to Elevate Your Next Production
              <span className="text-[var(--color-accent)]">.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-secondary)] font-light max-w-2xl mb-8 leading-relaxed">
              Book Nivas for high-speed FPV cinematography, commercial brand
              campaigns, automotive tracking, and luxury property films across
              India.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-[var(--color-accent)] hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_5px_25px_rgba(229,9,20,0.35)] w-full sm:w-auto"
              >
                <span>Start a Project</span>
                <span>→</span>
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 w-full sm:w-auto"
              >
                <span>View All Projects</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
