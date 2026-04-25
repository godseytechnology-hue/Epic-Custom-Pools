import type { Metadata } from 'next';
import Link from 'next/link';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Swim Spas & Hot Tubs Fort Worth TX | Year-Round Aquatic Wellness',
  description:
    `Swim spas and hot tubs installed in ${siteConfig.serviceAreaPhrase}. Swim, exercise, and relax year-round in any backyard. Free consultation from Epic Custom Pools.`,
  openGraph: {
    title: 'Swim Spas & Hot Tubs — Year-Round Enjoyment in Any Backyard | Epic Custom Pools',
    description:
      'Epic Custom Pools installs swim spas and hot tubs throughout the Fort Worth and DFW area. Aquatic fitness and relaxation with a smaller footprint.',
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80';

const INSTALLATION_STEPS = [
  {
    step: 1,
    title: 'Site Assessment & Preparation',
    desc: 'We evaluate your yard for access, grade, and electrical panel capacity. Any necessary grading or site clearing happens before delivery.',
  },
  {
    step: 2,
    title: 'Foundation & Pad',
    desc: 'A reinforced concrete pad is poured to the exact dimensions of your unit, creating a level, durable base that supports the full weight of the filled spa.',
  },
  {
    step: 3,
    title: 'Delivery & Crane Placement',
    desc: 'Your swim spa or hot tub is delivered and lifted into position by crane or forklift. Most residential installs are completed in a single day.',
  },
  {
    step: 4,
    title: 'Electrical Hookup (240V)',
    desc: 'A licensed electrician runs a dedicated 240V circuit from your panel to the unit. We coordinate this work to keep your project on schedule.',
  },
  {
    step: 5,
    title: 'Plumbing & Equipment',
    desc: 'All water connections, jets, filtration, and heating equipment are verified and tested before the unit is filled.',
  },
  {
    step: 6,
    title: 'Startup, Orientation & Handoff',
    desc: 'We fill the unit, balance the water chemistry, and walk you through the controls, maintenance schedule, and care routine before we leave.',
  },
];

const extraContent = (
  <>
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-10">
          Hot Tub Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: '2–4 Person Spas',
              desc: 'Intimate soaking spas ideal for couples or small households. Compact footprint fits most patios and decks.',
            },
            {
              title: '5–7 Person Spas',
              desc: 'The most popular size for families. Accommodates a full household with multiple jet zones for different therapy needs.',
            },
            {
              title: 'Swim Spa Combos',
              desc: 'Dual-temperature units with a dedicated swimming zone and a separate hot tub section — two products in one footprint.',
            },
          ].map((opt) => (
            <div
              key={opt.title}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <h3 className="font-playfair text-lg font-bold text-navy mb-3">{opt.title}</h3>
              <p className="font-inter text-gray-600 text-sm leading-relaxed">{opt.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="font-inter text-gray-600 mb-4">
            Not sure which size or configuration is right for your backyard and lifestyle?
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-sm px-8 py-3 rounded hover:bg-gold-light transition-colors duration-200"
          >
            Book a Free Consultation →
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-navy py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Installation Overview
        </h2>
        <p className="font-inter text-white/70 text-center mb-10 max-w-2xl mx-auto">
          Most swim spa and hot tub installations in the Fort Worth area are complete in one to two days. Here is what the process looks like from start to finish.
        </p>
        <div className="space-y-6">
          {INSTALLATION_STEPS.map((s) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <span className="font-playfair font-bold text-navy text-lg">{s.step}</span>
              </div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-white mb-1">{s.title}</h3>
                <p className="font-inter text-white/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default function SwimSpasPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Swim Spa & Hot Tub Installation"
        serviceDescription={`Swim spa and hot tub installation and setup serving ${siteConfig.serviceAreaPhrase}`}
        serviceUrl="/swim-spas"
      />
      <ServicePageTemplate
        heroImage={HERO_IMAGE}
        heroImageAlt="swim spa pool builder Fort Worth TX"
        heroHeadline="Swim Spas & Hot Tubs — Year-Round Enjoyment in Any Backyard"
        heroSubheadline="Swim laps, recover sore muscles, or soak with family — regardless of the season. The perfect aquatic solution for smaller yards and active lifestyles."
        source="swim-spa-page"
        sections={[
        {
          heading: 'What Is a Swim Spa?',
          body: [
            'A swim spa is a self-contained aquatic unit that combines the exercise benefits of a swimming pool with the therapeutic benefits of a hot tub — in a package that fits in backyards where a traditional pool won\'t work. Powerful jets create a continuous current that allows you to swim in place, providing a full workout without needing a 40-foot lap pool.',
            'Modern swim spas are available in lengths from 12 to 20+ feet, with water temperatures independently controlled so you can swim in cool water and soak in hot water using separate chambers. They are fully insulated, energy-efficient, and designed to operate year-round regardless of outdoor temperature.',
            'For Fort Worth families with smaller yards, budget constraints, or a primary interest in fitness and wellness rather than recreation swimming, a swim spa often delivers more value per square foot than any other aquatic investment.',
          ],
        },
        {
          heading: 'Health & Fitness Benefits',
          body: [
            'Swimming is one of the most complete forms of low-impact cardiovascular exercise. The adjustable current in a swim spa lets you tailor the intensity of your workout — from gentle water walking to high-intensity interval training — in the privacy of your own backyard.',
            'The hydrotherapy jets provide targeted relief for sore muscles, joint pain, and stress. Many of our clients with arthritis, athletic injuries, or chronic back pain find regular spa use makes a significant difference in their daily comfort and mobility.',
          ],
        },
      ]}
      benefits={[
        {
          icon: '🏊',
          title: 'Swim Without a Full Pool',
          desc: 'Swim against a powerful adjustable current for a real cardio workout — in a 14-foot unit that fits most backyards.',
        },
        {
          icon: '❄️',
          title: 'Use It Year-Round',
          desc: 'Fully insulated units maintain temperature in any weather. Fort Worth winters are no obstacle for a heated swim spa.',
        },
        {
          icon: '💆',
          title: 'Hydrotherapy Relief',
          desc: 'Targeted massage jets ease joint pain, muscle soreness, and stress. Regular soaking is proven to improve sleep quality.',
        },
        {
          icon: '📐',
          title: 'Fits Smaller Yards',
          desc: 'If your lot won\'t accommodate an in-ground pool, a swim spa delivers aquatic enjoyment in a fraction of the space.',
        },
        {
          icon: '⚡',
          title: 'Fast Installation',
          desc: 'Most swim spa installations are complete in a day or two. No excavation, minimal disruption to your yard.',
        },
        {
          icon: '💰',
          title: 'Lower Cost Than a Pool',
          desc: 'A premium swim spa costs a fraction of a custom in-ground pool, with lower operating costs and simpler maintenance.',
        },
      ]}
      comparisonTable={{
        caption: 'Swim Spa vs. In-Ground Pool',
        leftHeader: 'Swim Spa',
        rightHeader: 'In-Ground Pool',
        rows: [
          { feature: 'Footprint Required', left: '12–20 ft unit', right: '20–50+ ft excavation' },
          { feature: 'Installation Time', left: '1–2 days', right: '2–14 weeks' },
          { feature: 'Year-Round Use', left: 'Yes — fully insulated', right: 'Seasonal in DFW' },
          { feature: 'Lap Swimming', left: 'Yes — via current', right: 'Yes — physical laps' },
          { feature: 'Hydrotherapy Jets', left: 'Extensive', right: 'Attached spa only' },
          { feature: 'Upfront Cost', left: 'Lower', right: 'Higher' },
          { feature: 'Maintenance', left: 'Simple — smaller volume', right: 'More complex' },
          { feature: 'Permits Required', left: 'Typically minimal', right: 'Full permit package' },
          { feature: 'Best For', left: 'Fitness, therapy, smaller yards', right: 'Recreation, entertaining, families' },
        ],
      }}
      extraContent={extraContent}
      faq={[
        {
          question: 'Can a swim spa really replace a swimming pool for exercise?',
          answer: 'For lap swimming and aquatic fitness — yes. The adjustable current lets you swim continuously without turns. For recreational swimming, splashing with kids, or large group entertaining, an in-ground pool has clear advantages. Many of our clients who want both exercise and recreation choose a fiberglass or gunite pool with an attached spa.',
        },
        {
          question: 'How much does a swim spa cost in Fort Worth?',
          answer: 'Quality swim spas in the Fort Worth area range from $20,000 to $50,000+ depending on size, brand, jet configuration, and installation requirements. They represent significant savings over an in-ground pool when the primary use case is fitness or therapeutic soaking.',
        },
        {
          question: 'Do swim spas need permits in Fort Worth?',
          answer: 'Requirements vary by municipality and installation type (above-ground vs. partially in-ground). We handle all permit research and applications for every project we install, so you don\'t have to navigate city requirements on your own.',
        },
        {
          question: 'How much does a swim spa cost to operate monthly?',
          answer: 'Modern insulated swim spas are highly energy-efficient. Most homeowners in Texas see monthly operating costs of $50–$100 for electricity and chemicals, depending on usage frequency and local utility rates — significantly less than heating and maintaining a full in-ground pool.',
        },
      ]}
      />
    </>
  );
}
