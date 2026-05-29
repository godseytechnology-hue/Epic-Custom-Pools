const DEFAULT_CITIES = 'Fort Worth,Aledo,Weatherford,Possum Kingdom,Granbury';

const serviceCities = (process.env.NEXT_PUBLIC_SERVICE_CITIES || DEFAULT_CITIES)
  .split(',')
  .map((c) => c.trim())
  .filter(Boolean);

// IMPORTANT: In Vercel, set NEXT_PUBLIC_SITE_URL=https://epiccustompools.com
// (no www, no trailing slash). This value drives all canonical tags site-wide.
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://epiccustompools.com';

const siteConfig = {
  siteUrl: rawSiteUrl.replace(/\/+$/, ''),
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Epic Custom Pools',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || "Fort Worth's Premier Custom Pool Builder",
  phone: process.env.NEXT_PUBLIC_PHONE || '(817) 313-2034',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@epiccustompools.com',
  address: process.env.NEXT_PUBLIC_ADDRESS || 'Fort Worth, TX',
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || '',
  serviceCities,
  serviceAreaPhrase: serviceCities.join(', ') + ', and surrounding areas',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/consultation' },
  ],
  services: [
    { label: 'Custom Pools', href: '/custom-pools' },
    { label: 'Outdoor Living', href: '/outdoor-living' },
    { label: 'For Home Builders', href: '/home-builders' },
    { label: 'Pricing & Process', href: '/pricing' },
  ],
};

export default siteConfig;
