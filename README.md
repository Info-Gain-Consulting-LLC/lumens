# LUMENS — Luxury Residences in Ruaka, Nairobi

A luxury real estate marketing website for **Ovation Residences Limited**, a premium residential development along the Limuru Super Highway in Ruaka, Nairobi.

**Live Site:** [lumens-ruaka.vercel.app](https://lumens-ruaka.vercel.app)

## Features

- Cinematic hero section with looping video and parallax effect
- Interactive masonry gallery with lightbox, filters, and swipe navigation
- Unit type cards for 1-bedroom and 2-bedroom apartments
- Google Maps integration for location
- Lead capture via Google and LinkedIn OAuth (Supabase Auth)
- Admin dashboard with lead management and CSV export
- Email notifications to admin on new registrations (Resend)
- Full SEO metadata, sitemap, and robots.txt

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router, TypeScript) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Auth + Database | Supabase (Google + LinkedIn OAuth) |
| Email | Resend |
| Hosting | Vercel |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=your_admin_email
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |
| `npm run validate` | Run type-check + lint |

## Project Structure

```
src/
  app/                  Next.js App Router pages
    admin/              Admin dashboard (protected)
    api/notify/         Email notification endpoint
    auth/callback/      OAuth callback handler
  components/           UI components
  data/                 Static data (gallery images)
  lib/supabase/         Supabase client, server, and admin helpers
  types/                TypeScript interfaces
public/
  images/               Property renderings and floor plans
  video/hero.mp4        Hero background video
```

## Deployment

The site auto-deploys to Vercel on push to `main`. See [DEPLOYMENT.md](DEPLOYMENT.md) for full details.

## Developer

**Ovation Residences Limited**
Plot LR No. KIAMBA/RUAKA/7598
Architect: Karenge and Associates (Anthony M. Chege / Peter K. Nganga)
