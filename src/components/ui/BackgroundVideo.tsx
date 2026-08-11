"use client";

import { useRef, useEffect } from "react";

interface BackgroundVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function BackgroundVideo({ src, className = "", poster }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force loop attribute directly on the DOM element for Safari
    video.loop = true;
    
    // Attempt to play
    video.play().catch(() => {
      // Autoplay blocked
    });
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={className}
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
    />
  );
}
