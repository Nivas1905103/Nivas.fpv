"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";

// Approximate city coordinates on a simplified India map (0-100 scale)
const cityPositions: Record<string, { x: number; y: number }> = {
  Chennai: { x: 62, y: 72 },
  Bengaluru: { x: 55, y: 70 },
  Coimbatore: { x: 54, y: 76 },
  Hyderabad: { x: 56, y: 58 },
  Mumbai: { x: 38, y: 52 },
  Pune: { x: 42, y: 55 },
  Delhi: { x: 50, y: 24 },
  Kerala: { x: 48, y: 82 },
  Goa: { x: 38, y: 60 },
  Rajasthan: { x: 38, y: 30 },
};

export default function Availability() {
  return (
    <section id="availability" className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-site">
        <SectionHeading
          label="Location"
          title="Available for Projects Across India"
          subtitle="Based in India and available for FPV cinematography projects in any city. Travel-ready for shoots nationwide."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* India Map SVG */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="relative aspect-square max-w-md mx-auto w-full"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              aria-label="Map of India showing service coverage"
              role="img"
            >
              {/* Simplified India outline */}
              <path
                d="M50 5 L60 8 L68 12 L72 18 L74 25 L72 32 L74 38 L70 42 L72 48 L68 52 L65 58 L68 62 L65 68 L62 72 L58 78 L55 82 L50 88 L48 85 L45 80 L42 76 L38 72 L35 68 L32 62 L30 56 L28 50 L30 45 L28 40 L30 35 L32 30 L35 25 L38 20 L42 15 L46 10 Z"
                fill="none"
                stroke="var(--color-border-hover)"
                strokeWidth="0.5"
                className="opacity-40"
              />

              {/* City dots */}
              {siteConfig.cities.map((city) => {
                const pos = cityPositions[city];
                if (!pos) return null;
                return (
                  <g key={city}>
                    {/* Pulse ring */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="2"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="0.3"
                      opacity="0.4"
                    >
                      <animate
                        attributeName="r"
                        values="1.5;3;1.5"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.4;0;0.4"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    {/* City dot */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="1"
                      fill="var(--color-accent)"
                    />
                    {/* City label */}
                    <text
                      x={pos.x + 2.5}
                      y={pos.y + 0.5}
                      className="fill-[var(--color-text-muted)]"
                      style={{ fontSize: "2.5px", fontFamily: "var(--font-heading)" }}
                    >
                      {city}
                    </text>
                  </g>
                );
              })}
            </svg>
          </motion.div>

          {/* City List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-2 gap-3">
              {siteConfig.cities.map((city) => (
                <motion.div
                  key={city}
                  variants={fadeInUp}
                  className="flex items-center gap-3 py-2"
                >
                  <span className="w-1.5 h-1.5 bg-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {city}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.p
              variants={fadeInUp}
              className="mt-8 body-sm"
            >
              And other locations across India — available for travel
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
