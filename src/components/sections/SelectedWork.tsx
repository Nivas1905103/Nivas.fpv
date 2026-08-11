"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { featuredProjects, Project } from "@/data/projects";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SelectedWork({ projects = featuredProjects }: { projects?: Project[] }) {
  return (
    <section
      id="work"
      className="section-padding bg-[var(--color-bg-secondary)] overflow-hidden"
    >
      <div className="container-site mb-12 md:mb-16">
        <SectionHeading
          label="Portfolio"
          title="Selected Work"
          subtitle="Cinematic FPV footage crafted for films, brands and commercial productions."
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="w-full relative"
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-[1920px] mx-auto py-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.slug} className="w-[85vw] md:w-[60vw] max-w-[1200px] aspect-[16/9] transition-transform duration-500 rounded-[2rem] overflow-hidden bg-[var(--color-bg-card)]">
              <Link href={`/work/${project.slug}`} className="block w-full h-full relative group">
                {/* Media Container */}
                <div className="absolute inset-0 bg-[#0a0a0a]">
                  {project.heroVideo ? (
                    <BackgroundVideo
                      src={project.heroVideo}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

                {/* Glassmorphic Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/20 transition-colors duration-500 pointer-events-none" />

                {/* Project Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none">
                  <div>
                    <span className="tech-label px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white mb-4 inline-block border border-white/20">
                      {project.category}
                    </span>
                    <h3 className="heading-lg text-3xl md:text-5xl text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="body-lg text-white/80 max-w-xl">
                      {project.client}{project.location ? ` — ${project.location}` : ""}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white">
                    <span className="tech-label text-white/60">{project.year}</span>
                    <span className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 group-hover:bg-white/10">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* View All Work CTA */}
      <motion.div
        className="mt-12 md:mt-20 text-center"
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
    </section>
  );
}
