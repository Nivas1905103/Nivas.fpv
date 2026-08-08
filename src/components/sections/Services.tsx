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
          className="border-t border-[var(--color-border)]"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              variants={fadeInUp}
              className="border-b border-[var(--color-border)]"
            >
              <button
                className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
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
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-12 md:pl-20 grid grid-cols-1 md:grid-cols-2 gap-6">
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
