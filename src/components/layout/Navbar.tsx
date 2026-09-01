"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/data/siteConfig";

import Magnetic from "@/components/ui/Magnetic";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav
          className="container-site flex items-center justify-between h-16 md:h-20"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 font-[family-name:var(--font-heading)] text-sm md:text-base font-bold tracking-[0.15em] uppercase text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300"
            aria-label="NIVAS.FPV Home"
            data-cursor="HOME"
          >
            NIVAS<span className="text-[var(--color-accent)]">.</span>FPV
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <Magnetic key={link.href} strength={0.2}>
                <Link
                  href={link.href}
                  className="link-underline text-xs font-[family-name:var(--font-heading)] font-medium tracking-[0.12em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 px-2 py-1"
                >
                  {link.label}
                </Link>
              </Magnetic>
            ))}
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-red-500/40 text-xs font-mono tracking-wider text-white/80 hover:text-white transition-all duration-300"
              aria-label="Toggle language between English and Tamil"
              title="Toggle English / தமிழ்"
            >
              <span className={language === "en" ? "text-red-400 font-bold" : "text-white/40"}>EN</span>
              <span className="text-white/20">/</span>
              <span className={language === "ta" ? "text-red-400 font-bold" : "text-white/40"}>தமிழ்</span>
            </button>

            <Magnetic strength={0.3}>
              <Link
                href="/contact"
                className="btn-primary text-[0.6875rem] py-2.5 px-5"
                data-cursor="BOOK"
              >
                {t.navBook}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Magnetic>
          </div>

          {/* Availability Badge - Desktop */}
          <div className="hidden lg:block absolute top-1/2 right-[var(--container-padding)] -translate-y-1/2 pointer-events-none" style={{ right: 'calc(var(--container-padding) + 220px)' }}>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="relative z-50 md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              className="block w-6 h-[1.5px] bg-[var(--color-text-primary)]"
              animate={
                isMobileMenuOpen
                  ? { rotate: 45, y: 5 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-[var(--color-text-primary)]"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-[var(--color-text-primary)]"
              animate={
                isMobileMenuOpen
                  ? { rotate: -45, y: -5 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Fullscreen Cinematic */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#050505]/80 backdrop-blur-3xl flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {siteConfig.navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="heading-lg text-4xl hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-4 flex flex-col items-center gap-4"
              >
                <button
                  onClick={toggleLanguage}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/15 text-sm font-mono tracking-wider text-white"
                  aria-label="Toggle language between English and Tamil"
                >
                  <span className={language === "en" ? "text-red-400 font-bold" : "text-white/50"}>ENGLISH</span>
                  <span className="text-white/20">/</span>
                  <span className={language === "ta" ? "text-red-400 font-bold" : "text-white/50"}>தமிழ்</span>
                </button>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary"
                >
                  {t.navBook} →
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Footer */}
            <motion.div
              className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-text-primary)] transition-colors"
              >
                Instagram
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-[var(--color-text-primary)] transition-colors"
              >
                Email
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
