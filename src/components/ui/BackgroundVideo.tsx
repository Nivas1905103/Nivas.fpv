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
    video.loop = false; // Disable native loop
    video.playsInline = true;
    
    // Fade out before end
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.1) {
        video.style.opacity = '0';
      }
    };
    
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Use IntersectionObserver to only play when visible (saves battery)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset state when coming into view
            video.style.opacity = '';
            video.currentTime = 0;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {poster && (
        <img
          src={poster}
          alt="Background Thumbnail"
          className={`${className} absolute inset-0 z-0`}
        />
      )}
      <video
        ref={videoRef}
        src={src}
        className={`${className} transition-opacity duration-[1000ms] relative z-10`}
        muted
        playsInline
        preload="auto"
      />
    </>
  );
}
