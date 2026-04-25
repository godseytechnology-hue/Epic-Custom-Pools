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
- `src/app/api/contact/route.ts` — lead form POST handler (Resend email, validates name/phone/city)
- `src/app/thank-you/page.tsx` — post-submission confirmation page
- `src/components/LeadForm.tsx` — client component, POSTs to /api/contact, redirects on success
- `src/components/TrackingLink.tsx` — client wrapper for GA4 cta_click events on server components
- `src/components/FormSubmitTracker.tsx` — fires form_submit GA4 event on /thank-you mount

### Env vars needed for lead form
Add these to `.env.local` to activate email delivery:
```
RESEND_API_KEY=re_...       # from resend.com
CONTRACTOR_EMAIL=you@...    # where leads are delivered
```

### Sprint Status
- **Sprint 1** (DONE): Global layout shell — Navbar, Footer, MobileBottomBar, siteConfig, GA4, SEO foundations
- **Sprint 2** (DONE): Full homepage + lead form API (Resend) + /thank-you page
- **Sprint 3** (pending): Service pages (Gunite, Fiberglass, Swim Spas, Home Builders)
- **Sprint 4** (pending): Local SEO city pages (Fort Worth, Weatherford, Aledo, etc.)
- **Sprint 5** (pending): Gallery, About, Pricing pages
- **Sprint 6** (pending): Consultation/lead form + Resend email integration
- **Sprint 7** (pending): Domain, deployment, performance, analytics
