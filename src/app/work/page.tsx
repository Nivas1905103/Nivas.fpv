import type { Metadata } from "next";
import Link from "next/link";
import { allProjects } from "@/data/projects";
import { formatProjectNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work — FPV Drone Cinematography Portfolio",
  description:
    "Explore the FPV drone cinematography portfolio of Nivas S. — featuring commercial films, automotive, real estate, travel, and event cinematography across India.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const totalProjects = allProjects.length;

  return (
    <section className="min-h-screen pt-32 pb-20 bg-[var(--color-bg-primary)]">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="tech-label text-[var(--color-accent)] block mb-4">
            Portfolio
          </span>
          <h1 className="heading-xl">
            Selected
            <br />
            Work<span className="text-[var(--color-accent)]">.</span>
          </h1>
          <p className="body-lg mt-6 max-w-xl">
            FPV drone cinematography and video editing for films, brands, and
            commercial productions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 md:space-y-24">
          {allProjects.map((project, index) => {
            const isWide = index % 3 === 0;
            return (
              <div
                key={project.slug}
                className={`group ${isWide ? "" : "md:ml-[12%]"}`}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block"
                  data-cursor="View"
                >
                  {/* Project Visual */}
                  <div
                    className={`relative overflow-hidden bg-[var(--color-bg-card)] ${
                      isWide
                        ? "aspect-[16/9]"
                        : "aspect-[4/3] md:aspect-[3/2] md:max-w-[85%]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                      <div className="text-center">
                        <span className="tech-label text-[var(--color-text-muted)]">
                          {project.category}
                        </span>
                        <div className="mt-2 heading-md text-[var(--color-text-secondary)]">
                          {project.title}
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-500" />

                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                      <span className="tech-label text-white/60">
                        {formatProjectNumber(index + 1, totalProjects)}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10">
                      <span className="tech-label text-white/50">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                    <div>
                      <h2 className="heading-md text-xl md:text-2xl group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="body-sm mt-1">
                        {project.category} — {project.client}
                      </p>
                    </div>
                    <span className="body-sm">{project.location}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
