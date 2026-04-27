import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import { headers } from 'next/headers';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import siteConfig from '@/config/siteConfig';

const TIER_LABELS: Record<string, string> = {
  foundation: 'Foundation Package',
  growth: 'Growth Package',
  authority: 'Authority Package',
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.siteName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description:
    'Epic Custom Pools designs and builds premium custom gunite, fiberglass, and swim spa pools throughout the Fort Worth and DFW area. Get your free design consultation today.',
  keywords: [
    'pool builder Fort Worth TX',
    'gunite pool Fort Worth',
    'fiberglass pool installation DFW',
    'swim spa Fort Worth',
    'custom pool contractor Texas',
    'pool builder Weatherford TX',
  ],
  openGraph: {
    type: 'website',
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} | ${siteConfig.tagline}`,
    description:
      `Premium custom pool design and installation in ${siteConfig.serviceAreaPhrase}`,
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.siteName} | ${siteConfig.tagline}`,
    description:
      'Premium custom pool design and installation in the Fort Worth DFW area.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ga4Id = siteConfig.ga4Id;
  const headersList = headers();
  const previewTier = headersList.get('x-preview-tier');
  const tierLabel = previewTier ? TIER_LABELS[previewTier] : null;

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-white">
        {/* Tier preview banner — only shown when ?tier= flag is active */}
        {tierLabel && (
          <div className="w-full bg-teal text-white text-xs font-inter font-medium text-center py-1.5 px-4 tracking-wide z-50">
            Preview mode: <span className="font-semibold">{tierLabel}</span> · Only content included in this package is shown
          </div>
        )}
        {/* LocalBusiness JSON-LD Schema — placed in body to avoid hydration mismatch */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: siteConfig.siteName,
              description: siteConfig.tagline,
              url: siteConfig.siteUrl,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Fort Worth',
                addressRegion: 'TX',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 32.7555,
                longitude: -97.3308,
              },
              areaServed: siteConfig.serviceCities.map((city) => ({
                '@type': 'City',
                name: city,
              })),
              serviceType: ['Gunite Pool Installation', 'Fiberglass Pool Installation', 'Swim Spa Installation'],
            }),
          }}
        />
        {/* GA4 — only injected when ga4Id is configured */}
        {ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}');
              `}
            </Script>
          </>
        )}

        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}

