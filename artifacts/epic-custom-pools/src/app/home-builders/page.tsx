import type { Metadata } from 'next';
import BuilderLeadForm from '@/components/BuilderLeadForm';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import MarqueeTicker from '@/components/MarqueeTicker';
import SectionDivider from '@/components/SectionDivider';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Builder Pool Contractor Fort Worth TX',
  description:
    'Reliable pool installation partner for home builders in Fort Worth and DFW. Volume pricing, on-time delivery, and warranty. Schedule a call today.',
  alternates: {
    canonical: `${siteConfig.siteUrl}/home-builders`,
  },
  openGraph: {
    title: 'Builder Pool Contractor Fort Worth TX | Epic Custom Pools',
    description:
      'Epic Custom Pools is the pool trade partner Fort Worth builders trust — on-time delivery, volume pricing, full permit handling, and a warranty your buyers will love.',
  },
};

const BUILDER_BENEFITS = [
  {
    icon: '📅',
    title: 'On-Time Delivery',
    desc: 'We build backward from your closing date and commit to a construction schedule in writing. Your buyers move in on time.',
  },
  {
    icon: '💰',
    title: 'Volume Pricing',
    desc: 'Builders who work with us on multiple communities receive preferred scheduling and competitive volume pricing. We want to grow with you.',
  },
  {
    icon: '📞',
    title: 'One Point of Contact',
    desc: 'From permit submission to buyer handover, you deal with one person — not a different sub at every phase. No finger-pointing.',
  },
  {
    icon: '📋',
    title: 'We Handle All Permits',
    desc: 'Our team submits, tracks, and closes pool permits with every relevant city and county across DFW. No burden on your office.',
  },
];

const BUILDER_PROCESS = [
  {
    step: 1,
    title: 'Intro Call',
    desc: 'We discuss your communities, typical lot types, and volume. You get a clear picture of our pricing structure and lead times before committing to anything.',
  },
  {
    step: 2,
    title: 'Scope & Price',
    desc: 'We review your site plans, finalize pool specs and options for each community, and deliver itemized pricing in writing.',
  },
  {
    step: 3,
    title: 'Permitting',
    desc: 'We file all permit applications, track approvals, and keep your project manager informed at every step. Average permit timelines vary by jurisdiction — we know them all.',
  },
  {
    step: 4,
    title: 'Build & Handover',
    desc: 'Our crew handles excavation through final finish. We complete a punch list, pass all inspections, and hand the homeowner a working pool with full documentation.',
  },
];

const PROJECT_TYPES = [
  { label: 'Custom Homes', desc: 'Single-lot custom builds where the pool is part of the original design package.' },
  { label: 'Production Communities', desc: 'Volume pool installation across planned communities with standardized or option-based designs.' },
  { label: 'Spec Homes', desc: 'Pre-built and staged pools for homes hitting the market — designed to photograph well and sell fast.' },
  { label: 'Mixed-Use Residential', desc: 'Townhome communities, HOA amenity pools, and multi-family developments.' },
];

export default function HomeBuildersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        siteUrl={siteConfig.siteUrl}
        items={[
          { name: 'Home', href: '/' },
          { name: 'For Home Builders', href: '/home-builders' },
        ]}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section data-dark-section className="bg-navy py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-inter text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            For Home Builders &amp; Developers
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            A Pool Partner Your Buyers Will Love, and Your Schedule Won&apos;t Fear
          </h1>
          <p className="font-inter text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Epic Custom Pools works with home builders and developers across {siteConfig.serviceAreaPhrase}. We deliver finished pools on schedule, handle every permit, and give your buyers something to brag about.
          </p>
          <a
            href="#builder-form"
            className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-base px-8 py-4 rounded hover:bg-gold-light transition-colors duration-200"
          >
            Start the Conversation →
          </a>
        </div>
      </section>

      <MarqueeTicker />
      <SectionDivider fill="#0d2540" variant="wave" height={56} poolWaterBg />

      {/* ─── WHY BUILDERS CHOOSE US ───────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Why Builders Choose Epic Custom Pools
          </h2>
          <p className="font-inter text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            When a trade partner misses a deadline or delivers a sloppy finish, it reflects on you — not them. Here&apos;s how we make sure that never happens.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUILDER_BENEFITS.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-start bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <span className="text-3xl mb-4" aria-hidden="true">{b.icon}</span>
                <h3 className="font-playfair text-lg font-bold text-navy mb-2">{b.title}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            How It Works for Builders
          </h2>
          <p className="font-inter text-gray-500 text-center mb-14 max-w-2xl mx-auto">
            A straightforward process built around your schedule, not ours.
          </p>
          <div className="space-y-6">
            {BUILDER_PROCESS.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                  <span className="font-playfair font-bold text-white text-lg">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-navy mb-1">{step.title}</h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECT TYPES ────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Communities &amp; Project Types We Support
          </h2>
          <p className="font-inter text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Whether you build one custom home a year or hundreds of lots, we have a model that works for your volume.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROJECT_TYPES.map((pt) => (
              <div key={pt.label} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-playfair text-lg font-bold text-navy mb-2">{pt.label}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── B2B LEAD FORM ────────────────────────────────── */}
      <BuilderLeadForm />
    </>
  );
}
