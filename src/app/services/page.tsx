import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — FPV Drone Cinematography & Video Editing",
  description:
    "Professional FPV drone cinematography, commercial filming, real estate walkthroughs, automotive tracking, travel films, and video editing services across India.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="min-h-screen pt-28 md:pt-36 pb-20 md:pb-28 bg-[var(--color-bg-primary)]">
      <div className="container-site">
        {/* Header */}
        <div className="mb-10 md:mb-14 lg:mb-16 max-w-3xl">
          <span className="tech-label text-[var(--color-accent)] block mb-4 md:mb-5">
            Services
          </span>
          <h1 className="heading-xl mb-5 md:mb-6">
            What I Do<span className="text-[var(--color-accent)]">.</span>
          </h1>
          <p className="body-lg">
            End-to-end FPV drone cinematography and post-production services.
            From concept to final film — every project receives the same
            commitment to cinematic quality.
          </p>
        </div>

        {/* Services Detail Grid */}
        <div className="space-y-0 border-t border-[var(--color-border)]">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className="border-b border-[var(--color-border)] py-10 md:py-14 grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-1">
                <span className="tech-label text-[var(--color-accent)] block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="heading-md text-xl md:text-2xl">
                  {service.title}
                </h2>
              </div>

              <div className="lg:col-span-1">
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="lg:col-span-1">
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-[var(--color-text-muted)] flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-[var(--color-accent)] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="heading-lg mb-4 md:mb-5">Have a project in mind?</h3>
          <p className="body-lg mb-7 md:mb-8">
            Let&apos;s discuss how FPV cinematography can elevate your
            production.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Project
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
