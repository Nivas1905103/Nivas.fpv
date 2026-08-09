"use client";

import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
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
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {capabilities.map((cap) => (
            <div
              key={cap}
              className="p-5 md:p-6 border border-[var(--color-border)] bg-black/20 backdrop-blur-md hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-bg-card)] transition-all duration-300 group"
            >
              <span className="text-sm font-[family-name:var(--font-heading)] font-medium tracking-[0.05em] uppercase text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                {cap}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Technical specs */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {["FPV", "4K", "Cinematic", "HDR"].map((spec) => (
            <span key={spec} className="tech-label text-[var(--color-text-muted)] bg-black/40 backdrop-blur-sm px-4 py-1 rounded-full border border-[var(--color-border)]">
              {spec}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
