import type { Metadata } from "next";
import AboutPageView from "@/components/about/AboutPageView";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Nivas | Certified Drone Pilot & Aerial Cinematographer in Theni",
  description:
    "Learn about Nivas, a DGCA-certified remote drone pilot based in Theni, Tamil Nadu. Specializing in cinematic aerial filming, DJI Air 3 camera-drone footage, high-speed FPV cinematography, and commercial video production across Tamil Nadu & India.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About Nivas | Certified Drone Pilot & Aerial Cinematographer in Theni",
    description:
      "DGCA-certified remote drone pilot based in Theni, Tamil Nadu. Specializing in cinematic aerial filming, DJI Air 3 camera-drone footage, and high-speed FPV cinematography across Tamil Nadu & India.",
    url: `${siteConfig.url}/about`,
    type: "profile",
    images: [
      {
        url: `${siteConfig.url}/images/about/nivas-fpv-enhanced.jpg`,
        width: 1200,
        height: 630,
        alt: "Nivas - Certified Drone Pilot & Aerial Cinematographer in Theni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nivas | Certified Drone Pilot & Aerial Cinematographer in Theni",
    description:
      "DGCA-certified remote drone pilot based in Theni, Tamil Nadu. Specializing in cinematic aerial filming, DJI Air 3 camera-drone footage, and high-speed FPV cinematography.",
    images: [`${siteConfig.url}/images/about/nivas-fpv-enhanced.jpg`],
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
      name: "About",
      item: `${siteConfig.url}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutPageView />
    </>
  );
}
