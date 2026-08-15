import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allProjects,
  getProjectBySlug,
  getNextProject,
} from "@/data/projects";
import ProjectHero from "@/components/sections/ProjectHero";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.category} | FPV Cinematography`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.category}`,
      description: project.description,
      type: "article",
      images: project.poster
        ? [{ url: project.poster, width: 1200, height: 630 }]
        : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return (
    <article className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Hero */}
      <ProjectHero
        title={project.title}
        category={project.category}
        heroVideo={project.heroVideo}
        poster={project.poster || undefined}
      />

      {/* Project Details */}
      <section className="container-site py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          {/* Sidebar Metadata */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <span className="tech-label text-[var(--color-text-muted)] block mb-1">
                Client
              </span>
              <span className="text-sm">{project.client}</span>
            </div>
            <div>
              <span className="tech-label text-[var(--color-text-muted)] block mb-1">
                Location
              </span>
              <span className="text-sm">{project.location}</span>
            </div>
            <div>
              <span className="tech-label text-[var(--color-text-muted)] block mb-1">
                Year
              </span>
              <span className="text-sm">{project.year}</span>
            </div>
            {project.role && (
              <div>
                <span className="tech-label text-[var(--color-text-muted)] block mb-1">
                  Role
                </span>
                <span className="text-sm">{project.role}</span>
              </div>
            )}
            <div>
              <span className="tech-label text-[var(--color-text-muted)] block mb-2">
                Services
              </span>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="text-xs px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
            {project.equipment && project.equipment.length > 0 && (
              <div>
                <span className="tech-label text-[var(--color-text-muted)] block mb-2">
                  Equipment
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.equipment.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <p className="body-lg mb-8">{project.description}</p>

            {project.brief && (
              <div className="mb-12">
                <h2 className="heading-sm text-xs mb-4 text-[var(--color-text-muted)]">
                  Creative Brief
                </h2>
                <p className="body-lg">{project.brief}</p>
              </div>
            )}

            {/* Final Video */}
            {project.finalVideo || project.heroVideo ? (
              <div className="aspect-[16/9] bg-black mb-12 rounded-sm overflow-hidden border border-[var(--color-border)]">
                <video
                  src={project.finalVideo || project.heroVideo}
                  poster={project.finalPoster || project.poster || undefined}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            ) : (
              <div className="aspect-[16/9] bg-[var(--color-bg-secondary)] mb-12 flex items-center justify-center rounded-sm border border-[var(--color-border)]">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 fill-white/40 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                  <span className="tech-label text-[var(--color-text-muted)]">
                    Final Film — Coming Soon
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next Project */}
      {nextProject && (
        <section className="border-t border-[var(--color-border)]">
          <Link
            href={`/work/${nextProject.slug}`}
            className="block group"
            data-cursor="Next"
          >
            <div className="container-site py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="tech-label text-[var(--color-text-muted)] block mb-2">
                  Next Project
                </span>
                <h3 className="heading-lg group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {nextProject.title}
                </h3>
                <p className="body-sm mt-2">{nextProject.category}</p>
              </div>
              <span className="text-4xl text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-2 transition-all duration-300">
                →
              </span>
            </div>
          </Link>
        </section>
      )}
    </article>
  );
}
