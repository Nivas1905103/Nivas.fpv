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

          {/* Premium Glassmorphism Content Card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-[#0a0a0a]/40 backdrop-blur-2xl border border-white/[0.08] shadow-2xl">
            {/* Subtle top red glow */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-50"></div>
            
            <span className="tech-label text-[var(--color-accent)] block mb-6 tracking-[0.3em]">
              ABOUT
            </span>
            <h1 className="heading-xl mb-4 text-5xl md:text-7xl drop-shadow-lg">
              Nivas<span className="text-[var(--color-accent)]">.</span>
            </h1>
            <p className="tracking-[0.2em] text-xs md:text-sm text-[var(--color-text-muted)] mb-12 uppercase font-medium">
              FPV Drone Cinematographer <span className="text-[var(--color-accent)] mx-2">/</span> Editor <span className="text-[var(--color-accent)] mx-2">/</span> Visual Storyteller
            </p>

            <div className="space-y-8 mb-16">
              <p className="body-lg leading-loose text-[var(--color-text-secondary)] text-lg md:text-xl font-light">
                I create dynamic visual experiences through FPV drone
                cinematography and professional video editing. Based in India,
                I work with film productions, brands, agencies, and businesses
                to deliver cinematic aerial footage that tells stories through
                movement.
              </p>
              <p className="body-lg leading-loose text-[var(--color-text-secondary)] text-lg md:text-xl font-light">
                Every project begins with understanding the story. I combine
                technical FPV piloting skill with a cinematographer&apos;s eye
                and an editor&apos;s sense of pacing. The result is footage
                that doesn&apos;t just look impressive — it moves the
                narrative forward.
              </p>
              <p className="body-lg leading-loose text-[var(--color-text-secondary)] text-lg md:text-xl font-light">
                From high-speed automotive tracking to intimate indoor
                walkthroughs, from brand campaigns to feature film sequences —
                I handle the entire process: concept, flight,
                cinematography, editing, and final delivery.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-16">
              <h2 className="tech-label text-[var(--color-text-muted)] mb-8 tracking-[0.2em]">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
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
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-4 py-2 group cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:shadow-[0_0_10px_var(--color-accent)] transition-all duration-300" />
                    <span className="text-[var(--color-text-secondary)] group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="mb-16">
              <h2 className="tech-label text-[var(--color-text-muted)] mb-8 tracking-[0.2em]">
                Equipment Arsenal
              </h2>
              <div className="space-y-6">
                {gear.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-5 border-b border-white/[0.05] group hover:border-[var(--color-accent)]/30 transition-colors duration-500"
                  >
                    <span className="tech-label text-[var(--color-accent)] w-32 flex-shrink-0">
                      {item.category}
                    </span>
                    <div>
                      <span className="text-base md:text-lg font-medium text-[var(--color-text-primary)] block mb-1">
                        {item.name}
                      </span>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-8 md:p-10 bg-black/40 rounded-2xl border border-white/[0.05] backdrop-blur-md relative overflow-hidden group hover:border-[var(--color-accent)]/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)] opacity-[0.03] group-hover:opacity-[0.08] blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 transition-opacity duration-700"></div>
              <h2 className="tech-label text-[var(--color-text-muted)] mb-6 tracking-[0.2em]">
                Availability
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed mb-4 text-white font-light">
                {siteConfig.availability}.
              </p>
              <p className="text-sm md:text-base text-[var(--color-text-muted)] mb-8">
                Cities: {siteConfig.cities.join(", ")}, and more.
              </p>
              <Link href="/contact" className="btn-primary inline-flex relative z-10">
                Book a Project
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
