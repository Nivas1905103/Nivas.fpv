"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Skip loading animation if page loads very fast or reduced motion is preferred
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    // Simulate loading progress tied to page readiness
    const startTime = Date.now();
    const minDuration = 1200; // Minimum display time
    const maxDuration = 2500; // Maximum display time

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const naturalProgress = Math.min((elapsed / minDuration) * 100, 100);
      setProgress(Math.floor(naturalProgress));

      if (elapsed >= maxDuration || (document.readyState === "complete" && elapsed >= minDuration)) {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[var(--color-bg-primary)] flex flex-col items-center justify-center"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] },
          }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold tracking-[0.2em] uppercase mb-12"
          >
            NIVAS<span className="text-[var(--color-accent)]">.</span>FPV
          </motion.div>

          {/* Progress */}
          <div className="w-48 flex flex-col items-center gap-4">
            <div className="w-full h-[1px] bg-[var(--color-border)] relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[var(--color-accent)]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <span className="font-[family-name:var(--font-heading)] text-xs tracking-[0.2em] text-[var(--color-text-muted)] tabular-nums">
              {String(progress).padStart(3, "0")}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
