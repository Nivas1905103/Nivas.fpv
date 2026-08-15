"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

export interface SafeVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  containerClassName?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: "auto" | "metadata" | "none";
  priority?: boolean;
  showBlockedPlayButton?: boolean;
  onPlaySuccess?: () => void;
}

export default function SafeVideo({
  src,
  poster,
  className = "",
  containerClassName = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "auto",
  priority = false,
  showBlockedPlayButton = true,
  onPlaySuccess,
  ...restProps
}: SafeVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const attemptPlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = muted;
      video.defaultMuted = muted;
      video.playsInline = playsInline;
      video.loop = loop;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
        setIsAutoplayBlocked(false);
        onPlaySuccess?.();
      }
    } catch {
      // Autoplay blocked by browser policy / low-power mode
      setIsAutoplayBlocked(true);
      setIsPlaying(false);
    }
  }, [muted, playsInline, loop, onPlaySuccess]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct DOM property enforcement for mobile WebKit / Safari
    video.muted = muted;
    video.defaultMuted = muted;
    video.playsInline = playsInline;
    video.loop = loop;

    if (autoPlay) {
      // Check reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!prefersReducedMotion) {
        attemptPlay();
      }
    }
  }, [src, autoPlay, muted, playsInline, loop, attemptPlay]);

  const handleManualPlay = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = muted;
    video
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsAutoplayBlocked(false);
      })
      .catch(() => {});
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[#0a0a0a] ${containerClassName}`}
    >
      {/* 1. Poster fallback image (rendered only while video is not ready or if error occurs) */}
      {poster && (!isReady || hasError || isAutoplayBlocked) && (
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-500 ${
            isReady && !isAutoplayBlocked && !hasError
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <img
            src={poster}
            alt="Video Poster Fallback"
            className="w-full h-full object-cover"
            loading={priority ? "eager" : "lazy"}
          />
        </div>
      )}

      {/* 2. Primary native video element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        onLoadedData={() => {
          setIsReady(true);
          setHasError(false);
        }}
        onCanPlay={() => {
          setIsReady(true);
        }}
        onPlaying={() => {
          setIsReady(true);
          setIsPlaying(true);
          setIsAutoplayBlocked(false);
        }}
        onEnded={(e) => {
          // Native loop fallback safety
          if (loop) {
            const v = e.currentTarget;
            v.currentTime = 0;
            v.play().catch(() => {});
          }
        }}
        onError={() => {
          setHasError(true);
        }}
        className={`w-full h-full object-cover z-10 relative opacity-100 ${className}`}
        {...restProps}
      />

      {/* 3. Fallback Play Button if Autoplay was Blocked */}
      {isAutoplayBlocked && showBlockedPlayButton && (
        <div
          onClick={handleManualPlay}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 cursor-pointer backdrop-blur-[2px] transition-all hover:bg-black/30"
          role="button"
          aria-label="Play video"
          tabIndex={0}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
            <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
