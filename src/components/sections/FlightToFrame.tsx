"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

import LiquidBackground from "@/components/ui/LiquidBackground";

const processSteps = [
  { label: "Raw Footage", description: "Direct from the camera sensor" },
  { label: "Stabilization", description: "Smooth, cinematic movement" },
  { label: "Speed Ramping", description: "Dynamic tempo and pacing" },
  { label: "Color Grading", description: "Cinematic color science" },
  { label: "Sound Design", description: "Atmospheric audio layers" },
  { label: "Final Edit", description: "Polished, delivery-ready film" },
];

export default function FlightToFrame() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    [isDragging]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
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
    <section id="flight-to-frame" className="relative section-padding bg-[var(--color-bg-primary)] overflow-hidden">
      
      <LiquidBackground opacity={0.12} color1="#E63946" color2="#880000" />

      <div className="container-site relative z-10">
        <SectionHeading
          label="Post-Production"
          title="From Flight to Final Frame"
          subtitle="I don't just capture footage. I know how to turn it into a finished film."
        />

        {/* Before/After Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mb-16 md:mb-24"
        >
          <div
            ref={sliderRef}
            className="before-after-slider relative aspect-[16/9] bg-[var(--color-bg-card)] select-none"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            role="slider"
            aria-label="Compare raw footage with color graded footage"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setSliderPosition((p) => Math.max(0, p - 2));
              if (e.key === "ArrowRight") setSliderPosition((p) => Math.min(100, p + 2));
            }}
          >
            {/* "After" (graded) side — full background */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
              <video
                src="/videos/12.webm"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>

            {/* "Before" (raw) side — clipped */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <video
                src="/videos/11.webm"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-ew-resize">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 4l-4 8 4 8M16 4l4 8-4 8" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 z-10">
              <span className="tech-label px-2 py-1 bg-black/60 backdrop-blur-sm text-white/80">
                RAW
              </span>
            </div>
            <div className="absolute bottom-4 right-4 z-10">
              <span className="tech-label px-2 py-1 bg-black/60 backdrop-blur-sm text-[var(--color-accent)]">
                GRADED
              </span>
            </div>
          </div>

          <p className="text-center mt-6 md:mt-10 mb-8 md:mb-12 text-xs text-[var(--color-text-muted)] tracking-[0.1em] uppercase">
            Drag slider to compare raw vs graded footage
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {processSteps.map((step, i) => (
              <div
                key={step.label}
                className="bg-[var(--color-bg-primary)] bg-opacity-95 backdrop-blur-sm p-6 text-center hover:bg-[var(--color-bg-card)] transition-colors duration-300"
              >
                <span className="tech-label text-[var(--color-accent)] block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="heading-sm text-xs block mb-1">
                  {step.label}
                </span>
                <span className="text-[0.6875rem] text-[var(--color-text-muted)]">
                  {step.description}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
