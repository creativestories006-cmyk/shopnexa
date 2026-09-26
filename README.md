# SHOPNEXA

A cinematic, editorial, selectively-3D product discovery platform — built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP, and React Three Fiber.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before deploying (used for metadata, sitemap, and JSON-LD).

## What's implemented

- **Homepage**: immersive 3D hero (desktop) / lightweight CSS fallback (mobile), kinetic type reveal, trending reel, scroll-pinned featured product story with a drag-to-rotate spin viewer, editorial category index with hover previews, curated discovery blocks, a deliberately flat/fast deals section, buying guides, newsletter, final CTA.
- **Pages**: `/shop` (filterable/sortable full catalog), `/category/[slug]`, `/product/[slug]` (with spec list, comparison table, related products, JSON-LD Product schema), `/trending`, `/deals`, `/guides`, `/guides/[slug]` (long-form article with inline affiliate product embed), `/about`, `/contact`, `/privacy-policy`, `/terms`, `/affiliate-disclosure`.
- **Navigation**: sticky header with full-screen mega-menu (categories), full-screen mobile nav, live product search overlay with popular-search chips and category suggestions.
- **SEO**: per-page metadata via the Metadata API, `sitemap.ts`, `robots.ts`, Product/Article/BreadcrumbList/Organization JSON-LD, `rel="sponsored nofollow"` on all affiliate links.
- **Performance**: Three.js is lazy-loaded (`next/dynamic`, `ssr:false`) and never shipped to mobile viewports; all animation uses GPU-friendly transform/opacity properties; images go through `next/image`.
- **Accessibility**: semantic landmarks, visible focus states, `prefers-reduced-motion` respected globally, custom cursor and cursor-follow effects disabled on touch/mobile automatically.

## Project structure

```
app/            Route segments (App Router)
components/     UI, split into layout / hero / product / category / editorial / discovery / search / ui / shared
data/           Typed placeholder content — products.ts, categories.ts, guides.ts
lib/            types.ts, utils.ts, seo.ts
hooks/          useIsMobile, useCursor, useScrollProgress
styles/         globals.css (design tokens, resets)
```

## Data / backend

All product, category, and guide content currently lives in typed static files under `/data`. Every read goes through a small set of accessor functions (`getProduct`, `getByCategory`, `getTrending`, etc. in `data/products.ts`) — swapping these for real API/database calls later means changing those functions only, not the components that call them.

**Not yet wired to a backend** (intentionally, per the brief — flagged so nothing is silently fake):
- Newsletter signup (`components/shared/Newsletter.tsx`) — form is functional client-side but has no API route to actually send/store the email yet.
- Contact form (`components/shared/ContactForm.tsx`) — same: needs an `/api/contact` route or a form service (e.g. Resend, Formspree) wired in.
- Search (`components/search/SearchOverlay.tsx`) — currently filters the in-memory `products` array. Fine at this catalog size; swap for a real search service (Algolia, Meilisearch, Postgres full-text) once the catalog grows.
- Product/category/guide data itself — static today; swap for a CMS or database-backed API when ready.
- Analytics — no analytics script is included; add your provider of choice in `app/layout.tsx`.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` (and any future backend env vars) in the Vercel project's Environment Variables — never commit real secrets to `.env`.
4. Deploy. No additional config needed; `next.config.ts` already whitelists the placeholder image domains used in `/data`.

When you swap in your own product photography, either keep using `next/image` with `remotePatterns` updated in `next.config.ts`, or move images into `/public/images` and reference them with local paths.
