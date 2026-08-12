"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function HeroVideo({ src, poster, className = "" }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force attributes directly on the DOM element for mobile browsers
    video.muted = true;
    video.defaultMuted = true;
    video.loop = false; // Disable native loop
    video.playsInline = true;

    // Use timeupdate to fade out before end
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.1) {
        video.style.opacity = '0';
      }
    };
    
    video.addEventListener('timeupdate', handleTimeUpdate);

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
      playPromise.catch(() => {
        // Autoplay was prevented — show poster instead
      });
    }

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {poster && (
        <Image
          src={poster}
          alt="Hero Background"
          fill
          priority
          className="object-cover absolute inset-0 z-0"
        />
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover z-10 relative transition-opacity duration-[1000ms]"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        {/* Replace with actual hero FPV footage */}
        <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-20" />
    </div>
  );
}
