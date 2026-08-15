import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  allProjects,
  getProjectBySlug,
  getNextProject,
} from "@/data/projects";
import ProjectCaseStudyView from "@/components/work/ProjectCaseStudyView";

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
    title: `${project.title} — ${project.category} | FPV Cinematography | NIVAS.FPV`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.category} | NIVAS.FPV`,
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
    <ProjectCaseStudyView
      project={project}
      nextProject={nextProject}
    />
  );
}
