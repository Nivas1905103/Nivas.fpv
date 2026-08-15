"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SafeVideo from "@/components/ui/SafeVideo";
import Magnetic from "@/components/ui/Magnetic";
import { fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#050505] text-white pt-24 sm:pt-28 pb-6 md:pb-10"
    >
      {/* ═══════════════════════════════════════════════════
          1. CINEMATIC VIDEO BACKGROUND & MULTI-LAYER MASKS
          ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
        <SafeVideo
          src="/videos/13.mp4"
          poster="/images/posters/hero-13.jpg"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          preload="auto"
          priority={true}
          className="w-full h-full object-cover opacity-60 scale-[1.02]"
          containerClassName="absolute inset-0 w-full h-full"
        />

        {/* Ambient Dark-to-Red Cinematic Vignette Gradients */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.85) 75%, #050505 100%)`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 inset-x-0 h-40 z-10 pointer-events-none bg-gradient-to-b from-[#050505]/90 via-[#050505]/50 to-transparent"
          aria-hidden="true"
        />

        {/* Soft Red Ambient Atmospheric Glow */}
        <div
          className="absolute top-1/3 left-10 w-[600px] h-[500px] bg-red-600/[0.07] rounded-full blur-[160px] pointer-events-none z-10"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-red-900/[0.05] rounded-full blur-[140px] pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Fine Technical Grid Texture */}
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />

        {/* Subtle Animated Flight-Path Vector Line */}
        <svg
          className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-20"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <motion.path
            d="M -100,500 C 300,350 500,650 900,420 C 1200,250 1350,380 1550,200"
            stroke="url(#hero-vector-gradient)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="hero-vector-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e50914" stopOpacity="0" />
              <stop offset="50%" stopColor="#e50914" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════
          2. CORNER HUD CROSSHAIRS & TELEMETRY
          ═══════════════════════════════════════════════════ */}
      <div className="absolute top-28 left-6 sm:left-12 z-20 font-mono text-[10px] text-white/25 select-none hidden sm:block">
        + SYS.ACT // 6-DOF
      </div>
      <div className="absolute top-28 right-6 sm:right-12 z-20 font-mono text-[10px] text-white/25 select-none hidden sm:block">
        LAT 13.0827° N // LON 80.2707° E +
      </div>
      <div className="absolute bottom-12 left-6 sm:left-12 z-20 font-mono text-[10px] text-white/25 select-none hidden sm:block">
        + 4K D-LOG 10-BIT
      </div>
      <div className="absolute bottom-12 right-6 sm:right-12 z-20 font-mono text-[10px] text-white/25 select-none hidden sm:block">
        60FPS KINETIC VECTOR +
      </div>

      {/* ═══════════════════════════════════════════════════
          3. MAIN EDITORIAL CONTENT (CENTERED ON GRID)
          ═══════════════════════════════════════════════════ */}
      <div className="container-site relative z-20 w-full max-w-7xl mx-auto my-auto py-4 sm:py-8 flex flex-col justify-center">
        <div className="max-w-4xl lg:max-w-5xl space-y-5 sm:space-y-7">
          {/* Status & Credential Pills Cluster */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            {/* Identity Capsule */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#120e0e]/75 backdrop-blur-md border border-white/[0.08] shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(229,9,20,0.8)]" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-white/80">
                FPV Drone Cinematographer &amp; Editor
              </span>
            </div>

            {/* DGCA Verified Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 font-mono text-[11px] sm:text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.15)]">
              <span className="text-red-400 font-bold">✓</span>
              <span>DGCA Approved Pilot in India</span>
            </div>

            {/* Nationwide Availability Badge */}
            <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 font-mono text-xs uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span>Available for Projects Across India</span>
            </div>
          </motion.div>

          {/* Main Cinematic Headline (Responsive, no clipping) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <h1 className="font-heading font-bold uppercase tracking-tight leading-[0.92] text-white">
              <span className="block text-[clamp(2.2rem,6.8vw,5.8rem)] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)] tracking-tight">
                FPV DRONE
              </span>
              <span className="block text-[clamp(1.75rem,5.3vw,4.75rem)] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-[var(--color-accent)] drop-shadow-[0_0_40px_rgba(229,9,20,0.4)] whitespace-nowrap">
                CINEMATOGRAPHY
                <span className="text-[var(--color-accent)] drop-shadow-[0_0_35px_rgba(229,9,20,0.8)]">
                  .
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Supporting Narrative Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed max-w-2xl"
          >
            High-speed perspectives, 6-axis dynamic camera movement, and
            precision manual flight crafted for commercial films, automotive
            campaigns, luxury architecture, and brand experiences.
          </motion.p>

          {/* Action CTAs & Telemetry Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
          >
            <Magnetic strength={0.3}>
              <Link
                href="/work"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-[var(--color-accent)] to-red-600 hover:from-red-500 hover:to-red-500 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_5px_25px_rgba(229,9,20,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_8px_35px_rgba(229,9,20,0.6)] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </Link>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-[#120e0e]/75 hover:bg-[#181111] backdrop-blur-md border border-white/10 hover:border-red-500/40 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_5px_20px_rgba(0,0,0,0.5)] active:scale-[0.98]"
              >
                <span>Book a Project</span>
                <span className="text-red-400 group-hover:text-white transition-colors">
                  →
                </span>
              </Link>
            </Magnetic>

            {/* Mobile-Only Available Badge */}
            <div className="flex md:hidden items-center justify-center gap-2 py-1.5 text-center text-xs font-mono text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>Available Across India</span>
            </div>
          </motion.div>

          {/* Quick Telemetry Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap items-center gap-2 pt-1"
          >
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-white/50">
              4K D-LOG 10-BIT
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-white/50">
              120+ KM/H AGILITY
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-white/50">
              SUB-METER PROXIMITY
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-red-400/80">
              DAVINCI COLOR GRADE
            </span>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          4. MINIMAL BOTTOM HUD SCROLL INDICATOR
          ═══════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-20 flex flex-col items-center justify-center gap-1.5 pb-1"
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="group flex flex-col items-center gap-1.5 text-white/40 hover:text-white transition-colors"
        >
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] group-hover:text-red-400 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/20 group-hover:border-red-500/50 flex items-start justify-center p-1 transition-colors">
            <motion.div
              className="w-1 h-2 rounded-full bg-red-500"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
