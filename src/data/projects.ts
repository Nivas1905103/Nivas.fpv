// ═══════════════════════════════════════════════════
// NIVAS.FPV — Project Data
// Edit this file to add/modify your portfolio projects
// ═══════════════════════════════════════════════════

export interface Project {
  /** Project title */
  title: string;
  /** URL-friendly slug (used in /work/[slug]) */
  slug: string;
  /** Project category */
  category: string;
  /** Client name — leave as "Personal Project" if no client */
  client: string;
  /** Shoot location */
  location: string;
  /** Year of project */
  year: string;
  /** Short description (1-2 sentences) */
  description: string;
  /** Detailed creative brief for case study page */
  brief?: string;
  /** Your role in the project */
  role?: string;
  /** Services provided */
  services: string[];
  /** Equipment used */
  equipment?: string[];
  /** Path to hero video — place in /public/videos/ */
  heroVideo?: string;
  /** Path to poster/thumbnail image — place in /public/images/projects/ */
  poster: string;
  /** Optional separate path to the final full-length video */
  finalVideo?: string;
  /** Gallery image paths */
  gallery?: string[];
  /** Is this a featured project on homepage? */
  featured: boolean;
  /** Display order (lower = first) */
  order: number;
}

// ═══════════════════════════════════════════════════
// YOUR PROJECTS — Edit these entries with your real work
// ═══════════════════════════════════════════════════

export const projects: Project[] = [
  {
    title: "Chase the Moment",
    slug: "chase-the-moment",
    category: "Automotive",
    client: "Suzuki India", 
    location: "",
    year: "2026",
    description:
      "High-speed FPV tracking sequence capturing the Suzuki Jimny's raw off-road energy through dynamic aerial perspectives.",
    brief:
      "A cinematic commercial sequence designed to showcase the Suzuki Jimny's 4x4 off-road performance through immersive FPV cinematography. The brief demanded high-speed tracking through water crossings, tight cornering shots, and seamless ground-to-air transitions.",
    role: "FPV Pilot / Cinematographer / Editor",
    services: [
      "FPV Cinematography",
      "Aerial Cinematography",
      "Video Editing",
      "Color Grading",
    ],
    equipment: ["DJI Avata 2", "DJI Goggles 3", "ND Filters"],
    heroVideo: "/videos/1.mov", 
    finalVideo: "/videos/1.mov",
    poster: "/images/projects/chase-that-moment-poster.jpg",
    gallery: [],
    featured: true,
    order: 1,
  },
  {
    title: "Vertical Rise",
    slug: "vertical-rise",
    category: "Real Estate",
    client: "Hotel SMP grand",
    location: "Rameshwaram, India",
    year: "2026",
    description:
      "Immersive FPV walkthrough of a luxury residential property — ground to rooftop in a single take.",
    brief:
      "An immersive property film showcasing architectural design through continuous FPV movement. From lobby to penthouse in one unbroken flight.",
    role: "FPV Pilot / Cinematographer / Editor",
    services: [
      "FPV Cinematography",
      "Real Estate Film",
      "Video Editing",
      "Color Grading",
    ],
    heroVideo: "/videos/smp-1.mp4",
    finalVideo: "/videos/smp-final.mp4",
    poster: "",
    gallery: [],
    featured: true,
    order: 2,
  },
  {
    title: "Into the Wild",
    slug: "into-the-wild",
    category: "Travel",
    client: "Free Style FPV Shot", 
    location: "Munnar, Kerala, India",
    year: "2026",
    description:
      "Cinematic freestyle FPV flights exploring the misty hills and dramatic landscapes of Munnar, Kerala.",
    brief:
      "A cinematic freestyle project capturing the raw beauty of Munnar, Kerala. The goal was to surf the misty hills and tea estates with complete creative freedom, capturing dynamic aerial storytelling.",
    role: "FPV Pilot / Cinematographer / Editor",
    services: [
      "FPV Cinematography",
      "Travel Film",
      "Aerial Cinematography",
      "Video Editing",
      "Color Grading",
    ],
    heroVideo: "/videos/m1.mov",
    finalVideo: "/videos/munnar1.mov",
    poster: "",
    gallery: [],
    featured: true,
    order: 3,
  },
  {
    title: "Frequency",
    slug: "frequency",
    category: "Commercial",
    client: "Your Client Name", // Replace with actual client
    location: "Mumbai, India",
    year: "2026",
    description:
      "Brand film for a commercial campaign — indoor and outdoor FPV sequences fused with dynamic editing.",
    brief:
      "A brand film combining indoor FPV flying with outdoor aerial sequences. The campaign demanded energy, speed, and seamless transitions between environments.",
    role: "FPV Pilot / Cinematographer / Editor",
    services: [
      "FPV Cinematography",
      "Commercial Film",
      "Indoor FPV",
      "Video Editing",
      "Color Grading",
    ],
    heroVideo: "/videos/project-04.mp4",
    poster: "/images/projects/project-04-poster.jpg",
    gallery: [],
    featured: true,
    order: 4,
  },
  {
    title: "Summit",
    slug: "summit",
    category: "Events",
    client: "Your Client Name", // Replace with actual client
    location: "Goa, India",
    year: "2026",
    description:
      "Dynamic event coverage through FPV lenses — capturing the scale and energy of a large-scale production.",
    role: "FPV Pilot / Cinematographer",
    services: [
      "FPV Cinematography",
      "Event Coverage",
      "Aerial Cinematography",
      "Video Editing",
    ],
    heroVideo: "/videos/project-05.mp4",
    poster: "/images/projects/project-05-poster.jpg",
    gallery: [],
    featured: true,
    order: 5,
  },
  {
    title: "Concrete Poetry",
    slug: "concrete-poetry",
    category: "Architecture",
    client: "Your Client Name", // Replace with actual client
    location: "Coimbatore, India",
    year: "2026",
    description:
      "Architectural film exploring form and space through precise indoor FPV cinematography.",
    role: "FPV Pilot / Cinematographer / Editor",
    services: [
      "FPV Cinematography",
      "Architecture Film",
      "Indoor FPV",
      "Video Editing",
      "Color Grading",
    ],
    heroVideo: "/videos/project-06.mp4",
    poster: "/images/projects/project-06-poster.jpg",
    gallery: [],
    featured: false,
    order: 6,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

export const allProjects = [...projects].sort((a, b) => a.order - b.order);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex + 1) % projects.length];
}
