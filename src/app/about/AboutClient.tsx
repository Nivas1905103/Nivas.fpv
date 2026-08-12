"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { gear } from "@/data/gear";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import LiquidBackground from "@/components/ui/LiquidBackground";

export default function AboutClient() {
  const skills = [
    "FPV Drone Piloting",
    "Aerial Cinematography",
    "Video Editing",
    "Color Grading",
    "Sound Design",
    "Speed Ramping",
    "Creative Direction",
    "Indoor Fly-Throughs",
  ];

  const glassyContainerClass = "relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,51,51,0.2)] hover:bg-white/[0.06] hover:border-white/[0.15] group p-8 md:p-10 flex flex-col";

  return (
    <div className="min-h-screen pt-40 md:pt-48 pb-20 bg-[var(--color-bg-primary)] relative overflow-hidden">
      {/* Subtle Dynamic Background */}
      <LiquidBackground opacity={0.08} color1="#E63946" color2="#330000" />

      <div className="container-site relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Identity Container - Spans full width or large portion */}
          <motion.div variants={fadeInUp} className={`md:col-span-12 lg:col-span-8 ${glassyContainerClass} justify-center`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-accent)] uppercase block mb-6">
              Identity
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-4 text-[var(--color-text-primary)] leading-[1.1]">
              Nivas<span className="text-[var(--color-accent)]">.</span>
            </h1>
            <p className="text-sm md:text-lg font-semibold tracking-[0.15em] uppercase text-[var(--color-text-primary)] mb-2">
              FPV Drone Cinematographer
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-8 bg-[var(--color-accent)]" />
              <p className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)]">
                Editor / Visual Storyteller
              </p>
            </div>
          </motion.div>

          {/* Portrait Image Container */}
          <motion.div variants={fadeInUp} className={`md:col-span-12 lg:col-span-4 ${glassyContainerClass} p-0 overflow-hidden`}>
            <div className="relative w-full h-[400px] lg:h-full">
              <Image 
                src="/images/about/portrait-real.jpg" 
                alt="Nivas - Portrait"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>

          {/* Background Container */}
          <motion.div variants={fadeInUp} className={`md:col-span-12 lg:col-span-6 ${glassyContainerClass}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-xs font-semibold tracking-[0.25em] text-[var(--color-accent)] uppercase block mb-6 border-b border-white/[0.08] pb-4">
              01. Background
            </h2>
            <p className="text-[1rem] md:text-[1.1rem] leading-[1.75] text-[var(--color-text-secondary)] font-light mb-6">
              Based in India, I create dynamic visual experiences through FPV drone
              cinematography and professional video editing. I work closely with film 
              productions, brands, agencies, and businesses to deliver cinematic aerial 
              footage that tells stories through movement.
            </p>
            <p className="text-[1rem] md:text-[1.1rem] leading-[1.75] text-[var(--color-text-secondary)] font-light mb-0">
              My journey began with a fascination for aviation and visual arts. Over the years, 
              I merged these disciplines, using FPV drones not just as flying cameras, but as 
              instruments for emotional storytelling.
            </p>
          </motion.div>

          {/* Approach Container */}
          <motion.div variants={fadeInUp} className={`md:col-span-12 lg:col-span-6 ${glassyContainerClass}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-xs font-semibold tracking-[0.25em] text-[var(--color-accent)] uppercase block mb-6 border-b border-white/[0.08] pb-4">
              02. Approach
            </h2>
            <p className="text-[1rem] md:text-[1.1rem] leading-[1.75] text-[var(--color-text-secondary)] font-light mb-6">
              Every project begins with understanding the core narrative. I combine
              technical piloting precision with a cinematographer&apos;s eye for framing
              and an editor&apos;s sense of pacing. 
            </p>
            <p className="text-[1rem] md:text-[1.1rem] leading-[1.75] text-[var(--color-text-secondary)] font-light mb-0">
              From high-speed automotive tracking to intimate indoor walkthroughs, 
              the objective is always the same: capture footage that doesn&apos;t just 
              look impressive, but actively moves the story forward.
            </p>
          </motion.div>

          {/* BTS Image Container (Optional Visual Break) */}
          <motion.div variants={fadeInUp} className={`md:col-span-12 lg:col-span-5 ${glassyContainerClass} p-0 overflow-hidden`}>
            <div className="relative w-full h-[300px] lg:h-full">
              <Image 
                src="/images/bts/bts_2_pilot_1786228064668.png" 
                alt="Behind The Scenes"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Expertise Container */}
          <motion.div variants={fadeInUp} className={`md:col-span-12 lg:col-span-7 ${glassyContainerClass}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-xs font-semibold tracking-[0.25em] text-[var(--color-accent)] uppercase block mb-8 border-b border-white/[0.08] pb-4">
              03. Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div key={skill} className="flex items-center gap-3 group/skill cursor-default p-4 rounded-xl bg-white/[0.02] border border-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                  <span className="text-[var(--color-accent)] font-mono text-[0.65rem] tracking-wider opacity-60 bg-[var(--color-accent)]/10 px-2 py-1 rounded">
                    {(i+1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-[0.95rem] tracking-wide text-[var(--color-text-primary)] font-medium group-hover/skill:text-white transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Arsenal Container */}
          <motion.div variants={fadeInUp} className={`md:col-span-12 lg:col-span-8 ${glassyContainerClass}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h2 className="text-xs font-semibold tracking-[0.25em] text-[var(--color-accent)] uppercase block mb-8 border-b border-white/[0.08] pb-4">
              04. Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gear.map((item, index) => (
                <div key={item.name} className="flex flex-col group/gear">
                  <span className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-2">
                    {item.category}
                  </span>
                  <span className="text-[1.05rem] tracking-wide text-[var(--color-text-primary)] font-medium block mb-2 group-hover/gear:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                  <p className="text-[0.85rem] text-[var(--color-text-secondary)] leading-relaxed mb-0">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Availability / CTA Container */}
          <motion.div variants={fadeInUp} className={`md:col-span-12 lg:col-span-4 ${glassyContainerClass} bg-[var(--color-accent)]/5 border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/10`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <span className="text-xs font-semibold tracking-[0.18em] text-[var(--color-text-muted)] uppercase block mb-4">
              Availability
            </span>
            <h3 className="font-heading font-semibold text-2xl md:text-3xl tracking-tight mb-4 text-[var(--color-text-primary)]">
              {siteConfig.availability}.
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-8 tracking-[0.1em] uppercase font-medium">
              Based in India <br/> <span className="text-[var(--color-text-primary)]">Available Worldwide</span>
            </p>
            <Link href="/contact" className="mt-auto group/btn inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors border border-white/10 px-6 py-4 rounded-full hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 w-fit">
              <span>Book a Project</span>
              <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
