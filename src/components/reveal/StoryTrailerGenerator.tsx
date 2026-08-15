"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

export default function StoryTrailerGenerator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingProgress, setRecordingProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadFilename, setDownloadFilename] = useState<string | null>(null);

  const duration = 15; // 15 seconds standard Instagram Story

  // Videos loaded in background
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});
  const imagesRef = useRef<{ [key: string]: HTMLImageElement }>({});
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioDestRef = useRef<MediaStreamAudioDestinationNode | null>(null);
  const reqAnimRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Initialize Web Audio Sound Generator for Cinematic FX
  const playCinematicSound = useCallback((type: "subdrop" | "whoosh" | "beep" | "riser" | "hit", timeOffset = 0) => {
    if (!isAudioEnabled) return;
    try {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") {
        ctx?.resume();
      }
      if (!ctx) return;

      const dest = audioDestRef.current ? audioDestRef.current : ctx.destination;
      const now = ctx.currentTime + timeOffset;

      if (type === "subdrop") {
        // Deep 808 Sub-Bass Impact
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(130, now);
        osc.frequency.exponentialRampToValueAtTime(32, now + 1.2);

        gain.gain.setValueAtTime(0.8, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

        osc.connect(gain);
        gain.connect(dest);
        if (dest !== ctx.destination) gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.6);
      } else if (type === "whoosh") {
        // Kinetic High-Speed Air Whoosh
        const bufferSize = ctx.sampleRate * 0.6;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(200, now);
        filter.frequency.exponentialRampToValueAtTime(3200, now + 0.3);
        filter.frequency.exponentialRampToValueAtTime(400, now + 0.6);
        filter.Q.value = 3;

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.4, now + 0.25);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(dest);
        if (dest !== ctx.destination) gain.connect(ctx.destination);

        noise.start(now);
        noise.stop(now + 0.65);
      } else if (type === "beep") {
        // Futuristic HUD UI chirp
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(1800, now);
        osc.frequency.setValueAtTime(2400, now + 0.04);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(dest);
        if (dest !== ctx.destination) gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === "hit") {
        // Cinematic Punch Impact with high transient
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.8);

        gain.gain.setValueAtTime(0.9, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

        osc.connect(gain);
        gain.connect(dest);
        if (dest !== ctx.destination) gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.0);
      }
    } catch {
      // Audio context error handler
    }
  }, [isAudioEnabled]);

  // Load video elements
  useEffect(() => {
    const v1 = document.createElement("video");
    v1.src = "/videos/13.mp4";
    v1.crossOrigin = "anonymous";
    v1.muted = true;
    v1.loop = true;
    v1.playsInline = true;
    v1.load();
    videoRefs.current["v1"] = v1;

    const v2 = document.createElement("video");
    v2.src = "/videos/1.mp4";
    v2.crossOrigin = "anonymous";
    v2.muted = true;
    v2.loop = true;
    v2.playsInline = true;
    v2.load();
    videoRefs.current["v2"] = v2;

    const v3 = document.createElement("video");
    v3.src = "/videos/7.mp4";
    v3.crossOrigin = "anonymous";
    v3.muted = true;
    v3.loop = true;
    v3.playsInline = true;
    v3.load();
    videoRefs.current["v3"] = v3;

    // Load static screenshots / portraits
    const p1 = new Image();
    p1.src = "/images/about/nivas-fpv-enhanced.jpg";
    imagesRef.current["portrait"] = p1;

    const p2 = new Image();
    p2.src = "/images/posters/hero-13.jpg";
    imagesRef.current["heroPoster"] = p2;
  }, []);

  // Main Render Frame onto 1080x1920 Canvas
  const renderFrame = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 1080;
    const H = 1920;

    // Clear Screen
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, W, H);

    // Timeline Progression Helpers
    const t = Math.max(0, Math.min(time, duration));

    // ─────────────────────────────────────────────────────────────
    // SCENE 1: 0.0s – 3.0s (CINEMATOGRAPHIC HUD BOOT & IDENT)
    // ─────────────────────────────────────────────────────────────
    if (t < 3.2) {
      const sceneProgress = t / 3.0;

      // Subtle Background Grid
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      ctx.restore();

      // Atmospheric Red Glow Center
      const glow = ctx.createRadialGradient(W / 2, H / 2, 50, W / 2, H / 2, 550);
      glow.addColorStop(0, "rgba(229, 9, 20, 0.3)");
      glow.addColorStop(0.6, "rgba(229, 9, 20, 0.08)");
      glow.addColorStop(1, "rgba(5, 5, 5, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      // Tech Crosshairs
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 1.5;
      const cx = W / 2;
      const cy = H / 2 - 80;
      ctx.beginPath();
      ctx.moveTo(cx - 40, cy);
      ctx.lineTo(cx + 40, cy);
      ctx.moveTo(cx, cy - 40);
      ctx.lineTo(cx, cy + 40);
      ctx.stroke();

      // Pulsing Ring
      ctx.strokeStyle = "rgba(229, 9, 20, 0.6)";
      ctx.beginPath();
      ctx.arc(cx, cy, 80 + Math.sin(t * 8) * 10, 0, Math.PI * 2);
      ctx.stroke();

      // Top Status Bar
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.font = "600 22px monospace";
      ctx.textAlign = "center";
      ctx.fillText(`SYS.BOOT // KINETIC VECTOR SYSTEM [${Math.min(100, Math.floor(sceneProgress * 130))}%]`, W / 2, 220);

      // Red Pilot Badge
      ctx.fillStyle = "#e50914";
      ctx.beginPath();
      ctx.arc(cx - 170, 290, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "bold 24px monospace";
      ctx.fillText("DGCA APPROVED PILOT // INDIA", W / 2 + 10, 298);

      // Main Brand Typography Reveal
      if (t > 0.6) {
        ctx.save();
        ctx.font = "900 108px 'Outfit', sans-serif";
        const nivasW = ctx.measureText("NIVAS").width;
        const dotFpvW = ctx.measureText(".FPV").width;
        const totalW = nivasW + dotFpvW;
        const startX = (W - totalW) / 2;

        ctx.textAlign = "left";
        ctx.fillStyle = "#ffffff";
        ctx.fillText("NIVAS", startX, H / 2 + 120);

        ctx.fillStyle = "#e50914";
        ctx.fillText(".FPV", startX + nivasW, H / 2 + 120);

        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.font = "400 30px monospace";
        ctx.fillText("THE OFFICIAL PORTFOLIO", W / 2, H / 2 + 190);

        ctx.fillStyle = "rgba(229, 9, 20, 0.9)";
        ctx.font = "600 24px monospace";
        ctx.fillText("PREMIUM FPV CINEMATOGRAPHY", W / 2, H / 2 + 240);
        ctx.restore();
      }
    }

    // ─────────────────────────────────────────────────────────────
    // SCENE 2: 3.0s – 7.0s (HIGH SPEED FLIGHT & HERO DROP)
    // ─────────────────────────────────────────────────────────────
    if (t >= 2.8 && t < 7.2) {
      const sceneProgress = (t - 3.0) / 4.0;
      const v = videoRefs.current["v1"];

      // Sync video playback time with trailer progression
      if (v && v.duration && Number.isFinite(v.duration)) {
        const targetVideoTime = 2.0 + (sceneProgress * 3.5);
        if (Math.abs(v.currentTime - targetVideoTime) > 0.4) {
          v.currentTime = targetVideoTime % v.duration;
        }
      }

      ctx.save();
      let hasDrawn = false;
      if (v && v.readyState >= 2 && v.videoWidth > 0) {
        const scale = 1.0 + sceneProgress * 0.15;
        ctx.translate(W / 2, H / 2);
        ctx.scale(scale, scale);
        ctx.translate(-W / 2, -H / 2);
        try {
          ctx.drawImage(v, -200, 0, W + 400, H);
          hasDrawn = true;
        } catch {}
      } else if (imagesRef.current["heroPoster"] && imagesRef.current["heroPoster"].naturalWidth > 0) {
        ctx.drawImage(imagesRef.current["heroPoster"], 0, 0, W, H);
        hasDrawn = true;
      }

      if (!hasDrawn) {
        // Deep Crimson Velocity Mesh
        const gradFlight = ctx.createLinearGradient(0, 0, 0, H);
        gradFlight.addColorStop(0, "#2a0909");
        gradFlight.addColorStop(0.25, "#480e0e");
        gradFlight.addColorStop(0.5, "#1c0606");
        gradFlight.addColorStop(0.75, "#3d0b0b");
        gradFlight.addColorStop(1, "#180505");
        ctx.fillStyle = gradFlight;
        ctx.fillRect(0, 0, W, H);

        // Futuristic Warp Speed Vectors
        const cx = W / 2;
        const cy = H / 2 - 120;
        for (let i = 0; i < 36; i++) {
          const angle = (i / 36) * Math.PI * 2;
          const dist1 = 140 + ((i * 45 + sceneProgress * 800) % 700);
          const dist2 = dist1 + 120;
          const x1 = cx + Math.cos(angle) * dist1;
          const y1 = cy + Math.sin(angle) * dist1 * 1.5;
          const x2 = cx + Math.cos(angle) * dist2;
          const y2 = cy + Math.sin(angle) * dist2 * 1.5;

          ctx.strokeStyle = i % 2 === 0 ? "rgba(229, 9, 20, 0.9)" : "rgba(255, 255, 255, 0.75)";
          ctx.lineWidth = i % 3 === 0 ? 3.5 : 2;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        // Concentric Dynamic Flight Speed Rings
        for (let r = 1; r <= 6; r++) {
          const radius = ((r * 150 + sceneProgress * 400) % 900);
          ctx.strokeStyle = `rgba(229, 9, 20, ${Math.max(0.1, 0.7 - radius / 1200)})`;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.ellipse(cx, cy, radius, radius * 1.3, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Dynamic FPV Flight Crosshair HUD
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      const hx = W / 2;
      const hy = H / 2 - 120;
      // Center cross
      ctx.beginPath();
      ctx.moveTo(hx - 25, hy);
      ctx.lineTo(hx + 25, hy);
      ctx.moveTo(hx, hy - 25);
      ctx.lineTo(hx, hy + 25);
      ctx.stroke();

      // Pitch Ladders
      ctx.strokeStyle = "#e50914";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(hx - 90, hy - 60);
      ctx.lineTo(hx - 45, hy - 60);
      ctx.lineTo(hx - 45, hy - 48);
      ctx.moveTo(hx + 90, hy - 60);
      ctx.lineTo(hx + 45, hy - 60);
      ctx.lineTo(hx + 45, hy - 48);

      ctx.moveTo(hx - 90, hy + 60);
      ctx.lineTo(hx - 45, hy + 60);
      ctx.lineTo(hx - 45, hy + 48);
      ctx.moveTo(hx + 90, hy + 60);
      ctx.lineTo(hx + 45, hy + 60);
      ctx.lineTo(hx + 45, hy + 48);
      ctx.stroke();

      // Cinematic Radial Vignette Overlay (Soft edge falloff only)
      const grad = ctx.createRadialGradient(W / 2, H / 2, 280, W / 2, H / 2, 800);
      grad.addColorStop(0, "rgba(5,5,5,0)");
      grad.addColorStop(0.65, "rgba(5,5,5,0.4)");
      grad.addColorStop(1, "rgba(5,5,5,0.92)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // Live Telemetry HUD Overlays
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "700 24px monospace";
      ctx.textAlign = "left";
      ctx.fillText("+ VELOCITY: 128 KM/H", 60, 180);
      ctx.fillText("+ ALTITUDE: 48M", 60, 220);
      ctx.fillText("+ 4K 10-BIT D-LOG", 60, 260);

      ctx.textAlign = "right";
      ctx.fillText("6-AXIS KINETIC VECTOR +", W - 60, 180);
      ctx.fillText("SUB-METER PROXIMITY +", W - 60, 220);
      ctx.fillText("PAN-INDIA DISPATCH +", W - 60, 260);

      // Huge Kinetic Typography
      ctx.save();
      ctx.textAlign = "center";
      ctx.fillStyle = "#ffffff";
      ctx.font = "900 115px 'Outfit', sans-serif";
      ctx.fillText("FPV DRONE", W / 2, H / 2 + 100);

      ctx.fillStyle = "#e50914";
      ctx.font = "900 90px 'Outfit', sans-serif";
      ctx.fillText("CINEMATOGRAPHY.", W / 2, H / 2 + 200);

      // Glass Badge
      ctx.fillStyle = "rgba(18, 14, 14, 0.85)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(W / 2 - 330, H / 2 + 270, 660, 74, 37);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "600 24px monospace";
      ctx.fillText("HIGH-SPEED PERSPECTIVES FOR BRANDS & FILMS", W / 2, H / 2 + 316);
      ctx.restore();
    }

    // ─────────────────────────────────────────────────────────────
    // SCENE 3: 7.0s – 11.5s (WEBSITE GLASS SHOWCASE & DISCIPLINES)
    // ─────────────────────────────────────────────────────────────
    if (t >= 6.8 && t < 11.8) {
      const sceneProgress = (t - 7.0) / 4.5;
      const v2 = videoRefs.current["v2"] || videoRefs.current["v1"];

      if (v2 && v2.duration && Number.isFinite(v2.duration)) {
        const targetVideoTime = 1.5 + (sceneProgress * 3.0);
        if (Math.abs(v2.currentTime - targetVideoTime) > 0.4) {
          v2.currentTime = targetVideoTime % v2.duration;
        }
      }

      // Dark background with subtle animated red particles/lines
      ctx.fillStyle = "#070505";
      ctx.fillRect(0, 0, W, H);

      // Ambient Red Glow
      const glow2 = ctx.createRadialGradient(W / 2, 600, 50, W / 2, 600, 650);
      glow2.addColorStop(0, "rgba(229, 9, 20, 0.3)");
      glow2.addColorStop(1, "rgba(5, 5, 5, 0)");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, W, H);

      // Header Tag
      ctx.fillStyle = "#e50914";
      ctx.font = "700 24px monospace";
      ctx.textAlign = "center";
      ctx.fillText("REBUILT FROM THE GROUND UP // ULTRA-LUXURY DESIGN", W / 2, 140);

      ctx.fillStyle = "#ffffff";
      ctx.font = "900 54px 'Outfit', sans-serif";
      ctx.fillText("THE NEW WEBSITE EXPERIENCE", W / 2, 215);

      // 3D Glass Device Frame (Mockup of Phone with Website Content)
      const phoneW = 680;
      const phoneH = 1150;
      const phoneX = (W - phoneW) / 2;
      const phoneY = 280;

      ctx.save();
      // Phone Outer Border & Glass Shadow
      ctx.shadowColor = "rgba(229, 9, 20, 0.35)";
      ctx.shadowBlur = 40;
      ctx.fillStyle = "#120e0e";
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(phoneX, phoneY, phoneW, phoneH, 50);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Phone Screen Content (Clip inside device)
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(phoneX + 10, phoneY + 10, phoneW - 20, phoneH - 20, 42);
      ctx.clip();

      // Draw inside video / simulated website scroll
      if (v2 && v2.readyState >= 2 && v2.videoWidth > 0) {
        const scrollOffset = sceneProgress * 300;
        try {
          ctx.drawImage(v2, phoneX + 10, phoneY + 10 - scrollOffset, phoneW - 20, phoneH + 400);
        } catch {}
      } else {
        const phoneBg = ctx.createLinearGradient(0, phoneY, 0, phoneY + phoneH);
        phoneBg.addColorStop(0, "#1a0f0f");
        phoneBg.addColorStop(0.5, "#100a0a");
        phoneBg.addColorStop(1, "#080505");
        ctx.fillStyle = phoneBg;
        ctx.fillRect(phoneX, phoneY, phoneW, phoneH);
      }

      // Dark Glass Overlay on screen
      ctx.fillStyle = "rgba(5,5,5,0.7)";
      ctx.fillRect(phoneX, phoneY, phoneW, phoneH);

      // Simulated Website UI components inside phone
      ctx.fillStyle = "#ffffff";
      ctx.font = "800 36px 'Outfit', sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("NIVAS.FPV", phoneX + 45, phoneY + 80);

      ctx.fillStyle = "#e50914";
      ctx.font = "700 18px monospace";
      ctx.fillText("SELECTED WORK & CASE STUDIES", phoneX + 45, phoneY + 130);

      // Mini Glass Bento Card 1
      ctx.fillStyle = "rgba(28, 18, 18, 0.92)";
      ctx.strokeStyle = "rgba(229, 9, 20, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(phoneX + 40, phoneY + 170, phoneW - 80, 220, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 28px 'Outfit', sans-serif";
      ctx.fillText("CHASE THE MOMENT", phoneX + 65, phoneY + 230);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.font = "400 18px monospace";
      ctx.fillText("HIGH-SPEED CHASE // 120 KM/H 4K D-LOG", phoneX + 65, phoneY + 270);
      ctx.fillStyle = "#e50914";
      ctx.font = "700 18px monospace";
      ctx.fillText("VIEW CASE STUDY →", phoneX + 65, phoneY + 340);

      // Mini Glass Bento Card 2
      ctx.fillStyle = "rgba(28, 18, 18, 0.92)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.beginPath();
      ctx.roundRect(phoneX + 40, phoneY + 420, phoneW - 80, 220, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 28px 'Outfit', sans-serif";
      ctx.fillText("VERTICAL RISE", phoneX + 65, phoneY + 480);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.font = "400 18px monospace";
      ctx.fillText("URBAN ARCHITECTURE // SINGLE CONTINUOUS TAKE", phoneX + 65, phoneY + 520);
      ctx.fillStyle = "#e50914";
      ctx.font = "700 18px monospace";
      ctx.fillText("VIEW CASE STUDY →", phoneX + 65, phoneY + 590);

      // Mini Glass Bento Card 3
      ctx.fillStyle = "rgba(28, 18, 18, 0.92)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.beginPath();
      ctx.roundRect(phoneX + 40, phoneY + 670, phoneW - 80, 220, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 28px 'Outfit', sans-serif";
      ctx.fillText("INTO THE WILD", phoneX + 65, phoneY + 730);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.font = "400 18px monospace";
      ctx.fillText("NATURE DOCUMENTARY // 4K 60FPS MASTER", phoneX + 65, phoneY + 770);

      ctx.restore();

      // Dynamic Feature Badges below phone
      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "600 24px monospace";
      ctx.fillText("⚡ 6-AXIS MOTION SHOWCASE • DAVINCI COLOR • FULL CASE STUDIES", W / 2, 1520);
    }

    // ─────────────────────────────────────────────────────────────
    // SCENE 4: 11.5s – 15.0s (GRAND CLIMAX, URL REVEAL & CTA)
    // ─────────────────────────────────────────────────────────────
    if (t >= 11.2) {
      const sceneProgress = (t - 11.5) / 3.5;
      const v3 = videoRefs.current["v3"] || videoRefs.current["v1"];

      if (v3 && v3.duration && Number.isFinite(v3.duration)) {
        const targetVideoTime = 2.0 + (sceneProgress * 3.0);
        if (Math.abs(v3.currentTime - targetVideoTime) > 0.4) {
          v3.currentTime = targetVideoTime % v3.duration;
        }
      }

      // Cinematic Fast Cuts Background
      ctx.save();
      let hasDrawn = false;
      if (v3 && v3.readyState >= 2 && v3.videoWidth > 0) {
        try {
          ctx.drawImage(v3, -150, 0, W + 300, H);
          hasDrawn = true;
        } catch {}
      }
      if (!hasDrawn) {
        const climBg = ctx.createRadialGradient(W / 2, H / 2, 50, W / 2, H / 2, 700);
        climBg.addColorStop(0, "#220909");
        climBg.addColorStop(0.6, "#0c0505");
        climBg.addColorStop(1, "#050505");
        ctx.fillStyle = climBg;
        ctx.fillRect(0, 0, W, H);
      }

      // Heavy contrast dark vignette
      const grandGrad = ctx.createRadialGradient(W / 2, H / 2, 100, W / 2, H / 2, 700);
      grandGrad.addColorStop(0, "rgba(5,5,5,0.75)");
      grandGrad.addColorStop(1, "rgba(5,5,5,0.96)");
      ctx.fillStyle = grandGrad;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // Atmospheric Pulsing Laser Frame
      ctx.strokeStyle = "rgba(229, 9, 20, 0.4)";
      ctx.lineWidth = 2;
      ctx.strokeRect(50, 50, W - 100, H - 100);

      // Top Eyebrow
      ctx.textAlign = "center";
      ctx.fillStyle = "#e50914";
      ctx.font = "700 32px monospace";
      ctx.fillText("◆  OFFICIAL WEBSITE IS NOW LIVE  ◆", W / 2, 380);

      // Main Brand Logo
      ctx.save();
      ctx.font = "900 130px 'Outfit', sans-serif";
      const nivasW4 = ctx.measureText("NIVAS").width;
      const dotFpvW4 = ctx.measureText(".FPV").width;
      const totalW4 = nivasW4 + dotFpvW4;
      const startX4 = (W - totalW4) / 2;

      ctx.textAlign = "left";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("NIVAS", startX4, 580);
      ctx.fillStyle = "#e50914";
      ctx.fillText(".FPV", startX4 + nivasW4, 580);
      ctx.restore();

      // Domain Glass Badge
      ctx.save();
      ctx.shadowColor = "rgba(229, 9, 20, 0.6)";
      ctx.shadowBlur = 40;
      ctx.fillStyle = "rgba(18, 14, 14, 0.9)";
      ctx.strokeStyle = "#e50914";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(W / 2 - 380, 720, 760, 140, 30);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Pulsing Glowing URL Text
      ctx.fillStyle = "#ffffff";
      ctx.font = "900 68px 'Outfit', sans-serif";
      ctx.fillText("NIVASFPV.IN", W / 2, 815);

      // Subhead Call-To-Actions
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "500 32px monospace";
      ctx.fillText("EXPLORE THE FULL CINEMATIC REEL", W / 2, 960);
      ctx.fillText("PORTFOLIO  •  SERVICES  •  CASE STUDIES", W / 2, 1020);

      // Swipe Up / Link in Bio Callout
      const bounce = Math.sin(t * 10) * 12;
      ctx.fillStyle = "#e50914";
      ctx.font = "900 36px monospace";
      ctx.fillText("▲  TAP LINK IN BIO / STORY  ▲", W / 2, 1380 + bounce);

      // Book Project Badge
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(W / 2 - 260, 1480, 520, 80, 40);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 28px monospace";
      ctx.fillText("BOOK YOUR PROJECT FOR 2026", W / 2, 1530);

      // Bottom Location Footnote
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.font = "500 22px monospace";
      ctx.fillText("BASED IN INDIA  •  AVAILABLE NATIONWIDE", W / 2, 1720);
    }
  }, [duration]);

  // Expose for external recorders
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as { renderStoryFrame?: (t: number) => void }).renderStoryFrame = renderFrame;
    }
  }, [renderFrame]);

  // Animation Loop
  useEffect(() => {
    let animationFrameId: number | null = null;

    const loop = () => {
      if (isPlaying) {
        if (!startTimeRef.current) {
          startTimeRef.current = performance.now() - currentTime * 1000;
        }
        const elapsed = (performance.now() - startTimeRef.current) / 1000;
        const boundedTime = elapsed % duration;
        setCurrentTime(boundedTime);
        renderFrame(boundedTime);

        // Sound triggers
        if (Math.abs(boundedTime - 0.1) < 0.05) playCinematicSound("subdrop");
        if (Math.abs(boundedTime - 3.0) < 0.05) playCinematicSound("whoosh");
        if (Math.abs(boundedTime - 3.1) < 0.05) playCinematicSound("hit");
        if (Math.abs(boundedTime - 7.0) < 0.05) playCinematicSound("whoosh");
        if (Math.abs(boundedTime - 11.5) < 0.05) playCinematicSound("subdrop");
        if (Math.abs(boundedTime - 11.6) < 0.05) playCinematicSound("hit");

        animationFrameId = requestAnimationFrame(loop);
      } else {
        renderFrame(currentTime);
      }
    };

    if (isPlaying) {
      // Sync video playback
      Object.values(videoRefs.current).forEach((v) => {
        v.play().catch(() => {});
      });
      animationFrameId = requestAnimationFrame(loop);
    } else {
      Object.values(videoRefs.current).forEach((v) => {
        v.pause();
      });
      renderFrame(currentTime);
    }

    reqAnimRef.current = animationFrameId;
    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying, currentTime, duration, playCinematicSound, renderFrame]);

  // Audio Context Setup
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
      audioDestRef.current = ctx.createMediaStreamDestination();
    }
  };

  const togglePlay = () => {
    initAudio();
    if (isPlaying) {
      setIsPlaying(false);
      startTimeRef.current = null;
    } else {
      setIsPlaying(true);
      startTimeRef.current = performance.now() - currentTime * 1000;
    }
  };

  // High-Bitrate 1080x1920 60FPS Video Export Function
  const exportStoryVideo = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    initAudio();
    setIsPlaying(false);
    setIsRecording(true);
    setRecordingProgress(0);
    setDownloadUrl(null);

    // Audio stream mix
    const canvasStream = canvas.captureStream(60);
    if (audioDestRef.current && audioDestRef.current.stream) {
      audioDestRef.current.stream.getAudioTracks().forEach((track) => {
        canvasStream.addTrack(track);
      });
    }

    // Supported mime type detection
    let mimeType = "video/webm;codecs=vp9";
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      mimeType = "video/webm";
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = "video/mp4";
      }
    }

    const mediaRecorder = new MediaRecorder(canvasStream, {
      mimeType,
      videoBitsPerSecond: 20000000, // 20 Mbps ultra-high quality
    });

    const recordedChunks: Blob[] = [];
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: mimeType });
      const url = URL.createObjectURL(blob);
      const filename = `nivas-fpv-instagram-story-reveal-9x16.${mimeType.includes("mp4") ? "mp4" : "webm"}`;
      setDownloadUrl(url);
      setDownloadFilename(filename);
      setIsRecording(false);
      setRecordingProgress(100);

      // Auto trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    mediaRecorder.start();

    // Start rendering frame by frame deterministically for 15s
    const totalFrames = duration * 60; // 900 frames at 60fps
    let currentFrame = 0;

    Object.values(videoRefs.current).forEach((v) => {
      v.currentTime = 0;
      v.play().catch(() => {});
    });

    const recordStep = () => {
      if (currentFrame <= totalFrames) {
        const t = (currentFrame / totalFrames) * duration;
        renderFrame(t);
        setRecordingProgress(Math.floor((currentFrame / totalFrames) * 100));

        // Sound triggers during recording
        if (currentFrame === 6) playCinematicSound("subdrop");
        if (currentFrame === 180) {
          playCinematicSound("whoosh");
          playCinematicSound("hit");
        }
        if (currentFrame === 420) playCinematicSound("whoosh");
        if (currentFrame === 690) {
          playCinematicSound("subdrop");
          playCinematicSound("hit");
        }

        currentFrame++;
        requestAnimationFrame(recordStep);
      } else {
        mediaRecorder.stop();
        Object.values(videoRefs.current).forEach((v) => v.pause());
      }
    };

    requestAnimationFrame(recordStep);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20 px-4 flex flex-col items-center">
      {/* Top Header */}
      <div className="max-w-4xl w-full text-center mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>Instagram Story Video Reveal Studio // 9:16</span>
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white">
          Cinematic Story Reveal Trailer<span className="text-[var(--color-accent)]">.</span>
        </h1>
        <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-light max-w-2xl mx-auto">
          Ultra-high-bitrate 1080×1920 (9:16) video engineered specifically for Instagram Stories, Reels, and TikTok to launch the new NIVAS.FPV portfolio.
        </p>
      </div>

      {/* Main Studio Console Layout */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Center: 9:16 Canvas Phone Preview (5 cols on Desktop) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] rounded-[2.5rem] p-3 bg-[#120e0e]/80 border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(229,9,20,0.15)] overflow-hidden">
            {/* Top Phone Notch / Dynamic Island */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 rounded-full bg-black border border-white/10 z-30 pointer-events-none" />

            {/* The 1080x1920 Render Canvas */}
            <canvas
              ref={canvasRef}
              width={1080}
              height={1920}
              className="w-full h-full rounded-[2rem] object-cover bg-black cursor-pointer"
              onClick={togglePlay}
            />

            {/* Play Overlay Button if paused */}
            {!isPlaying && !isRecording && (
              <button
                onClick={togglePlay}
                aria-label="Play Trailer"
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(229,9,20,0.6)] backdrop-blur-md transition-transform hover:scale-110 z-20"
              >
                <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}

            {/* Recording Progress Modal */}
            {isRecording && (
              <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-40 rounded-[2rem]">
                <div className="w-16 h-16 rounded-full border-4 border-red-500/20 border-t-red-500 animate-spin mb-4" />
                <span className="font-mono text-sm uppercase tracking-widest text-red-400 font-bold mb-2">
                  RENDERING 1080×1920 60FPS
                </span>
                <span className="font-heading font-bold text-4xl text-white mb-3">
                  {recordingProgress}%
                </span>
                <p className="text-xs text-white/60 font-mono">
                  Synthesizing cinematic audio and baking 20 Mbps high-bitrate video...
                </p>
              </div>
            )}
          </div>

          {/* Scrubber & Player Control Bar */}
          <div className="w-full max-w-[380px] mt-4 flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#120e0e]/70 border border-white/10 font-mono text-xs text-white/70">
            <button
              onClick={togglePlay}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
            >
              {isPlaying ? "PAUSE ❚❚" : "PLAY ▶"}
            </button>
            <div className="flex-1 flex items-center gap-2">
              <input
                type="range"
                min={0}
                max={duration}
                step={0.1}
                value={currentTime}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setCurrentTime(val);
                  startTimeRef.current = performance.now() - val * 1000;
                  renderFrame(val);
                }}
                className="w-full accent-red-600 cursor-pointer h-1.5 bg-white/20 rounded-lg"
              />
            </div>
            <span className="text-[11px]">
              {currentTime.toFixed(1)}s / {duration}s
            </span>
          </div>
        </div>

        {/* Right: Master Export Controls & Cinematic Telemetry (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Action Exporter Box */}
          <div className="p-6 sm:p-8 rounded-[2rem] bg-[#120e0e]/80 backdrop-blur-xl border border-white/[0.09] shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-red-400 block">
                  OUTPUT RESOLUTION
                </span>
                <span className="font-heading font-bold text-xl sm:text-2xl text-white">
                  1080 × 1920 (9:16 Full HD)
                </span>
              </div>
              <span className="px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs font-bold">
                60 FPS / 20 Mbps
              </span>
            </div>

            {/* Audio Toggle */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="text-lg">🔊</span>
                <div>
                  <span className="font-heading font-semibold text-sm text-white block">
                    Cinematic Sound Synthesizer
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)] font-mono">
                    808 Sub-bass drops, kinetic whooshes &amp; HUD chirps
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                  isAudioEnabled
                    ? "bg-red-600 text-white"
                    : "bg-white/10 text-white/50"
                }`}
              >
                {isAudioEnabled ? "ON" : "OFF"}
              </button>
            </div>

            {/* Big Action Render Button */}
            <button
              onClick={exportStoryVideo}
              disabled={isRecording}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-red-600 via-[var(--color-accent)] to-red-600 hover:from-red-500 hover:to-red-500 text-white font-heading font-bold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 shadow-[0_10px_35px_rgba(229,9,20,0.4)] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
            >
              <span>⚡</span>
              <span>{isRecording ? "Rendering Video..." : "Export Instagram Story Video"}</span>
              <span>↓</span>
            </button>

            {/* Download Link if ready */}
            {downloadUrl && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="text-emerald-400 font-mono text-xs font-bold block">
                    ✓ VIDEO EXPORTED SUCCESSFULLY!
                  </span>
                  <span className="text-white/70 font-mono text-[11px]">
                    {downloadFilename}
                  </span>
                </div>
                <a
                  href={downloadUrl}
                  download={downloadFilename || "nivas-fpv-story-reveal.webm"}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors"
                >
                  Download Again ↓
                </a>
              </div>
            )}

            {/* Telemetry Breakdown of the 15s Edit */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">
                STORY TIMELINE CHOREOGRAPHY:
              </span>
              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                  <span className="text-red-400 font-bold">0.0s – 3.0s</span>
                  <span className="text-white/80">HUD Laser Boot &amp; DGCA Verified Pilot Ident</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                  <span className="text-red-400 font-bold">3.0s – 7.0s</span>
                  <span className="text-white/80">128 KM/H Speed Ramp Drone Flight &amp; Hero Drop</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                  <span className="text-red-400 font-bold">7.0s – 11.5s</span>
                  <span className="text-white/80">3D Floating Glass Device Scrolling Live Website</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                  <span className="text-red-400 font-bold">11.5s – 15.0s</span>
                  <span className="text-white/80">Grand Climax: NIVASFPV.IN URL &amp; Link In Bio CTA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Back */}
          <div className="flex items-center justify-between px-2 text-xs font-mono text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              ← Return to Homepage
            </Link>
            <span>NIVAS.FPV // STORY REVEAL STUDIO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
