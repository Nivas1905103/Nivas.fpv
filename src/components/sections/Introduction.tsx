"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

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
    <section className="section-padding bg-[var(--color-bg-primary)]" id="introduction">
      <div className="container-site">
        {/* Big Editorial Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mb-16 md:mb-24"
        >
          <h2 className="heading-xl max-w-4xl">
            Fly Different<span className="text-[var(--color-accent)]">.</span>
          </h2>
        </motion.div>

        {/* Bio Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <p className="body-lg">
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
            <p className="body-lg">
              I don&apos;t just capture footage. I understand the entire visual
              production pipeline — from concept to final film. Every flight is
              a shot. Every shot is a story.
            </p>
          </motion.div>
        </div>

        {/* Four Pillars */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] mb-20 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar}
              className="bg-[var(--color-bg-primary)] p-6 md:p-10 text-center"
              variants={fadeInUp}
            >
              <span className="heading-sm text-sm md:text-base">{pillar}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Pipeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {pipeline.map((step, i) => (
            <motion.div key={step} className="flex items-center gap-4 md:gap-6" variants={fadeInUp}>
              <span className="heading-sm text-xs md:text-sm text-[var(--color-text-secondary)]">
                {step}
              </span>
              {i < pipeline.length - 1 && (
                <span className="text-[var(--color-accent)] text-lg">→</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
