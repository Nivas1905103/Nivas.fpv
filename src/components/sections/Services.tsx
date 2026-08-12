"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-site">
        <SectionHeading
          label="Services"
          title="What I Do"
          subtitle="End-to-end FPV cinematography and post-production services for professional commercial work."
          subtitleClassName="mt-6 md:mt-10"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col gap-4 md:gap-6 mt-8 md:mt-12"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              variants={fadeInUp}
              className={`relative overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,51,51,0.2)] hover:bg-white/[0.06] hover:border-white/[0.15] ${
                activeIndex === i ? "bg-white/[0.08] border-white/[0.2] shadow-[0_20px_40px_-15px_rgba(255,51,51,0.2)]" : ""
              }`}
            >
              {/* Glossy gradient reflection on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <button
                className="w-full px-6 py-6 md:px-10 md:py-8 flex items-center justify-between text-left group z-10 relative"
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                aria-expanded={activeIndex === i}
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="tech-label text-[var(--color-accent)] w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="heading-md text-lg md:text-2xl group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <motion.span
                  className="text-[var(--color-text-muted)] text-2xl"
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden z-10 relative"
                  >
                    <div className="pb-8 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="text-sm text-[var(--color-text-muted)] flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-[var(--color-accent)] flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="body-lg mb-6">Planning a production?</p>
          <Link href="/contact" className="btn-primary">
            Start a Project
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
