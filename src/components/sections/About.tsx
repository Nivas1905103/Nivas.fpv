"use client";

import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { gear } from "@/data/gear";
import Image from "next/image";
import LiquidBackground from "@/components/ui/LiquidBackground";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-[var(--color-bg-primary)] overflow-hidden">
      
      {/* Subtle Dynamic Background */}
      <LiquidBackground opacity={0.08} color1="#E63946" color2="#330000" />

      <div className="container-site relative z-10">
        {/* Strict 12-column grid for precise 45/55 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          
          {/* Image Column: 5/12 (~41%) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="lg:col-span-5 relative"
          >
            {/* Aspect ratio optimized for portrait cinematic framing */}
            <div className="aspect-[4/5] bg-[var(--color-bg-secondary)] relative overflow-hidden rounded-[1rem] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.4)] sticky top-24">
              <Image 
                src="/images/about/portrait-real.jpg" 
                alt="Nivas - Portrait"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
                priority
              />
              {/* Very subtle gradient to ground the image, no heavy glows */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>

          {/* Content Column: 6/12 (~50%), starting at col 7 to leave a 1-col gap */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="w-full"
            >
              {/* 1. SECTION LABEL */}
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-6">
                About
              </span>
              
              {/* 2. MAIN HEADING */}
              <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tighter mb-4 text-[var(--color-text-primary)]">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h2>
              
              {/* 3. PROFESSIONAL TITLES */}
              <div className="mb-10">
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-[var(--color-text-primary)] mb-1">
                  FPV Drone Cinematographer
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-8 bg-[var(--color-accent)]" />
                  <p className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)]">
                    Editor / Visual Storyteller
                  </p>
                </div>
              </div>

              {/* 4. BODY COPY (Max width applied) */}
              <div className="space-y-6 mb-16 max-w-[540px]">
                <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-[var(--color-text-secondary)] font-light">
                  I create dynamic visual experiences through FPV drone
                  cinematography and professional video editing. My work spans
                  commercial films, brand campaigns, real estate,
                  automotive, travel, and events.
                </p>
                <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-[var(--color-text-secondary)] font-light">
                  Every project begins with understanding the story. I combine
                  technical FPV piloting skill with a cinematographer&apos;s eye
                  and an editor&apos;s sense of pacing to deliver footage that
                  doesn&apos;t just look impressive — it moves the narrative
                  forward.
                </p>
              </div>

              {/* 5. CORE EXPERTISE GRID */}
              <div className="mb-16">
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-6">
                  Core Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 max-w-[540px]">
                  {[
                    "FPV Piloting",
                    "Cinematography",
                    "Video Editing",
                    "Color Grading",
                    "Sound Design",
                    "Creative Direction",
                  ].map((skill, i) => (
                    <div key={skill} className="flex items-baseline gap-3 group cursor-default">
                      <span className="text-[var(--color-accent)] font-mono text-[0.65rem] tracking-wider opacity-60">
                        0{i+1}
                      </span>
                      <span className="text-[0.95rem] tracking-wide text-[var(--color-text-primary)] font-light group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. EQUIPMENT ARSENAL */}
              <div className="mb-14">
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-6">
                  Equipment Arsenal
                </h3>
                <div className="flex flex-wrap gap-2.5 max-w-[540px]">
                  {gear.map((item) => (
                    <span
                      key={item.name}
                      className="text-[0.7rem] md:text-xs font-medium tracking-[0.1em] text-[var(--color-text-muted)] bg-white/[0.02] border border-white/[0.05] px-4 py-2.5 rounded-md hover:border-white/[0.15] hover:text-[var(--color-text-secondary)] transition-all duration-300 uppercase whitespace-nowrap"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* 7. CTA LINK */}
              <div>
                <Link href="/about" className="group inline-flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors">
                  <span className="relative pb-1">
                    Read Full Bio
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transition-colors duration-300 group-hover:bg-[var(--color-accent)]" />
                  </span>
                  <span className="text-[var(--color-accent)] transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
