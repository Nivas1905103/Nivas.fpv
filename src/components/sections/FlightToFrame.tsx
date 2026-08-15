"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const pipelineSteps = [
  {
    step: "01",
    phase: "CAPTURE",
    title: "Raw Sensor Acquisition",
    description: "4K 10-bit high-bitrate recording with flat color profile and manual shutter angle for pure dynamic range.",
    badge: "10-BIT D-LOG",
  },
  {
    step: "02",
    phase: "GRADE",
    title: "Cinematic Color Science",
    description: "Custom DaVinci Resolve color transformation, highlight recovery, skin tone protection, and film emulation.",
    badge: "DAVINCI RESOLVE",
  },
  {
    step: "03",
    phase: "FINALISE",
    title: "Mastering & Spatial Audio",
    description: "Temporal kinetic speed ramping, high-fidelity spatial foley sound design, and broadcast master export.",
    badge: "4K MASTER EXPORT",
  },
];

export default function FlightToFrame() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const rawVideoRef = useRef<HTMLVideoElement>(null);
  const gradedVideoRef = useRef<HTMLVideoElement>(null);
  const restartingRef = useRef(false);

  // Sync videos & smooth endless loop
  useEffect(() => {
    const raw = rawVideoRef.current;
    const graded = gradedVideoRef.current;
    if (!raw || !graded) return;

    raw.muted = true;
    raw.defaultMuted = true;
    raw.playsInline = true;
    raw.preload = "auto";

    graded.muted = true;
    graded.defaultMuted = true;
    graded.playsInline = true;
    graded.preload = "auto";

    const restartComparison = async () => {
      if (restartingRef.current) return;
      restartingRef.current = true;

      const videos = [rawVideoRef.current, gradedVideoRef.current].filter(
        (v): v is HTMLVideoElement => v !== null
      );

      videos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });

      await Promise.all(videos.map((video) => video.play().catch(() => {})));

      restartingRef.current = false;
    };

    // Coordinated restart check before the tail of the video (prevents black frames)
    const handleTimeUpdate = () => {
      if (!raw || !graded || restartingRef.current) return;
      if (raw.duration && raw.currentTime >= raw.duration - 0.25) {
        restartComparison();
        return;
      }
      if (graded.duration && graded.currentTime >= graded.duration - 0.25) {
        restartComparison();
        return;
      }
    };

    // Periodic sync check to prevent any micro-drift without reacting on state
    const syncInterval = setInterval(() => {
      if (!raw || !graded || restartingRef.current) return;
      const diff = raw.currentTime - graded.currentTime;
      if (Math.abs(diff) > 0.05) {
        graded.currentTime = raw.currentTime;
      }
    }, 400);

    const handleEnded = () => {
      restartComparison();
    };

    raw.addEventListener("timeupdate", handleTimeUpdate);
    graded.addEventListener("timeupdate", handleTimeUpdate);
    raw.addEventListener("ended", handleEnded);
    graded.addEventListener("ended", handleEnded);

    // Preload and start playback with generous viewport margin
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playRaw = raw.play();
            const playGraded = graded.play();
            Promise.all([playRaw, playGraded]).catch(() => {});
          } else {
            raw.pause();
            graded.pause();
          }
        });
      },
      { rootMargin: "300px 0px 300px 0px", threshold: 0.05 }
    );

    observer.observe(raw);

    return () => {
      raw.removeEventListener("timeupdate", handleTimeUpdate);
      graded.removeEventListener("timeupdate", handleTimeUpdate);
      raw.removeEventListener("ended", handleEnded);
      graded.removeEventListener("ended", handleEnded);
      clearInterval(syncInterval);
      observer.disconnect();
    };
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
    };
    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <section
      id="flight-to-frame"
      className="relative pt-24 pb-28 md:pt-32 md:pb-36 bg-[#050505] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/[0.04] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Technical Grid Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(229,9,20,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>Post-Production / 03</span>
          </div>

          <h2 className="font-heading font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            From Flight to Final Frame<span className="text-[var(--color-accent)]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            The flight is only the first half of the image. Precision color science,
            contrast roll-off, and atmospheric sound design transform raw sensor data
            into high-impact cinematic deliverables.
          </p>
        </div>

        {/* Cinematic Control Deck / Before-After Slider Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="relative rounded-[1.75rem] bg-[#120e0e]/80 backdrop-blur-[20px] border border-white/[0.08] p-3 sm:p-5 md:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Bezel Top Status Bar */}
          <div className="flex items-center justify-between px-3 pb-3 mb-3 border-b border-white/[0.06] text-xs font-mono text-[var(--color-text-muted)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-white font-medium">SPLIT DECK // REC.709 vs LOG</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[10px] tracking-widest text-white/50 uppercase">
              <span>SYNC: LOCKED</span>
              <span>•</span>
              <span>4K PRORES</span>
              <span>•</span>
              <span>FPS: 60.00</span>
            </div>
            <div className="text-[11px] text-red-400">
              POS: {Math.round(sliderPosition)}%
            </div>
          </div>

          {/* Interactive Drag Frame */}
          <div
            ref={sliderRef}
            className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#080808] select-none cursor-ew-resize border border-white/[0.05]"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              if (e.touches[0]) handleMove(e.touches[0].clientX);
            }}
            role="slider"
            aria-label="Compare raw footage with color graded footage"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setSliderPosition((p) => Math.max(0, p - 3));
              if (e.key === "ArrowRight") setSliderPosition((p) => Math.min(100, p + 3));
            }}
          >
            {/* "After" (Graded) Side — Full Base */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
              <video
                ref={gradedVideoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/12.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                poster="/images/posters/f2f-graded.jpg"
              />
            </div>

            {/* "Before" (Raw) Side — Clipped */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <video
                ref={rawVideoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/11.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                poster="/images/posters/f2f-raw.jpg"
              />
            </div>

            {/* Central Divider Bar with Red Glow */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(229,9,20,0.6)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#120e0e] border-2 border-white/90 shadow-[0_0_20px_rgba(229,9,20,0.5)] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-1 text-white">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Prominent Glass Chips for RAW and GRADED */}
            <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 z-20 pointer-events-none">
              <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-white/90 text-[10px] sm:text-xs font-mono font-bold tracking-wider flex items-center gap-1.5 sm:gap-2 shadow-lg">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/60" />
                <span>01 // RAW LOG</span>
              </div>
            </div>

            <div className="absolute top-2.5 sm:top-4 right-2.5 sm:right-4 z-20 pointer-events-none">
              <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-red-500/40 text-red-400 text-[10px] sm:text-xs font-mono font-bold tracking-wider flex items-center gap-1.5 sm:gap-2 shadow-[0_0_15px_rgba(229,9,20,0.2)]">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500" />
                <span>02 // FINAL GRADED</span>
              </div>
            </div>

            {/* Bottom Floating Instruction Pill */}
            <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/10 text-white/70 text-[9px] sm:text-[11px] font-mono tracking-widest uppercase flex items-center gap-1.5 sm:gap-2 shadow-lg whitespace-nowrap">
                <span>↔ DRAG TO COMPARE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connected Three-Step Glass Pipeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative pt-6"
        >
          {/* Subtle Connecting Flight Path Line on Desktop */}
          <div
            className="hidden md:block absolute top-[52px] inset-x-16 h-[2px] bg-gradient-to-r from-red-500/20 via-red-500/60 to-red-500/20 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {pipelineSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="group relative rounded-2xl bg-[#120e0e]/75 backdrop-blur-[18px] border border-white/[0.08] hover:border-red-500/40 hover:bg-[#181111]/80 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Number & Phase Marker */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center font-mono text-xs font-bold text-red-400">
                      {step.step}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                      {step.phase}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-white/60">
                    {step.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-white mb-2 group-hover:text-red-200 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
