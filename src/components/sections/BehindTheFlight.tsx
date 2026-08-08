"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const btsItems = [
  {
    label: "Drone Preparation",
    description: "DJI Avata 2 paired with premium ND filters",
    image: "/images/bts/drone-in-hand.png"
  },
  {
    label: "The Pilot",
    description: "Goggle-immersed flying with precision control",
    image: "/images/bts/bts_2_pilot_1786228064668.png"
  },
  {
    label: "On Location",
    description: "Scouting, setup, and adapting to environments",
    image: "/images/bts/bts_3_location_1786228075470.png"
  },
  {
    label: "Stabilization",
    description: "Post-flight data processing with Gyroflow on MacBook Pro",
    image: "/images/bts/bts_4_gyroflow_1786228085665.png"
  },
  {
    label: "The Edit",
    description: "Timeline assembly and pacing using Adobe Premiere Pro",
    image: "/images/bts/bts_5_premiere_1786228096497.png"
  },
  {
    label: "Color Grading",
    description: "Cinematic color science applied in DaVinci Resolve",
    image: "/images/bts/bts_6_davinci_1786228106884.png"
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
              {/* AI Generated BTS Photo */}
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 z-10" />

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
