# Epic Custom Pools – Workspace

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
- **Fonts**: Barlow Condensed + Inter via `next/font/google` (self-hosted, CSS variables)
- **Email**: Resend (Sprint 6+)
- **Analytics**: GA4 via `window.gtag` + `trackEvent()` helper
- **SEO**: Built-in Next.js `metadata` export (NOT next-seo — App Router makes it unnecessary)
- **Sitemap**: next-sitemap (post-build step)

### Brand Tokens
- Navy: `#0d2540` (backgrounds, navbar, footer) — token: `navy`
- Lime green: `#7ed321` (accents, CTAs) — token: `gold` (legacy name, it's actually lime green)
- Lime green light: `#a8e63a` (hover states) — token: `gold-light`
- Sky blue: `#1ab3e8` (water/wave accents) — token: `teal`

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
- `src/app/custom-pools/page.tsx` — Custom Pools service page (gunite focus) with hero, educational content, benefits, process, FAQ
- `src/app/outdoor-living/page.tsx` — Outdoor Living service page with hero, content, benefits, FAQ
- `src/components/ServicePageTemplate.tsx` — reusable template driving all service page layouts (hero, sections, benefits, process steps, comparison table, lead form, FAQ, internal links)
- `src/components/ServiceJsonLd.tsx` — JSON-LD schema helper rendering LocalBusiness + Service structured data for each service page

Note: `/gunite-pools`, `/fiberglass-pools`, and `/swim-spas` are 301 redirects to `/custom-pools` (see `next.config.js`).

### New Sprint 6 Files
- `src/app/about/page.tsx` — FULL REWRITE: new hero headline, Founder's Story (⚠️ PLACEHOLDER - personalize before launch), Mission section, 3-value "What We Stand For" (Transparency/Craftsmanship/Accountability), city list, CTA, LeadForm

Note: `/gallery` was built in Sprint 6 but has since been removed from the codebase.

### Sprint 6 Audit Notes
- `/api/contact/route.ts` has a `⚠️ BEFORE LAUNCH` comment — update `from:` address to a verified Resend domain email before go-live
- `CONTRACTOR_EMAIL` env secret updated to the owner's real business inbox (was `godsey.technology@gmail.com`)
- GA4 `trackEvent('form_submit', ...)` fires on LeadForm success
- Sitemap is now handled by `src/app/sitemap.ts` (Next.js 14 built-in); `next-sitemap.config.js` also exists but is partially stale (still references old redirected routes)
- Footer city links for Aledo, Granbury, and Possum Kingdom now point to real pages; Mineral Wells, Benbrook, Brock, Stephenville still need city pages

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
- **Sprint 6** (DONE): /about rewrite (Founder's Story placeholder), GA4 on LeadForm, email TODO comment, full MVP audit passed; /gallery was built then removed
- **Sprint 7** (IN PROGRESS): Domain live (epiccustompools.com), real photography, 4 remaining city pages (Mineral Wells, Benbrook, Brock, Stephenville), Resend domain verification
