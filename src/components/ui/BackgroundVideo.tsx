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

    // Use IntersectionObserver to only play when visible (saves battery)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
        className={`${className} relative z-10`}
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
      />
    </>
  );
}
