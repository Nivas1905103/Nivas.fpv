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
    <div className="min-h-screen pt-56 md:pt-64 pb-32 bg-[var(--color-bg-primary)] relative overflow-hidden">
      
      {/* Subtle Dynamic Background */}
      <LiquidBackground opacity={0.08} color1="#E63946" color2="#330000" />

      <div className="container-site relative z-10">
        
        {/* Strict 12-column grid for precise 45/55 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start w-full">
          
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
            <div className="max-w-[540px]">
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-[64px]">
                Identity
              </span>
              
              <h1 className="font-heading font-bold text-6xl md:text-8xl tracking-tighter mb-[64px] text-[var(--color-text-primary)] leading-[1.1]">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h1>
              
              <div>
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-[var(--color-text-primary)] mb-[24px]">
                  FPV Drone Cinematographer
                </p>
                <div className="flex items-center gap-6">
                  <div className="h-[2px] w-12 bg-[var(--color-accent)]" />
                  <p className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)]">
                    Editor / Visual Storyteller
                  </p>
                </div>
              </div>
            </div>

            {/* CHAPTER 2: WHO I AM */}
            <div className="mt-[140px] md:mt-[180px] max-w-[540px]">
              <h2 className="text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-[24px] mb-[64px] md:mb-[80px] leading-[1.3] ml-0 text-left w-full">
                01. Background
              </h2>
              
              <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-[32px] md:mb-[40px]">
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

            {/* CHAPTER 3: WHAT I DO */}
            <div className="mt-[120px] md:mt-[160px] max-w-[540px]">
              <h2 className="text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-[24px] mb-[64px] md:mb-[80px] leading-[1.3] ml-0 text-left w-full">
                02. Approach
              </h2>
              
              <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-[32px] md:mb-[40px]">
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

            {/* CHAPTER 4: EXPERTISE */}
            <div className="mt-[120px] md:mt-[160px] max-w-[540px]">
              <h2 className="text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-[24px] mb-[80px] md:mb-[100px] leading-[1.3] ml-0 text-left w-full">
                03. Expertise
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[56px] md:gap-y-[64px] gap-x-[32px]">
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
                  <div key={skill} className="flex items-baseline gap-4 group cursor-default">
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
            <div className="mt-[120px] md:mt-[160px] max-w-[540px]">
              <h2 className="text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-[24px] mb-[80px] md:mb-[100px] leading-[1.3] ml-0 text-left w-full">
                04. Technical Arsenal
              </h2>
              
              <div className="flex flex-col">
                {gear.map((item, index) => (
                  <div 
                    key={item.name} 
                    className={`flex flex-col sm:flex-row sm:gap-8 group ${index !== gear.length - 1 ? 'mb-[56px] md:mb-[64px]' : 'mb-0'}`}
                  >
                    <span className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)] sm:w-[140px] flex-shrink-0 pt-[6px] mb-[12px] sm:mb-0">
                      {item.category}
                    </span>
                    <div>
                      <span className="text-[1rem] tracking-wide text-[var(--color-text-primary)] font-light block mb-[12px] group-hover:text-white transition-colors duration-300">
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

            {/* CHAPTER 6: CTA / AVAILABILITY */}
            <div className="mt-[120px] md:mt-[180px] pt-[40px] border-t border-white/[0.08] max-w-[540px]">
              <span className="text-[16px] font-semibold tracking-[0.18em] text-[var(--color-text-muted)] uppercase block mb-[32px]">
                Availability
              </span>
              
              <h3 className="font-heading font-light text-2xl md:text-3xl tracking-tight mb-[24px] text-[var(--color-text-primary)]">
                {siteConfig.availability}.
              </h3>
              
              <p className="text-xs md:text-sm text-[var(--color-text-muted)] mb-[48px] tracking-[0.1em] uppercase font-medium">
                Based in India — <span className="text-[var(--color-text-secondary)]">Available Worldwide</span>
              </p>
              
              <Link href="/contact" className="group inline-flex items-center gap-4 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors">
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
    </div>
  );
}
