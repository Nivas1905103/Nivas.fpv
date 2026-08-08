"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const btsItems = [
  {
    label: "Drone Preparation",
    description: "Pre-flight checks, calibration, and route planning",
  },
  {
    label: "The Pilot",
    description: "Goggle-immersed flying with precision control",
  },
  {
    label: "On Location",
    description: "Scouting, setup, and adapting to environments",
  },
  {
    label: "The Flight",
    description: "High-speed FPV sequences captured in real-time",
  },
  {
    label: "The Edit",
    description: "Timeline assembly, pacing, and narrative structure",
  },
  {
    label: "Color Grading",
    description: "Cinematic color science applied to every frame",
  },
];

export default function BehindTheFlight() {
  return (
    <section id="behind-the-flight" className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-site">
        <SectionHeading
          label="Process"
          title="Behind the Flight"
          subtitle="The professionalism behind the final footage."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {btsItems.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="group relative aspect-[4/3] bg-[var(--color-bg-secondary)] overflow-hidden"
            >
              {/* Placeholder for BTS photos — replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="heading-lg text-[6rem] font-bold text-white/[0.03]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="tech-label text-[var(--color-accent)] block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="heading-sm text-sm mb-1 text-[var(--color-text-primary)]">
                  {item.label}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/5 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
