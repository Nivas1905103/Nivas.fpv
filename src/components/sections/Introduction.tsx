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

      <div className="container-site relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Big Editorial Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mb-16 md:mb-24 text-center w-full"
        >
          <h2 className="heading-xl max-w-5xl mx-auto uppercase tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)', lineHeight: 1.1 }}>
            FLY DIFFERENT<span className="text-[var(--color-accent)]">.</span>
          </h2>
        </motion.div>

        {/* Premium Bio Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-8 md:p-16 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/[0.15] hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 cursor-default">
            <p className="body-lg text-[var(--color-text-primary)] leading-relaxed md:leading-loose text-lg md:text-2xl font-light mb-8 transition-colors duration-500">
              I am Nivas — an FPV drone cinematographer and video editor creating
              dynamic visual experiences for films, brands and commercial
              productions across India.
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mx-auto mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="body-lg text-[var(--color-text-secondary)] leading-relaxed md:leading-loose text-base md:text-xl font-light group-hover:text-white/90 transition-colors duration-500">
              I don&apos;t just capture footage. I understand the entire visual
              production pipeline — from concept to final film. Every flight is
              a shot. Every shot is a story.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
