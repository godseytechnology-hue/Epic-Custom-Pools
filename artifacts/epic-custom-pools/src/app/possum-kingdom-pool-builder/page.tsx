import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Pool Builder Possum Kingdom TX | Epic Custom Pools',
  description:
    'Custom pool builder serving Possum Kingdom, TX. Lakefront pool design and installation for second homes and vacation properties. Free consultation.',
  openGraph: {
    title: 'Pool Builder Possum Kingdom TX | Epic Custom Pools',
    description:
      "Possum Kingdom's custom pool builder. Lakefront and vacation home pool design for Palo Pinto County properties.",
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80';

const FAQS = [
  {
    question: 'What makes building a pool at Possum Kingdom different?',
    answer:
      "Lakefront properties often have unique site conditions — sloped terrain, shoreline proximity rules, and Palo Pinto County permitting requirements that differ from city builds. We've worked with these constraints and know how to design pools that complement the lake setting while meeting local regulations.",
  },
  {
    question: 'How much does a pool cost at Possum Kingdom?',
    answer:
      'Pool costs at Possum Kingdom typically range from $80,000 to $200,000+ depending on lot conditions, design complexity, and features. Lakefront and vacation home builds often include added features like outdoor kitchens, fire features, and elevated decking.',
  },
  {
    question: 'Do you serve the Graford and Palo Pinto areas?',
    answer:
      "Yes. We serve the entire Possum Kingdom area including Graford, Palo Pinto, and Gordon. Call us or schedule a free consultation to discuss your property.",
  },
];

export default function PossumKingdomPoolBuilderPage() {
  return (
    <CityPageTemplate
      cityName="Possum Kingdom"
      county="Palo Pinto"
      heroImage={HERO_IMAGE}
      heroImageAlt="Custom pool builder serving Possum Kingdom and Palo Pinto County Texas"
      headline="Possum Kingdom's Custom Pool Builder"
      subheadline="Possum Kingdom is where Texas families come to exhale. The water, the bluffs, the open sky — a pool here isn't a luxury add-on. It's the centerpiece of every summer your family will talk about for years."
      openingParagraphs={[
        "Possum Kingdom is one of Texas's most striking waterfront destinations — deep blue water, dramatic limestone bluffs, and a buyer profile unlike anything you'll find in a suburban DFW neighborhood. The people who own property here aren't looking for a cookie-cutter pool. They're designing a second home or vacation retreat that should feel as impressive as the lake it overlooks.",
        "Building at Possum Kingdom comes with its own set of considerations. Palo Pinto County permitting is different from Tarrant or Parker County. Lakefront lots often have elevation changes, shoreline setback requirements, and site access challenges that require a contractor with real rural and semi-rural build experience. We've worked in these conditions and know how to deliver a finished product that meets regulations without compromising the design.",
        "A Possum Kingdom property is not like a suburban backyard project — and it shouldn't be treated like one. When you build here, you're investing in the place your family will return to summer after summer. That deserves an owner who shows up, understands the site, and builds something worthy of what this place means to you.",
      ]}
      neighborhoodLabel="Areas We Serve at Possum Kingdom"
      neighborhoods={[
        'Possum Kingdom',
        'Graford',
        'Palo Pinto',
        'Gordon',
      ]}
      localConsiderationsHeading="Palo Pinto County Permitting & Lakefront Site Conditions"
      localConsiderations="Construction at Possum Kingdom involves Palo Pinto County permitting, which differs significantly from permits in urban DFW counties. Lakefront properties may be subject to shoreline setback rules, Texas Commission on Environmental Quality (TCEQ) considerations for work near water, and elevation grading requirements that demand careful excavation planning. Properties without city utilities require planning for water access during construction and pool fill. Rocky terrain common to the Palo Pinto hills can also affect excavation depth and cost. We assess all of these factors during the site visit and give you a scope that reflects the real work involved — before you sign anything."
      poolTypesHeading="Pool Designs for Possum Kingdom Properties"
      poolTypesSection="A Possum Kingdom property demands a pool design that earns its place in the landscape. Vanishing-edge pools that drop toward the waterline, infinity designs framed by limestone outcroppings, and elevated deck configurations that capture the lake view are all designs we've executed or designed for properties with similar topography. Vacation home buyers here often want the full outdoor package: a pool, an outdoor kitchen, a fire feature, and comfortable covered seating that makes the property work as hard on weekends as it looks on listing photos. We design all of it together so the finished backyard tells one consistent story."
      ownerOperatedParagraph="Second-home buyers at Possum Kingdom often work with contractors they've never met in person, managing a build from a distance while they're in Fort Worth or Dallas during the week. That requires a level of trust that a large franchise operation simply can't provide. With Epic Custom Pools, you have a direct line to the owner — the person making decisions, sourcing materials, and managing the crew. You'll know what's happening on your site, when it's happening, and why. When something needs your input, you hear it from the person who matters, not a call center."
      source="possum-kingdom-landing"
      defaultCity="Possum Kingdom"
      citySlug="possum-kingdom-pool-builder"
      geo={{ lat: 32.9207, lng: -98.5126 }}
      faqs={FAQS}
    />
  );
}
