"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import LiquidBackground from "@/components/ui/LiquidBackground";

const pillars = [
  "FPV Piloting",
  "Cinematography",
  "Editing",
  "Storytelling",
];

const pipeline = [
  "Concept",
  "Flight",
  "Cinematography",
  "Editing",
  "Final Film",
];

export default function Introduction() {
  return (
    <section className="relative section-padding bg-[var(--color-bg-primary)] overflow-hidden" id="introduction">
      
      {/* Liquid / Organic Premium Background */}
      <LiquidBackground />

      <div className="container-site relative z-10">
        {/* Big Editorial Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mb-16 md:mb-32"
        >
          <h2 className="heading-xl max-w-5xl uppercase tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)', lineHeight: 0.9 }}>
            FLY DIFFERENT<span className="text-[var(--color-accent)]">.</span>
          </h2>
        </motion.div>

        {/* Bio Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 md:mb-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <p className="body-lg text-[var(--color-text-secondary)] leading-relaxed md:leading-loose text-lg md:text-xl">
              I am Nivas — an FPV drone cinematographer and video editor creating
              dynamic visual experiences for films, brands and commercial
              productions across India.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <p className="body-lg text-[var(--color-text-secondary)] leading-relaxed md:leading-loose text-lg md:text-xl">
              I don&apos;t just capture footage. I understand the entire visual
              production pipeline — from concept to final film. Every flight is
              a shot. Every shot is a story.
            </p>
          </motion.div>
        </div>

        {/* Four Pillars */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] mb-20 md:mb-32 border border-[var(--color-border)]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar}
              className="bg-[var(--color-bg-primary)] p-8 md:p-12 text-center flex items-center justify-center backdrop-blur-sm bg-opacity-90 transition-colors duration-500 hover:bg-[var(--color-bg-card)]"
              variants={fadeInUp}
            >
              <span className="heading-sm text-sm md:text-lg tracking-widest uppercase">{pillar}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Pipeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
        >
          {pipeline.map((step, i) => (
            <motion.div key={step} className="flex items-center gap-4 md:gap-8" variants={fadeInUp}>
              <span className="heading-sm text-xs md:text-base tracking-widest uppercase text-[var(--color-text-primary)]">
                {step}
              </span>
              {i < pipeline.length - 1 && (
                <span className="text-[var(--color-accent)] text-xl md:text-2xl font-light">→</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
