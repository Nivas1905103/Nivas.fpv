"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface Capability {
  number: string;
  title: string;
  tagline: string;
  description: string;
  bentoSpan: string;
  icon: (props: { className?: string }) => React.ReactNode;
}

const capabilities: Capability[] = [
  {
    number: "01 / 06",
    title: "Low-Altitude Movement",
    tagline: "Sub-Meter Ground Proximity",
    description:
      "Navigate inches above the terrain, skim water surfaces, and thread through tree lines at ground level where traditional heavy aircraft cannot operate.",
    bentoSpan: "lg:col-span-7",
    icon: ({ className }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Ground reference line */}
        <line x1="2" y1="20" x2="22" y2="20" strokeDasharray="3 3" opacity="0.4" />
        {/* Low swoop path */}
        <path d="M3 8 C 8 18, 14 18, 21 12" />
        {/* Altitude indicator */}
        <circle cx="11" cy="17.2" r="2" fill="#e50914" stroke="#ffffff" strokeWidth="1" />
        <line x1="11" y1="17.2" x2="11" y2="20" stroke="#e50914" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "02 / 06",
    title: "High-Speed Tracking",
    tagline: "120+ km/h Chase Capability",
    description:
      "Lock onto drift cars, motorcycles, athletes, and speedboats at extreme velocities with agile, visceral proximity.",
    bentoSpan: "lg:col-span-5",
    icon: ({ className }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Speed streak lines */}
        <line x1="2" y1="6" x2="10" y2="6" opacity="0.3" />
        <line x1="2" y1="12" x2="6" y2="12" opacity="0.5" />
        <line x1="2" y1="18" x2="11" y2="18" opacity="0.3" />
        {/* Fast forward arrow jet */}
        <path d="M8 4l12 8-12 8 3-8z" />
        <circle cx="17" cy="12" r="1.5" fill="#e50914" />
      </svg>
    ),
  },
  {
    number: "03 / 06",
    title: "Indoor Fly-Throughs",
    tagline: "Prop-Guarded Architectural Flow",
    description:
      "Fly through doorways, stairwells, industrial facilities, and active venues using compact ducted cinewhoops safe around people and interiors.",
    bentoSpan: "lg:col-span-5",
    icon: ({ className }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Architectural doorway frame */}
        <rect x="3" y="3" width="18" height="18" rx="2" opacity="0.4" />
        {/* Interior perspective depth lines */}
        <line x1="3" y1="3" x2="8" y2="8" opacity="0.4" />
        <line x1="21" y1="3" x2="16" y2="8" opacity="0.4" />
        <rect x="8" y="8" width="8" height="8" opacity="0.6" />
        {/* Flight vector entering through portal */}
        <path d="M12 21 C 12 14, 11 12, 12 8" stroke="#e50914" strokeWidth="2" />
        <circle cx="12" cy="8" r="2" fill="#e50914" />
      </svg>
    ),
  },
  {
    number: "04 / 06",
    title: "Dynamic 3D Transitions",
    tagline: "Ground-to-Sky Vertical Dives",
    description:
      "Execute seamless vertical tower dives, inverted rolls, split-second speed ramps, and orientation morphs in a single continuous camera move.",
    bentoSpan: "lg:col-span-7",
    icon: ({ className }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Orbital 3D spiral swoop */}
        <path d="M21 4 C 18 14, 6 6, 3 17 C 2 21, 8 21, 14 18" />
        {/* Dive arrow tip */}
        <path d="M11 21l3-3-3-3" stroke="#e50914" strokeWidth="2" />
        <circle cx="21" cy="4" r="2" fill="#e50914" />
      </svg>
    ),
  },
  {
    number: "05 / 06",
    title: "One-Take Sequences",
    tagline: "Unbroken Cinematic Journeys",
    description:
      "Choreograph continuous single-take masterpieces that transport the viewer across vast locations without hidden cuts or digital stitching.",
    bentoSpan: "lg:col-span-6",
    icon: ({ className }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Continuous infinity / film loop path */}
        <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.267-8-12.356-8-5.096 0-5.096 8 0 8 5.09 0 7.261-8 12.356-8z" />
        <circle cx="12" cy="12" r="2" fill="#e50914" />
      </svg>
    ),
  },
  {
    number: "06 / 06",
    title: "Precision Subject Tracking",
    tagline: "6-DOF Organic Camera Lock",
    description:
      "Orbit, match velocity, and lead talent with an organic point of view that feels physically alive and deeply cinematic.",
    bentoSpan: "lg:col-span-6",
    icon: ({ className }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Crosshair reticle */}
        <circle cx="12" cy="12" r="8" opacity="0.4" />
        <line x1="12" y1="2" x2="12" y2="6" stroke="#e50914" />
        <line x1="12" y1="18" x2="12" y2="22" stroke="#e50914" />
        <line x1="2" y1="12" x2="6" y2="12" stroke="#e50914" />
        <line x1="18" y1="12" x2="22" y2="12" stroke="#e50914" />
        <circle cx="12" cy="12" r="2.5" fill="#e50914" />
      </svg>
    ),
  },
];

