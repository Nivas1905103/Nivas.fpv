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
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              variants={fadeInUp}
              className={`relative overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,51,51,0.2)] hover:bg-white/[0.06] hover:border-white/[0.15] ${
                activeIndex === i ? "bg-white/[0.08] border-white/[0.2] shadow-[0_20px_40px_-15px_rgba(255,51,51,0.2)]" : ""
              } flex flex-col`}
            >
              {/* Glossy gradient reflection on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <button
                className="w-full px-6 py-8 md:px-8 md:py-10 flex flex-col items-center justify-center text-center group z-10 relative flex-1 min-h-[180px]"
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                aria-expanded={activeIndex === i}
              >
                <h3 className="heading-md text-lg md:text-xl group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <motion.div
                  className="mt-6 w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.05] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-black transition-colors duration-300"
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xl leading-none -mt-[2px]">+</span>
                </motion.div>
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
                    <div className="pb-8 px-6 md:px-8 flex flex-col items-center text-center">
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 w-full max-w-[280px]">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="text-sm text-[var(--color-text-muted)] flex items-start text-left gap-3"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0 mt-1.5" />
                            <span className="leading-snug">{detail}</span>
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
          className="mt-10 md:mt-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="body-lg mb-7 md:mb-8">Planning a production?</p>
          <Link href="/contact" className="btn-primary">
            Start a Project
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
