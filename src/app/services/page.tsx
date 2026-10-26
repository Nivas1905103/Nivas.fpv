import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Drone Filming & Aerial Cinematography Services in Theni | NIVAS.FPV",
  description:
    "Professional drone services in Theni and Tamil Nadu: cinematic camera-drone videography, DJI Air 3 aerial footage, dynamic FPV drone filming, real estate walkthroughs, commercial video production, and editing.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: "Drone Filming & Aerial Cinematography Services in Theni | NIVAS.FPV",
    description:
      "Professional drone services in Theni and Tamil Nadu: cinematic camera-drone videography, DJI Air 3 footage, dynamic FPV drone filming, and commercial video production.",
    url: `${siteConfig.url}/services`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Drone Services & Aerial Cinematography in Theni — NIVAS.FPV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone Filming & Aerial Cinematography Services in Theni | NIVAS.FPV",
    description:
      "Professional drone services in Theni and Tamil Nadu: cinematic camera-drone videography, DJI Air 3 aerial footage, and FPV drone filming.",
    images: [`${siteConfig.url}/images/og/og-default.jpg`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteConfig.url}/services`,
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-[#050505] pt-20">
        <Services />
      </main>
    </>
  );
}
