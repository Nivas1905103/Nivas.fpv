"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 800, damping: 35, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  useEffect(() => {
    // Detect touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setTimeout(() => setIsTouch(true), 0);
      return;
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    document.body.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Track hoverable elements
    const handleElementHover = () => {
      const hoverables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor]'
      );

      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true);
          const cursorData = (el as HTMLElement).dataset.cursor;
          if (cursorData) setCursorText(cursorData);
        });
        el.addEventListener("mouseleave", () => {
          setIsHovering(false);
          setCursorText("");
        });
      });
    };

    handleElementHover();

    // Re-attach on DOM changes
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.classList.remove("custom-cursor-active");
      observer.disconnect();
    };
  }, [handleMouseMove]);

  if (isTouch) return null;

  return (
    <>
      {/* Small dot (instant) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* Hover flight-reticle with text */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] flex items-center justify-center mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible && isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
          width: cursorText ? 80 : 64,
          height: cursorText ? 80 : 64,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* FPV Reticle SVG */}
          <svg className="absolute inset-0 w-full h-full text-white/70" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 6" />
            <path d="M50 15 v10 M50 75 v10 M15 50 h10 M75 50 h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
          </svg>
          
          {cursorText && (
            <span className="relative z-10 text-[0.5625rem] font-[family-name:var(--font-heading)] font-semibold tracking-[0.1em] uppercase text-white bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
              {cursorText}
            </span>
          )}
        </div>
      </motion.div>
    </>
  );
}
