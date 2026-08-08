# Nivas FPV - Portfolio Website Agent Guidelines

## Project Context
This is a premium portfolio website for Nivas, an FPV drone pilot. The goal is to showcase high-quality drone footage and services with a stunning, modern, and highly interactive user experience.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion v13)
- **Forms**: React Hook Form + Zod for validation
- **Language**: TypeScript

## Design & UI/UX Guidelines
- **Aesthetics**: Follow a sleek, premium dark-mode aesthetic with glassmorphism, smooth gradients, and vibrant accent colors to make the content pop.
- **Typography**: Use modern, clean sans-serif fonts (e.g., Inter, Roboto, Outfit) optimized for readability.
- **Animations**: Implement subtle micro-animations on hover/focus states, and use scroll-driven animations or View Transitions to give the interface a dynamic and responsive feel.
- **Visuals**: Emphasize high-quality media. Placeholders should be avoided; use `generate_image` if placeholder assets are strictly needed for development.
- **Responsive**: Ensure layouts are fully responsive and optimized across all screen sizes (mobile, tablet, desktop).

## Coding Conventions
- **Components**: Keep components modular, focused, and strictly use Tailwind utility classes or custom design tokens instead of ad-hoc styles.
- **SEO & Accessibility**: Always follow semantic HTML structure, proper ARIA labeling, and standard SEO practices (Title, Meta description, single H1 per page).
- **Forms**: Always utilize `react-hook-form` paired with `zod` for robust client-side validation on any data collection elements (e.g., contact forms).

## Implementation Rules
- **Server/Client Components**: Properly distinguish between Server Components (default) and Client Components (using `"use client"`). Use Client Components only when interactivity (like `motion` animations or hooks) is required.
- **Next.js 16 Paradigms**: Refer to the Next.js 16 App Router documentation for routing, data fetching, and layouts, as it has major differences from older iterations.
