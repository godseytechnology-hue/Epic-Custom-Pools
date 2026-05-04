import { MetadataRoute } from 'next';
import siteConfig from '@/config/siteConfig';

const BASE = siteConfig.siteUrl;
const NOW = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: '/', priority: 1.0 },
    { url: '/gunite-pools', priority: 0.9 },
    { url: '/outdoor-living', priority: 0.9 },
    { url: '/pricing', priority: 0.9 },
    { url: '/consultation', priority: 0.9 },
    { url: '/fort-worth-pool-builder', priority: 0.95 },
    { url: '/weatherford-pool-builder', priority: 0.85 },
    { url: '/gallery', priority: 0.8 },
    { url: '/about', priority: 0.7 },
    { url: '/home-builders', priority: 0.75 },
  ];

  return pages.map(({ url, priority }) => ({
    url: `${BASE}${url}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority,
  }));
}
