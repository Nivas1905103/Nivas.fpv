import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 relative bg-[var(--color-bg-primary)] overflow-hidden h-auto">
      
      {/* Subtle background glow to separate sections visually */}
      <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-gradient-to-bl from-[#E63946]/[0.03] via-transparent to-transparent pointer-events-none" />

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
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center w-full h-auto">
            <div className="w-full h-auto">
              {/* Identity -> Name: 12-16px */}
              <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-text-muted)] uppercase block mb-3 md:mb-4 mt-0">
                About
              </span>
              
              {/* Name -> Primary role: 16-20px */}
              <h2 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-4 md:mb-5 text-[var(--color-text-primary)] leading-[1.1] mt-0">
                Nivas<span className="text-[var(--color-accent)]">.</span>
              </h2>
              
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

        {/* 2. BACKGROUND (Single Distinct Editorial Block for Homepage) */}
        {/* Secondary role to first major section: 56-80px desktop. (mt-14 md:mt-16 lg:mt-20) */}
        <div className="grid grid-cols-1 mt-14 md:mt-16 lg:mt-20 w-full h-auto">
          {/* Card padding: 22-28px mobile (p-6 md:p-7), 28-32px desktop (lg:p-8) */}
          <div className="bg-[var(--color-bg-secondary)] border border-white/[0.05] rounded-[1rem] p-6 md:p-7 lg:p-8 w-full shadow-lg h-auto">
            {/* Heading -> paragraph: 16-20px (mb-4 md:mb-5) */}
            <h3 className="text-[15px] md:text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-3 md:pb-4 mb-4 md:mb-5 leading-[1.3] w-full m-0">
              01. Background
            </h3>
            {/* Paragraph -> paragraph: 18-24px (mb-5 md:mb-6) */}
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.75] md:leading-[1.85] text-[var(--color-text-secondary)] font-light mb-5 md:mb-6 mt-0">
              I create dynamic visual experiences through FPV drone
              cinematography and professional video editing. Based in India,
              I work with film productions, brands, agencies, and businesses
              to deliver cinematic aerial footage that tells stories through
              movement.
            </p>
            <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] leading-[1.75] md:leading-[1.85] text-[var(--color-text-secondary)] font-light m-0">
              Every project begins with understanding the story. I combine
              technical FPV piloting skill with a cinematographer&apos;s eye
              and an editor&apos;s sense of pacing.
            </p>
          </div>
        </div>

        {/* 3. EXPERTISE (Dedicated Full-Width Section) */}
        {/* Background/Approach -> Expertise: 48-56px mobile, 48-64px tablet, 56-72px desktop (mt-12 md:mt-14 lg:mt-16) */}
        <div className="mt-12 md:mt-14 lg:mt-16 w-full h-auto">
          {/* Expertise heading -> grid: 18-24px (mb-5 md:mb-6) */}
          <h3 className="text-[15px] md:text-[16px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] border-b border-white/[0.08] pb-3 md:pb-4 mb-5 md:mb-6 leading-[1.3] w-full m-0">
            02. Core Expertise
          </h3>
          
          {/* Expertise grid: 1 column mobile, 2 columns desktop */}
          {/* Row gap 12-20px (gap-y-3 md:gap-y-4 lg:gap-y-5), Col gap 32-40px (gap-x-8 md:gap-x-10) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4 lg:gap-y-5 gap-x-8 md:gap-x-10 w-full h-auto">
            {[
              "FPV Drone Piloting",
              "Aerial Cinematography",
              "Video Editing",
              "Color Grading",
              "Sound Design",
              "Speed Ramping"
            ].map((skill, i) => (
              <div key={skill} className="flex items-center gap-4 group cursor-default py-3 md:py-4 px-4 md:px-5 bg-white/[0.02] border border-white/[0.05] rounded-[0.75rem] hover:bg-white/[0.04] transition-colors w-full h-auto">
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
        {/* Expertise -> CTA: 64-80px desktop (mt-14 md:mt-16 lg:mt-20) */}
        <div className="mt-14 md:mt-16 lg:mt-20 pt-8 md:pt-10 lg:pt-12 border-t border-white/[0.08] w-full text-center flex flex-col items-center h-auto">
          <Link href="/about" className="group inline-flex items-center gap-3 md:gap-4 text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors m-0">
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
