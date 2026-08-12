"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

import LiquidBackground from "@/components/ui/LiquidBackground";

const fpvCapabilities = [
  {
    title: "Low-Altitude Movement",
    description: "Navigate inches above the ground, through tight spaces, and along surfaces impossible for traditional drones.",
  },
  {
    title: "High-Speed Tracking",
    description: "Chase vehicles, athletes, and subjects at speeds exceeding 120km/h with cinematic precision.",
  },
  {
    title: "Indoor Flying",
    description: "Fly through interiors, hallways, staircases, and confined spaces with full creative control.",
  },
  {
    title: "Dynamic Transitions",
    description: "Seamless ground-to-air transitions, dive-throughs, and perspective shifts in a single take.",
  },
  {
    title: "One-Take Sequences",
    description: "Continuous unbroken shots that create immersive visual journeys impossible to replicate with any other tool.",
  },
  {
    title: "Subject Tracking",
    description: "Follow human subjects, vehicles, and action sequences with intimate, dynamic camera movement.",
  },
];

export default function WhyFPV() {
  return (
    <section id="why-fpv" className="relative section-padding bg-[var(--color-bg-primary)] overflow-hidden">
      
      <LiquidBackground opacity={0.1} color1="#ff3333" color2="#cc0000" />

      <div className="container-site relative z-10">
        <SectionHeading
          label="Why FPV"
          title="Not Just an Aerial Camera."
          subtitle="FPV drones unlock camera movements that no crane, gimbal, or traditional drone can achieve."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {fpvCapabilities.map((cap) => (
            <motion.div
              key={cap.title}
              className="relative overflow-hidden h-[260px] md:h-[300px] rounded-[2rem] bg-white/[0.03] border border-white/[0.05] group cursor-pointer transition-all duration-[600ms] ease-out hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(255,51,51,0.25)] hover:bg-white/[0.06] hover:border-white/[0.15] backdrop-blur-xl"
              variants={fadeInUp}
            >
              {/* Glossy gradient reflection on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center items-center">
                {/* Content Wrapper - moves up on hover */}
                <div className="relative w-full flex flex-col items-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-6">
                  
                  {/* Title with glossy text glow */}
                  <h3 className="heading-sm text-lg md:text-xl text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-wide transition-all duration-500 group-hover:from-white group-hover:to-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                    {cap.title}
                  </h3>

                  {/* Description - absolute positioned to not affect initial flex centering */}
                  <div className="absolute top-full left-0 w-full pt-4 md:pt-5 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
                    <p className="text-[0.9rem] md:text-[0.95rem] text-[var(--color-text-secondary)] leading-relaxed text-center">
                      {cap.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
