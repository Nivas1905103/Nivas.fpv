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

    // Force attributes directly on the DOM element for mobile browsers
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true; // Re-enable native loop
    video.playsInline = true;

    // ADVANCED LOOP TECHNIQUE: Bypass browser bugs by manually checking time
    let animationFrameId: number;
    const checkLoop = () => {
      // If we are within 50ms of the end, force a loop back to 0
      if (video.duration > 0 && video.currentTime >= video.duration - 0.05) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
      animationFrameId = requestAnimationFrame(checkLoop);
    };

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    // Attempt autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        checkLoop();
      }).catch(() => {
        // Autoplay was prevented
      });
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
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
        onEnded={(e) => {
          // Fallback for when 'loop' attribute fails
          const target = e.currentTarget;
          target.currentTime = 0;
          target.play().catch(() => {});
        }}
      >
        {/* Replace with actual hero FPV footage */}
        <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-20" />
    </div>
  );
}
