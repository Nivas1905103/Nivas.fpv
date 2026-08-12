"use client";

import { motion } from "motion/react";
import { staggerReveal, textRevealUp, viewportOnce } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  subtitleClassName?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  subtitleClassName = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 md:mb-20 ${align === "center" ? "text-center" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerReveal}
    >
      {label && (
        <div className="overflow-hidden mb-4">
          <motion.span 
            variants={textRevealUp}
            className="tech-label block text-[var(--color-accent)]"
          >
            {label}
          </motion.span>
        </div>
      )}
      <div className="overflow-hidden">
        <motion.h2 
          variants={textRevealUp}
          className="heading-lg"
        >
          {title}
        </motion.h2>
      </div>
      {subtitle && (
        <div className={`overflow-hidden mt-4 ${subtitleClassName}`}>
          <motion.p 
            variants={textRevealUp}
            className="body-lg max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>
      )}
    </motion.div>
  );
}
