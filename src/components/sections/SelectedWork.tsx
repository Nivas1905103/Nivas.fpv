"use client";

import Link from "next/link";
import { Fragment } from "react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { featuredProjects } from "@/data/projects";
import { formatProjectNumber } from "@/lib/utils";
import { Project } from "@/data/projects";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SelectedWork({ projects = featuredProjects }: { projects?: any[] }) {
  const totalProjects = projects.length;

  return (
    <section
      id="work"
      className="section-padding bg-[var(--color-bg-secondary)]"
    >
      <div className="container-site">
        <SectionHeading
          label="Portfolio"
          title="Selected Work"
          subtitle="Cinematic FPV footage crafted for films, brands and commercial productions."
        />

        {/* Projects Grid - Asymmetric Editorial Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col gap-12 md:gap-20"
        >
          {projects.map((project, index) => {
            return (
              <Fragment key={project.slug}>
                <motion.div
                  variants={fadeInUp}
                  className="group w-full"
                >
                <Link
                  href={`/work/${project.slug}`}
                  className="block w-full"
                  data-cursor="View"
                >
                  {/* Project Image/Video Container */}
                  <div className="relative overflow-hidden bg-[var(--color-bg-card)] aspect-[16/9] w-full">
                    {/* Media Container */}
                    <div className="absolute inset-0 bg-[#0a0a0a]">
                      {project.heroVideo ? (
                        <video
                          src={project.heroVideo}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                        />
                      ) : project.poster ? (
                        <Image
                          src={project.poster}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                           <span className="tech-label text-[var(--color-text-muted)]">{project.title}</span>
                        </div>
                      )}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-500" />

                    {/* Project Number */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                      <span className="tech-label text-white/60">
                        {formatProjectNumber(index + 1, totalProjects)}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
                      <span className="tech-label px-3 py-1 bg-black/40 backdrop-blur-sm text-white/70">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mt-5 md:mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                    <div>
                      <h3 className="heading-md text-xl md:text-2xl group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="body-sm mt-1">
                        {project.client}{project.location ? ` — ${project.location}` : ""}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="body-sm">{project.year}</span>
                      <span className="text-[var(--color-accent)] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
                </motion.div>

                {/* Cinematic Scrolling Marquee Divider */}
                {index !== projects.length - 1 && (
                  <motion.div 
                    variants={fadeInUp}
                    className="w-full py-2 overflow-hidden border-y border-[var(--color-border)] opacity-40"
                  >
                    <div className="marquee-container w-full">
                      <div className="marquee-track flex gap-8 whitespace-nowrap">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <span key={i} className="tech-label text-xs">
                            // FPV CINEMATOGRAPHY // AERIAL STORYTELLING // HIGH-SPEED TRACKING // COMMERCIAL VISUALS
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </Fragment>
            );
          })}
        </motion.div>

        {/* View All Work CTA */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <Link href="/work" className="btn-secondary">
            View All Projects
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
