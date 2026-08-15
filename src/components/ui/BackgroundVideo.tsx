"use client";

import { useRef, useEffect, useState } from "react";

interface BackgroundVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function BackgroundVideo({ src, className = "", poster }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force attributes directly on the DOM element for mobile browsers
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    if (video.readyState >= 2) {
      setVideoReady(true);
    }

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
          className={`${className} absolute inset-0 z-0 transition-opacity duration-700 ${
            videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
      )}
      <video
        ref={videoRef}
        src={src}
        className={`${className} relative z-10 opacity-100`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        onLoadedData={() => setVideoReady(true)}
        onCanPlay={() => setVideoReady(true)}
        onPlaying={() => setVideoReady(true)}
        onEnded={(e) => {
          const target = e.currentTarget;
          target.currentTime = 0;
          target.play().catch(() => {});
        }}
      />
    </>
  );
}
