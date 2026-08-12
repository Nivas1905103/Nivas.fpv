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
    <section className="min-h-screen pt-32 pb-20 bg-[var(--color-bg-primary)] relative overflow-hidden">
      
      {/* Dynamic Background for Glassmorphism to reflect */}
      <LiquidBackground opacity={0.15} color1="#880000" color2="#ff3333" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Portrait */}
          <div>
            <div className="aspect-[3/4] bg-[var(--color-bg-secondary)] relative overflow-hidden sticky top-24 rounded-2xl border border-white/[0.05] shadow-2xl">
              <Image 
                src="/images/about/portrait-real.jpg" 
                alt="Nivas - Portrait"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Editorial Minimalist Content */}
          <div className="relative py-12 lg:py-24 lg:pl-10">
            <span className="tech-label text-[var(--color-accent)] block mb-6 tracking-[0.3em]">
              ABOUT
            </span>
            
            <h1 className="heading-xl mb-6 text-6xl md:text-8xl drop-shadow-lg tracking-tight">
              Nivas<span className="text-[var(--color-accent)]">.</span>
            </h1>
            
            <p className="tracking-[0.2em] text-sm md:text-base text-[var(--color-text-primary)] mb-16 uppercase font-medium border-l-2 border-[var(--color-accent)] pl-6 py-1">
              FPV Drone Cinematographer <br className="hidden md:block" /> 
              <span className="text-[var(--color-text-muted)] font-normal text-xs md:text-sm mt-2 block">
                Editor / Visual Storyteller
              </span>
            </p>

            <div className="space-y-8 mb-24 max-w-2xl">
              <p className="body-lg leading-relaxed text-[var(--color-text-secondary)] text-xl md:text-2xl font-light">
                I create dynamic visual experiences through FPV drone
                cinematography and professional video editing. Based in India,
                I work with film productions, brands, agencies, and businesses
                to deliver cinematic aerial footage that tells stories through
                movement.
              </p>
              <p className="body-lg leading-relaxed text-[var(--color-text-muted)] text-lg md:text-xl font-light">
                Every project begins with understanding the story. I combine
                technical FPV piloting skill with a cinematographer&apos;s eye
                and an editor&apos;s sense of pacing. The result is footage
                that doesn&apos;t just look impressive — it moves the
                narrative forward.
              </p>
              <p className="body-lg leading-relaxed text-[var(--color-text-muted)] text-lg md:text-xl font-light">
                From high-speed automotive tracking to intimate indoor
                walkthroughs, from brand campaigns to feature film sequences —
                I handle the entire process: concept, flight,
                cinematography, editing, and final delivery.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-24">
              <h2 className="tech-label text-[var(--color-text-primary)] mb-8 tracking-[0.2em] uppercase border-b border-white/[0.1] pb-4">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                {[
                  "FPV Drone Piloting",
                  "Aerial Cinematography",
                  "Video Editing",
                  "Color Grading",
                  "Sound Design",
                  "Speed Ramping",
                  "Stabilization",
                  "Creative Direction",
                  "Indoor FPV Flying",
                  "Outdoor Aerial Film",
                ].map((skill, i) => (
                  <div key={skill} className="group relative overflow-hidden cursor-default">
                    <span className="text-sm md:text-base text-[var(--color-text-secondary)] group-hover:text-white transition-colors duration-500 font-light tracking-wide">
                      <span className="text-[var(--color-accent)] opacity-50 mr-2 text-xs">{(i+1).toString().padStart(2, '0')}</span>
                      {skill}
                    </span>
                    {/* Underline effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-accent)] group-hover:w-full transition-all duration-500 ease-out mt-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="mb-24">
              <h2 className="tech-label text-[var(--color-text-primary)] mb-10 tracking-[0.2em] uppercase border-b border-white/[0.1] pb-4">
                Equipment Arsenal
              </h2>
              <div className="space-y-10">
                {gear.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 group"
                  >
                    <span className="tech-label text-[var(--color-accent)] w-40 flex-shrink-0 pt-1">
                      {item.category}
                    </span>
                    <div>
                      <span className="text-lg md:text-xl font-medium text-[var(--color-text-primary)] block mb-2 group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </span>
                      <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability / Call to Action */}
            <div className="relative overflow-hidden group border-t border-white/[0.1] pt-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-0 group-hover:opacity-[0.05] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000"></div>
              
              <h2 className="tech-label text-[var(--color-text-muted)] mb-8 tracking-[0.2em] uppercase">
                Availability
              </h2>
              <p className="text-2xl md:text-4xl leading-tight mb-4 text-white font-light tracking-wide">
                {siteConfig.availability}.
              </p>
              <p className="text-sm md:text-lg text-[var(--color-text-muted)] mb-12 uppercase tracking-widest font-medium">
                Cities: {siteConfig.cities.join(", ")} & beyond
              </p>
              
              <Link href="/contact" className="group/btn inline-flex items-center gap-4 text-sm md:text-base font-medium uppercase tracking-[0.2em] text-white hover:text-[var(--color-accent)] transition-colors">
                <span className="border-b border-current pb-1">Book a Project</span>
                <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
