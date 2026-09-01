"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { siteConfig } from "@/data/siteConfig";

// Calibrated city coordinates on India SVG coordinate box (0-100 scale)
const cityCoordinates: Record<string, { x: number; y: number; tag?: string }> = {
  Delhi: { x: 44, y: 28, tag: "NORTH" },
  Rajasthan: { x: 32, y: 36, tag: "WEST" },
  Mumbai: { x: 30, y: 55, tag: "WEST" },
  Pune: { x: 34, y: 58, tag: "WEST" },
  Goa: { x: 32, y: 68, tag: "COASTAL" },
  Hyderabad: { x: 48, y: 56, tag: "CENTRAL" },
  Bengaluru: { x: 45, y: 72, tag: "SOUTH" },
  Chennai: { x: 54, y: 74, tag: "TAMIL NADU" },
  Salem: { x: 47, y: 77, tag: "TAMIL NADU" },
  Coimbatore: { x: 42, y: 80, tag: "TAMIL NADU" },
  Tirupur: { x: 44, y: 80, tag: "TAMIL NADU" },
  Trichy: { x: 49, y: 81, tag: "TAMIL NADU" },
  Madurai: { x: 47, y: 84, tag: "TAMIL NADU" },
  Theni: { x: 43, y: 84, tag: "TAMIL NADU" },
  Kerala: { x: 40, y: 86, tag: "SOUTH" },
};

const infoCards = [
  {
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
        <circle cx="12" cy="12" r="2" fill="#e50914" />
      </svg>
    ),
    title: "Based in India",
    detail: "Direct operational base with comprehensive pan-India deployment capabilities.",
    badge: "BASE: INDIA (IST)",
  },
  {
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <circle cx="12" cy="12" r="1.5" fill="#e50914" />
      </svg>
    ),
    title: "Nationwide Travel Ready",
    detail: "Self-contained flight kits, high-speed field chargers, and modular camera rigs ready for rapid dispatch.",
    badge: "STATUS: TRAVEL READY",
  },
  {
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" stroke="#e50914" />
      </svg>
    ),
    title: "24-Hour Response",
    detail: "Rapid creative consultations, location feasibility assessments, and technical shot planning.",
    badge: "COMMUNICATIONS: ACTIVE",
  },
];

