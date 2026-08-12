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
    <div className="min-h-screen pt-48 md:pt-56 pb-32 bg-[var(--color-bg-primary)] relative overflow-hidden">
      
      {/* Subtle Dynamic Background */}
      <LiquidBackground opacity={0.08} color1="#E63946" color2="#330000" />

      <div className="container-site relative z-10">
        
        {/* 1. INTRO / IDENTITY (Image Left, Identity Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Image */}
          <div className="lg:col-span-5 relative">
            {/* Aspect ratio optimized for portrait cinematic framing */}
            <div className="aspect-[4/5] bg-[var(--color-bg-secondary)] relative overflow-hidden rounded-[1rem] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <Image 
                src="/images/about/portrait-real.jpg" 
                alt="Nivas - Portrait"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="w-full">
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-[16px]">
                Identity
              </span>
              
              <h1 className="font-heading font-bold text-6xl md:text-8xl tracking-tighter mb-[20px] text-[var(--color-text-primary)] leading-[1.1]">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h1>
              
              <div className="flex flex-col gap-[10px]">
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-[var(--color-text-primary)]">
                  FPV Drone Cinematographer
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-8 bg-[var(--color-accent)]" />
                  <p className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)]">
                    Editor / Visual Storyteller
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* 2. BACKGROUND & APPROACH (Two Distinct Editorial Blocks) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-[64px] md:mt-[96px] w-full">
          
          {/* Left Block: Background */}
          <div className="bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] p-8 md:p-12 w-full shadow-lg">
            <h2 className="text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-[16px] mb-[24px] leading-[1.3] w-full">
              01. Background
            </h2>
            <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-[24px]">
              Based in India, I create dynamic visual experiences through FPV drone
              cinematography and professional video editing. I work closely with film 
              productions, brands, agencies, and businesses to deliver cinematic aerial 
              footage that tells stories through movement.
            </p>
            <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-0">
              My journey began with a fascination for aviation and visual arts. Over the years, 
              I merged these disciplines, using FPV drones not just as flying cameras, but as 
              instruments for emotional storytelling.
            </p>
          </div>

          {/* Right Block: Approach */}
          <div className="bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] p-8 md:p-12 w-full shadow-lg">
            <h2 className="text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-[16px] mb-[24px] leading-[1.3] w-full">
              02. Approach
            </h2>
            <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-[24px]">
              Every project begins with understanding the core narrative. I combine
              technical piloting precision with a cinematographer&apos;s eye for framing
              and an editor&apos;s sense of pacing. 
            </p>
            <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-0">
              From high-speed automotive tracking to intimate indoor walkthroughs, 
              the objective is always the same: capture footage that doesn&apos;t just 
              look impressive, but actively moves the story forward.
            </p>
          </div>
          
        </div>

        {/* 3. EXPERTISE (Dedicated Full-Width Section) */}
        <div className="mt-[80px] md:mt-[120px] w-full">
          <h2 className="text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-[16px] mb-[32px] leading-[1.3] w-full">
            03. Expertise
          </h2>
          
          {/* Compact professional 2-column grid without stretching */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] gap-x-[32px] w-full">
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
              <div key={skill} className="flex items-center gap-4 group cursor-default p-[16px] bg-white/[0.02] border border-white/[0.05] rounded-[1rem] hover:bg-white/[0.04] transition-colors">
                <span className="text-[var(--color-accent)] font-mono text-[0.75rem] tracking-wider opacity-60">
                  {(i+1).toString().padStart(2, '0')}
                </span>
                <span className="text-[0.95rem] tracking-wide text-[var(--color-text-primary)] font-light group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. TECHNICAL ARSENAL (Clean Major Grid) */}
        <div className="mt-[80px] md:mt-[120px] w-full">
          <h2 className="text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-[16px] mb-[40px] leading-[1.3] w-full">
            04. Technical Arsenal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gear.map((item) => (
              <div 
                key={item.name} 
                className="flex flex-col gap-[12px] p-8 bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] shadow-lg"
              >
                <span className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)] block">
                  {item.category}
                </span>
                <div>
                  <span className="text-[1.05rem] tracking-wide text-[var(--color-text-primary)] font-light block mb-[12px]">
                    {item.name}
                  </span>
                  <p className="text-[0.9rem] text-[var(--color-text-secondary)] leading-[1.75] mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. AVAILABILITY (Visually Distinct Dedicated Block) */}
        <div className="mt-[100px] md:mt-[140px] w-full text-center flex flex-col items-center">
          <div className="w-full max-w-[800px] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] rounded-[2rem] p-12 md:p-20 shadow-2xl">
            <span className="text-[16px] font-semibold tracking-[0.18em] text-[var(--color-text-muted)] uppercase block mb-[32px]">
              Availability
            </span>
            
            <h3 className="font-heading font-light text-3xl md:text-5xl tracking-tight mb-[32px] text-[var(--color-text-primary)]">
              {siteConfig.availability}.
            </h3>
            
            <p className="text-sm md:text-base text-[var(--color-text-muted)] mb-[48px] tracking-[0.1em] uppercase font-medium">
              Based in India — <span className="text-[var(--color-text-secondary)]">Available Worldwide</span>
            </p>
            
            <Link href="/contact" className="group inline-flex items-center gap-4 text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors">
              <span className="relative pb-2">
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
