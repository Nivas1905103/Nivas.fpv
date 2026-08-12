// ═══════════════════════════════════════════════════
// NIVAS.FPV — Animation Variants (Motion library)
// ═══════════════════════════════════════════════════

import type { Variants } from "motion/react";

// --- Fade In Up ---
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Fade In ---
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Slide In From Left ---
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Slide In From Right ---
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Scale Up ---
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Stagger Container ---
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// --- Stagger Container (Slower) ---
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// --- Flolapo-Style Text Reveal (Masked upward slide) ---
export const textRevealUp: Variants = {
  hidden: {
    opacity: 0,
    y: "100%", // Start fully pushed down
    rotateX: 25, // Slight 3D rotation for dramatic effect
  },
  visible: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // Very aggressive cubic-bezier (snappy but smooth)
    },
  },
};

// --- Flolapo-Style Staggered Reveal ---
export const staggerReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // Very fast stagger
      delayChildren: 0.1,
    },
  },
};

// --- Text Character Reveal ---
export const charReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Clip Path Reveal (Left to Right) ---
export const clipRevealLTR: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 1,
      ease: [0.85, 0, 0.15, 1],
    },
  },
};

// --- Clip Path Reveal (Bottom to Top) ---
export const clipRevealBTT: Variants = {
  hidden: {
    clipPath: "inset(100% 0 0 0)",
  },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 1,
      ease: [0.85, 0, 0.15, 1],
    },
  },
};

// --- Line Draw ---
export const lineDraw: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.85, 0, 0.15, 1],
    },
  },
};

// --- Viewport Settings (reusable) ---
export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

export const viewportRepeat = {
  once: false,
  margin: "-80px" as const,
};
