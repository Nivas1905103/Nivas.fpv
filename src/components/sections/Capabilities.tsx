"use client";

import { motion } from "motion/react";
import { fadeInUp, viewportOnce, staggerReveal, textRevealUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

import LiquidBackground from "@/components/ui/LiquidBackground";

const capabilities = [
  "FPV Cinematography",
  "Commercial Filming",
  "Indoor FPV",
  "Outdoor FPV",
  "Cinematic Aerials",
  "Action Sequences",
  "Automotive",
  "Real Estate",
  "Travel",
  "Events",
  "Video Editing",
  "Color Grading",
  "Post Production",
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative section-padding bg-[var(--color-bg-secondary)] overflow-hidden">
      
      <LiquidBackground opacity={0.08} color1="#E63946" color2="#330000" />

      <div className="container-site relative z-10">
        <SectionHeading
          label="Capabilities"
          title="Full Production Capability"
        />

        {/* Marquee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mb-16 overflow-hidden"
        >
          <div className="marquee-container py-6 border-y border-[var(--color-border)] backdrop-blur-sm bg-black/10">
            <div className="marquee-track">
              {[...capabilities, ...capabilities].map((cap, i) => (
                <span
                  key={`${cap}-${i}`}
                  className="heading-sm text-sm md:text-base mx-6 md:mx-8 whitespace-nowrap text-[var(--color-text-secondary)]"
                >
                  {cap}
                  <span className="text-[var(--color-accent)] ml-6 md:ml-8">
                    ◆
                  </span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Capability Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerReveal}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 mt-20"
        >
          {capabilities.map((cap, index) => (
            <div key={cap} className="overflow-hidden">
              <motion.div
                variants={textRevealUp}
                className="group relative cursor-default"
              >
                <span className="text-[var(--color-accent)] opacity-40 text-xs font-mono tracking-widest block mb-2 transition-opacity duration-300 group-hover:opacity-100">
                  {"// "}{(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="text-xl md:text-2xl font-[family-name:var(--font-heading)] font-light tracking-wide text-[var(--color-text-primary)] transition-colors duration-300">
                  {cap}
                </span>
                {/* Minimalist animated underline on hover */}
                <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--color-accent)] group-hover:w-12 transition-all duration-500 ease-out" />
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Technical specs */}
        <motion.div
          className="mt-20 flex flex-wrap justify-center gap-6 md:gap-10 pt-10 border-t border-white/[0.05]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerReveal}
        >
          {["FPV", "4K", "Cinematic", "HDR"].map((spec) => (
            <div key={spec} className="overflow-hidden">
              <motion.span 
                variants={textRevealUp}
                className="tech-label text-[var(--color-text-muted)] block"
              >
                {spec}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
