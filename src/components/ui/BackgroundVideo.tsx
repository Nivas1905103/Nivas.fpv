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

    // Force attributes directly on the DOM element for mobile browsers
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
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

    // Attempt to play
    video.play().then(() => {
      checkLoop();
    }).catch(() => {
      // Autoplay blocked
    });

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
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
