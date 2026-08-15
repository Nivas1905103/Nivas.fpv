"use client";

import Image from "next/image";
import SafeVideo from "@/components/ui/SafeVideo";

interface ProjectHeroProps {
  title: string;
  category: string;
  heroVideo?: string;
  poster?: string;
}

export default function ProjectHero({
  title,
  category,
  heroVideo,
  poster,
}: ProjectHeroProps) {
  return (
    <section className="relative w-full h-[75vh] min-h-[520px] max-h-[900px] overflow-hidden bg-[#050505]">
      {/* 1. Media Layer (z-0) */}
      <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
        {heroVideo ? (
          <SafeVideo
            src={heroVideo}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            priority
            className="w-full h-full object-cover"
          />
        ) : poster ? (
          <Image
            src={poster}
            alt={title}
            fill
            priority
            className="object-cover opacity-100"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#050505]">
            <span className="heading-xl text-white/[0.03]">{title}</span>
          </div>
        )}
      </div>

      {/* 2. Cinematic Gradient Overlay (z-10) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(5, 5, 5, 0) 35%,
            rgba(5, 5, 5, 0.18) 55%,
            rgba(5, 5, 5, 0.72) 78%,
            #050505 100%
          )`,
        }}
      />

      {/* Top subtle vignette for navbar contrast */}
      <div className="absolute inset-x-0 top-0 h-32 z-10 pointer-events-none bg-gradient-to-b from-black/80 via-black/30 to-transparent" />

      {/* 3. Hero Content / Title (z-20) */}
      <div
        className="absolute inset-x-0 z-20 container-site flex flex-col justify-end pointer-events-none"
        style={{
          bottom: "clamp(2.5rem, 7vw, 7rem)",
        }}
      >
        <div className="max-w-3xl">
          <span className="tech-label text-[var(--color-accent)] block mb-2 md:mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {category}
          </span>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] max-w-2xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
