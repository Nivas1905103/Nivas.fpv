"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

// 6 Truthful Production Pipeline Stages
const pipelineStages = [
  {
    step: "01",
    phase: "PRE-PRODUCTION",
    title: "Flight & Story Planning",
    description: "Location safety analysis, airspace clearance, shot blocking, and kinetic choreography planning.",
    specs: "Risk Assessment · Flight Path Design",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <circle cx="10" cy="9" r="1" fill="#e50914" />
      </svg>
    ),
  },
  {
    step: "02",
    phase: "FPV FLIGHT",
    title: "Manual High-Speed Piloting",
    description: "6-DOF manual acrobatic flight, continuous one-takes, indoor fly-throughs, and 120+ km/h chase lines.",
    specs: "6-Axis Vector · Sub-Meter Precision",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <circle cx="12" cy="12" r="2" fill="#e50914" />
      </svg>
    ),
  },
  {
    step: "03",
    phase: "CINEMATOGRAPHY",
    title: "4K Sensor Capture",
    description: "180° shutter discipline, manual exposure tuning, ND filter management, and high-bitrate 10-bit Log footage.",
    specs: "4K Master · 10-Bit Dynamic Range",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" stroke="#e50914" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    step: "04",
    phase: "EDIT",
    title: "Pacing & Narrative Flow",
    description: "Temporal cutting, rhythmic timing, multi-shot sequencing, and seamless transitions from ground to aerial.",
    specs: "Speed Ramping · Frame Pacing",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <polygon points="5 3 19 12 5 21 5 3" />
        <line x1="19" y1="5" x2="19" y2="19" stroke="#e50914" />
      </svg>
    ),
  },
  {
    step: "05",
    phase: "COLOR GRADE",
    title: "DaVinci Color Science",
    description: "Custom film LUT development, shadow and highlight recovery, skin tone preservation, and cinematic contrast.",
    specs: "Rec.709 / HDR · Film Emulation",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18z" fill="#e50914" fillOpacity="0.2" />
        <line x1="12" y1="3" x2="12" y2="21" stroke="#e50914" />
      </svg>
    ),
  },
  {
    step: "06",
    phase: "FINAL DELIVERY",
    title: "Spatial Foley & Master Export",
    description: "Custom wind and kinetic sound effects, broadcast-ready 4K renders, and multi-aspect ratio social exports.",
    specs: "Spatial Audio · ProRes / H.265 Master",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" stroke="#e50914" />
      </svg>
    ),
  },
];

const telemetrySpecs = [
  "4K D-LOG CAPTURE",
  "10-BIT HIGH BITRATE",
  "120+ KM/H AGILITY",
  "6-AXIS KINETIC VECTOR",
  "PRORES / H.265 MASTER",
  "SPATIAL AUDIO DESIGN",
  "FULL INDOOR / OUTDOOR",
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative pt-24 pb-28 md:pt-32 md:pb-36 bg-[#050505] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/2 left-0 w-[600px] h-[500px] bg-red-600/[0.04] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[400px] bg-red-900/[0.04] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Technical Grid Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(229,9,20,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>Capabilities / 04</span>
          </div>

          <h2 className="font-heading font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Full Production Capability<span className="text-[var(--color-accent)]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            A continuous, end-to-end creative pipeline. From initial flight trajectory
            choreography and sensor acquisition to meticulous DaVinci color grading and
            final cinematic master delivery.
          </p>
        </div>

        {/* Cinematic Production Pipeline Visualization */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative"
        >
          {/* Desktop Connecting Trajectory Line */}
          <div
            className="hidden lg:block absolute top-1/2 inset-x-8 h-[2px] -translate-y-1/2 bg-gradient-to-r from-red-500/10 via-red-500/40 to-red-500/10 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 relative z-10">
            {pipelineStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.step}
                  variants={fadeInUp}
                  className="group relative rounded-[1.5rem] bg-[#120e0e]/75 backdrop-blur-[18px] border border-white/[0.08] hover:border-red-500/40 hover:bg-[#181111]/80 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(229,9,20,0.12)] flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Red Accent Glow Line on Hover */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Bar: Step & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-red-500/10 border border-red-500/30 flex items-center justify-center font-mono text-[11px] font-bold text-red-400">
                          {stage.step}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                          {stage.phase}
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/70 group-hover:text-red-400 transition-colors shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Stage Title */}
                    <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-white mb-2.5 group-hover:text-red-100 transition-colors">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed mb-4">
                      {stage.description}
                    </p>
                  </div>

                  {/* Technical Spec Badge */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-mono text-red-400/90 font-medium">
                      {stage.specs}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-red-500 transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Telemetry Ticker / Technical Specs Strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-2xl bg-[#120e0e]/60 backdrop-blur-[16px] border border-white/[0.06] py-4 px-6 overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-white/60 tracking-wider">
            {telemetrySpecs.map((spec) => (
              <div key={spec} className="flex items-center gap-3">
                <span className="text-red-500">◆</span>
                <span className="hover:text-white transition-colors">{spec}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
