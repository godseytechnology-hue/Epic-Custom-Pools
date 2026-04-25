import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PLATFORM_PATHS = [
  '/@vite/client',
  '/__replit_ready',
  '/__replit_runtime',
  '/__replit_vite',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/@fs/') ||
    pathname.startsWith('/__replit') ||
    PLATFORM_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))
  ) {
    return new NextResponse(null, { status: 200 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/@vite/:path*', '/@fs/:path*', '/__replit:path*'],
};
