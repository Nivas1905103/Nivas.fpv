import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 lg:py-32 relative bg-[var(--color-bg-primary)] overflow-hidden">
      
      {/* Subtle background glow to separate sections visually */}
      <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-gradient-to-bl from-[#E63946]/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-5 md:px-8 lg:px-10 relative z-10">
        
        {/* 1. INTRO / IDENTITY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 items-start lg:items-center w-full">
          
          <div className="lg:col-span-5 relative w-full mb-6 md:mb-8 lg:mb-0">
            <div className="aspect-[4/5] bg-[var(--color-bg-secondary)] relative overflow-hidden rounded-[1rem] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.4)] w-full">
              <Image 
                src="/images/about/portrait-real.jpg" 
                alt="Nivas - FPV Pilot"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center w-full">
            <div className="w-full">
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-3 md:mb-4">
                About
              </span>
              
              <h2 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-4 md:mb-5 text-[var(--color-text-primary)] leading-[1.1]">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h2>
              
              <div className="flex flex-col gap-2 md:gap-2.5">
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-[var(--color-text-primary)]">
                  FPV Drone Cinematographer
                </p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="h-[2px] w-6 md:w-8 bg-[var(--color-accent)]" />
                  <p className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-[var(--color-text-muted)]">
                    Editor / Visual Storyteller
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. BACKGROUND (Single Distinct Editorial Block for Homepage) */}
        <div className="grid grid-cols-1 mt-10 md:mt-16 lg:mt-24 w-full">
          <div className="bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] p-6 md:p-8 lg:p-12 w-full shadow-lg">
            <h3 className="text-[15px] md:text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-3 md:pb-4 mb-4 md:mb-5 leading-[1.3] w-full">
              01. Background
            </h3>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-5 md:mb-6 max-w-[900px]">
              I create dynamic visual experiences through FPV drone
              cinematography and professional video editing. Based in India,
              I work with film productions, brands, agencies, and businesses
              to deliver cinematic aerial footage that tells stories through
              movement.
            </p>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-0 max-w-[900px]">
              Every project begins with understanding the story. I combine
              technical FPV piloting skill with a cinematographer&apos;s eye
              and an editor&apos;s sense of pacing.
            </p>
          </div>
        </div>

        {/* 3. EXPERTISE (Dedicated Full-Width Section) */}
        <div className="mt-12 md:mt-16 lg:mt-24 w-full">
          <h3 className="text-[15px] md:text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-3 md:pb-4 mb-5 md:mb-8 leading-[1.3] w-full">
            02. Core Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4 lg:gap-y-5 gap-x-5 md:gap-x-6 lg:gap-x-8 w-full">
            {[
              "FPV Drone Piloting",
              "Aerial Cinematography",
              "Video Editing",
              "Color Grading",
              "Sound Design",
              "Speed Ramping"
            ].map((skill, i) => (
              <div key={skill} className="flex items-center gap-4 group cursor-default py-3 md:py-3.5 lg:py-4 px-4 md:px-5 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.04] transition-colors w-full">
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

        {/* CTA */}
        <div className="mt-14 md:mt-20 lg:mt-32 pt-8 md:pt-12 lg:pt-16 border-t border-white/[0.08] w-full text-center flex flex-col items-center">
          <Link href="/about" className="group inline-flex items-center gap-3 md:gap-4 text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors">
            <span className="relative pb-1 md:pb-2">
              Read Full Bio
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transition-colors duration-300 group-hover:bg-[var(--color-accent)]" />
            </span>
            <span className="text-[var(--color-accent)] transform group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
