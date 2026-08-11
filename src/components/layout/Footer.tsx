import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
      <div className="container-site section-padding">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-[0.15em] uppercase"
            >
              NIVAS<span className="text-[var(--color-accent)]">.</span>FPV
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              FPV Drone Cinematographer
              <br />
              Editor
              <br />
              Visual Storyteller
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="heading-sm text-xs mb-6 text-[var(--color-text-muted)]">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-sm text-xs mb-6 text-[var(--color-text-muted)]">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
              >
                Instagram — @{siteConfig.instagram}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-muted)] tracking-[0.05em]">
            © {currentYear} NIVAS.FPV — All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] tracking-[0.05em]">
            {siteConfig.availability}
          </p>
        </div>
      </div>
    </footer>
  );
}
