"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { gear } from "@/data/gear";

const approachSteps = [
  {
    step: "01",
    phase: "PHASE 01 // ANALYSIS",
    specTag: "BRIEF & AIRSPACE",
    title: "Understand the Story",
    description:
      "Every shoot starts with narrative intent. We dissect the creative brief, evaluate spatial constraints, map line-of-sight flight paths, and ensure full environmental safety and airspace clearance.",
    deliverables: ["Script & Storyboard Analysis", "Airspace & Safety Clearance", "Line-of-Sight Trajectory Mapping"],
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" stroke="#e50914" />
      </svg>
    ),
  },
  {
    step: "02",
    phase: "PHASE 02 // CHOREOGRAPHY",
    specTag: "KINETIC TRAJECTORY",
    title: "Design the Movement",
    description:
      "Translating the script into kinetic trajectories. We choreograph camera speed, subject proximity, lighting angles, and seamless ground-to-air transition points with millisecond timing.",
    deliverables: ["Velocity & Acceleration Timing", "Proximity & Corridor Blocking", "Ground-to-Air Seamless Flow"],
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#e50914" fillOpacity="0.2" stroke="#e50914" />
      </svg>
    ),
  },
  {
    step: "03",
    phase: "PHASE 03 // MASTERING",
    specTag: "COLOR & SPATIAL MASTER",
    title: "Deliver the Final Frame",
    description:
      "From raw high-bitrate 10-bit Log capture to DaVinci Resolve color grading, dynamic speed ramping, custom spatial foley sound design, and broadcast-ready 4K master exports.",
    deliverables: ["DaVinci Film Emulation Grade", "Spatial Velocity Foley SFX", "4K ProRes & Digital Masters"],
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <circle cx="12" cy="10" r="3" stroke="#e50914" strokeWidth="2" />
      </svg>
    ),
  },
];

const expertiseList = [
  {
    number: "01 / 06",
    title: "FPV Drone Piloting",
    tagline: "6-Axis Unconstrained Vectors",
    description:
      "Precision manual flight through confined architecture, high-speed vehicle pursuits, and proximity maneuvers impossible for standard GPS drones.",
    specs: ["Manual 6-DOF Flight", "120+ km/h Chase Lines", "Sub-Meter Clearance"],
    bentoSpan: "lg:col-span-7",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
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
    specs: ["ND8–ND64 Glass", "4K 60fps Capture", "Cinematic Framing"],
    bentoSpan: "lg:col-span-5",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
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
    specs: ["Commercial Pacing", "Temporal Rhythm", "Multi-Angle Assembly"],
    bentoSpan: "lg:col-span-4",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
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
    tagline: "10-Bit Log & DaVinci Resolve",
    description:
      "Advanced color management pipelines in DaVinci Resolve, dynamic range balancing, highlight roll-off control, and distinct mood grading.",
    specs: ["DaVinci Resolve Studio", "Film Emulation LUTs", "Rec.709 & HDR"],
    bentoSpan: "lg:col-span-4",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18z" fill="#e50914" fillOpacity="0.2" />
        <line x1="12" y1="3" x2="12" y2="21" stroke="#e50914" />
      </svg>
    ),
  },
  {
    number: "05 / 06",
    title: "Sound Design & Foley",
    tagline: "Spatial Audio & Kinetic SFX",
    description:
      "Designing immersive acoustic soundscapes, Doppler effects, and wind textures to match the physical speed and velocity of the camera.",
    specs: ["Spatial Audio Foley", "Doppler Textures", "High-Impact Acoustic FX"],
    bentoSpan: "lg:col-span-4",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
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
    specs: ["Optical Flow Warping", "Seamless Transitions", "Dynamic Pacing"],
    bentoSpan: "lg:col-span-12",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="#e50914" />
      </svg>
    ),
  },
];

