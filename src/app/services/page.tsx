import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services — FPV Drone Cinematography & Video Editing",
  description:
    "Professional FPV drone cinematography, commercial filming, real estate walkthroughs, automotive tracking, travel films, and video editing services across India.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-20">
      <Services />
    </main>
  );
}
