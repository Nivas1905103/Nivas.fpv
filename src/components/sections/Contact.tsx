"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

const contactSchema = z.object({
  name: z.string().min(2, "Please provide your name or organization"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  location: z.string().optional(),
  projectDate: z.string().optional(),
  budget: z.string().optional(),
  description: z
    .string()
    .min(10, "Please share a brief description (at least 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  "FPV Cinematography",
  "Commercial Film / Ad",
  "Real Estate & Architecture",
  "Automotive & High-Speed Tracking",
  "Travel & Hospitality",
  "Event & Festival Coverage",
  "Music Video",
  "Indoor Fly-Through",
  "Post-Production & Color Grading",
  "Other Custom Project",
];

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000 - ₹5,00,000",
  "₹5,00,000+",
  "Flexible / To be discussed",
];

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitError("");

      const response = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `[NIVAS.FPV Inquiry] ${data.projectType} — ${data.name}`,
            Name: data.name,
            Email: data.email,
            Company: data.company || "Not provided",
            Phone: data.phone || "Not provided",
            "Project Type": data.projectType,
            Location: data.location || "Not provided",
            "Timeline / Date": data.projectDate || "Not provided",
            "Budget Range": data.budget || "Not provided",
            "Project Brief": data.description,
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError(
          result.message || "Failed to submit enquiry. Please try again or email directly."
        );
      }
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Network error occurred. Please contact directly via email."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-12 pb-24 md:pt-16 md:pb-32 bg-[#050505] overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════
          BACKGROUND AMBIENCE & SUBTLE HUD DECORATIONS
          ═══════════════════════════════════════════════════ */}
      {/* Ambient Red Glow Blooms */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/[0.07] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[400px] bg-red-800/[0.05] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Faint Grid Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Corner HUD Markers */}
      <div
        className="absolute top-12 left-8 text-white/[0.08] font-mono text-[10px] tracking-widest hidden xl:block pointer-events-none select-none"
        aria-hidden="true"
      >
        SYS // COMMS_ONLINE
        <br />
        PORT // 443 [SECURE]
      </div>
      <div
        className="absolute top-12 right-8 text-white/[0.08] font-mono text-[10px] tracking-widest text-right hidden xl:block pointer-events-none select-none"
        aria-hidden="true"
      >
        LOC // INDIA [IST]
        <br />
        STATUS // FLIGHT_READY
      </div>

      <div className="container-site relative z-10 max-w-7xl mx-auto">
        {/* ═══════════════════════════════════════════════════
            1. HERO / HEADING AREA
            ═══════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="flex flex-col items-center text-center mb-14 md:mb-20"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono tracking-[0.2em] uppercase mb-5 shadow-[0_0_25px_rgba(229,9,20,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>{t.contactEyebrow}</span>
          </div>

          {/* Main Fluid Heading */}
          <h1 className="font-heading font-bold uppercase tracking-tight text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.05] text-white max-w-5xl mb-6">
            Let&apos;s Create Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-[var(--color-accent)] drop-shadow-[0_0_35px_rgba(229,9,20,0.3)]">
              Impossible.
            </span>
          </h1>

          {/* Concise Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] font-light max-w-2xl leading-relaxed">
            {t.contactSubtitle}
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════
            2. MAIN COMMAND CENTRE (2-COLUMN ON DESKTOP)
            ═══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ─────────────────────────────────────────────────
              LEFT COLUMN: PREMIUM GLASS FORM CARD (7 COLS)
              ───────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="lg:col-span-7 bg-[#120e0e]/75 backdrop-blur-[18px] border border-white/[0.08] hover:border-white/[0.14] rounded-[1.75rem] p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.04),inset_0_1px_0_rgba(255,255,255,0.08)] relative overflow-hidden transition-colors duration-500"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />

            {/* Form Header Badge */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-5 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                  01 // Project Briefing
                </span>
              </div>
              <span className="text-xs text-[var(--color-text-muted)] font-mono">
                * Required
              </span>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                /* ─── SUCCESS STATE ─── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 px-4 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <svg
                      className="w-8 h-8 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl uppercase text-white mb-3">
                    Enquiry Dispatched
                  </h3>
                  <p className="text-base text-[var(--color-text-secondary)] max-w-md leading-relaxed mb-8 font-light">
                    Your brief has been received. I will review the flight requirements
                    and reach back with availability within 24 hours.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white text-sm font-medium transition-all cursor-pointer"
                  >
                    <span>Submit Another Project</span>
                    <span>→</span>
                  </button>
                </motion.div>
              ) : (
                /* ─── INTERACTIVE FORM ─── */
                <form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-2"
                      >
                        Your Name <span className="text-[var(--color-accent)]">*</span>
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        type="text"
                        placeholder="Alex Morgan"
                        aria-invalid={!!errors.name}
                        className={`w-full bg-white/[0.02] border ${
                          errors.name
                            ? "border-red-500/80 focus:ring-red-500/30"
                            : "border-white/[0.08] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20"
                        } rounded-xl px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:bg-white/[0.04] transition-all duration-200`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1.5 font-sans">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-2"
                      >
                        Company / Brand
                      </label>
                      <input
                        {...register("company")}
                        id="company"
                        type="text"
                        placeholder="Production Co. or Agency"
                        className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20 rounded-xl px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:bg-white/[0.04] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-2"
                      >
                        Email Address <span className="text-[var(--color-accent)]">*</span>
                      </label>
                      <input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="alex@example.com"
                        aria-invalid={!!errors.email}
                        className={`w-full bg-white/[0.02] border ${
                          errors.email
                            ? "border-red-500/80 focus:ring-red-500/30"
                            : "border-white/[0.08] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20"
                        } rounded-xl px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:bg-white/[0.04] transition-all duration-200`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1.5 font-sans">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-2"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        {...register("phone")}
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20 rounded-xl px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:bg-white/[0.04] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 3: Project Type & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-2"
                      >
                        Project Type <span className="text-[var(--color-accent)]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          {...register("projectType")}
                          id="projectType"
                          defaultValue=""
                          aria-invalid={!!errors.projectType}
                          className={`w-full bg-[#120e0e] border ${
                            errors.projectType
                              ? "border-red-500/80 focus:ring-red-500/30"
                              : "border-white/[0.08] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20"
                          } rounded-xl px-4 py-3.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 transition-all duration-200 appearance-none cursor-pointer`}
                        >
                          <option value="" disabled className="text-white/40">
                            Select category...
                          </option>
                          {projectTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                              className="bg-[#181212] text-white py-2"
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                      {errors.projectType && (
                        <p className="text-red-400 text-xs mt-1.5 font-sans">
                          {errors.projectType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-2"
                      >
                        Shoot Location
                      </label>
                      <input
                        {...register("location")}
                        id="location"
                        type="text"
                        placeholder="City, State, or Studio"
                        className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20 rounded-xl px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:bg-white/[0.04] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 4: Project Date & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="projectDate"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-2"
                      >
                        Estimated Timeline
                      </label>
                      <input
                        {...register("projectDate")}
                        id="projectDate"
                        type="text"
                        placeholder="e.g. Next month, Immediate"
                        className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20 rounded-xl px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:bg-white/[0.04] transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-2"
                      >
                        Budget Bracket
                      </label>
                      <div className="relative">
                        <select
                          {...register("budget")}
                          id="budget"
                          defaultValue=""
                          className="w-full bg-[#120e0e] border border-white/[0.08] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20 rounded-xl px-4 py-3.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="text-white/40">
                            Select budget range...
                          </option>
                          {budgetRanges.map((range) => (
                            <option
                              key={range}
                              value={range}
                              className="bg-[#181212] text-white py-2"
                            >
                              {range}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Project Brief Textarea */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-2"
                    >
                      Project Brief & Creative Vision{" "}
                      <span className="text-[var(--color-accent)]">*</span>
                    </label>
                    <textarea
                      {...register("description")}
                      id="description"
                      rows={5}
                      placeholder="Describe the project concept, flight environment (indoor/outdoor, day/night), deliverables, and any specific drone shot requirements..."
                      aria-invalid={!!errors.description}
                      className={`w-full bg-white/[0.02] border ${
                        errors.description
                          ? "border-red-500/80 focus:ring-red-500/30"
                          : "border-white/[0.08] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/20"
                      } rounded-xl px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-white/20 focus:outline-none focus:ring-2 focus:bg-white/[0.04] transition-all duration-200 resize-none`}
                    />
                    {errors.description && (
                      <p className="text-red-400 text-xs mt-1.5 font-sans">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button & Error Display */}
                  <div className="pt-2">
                    {submitError && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs mb-4">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#d90429] via-[var(--color-accent)] to-[#b3001b] hover:from-[#ef233c] hover:to-[#d90429] text-white font-semibold py-4 px-8 shadow-[0_10px_35px_rgba(229,9,20,0.35)] border border-red-400/30 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {/* Button shine animation */}
                      <div className="absolute inset-0 w-1/2 h-full bg-white/15 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span className="tracking-wider uppercase text-sm">
                            Sending Enquiry...
                          </span>
                        </div>
                      ) : (
                        <>
                          <span className="tracking-wider uppercase text-sm">
                            Start a Project
                          </span>
                          <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                            →
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ─────────────────────────────────────────────────
              RIGHT COLUMN: STACKED GLASS CONTACT CARDS (5 COLS)
              ───────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-4 sm:gap-5"
          >
            {/* Card 1: Direct Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group p-6 sm:p-7 rounded-2xl bg-[#120e0e]/70 backdrop-blur-[16px] border border-white/[0.07] hover:border-red-500/40 hover:bg-[#181111]/80 hover:shadow-[0_15px_35px_rgba(229,9,20,0.12)] transition-all duration-300 flex items-start gap-4 sm:gap-5 block"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/70 group-hover:text-red-400 transition-colors shrink-0">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-muted)] block mb-1">
                  Direct Dispatch
                </span>
                <span className="font-sans font-medium text-base sm:text-lg text-white group-hover:text-red-400 transition-colors truncate block">
                  {siteConfig.email}
                </span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 flex items-center gap-1">
                  Click to write email <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </div>
            </a>

            {/* Card 2: Instagram Channel */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-7 rounded-2xl bg-[#120e0e]/70 backdrop-blur-[16px] border border-white/[0.07] hover:border-red-500/40 hover:bg-[#181111]/80 hover:shadow-[0_15px_35px_rgba(229,9,20,0.12)] transition-all duration-300 flex items-start gap-4 sm:gap-5 block"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-white/70 group-hover:text-red-400 transition-colors shrink-0">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-muted)] block mb-1">
                  Visual Logs & BTS
                </span>
                <span className="font-sans font-medium text-base sm:text-lg text-white group-hover:text-red-400 transition-colors truncate block">
                  @{siteConfig.instagram}
                </span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 flex items-center gap-1">
                  Follow on Instagram ↗
                </span>
              </div>
            </a>

            {/* Card 3: Operational Base & Availability */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#120e0e]/70 backdrop-blur-[16px] border border-white/[0.07] flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">
                    Operational Base
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                </div>
                <span className="font-sans font-medium text-base sm:text-lg text-white block">
                  Based in India
                </span>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1 font-light leading-relaxed">
                  Available for productions nationwide & international travel.
                </p>
              </div>
            </div>

            {/* Card 4: Response Turnaround */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#120e0e]/70 backdrop-blur-[16px] border border-white/[0.07] flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/70 shrink-0">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-muted)] block mb-1">
                  Response Turnaround
                </span>
                <span className="font-sans font-medium text-base sm:text-lg text-white block">
                  Within 24 Hours
                </span>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1 font-light leading-relaxed">
                  Fast quote and feasibility assessment for production schedules.
                </p>
              </div>
            </div>

            {/* Card 5: Production Readiness Note */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-xs text-[var(--color-text-muted)] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
              <span>
                DGCA Approved • Custom 5&quot; Cinelifters & DJI Avata 2 • ND Filtration
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