const gearSpecs: Record<string, { badge: string; spec: string; status: string }> = {
  "DJI Avata 2": {
    badge: "FPV PLATFORM",
    spec: "Ultra-Agile Cinematic Platform",
    status: "ACTIVE DEPLOYMENT",
  },
  "DJI Goggles 3": {
    badge: "FPV SYSTEM",
    spec: "Low-Latency HD Digital Feed",
    status: "CALIBRATED",
  },
  "4K Camera Systems": {
    badge: "SENSOR CAPTURE",
    spec: "10-Bit D-Log & 60fps+ Video",
    status: "10-BIT PRORES / RAW",
  },
  "ND Filter Kit": {
    badge: "CINEMA OPTICS",
    spec: "ND8 / ND16 / ND32 / ND64",
    status: "CINEMA GLASS",
  },
  "Professional Editing Workstation": {
    badge: "POST-PRODUCTION",
    spec: "DaVinci Studio & Premiere Pro",
    status: "ONLINE",
  },
};

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
      {/* Ambient Red Glow Blobs */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-red-600/[0.07] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[35%] right-0 w-[550px] h-[450px] bg-red-800/[0.05] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[65%] left-0 w-[600px] h-[500px] bg-red-600/[0.04] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-[500px] h-[400px] bg-red-900/[0.04] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Faint Technical Grid Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 max-w-7xl mx-auto space-y-20 md:space-y-28">
        {/* ═══════════════════════════════════════════════════
            1. ABOUT HERO SECTION (ASYMMETRIC EDITORIAL)
            (Preserved Exactly As Required)
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
            HERO → STORY SEAMLESS CINEMATIC TRANSITION
            ═══════════════════════════════════════════════════ */}
        <div className="relative py-2 flex items-center justify-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
          <div className="absolute w-2 h-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(229,9,20,0.8)]" />
        </div>

        {/* ═══════════════════════════════════════════════════
            2. BACKGROUND / 01 (EDITORIAL GLASS STORY PANEL)
            ═══════════════════════════════════════════════════ */}
        <section id="background" className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] p-6 sm:p-10 md:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.05)] overflow-hidden"
          >
            {/* Top Glowing Red Accent Edge */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-70" />

            {/* Subtle Technical Crosshairs in Corners */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white/20 select-none">
              +
            </div>
            <div className="absolute top-4 right-4 font-mono text-[10px] text-white/20 select-none">
              +
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/20 select-none">
              +
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/20 select-none">
              +
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Editorial Narrative Column (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>Background / 01</span>
                  </div>

                  <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl text-white mb-6">
                    Origin &amp; Cinematic Perspective<span className="text-[var(--color-accent)]">.</span>
                  </h2>

                  <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed mb-5">
                    Based in India, I create dynamic, unconstrained visual experiences through
                    specialized FPV drone cinematography and professional video editing. I collaborate
                    closely with film productions, commercial brands, creative agencies, and
                    architectural studios to craft aerial camera movements that elevate narratives.
                  </p>

                  <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed mb-5">
                    My journey began at the intersection of aviation mechanics and visual
                    storytelling. Over years of disciplined piloting, I unified both worlds—transforming
                    custom FPV quadcopters from mere flying sensors into precise, emotive instruments
                    for world-class filmmaking.
                  </p>

                  <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
                    Every flight is executed with zero stabilizer lag and complete 6-DOF manual agility,
                    capturing high-velocity chases, intimate indoor fly-throughs, and sweeping spatial
                    transitions that conventional cameras and standard drones simply cannot achieve.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--color-text-muted)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>OPERATIONAL SCOPE: PAN-INDIA</span>
                  </div>
                  <div className="text-white/60">
                    NARRATIVE-FIRST CAMERAWORK
                  </div>
                </div>
              </div>

              {/* Right Telemetry & Route Markers Stack (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-red-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-red-400">
                      01 // ORIGIN &amp; BASE
                    </span>
                    <span className="text-[10px] font-mono text-white/40">INDIA (IST)</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-1">
                    Pan-India Deployment
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                    Self-contained flight kits and rapid nationwide travel availability for film sets, commercials, and architecture.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-red-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-red-400">
                      02 // FLIGHT KINETICS
                    </span>
                    <span className="text-[10px] font-mono text-white/40">6-DOF ACROBATIC</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-1">
                    Unconstrained Camera Movement
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                    Full pitch, roll, and yaw authority with sub-meter proximity through complex spaces and high-speed motion.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-red-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-red-400">
                      03 // POST-PRODUCTION
                    </span>
                    <span className="text-[10px] font-mono text-white/40">END-TO-END PIPELINE</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-1">
                    DaVinci Color &amp; Spatial Foley
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                    Integrated DaVinci Resolve color grading, dynamic speed ramping, and custom kinetic sound design.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            3. APPROACH / 02 (THREE-STEP CONNECTED WORKFLOW)
            ═══════════════════════════════════════════════════ */}
        <section id="approach" className="relative space-y-10">
          {/* Section Header */}
          <div className="flex flex-col items-start max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(229,9,20,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>Approach / 02</span>
            </div>
            <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Three-Stage Flight Methodology<span className="text-[var(--color-accent)]">.</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
              A structured, disciplined production workflow translating narrative concepts into visceral cinema-grade final masters.
            </p>
          </div>

          {/* Connected 3-Step Glass Flow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="relative"
          >
            {/* Desktop Connecting Red Flight-Path Vector Line */}
            <div
              className="hidden lg:block absolute top-[56px] inset-x-16 h-[2px] bg-gradient-to-r from-red-500/20 via-red-500/70 to-red-500/20 z-0 pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
              {approachSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    variants={fadeInUp}
                    className="group relative rounded-[1.75rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] hover:border-red-500/40 hover:bg-[#181111]/80 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(229,9,20,0.12)] flex flex-col justify-between"
                  >
                    {/* Top Red Glow Line on Hover */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center font-mono text-xs font-bold text-red-400">
                            {step.step}
                          </span>
                          <span className="font-mono text-xs uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                            {step.phase}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/70 group-hover:text-red-400 transition-colors shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-white mb-3 group-hover:text-red-100 transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    {/* Deliverables Scope Chips */}
                    <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                        KEY SCOPE &amp; ACTIONS
                      </span>
                      {step.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs font-mono text-white/80">
                          <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            4. EXPERTISE / 03 (BENTO-STYLE GLASS GRID)
            ═══════════════════════════════════════════════════ */}
        <section id="disciplines" className="relative space-y-10">
          {/* Section Header */}
          <div className="flex flex-col items-start max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(229,9,20,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>Capabilities // Core Disciplines</span>
            </div>
            <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Core Cinematographic Disciplines<span className="text-[var(--color-accent)]">.</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
              Specialized skillsets merging high-speed manual flight reflexes with refined visual storytelling and post-production craft.
            </p>
          </div>

          {/* Asymmetric Bento Grid */}
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
                  tabIndex={0}
                  className={`${skill.bentoSpan} group relative rounded-[1.75rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] hover:border-red-500/40 hover:bg-[#181111]/80 focus:border-red-500/60 focus:outline-none p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(229,9,20,0.12)] flex flex-col justify-between overflow-hidden cursor-default`}
                >
                  {/* Top Glowing Red Edge */}
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

                    <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>

                  {/* Specs Pill List */}
                  <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-2">
                    {skill.specs.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-white/70 group-hover:border-red-500/20 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            5. TECHNICAL ARSENAL / 04 (CAPABILITY MATRIX PANEL)
            ═══════════════════════════════════════════════════ */}
        <section id="arsenal" className="relative space-y-10">
          {/* Section Header */}
          <div className="flex flex-col items-start max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(229,9,20,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>Technical Arsenal / 04</span>
            </div>
            <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Production Systems &amp; Flight Gear<span className="text-[var(--color-accent)]">.</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
              Field-proven flight hardware and post-production workstations calibrated for cinema-standard performance and reliability.
            </p>
          </div>

          {/* Capability Matrix Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.05)] overflow-hidden"
          >
            {/* Top Ambient Accent Edge */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-70" />

            {/* Matrix HUD Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-2 pb-5 mb-8 border-b border-white/[0.06] text-xs font-mono text-[var(--color-text-muted)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-white font-medium">RIG MATRIX // CINEMA FLIGHT HARDWARE</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-red-400 font-mono">
                <span>CALIBRATION: VERIFIED</span>
                <span>•</span>
                <span>OPS: ACTIVE</span>
              </div>
            </div>

            {/* Gear Items Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {gear.map((item) => {
                const meta = gearSpecs[item.name] || {
                  badge: item.category.toUpperCase(),
                  spec: "Cinema Hardware",
                  status: "READY",
                };
                return (
                  <div
                    key={item.name}
                    className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-red-500/40 hover:bg-[#181111]/60 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-[10px] tracking-wider uppercase">
                          {meta.badge}
                        </span>
                        <span className="font-mono text-[10px] text-white/40 tracking-wider">
                          {meta.status}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-white mb-1.5 group-hover:text-red-100 transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-xs text-red-400/90 font-mono mb-3 font-medium">
                        {meta.spec}
                      </p>

                      <p className="text-xs text-[var(--color-text-secondary)] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-white/40">
                      <span>VERIFIED ASSET</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 group-hover:bg-red-500 transition-colors" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Hardware Telemetry Strip */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-white/60 tracking-wider">
              <div className="flex items-center gap-3">
                <span className="text-red-500">◆</span>
                <span>4K D-LOG CAPTURE</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500">◆</span>
                <span>10-BIT HIGH BITRATE</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500">◆</span>
                <span>120+ KM/H AGILITY</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500">◆</span>
                <span>PRORES / H.265 MASTER</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500">◆</span>
                <span>SPATIAL AUDIO DESIGN</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            6. FINAL HIGH-QUALITY GLASS CTA PANEL
            ═══════════════════════════════════════════════════ */}
        <section id="cta" className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="relative rounded-[2rem] bg-[#120e0e]/80 backdrop-blur-[20px] border border-white/[0.09] p-8 sm:p-12 md:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(229,9,20,0.08)] overflow-hidden text-center flex flex-col items-center"
          >
            {/* Top Ambient Red Glow Edge */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-80" />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/[0.08] rounded-full blur-[100px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-5 shadow-[0_0_20px_rgba(229,9,20,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>Collaboration / 05</span>
            </div>

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
              Based in India • Available for projects nationwide &amp; global shoots • 24-Hour Response
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
