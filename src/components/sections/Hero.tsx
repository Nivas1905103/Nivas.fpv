"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import HeroVideo from "@/components/ui/HeroVideo";

import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] max-h-[1200px] flex items-center justify-center overflow-hidden vignette"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <HeroVideo 
          src="/videos/13.mp4"
          className="opacity-70 mix-blend-normal"
        />
        {/* Gradient overlay to ensure left-side text is highly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent" />
      </div>

      {/* Film Grain */}
      <div className="absolute inset-0 z-[3] pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-site w-full flex justify-start">
        <div className="max-w-3xl flex flex-col items-start text-left">
          {/* Pre-heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col items-start gap-4 mb-6 w-full"
          >
            <span className="tech-label text-[var(--color-text-muted)] leading-relaxed">
              FPV Drone Cinematographer & Video Editor
            </span>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tech-label !text-emerald-400 font-semibold tracking-wider m-0">
                DGCA Approved Pilot in India
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold uppercase tracking-tighter mb-6 text-[clamp(2rem,8.5vw,8rem)] leading-[1]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
            >
              FPV Drone
            </motion.span>
            <motion.span
              className="block text-[var(--color-accent)]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Cinematography
            </motion.span>
          </h1>

          {/* Supporting Text */}
          <motion.p
            className="body-lg max-w-xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
          >
            High-speed perspectives for films, brands and experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Magnetic strength={0.4}>
              <Link href="/work" className="btn-primary" data-cursor="VIEW">
                View My Work
                <span>→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link href="/contact" className="btn-secondary" data-cursor="BOOK">
                Book a Project
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* HUD Corners */}
      <motion.div
        className="absolute top-24 right-[var(--container-padding)] z-10 hidden lg:block text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <span className="tech-label block">Available for Projects</span>
        <span className="tech-label block text-[var(--color-accent)]">India</span>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
      >
        <span className="tech-label text-[0.625rem]">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-white/30 origin-top"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
