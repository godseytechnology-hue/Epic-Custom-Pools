# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Epic Custom Pools — a Fort Worth/DFW-area swimming pool contractor website. This is a pnpm monorepo containing a Next.js marketing site and an Express API server.

## Key Commands

```bash
# Install dependencies
pnpm install

# Run the Next.js website (port 19724)
pnpm --filter @workspace/epic-custom-pools run dev

# Run the Express API server
pnpm --filter @workspace/api-server run dev

# Full typecheck across all packages
pnpm run typecheck

# Build everything
pnpm run build

# Typecheck a single package
pnpm --filter @workspace/epic-custom-pools run typecheck

# Push DB schema changes (dev only)
pnpm --filter @workspace/db run push

# Regenerate API client hooks and Zod schemas from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen
```

## Monorepo Structure

```
artifacts/
  epic-custom-pools/   — Next.js 14 website (@workspace/epic-custom-pools)
  api-server/          — Express 5 API server (@workspace/api-server)
  mockup-sandbox/      — Vite sandbox for UI mockups
lib/
  db/                  — PostgreSQL schema + Drizzle ORM (@workspace/db)
  api-spec/            — OpenAPI spec + Orval codegen config (@workspace/api-spec)
  api-client-react/    — Generated React Query hooks (@workspace/api-client-react)
  api-zod/             — Generated Zod validation schemas (@workspace/api-zod)
scripts/               — Utility scripts (@workspace/scripts)
```

## API Routing (Important)

In the deployed environment, ALL `/api/*` requests are routed by the application router to the Express API server (port 8080) **before** they reach Next.js (port 19724). The Next.js `src/app/api/` routes exist only for local standalone dev parity. The live handlers live in `artifacts/api-server/src/routes/`.

## Next.js Website (`artifacts/epic-custom-pools`)

**Tech:** Next.js 14 App Router, Tailwind CSS 3, TypeScript

**Brand Tokens** (defined in `tailwind.config.js`):
- Navy `#0d2540` — backgrounds, navbar, footer (token: `navy`)
- Lime green `#7ed321` — primary accents, CTAs (token: `gold` — name is a legacy misnomer)
- Sky blue `#1ab3e8` — water/wave accents (token: `teal`)
- Fonts: Barlow Condensed (`--font-barlow`) + Inter (`--font-inter`)

**Key files:**
- `src/config/siteConfig.js` — single source of truth for phone, email, cities, nav links, services; reads from `NEXT_PUBLIC_*` env vars
- `src/lib/analytics.js` — `trackEvent(eventName, params)` GA4 wrapper
- `src/app/layout.tsx` — root layout: fonts, GA4 script, JSON-LD, Navbar, Footer, MobileBottomBar

**Reusable components:**
- `ServicePageTemplate.tsx` — drives all service page layouts (hero, benefits, process steps, comparison table, lead form, FAQ, internal links)
- `CityPageTemplate.tsx` — drives all city/local SEO landing pages
- `LeadForm.tsx` — client component, POSTs to `/api/contact`, accepts optional `source` prop
- `ServiceJsonLd.tsx` — LocalBusiness + Service JSON-LD structured data

**Routes:**
- `/` — homepage
- `/custom-pools`, `/outdoor-living` — service pages
- `/home-builders`, `/pricing`, `/consultation`, `/about`, `/gallery` — marketing pages
- `/fort-worth-pool-builder`, `/weatherford-pool-builder`, `/aledo-pool-builder`, `/granbury-pool-builder`, `/possum-kingdom-pool-builder` — city SEO landing pages
- `/thank-you` — post-form submission confirmation
- Old service URLs (`/gunite-pools`, `/fiberglass-pools`, `/swim-spas`) permanently redirect to `/custom-pools`

**SEO:** Uses Next.js built-in `metadata` export (not next-seo). `next-sitemap` runs as a post-build step.

## Express API Server (`artifacts/api-server`)

**Tech:** Express 5, Pino logging, TypeScript, esbuild (CJS bundle)

**Routes:**
- `GET /api/health` — health check
- `POST /api/contact` — lead form handler (Resend email delivery)

## Environment Variables

Copy `artifacts/epic-custom-pools/.env.example` to `.env.local` to develop locally.

Key vars:
- `NEXT_PUBLIC_SITE_URL` — canonical URL
- `NEXT_PUBLIC_GA4_ID` — Google Analytics 4 ID
- `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL` — business contact info
- `RESEND_API_KEY` — server-side, for lead form emails
- `CONTRACTOR_EMAIL` — where leads are delivered
- `FROM_EMAIL` — verified Resend domain sender
- `BCC_EMAIL` — silent BCC on every lead email

## Codegen Workflow

`lib/api-spec/openapi.yaml` is the source of truth. After editing it, run:
```bash
pnpm --filter @workspace/api-spec run codegen
```
This regenerates `lib/api-client-react/src/generated/` (React Query hooks) and `lib/api-zod/src/generated/` (Zod schemas). Never manually edit generated files.

## TypeScript Setup

- Root `tsconfig.json` uses project references for the three `lib/` packages
- `tsconfig.base.json` — shared strict settings (no `strictFunctionTypes`, but `strictNullChecks` + `noImplicitAny` are on)
- Each `artifacts/` package has its own `tsconfig.json` extending the base
- Use `zod/v4` imports (not `zod`) for Zod schemas
