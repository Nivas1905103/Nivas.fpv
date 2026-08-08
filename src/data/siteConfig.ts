// ═══════════════════════════════════════════════════
// NIVAS.FPV — Site Configuration
// Central config for the entire website
// ═══════════════════════════════════════════════════

export const siteConfig = {
  name: "NIVAS.FPV",
  title: "NIVAS.FPV — FPV Drone Cinematographer & Video Editor | India",
  description:
    "Professional FPV drone cinematography and video editing for films, brands, commercials, real estate, automotive, and events across India. High-speed aerial perspectives that move stories forward.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nivas.fpv",
  ogImage: "/images/og/og-default.jpg",

  // Contact
  email: process.env.NEXT_PUBLIC_EMAIL || "nivas.fpv@gmail.com",
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8807328961",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "nivas.fpv",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/nivas.fpv?igsh=MTJxNXE1amRuZ2Z0Mw%3D%3D&utm_source=qr",
  whatsappUrl: `https://wa.me/91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8807328961"}`,

  // Brand
  tagline: "I don't just fly drones. I create perspectives.",
  shortTagline: "High-speed perspectives for films, brands and experiences.",
  role: "FPV Drone Cinematographer & Video Editor",
  location: "India",
  availability: "Available for projects across India",

  // Navigation
  navLinks: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Footer links
  socialLinks: [
    {
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/nivas.fpv?igsh=MTJxNXE1amRuZ2Z0Mw%3D%3D&utm_source=qr",
      icon: "instagram",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8807328961"}`,
      icon: "whatsapp",
    },
    {
      label: "Email",
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "nivas.fpv@gmail.com"}`,
      icon: "email",
    },
  ],

  // Cities available for work
  cities: [
    "Chennai",
    "Bengaluru",
    "Coimbatore",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Delhi",
    "Kerala",
    "Goa",
    "Rajasthan",
  ],

  // SEO keywords (used in metadata, not stuffed)
  keywords: [
    "FPV drone cinematographer India",
    "FPV drone pilot India",
    "FPV aerial cinematography",
    "drone cinematography India",
    "FPV drone filming",
    "commercial drone cinematography",
    "FPV drone videographer",
    "cinematic FPV drone",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
