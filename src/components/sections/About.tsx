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

          {/* Premium Glassmorphism Bio Card */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="relative px-8 md:px-16 py-16 md:py-24 rounded-[2.5rem] bg-[#0a0a0a]/40 backdrop-blur-3xl border-2 border-white/[0.15] shadow-2xl"
            >
              {/* Subtle top red glow */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[2.5rem] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-70"></div>
              
              <span className="tech-label text-[var(--color-accent)] block mb-10 tracking-[0.3em]">
                ABOUT
              </span>
              <h2 className="heading-xl mb-6 text-5xl md:text-7xl drop-shadow-lg">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h2>
              <p className="tracking-[0.2em] text-xs md:text-sm text-[var(--color-text-muted)] mb-12 uppercase font-medium">
                FPV Drone Cinematographer <span className="text-[var(--color-accent)] mx-2">/</span> Editor <span className="text-[var(--color-accent)] mx-2">/</span> Visual Storyteller
              </p>

              <div className="space-y-8 mb-16">
                <p className="body-lg leading-loose text-[var(--color-text-secondary)] text-lg md:text-xl font-light">
                  I create dynamic visual experiences through FPV drone
                  cinematography and professional video editing. My work spans
                  commercial films, brand campaigns, real estate,
                  automotive, travel, and events.
                </p>
                <p className="body-lg leading-loose text-[var(--color-text-secondary)] text-lg md:text-xl font-light">
                  Every project begins with understanding the story. I combine
                  technical FPV piloting skill with a cinematographer&apos;s eye
                  and an editor&apos;s sense of pacing to deliver footage that
                  doesn&apos;t just look impressive — it moves the narrative
                  forward.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  {[
                    "FPV Piloting",
                    "Cinematography",
                    "Video Editing",
                    "Color Grading",
                    "Sound Design",
                    "Creative Direction",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-4 py-2 group cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:shadow-[0_0_10px_var(--color-accent)] transition-all duration-300" />
                      <span className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gear - Subtle */}
              <div className="pt-14 pb-4 border-t border-white/[0.08]">
                <span className="tech-label text-[var(--color-text-muted)] block mb-10 tracking-[0.2em]">
                  Equipment Arsenal
                </span>
                <div className="flex flex-wrap gap-4 mb-16">
                  {gear.map((item) => (
                    <span
                      key={item.name}
                      className="text-xs text-[var(--color-text-muted)] px-4 py-2 rounded-full border border-white/[0.08] hover:border-[var(--color-accent)]/30 hover:text-[var(--color-text-primary)] transition-all duration-300 bg-white/[0.02]"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                
                <Link href="/about" className="btn-secondary inline-flex text-xs group mt-6 mb-2">
                  Read Full Bio
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
