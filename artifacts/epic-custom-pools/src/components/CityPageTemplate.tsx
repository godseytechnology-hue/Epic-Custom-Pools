import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import FAQSchema, { FAQItem } from '@/components/FAQSchema';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import ScrollReveal from '@/components/ScrollReveal';
import MarqueeTicker from '@/components/MarqueeTicker';
import SectionDivider from '@/components/SectionDivider';
import siteConfig from '@/config/siteConfig';

export type CityPageTemplateProps = {
  cityName: string;
  county: string;
  heroImage?: string;
  heroImageAlt?: string;
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
  faqs?: FAQItem[];
};

const SIBLING_CITIES = [
  { name: 'Fort Worth', slug: 'fort-worth-pool-builder' },
  { name: 'Weatherford', slug: 'weatherford-pool-builder' },
  { name: 'Aledo', slug: 'aledo-pool-builder' },
  { name: 'Possum Kingdom', slug: 'possum-kingdom-pool-builder' },
  { name: 'Granbury', slug: 'granbury-pool-builder' },
];

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
  faqs,
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
          'Custom Pool Installation',
          'Outdoor Living Construction',
          'Custom Pool Design',
        ],
      },
      {
        '@type': 'Service',
        name: `Custom Pool Builder in ${cityName}, TX`,
        description: `Expert custom pool design and outdoor living construction serving ${cityName} and ${county} County, TX.`,
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

  const nearbyCities = SIBLING_CITIES.filter((c) => c.slug !== citySlug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BreadcrumbJsonLd
        siteUrl={siteConfig.siteUrl}
        items={[
          { name: 'Home', href: '/' },
          { name: `Pool Builder ${cityName} TX`, href: `/${citySlug}` },
        ]}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section data-dark-section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy">
        {heroImage && (
          <Image
            src={heroImage}
            alt={heroImageAlt ?? `Custom pool builder ${cityName} TX backyard`}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full py-20">
          <div className="max-w-2xl">
            <div className="mb-5">
              <Image
                src="/logo-icon.webp"
                alt="Epic Custom Pools"
                width={72}
                height={72}
                className="drop-shadow-[0_4px_16px_rgba(26,179,232,0.60)]"
              />
            </div>
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

      <MarqueeTicker />
      <SectionDivider fill="#e1f3fc" bg="#0d2540" variant="wave" height={56} />

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
      <section className="bg-white py-16 px-4 md:px-8">
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
      <section className="bg-white py-16 px-4 md:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-5">
              {poolTypesHeading}
            </h2>
            <p className="font-inter text-gray-600 text-lg leading-relaxed">{poolTypesSection}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/custom-pools"
                className="inline-flex items-center justify-center bg-navy text-white font-inter font-semibold text-sm px-6 py-3 rounded hover:bg-navy/80 transition-colors"
              >
                Custom Pools →
              </Link>
              <Link
                href="/outdoor-living"
                className="inline-flex items-center justify-center border border-navy/20 text-navy font-inter font-semibold text-sm px-6 py-3 rounded hover:bg-navy/5 transition-colors"
              >
                Outdoor Living →
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center border border-navy/20 text-navy font-inter font-semibold text-sm px-6 py-3 rounded hover:bg-navy/5 transition-colors"
              >
                View Pricing →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── OWNER-OPERATED TRUST ─────────────────────────── */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-gold pl-6">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-5">
              Why Owner-Operated Matters
            </h2>
            <p className="font-inter text-gray-700 text-lg leading-relaxed">{ownerOperatedParagraph}</p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      {faqs && faqs.length > 0 && (
        <section className="bg-white py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-inter text-lg font-semibold text-navy mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── INTERNAL LINKS ───────────────────────────────── */}
      <section className="bg-white py-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy rounded-2xl px-8 py-7 flex flex-col sm:flex-row gap-4 justify-center items-center shadow-lg">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-sm px-8 py-3 rounded hover:bg-gold-light transition-colors duration-200"
            >
              View Pricing &amp; Process →
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-inter font-semibold text-sm px-8 py-3 rounded hover:border-white hover:bg-white/5 transition-colors duration-200"
            >
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ALSO SERVING NEARBY ──────────────────────────── */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="font-inter text-sm font-semibold text-gray-400 tracking-widest uppercase text-center mb-5">
            Also Serving Nearby Communities
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {nearbyCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="font-inter text-sm font-semibold text-navy border border-navy/15 bg-navy/5 px-5 py-2 rounded-full hover:bg-navy hover:text-white transition-colors duration-200"
              >
                {city.name} pool builder
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD FORM ────────────────────────────────────── */}
      <LeadForm source={source} defaultCity={defaultCity} />

      {/* Mobile bottom padding */}
      <div className="md:hidden h-14" aria-hidden="true" />

      {faqs && faqs.length > 0 && (
        <FAQSchema id={`faq-schema-${citySlug}`} faqs={faqs} />
      )}
    </>
  );
}
