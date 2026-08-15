"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    // Check if video is already ready (e.g. cached)
    if (video.readyState >= 2) {
      setVideoReady(true);
    }

    video.play().catch(() => {});
  }, [heroVideo]);

  return (
    <section className="relative w-full h-[75vh] min-h-[520px] max-h-[900px] overflow-hidden bg-[#050505]">
      {/* 1. Media Layer (z-0) */}
      <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
        {/* Poster / Loading Fallback image (only visible before video is ready) */}
        {poster && (
          <div
            className={`absolute inset-0 z-0 transition-opacity duration-700 ${
              videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Image
              src={poster}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        {/* Hero Video (opacity: 1, full cover) */}
        {heroVideo && (
          <video
            ref={videoRef}
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={poster || undefined}
            onLoadedData={() => setVideoReady(true)}
            onCanPlay={() => setVideoReady(true)}
            onPlaying={() => setVideoReady(true)}
            onEnded={(e) => {
              const v = e.currentTarget;
              v.currentTime = 0;
              v.play().catch(() => {});
            }}
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
          />
        )}

        {/* Fallback if no video and no poster */}
        {!heroVideo && !poster && (
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
        className="absolute inset-x-0 z-20 container-site flex flex-col justify-end"
        style={{
          bottom: "clamp(2.5rem, 7vw, 7rem)",
        }}
      >
        <div className="max-w-4xl">
          <span className="tech-label text-[var(--color-accent)] block mb-3 md:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {category}
          </span>
          <h1 className="heading-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] max-w-3xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
