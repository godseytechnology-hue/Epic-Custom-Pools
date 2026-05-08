/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://epiccustompools.com',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/thank-you'],
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/custom-pools': 0.9,
      '/fiberglass-pools': 0.9,
      '/swim-spas': 0.9,
      '/pricing': 0.9,
      '/consultation': 0.85,
      '/gallery': 0.8,
      '/about': 0.7,
      '/home-builders': 0.85,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
