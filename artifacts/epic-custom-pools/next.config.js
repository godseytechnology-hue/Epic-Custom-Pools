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
        ],
      },
    ];
  },
};

module.exports = nextConfig;
