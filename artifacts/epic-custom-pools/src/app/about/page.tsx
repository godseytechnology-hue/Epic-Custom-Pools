import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'About Epic Custom Pools | Fort Worth Pool Builder',
  description: `Learn about Epic Custom Pools — the custom pool builder serving ${siteConfig.serviceAreaPhrase}. Family-owned, design-forward, and built on integrity.`,
  openGraph: {
    title: 'About Epic Custom Pools',
    description: `Family-owned custom pool builder serving ${siteConfig.serviceAreaPhrase}. Get to know the team behind your dream pool.`,
  },
};

const VALUES = [
  {
    icon: '🏗️',
    title: 'Craftsmanship',
    desc: 'Every pool we build is treated as a long-term investment in your home. We do not cut corners on materials, labor, or time.',
  },
  {
    icon: '🤝',
    title: 'Transparency',
    desc: 'No hidden fees, no vague timelines. You receive a detailed proposal and a project schedule at contract signing — and we stick to it.',
  },
  {
    icon: '🌟',
    title: 'Design-Forward',
    desc: 'Your backyard is unique. Our design process starts by listening to how you live, then creating a pool that fits your family and your space.',
  },
  {
    icon: '📞',
    title: 'Responsive Communication',
    desc: 'You will always know who to call. We answer our phones, return messages promptly, and keep you updated throughout your build.',
  },
  {
    icon: '🔑',
    title: 'Turnkey Delivery',
    desc: 'From permits and excavation to finish work and final inspection, we manage every phase so you never have to coordinate multiple contractors.',
  },
  {
    icon: '🌱',
    title: 'Long-Term Relationships',
    desc: 'Our relationship does not end at handover. We are here for warranty support, maintenance questions, and future upgrades.',
  },
];

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1920&q=80';

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Epic Custom Pools team and completed pool project"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/72" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full py-20">
          <div className="max-w-2xl">
            <p className="font-inter text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              {siteConfig.serviceAreaPhrase}
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Built on Integrity. Designed for Life.
            </h1>
            <p className="font-inter text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              We are a family-owned custom pool builder dedicated to delivering exceptional outdoor living spaces — on time, on budget, and exactly as promised.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-base px-8 py-4 rounded hover:bg-gold-light transition-colors duration-200"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ─────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy">Our Story</h2>
          <p className="font-inter text-gray-600 leading-relaxed">
            Epic Custom Pools was founded with a single belief: that building a pool should be one of the most exciting, stress-free experiences a homeowner can have. Too often we heard stories of project delays, surprise charges, and contractors who went silent mid-build. We set out to be the antidote.
          </p>
          <p className="font-inter text-gray-600 leading-relaxed">
            Starting with a small crew and a commitment to doing things right, we have grown into one of the most trusted pool builders serving {siteConfig.serviceAreaPhrase}. Every pool in our portfolio was built by the same team you will meet during your consultation — no subcontracted surprises.
          </p>
          <p className="font-inter text-gray-600 leading-relaxed">
            We specialize in gunite (concrete), fiberglass, and swim spa installations, and we serve residential homeowners as well as home builders and developers who need a reliable trade partner. Whatever the scope, our standard is the same: uncompromising quality and honest communication from design to handover.
          </p>
        </div>
      </section>

      {/* ─── VALUES ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            What We Stand For
          </h2>
          <p className="font-inter text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These are not marketing words — they are the commitments we make to every client before the first shovel breaks ground.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-start bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <span className="text-3xl mb-4" aria-hidden="true">{value.icon}</span>
                <h3 className="font-playfair text-lg font-bold text-navy mb-2">{value.title}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA CALLOUT ──────────────────────────────── */}
      <section className="bg-navy py-16 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Proudly Serving the Region
          </h2>
          <p className="font-inter text-white/80 text-lg leading-relaxed mb-8">
            We build across {siteConfig.serviceAreaPhrase}. If you are unsure whether we cover your area, give us a call — chances are we do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-base px-8 py-4 rounded hover:bg-gold-light transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/gunite-pools"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-inter font-semibold text-base px-8 py-4 rounded hover:border-white hover:bg-white/5 transition-colors duration-200"
            >
              Explore Pool Types
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'How long has Epic Custom Pools been in business?',
                answer:
                  'We have been building custom pools throughout the DFW area for years, completing projects for hundreds of satisfied homeowners and home builders across the region.',
              },
              {
                question: 'Do you handle permits and inspections?',
                answer:
                  'Yes. We manage the entire permitting process on your behalf, including all required inspections. You do not need to coordinate with the city — we handle it.',
              },
              {
                question: `Do you build pools outside of the main service area?`,
                answer: `Our primary service area includes ${siteConfig.serviceAreaPhrase}. We occasionally take projects in adjacent communities — contact us to confirm your location.`,
              },
              {
                question: 'Are you licensed and insured?',
                answer:
                  'Yes. Epic Custom Pools is fully licensed, bonded, and insured. We are happy to provide proof of coverage before any project begins.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-playfair text-lg font-bold text-navy mb-3">{item.question}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD FORM ───────────────────────────────────────── */}
      <LeadForm source="about-page" />

      {/* Mobile bottom padding */}
      <div className="md:hidden h-14" aria-hidden="true" />
    </>
  );
}
