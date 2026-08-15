import type { Metadata } from "next";
import WorkPageView from "@/components/work/WorkPageView";

export const metadata: Metadata = {
  title: "Selected Work — FPV Drone Cinematography Portfolio | NIVAS.FPV",
  description:
    "Explore the FPV drone cinematography portfolio of Nivas — featuring commercial films, automotive tracking, luxury real estate walkthroughs, travel documentaries, and cinematic aerial experiences across India.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Work — NIVAS.FPV | Drone Cinematographer & Editor",
    description:
      "Explore the FPV drone cinematography portfolio of Nivas — featuring commercial films, automotive tracking, luxury real estate walkthroughs, and travel films across India.",
    url: "https://nivasfpv.in/work",
  },
};

export default function WorkPage() {
  return <WorkPageView />;
}
