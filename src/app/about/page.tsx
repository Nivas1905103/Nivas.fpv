import type { Metadata } from "next";
import Link from "next/link";
import { gear } from "@/data/gear";
import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";
import LiquidBackground from "@/components/ui/LiquidBackground";

export const metadata: Metadata = {
  title: "About — Nivas | FPV Drone Cinematographer",
  description:
    "Nivas is a professional FPV drone cinematographer and video editor based in India. Specializing in commercial cinematography, real estate walkthroughs, automotive filming, and cinematic FPV experiences.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-36 bg-[var(--color-bg-primary)] relative overflow-hidden h-auto">
      
      {/* Subtle Dynamic Background */}
      <LiquidBackground opacity={0.08} color1="#E63946" color2="#330000" />

      {/* 
        Content container: 
        Mobile: 20-24px padding (px-5 md:px-6) 
        Desktop: max-w-[1360px] with 40-64px padding (lg:px-12 xl:px-16)
      */}
      <div className="w-full max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 xl:px-16 relative z-10 h-auto">
        
        {/* 1. HERO / IDENTITY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 xl:gap-20 items-center w-full h-auto">
          
          {/* Image */}
          {/* Mobile Image: 28-32px spacing (mb-7 md:mb-8 lg:mb-0) */}
          <div className="lg:col-span-5 relative w-full mb-8 lg:mb-0 h-auto">
            {/* Aspect ratio optimized for portrait cinematic framing */}
            <div className="aspect-[4/5] bg-[var(--color-bg-secondary)] relative overflow-hidden rounded-[1rem] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.4)] w-full h-auto">
              <Image 
                src="/images/about/nivas-fpv-enhanced.jpg" 
                alt="Nivas - Portrait"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center w-full h-auto">
            <div className="w-full h-auto">
              {/* IDENTITY -> 20px -> Nivas. */}
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-5 mt-0">
                Identity
              </span>
              
              {/* Nivas. -> 20-24px -> FPV DRONE... */}
              <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl xl:text-[6rem] tracking-tighter mb-5 md:mb-6 text-[var(--color-text-primary)] leading-[1.1] mt-0">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h1>
              
              <div className="flex flex-col gap-3 md:gap-4 h-auto">
                {/* Primary role -> Secondary role: 10-14px (handled by flex gap) */}
                <p className="text-sm md:text-base lg:text-lg font-semibold tracking-[0.15em] uppercase text-[var(--color-text-primary)] m-0 p-0 leading-tight">
                  FPV Drone Cinematographer
                </p>
                <div className="flex items-center gap-4 h-auto">
                  <div className="h-[2px] w-8 lg:w-10 bg-[var(--color-accent)]" />
                  <p className="text-xs md:text-sm lg:text-base font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)] m-0 p-0 leading-tight">
                    Editor / Visual Storyteller
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* 2. BACKGROUND & APPROACH (Side-by-Side on Desktop) */}
        {/* Hero to first major section: 60-80px mobile (mt-16 md:mt-20), 80-120px desktop (lg:mt-28 xl:mt-32) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-14 mt-16 md:mt-20 lg:mt-28 xl:mt-32 w-full h-auto">
          
          {/* Left Block: Background */}
          {/* Card padding: 24-28px mobile (p-6 md:p-7), 32-40px desktop (lg:p-8 xl:p-10) */}
          <div className="bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] p-6 md:p-7 lg:p-8 xl:p-10 w-full shadow-lg h-auto flex flex-col">
            {/* Heading -> paragraph: 20-24px (mb-5 md:mb-6) */}
            <h2 className="text-[15px] md:text-[16px] lg:text-[18px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-5 md:mb-6 leading-[1.3] w-full m-0">
              01. Background
            </h2>
            {/* Paragraph -> paragraph: 24-32px (mb-6 md:mb-8) */}
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-6 md:mb-8 mt-0">
              Based in India, I create dynamic visual experiences through FPV drone
              cinematography and professional video editing. I work closely with film 
              productions, brands, agencies, and businesses to deliver cinematic aerial 
              footage that tells stories through movement.
            </p>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light m-0">
              My journey began with a fascination for aviation and visual arts. Over the years, 
              I merged these disciplines, using FPV drones not just as flying cameras, but as 
              instruments for emotional storytelling.
            </p>
          </div>

          {/* Right Block: Approach */}
          <div className="bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] p-6 md:p-7 lg:p-8 xl:p-10 w-full shadow-lg h-auto flex flex-col">
            <h2 className="text-[15px] md:text-[16px] lg:text-[18px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-5 md:mb-6 leading-[1.3] w-full m-0">
              02. Approach
            </h2>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-6 md:mb-8 mt-0">
              Every project begins with understanding the core narrative. I combine
              technical piloting precision with a cinematographer&apos;s eye for framing
              and an editor&apos;s sense of pacing. 
            </p>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light m-0">
              From high-speed automotive tracking to intimate indoor walkthroughs, 
              the objective is always the same: capture footage that doesn&apos;t just 
              look impressive, but actively moves the story forward.
            </p>
          </div>
          
        </div>

        {/* 3. EXPERTISE (Dedicated Full-Width Section) */}
        {/* Background/Approach -> Expertise: 64-80px mobile, 80-100px desktop (mt-16 md:mt-20 lg:mt-24 xl:mt-28) */}
        <div className="mt-16 md:mt-20 lg:mt-24 xl:mt-28 w-full h-auto">
          {/* Expertise heading -> grid: 24-32px (mb-6 md:mb-8) */}
          <h2 className="text-[15px] md:text-[16px] lg:text-[18px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-6 md:mb-8 leading-[1.3] w-full m-0">
            03. Expertise
          </h2>
          
          {/* Expertise grid: 1 column mobile, 2 columns desktop */}
          {/* Row gap: 20-28px (gap-y-5 md:gap-y-6), Col gap 40-48px (gap-x-10 md:gap-x-12) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-6 lg:gap-y-7 gap-x-10 md:gap-x-12 w-full h-auto">
            {[
              "FPV Drone Piloting",
              "Aerial Cinematography",
              "Video Editing",
              "Color Grading",
              "Sound Design",
              "Speed Ramping",
              "Creative Direction",
              "Indoor Fly-Throughs",
            ].map((skill, i) => (
              <div key={skill} className="flex items-center gap-5 md:gap-6 group cursor-default py-4 md:py-4 lg:py-5 px-5 md:px-6 bg-white/[0.02] border border-white/[0.05] rounded-[0.75rem] hover:bg-white/[0.04] transition-colors w-full h-auto">
                <span className="text-[var(--color-accent)] font-mono text-[0.8rem] md:text-[0.85rem] tracking-wider opacity-60">
                  {(i+1).toString().padStart(2, '0')}
                </span>
                <span className="text-[0.95rem] md:text-[1rem] tracking-wide text-[var(--color-text-primary)] font-light group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. TECHNICAL ARSENAL (Clean Major Grid) */}
        {/* Expertise -> Technical Arsenal: 64-80px mobile, 80-100px desktop (mt-16 md:mt-20 lg:mt-24 xl:mt-28) */}
        <div className="mt-16 md:mt-20 lg:mt-24 xl:mt-28 w-full h-auto">
          {/* Tech Arsenal heading -> cards: 20-24px (mb-5 md:mb-6) */}
          <h2 className="text-[15px] md:text-[16px] lg:text-[18px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-5 md:mb-6 leading-[1.3] w-full m-0">
            04. Technical Arsenal
          </h2>
          
          {/* 1 column mobile, 3 desktop */}
          {/* Gap row/col: 32-40px vert (gap-y-8 md:gap-y-10), 40-48px horiz (gap-x-10 md:gap-x-12) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-10 gap-x-10 md:gap-x-12 w-full h-auto">
            {gear.map((item) => (
              <div 
                key={item.name} 
                className="flex flex-col p-6 md:p-7 lg:p-8 xl:p-9 bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] shadow-lg w-full h-auto"
              >
                {/* CATEGORY -> 12-16px -> PRODUCT (mb-3 md:mb-4) */}
                <span className="text-[0.7rem] md:text-[0.75rem] font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)] block mb-3 md:mb-4 mt-0">
                  {item.category}
                </span>
                <div className="h-auto">
                  {/* PRODUCT -> 10-14px -> DESCRIPTION (mb-3 md:mb-3.5) */}
                  <span className="text-[1.05rem] md:text-[1.1rem] lg:text-[1.15rem] tracking-wide text-[var(--color-text-primary)] font-medium block mb-3 mt-0">
                    {item.name}
                  </span>
                  <p className="text-[0.9rem] md:text-[0.95rem] text-[var(--color-text-secondary)] leading-[1.8] m-0 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. AVAILABILITY (Visually Distinct Dedicated Block) */}
        {/* Technical -> Availability: 80-120px mobile, 80-120px desktop (mt-20 md:mt-24 lg:mt-28 xl:mt-32) */}
        <div className="mt-20 md:mt-24 lg:mt-28 xl:mt-32 w-full text-center flex flex-col items-center h-auto">
          {/* Padding: 24-32px mobile, 40-56px desktop (p-6 py-10 md:py-12 lg:py-14) */}
          <div className="w-full bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] rounded-[1.5rem] md:rounded-[2rem] px-6 md:px-12 py-10 md:py-12 lg:py-14 shadow-2xl flex flex-col items-center h-auto">
            
            {/* AVAILABILITY -> 12-16px -> Available for projects (mb-3 md:mb-4) */}
            <span className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold tracking-[0.18em] text-[var(--color-text-muted)] uppercase block mb-3 md:mb-4 mt-0">
              Availability
            </span>
            
            {/* Available for projects -> 8-12px -> BASED IN INDIA... (mb-2 md:mb-3) */}
            <h3 className="font-heading font-light text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-2 md:mb-3 text-[var(--color-text-primary)] mt-0">
              {siteConfig.availability}.
            </h3>
            
            {/* BASED IN INDIA... -> 16-20px -> BOOK A PROJECT (mb-4 md:mb-5) */}
            <p className="text-[12px] md:text-sm lg:text-base text-[var(--color-text-muted)] mb-5 md:mb-6 tracking-[0.1em] uppercase font-medium mt-0">
              Based in India <span className="mx-1 md:mx-2">·</span> <span className="text-[var(--color-text-secondary)]">Available Worldwide</span>
            </p>
            
            <Link href="/contact" className="group inline-flex items-center gap-3 md:gap-4 text-sm md:text-base lg:text-lg font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors m-0">
              <span className="relative pb-1 md:pb-2">
                Book a Project
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20 transition-colors duration-300 group-hover:bg-[var(--color-accent)]" />
              </span>
              <span className="text-[var(--color-accent)] transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