export default function Availability() {
  return (
    <section
      id="availability"
      className="relative pt-24 pb-28 md:pt-32 md:pb-36 bg-[#050505] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/3 right-10 w-[600px] h-[500px] bg-red-600/[0.04] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-red-900/[0.03] rounded-full blur-[130px] pointer-events-none"
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
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(229,9,20,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>Location / 05</span>
          </div>

          <h2 className="font-heading font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Available for Projects Across India<span className="text-[var(--color-accent)]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            Based in India and fully equipped for rapid nationwide deployment.
            Bringing unconstrained aerial perspectives to commercial sets, film shoots,
            and luxury properties anywhere in the country.
          </p>
        </div>

        {/* Main Composition: Interactive Glass Map + City Radar List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Left / Top: Premium Dark-Glass India Coverage Radar (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="lg:col-span-7 rounded-[1.75rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden"
          >
            {/* Top Radar HUD Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06] text-xs font-mono text-[var(--color-text-muted)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-white font-medium">RADAR // NATIONWIDE COVERAGE</span>
              </div>
              <div className="text-[11px] text-red-400 font-mono">
                OPS: ACTIVE
              </div>
            </div>

            {/* SVG India Map Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full max-h-[380px]"
                aria-label="Map of India highlighting confirmed project coverage locations"
                role="img"
              >
                <defs>
                  {/* Subtle Coordinate Grid Pattern inside Map Box */}
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  </pattern>
                  <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e50914" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ff4d4d" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Radar Grid Background */}
                <rect width="100" height="100" fill="url(#grid)" />

                {/* Coordinate Crosshairs */}
                <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255,255,255,0.03)" strokeDasharray="1 3" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(255,255,255,0.03)" strokeDasharray="1 3" />

                {/* Stylized Accurate India Contour Path */}
                <path
                  d="M 44 8 
                     C 48 10, 52 14, 52 18 
                     C 55 22, 60 25, 66 26 
                     C 72 27, 78 28, 84 27 
                     C 88 28, 92 32, 90 36 
                     C 86 38, 80 37, 76 39 
                     C 74 42, 70 46, 68 50 
                     C 66 56, 62 62, 58 70 
                     C 55 76, 50 82, 45 92 
                     C 42 94, 39 90, 38 84 
                     C 36 78, 32 70, 31 62 
                     C 30 56, 26 52, 24 45 
                     C 22 38, 26 32, 32 26 
                     C 36 20, 40 12, 44 8 Z"
                  fill="rgba(255, 255, 255, 0.015)"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="0.8"
                  strokeDasharray="2 1"
                />

                {/* Connecting Vector Flight Routes between Primary Hubs */}
                <path
                  d="M 44 28 L 30 55 L 45 72 L 54 74 L 48 56 Z"
                  fill="none"
                  stroke="url(#routeGrad)"
                  strokeWidth="0.4"
                  strokeDasharray="1.5 1.5"
                  className="opacity-70"
                />

                {/* Tamil Nadu Regional Flight Corridor */}
                <path
                  d="M 54 74 L 47 77 L 49 81 L 47 84 L 43 84 L 42 80 L 44 80 Z"
                  fill="none"
                  stroke="url(#routeGrad)"
                  strokeWidth="0.5"
                  strokeDasharray="1 1"
                  className="opacity-80"
                />

                {/* City Nodes & Pulse Beacons */}
                {siteConfig.cities.map((city) => {
                  const pos = cityCoordinates[city];
                  if (!pos) return null;

                  return (
                    <g key={city} className="cursor-pointer group">
                      {/* Outer Pulse Circle */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="2.5"
                        fill="none"
                        stroke="#e50914"
                        strokeWidth="0.4"
                        opacity="0.5"
                      >
                        <animate
                          attributeName="r"
                          values="1.5;4;1.5"
                          dur="3.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.6;0;0.6"
                          dur="3.5s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Solid Center Dot */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="1.2"
                        fill="#e50914"
                      />

                      {/* City Label */}
                      <text
                        x={pos.x + 2.5}
                        y={pos.y + 0.8}
                        className="fill-white/80 font-mono text-[2.8px] uppercase tracking-wider font-semibold select-none group-hover:fill-red-400 transition-colors"
                      >
                        {city}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Map Legend */}
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[var(--color-text-muted)]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-white/80">CONFIRMED HUBS</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-[1px] bg-red-500/60" />
                  <span className="text-white/60">RAPID FLIGHT VECTORS</span>
                </span>
              </div>
              <span className="text-white/40">PAN-INDIA DISPATCH</span>
            </div>
          </motion.div>

          {/* Right: 3 Compact Glass Information Cards + Hubs Directory (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col justify-between gap-5"
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  className="group relative rounded-2xl bg-[#120e0e]/75 backdrop-blur-[18px] border border-white/[0.08] hover:border-red-500/40 hover:bg-[#181111]/80 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/70 group-hover:text-red-400 transition-colors shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="font-heading font-bold text-base uppercase tracking-tight text-white group-hover:text-red-100 transition-colors">
                          {card.title}
                        </h3>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-white/60">
                          {card.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--color-text-secondary)] font-light leading-relaxed">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Hubs Grid */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl bg-[#120e0e]/60 backdrop-blur-[16px] border border-white/[0.06] p-5 space-y-4"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-red-400/90 block mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  TAMIL NADU REGIONAL HUBS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Coimbatore", "Chennai", "Madurai", "Trichy", "Salem", "Theni", "Tirupur"].map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/25 text-xs font-mono text-white hover:border-red-400 transition-colors"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.05]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-2">
                  PAN-INDIA TRAVEL HUBS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {siteConfig.cities
                    .filter((city) => !["Coimbatore", "Chennai", "Madurai", "Trichy", "Salem", "Theni", "Tirupur"].includes(city))
                    .map((city) => (
                      <span
                        key={city}
                        className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-white/80 hover:text-white hover:border-red-500/30 transition-colors"
                      >
                        {city}
                      </span>
                    ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Strong Closing Glass CTA Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-2xl bg-[#120e0e]/75 backdrop-blur-[18px] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 block mb-1">
              ON-LOCATION SHOOT READINESS
            </span>
            <p className="font-heading font-bold uppercase text-lg sm:text-xl text-white">
              Planning a shoot outside your city?
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-[var(--color-accent)] to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(229,9,20,0.3)] border border-red-400/30 transition-all duration-300 shrink-0 w-full sm:w-auto"
          >
            <span>Book a Project</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
