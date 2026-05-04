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
      { source: '/fiberglass-pools', destination: '/gunite-pools', permanent: true },
      { source: '/swim-spas', destination: '/gunite-pools', permanent: true },
    ];
  },
};

module.exports = nextConfig;
