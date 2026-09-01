"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/context/LanguageContext";

const tnProjects = [
  {
    title: "A Grandeur Wedding",
    client: "Mahi & Rishi",
    location: "Theni, Tamil Nadu",
    slug: "a-grandeur-wedding",
    poster: "/images/posters/project-6.jpg",
    category: "Wedding",
    badge: "THENI SPOTLIGHT",
    description:
      "A cinematic FPV journey capturing the grandeur, emotion, and vibrant celebrations of Mahi and Rishi's wedding amidst the scenic landscapes of Theni.",
  },
  {
    title: "Real Estate Commercials",
    client: "GBM Construction",
    location: "Theni, Tamil Nadu",
    slug: "real-estate-commercials",
    poster: "/images/posters/project-8.jpg",
    category: "Real Estate",
    badge: "COMMERCIAL DEVELOPMENT",
    description:
      "Dynamic real estate commercial showcasing the massive scale and architectural intricacies of GBM Construction's property developments in Theni.",
  },
];

const tnCities = [
  "Coimbatore",
  "Chennai",
  "Madurai",
  "Trichy",
  "Salem",
  "Theni",
  "Tirupur",
];

export default function ServingTamilNadu() {
  const { t } = useLanguage();

  return (
    <section
      id="serving-tamil-nadu"
      className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-[#050505] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/[0.04] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 max-w-7xl mx-auto space-y-10 md:space-y-14">
        {/* Header Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="flex flex-col items-start max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(229,9,20,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>{t.tnEyebrow}</span>
          </div>

          <h2 className="font-heading font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {t.tnTitle}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
            {t.tnDesc}
          </p>

          {/* Regional Hubs Pill Row */}
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <span className="text-xs font-mono text-red-400/80 mr-1 uppercase tracking-wider">
              COVERAGE HUBS:
            </span>
            {tnCities.map((city) => (
              <span
                key={city}
                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] hover:border-red-500/40 text-xs font-mono text-white/85 transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Theni Case Studies Spotlight Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {tnProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: idx * 0.15 }}
              className="group relative rounded-[1.75rem] bg-[#120e0e]/75 backdrop-blur-[20px] border border-white/[0.08] hover:border-red-500/40 p-5 sm:p-7 transition-all duration-500 hover:-translate-y-1 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Red Top Edge Glow */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Poster Thumbnail */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-black">
                  <Image
                    src={project.poster}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-red-400">
                    {project.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 text-xs font-mono text-white/90">
                    📍 {project.location}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-400 mb-2">
                  <span>{project.category}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/60">Client: {project.client}</span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase tracking-tight text-white mb-3 group-hover:text-red-100 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Action CTA */}
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-red-400 group-hover:text-white transition-colors pt-4 border-t border-white/[0.06]"
              >
                <span>{t.tnViewCaseStudy}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
