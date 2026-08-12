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
      
      {/* Dynamic Background for Glassmorphism to reflect */}
      <LiquidBackground opacity={0.12} color1="#880000" color2="#ff3333" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* Portrait */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="relative"
          >
            <div className="aspect-[3/4] bg-[var(--color-bg-secondary)] relative overflow-hidden rounded-2xl border border-white/[0.05] shadow-2xl sticky top-24">
              <Image 
                src="/images/about/portrait-real.jpg" 
                alt="Nivas - Portrait"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Editorial Minimalist Bio Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="relative py-12 lg:py-24 lg:pl-10"
            >
              <span className="tech-label text-[var(--color-accent)] block mb-6 tracking-[0.3em]">
                ABOUT
              </span>
              
              <h2 className="heading-xl mb-6 text-6xl md:text-8xl drop-shadow-lg tracking-tight">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h2>
              
              <p className="tracking-[0.2em] text-sm md:text-base text-[var(--color-text-primary)] mb-14 uppercase font-medium border-l-2 border-[var(--color-accent)] pl-6 py-1">
                FPV Drone Cinematographer <br className="hidden md:block" /> 
                <span className="text-[var(--color-text-muted)] font-normal text-xs md:text-sm mt-2 block">
                  Editor / Visual Storyteller
                </span>
              </p>

              <div className="space-y-8 mb-20 max-w-2xl">
                <p className="body-lg leading-relaxed text-[var(--color-text-secondary)] text-xl md:text-2xl font-light">
                  I create dynamic visual experiences through FPV drone
                  cinematography and professional video editing. My work spans
                  commercial films, brand campaigns, real estate,
                  automotive, travel, and events.
                </p>
                <p className="body-lg leading-relaxed text-[var(--color-text-muted)] text-lg md:text-xl font-light">
                  Every project begins with understanding the story. I combine
                  technical FPV piloting skill with a cinematographer&apos;s eye
                  and an editor&apos;s sense of pacing to deliver footage that
                  doesn&apos;t just look impressive — it moves the narrative
                  forward.
                </p>
              </div>

              {/* Minimalist Skills Grid */}
              <div className="mb-20">
                <h3 className="tech-label text-[var(--color-text-primary)] mb-8 tracking-[0.2em] uppercase border-b border-white/[0.1] pb-4">
                  Core Expertise
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                  {[
                    "FPV Piloting",
                    "Cinematography",
                    "Video Editing",
                    "Color Grading",
                    "Sound Design",
                    "Creative Direction",
                  ].map((skill, i) => (
                    <div key={skill} className="group relative overflow-hidden cursor-default">
                      <span className="text-sm md:text-base text-[var(--color-text-secondary)] group-hover:text-white transition-colors duration-500 font-light tracking-wide">
                        <span className="text-[var(--color-accent)] opacity-50 mr-2 text-xs">0{i+1}</span>
                        {skill}
                      </span>
                      {/* Underline effect */}
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-accent)] group-hover:w-full transition-all duration-500 ease-out mt-1" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Gear List */}
              <div>
                <h3 className="tech-label text-[var(--color-text-primary)] mb-8 tracking-[0.2em] uppercase border-b border-white/[0.1] pb-4">
                  Equipment Arsenal
                </h3>
                <div className="flex flex-wrap gap-3 mb-12">
                  {gear.map((item) => (
                    <span
                      key={item.name}
                      className="text-sm text-[var(--color-text-muted)] px-5 py-2.5 rounded border border-white/[0.1] hover:border-[var(--color-accent)] hover:text-white transition-all duration-300 bg-transparent uppercase tracking-wider"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                
                <Link href="/about" className="group inline-flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
                  <span className="border-b border-current pb-1">Read Full Bio</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
