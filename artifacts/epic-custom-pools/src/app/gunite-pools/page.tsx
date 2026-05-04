import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import siteConfig from '@/config/siteConfig';

const POPULAR_FEATURES = [
  { icon: '🌊', name: 'Vanishing / Infinity Edge', desc: 'Water appears to merge with the horizon — a stunning visual effect for elevated or hillside lots.' },
  { icon: '☀️', name: 'Tanning Ledge / Sun Shelf', desc: 'A shallow platform perfect for lounge chairs, toddlers, and pets — one of the most requested features in DFW.' },
  { icon: '🏝️', name: 'Grotto & Slide', desc: 'A rocky cave waterfall with a built-in slide creates a true backyard resort experience.' },
  { icon: '🛁', name: 'Attached Spa / Hot Tub', desc: 'Integrate a full-featured spa into the pool design with shared equipment for efficient operation.' },
  { icon: '🪨', name: 'Rock & Water Features', desc: 'Natural boulders, sheer descents, and deck jets add movement, sound, and drama to your backyard.' },
  { icon: '💡', name: 'LED Lighting & Color Themes', desc: 'Set any mood with programmable LED lights — from crisp white to full-color nighttime displays.' },
  { icon: '🍹', name: 'Swim-Up Bar & Seating', desc: 'Submerged barstools and a sun shelf bar area let you entertain without leaving the water.' },
  { icon: '📱', name: 'Smart Automation', desc: 'Control lights, heat, jets, and cleaning schedules from your phone with connected pool automation.' },
];

