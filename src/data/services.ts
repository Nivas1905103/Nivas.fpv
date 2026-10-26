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
    title: "FPV & Aerial Cinematography",
    slug: "fpv-cinematography",
    description:
      "Dynamic FPV drone footage and cinematic aerial videography for commercials, films, brands and events across Theni, Tamil Nadu and India.",
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
      "High-impact aerial storytelling and camera-drone filming for brands, corporate campaigns, and industry. Utilizing DJI Air 3 and FPV systems for cinematic visual depth.",
    details: [
      "Brand campaign films",
      "Commercial drone filming",
      "Camera-drone cinematography",
      "Product & promotional footage",
      "Advertising & social media campaigns",
    ],
    icon: "◆",
  },
  {
    title: "Film Production",
    slug: "film-production",
    description:
      "Cinematic aerial sequences for feature films, short films, music videos and production houses. Precision flying by a DGCA-certified remote pilot.",
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
      "Immersive FPV walkthroughs, camera-drone exterior establishing shots, and property films for developers and luxury estates in Theni and across Tamil Nadu.",
    details: [
      "Property walkthroughs & fly-throughs",
      "Luxury home & resort tours",
      "Construction progress & aerial surveys",
      "Architectural visualization",
      "High-resolution aerials",
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
