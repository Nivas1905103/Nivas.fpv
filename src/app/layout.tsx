import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { siteConfig } from "@/data/siteConfig";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: "Nivas", url: siteConfig.url }],
  creator: "Nivas",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "NIVAS.FPV — FPV Drone Cinematographer & Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: "Nivas",
      url: siteConfig.url,
      jobTitle: "FPV Drone Cinematographer & Video Editor",
      description:
        "Professional FPV drone cinematographer and video editor specializing in commercial films, brand campaigns, real estate, automotive, and travel cinematography across India.",
      knowsAbout: [
        "FPV Drone Cinematography",
        "Video Editing",
        "Color Grading",
        "Aerial Cinematography",
        "Commercial Filmmaking",
      ],
      sameAs: [siteConfig.instagramUrl],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      provider: { "@id": `${siteConfig.url}/#person` },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceType: [
        "FPV Drone Cinematography",
        "Aerial Cinematography",
        "Video Editing",
        "Commercial Filming",
        "Real Estate Cinematography",
        "Automotive Cinematography",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] film-grain">
        {/* Skip to Content - Accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>

        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          <Navbar />

          <main id="main-content">{children}</main>

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
