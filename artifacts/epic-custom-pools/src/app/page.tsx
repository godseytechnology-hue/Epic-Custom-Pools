import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import siteConfig from '@/config/siteConfig';
import LeadForm from '@/components/LeadForm';
import TrackingLink from '@/components/TrackingLink';
import HeroVideoCarousel from '@/components/HeroVideoCarousel';
import ScrollReveal from '@/components/ScrollReveal';

const OG_IMAGE = `${siteConfig.siteUrl}/logo-icon.png`;

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

const LYON_FINANCIAL_URL = 'https://www.lyonfinancial.net/dealer/epic-custom-pools-llc-tx/';

const trustItems = [
  { icon: '🤝', label: 'Owner-Operated', href: null },
  { icon: '👤', label: 'You Deal Directly With the Owner', href: null },
  { icon: '💡', label: 'Transparent Pricing', href: null },
  { icon: '🎯', label: 'Free Design Consultation', href: null },
  { icon: '💳', label: 'Financing Available', href: LYON_FINANCIAL_URL },
];

const services = [
  {
    category: 'Custom Pools',
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
    category: 'Outdoor Living',
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="7" r="4" />
        <path d="M5 21v-1a7 7 0 0 1 14 0v1" />
      </svg>
    ),
    title: 'You Talk Directly To The Owner',
    desc: 'No project managers, no salespeople. You work one-on-one with the owner from the first call through final inspection.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Transparent Pricing, Always',
    desc: 'Honest ranges published openly. No "call for a quote" runaround — you know what to expect before we ever meet.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Built For Families, By Someone Who Cares',
    desc: 'This business was founded to serve DFW families the right way — with craftsmanship, communication, and genuine pride in every build.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "DFW's Local Expert",
    desc: "Deep knowledge of Fort Worth's soil, permits, and neighborhoods. We build here because we know here.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <HeroVideoCarousel className="absolute inset-0 w-full h-full" />

        {/* Gradient overlay — dark at top, fades to transparent */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #060d14 0%, rgba(6,13,20,0.75) 45%, rgba(6,13,20,0.45) 70%, transparent 100%)' }}
        />
        {/* Base tint so video doesn't overpower text */}
        <div className="absolute inset-0 bg-navy/40" />

        {/* Green orb — top right */}
        <div
          className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: 'rgba(126,211,33,0.12)', filter: 'blur(80px)' }}
          aria-hidden="true"
        />
        {/* Blue orb — bottom right */}
        <div
          className="absolute bottom-0 right-1/4 w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{ background: 'rgba(26,179,232,0.10)', filter: 'blur(80px)' }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full py-20">
          <div className="max-w-2xl">

            {/* Logo lockup */}
            <div className="mb-7 animate-word" style={{ animationDelay: '0ms' }}>
              <Image
                src="/logo-icon.png"
                alt="Epic Custom Pools"
                width={84}
                height={84}
                className="drop-shadow-[0_4px_18px_rgba(26,179,232,0.55)]"
                priority
              />
            </div>

            {/* Location badge */}
            <div className="inline-flex items-center gap-2.5 border border-gold/50 text-gold text-xs font-inter font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-7">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 animate-blink" aria-hidden="true" />
              Fort Worth &mdash; DFW
            </div>

            {/* 3-line colored headline with word stagger */}
            <h1 className="font-barlow font-black uppercase leading-[1.0] mb-6" style={{ fontSize: 'clamp(50px, 7.5vw, 84px)', letterSpacing: '-0.02em' }}>
              <span className="block text-white animate-word" style={{ animationDelay: '0ms' }}>
                Where DFW Families
              </span>
              <span className="block text-gold animate-word" style={{ animationDelay: '90ms' }}>
                Build Epic
              </span>
              <span className="block text-teal-light animate-word" style={{ animationDelay: '180ms' }}>
                Memories
              </span>
            </h1>

            <p className="font-inter text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-word" style={{ animationDelay: '280ms' }}>
              Owner-operated by a DFW pool industry expert — now serving {siteConfig.serviceAreaPhrase}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-word" style={{ animationDelay: '360ms' }}>
              <TrackingLink
                href="/consultation"
                eventName="cta_click"
                eventParams={{ button_location: 'hero', destination: '/consultation' }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-gold to-gold-light text-navy font-inter font-bold text-base px-8 py-4 rounded hover:brightness-110 transition-all duration-200"
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

        {/* Water waves — bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-14 z-[5] pointer-events-none" aria-hidden="true">
          <svg
            viewBox="0 0 2880 56"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute bottom-0 animate-wave-1"
            style={{ width: '200%', height: '100%' }}
          >
            <path
              d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 C1680,56 1920,0 2160,28 C2400,56 2640,0 2880,28 L2880,56 L0,56 Z"
              fill="rgba(26,179,232,0.07)"
            />
          </svg>
          <svg
            viewBox="0 0 2880 56"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute bottom-0 animate-wave-2"
            style={{ width: '200%', height: '100%' }}
          >
            <path
              d="M0,42 C360,14 720,52 1080,36 C1440,20 1800,50 2160,34 C2520,18 2760,46 2880,38 L2880,56 L0,56 Z"
              fill="rgba(126,211,33,0.05)"
            />
          </svg>
        </div>
      </section>

      {/* ─── 2. TRUST BAR ────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {trustItems.map((item, i) => {
                const inner = (
                  <>
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                    <span className="font-inter text-navy font-semibold text-sm text-center sm:text-left leading-snug">
                      {item.label}
                    </span>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-stagger flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 rounded-lg border border-gold/30 bg-gold/5 hover:bg-gold/10 transition-colors duration-200"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="animate-stagger flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 rounded-lg border border-gray-100 bg-gray-50"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 3. SERVICES OVERVIEW ────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-4 md:px-8">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-inter text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                Our Work
              </p>
              <h2 className="font-barlow text-5xl md:text-6xl font-black text-navy uppercase" style={{ letterSpacing: '-0.02em' }}>
                What We Build
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group relative flex flex-col border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-[0_8px_40px_rgba(13,37,64,0.10)] hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Left-edge gradient bar animates on hover */}
                  <div className="absolute left-0 top-0 w-[3px] h-0 bg-gradient-to-b from-teal to-gold group-hover:h-full transition-all duration-[400ms] ease-out rounded-l-sm" aria-hidden="true" />

                  {/* Icon / top area */}
                  <div className="relative p-8 pb-4 overflow-hidden">
                    {/* Category pill */}
                    <div className="absolute top-4 right-4 text-[10px] font-inter font-bold tracking-widest uppercase text-teal bg-teal/10 px-2.5 py-1 rounded-full border border-teal/20">
                      {s.category}
                    </div>
                    {/* Shimmer sweep */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(26,179,232,0.04) 50%, transparent 60%)',
                        transform: 'translateX(-100%)',
                        transition: 'transform 1.2s ease',
                      }}
                      aria-hidden="true"
                    />
                    <div className="text-teal mt-2">{s.icon}</div>
                  </div>

                  {/* Text content */}
                  <div className="px-8 pb-8 flex flex-col flex-1">
                    <h3 className="font-barlow text-xl font-black text-navy mb-3 uppercase tracking-wide">
                      {s.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                    <Link
                      href={s.href}
                      className="mt-6 inline-flex items-center font-inter text-sm font-semibold text-teal gap-1.5"
                    >
                      Learn More{' '}
                      <span className="group-hover:translate-x-[5px] transition-transform duration-200" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 4. INLINE LEAD FORM ─────────────────────────────── */}
      <LeadForm />

      {/* ─── 5. WHY EPIC CUSTOM POOLS ────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-inter text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                Why Choose Us
              </p>
              <h2 className="font-barlow text-5xl md:text-6xl font-black text-navy uppercase" style={{ letterSpacing: '-0.02em' }}>
                Why Epic Custom Pools
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyItems.map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-5 p-6 bg-slate-50 rounded-xl border border-gray-200 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_4px_24px_rgba(26,179,232,0.10)] transition-all duration-[250ms]"
                >
                  {/* Icon in rounded teal container */}
                  <div className="flex-shrink-0 mt-0.5 group-hover:-translate-y-[3px] transition-transform duration-[250ms]">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-teal border border-teal/20"
                      style={{ background: 'rgba(26,179,232,0.08)' }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-barlow text-lg font-black text-navy mb-1 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    {/* Animated underline */}
                    <div className="w-0 group-hover:w-9 h-0.5 bg-gradient-to-r from-teal to-gold mb-2 transition-[width] duration-[350ms] ease-out" aria-hidden="true" />
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 6. MEET THE TEAM ────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-4 md:px-8">
        <style>{`
          @keyframes team-link-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(26,179,232,0), 0 0 0 0 rgba(26,179,232,0); }
            50% { box-shadow: 0 0 20px 5px rgba(26,179,232,0.30), inset 0 0 10px 0 rgba(26,179,232,0.06); }
          }
          .team-cta-link { animation: team-link-glow 2.6s ease-in-out infinite; }
        `}</style>
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

              {/* Large logo */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/logo-icon.png"
                  alt="Epic Custom Pools"
                  width={220}
                  height={220}
                  className="drop-shadow-[0_8px_36px_rgba(26,179,232,0.28)]"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="font-inter text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                  The People Behind the Pool
                </p>
                <h2
                  className="font-barlow font-black text-navy uppercase mb-5"
                  style={{ fontSize: 'clamp(34px, 5vw, 56px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
                >
                  Real People.<br />Real Craftsmanship.
                </h2>
                <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                  Epic Custom Pools is a family-first business run by people who genuinely care about the work they do. Come see the faces behind every pool we build.
                </p>
                <div className="group inline-flex">
                  <Link
                    href="/about#meet-the-team"
                    className="team-cta-link inline-flex items-center gap-3 border-2 border-teal text-teal font-inter font-bold text-base px-8 py-4 rounded-lg hover:bg-teal hover:text-navy transition-colors duration-300"
                  >
                    Meet the Team
                    <span className="group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 7. CTA BANNER ───────────────────────────────────── */}
      <section className="relative bg-navy py-20 px-4 md:px-8 text-center overflow-hidden border-t border-border-dark">
        {/* Ripple rings from center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border animate-ripple-slow"
              style={{
                width: 320,
                height: 320,
                marginLeft: -160,
                marginTop: -160,
                borderColor: i % 2 === 0 ? 'rgba(126,211,33,0.12)' : 'rgba(26,179,232,0.10)',
                animationDelay: `${i * 2.33}s`,
              }}
            />
          ))}
        </div>

        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Image src="/logo-icon.png" alt="" width={88} height={88} className="mx-auto opacity-80" aria-hidden="true" />

            <h2 className="font-barlow font-black uppercase leading-tight mt-4 mb-6" style={{ fontSize: 'clamp(38px, 5.5vw, 62px)', letterSpacing: '-0.02em' }}>
              <span className="block text-gradient-green">Every great backyard</span>
              <span className="block text-gradient-blue">starts with a conversation.</span>
            </h2>

            {/* CTA with pulse ring */}
            <div className="inline-flex relative">
              <span className="absolute inset-0 rounded animate-pulse-ring border-2 border-gold pointer-events-none" aria-hidden="true" />
              <TrackingLink
                href="/consultation"
                eventName="cta_click"
                eventParams={{ button_location: 'cta_banner', destination: '/consultation' }}
                className="relative inline-flex items-center justify-center bg-gradient-to-r from-gold to-gold-light text-navy font-inter font-black text-lg uppercase px-10 py-4 rounded hover:brightness-110 transition-all duration-200"
              >
                Schedule Your Free Consultation
              </TrackingLink>
            </div>

            <p className="font-inter text-xs mt-6 tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Serving {siteConfig.serviceAreaPhrase}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Mobile bottom padding so sticky bar doesn't cover the CTA */}
      <div className="md:hidden h-14" aria-hidden="true" />
    </>
  );
}
