// ═══════════════════════════════════════════════════
// NIVAS.FPV — Site Configuration
// Central config for the entire website
// ═══════════════════════════════════════════════════

export const siteConfig = {
  name: "NIVAS.FPV",
  title: "NIVAS.FPV | Drone Pilot & Aerial Cinematography in Theni",
  description:
    "NIVAS.FPV offers cinematic drone filming in Theni, Tamil Nadu, including aerial cinematography, camera-drone footage, FPV filming and commercial video production. Explore the portfolio and enquire about your shoot.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nivasfpv.in",
  ogImage: "/images/og/og-default.jpg",

  // Contact
  email: process.env.NEXT_PUBLIC_EMAIL || "nivas.fpv@gmail.com",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "nivas.fpv",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/nivas.fpv/",

  // Brand
  tagline: "I don't just fly drones. I create perspectives.",
  shortTagline: "Cinematic drone filming & aerial cinematography in Theni, Tamil Nadu.",
  role: "Certified Drone Pilot & Aerial Cinematographer",
  location: "Theni, Tamil Nadu, India",
  availability: "Based in Theni • Available for projects across Tamil Nadu & India",

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
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/nivas.fpv/",
      icon: "instagram",
    },
    {
      label: "Email",
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "nivas.fpv@gmail.com"}`,
      icon: "email",
    },
  ],

  // Cities available for work (Theni base + Tamil Nadu priority hubs + Pan-India)
  cities: [
    "Theni",
    "Madurai",
    "Coimbatore",
    "Chennai",
    "Trichy",
    "Salem",
    "Tirupur",
    "Bengaluru",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Delhi",
    "Kerala",
    "Goa",
    "Rajasthan",
  ],

  // SEO keywords (Theni local searches + Tamil Nadu + Pan-India)
  keywords: [
    "Drone pilot in Theni",
    "Drone pilots in Theni",
    "Drone services in Theni",
    "Drone videography in Theni",
    "Drone photography in Theni",
    "Drone filming in Theni",
    "Cinematic drone videography in Theni",
    "Aerial cinematography in Theni",
    "FPV drone pilot in Theni",
    "FPV drone filming in Tamil Nadu",
    "Commercial drone filming in Tamil Nadu",
    "Real estate drone filming in Theni",
    "Certified remote pilot in Theni",
    "DJI Air 3 drone filming Theni",
    "Camera drone pilot Tamil Nadu",
    "Wedding drone cinematography Theni",
    "Drone videographer Madurai",
    "FPV drone pilot Coimbatore",
    "FPV drone cinematographer Chennai",
    "Drone filming Salem",
    "FPV drone pilot Trichy",
    "FPV videographer Tirupur",
    "FPV drone cinematographer India",
    "FPV drone pilot India",
    "Drone cinematography India",
    "Commercial drone cinematography",
    "Cinematic FPV drone",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
