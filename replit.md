# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

---

## Epic Custom Pools Website

**Artifact**: `artifacts/epic-custom-pools` | **Preview path**: `/` | **Port**: 19724

### About the site
Fort Worth/DFW-area swimming pool contractor website. New business. Sprint-based build approach.

### Tech Stack
- **Framework**: Next.js 14 (App Router, SSR required for local SEO city pages)
- **Styling**: Tailwind CSS 3 with custom brand tokens
- **Fonts**: Playfair Display + Inter via `next/font/google` (self-hosted, CSS variables)
- **Email**: Resend (Sprint 6+)
- **Analytics**: GA4 via `window.gtag` + `trackEvent()` helper
- **SEO**: Built-in Next.js `metadata` export (NOT next-seo — App Router makes it unnecessary)
- **Sitemap**: next-sitemap (post-build step)

### Brand Tokens
- Navy: `#0a1628` (backgrounds, navbar, footer)
- Gold: `#c9a84c` (accents, CTAs, headings)
- Gold Light: `#e8d5a3` (hover states)
- Teal: `#1a6b7a` (secondary accents)

### Site Configuration
All site-wide values live in `src/config/siteConfig.js` and are read from `NEXT_PUBLIC_*` env vars.
Placeholder values are in `.env.example`. Copy to `.env.local` before launch.

Key env vars:
- `NEXT_PUBLIC_SITE_URL` — canonical URL (update before Sprint 7 domain launch)
- `NEXT_PUBLIC_GA4_ID` — Google Analytics 4 measurement ID
- `NEXT_PUBLIC_PHONE` — business phone
- `NEXT_PUBLIC_EMAIL` — business email
- `RESEND_API_KEY` — server-side only, for lead form emails (Sprint 6+)

### Important Files
- `src/config/siteConfig.js` — single source of truth for all site-wide config
- `src/lib/analytics.js` — `trackEvent(eventName, params)` GA4 wrapper
- `src/app/layout.tsx` — root layout: fonts, GA4 script, JSON-LD, Navbar, Footer, MobileBottomBar
- `src/app/globals.css` — Tailwind directives + base styles
- `src/components/Navbar.tsx` — sticky nav (client component: hamburger state)
- `src/components/Footer.tsx` — three-column footer (Services, Cities, Contact)
- `src/components/MobileBottomBar.tsx` — fixed bottom bar, mobile only (md:hidden)
- `next.config.js` — Next.js config, allowedDevOrigins, image remote patterns
- `tailwind.config.js` — brand color tokens, font family variables
- `next-sitemap.config.js` — sitemap generation (runs post-build)

### New Sprint 2 Files
- `src/app/page.tsx` — full homepage (6 sections: Hero, Trust Bar, Services, Lead Form, Why section, CTA)
- `src/app/api/contact/route.ts` — lead form POST handler (Resend email, validates name/phone/city, passes source field)
- `src/app/thank-you/page.tsx` — post-submission confirmation page
- `src/components/LeadForm.tsx` — client component, POSTs to /api/contact, accepts optional `source` prop, redirects on success
- `src/components/TrackingLink.tsx` — client wrapper for GA4 cta_click events on server components
- `src/components/FormSubmitTracker.tsx` — fires form_submit GA4 event on /thank-you mount

### New Sprint 3 Files
- `src/app/gunite-pools/page.tsx` — Gunite Pools service page with hero, educational content, 6 benefits, 6-step process, FAQ
- `src/app/fiberglass-pools/page.tsx` — Fiberglass Pools service page with hero, content, benefits, gunite-vs-fiberglass comparison table, FAQ
- `src/app/swim-spas/page.tsx` — Swim Spas & Hot Tubs service page with hero, content, benefits, swim spa vs pool comparison table, hot tub options, FAQ
- `src/components/ServicePageTemplate.tsx` — reusable template driving all three service page layouts (hero, sections, benefits, process steps, comparison table, lead form, FAQ, internal links)
- `src/components/ServiceJsonLd.tsx` — JSON-LD schema helper rendering LocalBusiness + Service structured data for each service page

### New Sprint 6 Files
- `src/app/gallery/page.tsx` — server component with SEO metadata; renders GalleryClient
- `src/app/gallery/GalleryClient.tsx` — 'use client' component; 18 Unsplash images, client-side category filter (All/Gunite/Fiberglass/Swim Spas/Outdoor Living), hover overlays, lightbox modal (React state, no external lib), CTA section, placeholder note
- `src/app/about/page.tsx` — FULL REWRITE: new hero headline, Founder's Story (⚠️ PLACEHOLDER - personalize before launch), Mission section, 3-value "What We Stand For" (Transparency/Craftsmanship/Accountability), city list, CTA, LeadForm

### Sprint 6 Audit Notes
- `/api/contact/route.ts` has a `⚠️ BEFORE LAUNCH` comment — update `from:` address to a verified Resend domain email before go-live
- `CONTRACTOR_EMAIL` env secret currently set to `godsey.technology@gmail.com` — update to owner's real inbox before launch
- GA4 `trackEvent('form_submit', ...)` fires on LeadForm success. Gallery has `gallery_filter` and `gallery_image_open` events.
- Sitemap includes /gallery at priority 0.8
- 6 footer city links still use href="#" (Aledo, Granbury, Mineral Wells, Benbrook, Brock, Stephenville) — city pages for these are a future task

### Env vars needed for lead form
Add these to `.env.local` to activate email delivery:
```
RESEND_API_KEY=re_...       # from resend.com
CONTRACTOR_EMAIL=you@...    # where leads are delivered (owner's inbox)
FROM_EMAIL=Epic Custom Pools <info@epiccustompools.com>   # verified Resend domain sender; falls back to this value if unset
BCC_EMAIL=godsey.technology@gmail.com                     # silent BCC on every lead email; omit field if unset
```

### Sprint Status
- **Sprint 1** (DONE): Global layout shell — Navbar, Footer, MobileBottomBar, siteConfig, GA4, SEO foundations
- **Sprint 2** (DONE): Full homepage + lead form API (Resend) + /thank-you page
- **Sprint 3** (DONE): Service pages — /gunite-pools, /fiberglass-pools, /swim-spas with full content, lead forms (sourced), JSON-LD schema, SEO metadata
- **Sprint 4** (DONE): /about, /home-builders, /pricing, /consultation pages
- **Sprint 5** (DONE): CityPageTemplate, /fort-worth-pool-builder, /weatherford-pool-builder, Footer city links (8 cities), sitemap.ts
- **Sprint 6** (DONE): /gallery (filterable, lightbox), /about rewrite (Founder's Story placeholder), GA4 on LeadForm, sitemap includes /gallery, email TODO comment, full MVP audit passed
- **Sprint 7** (upcoming): Domain, real photography, 6 remaining city pages, Resend domain verification, go-live
