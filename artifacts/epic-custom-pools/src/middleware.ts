import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Tier preview flag system
 *
 * How it works:
 * 1. Visit any page with ?tier=foundation (or growth/authority) to activate a tier preview.
 * 2. Middleware reads the ?tier param, sets a `preview_tier` cookie (24h), AND injects an
 *    `x-preview-tier` request header so server components receive the value on the *same*
 *    request — not just on subsequent ones (cookies() only sees the request's existing cookies).
 * 3. On follow-up page loads (no ?tier in URL), middleware reads the `preview_tier` cookie
 *    and re-injects the `x-preview-tier` header, keeping the flag active across navigation.
 *
 * Server components (Footer, RootLayout) read `x-preview-tier` via Next.js `headers()` —
 * NOT via `cookies()`. This is intentional: it works on both the first and subsequent requests.
 */
const VALID_TIERS = ['foundation', 'growth', 'authority'];

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const tierParam = searchParams.get('tier');

  const existingTier = request.cookies.get('preview_tier')?.value;
  const activeTier =
    tierParam && VALID_TIERS.includes(tierParam)
      ? tierParam
      : existingTier && VALID_TIERS.includes(existingTier)
      ? existingTier
      : null;

  const requestHeaders = new Headers(request.headers);
  if (activeTier) {
    requestHeaders.set('x-preview-tier', activeTier);
  } else {
    requestHeaders.delete('x-preview-tier');
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
