import type { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import TrackingLink from '@/components/TrackingLink';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Fort Worth Pool Builder | About Epic Custom Pools',
  description:
    'Epic Custom Pools is a Fort Worth-area pool builder built on direct owner involvement, honest pricing, and craftsmanship that lasts. Learn our story.',
  openGraph: {
    title: 'Fort Worth Pool Builder | About Epic Custom Pools',
    description:
      'When you work with Epic Custom Pools, you deal directly with the owner — the person who designs and builds your pool. Learn what drives us.',
  },
};

const HERO_IMAGE = '/about-pool-v3.jpg';

const ALL_CITIES = [
  'Fort Worth', 'Weatherford', 'Aledo', 'Possum Kingdom',
];

const VALUES = [
  {
    icon: '🤝',
    title: 'Transparency',
    desc: 'You receive honest pricing before you ever pick up the phone. No bait-and-switch, no vague estimates, no surprises at contract signing.',
  },
  {
    icon: '🏗️',
    title: 'Craftsmanship',
    desc: 'Built right the first time. Every material, every detail, every timeline commitment — we hold ourselves to the same standard on every project regardless of budget.',
  },
  {
    icon: '📱',
    title: 'Accountability',
    desc: "You have the owner's personal number. Not a call center, not a project manager you've never met — the person responsible for your pool.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-navy">
        <Image
          src={HERO_IMAGE}
          alt="Children enjoying a custom backyard pool built by Epic Custom Pools"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full py-20">
          <div className="max-w-3xl">
            <p className="font-inter text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              {siteConfig.serviceAreaPhrase}
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Built on Experience. Driven by a Simple Belief: Every Family Deserves a Backyard Worth Coming Home To.
            </h1>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER'S STORY ───────────────────────────────────── */}
      {/*
       * ⚠️  PLACEHOLDER — Before launch, replace this entire section with the
       * owner's real story. Fill in:
       *   - Actual number of years in the pool industry
       *   - Real company names / builders you worked for (if comfortable sharing)
       *   - Personal details that make this feel human and local
       *   - Any milestone moments that led to starting Epic Custom Pools
       * The goal is warmth and authenticity — not a corporate bio.
       */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-8">
            The Founder&apos;s Story
          </h2>
          <div className="space-y-6 font-inter text-gray-600 leading-relaxed text-lg">
            <p>
              Epic Custom Pools was founded by an industry veteran with years of hands-on experience
              building pools across the DFW area. After years of bringing other companies&apos; visions
              to life, he decided it was time to do it under his own name — with his own standards,
              his own accountability, and a direct relationship with every family he serves.
            </p>
            <p>
              When you work with Epic Custom Pools, you&apos;re not handed off to a project manager
              or upsold by a salesperson. You work directly with the person who designs and builds
              your pool. That&apos;s not a tagline. That&apos;s just how we operate.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE MISSION ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <span className="text-teal text-4xl leading-none mt-1 hidden md:block" aria-hidden="true">◈</span>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
                Why We Do This
              </h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-4">
                A pool isn&apos;t a home improvement. It&apos;s where summers happen. It&apos;s where kids
                grow up, where neighbors become friends, where you finally have a reason to stay home on a Friday night.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed">
                Epic Custom Pools exists to help DFW families build those moments. Not just the
                structure — the experience. We take that seriously. Every decision we make, from
                the materials we recommend to the way we communicate during the build, is shaped
                by the belief that you deserve a process as good as the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE STAND FOR ─────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-start bg-gray-50 rounded-xl p-8 border border-gray-100"
              >
                <span className="text-4xl mb-5" aria-hidden="true">{value.icon}</span>
                <h3 className="font-playfair text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA ──────────────────────────────────────── */}
      <section className="bg-navy py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Where We Build
          </h2>
          <p className="font-inter text-white/70 text-center text-lg mb-10 max-w-2xl mx-auto">
            We focus on the DFW west corridor — the communities west and southwest of Fort Worth
            that the owner knows best. If you&apos;re nearby and not on this list, call us anyway.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {ALL_CITIES.map((city) => (
              <span
                key={city}
                className="font-inter text-sm font-semibold text-navy bg-gold px-4 py-2 rounded-full"
              >
                {city}, TX
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-20 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
            Ready to talk?
          </h2>
          <p className="font-inter text-gray-600 text-lg mb-8">
            Let&apos;s design your pool together. No sales pitch — just an honest conversation about what you want to build and what it takes to get there.
          </p>
          <TrackingLink
            href="/consultation"
            eventName="cta_click"
            eventParams={{ button_label: 'Schedule a Free Consultation', page: 'about' }}
            className="inline-flex items-center justify-center bg-navy text-gold font-inter font-bold text-base px-10 py-4 rounded hover:bg-navy/90 transition-colors duration-200"
          >
            Schedule a Free Consultation →
          </TrackingLink>
        </div>
      </section>

      {/* ─── LEAD FORM ─────────────────────────────────────────── */}
      <LeadForm source="about-page" />

      {/* Mobile bottom padding */}
      <div className="md:hidden h-14" aria-hidden="true" />
    </>
  );
}
