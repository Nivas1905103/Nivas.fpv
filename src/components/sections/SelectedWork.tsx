"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeInUp, viewportOnce, textRevealUp, staggerReveal } from "@/lib/animations";
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
          .swiper-pagination {
            bottom: 0px !important;
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
          onSwiper={(swiper) => {
            // Initialize video listeners on mount
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i++) {
              const video = slides[i].querySelector('video');
              if (video) {
                // Prevent native loop bug (black screen at end)
                video.loop = false;
                video.ontimeupdate = () => {
                  if (video.duration && video.currentTime >= video.duration - 0.2) {
                    video.currentTime = 0.1;
                    video.play().catch(() => {});
                  }
                };
              }
            }
          }}
          onSlideChange={(swiper) => {
            // Force play the video in the active slide, even if it's a Swiper clone
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i++) {
              const video = slides[i].querySelector('video');
              if (video) {
                // Prevent native loop bug (black screen at end)
                video.loop = false;
                video.ontimeupdate = () => {
                  if (video.duration && video.currentTime >= video.duration - 0.2) {
                    video.currentTime = 0.1;
                    video.play().catch(() => {});
                  }
                };
                
                if (i === swiper.activeIndex) {
                  video.play().catch(() => {});
                } else {
                  video.pause();
                }
              }
            }
          }}
          className="w-full max-w-[1920px] mx-auto pt-12 pb-[60px] px-4 !overflow-visible"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.slug} className="w-[85vw] md:w-[55vw] max-w-[1000px] transition-transform duration-500">
              <Link href={`/work/${project.slug}`} className="block w-full h-full relative group">
                {/* Media Container */}
                <div className="video-glow-container relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 transition-all duration-700">
                  {project.heroVideo ? (
                    <video
                      src={project.heroVideo}
                      poster={project.poster}
                      muted
                      autoPlay={index === 0}
                      playsInline
                      preload="auto"
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

                  {/* Dark Gradient Overlay for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-500 pointer-events-none" />
                  
                  {/* Project Info Inside Video */}
                  <div className="absolute inset-x-0 bottom-8 md:bottom-12 px-4 md:px-8 flex flex-col items-center text-center z-10 pointer-events-none">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      variants={staggerReveal}
                      className="flex flex-col items-center"
                    >
                      <div className="overflow-hidden mb-3">
                        <motion.span 
                          variants={textRevealUp}
                          className="tech-label text-[var(--color-accent)] tracking-[0.2em] block drop-shadow-md"
                        >
                          {project.category}
                        </motion.span>
                      </div>
                      <div className="overflow-hidden mb-2">
                        <motion.h3 
                          variants={textRevealUp}
                          className="heading-md text-3xl md:text-5xl text-white group-hover:text-[var(--color-accent)] transition-colors duration-300 drop-shadow-lg"
                        >
                          {project.title}
                        </motion.h3>
                      </div>
                      <div className="overflow-hidden">
                        <motion.p 
                          variants={textRevealUp}
                          className="body-sm text-white/90 drop-shadow-md text-[0.95rem] md:text-[1.1rem]"
                        >
                          {project.client}{project.location ? ` — ${project.location}` : ""}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Explicit Spacer to guarantee physical layout gap */}
      <div className="h-[80px] md:h-[140px] w-full pointer-events-none" />

      {/* View All Work CTA */}
      <motion.div
        className="text-center pb-12 relative z-20"
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
