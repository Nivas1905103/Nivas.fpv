import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";
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
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/og/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "NIVAS.FPV — Drone Pilot & Aerial Cinematography in Theni, Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og/og-default.jpg`],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
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
      inLanguage: ["en-IN", "ta-IN"],
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#service` },
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: "Nivas",
      url: siteConfig.url,
      jobTitle: "Certified Remote Drone Pilot & Aerial Cinematographer",
      description:
        "DGCA-certified remote drone pilot and aerial cinematographer based in Theni, Tamil Nadu. Specializing in camera-drone filming, DJI Air 3 aerial footage, FPV cinematography, and video editing across Tamil Nadu and India.",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "DGCA Certified Remote Pilot (Small Category)",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Directorate General of Civil Aviation (DGCA) India",
        },
      },
      knowsAbout: [
        "Drone Filming",
        "Aerial Cinematography",
        "Camera-Drone Videography",
        "FPV Drone Cinematography",
        "Commercial Filmmaking",
        "Real Estate Drone Filming",
        "Wedding Drone Videography",
        "Video Editing",
        "Color Grading",
      ],
      sameAs: [siteConfig.instagramUrl],
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/og/og-default.jpg`,
      email: siteConfig.email,
      priceRange: "$$",
      provider: { "@id": `${siteConfig.url}/#person` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Theni",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Theni" },
        { "@type": "AdministrativeArea", name: "Tamil Nadu" },
        { "@type": "City", name: "Madurai" },
        { "@type": "City", name: "Coimbatore" },
        { "@type": "City", name: "Chennai" },
        { "@type": "City", name: "Trichy" },
        { "@type": "City", name: "Salem" },
        { "@type": "City", name: "Tirupur" },
        { "@type": "Country", name: "India" },
      ],
      sameAs: [siteConfig.instagramUrl],
      serviceType: [
        "Drone Services",
        "Aerial Cinematography",
        "Cinematic Drone Videography",
        "FPV Drone Cinematography",
        "Camera-Drone Filming",
        "Commercial Drone Filming",
        "Real Estate Drone Filming",
        "Wedding Drone Videography",
        "Video Editing",
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

        <LanguageProvider>
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>
            <Navbar />

            <main id="main-content">{children}</main>

            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
