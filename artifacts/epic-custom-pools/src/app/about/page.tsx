import type { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import TrackingLink from '@/components/TrackingLink';
import ScrollReveal from '@/components/ScrollReveal';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import MarqueeTicker from '@/components/MarqueeTicker';
import SectionDivider from '@/components/SectionDivider';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Fort Worth Pool Builder',
  description:
    'Fort Worth pool builder — owner-operated, hands-on from design to finish. You deal directly with the owner on every project. Learn our story.',
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    title: 'About Epic Custom Pools | Fort Worth Pool Builder',
    description:
      'When you work with Epic Custom Pools, you deal directly with the owner — the person who designs and builds your pool. Learn what drives us.',
  },
};

const ALL_CITIES = [
  { name: 'Fort Worth', slug: 'fort-worth-pool-builder' },
  { name: 'Weatherford', slug: 'weatherford-pool-builder' },
  { name: 'Aledo', slug: 'aledo-pool-builder' },
  { name: 'Possum Kingdom', slug: 'possum-kingdom-pool-builder' },
  { name: 'Granbury', slug: 'granbury-pool-builder' },
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
      <BreadcrumbJsonLd
        siteUrl={siteConfig.siteUrl}
        items={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />

      {/* ─── HERO — plain navy, no background image ────────────── */}
      <section data-dark-section className="bg-navy py-24 md:py-32 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="font-inter text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              {siteConfig.serviceAreaPhrase}
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Fort Worth Pool Builder — Built on Experience, Driven by Craftsmanship
            </h1>
          </div>
        </div>
      </section>

      <MarqueeTicker />
      <SectionDivider fill="#e1f3fc" bg="#0d2540" variant="wave" height={56} />

      {/* ─── MEET THE TEAM ─────────────────────────────────────── */}
      <section id="meet-the-team" className="bg-white py-16 md:py-20 px-4 md:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
              Meet the Team
            </h2>
            <p className="font-inter text-gray-600 text-center text-lg mb-10 max-w-2xl mx-auto">
              We believe the pool building process should be as enjoyable as the finished result. Our team is genuinely invested in helping your family create memories that last — and we have a good time doing it.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/team-photo.webp"
                alt="The Epic Custom Pools team — Dana, Jeff, and Billy — at a Fort Worth, TX event"
                width={1080}
                height={1080}
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
              <div className="bg-navy/90 px-6 py-4 flex items-center justify-center gap-2">
                <span className="font-inter text-sm text-white/80 italic">
                  Left to right: Dana, Jeff, and Billy
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── E-E-A-T TRUST SIGNALS ──────────────────────────────── */}
      <section className="bg-teal/5 border-y border-teal/15 py-10 px-4 md:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl" aria-hidden="true">🏗️</span>
                <p className="font-inter font-semibold text-navy text-base">10+ Years in the DFW Pool Industry</p>
                <p className="font-inter text-gray-500 text-sm">Hands-on experience building pools across the Fort Worth area before founding Epic Custom Pools</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl" aria-hidden="true">📍</span>
                <p className="font-inter font-semibold text-navy text-base">Serving the DFW West Corridor</p>
                <p className="font-inter text-gray-500 text-sm">Fort Worth, Weatherford, Aledo, Possum Kingdom, Granbury, and surrounding communities</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <SectionDivider fill="#e1f3fc" bg="#e1f3fc" variant="tilt" height={48} />

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
      <section className="bg-gray-100 py-16 md:py-20 px-4 md:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-8">
              The Founder&apos;s Story
            </h2>
            <div className="space-y-8 font-inter text-gray-600 leading-relaxed text-lg">
              <p>
                Epic Custom Pools was founded by Billy Ford, an industry veteran with years of
                hands-on experience building pools across the area. After years of bringing other
                companies&apos; visions to life, he decided it was time to do it under his own name
                — with his own standards, his own accountability, and a direct relationship with
                every family he serves.
              </p>
              <p>
                Billy knew that serving more families the right way meant building a small,
                hand-picked team around him. Not to grow for growth&apos;s sake — but because the
                standard he holds requires people beside him who hold it just as tightly. That team
                is what makes it possible to reach more families across DFW without the handoffs,
                the upsells, and the impersonal experience that come with a larger operation.
              </p>
              <p>
                When you work with Epic Custom Pools, you work with the founder and the people he
                chose — the ones who design, source, and build your pool from start to finish, and
                who know their name is attached to every project they touch.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <SectionDivider fill="#e1f3fc" bg="#e1f3fc" variant="curve" height={52} />

      {/* ─── THE MISSION ───────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-8">
        <ScrollReveal>
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
        </ScrollReveal>
      </section>

      <SectionDivider fill="#e1f3fc" bg="#e1f3fc" variant="tilt" flipX height={48} />

      {/* ─── WHAT WE STAND FOR ─────────────────────────────────── */}
      <section className="bg-gray-100 py-16 md:py-20 px-4 md:px-8">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-12">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col items-start bg-white rounded-xl p-8 border border-gray-100"
                >
                  <span className="text-4xl mb-5" aria-hidden="true">{value.icon}</span>
                  <h3 className="font-playfair text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <SectionDivider fill="#e1f3fc" bg="#e1f3fc" variant="wave" height={48} />

      {/* ─── SERVICE AREA ──────────────────────────────────────── */}
      <section className="bg-slate-100 py-16 md:py-20 px-4 md:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
              Where We Build
            </h2>
            <p className="font-inter text-gray-600 text-center text-lg mb-6 max-w-2xl mx-auto">
              We focus on the DFW west corridor — the communities west and southwest of Fort Worth
              that the owner knows best. If you&apos;re nearby and not on this list, call us anyway.
            </p>
            <p className="font-inter text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Our primary service area covers <strong>Fort Worth</strong> (Tarrant County), <strong>Weatherford</strong> and <strong>Aledo</strong> (Parker County), <strong>Granbury</strong> (Hood County), and <strong>Possum Kingdom</strong> (Palo Pinto County) — along with the surrounding neighborhoods, acreage communities, and unincorporated areas in between.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {ALL_CITIES.map((city) => (
                <a
                  key={city.name}
                  href={`/${city.slug}`}
                  className="font-inter text-sm font-semibold text-white bg-navy px-4 py-2 rounded-full hover:bg-navy/80 transition-colors"
                >
                  {city.name}, TX
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <SectionDivider fill="#e1f3fc" bg="#e1f3fc" variant="curve" height={48} />

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-8 text-center">
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
