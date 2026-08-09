"use client";

import { motion } from "motion/react";

interface LiquidBackgroundProps {
  color1?: string;
  color2?: string;
  opacity?: number;
  className?: string;
}

export default function LiquidBackground({
  color1 = "#E63946", // Default Nivas Red
  color2 = "#ff5555", // Lighter Red
  opacity = 0.15,
  className = "",
}: LiquidBackgroundProps) {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden ${className}`}>
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-screen filter blur-[120px] md:blur-[180px]"
        style={{
          backgroundColor: color1,
          opacity: opacity,
          top: "10%",
          left: "5%",
        }}
      />
      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full mix-blend-screen filter blur-[100px] md:blur-[150px]"
        style={{
          backgroundColor: color2,
          opacity: opacity * 0.8, // Slightly more subtle
          bottom: "10%",
          right: "10%",
        }}
      />
    </div>
  );
}
