"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { services } from "@/data/services";

// Custom vector icons for each service
const serviceIcons: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  "fpv-cinematography": (props) => (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" fill="#e50914" />
    </svg>
  ),
  "commercial-drone-films": (props) => (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="10 9 15 12 10 15" fill="#e50914" stroke="#e50914" />
    </svg>
  ),
  "film-production": (props) => (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="2" y1="9" x2="22" y2="9" strokeLinecap="round" />
      <line x1="7" y1="4" x2="7" y2="9" strokeLinecap="round" />
      <line x1="17" y1="4" x2="17" y2="9" strokeLinecap="round" />
      <circle cx="12" cy="14" r="3" stroke="#e50914" />
    </svg>
  ),
  "real-estate-architecture": (props) => (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 21h18M5 21V7l7-4 7 4v14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#e50914" />
      <line x1="9" y1="21" x2="9" y2="15" strokeLinecap="round" />
      <line x1="15" y1="21" x2="15" y2="15" strokeLinecap="round" />
    </svg>
  ),
  "automotive": (props) => (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 17h14M3 12l2-6h14l2 6v5a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1v-5z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="17" r="2" fill="#e50914" />
      <circle cx="17" cy="17" r="2" fill="#e50914" />
    </svg>
  ),
  "travel-hospitality": (props) => (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="3" stroke="#e50914" />
    </svg>
  ),
  "video-editing": (props) => (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
      <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" fillOpacity="0.15" />
      <polyline points="10 8 14 12 10 16" stroke="#e50914" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// Bento col spans on desktop for 7 items in a 12-col grid
const bentoSpans = [
  "lg:col-span-7", // FPV Cinematography (Featured)
  "lg:col-span-5", // Commercial Drone Films (Featured)
  "lg:col-span-5", // Film Production
  "lg:col-span-7", // Real Estate & Architecture
  "lg:col-span-4", // Automotive
  "lg:col-span-4", // Travel & Hospitality
  "lg:col-span-4", // Video Editing
];

export default function Services() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleExpand = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <section id="services" className="relative pt-24 pb-28 md:pt-32 md:pb-36 bg-[#050505] overflow-hidden">
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-red-600/[0.05] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-red-800/[0.04] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Technical Grid Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(229,9,20,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>Services / 02</span>
          </div>

          <h2 className="font-heading font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            What I Do<span className="text-[var(--color-accent)]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            End-to-end FPV drone cinematography and specialized post-production.
            Crafting unconstrained aerial camera movements that elevate films,
            brands, architecture, and high-speed live action across India.
          </p>
        </div>

        {/* Asymmetric Glass Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 items-stretch"
        >
          {services.map((service, i) => {
            const Icon = serviceIcons[service.slug] || serviceIcons["fpv-cinematography"];
            const isExpanded = expandedSlug === service.slug;
            const spanClass = bentoSpans[i] || "lg:col-span-4";

            return (
              <motion.div
                key={service.slug}
                variants={fadeInUp}
                className={`${spanClass} group relative rounded-[1.5rem] bg-[#120e0e]/70 backdrop-blur-[18px] border border-white/[0.08] hover:border-red-500/40 hover:bg-[#181111]/80 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(229,9,20,0.12)] flex flex-col justify-between overflow-hidden cursor-pointer`}
                onClick={() => toggleExpand(service.slug)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand(service.slug);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
              >
                {/* Top Subtle Red Accent Line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-red-400 transition-colors">
                      {String(i + 1).padStart(2, "0")} / 07
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/70 group-hover:text-red-400 transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase tracking-tight text-white mb-3 group-hover:text-red-100 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables / Details (Always visible on desktop or expandable on mobile) */}
                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] mb-3">
                    <span className="text-red-400/90 font-medium uppercase tracking-wider">
                      DELIVERABLES & SCOPE
                    </span>
                    <span className="text-white/40 group-hover:text-white transition-colors text-[10px]">
                      {isExpanded ? "COLLAPSE [-]" : "EXPAND [+]"}
                    </span>
                  </div>

                  {/* Quick Pill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {service.details.slice(0, isExpanded ? service.details.length : 3).map((detail) => (
                      <span
                        key={detail}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06] group-hover:border-white/10 text-xs text-[var(--color-text-secondary)] font-mono"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                        {detail}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {isExpanded && service.details.length > 3 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-3 pt-3 border-t border-white/[0.04] space-y-1.5"
                      >
                        {service.details.slice(3).map((detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] font-mono"
                          >
                            <span className="w-1 h-1 rounded-full bg-red-400" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing CTA Strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-2xl bg-[#120e0e]/75 backdrop-blur-[18px] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 block mb-1">
              CUSTOM FLIGHT CHOREOGRAPHY
            </span>
            <p className="font-heading font-bold uppercase text-lg sm:text-xl text-white">
              Need a movement designed for your story?
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-[var(--color-accent)] to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(229,9,20,0.3)] border border-red-400/30 transition-all duration-300 shrink-0 w-full sm:w-auto"
          >
            <span>Start a Project</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
