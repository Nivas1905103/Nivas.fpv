"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  location: z.string().optional(),
  projectDate: z.string().optional(),
  budget: z.string().optional(),
  description: z.string().min(10, "Please describe your project briefly"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  "FPV Cinematography",
  "Commercial Film",
  "Real Estate",
  "Automotive",
  "Travel & Hospitality",
  "Event Coverage",
  "Music Video",
  "Brand Film",
  "Video Editing",
  "Other",
];

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000 - ₹5,00,000",
  "₹5,00,000+",
  "Let's discuss",
];

export default function Contact() {
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

      // API-ready: Replace this with actual form submission endpoint
      // e.g., await fetch(process.env.CONTACT_FORM_ENDPOINT, { method: 'POST', body: JSON.stringify(data) })
      console.log("Form data:", data);

      // Simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong. Please try again or contact directly via email.");
    }
  };

  const inputClasses =
    "w-full bg-transparent border-b border-[var(--color-border)] py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300";

  const selectClasses =
    "w-full bg-transparent border-b border-[var(--color-border)] py-3 text-sm text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300 appearance-none";

  return (
    <section id="contact" className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-site">
        <SectionHeading
          label="Contact"
          title="Let's Create Something Impossible."
          subtitle="Have a film, campaign, property or idea that needs a different perspective?"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="heading-md mb-2">Message Sent</h3>
                <p className="body-lg">
                  I&apos;ll review your project details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary mt-8"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Name *"
                      className={inputClasses}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="text-[var(--color-accent)] text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("company")}
                      type="text"
                      placeholder="Company"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Email *"
                      className={inputClasses}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="text-[var(--color-accent)] text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="Phone"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <select
                      {...register("projectType")}
                      className={selectClasses}
                      defaultValue=""
                      aria-invalid={!!errors.projectType}
                    >
                      <option value="" disabled>Project Type *</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                    {errors.projectType && (
                      <p className="text-[var(--color-accent)] text-xs mt-1">{errors.projectType.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("location")}
                      type="text"
                      placeholder="Location"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      {...register("projectDate")}
                      type="text"
                      placeholder="Project Date"
                      className={inputClasses}
                    />
                  </div>
                  <div className="relative">
                    <select
                      {...register("budget")}
                      className={selectClasses}
                      defaultValue=""
                    >
                      <option value="" disabled>Budget Range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
                          {range}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <textarea
                    {...register("description")}
                    placeholder="Tell me about your project *"
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    aria-invalid={!!errors.description}
                  />
                  {errors.description && (
                    <p className="text-[var(--color-accent)] text-xs mt-1">{errors.description.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-[var(--color-accent)] text-sm">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Start a Project"}
                  <span>→</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <span className="tech-label text-[var(--color-text-muted)] block mb-2">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="heading-md text-xl hover:text-[var(--color-accent)] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <span className="tech-label text-[var(--color-text-muted)] block mb-2">
                  WhatsApp
                </span>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="heading-md text-xl hover:text-[var(--color-accent)] transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>

              <div>
                <span className="tech-label text-[var(--color-text-muted)] block mb-2">
                  Instagram
                </span>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="heading-md text-xl hover:text-[var(--color-accent)] transition-colors"
                >
                  @{siteConfig.instagram}
                </a>
              </div>

              <div className="pt-8 border-t border-[var(--color-border)]">
                <span className="tech-label text-[var(--color-text-muted)] block mb-2">
                  Based In
                </span>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  India — Available for travel across all cities
                </p>
              </div>

              <div>
                <span className="tech-label text-[var(--color-text-muted)] block mb-2">
                  Response Time
                </span>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
