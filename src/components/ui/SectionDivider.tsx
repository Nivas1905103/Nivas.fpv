"use client";

import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export default function SectionDivider() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className="w-full flex justify-center py-12 md:py-16 relative z-20 bg-[var(--color-bg-primary)]"
    >
      <div className="h-[1px] w-32 md:w-64 bg-gradient-to-r from-transparent via-white/10 to-transparent relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/[0.02] backdrop-blur-xl rounded-full border border-white/[0.05] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-50 shadow-[0_0_10px_var(--color-accent)]" />
        </div>
      </div>
    </motion.div>
  );
}
