import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative bg-[var(--color-bg-primary)] overflow-hidden h-auto">
      
      {/* Background decoration */}
      <div 
        className="about-background-decoration absolute top-0 right-0 w-full md:w-3/4 h-full bg-gradient-to-bl from-[#E63946]/[0.03] via-transparent to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Dedicated normal-flow separation spacer from Hero */}
      <div className="about-hero-separation" aria-hidden="true" />

      {/* Content container */}
      <div className="about-content-container w-full max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 xl:px-16 relative z-10 h-auto pb-12 md:pb-16 lg:pb-20">
        
        {/* 1. HERO / IDENTITY (Responsive Stack -> Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 xl:gap-20 items-center w-full h-auto">
          
          {/* Image */}
          <div className="lg:col-span-5 relative w-full mb-8 lg:mb-0 h-auto">
            {/* Aspect ratio optimized for portrait cinematic framing */}
            <div className="aspect-[4/5] bg-[var(--color-bg-secondary)] relative overflow-hidden rounded-[1rem] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.4)] w-full h-auto">
              <Image 
                src="/images/about/nivas-fpv-enhanced.jpg" 
                alt="Nivas - FPV Pilot"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center w-full h-auto">
            <div className="w-full h-auto">
              {/* Eyebrow label */}
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-4 md:mb-5 mt-0">
                About
              </span>
              
              {/* Heading */}
              <h2 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl xl:text-[6rem] tracking-tighter mb-5 md:mb-6 text-[var(--color-text-primary)] leading-[1.1] mt-0">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h2>
              
              <div className="flex flex-col gap-3 md:gap-4 h-auto">
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

        {/* 2. BACKGROUND */}
        <div className="grid grid-cols-1 mt-12 md:mt-16 lg:mt-20 w-full h-auto">
          <div className="bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] p-6 md:p-7 lg:p-8 xl:p-10 w-full shadow-lg h-auto flex flex-col">
            <h3 className="text-[15px] md:text-[16px] lg:text-[18px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-3 mb-5 md:mb-6 leading-[1.3] w-full m-0">
              01. Background
            </h3>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-5 md:mb-6 mt-0 max-w-[900px]">
              I create dynamic visual experiences through FPV drone
              cinematography and professional video editing. Based in India,
              I work with film productions, brands, agencies, and businesses
              to deliver cinematic aerial footage that tells stories through
              movement.
            </p>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light m-0 max-w-[900px]">
              Every project begins with understanding the story. I combine
              technical FPV piloting skill with a cinematographer&apos;s eye
              and an editor&apos;s sense of pacing.
            </p>
          </div>
        </div>

        {/* 3. EXPERTISE */}
        <div className="mt-12 md:mt-16 lg:mt-20 w-full h-auto">
          <h3 className="text-[15px] md:text-[16px] lg:text-[18px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-3 mb-6 md:mb-8 leading-[1.3] w-full m-0">
            02. Core Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-5 lg:gap-y-6 gap-x-8 md:gap-x-10 w-full h-auto">
            {[
              "FPV Drone Piloting",
              "Aerial Cinematography",
              "Video Editing",
              "Color Grading",
              "Sound Design",
              "Speed Ramping"
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

        {/* CTA */}
        <div className="mt-14 md:mt-18 lg:mt-20 pt-8 md:pt-10 border-t border-white/[0.08] w-full text-center flex flex-col items-center h-auto">
          <Link href="/about" className="group inline-flex items-center gap-3 md:gap-4 text-sm md:text-base lg:text-lg font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors m-0">
            <span className="relative pb-1 md:pb-2">
              Read Full Bio
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20 transition-colors duration-300 group-hover:bg-[var(--color-accent)]" />
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
