import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  allProjects,
  getProjectBySlug,
  getNextProject,
} from "@/data/projects";
import ProjectCaseStudyView from "@/components/work/ProjectCaseStudyView";

import { siteConfig } from "@/data/siteConfig";

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

  const projectUrl = `${siteConfig.url}/work/${project.slug}`;
  const posterUrl = project.poster ? `${siteConfig.url}${project.poster}` : undefined;
  const locationText = project.location ? ` in ${project.location}` : " in Tamil Nadu, India";

  return {
    title: `${project.title} — ${project.category} Drone Filming | NIVAS.FPV`,
    description: `${project.description} Filmed${locationText} by certified drone pilot Nivas. Explore the project brief, flight methodology, and video showcase.`,
    alternates: { canonical: projectUrl },
    openGraph: {
      title: `${project.title} — ${project.category} Drone Filming | NIVAS.FPV`,
      description: project.description,
      type: "article",
      url: projectUrl,
      images: posterUrl
        ? [
            {
              url: posterUrl,
              width: 1200,
              height: 630,
              alt: `${project.title} - ${project.category} drone filming by NIVAS.FPV`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.category} Drone Filming | NIVAS.FPV`,
      description: project.description,
      images: posterUrl ? [posterUrl] : undefined,
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

  const projectUrl = `${siteConfig.url}/work/${project.slug}`;
  const posterUrl = project.poster ? `${siteConfig.url}${project.poster}` : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${siteConfig.url}/work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl}/#project`,
        name: project.title,
        headline: `${project.title} — ${project.category} Drone Filming`,
        description: project.description,
        url: projectUrl,
        image: posterUrl,
        creator: { "@id": `${siteConfig.url}/#person` },
        provider: { "@id": `${siteConfig.url}/#service` },
        locationCreated: {
          "@type": "Place",
          name: project.location || "Tamil Nadu, India",
        },
        genre: project.category,
        dateCreated: project.year,
        keywords: project.services.join(", "),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectCaseStudyView
        project={project}
        nextProject={nextProject}
      />
    </>
  );
}