const guniteExtraContent = (
  <section className="bg-white py-16 px-4 md:px-8">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
        Popular Features & Add-Ons
      </h2>
      <p className="font-inter text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        Every gunite pool we build is unique. Here are the features our Fort Worth clients request most — any combination can be designed in from the start.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {POPULAR_FEATURES.map((f) => (
          <div key={f.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <span className="text-2xl mb-3 block" aria-hidden="true">{f.icon}</span>
            <h3 className="font-playfair text-base font-bold text-navy mb-2">{f.name}</h3>
            <p className="font-inter text-gray-600 text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const metadata: Metadata = {
  title: 'Gunite Pools Fort Worth TX | Custom Concrete Pool Builder',
  description:
    `Fully custom gunite pools designed and built in ${siteConfig.serviceAreaPhrase}. Any shape, any size — the only material built to last a lifetime in Texas soil. Get a free consultation.`,
  openGraph: {
    title: 'Fully Custom Gunite Pools — Built to Last a Lifetime | Epic Custom Pools',
    description:
      'Epic Custom Pools builds fully custom gunite swimming pools across Fort Worth and DFW. No cookie-cutter designs — your backyard, your vision.',
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80';

export default function GunitePoolsPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Gunite Pool Installation"
        serviceDescription={`Custom gunite (concrete) swimming pool design and construction serving ${siteConfig.serviceAreaPhrase}`}
        serviceUrl="/gunite-pools"
      />
      <ServicePageTemplate
        heroImage={HERO_IMAGE}
        heroImageAlt="gunite pool builder Fort Worth TX"
        heroHeadline="Fully Custom Gunite Pools — Built to Last a Lifetime"
        heroSubheadline="Sculpted from reinforced concrete to any shape, depth, and finish you can imagine. If you can dream it, we can build it."
        source="gunite-page"
      sections={[
        {
          heading: 'What Is a Gunite Pool?',
          body: [
            'Gunite pools — also called concrete or shotcrete pools — are the gold standard for custom residential swimming pools. Unlike prefabricated fiberglass shells, gunite is sprayed directly onto a steel rebar framework, allowing our team to build any shape, depth, or size you can envision.',
            'The result is a pool that is uniquely yours. Freeform lagoons, geometric lap pools, vanishing edges, beach entries, grottos, attached spas — all are possible with gunite construction. There are no factory molds and no limitations.',
            'With proper care, a well-built gunite pool will last 50 years or more. It\'s an investment in your property and your family\'s quality of life that pays dividends every summer for generations.',
          ],
        },
        {
          heading: 'Why Fort Worth Families Choose Gunite',
          body: [
            'North Texas soil conditions — including the expansive clay common throughout the DFW area — demand a construction method that can handle ground movement without cracking or shifting. Gunite\'s structural strength and the ability to engineer the thickness and steel reinforcement to match your specific lot give it a significant advantage in our region.',
            'The DFW climate also means your pool will see serious use from April through October. Gunite can accommodate the features that active families want: tanning ledges, swim-up bars, water features, LED lighting, and automation systems that make pool ownership effortless.',
          ],
        },
        {
          heading: 'What About Vinyl Liner Pools?',
          body: [
            'Vinyl liner pools use a flexible PVC liner stretched over a prefabricated frame. They are common in colder Midwestern and Northeastern markets where they\'re an economical option — but they are the wrong choice for North Texas.',
            'Vinyl liners must be replaced every 8–12 years, typically costing $4,000–$10,000 per replacement. The DFW climate — which routinely swings from 110°F+ summers to below-freezing winters — accelerates liner degradation significantly beyond national averages. The intense UV exposure alone shortens liner life faster than manufacturers estimate for northern climates.',
            'Vinyl liner pools also cannot support the features DFW families expect: tanning ledges with the proper slope, grottos, vanishing edges, or integrated spa spillways are structurally incompatible with liner systems. For these reasons, virtually no DFW custom pool contractors build vinyl liner pools — and the few that do primarily serve the entry-level budget market.',
          ],
        },
        {
          heading: 'Design Options & Finishes',
          body: 'After the shell is complete, you choose your interior finish — from classic marcite plaster to quartz aggregate, pebble finishes, and glass tile accents. Coping options include travertine, flagstone, brick, and poured concrete. Your deck material, water features, and landscaping integration are all part of our full-service design process.',
        },
      ]}
      benefits={[
        {
          icon: '🎨',
          title: 'Unlimited Design Freedom',
          desc: 'Any shape, any size, any depth. No molds, no restrictions — just your imagination and our craftsmanship.',
        },
        {
          icon: '💪',
          title: 'Superior Structural Strength',
          desc: 'Reinforced gunite handles North Texas expansive clay soil and temperature extremes better than any alternative.',
        },
        {
          icon: '⏳',
          title: '50+ Year Lifespan',
          desc: 'A properly built gunite pool is a permanent backyard fixture that outlasts every other pool type available.',
        },
        {
          icon: '🏠',
          title: 'Adds Real Property Value',
          desc: 'Custom pools are a top-tier home improvement in DFW. Gunite pools consistently return the highest value at resale.',
        },
        {
          icon: '🔧',
          title: 'Renovatable & Upgradeable',
          desc: 'Replaster, retile, or add features years down the road. Gunite gives you a foundation that grows with your family.',
        },
        {
          icon: '✨',
          title: 'Premium Finishes',
          desc: 'Choose from quartz, pebble, glass tile, and mosaic accents that make your pool as beautiful as it is durable.',
        },
      ]}
      processSteps={[
        {
          step: 1,
          title: 'Design Consultation',
          desc: 'We meet at your property, discuss your vision, review your yard layout, and produce a custom design plan with pricing.',
        },
        {
          step: 2,
          title: 'Permits & Engineering',
          desc: 'We handle all city permits, engineering drawings, and HOA submissions so you don\'t have to navigate the paperwork.',
        },
        {
          step: 3,
          title: 'Excavation',
          desc: 'Your pool\'s exact shape is dug to spec. We coordinate utility locates and manage all spoil removal.',
        },
        {
          step: 4,
          title: 'Steel & Plumbing',
          desc: 'The rebar skeleton is set and all plumbing, drains, returns, and lighting conduits are roughed in before the shell.',
        },
        {
          step: 5,
          title: 'Gunite Application',
          desc: 'Our certified crew shoots the concrete shell — the backbone of your pool — to the engineered thickness required for your soil conditions.',
        },
        {
          step: 6,
          title: 'Finish & Fill',
          desc: 'Coping, tile, decking, and interior plaster are completed. Equipment is installed, the pool is filled, and we walk you through everything before handoff.',
        },
      ]}
      comparisonTable={{
        caption: 'Why Gunite Is the Right Choice for Texas',
        leftHeader: 'Gunite (Concrete)',
        rightHeader: 'Fiberglass',
        rows: [
          {
            feature: 'Shape & Size',
            left: 'Any shape, any size — no limits',
            right: 'Fixed factory molds (max ~16 ft wide)',
          },
          {
            feature: 'DFW Expansive Clay Soil',
            left: 'Engineered to your specific lot — handles ground movement',
            right: 'Shells shift, crack, or "pop" in Blackland Prairie clay',
          },
          {
            feature: 'Lifespan',
            left: '50+ years with normal maintenance',
            right: '15–25 years before gelcoat degradation',
          },
          {
            feature: 'Texas Sun & Heat',
            left: 'Replasterable — finish refreshed as needed',
            right: 'Gelcoat fades and oxidizes; cannot be refinished',
          },
          {
            feature: 'Features (spa, grotto, tanning ledge)',
            left: 'Any combination, fully integrated',
            right: 'Limited by pre-cast shell geometry',
          },
          {
            feature: 'Resale Value',
            left: 'Highest premium in DFW luxury market',
            right: 'Lower return — buyers recognize the limitations',
          },
          {
            feature: 'Renovation',
            left: 'New plaster, tile, coping, or features — anytime',
            right: 'Cannot be updated; shell is permanent',
          },
        ],
      }}
      extraContent={guniteExtraContent}
      faq={[
        {
          question: 'How long does it take to build a gunite pool?',
          answer: 'Most gunite pool projects in the Fort Worth area take 8 to 14 weeks from permit approval to final fill, depending on design complexity, weather, and inspection scheduling. We provide a detailed project timeline at contract signing.',
        },
        {
          question: 'How much does a gunite pool cost in Fort Worth?',
          answer: 'Custom gunite pools in the DFW area typically start in the $65,000–$80,000 range for a standard residential build and go up from there based on size, features, and finishes. Visit our Pricing page for full transparent ranges.',
        },
        {
          question: 'Do you handle permits and inspections?',
          answer: 'Yes — we manage every permit, inspection, and city approval from start to finish. You never have to call the city or chase down paperwork.',
        },
        {
          question: 'Can I add a spa or water feature to my gunite pool?',
          answer: 'Absolutely. Attached spas, sheer descents, deck jets, grottos, tanning ledges, and fire features are all common additions to our gunite builds. We design these in from the start so everything is structurally integrated.',
        },
      ]}
      />
    </>
  );
}
