import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Hire Drone Pilot in Theni | Contact NIVAS.FPV",
  description:
    "Enquire about hiring a certified drone pilot in Theni, Tamil Nadu. Available for cinematic aerial filming, commercial drone videography, DJI Air 3 shoots, and FPV drone filming across Tamil Nadu and India.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Hire Drone Pilot in Theni | Contact NIVAS.FPV",
    description:
      "Enquire about hiring a certified drone pilot in Theni, Tamil Nadu. Available for cinematic aerial filming, commercial drone videography, DJI Air 3 shoots, and FPV drone filming across Tamil Nadu and India.",
    url: `${siteConfig.url}/contact`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Hire Drone Pilot in Theni — Contact NIVAS.FPV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Drone Pilot in Theni | Contact NIVAS.FPV",
    description:
      "Enquire about hiring a certified drone pilot in Theni, Tamil Nadu for aerial cinematography and drone filming.",
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
      name: "Contact",
      item: `${siteConfig.url}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
}
