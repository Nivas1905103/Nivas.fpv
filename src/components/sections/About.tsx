"use client";

import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { gear } from "@/data/gear";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* Portrait */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="relative"
          >
            <div className="aspect-[3/4] bg-[var(--color-bg-card)] relative overflow-hidden">
              <Image 
                src="/images/about/portrait-real.jpg" 
                alt="Nivas - Portrait"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* Bio Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              <span className="tech-label text-[var(--color-accent)] block mb-4">
                About
              </span>
              <h2 className="heading-lg mb-2">Nivas</h2>
              <p className="heading-sm text-xs text-[var(--color-text-muted)] mb-8">
                FPV Drone Cinematographer / Editor / Visual Storyteller
              </p>

              <div className="space-y-4 mb-12">
                <p className="body-lg">
                  I create dynamic visual experiences through FPV drone
                  cinematography and professional video editing. My work spans
                  commercial films, brand campaigns, real estate,
                  automotive, travel, and events.
                </p>
                <p className="body-lg">
                  Every project begins with understanding the story. I combine
                  technical FPV piloting skill with a cinematographer&apos;s eye
                  and an editor&apos;s sense of pacing to deliver footage that
                  doesn&apos;t just look impressive — it moves the narrative
                  forward.
                </p>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                {[
                  "FPV Piloting",
                  "Cinematography",
                  "Video Editing",
                  "Color Grading",
                  "Sound Design",
                  "Creative Direction",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Gear - Subtle */}
              <div className="pt-8 border-t border-[var(--color-border)]">
                <span className="tech-label text-[var(--color-text-muted)] block mb-4">
                  Equipment
                </span>
                <div className="flex flex-wrap gap-3">
                  {gear.map((item) => (
                    <span
                      key={item.name}
                      className="text-xs text-[var(--color-text-muted)] px-3 py-1.5 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
