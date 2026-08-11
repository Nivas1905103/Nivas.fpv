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
          className="mb-20 md:mb-40 text-center"
        >
          <h2 className="heading-xl max-w-5xl mx-auto uppercase tracking-tighter" style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)', lineHeight: 0.9 }}>
            FLY DIFFERENT<span className="text-[var(--color-accent)]">.</span>
          </h2>
        </motion.div>

        {/* Premium Bio Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mb-32 md:mb-48 max-w-5xl mx-auto"
        >
          <div className="group bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-12 md:p-24 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/[0.15] hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 cursor-default">
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

        {/* Pipeline Process Flow */}
        <div className="mt-12 md:mt-24">
          <div className="text-center mb-16">
            <span className="tech-label px-4 py-2 border border-white/10 rounded-full text-[var(--color-text-muted)] tracking-widest uppercase text-xs bg-white/[0.01]">
              The Pipeline
            </span>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto relative gap-8 md:gap-0"
          >
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
            
            {pipeline.map((step, i) => (
              <div key={step} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                <motion.div className="relative z-10 flex flex-col items-center group w-32" variants={fadeInUp}>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-[var(--color-accent)] group-hover:shadow-[0_0_20px_rgba(230,57,70,0.2)] group-hover:-translate-y-1">
                    <span className="text-[var(--color-accent)] font-mono text-xs md:text-sm">0{i + 1}</span>
                  </div>
                  <span className="heading-sm text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] group-hover:text-white transition-colors duration-300 text-center">
                    {step}
                  </span>
                </motion.div>
                
                {/* Connecting Arrow for Mobile */}
                {i < pipeline.length - 1 && (
                  <motion.div className="md:hidden text-[var(--color-border)] my-4 text-xl" variants={fadeInUp}>
                    ↓
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
