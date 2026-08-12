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
    <div className="min-h-screen pt-32 pb-20 bg-[var(--color-bg-primary)] relative overflow-hidden">
      
      {/* Subtle Dynamic Background */}
      <LiquidBackground opacity={0.08} color1="#E63946" color2="#330000" />

      <div className="container-site relative z-10">
        
        {/* Strict 12-column grid for precise 45/55 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          
          {/* Image Column: 5/12 (~41%) */}
          <div className="lg:col-span-5 relative">
            {/* Aspect ratio optimized for portrait cinematic framing */}
            <div className="aspect-[4/5] bg-[var(--color-bg-secondary)] relative overflow-hidden rounded-[1rem] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.4)] sticky top-32">
              <Image 
                src="/images/about/portrait-real.jpg" 
                alt="Nivas - Portrait"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
                priority
              />
              {/* Very subtle gradient to ground the image, no heavy glows */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Content Column: 6/12 (~50%), starting at col 7 to leave a 1-col gap */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-start">
            
            {/* CHAPTER 1: IDENTITY */}
            <div className="mb-24">
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-6">
                Identity
              </span>
              
              <h1 className="font-heading font-bold text-6xl md:text-8xl tracking-tighter mb-6 text-[var(--color-text-primary)]">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h1>
              
              <div className="mb-10">
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-[var(--color-text-primary)] mb-1">
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

            {/* CHAPTER 2: WHO I AM */}
            <div className="mb-24 max-w-[540px]">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-8">
                01. Background
              </h2>
              <div className="space-y-6">
                <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-[var(--color-text-secondary)] font-light">
                  Based in India, I create dynamic visual experiences through FPV drone
                  cinematography and professional video editing. I work closely with film 
                  productions, brands, agencies, and businesses to deliver cinematic aerial 
                  footage that tells stories through movement.
                </p>
                <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-[var(--color-text-secondary)] font-light">
                  My journey began with a fascination for aviation and visual arts. Over the years, 
                  I merged these disciplines, using FPV drones not just as flying cameras, but as 
                  instruments for emotional storytelling.
                </p>
              </div>
            </div>

            {/* CHAPTER 3: WHAT I DO */}
            <div className="mb-24 max-w-[540px]">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-8">
                02. Approach
              </h2>
              <div className="space-y-6">
                <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-[var(--color-text-secondary)] font-light">
                  Every project begins with understanding the core narrative. I combine
                  technical piloting precision with a cinematographer&apos;s eye for framing
                  and an editor&apos;s sense of pacing. 
                </p>
                <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-[var(--color-text-secondary)] font-light">
                  From high-speed automotive tracking to intimate indoor walkthroughs, 
                  the objective is always the same: capture footage that doesn&apos;t just 
                  look impressive, but actively moves the story forward.
                </p>
              </div>
            </div>

            {/* CHAPTER 4: EXPERTISE */}
            <div className="mb-24">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-8">
                03. Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 max-w-[540px]">
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
                  <div key={skill} className="flex items-baseline gap-3 group cursor-default">
                    <span className="text-[var(--color-accent)] font-mono text-[0.65rem] tracking-wider opacity-60">
                      {(i+1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[0.95rem] tracking-wide text-[var(--color-text-primary)] font-light group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CHAPTER 5: EQUIPMENT ARSENAL */}
            <div className="mb-24">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-8">
                04. Technical Arsenal
              </h2>
              <div className="space-y-6 max-w-[540px]">
                {gear.map((item) => (
                  <div key={item.name} className="flex flex-col sm:flex-row gap-2 sm:gap-6 group">
                    <span className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)] w-32 flex-shrink-0 pt-[4px]">
                      {item.category}
                    </span>
                    <div>
                      <span className="text-[0.95rem] tracking-wide text-[var(--color-text-primary)] font-light block mb-1 group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </span>
                      <p className="text-[0.85rem] text-[var(--color-text-secondary)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CHAPTER 6: CTA / AVAILABILITY */}
            <div className="pt-12 border-t border-white/[0.08] max-w-[540px]">
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-8">
                Availability
              </span>
              
              <h3 className="font-heading font-light text-2xl md:text-3xl tracking-tight mb-3 text-[var(--color-text-primary)]">
                {siteConfig.availability}.
              </h3>
              
              <p className="text-xs md:text-sm text-[var(--color-text-muted)] mb-12 tracking-[0.1em] uppercase font-medium">
                Based in India — <span className="text-[var(--color-text-secondary)]">Available Worldwide</span>
              </p>
              
              <Link href="/contact" className="group inline-flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors">
                <span className="relative pb-1">
                  Book a Project
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transition-colors duration-300 group-hover:bg-[var(--color-accent)]" />
                </span>
                <span className="text-[var(--color-accent)] transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