export default function WhyFPV() {
  return (
    <section
      id="why-fpv"
      className="relative pt-20 pb-24 md:pt-28 md:pb-36 bg-[#050505] overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════
          BACKGROUND ATMOSPHERE & TECHNICAL GRID
          ═══════════════════════════════════════════════════ */}
      {/* Ambient Red Glow Blooms */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-red-600/[0.06] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-[550px] h-[450px] bg-red-700/[0.04] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Technical Grid Lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Speed Diagonal Motion Lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 40px)`,
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 max-w-7xl mx-auto">
        {/* ═══════════════════════════════════════════════════
            1. SECTION OPENING & ASYMMETRIC HERO COMPOSITION
            ═══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
          {/* Left Column: Editorial Heading & Context (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(229,9,20,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>Why FPV // Motion System</span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="font-heading font-bold uppercase tracking-tight text-[clamp(2.4rem,4.8vw,4.5rem)] leading-[1.05] text-white mb-6">
              Not Just An{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-[var(--color-accent)] drop-shadow-[0_0_30px_rgba(229,9,20,0.3)]">
                Aerial Camera.
              </span>
            </h2>

            {/* Core Value Statement */}
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed mb-8 max-w-2xl">
              FPV creates physical camera movement that conventional tripods, cranes,
              cable-cams, and GPS-locked drones cannot replicate. It transforms the
              camera from a passive observer into an agile, immersive narrative force.
            </p>

            {/* Technical Spec Telemetry Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-6 border-t border-white/[0.08]">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                  Vector DOF
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-white mt-0.5 block">
                  6-Axis Free
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                  Top Speed
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-white mt-0.5 block">
                  120+ km/h
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                  Clearance
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-white mt-0.5 block">
                  &lt; 30 cm
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                  Capture Rig
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-white mt-0.5 block">
                  4K / 10-Bit
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Glass "Flight Path" Feature Panel (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-[1.75rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.09] p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.05),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden group">
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />

              {/* Panel Header HUD */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-white/80">
                    FLIGHT_VECTOR // SIMULATION
                  </span>
                </div>
                <span className="font-mono text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                  LIVE 3D
                </span>
              </div>

              {/* Interactive Vector Canvas */}
              <div className="relative w-full h-[220px] sm:h-[250px] rounded-xl bg-black/40 border border-white/[0.04] p-4 flex items-center justify-center overflow-hidden">
                {/* Vector Grid Background */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Animated Flight Path SVG */}
                <svg
                  className="w-full h-full"
                  viewBox="0 0 360 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Perspective Horizon Lines */}
                  <line x1="20" y1="150" x2="340" y2="150" stroke="#ffffff" strokeOpacity="0.1" strokeDasharray="4 4" />
                  <line x1="20" y1="180" x2="340" y2="180" stroke="#ffffff" strokeOpacity="0.05" />

                  {/* Guide Gates */}
                  <rect x="70" y="80" width="30" height="50" rx="3" stroke="#ffffff" strokeOpacity="0.2" strokeDasharray="2 2" />
                  <rect x="240" y="50" width="40" height="60" rx="3" stroke="#ffffff" strokeOpacity="0.2" strokeDasharray="2 2" />

                  {/* FPV 3D Trajectory Curve */}
                  <path
                    d="M 30 170 C 60 160, 80 100, 140 100 C 200 100, 220 140, 260 70 C 280 35, 310 30, 340 40"
                    stroke="#ffffff"
                    strokeOpacity="0.25"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Glowing Animated Red Route Segment */}
                  <path
                    d="M 30 170 C 60 160, 80 100, 140 100 C 200 100, 220 140, 260 70 C 280 35, 310 30, 340 40"
                    stroke="url(#red-glow-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="60 300"
                    className="animate-[dash_4s_linear_infinite]"
                  />

                  {/* Target Waypoint 1 */}
                  <circle cx="140" cy="100" r="4" fill="#e50914" />
                  <circle cx="140" cy="100" r="10" stroke="#e50914" strokeOpacity="0.4" className="animate-ping" />

                  {/* Target Waypoint 2 */}
                  <circle cx="260" cy="70" r="3" fill="#ffffff" />
                  <circle cx="260" cy="70" r="8" stroke="#ffffff" strokeOpacity="0.3" />

                  {/* Waypoint Telemetry Labels */}
                  <text x="148" y="96" fill="#e50914" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    WP_01 // APEX DIVE
                  </text>
                  <text x="235" y="42" fill="#ffffff" fillOpacity="0.6" fontSize="9" fontFamily="monospace">
                    WP_02 // 120 KM/H
                  </text>

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="red-glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e50914" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#ff2a2a" stopOpacity="1" />
                      <stop offset="100%" stopColor="#e50914" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Corner Crosshairs */}
                <div className="absolute top-2 left-2 text-[9px] font-mono text-white/30 select-none">
                  + [POS: 12.9716° N]
                </div>
                <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/30 select-none">
                  [ALT: 1.2M - 45M] +
                </div>
              </div>

              {/* Four Flight Path Badges */}
              <div className="grid grid-cols-2 gap-2.5 mt-4">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="font-mono text-[11px] text-white/90">
                    LOW ALTITUDE
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="font-mono text-[11px] text-white/90">
                    120 KM/H TRACKING
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="font-mono text-[11px] text-white/90">
                    INDOOR ACCESS
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="font-mono text-[11px] text-white/90">
                    ONE-TAKE MOTION
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════
            2. CAPABILITY CARDS (RESPONSIVE GLASS BENTO GRID)
            ═══════════════════════════════════════════════════ */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={fadeInUp}
                className={`${cap.bentoSpan} group relative rounded-[1.5rem] bg-[#120e0e]/70 backdrop-blur-[18px] border border-white/[0.08] hover:border-red-500/40 hover:bg-[#181111]/80 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(229,9,20,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col justify-between overflow-hidden cursor-default`}
              >
                {/* Top Subtle Red Edge Accent on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Top Metadata & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-red-400/90 transition-colors">
                      {cap.number}
                    </span>

                    {/* Minimalist Graphic Icon */}
                    <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/70 group-hover:text-red-400 transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Tagline / Category */}
                  <span className="font-mono text-[11px] uppercase tracking-wider text-red-400/90 block mb-2 font-medium">
                    {cap.tagline}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase tracking-tight text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-red-100 transition-colors">
                    {cap.title}
                  </h3>
                </div>

                {/* Always-Visible Description */}
                <p className="text-sm sm:text-[0.925rem] text-[var(--color-text-secondary)] font-light leading-relaxed pt-3 border-t border-white/[0.05]">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            3. CLOSING CTA STRIP
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-2xl bg-[#120e0e]/80 backdrop-blur-[20px] border border-white/[0.09] hover:border-red-500/30 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(229,9,20,0.06)] flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
        >
          {/* Subtle Ambient Red Glow */}
          <div
            className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-red-600/[0.08] rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="text-center sm:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] block mb-1.5">
              Have a shot in mind?
            </span>
            <h4 className="font-heading font-bold text-2xl sm:text-3xl uppercase text-white tracking-tight">
              Let&apos;s Design The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                Movement.
              </span>
            </h4>
          </div>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-[var(--color-accent)] to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(229,9,20,0.35)] border border-red-400/30 transition-all duration-300 shrink-0"
          >
            <span>Start a Project</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
