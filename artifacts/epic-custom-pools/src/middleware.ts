import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Tier preview flag system
 *
 * How it works:
 * 1. Visit any page with ?tier=foundation (or growth/authority) to activate an explicit preview.
 * 2. Middleware reads the ?tier param, sets a `preview_tier` cookie (24h), AND injects an
 *    `x-preview-tier` request header so server components receive the value on the *same*
 *    request — not just on subsequent ones (cookies() only sees the request's existing cookies).
 * 3. On follow-up page loads (no ?tier in URL), middleware reads the `preview_tier` cookie
 *    and re-injects `x-preview-tier`, keeping the flag active across navigation.
 * 4. DEFAULT_TIER env var: if set (e.g. DEFAULT_TIER=foundation), it acts as the lowest-priority
 *    fallback so the entire site silently defaults to that tier without any URL param needed.
 *    This is the mechanism used on the production deployment — Foundation content is always on.
 *    When DEFAULT_TIER is the sole source of the active tier, the preview banner is NOT shown
 *    (real visitors shouldn't see a "preview mode" notice).
 *
 * Server components (Footer, RootLayout) read `x-preview-tier` via Next.js `headers()` —
 * NOT via `cookies()`. This is intentional: it works on both the first and subsequent requests.
 *
 * `x-preview-tier-explicit` is set only when the tier came from a URL param or cookie
 * (i.e. a deliberate override). The layout uses this to decide whether to show the banner.
 */
const VALID_TIERS = ['foundation', 'growth', 'authority'];

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const tierParam = searchParams.get('tier');

  const existingTier = request.cookies.get('preview_tier')?.value;
  const defaultTier = process.env.DEFAULT_TIER;

  const fromExplicit =
    (tierParam && VALID_TIERS.includes(tierParam)) ||
    (existingTier && VALID_TIERS.includes(existingTier));

  const activeTier =
    tierParam && VALID_TIERS.includes(tierParam)
      ? tierParam
      : existingTier && VALID_TIERS.includes(existingTier)
      ? existingTier
      : defaultTier && VALID_TIERS.includes(defaultTier)
      ? defaultTier
      : null;

  const requestHeaders = new Headers(request.headers);
  if (activeTier) {
    requestHeaders.set('x-preview-tier', activeTier);
    if (fromExplicit) {
      requestHeaders.set('x-preview-tier-explicit', '1');
    } else {
      requestHeaders.delete('x-preview-tier-explicit');
    }
  } else {
    requestHeaders.delete('x-preview-tier');
    requestHeaders.delete('x-preview-tier-explicit');
  }

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (tierParam && VALID_TIERS.includes(tierParam)) {
    response.cookies.set('preview_tier', tierParam, {
      path: '/',
      maxAge: 60 * 60 * 24,
      httpOnly: false,
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
