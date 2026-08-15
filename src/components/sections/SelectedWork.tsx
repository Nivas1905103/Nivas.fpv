"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { featuredProjects, allProjects, Project } from "@/data/projects";
import SafeVideo from "@/components/ui/SafeVideo";

function ProjectVisual({
  project,
  priority = false,
  aspectClass = "aspect-[16/9]",
}: {
  project: Project;
  priority?: boolean;
  aspectClass?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectClass} rounded-[1.5rem] overflow-hidden bg-[#0a0a0a] border border-white/[0.08] transition-all duration-500 group-hover:border-red-500/40 group-hover:shadow-[0_20px_50px_rgba(229,9,20,0.15)]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Base Poster Image / Video */}
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
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
          <span className="font-mono text-xs text-white/50">{project.title}</span>
        </div>
      )}

      {/* 2. Cinematic Gradient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent pointer-events-none" />

      {/* 3. Corner HUD Crosshairs */}
      <div className="absolute top-3.5 left-3.5 font-mono text-[10px] text-white/40 group-hover:text-red-400 transition-colors pointer-events-none">
        +
      </div>
      <div className="absolute top-3.5 right-3.5 font-mono text-[10px] text-white/40 group-hover:text-red-400 transition-colors pointer-events-none">
        +
      </div>
      <div className="absolute bottom-3.5 left-3.5 font-mono text-[10px] text-white/40 group-hover:text-red-400 transition-colors pointer-events-none">
        +
      </div>
      <div className="absolute bottom-3.5 right-3.5 font-mono text-[10px] text-white/40 group-hover:text-red-400 transition-colors pointer-events-none">
        +
      </div>

      {/* 4. Top Telemetry Badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80 uppercase tracking-widest">
          {project.category}
        </span>
        <span className="px-2.5 py-1 rounded-md bg-red-500/20 backdrop-blur-md border border-red-500/30 text-[10px] font-mono text-red-400 uppercase tracking-widest">
          {project.year}
        </span>
      </div>
    </div>
  );
}

export default function SelectedWork({
  projects = featuredProjects,
}: {
  projects?: Project[];
}) {
  const displayProjects = projects.length > 0 ? projects : allProjects;
  const leadProject = displayProjects[0];
  const secondaryProjects = displayProjects.slice(1, 3);
  const remainingProjects = displayProjects.slice(3);

  return (
    <section
      id="work"
      className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-[#050505] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/3 left-0 w-[600px] h-[500px] bg-red-600/[0.04] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[550px] h-[450px] bg-red-900/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Faint Technical Grid Texture */}
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
            SECTION HEADER
            ═══════════════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="flex flex-col items-start max-w-3xl"
          >
            {/* Eyebrow Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(229,9,20,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>Portfolio / Selected Work</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading font-bold uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white">
              Selected Work
              <span className="text-[var(--color-accent)] drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]">
                .
              </span>
            </h2>

            {/* Subtext */}
            <p className="mt-4 text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed max-w-2xl">
              High-speed aerial perspectives and dynamic kinetic camera movement
              crafted for commercial films, automotive campaigns, luxury
              properties, and travel documentaries across India.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="shrink-0"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white uppercase tracking-wider transition-colors"
            >
              <span>View All Projects</span>
              <span className="text-red-400">→</span>
            </Link>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════
            1. LEAD FEATURED PROJECT CARD (Hero Bento)
            ═══════════════════════════════════════════════════ */}
        {leadProject && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="group relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] hover:border-red-500/40 p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.06)] transition-all duration-500 overflow-hidden"
          >
            {/* Top Glowing Red Accent Edge */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Visual Frame (7 cols) */}
              <div className="lg:col-span-7">
                <Link
                  href={`/work/${leadProject.slug}`}
                  className="block relative cursor-pointer"
                  tabIndex={0}
                  aria-label={`View ${leadProject.title} case study`}
                >
                  <ProjectVisual
                    project={leadProject}
                    priority={true}
                    aspectClass="aspect-[16/10] sm:aspect-[16/9]"
                  />
                </Link>
              </div>

              {/* Editorial Meta Panel (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-semibold">
                      FEATURED // 01
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] text-white/60 uppercase">
                      {leadProject.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-3 group-hover:text-red-100 transition-colors">
                    <Link href={`/work/${leadProject.slug}`}>
                      {leadProject.title}
                    </Link>
                  </h3>

                  <div className="flex items-center gap-3 font-mono text-xs text-white/60 mb-4">
                    <span className="text-white font-medium">
                      {leadProject.client}
                    </span>
                    {leadProject.location && (
                      <>
                        <span>•</span>
                        <span>{leadProject.location}</span>
                      </>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-light leading-relaxed mb-6">
                    {leadProject.description}
                  </p>

                  {/* Services / Deliverables Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {leadProject.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-white/70"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/work/${leadProject.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-[var(--color-accent)] hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_5px_20px_rgba(229,9,20,0.3)]"
                  >
                    <span>View Case Study</span>
                    <span>→</span>
                  </Link>

                  <span className="font-mono text-xs text-white/40">
                    4K MASTER // LOG
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ═══════════════════════════════════════════════════
            2. SECONDARY FEATURED PROJECTS (2-Column Asymmetric)
            ═══════════════════════════════════════════════════ */}
        {secondaryProjects.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {secondaryProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                variants={fadeInUp}
                className="group relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] hover:border-red-500/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <Link
                    href={`/work/${project.slug}`}
                    className="block mb-6 relative cursor-pointer"
                    aria-label={`View ${project.title} case study`}
                  >
                    <ProjectVisual project={project} />
                  </Link>

                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-semibold">
                      {`0${(index + 2).toString()} // ${project.category}`}
                    </span>
                    <span className="font-mono text-xs text-white/40">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-red-100 transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <div className="flex items-center gap-2 font-mono text-xs text-white/60 mb-4">
                    <span className="text-white/80">{project.client}</span>
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
                    <span>View Project</span>
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
            ))}
          </motion.div>
        )}

        {/* ═══════════════════════════════════════════════════
            3. SUPPORTING ARCHIVE CARDS (Remaining Projects)
            ═══════════════════════════════════════════════════ */}
        {remainingProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest">
                ADDITIONAL PRODUCTION ARCHIVES
              </span>
              <span className="font-mono text-[10px] text-red-400">
                PRORES 4K // VERIFIED
              </span>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              {remainingProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  variants={fadeInUp}
                  className="group rounded-[1.5rem] bg-[#120e0e]/60 backdrop-blur-[16px] border border-white/[0.06] hover:border-red-500/30 p-5 sm:p-6 transition-all duration-300 flex items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="relative w-24 sm:w-32 aspect-[16/10] rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
                      {project.poster ? (
                        <Image
                          src={project.poster}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="150px"
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-900" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <span className="font-mono text-[10px] text-red-400 uppercase tracking-wider block mb-1">
                        {`0${(index + 4).toString()} // ${project.category}`}
                      </span>
                      <h4 className="font-heading font-bold text-base sm:text-lg uppercase text-white truncate group-hover:text-red-100 transition-colors">
                        <Link href={`/work/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h4>
                      <p className="font-mono text-xs text-white/50 truncate">
                        {project.client} {project.location ? `• ${project.location}` : ""}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/70 group-hover:text-red-400 transition-colors shrink-0"
                    aria-label={`Open ${project.title} project`}
                  >
                    →
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════
            4. CLOSING GLASS CTA PANEL
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-[2rem] bg-[#120e0e]/80 backdrop-blur-[20px] border border-white/[0.08] p-8 sm:p-12 text-center flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Radiant Red Bloom */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.12)_0%,transparent_70%)] pointer-events-none" />

          <span className="font-mono text-xs uppercase tracking-widest text-red-400 mb-3 block">
            EXPLORE THE COMPLETE ARCHIVE
          </span>

          <h3 className="font-heading font-bold uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-white mb-4 max-w-2xl">
            See the Full Breadth of Aerial Cinematography<span className="text-[var(--color-accent)]">.</span>
          </h3>

          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-light max-w-xl mb-8 leading-relaxed">
            From commercial campaigns and high-speed automotive tracking to
            immersive architectural walkthroughs across India.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-[var(--color-accent)] hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_5px_25px_rgba(229,9,20,0.35)] w-full sm:w-auto"
            >
              <span>View All Projects</span>
              <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 w-full sm:w-auto"
            >
              <span>Book a Shoot</span>
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
