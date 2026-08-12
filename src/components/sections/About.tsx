import Image from "next/image";
import Link from "next/link";
import LiquidBackground from "@/components/ui/LiquidBackground";

export default function About() {
  return (
    <section 
      id="about" 
      className="py-32 bg-[var(--color-bg-primary)] relative"
    >
      <LiquidBackground opacity={0.08} color1="#E63946" color2="#330000" />
      <div className="container-site relative z-10">
        
        {/* Strict 12-column grid for precise 45/55 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start w-full">
          
          {/* Image Column: 5/12 (~41%) */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-[var(--color-bg-secondary)] relative overflow-hidden rounded-[1rem] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.4)] sticky top-32">
              <Image 
                src="/images/about/portrait-real.jpg" 
                alt="Nivas - FPV Pilot"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Content Column: 6/12 (~50%), starting at col 7 */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-start">
            
            {/* CHAPTER 1: IDENTITY */}
            <div className="max-w-[540px]">
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-[24px]">
                About
              </span>
              
              <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tighter mb-[24px] text-[var(--color-text-primary)] leading-[1.1]">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h2>
              
              <div>
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-[var(--color-text-primary)] mb-[8px]">
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

            {/* CHAPTER 2: BACKGROUND */}
            <div className="mt-[80px] md:mt-[120px] max-w-[540px]">
              <h3 className="text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-[16px] mb-[32px] md:mb-[40px] leading-[1.3] ml-0 text-left w-full">
                01. Background
              </h3>
              
              <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.75] text-[var(--color-text-secondary)] font-light mb-[18px] md:mb-[20px]">
                I create dynamic visual experiences through FPV drone
                cinematography and professional video editing. Based in India,
                I work with film productions, brands, agencies, and businesses
                to deliver cinematic aerial footage that tells stories through
                movement.
              </p>
              
              <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.75] text-[var(--color-text-secondary)] font-light mb-0">
                Every project begins with understanding the story. I combine
                technical FPV piloting skill with a cinematographer&apos;s eye
                and an editor&apos;s sense of pacing.
              </p>
            </div>

            {/* CHAPTER 3: EXPERTISE */}
            <div className="mt-[64px] md:mt-[80px] max-w-[540px]">
              <h3 className="text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-[16px] mb-[48px] md:mb-[64px] leading-[1.3] ml-0 text-left w-full">
                02. Core Expertise
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[28px] md:gap-y-[32px] gap-x-[20px]">
                {[
                  "FPV Drone Piloting",
                  "Aerial Cinematography",
                  "Video Editing",
                  "Color Grading",
                  "Sound Design",
                  "Speed Ramping"
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

            {/* CTA */}
            <div className="mt-[64px] md:mt-[96px] pt-[20px] border-t border-white/[0.08] max-w-[540px]">
              <Link href="/about" className="group inline-flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors">
                <span className="relative pb-1">
                  Read Full Bio
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
    </section>
  );
}
