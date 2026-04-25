import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import LeadForm from '@/components/LeadForm';
import siteConfig from '@/config/siteConfig';

export type CityPageTemplateProps = {
  cityName: string;
  county: string;
  heroImage: string;
  heroImageAlt: string;
  headline: string;
  subheadline: string;
  openingParagraphs: string[];
  neighborhoodLabel: string;
  neighborhoods: string[];
  localConsiderationsHeading: string;
  localConsiderations: string;
  poolTypesHeading: string;
  poolTypesSection: string;
  ownerOperatedParagraph: string;
  source: string;
  defaultCity: string;
  citySlug: string;
  geo?: { lat: number; lng: number };
};

export default function CityPageTemplate({
  cityName,
  county,
  heroImage,
  heroImageAlt,
  headline,
  subheadline,
  openingParagraphs,
  neighborhoodLabel,
  neighborhoods,
  localConsiderationsHeading,
  localConsiderations,
  poolTypesHeading,
  poolTypesSection,
  ownerOperatedParagraph,
  source,
  defaultCity,
  citySlug,
  geo,
}: CityPageTemplateProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityName,
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        ...(geo
          ? {
              geo: {
                '@type': 'GeoCoordinates',
                latitude: geo.lat,
                longitude: geo.lng,
              },
            }
          : {}),
        areaServed: [
          { '@type': 'City', name: cityName },
          { '@type': 'AdministrativeArea', name: `${county} County, TX` },
        ],
        serviceType: [
          'Gunite Pool Installation',
          'Fiberglass Pool Installation',
          'Swim Spa Installation',
          'Custom Pool Design',
        ],
      },
      {
        '@type': 'Service',
        name: `Custom Pool Builder in ${cityName}, TX`,
        description: `Expert custom pool design and installation serving ${cityName} and ${county} County, TX. Gunite, fiberglass, and swim spas.`,
        url: `${siteConfig.siteUrl}/${citySlug}`,
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
        },
        areaServed: {
          '@type': 'City',
          name: cityName,
        },
        serviceType: 'Custom Pool Installation',
      },
    ],
  };

  return (
    <>
      <Script
        id={`city-schema-${citySlug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full py-20">
          <div className="max-w-2xl">
            <p className="font-inter text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              {cityName} &mdash; {county} County, TX
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              {headline}
            </h1>
            <p className="font-inter text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-base px-8 py-4 rounded hover:bg-gold-light transition-colors duration-200"
              >
                Get My Free Quote
              </a>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white font-inter font-semibold text-base px-8 py-4 rounded hover:border-white hover:bg-white/5 transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPENING CONTENT ──────────────────────────────── */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-5">
          {openingParagraphs.map((para, i) => (
            <p key={i} className="font-inter text-gray-700 text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ─── NEIGHBORHOODS ────────────────────────────────── */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            {neighborhoodLabel}
          </h2>
          <p className="font-inter text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            If you live, build, or own property in any of these areas, we&apos;re your local pool contractor.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="font-inter text-sm font-semibold text-navy bg-white border border-navy/10 px-5 py-2.5 rounded-full shadow-sm"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCAL CONSIDERATIONS ─────────────────────────── */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-5">
            {localConsiderationsHeading}
          </h2>
          <p className="font-inter text-gray-600 text-lg leading-relaxed">{localConsiderations}</p>
        </div>
      </section>

      {/* ─── POOL TYPES ───────────────────────────────────── */}
      <section className="bg-navy py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-5">
            {poolTypesHeading}
          </h2>
          <p className="font-inter text-white/75 text-lg leading-relaxed">{poolTypesSection}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/gunite-pools"
              className="inline-flex items-center justify-center bg-gold text-navy font-inter font-semibold text-sm px-6 py-3 rounded hover:bg-gold-light transition-colors"
            >
              Gunite Pools →
            </Link>
            <Link
              href="/fiberglass-pools"
              className="inline-flex items-center justify-center border border-white/30 text-white font-inter font-semibold text-sm px-6 py-3 rounded hover:bg-white/10 transition-colors"
            >
              Fiberglass Pools →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-white/30 text-white font-inter font-semibold text-sm px-6 py-3 rounded hover:bg-white/10 transition-colors"
            >
              View Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OWNER-OPERATED TRUST ─────────────────────────── */}
      <section className="bg-gold/5 border-y border-gold/20 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-5">
            Why Owner-Operated Matters
          </h2>
          <p className="font-inter text-gray-700 text-lg leading-relaxed">{ownerOperatedParagraph}</p>
        </div>
      </section>

      {/* ─── INTERNAL LINKS ───────────────────────────────── */}
      <section className="bg-gray-50 py-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center bg-navy text-white font-inter font-semibold text-sm px-8 py-3 rounded hover:bg-navy/80 transition-colors duration-200"
          >
            View Pricing &amp; Process →
          </Link>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center border-2 border-navy text-navy font-inter font-semibold text-sm px-8 py-3 rounded hover:bg-navy hover:text-white transition-colors duration-200"
          >
            Book Free Consultation →
          </Link>
        </div>
      </section>

      {/* ─── LEAD FORM ────────────────────────────────────── */}
      <LeadForm source={source} defaultCity={defaultCity} />

      {/* Mobile bottom padding */}
      <div className="md:hidden h-14" aria-hidden="true" />
    </>
  );
}
