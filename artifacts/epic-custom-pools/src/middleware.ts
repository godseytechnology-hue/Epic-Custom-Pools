import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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
