import type { Metadata } from "next";
import WorkPageView from "@/components/work/WorkPageView";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Drone Filming & Aerial Cinematography Portfolio | NIVAS.FPV",
  description:
    "Explore drone videography and aerial cinematography projects by Nivas in Theni and across Tamil Nadu — featuring commercial drone films, automotive tracking, real estate aerials, wedding drone videography, and travel films.",
  alternates: { canonical: `${siteConfig.url}/work` },
  openGraph: {
    title: "Drone Filming & Aerial Cinematography Portfolio | NIVAS.FPV",
    description:
      "Explore drone videography and aerial cinematography projects by Nivas in Theni and across Tamil Nadu — featuring commercial drone films, automotive tracking, luxury real estate walkthroughs, and wedding films.",
    url: `${siteConfig.url}/work`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "NIVAS.FPV — Drone Filming & Aerial Cinematography Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone Filming & Aerial Cinematography Portfolio | NIVAS.FPV",
    description:
      "Explore drone videography and aerial cinematography projects by Nivas in Theni and across Tamil Nadu.",
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
      name: "Work",
      item: `${siteConfig.url}/work`,
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <WorkPageView />
    </>
  );
}
