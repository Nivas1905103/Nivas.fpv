import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — Book an FPV Drone Cinematography Project",
  description:
    "Get in touch with Nivas for your next FPV drone cinematography project. Available for commercial films, brand campaigns, real estate, automotive, and event coverage across India.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
