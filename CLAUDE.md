@AGENTS.md

# LUMENS — Claude Code Project Guide

## Project Overview
Lumens is a luxury real estate marketing website for Ovation Residences Limited, 
a residential development in Ruaka along the Limuru Super Highway, Nairobi.
Designed and built to capture qualified leads via Google/LinkedIn OAuth sign-in.

## Developer & Architect
- Developer: Ovation Residences Limited
- Architect: Karenge and Associates (Anthony M. Chege / Peter K. Nganga)
- Plot: LR No. KIAMBA/RUAKA/7598

## Tech Stack
- Framework: Next.js (App Router, TypeScript)
- Styling: Tailwind CSS
- Auth + DB: Supabase (Google + LinkedIn OAuth)
- Hosting: Vercel
- Animations: Framer Motion

## Design System
- Primary: #2d5a3d (deep forest green)
- Accent: #c9a84c (champagne gold)
- Background: #0d0d0d (near black)
- Text: #f5f0e8 (warm white)
- Fonts: Playfair Display (headings), Inter (body)
- Aesthetic: Dark luxury real estate

## Project Structure
src/
  app/              → Next.js App Router pages
  components/       → All UI components
  lib/supabase/     → Supabase client + server helpers
  styles/           → Global CSS

public/
  video/hero.mp4    → Feature video (looping, muted, autoplay)
  images/           → Renderings and floor plan images

## Units
- 1-Bedroom apartments
- 2-Bedroom apartments
- Pricing: "Contact us for pricing" (no prices shown publicly)

## Key Rules — Always Follow
1. TypeScript strict mode is ON. Run `npm run type-check` after every change.
2. Never use `any` type — always define proper interfaces/types.
3. All components must be fully responsive (mobile-first).
4. Use Tailwind utility classes only — no inline styles.
5. All new components go in src/components/ and must be named in PascalCase.
6. Supabase calls must always handle errors explicitly.
7. No hardcoded secrets — all env vars via .env.local.
8. After every successful feature build, run: npm run type-check && npm run lint
9. Framer Motion for all animations — no CSS keyframe animations.
10. Sections must have correct IDs: #about #gallery #units #location #register

## Production
- URL: https://lumens-ruaka.vercel.app
- Admin: https://lumens-ruaka.vercel.app/admin

## Commands
- Dev server:      npm run dev
- Type check:      npm run type-check
- Lint:            npm run lint
- Build:           npm run build
- Type + Lint:     npm run validate
