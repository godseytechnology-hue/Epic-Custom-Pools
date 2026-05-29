/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['*.replit.dev', '*.repl.co', '*.worf.replit.dev'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/gunite-pools', destination: '/custom-pools', permanent: true },
      { source: '/fiberglass-pools', destination: '/custom-pools', permanent: true },
      { source: '/swim-spas', destination: '/custom-pools', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; media-src 'self' https://videos.pexels.com; connect-src 'self' https://www.google-analytics.com; frame-src https://www.lyonfinancial.net; frame-ancestors 'self'" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
