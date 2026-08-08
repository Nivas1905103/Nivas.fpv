"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { testimonials, clientLogos } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  // Don't render if no real testimonials or logos exist
  const hasTestimonials = testimonials.length > 0;
  const hasLogos = clientLogos.length > 0;

  if (!hasTestimonials && !hasLogos) return null;

  return (
    <section id="testimonials" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-site">
        <SectionHeading
          label="Trust"
          title="Clients & Collaborations"
          align="center"
        />

        {/* Client Logos */}
        {hasLogos && (
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {clientLogos.map((client) => (
              <motion.div
                key={client.name}
                variants={fadeInUp}
                className="opacity-40 hover:opacity-80 transition-opacity duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-8 md:h-10 w-auto grayscale"
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Testimonials */}
        {hasTestimonials && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, i) => (
              <motion.blockquote
                key={i}
                variants={fadeInUp}
                className="p-8 md:p-10 border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                <p className="body-lg mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="block text-sm font-medium text-[var(--color-text-primary)]">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-[var(--color-text-muted)] mt-0.5">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
