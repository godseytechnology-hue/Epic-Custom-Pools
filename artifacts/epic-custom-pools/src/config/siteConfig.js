const DEFAULT_CITIES = 'Fort Worth,Aledo,Weatherford,Mineral Wells,Possum Kingdom Lake';

const serviceCities = (process.env.NEXT_PUBLIC_SERVICE_CITIES || DEFAULT_CITIES)
  .split(',')
  .map((c) => c.trim())
  .filter(Boolean);

const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://epiccustompools.com',
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Epic Custom Pools',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || "Fort Worth's Premier Custom Pool Builder",
  phone: process.env.NEXT_PUBLIC_PHONE || '(817) 555-0100',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@epiccustompools.com',
  address: process.env.NEXT_PUBLIC_ADDRESS || 'Fort Worth, TX',
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || '',
  serviceCities,
  serviceAreaPhrase: serviceCities.join(', ') + ', and surrounding areas',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/consultation' },
  ],
  services: [
    { label: 'Gunite Pools', href: '/gunite-pools' },
    { label: 'Outdoor Living', href: '/outdoor-living' },
    { label: 'For Home Builders', href: '/home-builders' },
    { label: 'Pricing & Process', href: '/pricing' },
    { label: 'Aledo', href: '/aledo-pool-builder' },
    { label: 'Possum Kingdom Lake', href: '/possum-kingdom-pool-builder' },
  ],
};

export default siteConfig;
