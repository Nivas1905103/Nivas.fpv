import type { Metadata } from "next";
import Link from "next/link";
import { gear } from "@/data/gear";
import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Nivas | FPV Drone Cinematographer",
  description:
    "Nivas is a professional FPV drone cinematographer and video editor based in India. Specializing in commercial cinematography, real estate walkthroughs, automotive filming, and cinematic FPV experiences.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-[var(--color-bg-primary)]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Portrait */}
          <div>
            <div className="aspect-[3/4] bg-[var(--color-bg-secondary)] relative overflow-hidden sticky top-24">
              <Image 
                src="/images/about/portrait-real.jpg" 
                alt="Nivas - Portrait"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="tech-label text-[var(--color-accent)] block mb-4">
              About
            </span>
            <h1 className="heading-xl mb-2">
              Nivas<span className="text-[var(--color-accent)]">.</span>
            </h1>
            <p className="heading-sm text-xs text-[var(--color-text-muted)] mb-12">
              FPV Drone Cinematographer / Editor / Visual Storyteller
            </p>

            <div className="space-y-6 mb-16">
              <p className="body-lg">
                I create dynamic visual experiences through FPV drone
                cinematography and professional video editing. Based in India,
                I work with film productions, brands, agencies, and businesses
                to deliver cinematic aerial footage that tells stories through
                movement.
              </p>
              <p className="body-lg">
                Every project begins with understanding the story. I combine
                technical FPV piloting skill with a cinematographer&apos;s eye
                and an editor&apos;s sense of pacing. The result is footage
                that doesn&apos;t just look impressive — it moves the
                narrative forward.
              </p>
              <p className="body-lg">
                From high-speed automotive tracking to intimate indoor
                walkthroughs, from brand campaigns to feature film sequences —
                I handle the entire process: concept, flight,
                cinematography, editing, and final delivery.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-16">
              <h2 className="heading-sm text-xs text-[var(--color-text-muted)] mb-6">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-2 gap-3">
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
                  <div key={skill} className="flex items-center gap-2 py-1">
                    <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div className="mb-16">
              <h2 className="heading-sm text-xs text-[var(--color-text-muted)] mb-6">
                Equipment
              </h2>
              <div className="space-y-4">
                {gear.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start gap-4 py-3 border-b border-[var(--color-border)]"
                  >
                    <span className="tech-label text-[var(--color-accent)] mt-0.5 w-24 flex-shrink-0">
                      {item.category}
                    </span>
                    <div>
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">
                        {item.name}
                      </span>
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-8 bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
              <h2 className="heading-sm text-xs text-[var(--color-text-muted)] mb-4">
                Availability
              </h2>
              <p className="body-lg mb-4">
                {siteConfig.availability}.
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mb-6">
                Cities: {siteConfig.cities.join(", ")}, and more.
              </p>
              <Link href="/contact" className="btn-primary">
                Book a Project
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
