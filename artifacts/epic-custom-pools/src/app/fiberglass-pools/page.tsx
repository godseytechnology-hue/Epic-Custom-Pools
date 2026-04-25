import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import ServiceJsonLd from '@/components/ServiceJsonLd';

const FIBERGLASS_MODELS = [
  {
    name: 'Rectangle & Lap Pools',
    desc: 'Clean geometric lines ideal for swimming laps, water aerobics, and backyards with a modern aesthetic.',
    tag: 'Most popular for fitness',
  },
  {
    name: 'Freeform & Lagoon Shapes',
    desc: 'Organic curves that mimic natural ponds or tropical lagoons — great for naturalistic landscaping.',
    tag: 'Most popular for families',
  },
  {
    name: 'Plunge Pools',
    desc: 'Deep, compact designs that maximize depth over square footage — perfect for smaller urban yards.',
    tag: 'Best for small lots',
  },
  {
    name: 'Tanning Ledge Pools',
    desc: 'Built-in shallow sun shelf at entry level — perfect for lounge chairs, kids, and pets.',
    tag: 'Most requested feature',
  },
  {
    name: 'Spa Combo Pools',
    desc: 'Pools with an integrated attached spa, sharing heating and filtration equipment.',
    tag: 'Great for year-round use',
  },
  {
    name: 'Sport & Activity Pools',
    desc: 'Wider bodies with minimal depth variation — designed for volleyball, basketball, and active play.',
    tag: 'Best for active households',
  },
];

