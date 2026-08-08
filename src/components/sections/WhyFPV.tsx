"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const fpvCapabilities = [
  {
    title: "Low-Altitude Movement",
    description: "Navigate inches above the ground, through tight spaces, and along surfaces impossible for traditional drones.",
  },
  {
    title: "High-Speed Tracking",
    description: "Chase vehicles, athletes, and subjects at speeds exceeding 120km/h with cinematic precision.",
  },
  {
    title: "Indoor Flying",
    description: "Fly through interiors, hallways, staircases, and confined spaces with full creative control.",
  },
  {
    title: "Dynamic Transitions",
    description: "Seamless ground-to-air transitions, dive-throughs, and perspective shifts in a single take.",
  },
  {
    title: "One-Take Sequences",
    description: "Continuous unbroken shots that create immersive visual journeys impossible to replicate with any other tool.",
  },
  {
    title: "Subject Tracking",
    description: "Follow human subjects, vehicles, and action sequences with intimate, dynamic camera movement.",
  },
];

export default function WhyFPV() {
  return (
    <section id="why-fpv" className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-site">
        <SectionHeading
          label="Why FPV"
          title="Not Just an Aerial Camera."
          subtitle="FPV drones unlock camera movements that no crane, gimbal, or traditional drone can achieve."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {fpvCapabilities.map((cap) => (
            <motion.div
              key={cap.title}
              className="bg-[var(--color-bg-primary)] p-8 md:p-10 group hover:bg-[var(--color-bg-secondary)] transition-colors duration-500"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-[var(--color-accent)] mb-6 group-hover:scale-150 transition-transform duration-300" />
              <h3 className="heading-sm text-sm mb-3 text-[var(--color-text-primary)]">
                {cap.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
