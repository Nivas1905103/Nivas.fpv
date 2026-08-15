"use client";

import SafeVideo from "./SafeVideo";

interface HeroVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function HeroVideo({ src, poster, className = "" }: HeroVideoProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <SafeVideo
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        priority
        className="w-full h-full object-cover"
      />
      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-black/50 z-20 pointer-events-none" />
    </div>
  );
}
