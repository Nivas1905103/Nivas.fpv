"use client";

import SafeVideo from "./SafeVideo";

interface BackgroundVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function BackgroundVideo({ src, className = "", poster }: BackgroundVideoProps) {
  return (
    <SafeVideo
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className={className}
    />
  );
}