const fiberglassExtraContent = (
  <section className="bg-gray-50 py-16 px-4 md:px-8">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
        Fiberglass Pool Models Overview
      </h2>
      <p className="font-inter text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        We work with leading fiberglass manufacturers to offer a wide selection of shapes and configurations. Here is a snapshot of the most popular model categories — we&apos;ll match the right shell to your yard and lifestyle during your consultation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FIBERGLASS_MODELS.map((model) => (
          <div key={model.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <span className="inline-block bg-gold/10 text-gold font-inter text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {model.tag}
            </span>
            <h3 className="font-playfair text-lg font-bold text-navy mb-2">{model.name}</h3>
            <p className="font-inter text-gray-600 text-sm leading-relaxed">{model.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const metadata: Metadata = {
  title: 'Fiberglass Pools Fort Worth TX | Fast Install, Low Maintenance',
  description:
    'Fiberglass pool installation in Fort Worth, Weatherford, Aledo, and DFW. Faster install, lower maintenance, smooth finish. Get your free quote from Epic Custom Pools.',
  openGraph: {
    title: 'Fiberglass Pools — Faster Install, Lower Maintenance | Epic Custom Pools',
    description:
      'Epic Custom Pools installs premium fiberglass swimming pools across Fort Worth and DFW. Beautiful, low-maintenance pools ready to enjoy faster.',
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=1920&q=80';

export default function FiberglassPoolsPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Fiberglass Pool Installation"
        serviceDescription="Fiberglass swimming pool installation serving Fort Worth, Weatherford, Aledo, Granbury, and surrounding DFW communities."
        serviceUrl="/fiberglass-pools"
      />
      <ServicePageTemplate
        heroImage={HERO_IMAGE}
        heroImageAlt="fiberglass pool builder Fort Worth TX"
        heroHeadline="Fiberglass Pools — Faster Install, Lower Maintenance"
        heroSubheadline="A beautiful, smooth-surface pool delivered and installed in a fraction of the time — with less chemical use and less upkeep than concrete."
        source="fiberglass-page"
      sections={[
        {
          heading: 'What Is a Fiberglass Pool?',
          body: [
            'Fiberglass pools are one-piece shells manufactured in a factory-controlled environment and delivered to your home on a truck. Our team then excavates your yard, prepares the base, and sets the shell in place — a process that typically takes just a few days versus the weeks required for a gunite build.',
            'The interior surface of a fiberglass pool is a smooth, non-porous gelcoat finish. Unlike plaster, it will not harbor algae, which means your pool needs significantly fewer chemicals and far less brushing to stay crystal clear.',
            'Modern fiberglass pools come in dozens of shapes, sizes, and built-in feature options — including tanning ledges, love seats, steps, and integrated spas. While they are not as infinitely customizable as gunite, the quality and appearance of today\'s fiberglass shells are remarkable.',
          ],
        },
        {
          heading: 'Is Fiberglass Right for My Fort Worth Home?',
          body: [
            'Fiberglass is an excellent choice for homeowners who want a beautiful, ready-to-swim pool with minimal ongoing maintenance. The faster installation timeline and lower chemical costs make it a compelling value over the long run.',
            'In the Fort Worth area, fiberglass pools are a strong fit for standard-sized residential yards where a pre-engineered shape works well. If your yard is large and you want a truly custom shape or depth beyond what a shell offers, gunite may be the better fit — we\'ll walk you through the comparison in your consultation.',
          ],
        },
      ]}
      benefits={[
        {
          icon: '⚡',
          title: 'Faster Installation',
          desc: 'Most fiberglass installs are complete in 2–4 weeks — far quicker than a gunite build. You\'re swimming sooner.',
        },
        {
          icon: '🧹',
          title: 'Lower Maintenance',
          desc: 'The smooth gelcoat surface resists algae, reducing chemical use by up to 70% compared to concrete pools.',
        },
        {
          icon: '💰',
          title: 'Lower Lifetime Cost',
          desc: 'Less chemical spend, no replastering, and fewer surface repairs add up to significant savings over decades of ownership.',
        },
        {
          icon: '🛁',
          title: 'Smooth, Comfortable Surface',
          desc: 'The non-abrasive gelcoat finish is gentle on skin and feet — no rough plaster scraping knees or snagging swimsuits.',
        },
        {
          icon: '🌡️',
          title: 'Retains Heat Better',
          desc: 'Fiberglass is a natural insulator. Your pool stays warmer with less heating energy — a real benefit in Fort Worth\'s cooler months.',
        },
        {
          icon: '🔒',
          title: 'Durable & Flexible',
          desc: 'The composite shell flexes slightly with minor soil movement, reducing the risk of cracking from shifting ground.',
        },
      ]}
      comparisonTable={{
        caption: 'Fiberglass vs. Gunite: A Side-by-Side Look',
        leftHeader: 'Fiberglass',
        rightHeader: 'Gunite / Concrete',
        rows: [
          { feature: 'Installation Time', left: '2–4 weeks', right: '8–14 weeks' },
          { feature: 'Design Flexibility', left: 'Pre-made shapes & sizes', right: 'Fully custom — any shape' },
          { feature: 'Surface Feel', left: 'Smooth gelcoat', right: 'Plaster (can be rough)' },
          { feature: 'Algae Resistance', left: 'Excellent (non-porous)', right: 'Moderate (porous plaster)' },
          { feature: 'Chemical Use', left: 'Lower', right: 'Higher' },
          { feature: 'Replastering Needed', left: 'No', right: 'Every 10–15 years' },
          { feature: 'Lifespan', left: '25–30+ years', right: '50+ years' },
          { feature: 'Starting Cost (DFW)', left: 'Lower upfront', right: 'Higher upfront' },
          { feature: 'Lifetime Cost', left: 'Lower', right: 'Higher (maintenance)' },
        ],
      }}
      extraContent={fiberglassExtraContent}
      faq={[
        {
          question: 'How long do fiberglass pools last?',
          answer: 'A high-quality fiberglass pool with proper care will last 25–30 years or more. The gelcoat surface may occasionally need buffing or a fresh coat, but there is no replastering required the way concrete pools demand every 10–15 years.',
        },
        {
          question: 'Can I add a heater or salt chlorinator to a fiberglass pool?',
          answer: 'Yes — fiberglass pools work perfectly with heat pumps, gas heaters, and salt chlorine generators. In fact, the non-porous surface makes fiberglass especially well-suited for salt systems since there is no plaster to degrade.',
        },
        {
          question: 'What fiberglass pool shapes and sizes do you offer?',
          answer: 'We work with multiple leading fiberglass manufacturers offering a wide range of shapes — rectangles, ovals, freeforms, and plunge pools — in lengths from 12 to 40+ feet. We\'ll help you find the right model for your yard and lifestyle during your consultation.',
        },
        {
          question: 'Does a fiberglass pool add value to my home?',
          answer: 'Yes. Any in-ground pool adds value to a DFW home, and fiberglass pools are increasingly popular with buyers. The lower maintenance profile is often a selling point to prospective homeowners who want a pool without the upkeep of concrete.',
        },
      ]}
      />
    </>
  );
}
