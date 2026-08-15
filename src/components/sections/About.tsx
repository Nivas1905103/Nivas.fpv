"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const coreDisciplines = [
  {
    number: "01 / 06",
    title: "FPV Drone Piloting",
    tagline: "6-Axis Unconstrained Vectors",
    description: "Precision manual flight through confined architecture and high-speed pursuits with sub-meter clearance.",
    span: "lg:col-span-7",
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
    description: "Manual exposure control, intentional framing, and ND filtration for cinema-grade motion blur.",
    span: "lg:col-span-5",
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
    description: "Crafting tempo, rhythm, and speed ramps from raw flight clips to deliver high-impact commercial cuts.",
    span: "lg:col-span-4",
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
    title: "DaVinci Color Science",
    tagline: "10-Bit Log & Film Emulation",
    description: "Custom LUT development, dynamic range balancing, and highlight roll-off control in DaVinci Resolve.",
    span: "lg:col-span-4",
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
    title: "Spatial Foley & SFX",
    tagline: "Doppler & Kinetic Textures",
    description: "Acoustic soundscapes, wind textures, and custom foley matched to physical camera speed.",
    span: "lg:col-span-4",
    icon: (props: { className?: string }) => (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#e50914" strokeWidth="2" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
  },
];

function HomePortraitCard() {
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

export default function About() {
  return (
    <section id="about" className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-[#050505] overflow-hidden">
      {/* ═══════════════════════════════════════════════════
          BACKGROUND AMBIENCE & SUBTLE HUD DECORATIONS
          ═══════════════════════════════════════════════════ */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-red-600/[0.05] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-[550px] h-[450px] bg-red-900/[0.04] rounded-full blur-[130px] pointer-events-none"
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

      <div className="container-site relative z-10 max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* ═══════════════════════════════════════════════════
            1. HERO / IDENTITY ASYMMETRIC BENTO
            ═══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column (Desktop: 7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-5 shadow-[0_0_20px_rgba(229,9,20,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>About / 01</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading font-bold uppercase tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white mb-5">
              Nivas
              <span className="text-[var(--color-accent)] drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]">
                .
              </span>
            </h2>

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
              <HomePortraitCard />
            </div>

            {/* Confident Statement */}
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
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="hidden lg:block lg:col-span-5 w-full"
          >
            <HomePortraitCard />
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════
            2. BACKGROUND & STORY EDITORIAL GLASS PANEL
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-[2rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.05)] overflow-hidden"
        >
          {/* Top Glowing Red Accent Edge */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-70" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Narrative Story (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Origin // Background</span>
                </div>

                <h3 className="font-heading font-bold uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-white mb-5">
                  Origin &amp; Cinematic Roots<span className="text-[var(--color-accent)]">.</span>
                </h3>

                <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed mb-5">
                  Based in India, I create dynamic visual experiences through specialized FPV drone cinematography and professional video editing. I collaborate closely with film productions, commercial brands, creative agencies, and architectural studios across the country.
                </p>

                <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
                  My journey began at the intersection of aviation mechanics and visual storytelling. Over years of dedicated piloting, I merged both disciplines—turning custom FPV quadcopters into emotive filmmaking instruments with zero stabilizer lag and complete 6-axis freedom.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--color-text-muted)]">
                <span className="text-red-400 font-medium">DISPATCH: PAN-INDIA</span>
                <span className="text-white/60">EVERY FRAME SERVES THE STORY</span>
              </div>
            </div>

            {/* Right Telemetry Route Markers (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-red-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-red-400">
                    01 // NATIONWIDE REACH
                  </span>
                  <span className="text-[10px] font-mono text-white/40">INDIA (IST)</span>
                </div>
                <h4 className="font-heading font-semibold text-base sm:text-lg text-white mb-1">
                  Rapid Deployment
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                  Equipped with self-contained flight kits for rapid travel to sets, architectural builds, and remote landscapes.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-red-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-red-400">
                    02 // KINETIC FREEDOM
                  </span>
                  <span className="text-[10px] font-mono text-white/40">6-DOF ACROBATIC</span>
                </div>
                <h4 className="font-heading font-semibold text-base sm:text-lg text-white mb-1">
                  Unconstrained Vectors
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                  Continuous multi-axis rotation, dynamic speed ramping, and sub-meter obstacle proximity.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-red-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-red-400">
                    03 // POST-PRODUCTION
                  </span>
                  <span className="text-[10px] font-mono text-white/40">END-TO-END</span>
                </div>
                <h4 className="font-heading font-semibold text-base sm:text-lg text-white mb-1">
                  DaVinci Color &amp; Foley
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] font-light leading-relaxed">
                  Integrated color grading, dynamic sound design, and broadcast-grade 4K master delivery.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            3. CORE DISCIPLINES BENTO PREVIEW
            ═══════════════════════════════════════════════════ */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-red-400 uppercase block mb-2">
                Capabilities // Core Disciplines
              </span>
              <h3 className="font-heading font-bold uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-white">
                Cinematographic Craft<span className="text-[var(--color-accent)]">.</span>
              </h3>
            </div>
            <Link
              href="/about"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white uppercase tracking-wider transition-colors"
            >
              <span>Explore Methodology</span>
              <span className="text-red-400">→</span>
            </Link>
          </div>

          {/* Bento Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {coreDisciplines.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className={`${item.span} group relative rounded-[1.5rem] bg-[#120e0e]/75 backdrop-blur-[18px] border border-white/[0.08] hover:border-red-500/40 hover:bg-[#181111]/80 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(229,9,20,0.12)] flex flex-col justify-between overflow-hidden cursor-default`}
                >
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-red-400 transition-colors">
                        {item.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/70 group-hover:text-red-400 transition-colors shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider text-red-400/90 block mb-1.5 font-medium">
                      {item.tagline}
                    </span>

                    <h4 className="font-heading font-bold text-lg sm:text-xl uppercase tracking-tight text-white mb-2 group-hover:text-red-100 transition-colors">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed pt-3 border-t border-white/[0.05]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════
            4. CLOSING CTA STRIP (TRANSITION TO SELECTED WORK)
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-2xl bg-[#120e0e]/80 backdrop-blur-[20px] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-red-400 block mb-1">
              FULL CINEMATIC PROFILE
            </span>
            <p className="font-heading font-bold uppercase text-lg sm:text-xl text-white tracking-tight">
              Dive deeper into the flight methodology &amp; production rig.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-[var(--color-accent)] hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_5px_20px_rgba(229,9,20,0.3)] w-full sm:w-auto"
            >
              <span>Read Full Bio</span>
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 w-full sm:w-auto"
            >
              <span>Start a Project</span>
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
