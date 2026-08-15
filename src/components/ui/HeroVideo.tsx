"use client";

import { useRef, useEffect } from "react";

interface HeroVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function HeroVideo({ src, poster, className = "" }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force attributes directly on the DOM element for mobile/desktop browsers
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    // Play video
    video.play().catch(() => {
      // Autoplay was prevented
    });
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover z-10 relative"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        onEnded={(e) => {
          const target = e.currentTarget;
          target.currentTime = 0;
          target.play().catch(() => {});
        }}
      >
        <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-20" />
    </div>
  );
}
