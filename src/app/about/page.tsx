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
    <div className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 bg-[var(--color-bg-primary)] relative overflow-hidden h-auto">
      
      {/* Subtle Dynamic Background */}
      <LiquidBackground opacity={0.08} color1="#E63946" color2="#330000" />

      {/* 
        Content container: 
        Mobile requires 20-24px padding (px-5 md:px-6) 
        Desktop requires wide premium container max-w-[1240px] with 40-60px padding (lg:px-12)
      */}
      <div className="w-full max-w-[1240px] mx-auto px-5 md:px-8 lg:px-12 relative z-10 h-auto">
        
        {/* 1. INTRO / IDENTITY (Responsive Stack -> Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 xl:gap-16 items-center w-full h-auto">
          
          {/* Image */}
          {/* Mobile Image: 28-32px spacing (mb-7 md:mb-8 lg:mb-0) */}
          <div className="lg:col-span-5 relative w-full mb-7 md:mb-8 lg:mb-0 h-auto">
            {/* Aspect ratio optimized for portrait cinematic framing */}
            <div className="aspect-[4/5] bg-[var(--color-bg-secondary)] relative overflow-hidden rounded-[1rem] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.4)] w-full h-auto">
              <Image 
                src="/images/about/portrait-real.jpg" 
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
              {/* Identity -> Name: 12-16px */}
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-3 md:mb-4">
                Identity
              </span>
              
              {/* Name -> Primary role: 16-20px */}
              <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-4 md:mb-5 text-[var(--color-text-primary)] leading-[1.1]">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h1>
              
              <div className="flex flex-col gap-2 md:gap-3 h-auto">
                {/* Primary role -> Secondary role: 8-12px (handled by flex gap) */}
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-[var(--color-text-primary)] m-0 p-0 leading-tight">
                  FPV Drone Cinematographer
                </p>
                <div className="flex items-center gap-3 md:gap-4 h-auto">
                  <div className="h-[2px] w-6 md:w-8 bg-[var(--color-accent)]" />
                  <p className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)] m-0 p-0 leading-tight">
                    Editor / Visual Storyteller
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* 2. BACKGROUND & APPROACH (Stacked on Mobile -> Side-by-Side on Desktop) */}
        {/* Secondary role to first major section: 56-80px desktop. (mt-14 md:mt-16 lg:mt-20) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-14 md:mt-16 lg:mt-20 w-full h-auto">
          
          {/* Left Block: Background */}
          {/* Card padding: 22-28px mobile (p-6 md:p-7), 28-32px desktop (lg:p-8) */}
          <div className="bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] p-6 md:p-7 lg:p-8 w-full shadow-lg h-auto">
            {/* Heading -> paragraph: 16-20px (mb-4 md:mb-5) */}
            <h2 className="text-[15px] md:text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-3 md:pb-4 mb-4 md:mb-5 leading-[1.3] w-full m-0">
              01. Background
            </h2>
            {/* Paragraph -> paragraph: 18-24px (mb-5 md:mb-6) */}
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.75] md:leading-[1.85] text-[var(--color-text-secondary)] font-light mb-5 md:mb-6 mt-0">
              Based in India, I create dynamic visual experiences through FPV drone
              cinematography and professional video editing. I work closely with film 
              productions, brands, agencies, and businesses to deliver cinematic aerial 
              footage that tells stories through movement.
            </p>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.75] md:leading-[1.85] text-[var(--color-text-secondary)] font-light m-0">
              My journey began with a fascination for aviation and visual arts. Over the years, 
              I merged these disciplines, using FPV drones not just as flying cameras, but as 
              instruments for emotional storytelling.
            </p>
          </div>

          {/* Right Block: Approach */}
          <div className="bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] p-6 md:p-7 lg:p-8 w-full shadow-lg h-auto">
            <h2 className="text-[15px] md:text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-3 md:pb-4 mb-4 md:mb-5 leading-[1.3] w-full m-0">
              02. Approach
            </h2>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.75] md:leading-[1.85] text-[var(--color-text-secondary)] font-light mb-5 md:mb-6 mt-0">
              Every project begins with understanding the core narrative. I combine
              technical piloting precision with a cinematographer&apos;s eye for framing
              and an editor&apos;s sense of pacing. 
            </p>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.75] md:leading-[1.85] text-[var(--color-text-secondary)] font-light m-0">
              From high-speed automotive tracking to intimate indoor walkthroughs, 
              the objective is always the same: capture footage that doesn&apos;t just 
              look impressive, but actively moves the story forward.
            </p>
          </div>
          
        </div>

        {/* 3. EXPERTISE (Dedicated Full-Width Section) */}
        {/* Background/Approach -> Expertise: 48-56px mobile, 48-64px tablet, 56-72px desktop (mt-12 md:mt-14 lg:mt-16) */}
        <div className="mt-12 md:mt-14 lg:mt-16 w-full h-auto">
          {/* Expertise heading -> grid: 18-24px (mb-5 md:mb-6) */}
          <h2 className="text-[15px] md:text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-3 md:pb-4 mb-5 md:mb-6 leading-[1.3] w-full m-0">
            03. Expertise
          </h2>
          
          {/* Expertise grid: 1 column mobile, 2 columns desktop */}
          {/* Row gap 12-20px (gap-y-3 md:gap-y-4 lg:gap-y-5), Col gap 32-40px (gap-x-8 md:gap-x-10) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4 lg:gap-y-5 gap-x-8 md:gap-x-10 w-full h-auto">
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
              <div key={skill} className="flex items-center gap-4 group cursor-default py-3 md:py-3.5 lg:py-4 px-4 md:px-5 bg-white/[0.02] border border-white/[0.05] rounded-[0.75rem] hover:bg-white/[0.04] transition-colors w-full h-auto">
                <span className="text-[var(--color-accent)] font-mono text-[0.7rem] md:text-[0.75rem] tracking-wider opacity-60">
                  {(i+1).toString().padStart(2, '0')}
                </span>
                <span className="text-[0.9rem] md:text-[0.95rem] tracking-wide text-[var(--color-text-primary)] font-light group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. TECHNICAL ARSENAL (Clean Major Grid) */}
        {/* Expertise -> Technical Arsenal: 48-64px mobile, 56-72px tablet, 64-80px desktop (mt-14 md:mt-16 lg:mt-20) */}
        <div className="mt-14 md:mt-16 lg:mt-20 w-full h-auto">
          {/* Tech Arsenal heading -> cards: 20-24px (mb-5 md:mb-6) */}
          <h2 className="text-[15px] md:text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-3 md:pb-4 mb-5 md:mb-6 leading-[1.3] w-full m-0">
            04. Technical Arsenal
          </h2>
          
          {/* 1 column mobile, 2/3 desktop */}
          {/* Gap row/col: 24-32px (gap-6 md:gap-7 lg:gap-8) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 w-full h-auto">
            {gear.map((item) => (
              <div 
                key={item.name} 
                className="flex flex-col p-6 md:p-7 bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] shadow-lg w-full h-auto"
              >
                {/* CATEGORY -> 8-12px -> PRODUCT (mb-2 md:mb-3) */}
                <span className="text-[0.65rem] md:text-[0.7rem] font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)] block mb-2 md:mb-3 mt-0">
                  {item.category}
                </span>
                <div className="h-auto">
                  {/* PRODUCT -> 8-10px -> DESCRIPTION (mb-2 md:mb-2.5) */}
                  <span className="text-[1rem] md:text-[1.05rem] tracking-wide text-[var(--color-text-primary)] font-light block mb-2 md:mb-2.5 mt-0">
                    {item.name}
                  </span>
                  <p className="text-[0.85rem] md:text-[0.9rem] text-[var(--color-text-secondary)] leading-[1.75] m-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. AVAILABILITY (Visually Distinct Dedicated Block) */}
        {/* Technical -> Availability: 48-64px mobile, 56-72px tablet, 64-80px desktop (mt-14 md:mt-16 lg:mt-20) */}
        <div className="mt-14 md:mt-16 lg:mt-20 w-full text-center flex flex-col items-center h-auto">
          {/* Padding: 24-32px mobile, 28-36px desktop (p-6 md:p-8 lg:p-9) */}
          <div className="w-full bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 lg:p-9 shadow-2xl flex flex-col items-center h-auto">
            
            {/* AVAILABILITY -> 12-16px -> Available for projects (mb-3 md:mb-4) */}
            <span className="text-[14px] md:text-[16px] font-semibold tracking-[0.18em] text-[var(--color-text-muted)] uppercase block mb-3 md:mb-4 mt-0">
              Availability
            </span>
            
            {/* Available for projects -> 8-12px -> BASED IN INDIA... (mb-2 md:mb-3) */}
            <h3 className="font-heading font-light text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-2 md:mb-3 text-[var(--color-text-primary)] mt-0">
              {siteConfig.availability}.
            </h3>
            
            {/* BASED IN INDIA... -> 16-20px -> BOOK A PROJECT (mb-4 md:mb-5) */}
            <p className="text-[11px] md:text-sm lg:text-base text-[var(--color-text-muted)] mb-4 md:mb-5 tracking-[0.1em] uppercase font-medium mt-0">
              Based in India <span className="mx-1 md:mx-2">·</span> <span className="text-[var(--color-text-secondary)]">Available Worldwide</span>
            </p>
            
            <Link href="/contact" className="group inline-flex items-center gap-3 md:gap-4 text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors m-0">
              <span className="relative pb-1 md:pb-2">
                Book a Project
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transition-colors duration-300 group-hover:bg-[var(--color-accent)]" />
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
