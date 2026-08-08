"use client";

import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 md:mb-20 ${align === "center" ? "text-center" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
    >
      {label && (
        <span className="tech-label block mb-4 text-[var(--color-accent)]">
          {label}
        </span>
      )}
      <h2 className="heading-lg">{title}</h2>
      {subtitle && (
        <p className="body-lg mt-4 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
