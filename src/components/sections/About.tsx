import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-24 lg:pb-32 relative bg-[var(--color-bg-primary)] overflow-hidden h-auto">
      
      {/* Subtle background glow to separate sections visually */}
      <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-gradient-to-bl from-[#E63946]/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* 
        Content container: 
        Mobile: 20-24px padding (px-5 md:px-6) 
        Desktop: max-w-[1360px] with 40-64px padding (lg:px-12 xl:px-16)
      */}
      <div className="w-full max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 xl:px-16 relative z-10 h-auto">
        
        {/* 1. HERO / IDENTITY (Responsive Stack -> Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 xl:gap-20 items-center w-full h-auto">
          
          {/* Image */}
          {/* Mobile Image: 28-32px spacing (mb-7 md:mb-8 lg:mb-0) */}
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
              {/* IDENTITY -> 20px -> Nivas. */}
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-5 mt-0">
                About
              </span>
              
              {/* Nivas. -> 20-24px -> FPV DRONE... */}
              <h2 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl xl:text-[6rem] tracking-tighter mb-5 md:mb-6 text-[var(--color-text-primary)] leading-[1.1] mt-0">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h2>
              
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

        {/* 2. BACKGROUND (Single Distinct Editorial Block for Homepage) */}
        {/* Hero to first major section: 60-80px mobile (mt-16 md:mt-20), 80-120px desktop (lg:mt-28 xl:mt-32) */}
        <div className="grid grid-cols-1 mt-16 md:mt-20 lg:mt-28 xl:mt-32 w-full h-auto">
          {/* Card padding: 24-28px mobile (p-6 md:p-7), 32-40px desktop (lg:p-8 xl:p-10) */}
          <div className="bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] p-6 md:p-7 lg:p-8 xl:p-10 w-full shadow-lg h-auto flex flex-col">
            {/* Heading -> paragraph: 20-24px (mb-5 md:mb-6) */}
            <h3 className="text-[15px] md:text-[16px] lg:text-[18px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-5 md:mb-6 leading-[1.3] w-full m-0">
              01. Background
            </h3>
            {/* Paragraph -> paragraph: 24-32px (mb-6 md:mb-8) */}
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.85] text-[var(--color-text-secondary)] font-light mb-6 md:mb-8 mt-0 max-w-[900px]">
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

        {/* 3. EXPERTISE (Dedicated Full-Width Section) */}
        {/* Background/Approach -> Expertise: 64-80px mobile, 80-100px desktop (mt-16 md:mt-20 lg:mt-24 xl:mt-28) */}
        <div className="mt-16 md:mt-20 lg:mt-24 xl:mt-28 w-full h-auto">
          {/* Expertise heading -> grid: 24-32px (mb-6 md:mb-8) */}
          <h3 className="text-[15px] md:text-[16px] lg:text-[18px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-4 mb-6 md:mb-8 leading-[1.3] w-full m-0">
            02. Core Expertise
          </h3>
          
          {/* Expertise grid: 1 column mobile, 2 columns desktop */}
          {/* Row gap: 20-28px (gap-y-5 md:gap-y-6), Col gap 40-48px (gap-x-10 md:gap-x-12) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-6 lg:gap-y-7 gap-x-10 md:gap-x-12 w-full h-auto">
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
        {/* Expertise -> CTA: 80-120px desktop (mt-20 md:mt-24 lg:mt-28 xl:mt-32) */}
        <div className="mt-20 md:mt-24 lg:mt-28 xl:mt-32 pt-10 md:pt-12 lg:pt-16 border-t border-white/[0.08] w-full text-center flex flex-col items-center h-auto">
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
