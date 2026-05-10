import type { Metadata } from 'next';
import Link from 'next/link';
import siteConfig from '@/config/siteConfig';
import LeadForm from '@/components/LeadForm';
import TrackingLink from '@/components/TrackingLink';
import HeroVideoCarousel from '@/components/HeroVideoCarousel';

const OG_IMAGE =
  'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80';

export const metadata: Metadata = {
  title: 'Custom Pool Builder Fort Worth TX | Epic Custom Pools',
  description:
    "Fort Worth's premier custom pool builder and outdoor living contractor. Custom pools, outdoor kitchens, fire pits, and hardscapes. Free consultation.",
  openGraph: {
    title: 'Custom Pool Builder Fort Worth TX | Epic Custom Pools',
    description:
      "Fort Worth's premier custom pool builder. Custom pools, outdoor kitchens, fire pits, and hardscapes across the DFW area.",
    images: [{ url: OG_IMAGE, width: 1200, height: 800, alt: 'Luxury custom pool by Epic Custom Pools' }],
  },
};

const trustItems = [
  { icon: '🤝', label: 'Owner-Operated' },
  { icon: '👤', label: 'You Deal Directly With the Owner' },
  { icon: '💡', label: 'Transparent Pricing' },
  { icon: '🎯', label: 'Free Design Consultation' },
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="4" y="30" width="40" height="10" rx="2" fill="currentColor" opacity="0.15" />
        <path d="M4 35 C10 30 14 33 20 30 C26 27 30 33 36 30 C40 28 43 31 44 33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <rect x="10" y="14" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M18 14 V10 M30 14 V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 32 V38 M38 32 V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Custom Inground Pools',
    href: '/custom-pools',
    desc: 'Fully custom shapes, depths, and finishes built to your exact vision. Any shape, any size — the only material built to last a lifetime in North Texas soil.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="28" width="36" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 28 V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 28 V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="14" width="28" height="8" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="24" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M21 10 Q24 6 27 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M8 36 Q12 33 16 36 Q20 39 24 36 Q28 33 32 36 Q36 39 40 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </svg>
    ),
    title: 'Outdoor Living Spaces',
    href: '/outdoor-living',
    desc: 'Outdoor kitchens, fire pits, pergolas, hardscapes, and entertainment areas — the complete backyard transformation around your pool.',
  },
];

const whyItems = [
  {
    icon: '👷',
    title: 'You Talk Directly To The Owner',
    desc: 'No project managers, no salespeople. You work one-on-one with the owner from the first call through final inspection.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing, Always',
    desc: 'Honest ranges published openly. No "call for a quote" runaround — you know what to expect before we ever meet.',
  },
  {
    icon: '❤️',
    title: 'Built For Families, By Someone Who Cares',
    desc: 'This business was founded to serve DFW families the right way — with craftsmanship, communication, and genuine pride in every build.',
  },
  {
    icon: '📍',
    title: "DFW's Local Expert",
    desc: 'Deep knowledge of Fort Worth\'s soil, permits, and neighborhoods. We build here because we know here.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <HeroVideoCarousel />
        <div className="absolute inset-0 bg-navy/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full py-20">
          <div className="max-w-2xl">
            <p className="font-inter text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              Fort Worth &mdash; DFW
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Where DFW Families Build Epic Memories
            </h1>
            <p className="font-inter text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Owner-operated by a DFW pool industry expert — now serving {siteConfig.serviceAreaPhrase}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <TrackingLink
                href="/consultation"
                eventName="cta_click"
                eventParams={{ button_location: 'hero', destination: '/consultation' }}
                className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-base px-8 py-4 rounded hover:bg-gold-light transition-colors duration-200"
              >
                Get Your Free Design Consultation
              </TrackingLink>
              <TrackingLink
                href="/about"
                eventName="cta_click"
                eventParams={{ button_location: 'hero', destination: '/about' }}
                className="inline-flex items-center justify-center border-2 border-white/40 text-white font-inter font-semibold text-base px-8 py-4 rounded hover:border-white hover:bg-white/5 transition-colors duration-200"
              >
                Our Story
              </TrackingLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. TRUST BAR ────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 rounded-lg border border-gray-100 bg-gray-50"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="font-inter text-navy font-semibold text-sm text-center sm:text-left leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. SERVICES OVERVIEW ────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-inter text-gold font-semibold text-sm tracking-widest uppercase mb-3">
              Our Work
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy">
              What We Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <div className="text-teal mb-5">{s.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                <Link
                  href={s.href}
                  className="mt-6 inline-flex items-center font-inter text-sm font-semibold text-teal hover:text-navy transition-colors gap-1"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. INLINE LEAD FORM ─────────────────────────────── */}
      <LeadForm />

      {/* ─── 5. WHY EPIC CUSTOM POOLS ────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-inter text-gold font-semibold text-sm tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy">
              Why Epic Custom Pools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyItems.map((item) => (
              <div key={item.title} className="flex gap-5 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl flex-shrink-0 mt-1" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CTA BANNER ───────────────────────────────────── */}
      <section className="bg-navy py-20 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold/40 text-5xl select-none" aria-hidden="true">◆</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mt-4 mb-6 leading-tight">
            Every great backyard starts with a conversation.
          </h2>
          <TrackingLink
            href="/consultation"
            eventName="cta_click"
            eventParams={{ button_location: 'cta_banner', destination: '/consultation' }}
            className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-lg px-10 py-4 rounded hover:bg-gold-light transition-colors duration-200"
          >
            Schedule Your Free Consultation
          </TrackingLink>
          <p className="font-inter text-white/40 text-sm mt-6">
            Serving {siteConfig.serviceAreaPhrase}
          </p>
        </div>
      </section>

      {/* Mobile bottom padding so sticky bar doesn't cover the CTA */}
      <div className="md:hidden h-14" aria-hidden="true" />
    </>
  );
}
