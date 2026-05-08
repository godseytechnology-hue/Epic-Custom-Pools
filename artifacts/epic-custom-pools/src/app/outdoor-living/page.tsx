import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import Link from 'next/link';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Outdoor Living Fort Worth TX | Epic Custom Pools',
  description:
    'Custom outdoor kitchens, fire pits, pergolas, and hardscapes in Fort Worth and DFW. Complete backyard transformations. Free consultation.',
  openGraph: {
    title: 'Outdoor Living Fort Worth TX | Epic Custom Pools',
    description:
      'Outdoor kitchens, fire pits, pergolas, and hardscapes — complete backyard transformations in Fort Worth and DFW.',
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1657383543451-e47d1589195d?auto=format&fit=crop&w=1920&q=80';

const COMBINATIONS = [
  {
    title: 'Pool + Outdoor Kitchen + Fire Pit',
    desc: 'The most popular combination in DFW. A full-custom pool, a built-in kitchen for serious entertaining, and a fire pit that makes the space feel finished after dark.',
    tags: ['Pool', 'Kitchen', 'Fire Feature'],
  },
  {
    title: 'Pool + Pergola + Hardscape',
    desc: 'Shade, structure, and beautiful paving that ties the whole yard together. Perfect for families who want a polished, resort-style feel without the complexity.',
    tags: ['Pool', 'Pergola', 'Pavers'],
  },
  {
    title: 'Complete Backyard Transformation',
    desc: 'Pool, outdoor kitchen, fire feature, pergola, hardscape, and lighting — designed as one cohesive project from the start. Built together, finished together.',
    tags: ['Everything', 'One Build', 'Best Value'],
  },
];

const outdoorExtraContent = (
  <section className="bg-navy py-16 px-4 md:px-8">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white text-center mb-4">
        Most Popular Combinations
      </h2>
      <p className="font-inter text-white/70 text-center mb-10 max-w-2xl mx-auto">
        The best backyards are designed as a whole — pool and outdoor living together from day one.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {COMBINATIONS.map((combo) => (
          <div key={combo.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-wrap gap-2 mb-4">
              {combo.tags.map((tag) => (
                <span key={tag} className="font-inter text-xs font-semibold text-gold bg-gold/15 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-playfair text-lg font-bold text-white mb-3">{combo.title}</h3>
            <p className="font-inter text-white/70 text-sm leading-relaxed">{combo.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/consultation"
          className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-base px-8 py-4 rounded hover:bg-gold-light transition-colors duration-200"
        >
          Plan Your Backyard — Free Consultation
        </Link>
      </div>
    </div>
  </section>
);

export default function OutdoorLivingPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Outdoor Living Construction"
        serviceDescription={`Custom outdoor kitchens, fire pits, pergolas, hardscapes, and patio covers serving ${siteConfig.serviceAreaPhrase}`}
        serviceUrl="/outdoor-living"
      />
      <ServicePageTemplate
        heroImage={HERO_IMAGE}
        heroImageAlt="outdoor living space with kitchen and fire pit Fort Worth TX"
        heroHeadline="Your Backyard, Completely Transformed"
        heroSubheadline="From outdoor kitchens and fire pits to pergolas, hardscapes, and entertainment areas — we build everything beyond the pool edge."
        source="outdoor-living-page"
        sections={[
          {
            heading: 'Beyond the Pool — Your Complete Backyard',
            body: [
              'Most families spend as much time around the pool as in it. The outdoor kitchen, the fire pit, the shade structure, the hardscaped patio — these are what make a backyard a true outdoor living room.',
              'Epic Custom Pools builds the complete backyard environment, not just the pool. When we design a project, we think about how the whole space flows together: the pool, the deck, the kitchen, the fire feature, the shade, the lighting. Everything is planned from the start so the result feels intentional — not pieced together over time.',
              'We work on projects of all scales — a simple pergola and flagstone patio, a full outdoor kitchen with a bar and fire pit, or a comprehensive backyard transformation that combines everything.',
            ],
          },
          {
            heading: 'What We Build',
            body: [
              'Outdoor Kitchens — Custom built-in grills, pizza ovens, refrigerators, sinks, and bar counters. The most-requested upgrade in DFW, designed for serious cooking and serious entertaining.',
              'Fire Pits & Fireplaces — Gas or wood-burning. Built-in fire pits, stacked stone outdoor fireplaces, linear fire features, and fire bowls that anchor any outdoor gathering.',
              'Pergolas & Patio Covers — Shade is not optional in Texas. Wood and steel pergolas, attached patio covers, and louvered roof systems built to handle Texas weather while controlling light and airflow.',
              'Hardscapes & Patios — Flagstone, travertine, concrete pavers, stamped concrete, and cool deck. The foundation of your outdoor space, designed to complement the pool and last for decades.',
              'Outdoor Bars & Entertainment Areas — Built-in bars, TV mounts, landscape speaker systems, and dedicated entertaining zones designed around how you actually host.',
              'Landscape Lighting — Low-voltage LED path lighting, uplighting, in-pool LED color systems, and string light structures that transform your backyard after dark.',
            ],
          },
          {
            heading: 'Designed for the Texas Lifestyle',
            body: [
              'Fort Worth summers demand shade. Texas evenings — when the temperature finally breaks — call for a fire feature and an outdoor space worth being in. Spring and fall are when DFW backyards are at their best, and having the right setup makes those months feel like a luxury resort.',
              'Our outdoor projects are designed for real Texas weather: heat-resistant materials, covered structures built to handle storms, and layouts that maximize airflow and shade where you need it most. We use materials that stay cool underfoot, finishes that hold up in direct sun, and gas connections properly sized for the DFW climate.',
            ],
          },
        ]}
        benefits={[
          {
            icon: '🍳',
            title: 'Outdoor Kitchens',
            desc: 'Custom built-in grills, pizza ovens, refrigerators, sinks, and bar counters. Designed for serious cooking and serious entertaining — the most-requested outdoor upgrade in DFW.',
          },
          {
            icon: '🔥',
            title: 'Fire Pits & Fireplaces',
            desc: 'Gas or wood-burning. Built-in fire pits, stacked stone outdoor fireplaces, linear fire features, and fire bowls. The centerpiece of any DFW evening gathering.',
          },
          {
            icon: '🏗️',
            title: 'Pergolas & Patio Covers',
            desc: 'Shade is not optional in Texas. We build wood and steel pergolas, attached patio covers, and louvered roof systems that let you control light and airflow year-round.',
          },
          {
            icon: '🪨',
            title: 'Hardscapes & Patios',
            desc: 'Flagstone, travertine, concrete pavers, stamped concrete, and cool deck. The foundation of your outdoor space — designed to complement the pool and last for decades.',
          },
          {
            icon: '🍺',
            title: 'Outdoor Bars & Entertainment',
            desc: 'Built-in outdoor bars, TV mounts, landscape speaker systems, and dedicated entertaining zones designed around how you actually host.',
          },
          {
            icon: '💡',
            title: 'Landscape Lighting',
            desc: 'Low-voltage LED path lighting, uplighting, in-pool LED color systems, and string light structures. Transforms your backyard after dark into something special.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Consultation & Concept',
            desc: 'We walk your yard and design the entire outdoor space as one cohesive plan — pool, living area, kitchen, shade, and lighting. Everything considered together from day one.',
          },
          {
            step: 2,
            title: 'Material & Design Selection',
            desc: 'Choose finishes, materials, and fixtures with guidance from our team. We show you real samples and give you honest guidance on cost vs. impact for each choice.',
          },
          {
            step: 3,
            title: 'Permits & HOA',
            desc: 'We handle all structural permits for covered structures, gas line permits for outdoor kitchens and fire features, and any HOA submissions. No paperwork burden on you.',
          },
          {
            step: 4,
            title: 'Construction',
            desc: 'Pool and outdoor living construction are coordinated so the yard is finished together — no staging delays, no mismatched materials, no waiting months for the second phase.',
          },
          {
            step: 5,
            title: 'Final Walk & Handover',
            desc: "We walk every element of the finished space, demonstrate equipment operation, and hand over all warranties. Your backyard is ready to enjoy — completely.",
          },
        ]}
        extraContent={outdoorExtraContent}
        faq={[
          {
            question: 'Can you build an outdoor kitchen at the same time as the pool?',
            answer: "Yes — and this is the best approach. Building both together means one mobilization, coordinated utility runs (gas, water, electrical), and a finished space where everything is designed to work together. It's typically more cost-effective than returning for a second project later.",
          },
          {
            question: "What's a typical outdoor kitchen cost in Fort Worth?",
            answer: 'Basic built-in grill stations start around $8,000–$15,000. Full outdoor kitchens with refrigerator, sink, pizza oven, and bar seating range from $25,000–$60,000+. Custom stone or tile finishes, built-in smokers, and covered structures affect total cost. We provide itemized pricing before any work begins.',
          },
          {
            question: 'Do pergolas require permits in Fort Worth?',
            answer: 'Attached pergolas and covered patio structures typically require a building permit in Fort Worth and most surrounding cities. Freestanding pergolas under a certain square footage may be exempt depending on jurisdiction. We handle all permitting as part of the project scope.',
          },
          {
            question: "What's the most popular outdoor living add-on with a pool?",
            answer: 'Outdoor kitchens and fire pits are consistently the top two requested additions. A covered patio or pergola comes close behind — the Texas sun makes shade a near-necessity for daytime outdoor living in DFW.',
          },
          {
            question: 'What materials do you use for DFW outdoor living projects?',
            answer: "We use materials selected specifically for the North Texas climate: travertine and concrete pavers that stay cool in direct sun, powder-coated steel and pressure-treated wood for pergola structures, stainless or sealed stone for outdoor kitchen surfaces, and commercial-grade gas components rated for our temperature swings.",
          },
        ]}
      />
    </>
  );
}
