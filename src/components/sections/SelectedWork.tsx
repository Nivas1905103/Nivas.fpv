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
        <style jsx global>{`
          .swiper-slide-active .video-glow-container {
            box-shadow: 0 0 60px -15px var(--color-accent);
            border-color: rgba(255, 51, 51, 0.4);
          }
          .swiper-slide-active .video-glow-container::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 30px rgba(255, 51, 51, 0.2);
            pointer-events: none;
          }
          .swiper-slide {
            height: auto !important;
          }
        `}</style>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
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
          onSlideChange={(swiper) => {
            // Force play the video in the active slide, even if it's a Swiper clone
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i++) {
              const video = slides[i].querySelector('video');
              if (video) {
                if (i === swiper.activeIndex) {
                  video.play().catch(() => {});
                } else {
                  video.pause();
                }
              }
            }
          }}
          className="w-full max-w-[1920px] mx-auto py-12 px-4 !overflow-visible"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.slug} className="w-[85vw] md:w-[55vw] max-w-[1000px] transition-transform duration-500">
              <Link href={`/work/${project.slug}`} className="block w-full h-full relative group">
                {/* Media Container */}
                <div className="video-glow-container relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 transition-all duration-700">
                  {project.heroVideo ? (
                    <video
                      src={project.heroVideo}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onCanPlay={(e) => {
                        // Attempt to play immediately if it's the initially active slide
                        if (index === 0) e.currentTarget.play().catch(() => {});
                      }}
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

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Project Info Below Video */}
                <div className="pt-6 md:pt-8 px-2 flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <span className="tech-label text-[var(--color-accent)] tracking-[0.2em] block mb-3">
                      {project.category}
                    </span>
                    <h3 className="heading-md text-2xl md:text-4xl text-white group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="body-sm text-white/60">
                      {project.client}{project.location ? ` — ${project.location}` : ""}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="tech-label text-white/40">{project.year}</span>
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
