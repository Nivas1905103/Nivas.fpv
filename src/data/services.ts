// ═══════════════════════════════════════════════════
// NIVAS.FPV — Services Data
// ═══════════════════════════════════════════════════

export interface Service {
  title: string;
  slug: string;
  description: string;
  details: string[];
  icon: string; // emoji or SVG identifier
}

export const services: Service[] = [
  {
    title: "FPV Cinematography",
    slug: "fpv-cinematography",
    description:
      "Dynamic FPV drone footage for commercials, films, brands and events. High-speed perspectives that traditional cameras cannot achieve.",
    details: [
      "Low-altitude dynamic movement",
      "High-speed tracking sequences",
      "One-take continuous shots",
      "Ground-to-air transitions",
      "Indoor and outdoor flight",
    ],
    icon: "◆",
  },
  {
    title: "Commercial Drone Films",
    slug: "commercial-drone-films",
    description:
      "High-impact aerial storytelling for brands and campaigns. Cinematic drone footage designed to captivate audiences and elevate brand presence.",
    details: [
      "Brand campaign films",
      "Product cinematography",
      "Promotional content",
      "Social media assets",
      "Advertising campaigns",
    ],
    icon: "◆",
  },
  {
    title: "Film Production",
    slug: "film-production",
    description:
      "FPV sequences designed for feature films, short films, music videos and production houses. Precision flying for narrative-driven projects.",
    details: [
      "Feature film sequences",
      "Short film cinematography",
      "Music video production",
      "Documentary aerials",
      "Production house collaboration",
    ],
    icon: "◆",
  },
  {
    title: "Real Estate & Architecture",
    slug: "real-estate-architecture",
    description:
      "Immersive FPV walkthroughs and cinematic property films. Showcase spaces in ways that static photography cannot capture.",
    details: [
      "Property walkthroughs",
      "Luxury home tours",
      "Construction progress",
      "Architectural visualization",
      "Interior flythrough",
    ],
    icon: "◆",
  },
  {
    title: "Automotive",
    slug: "automotive",
    description:
      "High-speed tracking, chase sequences and dynamic vehicle cinematography. FPV perspectives built for speed and precision.",
    details: [
      "Vehicle tracking shots",
      "Chase sequences",
      "Launch films",
      "Motorsport coverage",
      "Dynamic reveals",
    ],
    icon: "◆",
  },
  {
    title: "Travel & Hospitality",
    slug: "travel-hospitality",
    description:
      "Cinematic aerial storytelling for resorts, destinations and tourism brands. Immersive content that makes audiences want to be there.",
    details: [
      "Resort & hotel films",
      "Destination marketing",
      "Tourism campaigns",
      "Experience cinematography",
      "Aerial landscape films",
    ],
    icon: "◆",
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    description:
      "Professional editing, pacing, sound design, color grading and final delivery. From raw footage to finished film.",
    details: [
      "Professional editing",
      "Color grading",
      "Sound design",
      "Speed ramping",
      "Final delivery & export",
    ],
    icon: "◆",
  },
];
