// ═══════════════════════════════════════════════════
// NIVAS.FPV — Testimonials Data
// Add your real client testimonials here
// ═══════════════════════════════════════════════════

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// Replace these placeholder entries with real testimonials
// Remove any entry you don't have a real testimonial for
export const testimonials: Testimonial[] = [
  // {
  //   quote: "Your client's testimonial here.",
  //   name: "Client Name",
  //   role: "Director / Producer / Brand Manager",
  //   company: "Company Name",
  // },
];

export interface ClientLogo {
  name: string;
  logo: string; // path to logo image in /public/images/clients/
}

// Add client logos when available
export const clientLogos: ClientLogo[] = [
  // {
  //   name: "Client Name",
  //   logo: "/images/clients/client-logo.svg",
  // },
];
