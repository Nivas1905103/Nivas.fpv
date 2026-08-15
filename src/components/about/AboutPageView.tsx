"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { gear } from "@/data/gear";

const expertiseList = [
  {
    number: "01 / 06",
    title: "FPV Drone Piloting",
    tagline: "6-Axis Unconstrained Vectors",
    description:
      "Precision manual flight through confined architecture, high-speed vehicle pursuits, and proximity maneuvers impossible for standard GPS drones.",
    bentoSpan: "lg:col-span-7",
    icon: (props: { className?: string }) => (
      <svg
        className={props.className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
        <circle cx="12" cy="12" r="1.5" fill="#e50914" />
      </svg>
    ),
  },
  {
    number: "02 / 06",
    title: "Aerial Cinematography",
    tagline: "180° Shutter & 4K Capture",
    description:
      "Intentional cinematic framing, dynamic lighting alignment, manual exposure control, and specialized ND filtration for organic motion blur.",
    bentoSpan: "lg:col-span-5",
    icon: (props: { className?: string }) => (
      <svg
        className={props.className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="5" width="14" height="14" rx="2" />
        <polygon points="16 9 22 5 22 19 16 15" />
        <circle cx="9" cy="12" r="3" stroke="#e50914" />
      </svg>
    ),
  },
  {
    number: "03 / 06",
    title: "Cinematic Video Editing",
    tagline: "Pacing & Narrative Architecture",
    description:
      "Crafting rhythm, seamless speed ramps, and narrative momentum from raw multi-angle flight footage to deliver polished commercial cuts.",
    bentoSpan: "lg:col-span-5",
    icon: (props: { className?: string }) => (
      <svg
        className={props.className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="8" y1="4" x2="8" y2="20" strokeDasharray="2 2" />
        <line x1="16" y1="4" x2="16" y2="20" strokeDasharray="2 2" />
        <polygon points="10 9 14 12 10 15" fill="#e50914" stroke="#e50914" />
      </svg>
    ),
  },
  {
    number: "04 / 06",
    title: "Color Grading & Mastering",
    tagline: "10-Bit Log & Film Emulation",
    description:
      "Advanced color management pipelines in DaVinci Resolve, dynamic range balancing, highlight roll-off control, and distinct mood grading.",
    bentoSpan: "lg:col-span-7",
    icon: (props: { className?: string }) => (
      <svg
        className={props.className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" fillOpacity="0.15" />
        <circle cx="12" cy="12" r="3" stroke="#e50914" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: "05 / 06",
    title: "Sound Design & Foley",
    tagline: "Spatial Audio & Kinetic SFX",
    description:
      "Designing immersive acoustic soundscapes, Doppler effects, and wind textures to match the physical speed and velocity of the camera.",
    bentoSpan: "lg:col-span-6",
    icon: (props: { className?: string }) => (
      <svg
        className={props.className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#e50914" strokeWidth="2" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
  },
  {
    number: "06 / 06",
    title: "Speed Ramping & VFX Flow",
    tagline: "Temporal Kinetic Transitions",
    description:
      "Seamless optical-flow velocity warping, whip transitions, and motion-blur integration for high-impact commercial storytelling.",
    bentoSpan: "lg:col-span-6",
    icon: (props: { className?: string }) => (
      <svg
        className={props.className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="#e50914" />
      </svg>
    ),
  },
];

const approachSteps = [
  {
    step: "01",
    phase: "PHASE 01 // ANALYSIS",
    title: "Understand the Story",
    description:
      "Every shoot starts with narrative intent. We dissect the creative brief, evaluate spatial constraints, map flight lines, and ensure full environmental safety.",
  },
  {
    step: "02",
    phase: "PHASE 02 // CHOREOGRAPHY",
    title: "Design the Movement",
    description:
      "Translating the script into kinetic trajectories. We choreograph camera speed, subject proximity, lighting angles, and seamless ground-to-air transition points.",
  },
  {
    step: "03",
    phase: "PHASE 03 // MASTERING",
    title: "Deliver the Final Frame",
    description:
      "From raw high-bitrate 4K capture to precision color grading, custom sound design, and master export tailored for cinema, broadcast, or digital campaigns.",
  },
];

function PortraitCard() {
  return (
    <div className="relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.09] hover:border-red-500/30 p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.06),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden group transition-colors duration-500">
      {/* Top Subtle Red Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />

      {/* Aspect-Ratio Image Container */}
      <div className="aspect-[4/5] relative w-full rounded-[1.5rem] overflow-hidden bg-black">
        <Image
          src="/images/about/nivas-fpv-enhanced.jpg"
          alt="Nivas - FPV Drone Cinematographer"
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />

        {/* Subtle Inner Cinematic Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-[#050505]/20 pointer-events-none" />

        {/* Corner HUD Markers */}
        <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white/80 uppercase tracking-widest">
          PILOT // 01
        </div>

        <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-md bg-red-500/20 backdrop-blur-md border border-red-500/30 text-[9px] font-mono text-red-400 uppercase tracking-widest flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
          <span>DGCA CERTIFIED</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-white/90 flex items-center justify-between">
          <span className="truncate">NIVAS.FPV // CINEMATOGRAPHY</span>
          <span className="text-red-400 font-bold">4K 60FPS</span>
        </div>
      </div>
    </div>
  );
}

export default function AboutPageView() {
  return (
    <div className="relative pt-12 pb-24 md:pt-16 md:pb-36 bg-[#050505] overflow-hidden">
      {/* ═══════════════════════════════════════════════════
          BACKGROUND AMBIENCE & SUBTLE HUD DECORATIONS
          ═══════════════════════════════════════════════════ */}
      {/* Top Red Glow Bloom */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-red-600/[0.07] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[45%] right-0 w-[550px] h-[450px] bg-red-800/[0.05] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-[500px] h-[400px] bg-red-600/[0.05] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Faint Technical Grid Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Speed Diagonal Motion Lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 40px)`,
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 max-w-7xl mx-auto space-y-20 md:space-y-28">
        {/* ═══════════════════════════════════════════════════
            1. ABOUT HERO SECTION (ASYMMETRIC EDITORIAL)
            ═══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column (Desktop: 7 cols) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-5 shadow-[0_0_20px_rgba(229,9,20,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>About / 01</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-bold uppercase tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white mb-5">
              Nivas
              <span className="text-[var(--color-accent)] drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]">
                .
              </span>
            </h1>

            {/* Supporting Identity Line */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6 font-mono text-xs sm:text-sm uppercase tracking-wider text-red-400/90 font-medium">
              <span>FPV Drone Cinematographer</span>
              <span className="text-white/30">•</span>
              <span>Editor</span>
              <span className="text-white/30">•</span>
              <span>Visual Storyteller</span>
            </div>

            {/* Mobile Portrait (Positioned right after Identity on mobile, hidden on desktop) */}
            <div className="w-full my-4 mb-7 lg:hidden">
              <PortraitCard />
            </div>

            {/* Confident Personal Statement */}
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed mb-8 max-w-2xl">
              Merging high-speed aviation discipline with visceral cinematic
              storytelling. Based in India, I create physical camera movement that
              conventional cameras, cranes, and standard drones cannot replicate—elevating
              commercial films, brand campaigns, and architectural walkthroughs.
            </p>

            {/* Technical Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-white/[0.08]">
              <div className="p-3.5 rounded-xl bg-[#120e0e]/60 backdrop-blur-md border border-white/[0.06]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                  Role
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-white mt-1 block">
                  Cinematographer
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#120e0e]/60 backdrop-blur-md border border-white/[0.06]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                  Location
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-white mt-1 block">
                  India (IST)
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#120e0e]/60 backdrop-blur-md border border-white/[0.06]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                  Delivery
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-white mt-1 block">
                  4K Master / Raw
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#120e0e]/60 backdrop-blur-md border border-white/[0.06]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                  Mobility
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-white mt-1 block">
                  Nationwide
                </span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Portrait (5 cols, hidden on mobile) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="hidden lg:block lg:col-span-5 w-full"
          >
            <PortraitCard />
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════
            2. IDENTITY / MISSION GLASS PANEL
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] p-8 sm:p-10 md:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.05)] overflow-hidden"
        >
          {/* Top Edge Accent */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-400 mb-4 block">
              MISSION // CORE PHILOSOPHY
            </span>

            <h2 className="font-heading font-bold uppercase text-2xl sm:text-3xl md:text-4xl text-white leading-tight tracking-tight mb-6">
              &ldquo;FPV is not just an aerial angle. It is an unconstrained physical
              camera movement that brings the audience directly inside the action.&rdquo;
            </h2>

            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed max-w-3xl mb-8">
              By merging piloting reflexes with disciplined cinematographic framing, I
              turn complex architectural corridors, high-speed automotive chases, and
              dramatic landscapes into seamless visual journeys.
            </p>

            {/* 4 Telemetry Attributes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="font-mono text-xs font-bold text-white tracking-widest block">
                  MOVEMENT
                </span>
                <span className="text-[11px] text-[var(--color-text-muted)] font-mono mt-0.5 block">
                  6-DOF Free Vectors
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="font-mono text-xs font-bold text-white tracking-widest block">
                  STORY
                </span>
                <span className="text-[11px] text-[var(--color-text-muted)] font-mono mt-0.5 block">
                  Narrative-First Frame
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="font-mono text-xs font-bold text-white tracking-widest block">
                  SPEED
                </span>
                <span className="text-[11px] text-[var(--color-text-muted)] font-mono mt-0.5 block">
                  0 to 120+ km/h
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="font-mono text-xs font-bold text-white tracking-widest block">
                  PRECISION
                </span>
                <span className="text-[11px] text-[var(--color-text-muted)] font-mono mt-0.5 block">
                  Sub-Meter Clearance
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            3. BACKGROUND & APPROACH (EDITORIAL + 3-STEP FLOW)
            ═══════════════════════════════════════════════════ */}
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex flex-col items-start">
            <span className="text-xs font-mono tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-2">
              Process & Discipline
            </span>
            <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white">
              Background & Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Background Glass Card (5 cols) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="lg:col-span-5 rounded-[1.75rem] bg-[#120e0e]/70 backdrop-blur-[18px] border border-white/[0.08] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-medium">
                    01 // BACKGROUND
                  </span>
                  <span className="font-mono text-[11px] text-[var(--color-text-muted)]">
                    ORIGIN
                  </span>
                </div>

                <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed mb-5">
                  Based in India, I create dynamic visual experiences through FPV drone
                  cinematography and professional video editing. I work closely with film
                  productions, commercial brands, creative agencies, and architectural
                  firms to deliver aerial perspectives that move stories forward.
                </p>

                <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
                  My journey began with a deep fascination for aviation mechanics and
                  visual arts. Over the years, I merged both disciplines—using custom FPV
                  quadcopters not just as airborne sensors, but as emotive instruments for
                  world-class filmmaking.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)]">
                <span>OPERATIONAL RANGE</span>
                <span className="text-white font-medium">PAN-INDIA & BEYOND</span>
              </div>
            </motion.div>

            {/* Right: 3-Step Approach Flow (7 cols) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col gap-4 relative"
            >
              {/* Connecting vertical line on desktop */}
              <div
                className="absolute left-[39px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[var(--color-accent)]/50 via-white/10 to-[var(--color-accent)]/50 hidden sm:block pointer-events-none"
                aria-hidden="true"
              />

              {approachSteps.map((step) => (
                <motion.div
                  key={step.step}
                  variants={fadeInUp}
                  className="relative rounded-[1.5rem] bg-[#120e0e]/70 backdrop-blur-[18px] border border-white/[0.08] hover:border-red-500/40 p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(229,9,20,0.1)] flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/80 group-hover:text-red-400 font-mono text-sm font-bold shrink-0 z-10 transition-colors">
                    {step.step}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-red-400 block mb-1">
                      {step.phase}
                    </span>
                    <h3 className="font-heading font-bold text-xl uppercase text-white mb-2 group-hover:text-red-100 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            4. EXPERTISE & TECHNICAL ARSENAL (BENTO GRID)
            ═══════════════════════════════════════════════════ */}
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex flex-col items-start">
            <span className="text-xs font-mono tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-2">
              Capabilities & Tools
            </span>
            <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white">
              Expertise & Technical Arsenal
            </h2>
          </div>

          {/* Bento Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {expertiseList.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  variants={fadeInUp}
                  className={`${skill.bentoSpan} group relative rounded-[1.5rem] bg-[#120e0e]/70 backdrop-blur-[18px] border border-white/[0.08] hover:border-red-500/40 hover:bg-[#181111]/80 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(229,9,20,0.12)] flex flex-col justify-between overflow-hidden cursor-default`}
                >
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-red-400 transition-colors">
                        {skill.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/70 group-hover:text-red-400 transition-colors shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="font-mono text-[11px] uppercase tracking-wider text-red-400/90 block mb-2 font-medium">
                      {skill.tagline}
                    </span>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase tracking-tight text-white mb-3 group-hover:text-red-100 transition-colors">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-[0.925rem] text-[var(--color-text-secondary)] font-light leading-relaxed pt-3 border-t border-white/[0.05]">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Technical Arsenal Gear Cards */}
          <div className="pt-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/80">
                Primary Flight & Production Rig
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {gear.map((item) => (
                <div
                  key={item.name}
                  className="p-5 rounded-2xl bg-[#120e0e]/60 backdrop-blur-md border border-white/[0.07] hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-red-400 mb-2 block">
                    {item.category}
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold text-sm sm:text-base text-white mb-1.5">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            5. "BUILT FOR MOVEMENT" HORIZONTAL VISUAL STRIP
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.05)] overflow-hidden"
        >
          {/* Abstract SVG Flight Path Motion Graphic */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 200"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 100 Q 250 20, 500 100 T 1000 100"
                stroke="url(#strip-gradient)"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              <circle cx="500" cy="100" r="6" fill="#e50914" />
              <circle cx="500" cy="100" r="16" stroke="#e50914" strokeOpacity="0.4" />
              <defs>
                <linearGradient id="strip-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#e50914" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-400 block mb-2">
                CINEMATOGRAPHY ETHOS
              </span>
              <p className="font-heading font-bold uppercase text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Every frame begins with movement.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-[var(--color-accent)]">
                  Every movement serves the story.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-white/80">
                PITCH / ROLL / YAW UNLOCKED
              </div>
              <div className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400">
                ZERO STABILIZER LAG
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            6. FINAL HIGH-QUALITY GLASS CTA PANEL
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-[2rem] bg-[#120e0e]/80 backdrop-blur-[20px] border border-white/[0.09] p-8 sm:p-12 md:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(229,9,20,0.08)] overflow-hidden text-center flex flex-col items-center"
        >
          {/* Top Ambient Glow */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-80" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/[0.08] rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-400 mb-4 block">
            INITIATE COLLABORATION
          </span>

          <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl mb-6">
            Let&apos;s Create Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-[var(--color-accent)]">
              Impossible.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] font-light max-w-2xl leading-relaxed mb-10">
            Have a commercial film, brand campaign, automotive project, or architectural
            space that needs a dynamic, high-speed aerial perspective?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-[var(--color-accent)] to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm uppercase tracking-wider shadow-[0_10px_35px_rgba(229,9,20,0.35)] border border-red-400/30 transition-all duration-300 w-full sm:w-auto"
            >
              <span>Start a Project</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 w-full sm:w-auto"
            >
              <span>View Selected Work</span>
              <span>→</span>
            </Link>
          </div>

          <p className="text-xs text-[var(--color-text-muted)] font-mono mt-8">
            Based in India • Available for projects nationwide & global shoots
          </p>
        </motion.div>
      </div>
    </div>
  );
}
