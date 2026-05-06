import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Pool Builder Possum Kingdom Lake TX | Epic Custom Pools',
  description:
    'Custom pool builder serving Possum Kingdom Lake, TX. Lakefront pool design and installation for second homes and vacation properties. Free consultation.',
  openGraph: {
    title: 'Pool Builder Possum Kingdom Lake TX | Epic Custom Pools',
    description:
      "Possum Kingdom Lake's custom pool builder. Lakefront and vacation home pool design for Palo Pinto County properties.",
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80';

const FAQS = [
  {
    question: 'Do you build pools at Possum Kingdom Lake?',
    answer:
      'Yes. Epic Custom Pools designs and installs custom pools for lakefront homes, vacation properties, and second homes at Possum Kingdom Lake and throughout Palo Pinto County.',
  },
  {
    question: 'What makes building a pool at Possum Kingdom Lake different?',
    answer:
      "Lakefront properties often have unique site conditions — sloped terrain, shoreline proximity rules, and Palo Pinto County permitting requirements that differ from city builds. We've worked with these constraints and know how to design pools that complement the lake setting while meeting local regulations.",
  },
  {
    question: 'How much does a pool cost at Possum Kingdom Lake?',
    answer:
      'Pool costs at Possum Kingdom Lake typically range from $80,000 to $200,000+ depending on lot conditions, design complexity, and features. Lakefront and vacation home builds often include added features like outdoor kitchens, fire features, and elevated decking.',
  },
  {
    question: 'Do you serve the Graford and Palo Pinto areas?',
    answer:
      "Yes. We serve the entire Possum Kingdom Lake area including Graford, Palo Pinto, Gordon, and Mineral Wells. Call us or schedule a free consultation to discuss your property.",
  },
];

export default function PossumKingdomPoolBuilderPage() {
  return (
    <CityPageTemplate
      cityName="Possum Kingdom Lake"
      county="Palo Pinto"
      heroImage={HERO_IMAGE}
      heroImageAlt="Custom pool builder serving Possum Kingdom Lake and Palo Pinto County Texas"
      headline="Possum Kingdom Lake's Custom Pool Builder"
      subheadline="Possum Kingdom Lake is a high-value, underserved market. Second-home and vacation property owners here want pools that match the setting — and there's virtually no competition online for this market."
      openingParagraphs={[
        "Possum Kingdom Lake is one of Texas's most striking waterfront destinations — deep blue water, dramatic limestone bluffs, and a buyer profile unlike anything you'll find in a suburban DFW neighborhood. The people who own property here aren't looking for a cookie-cutter pool. They're designing a second home or vacation retreat that should feel as impressive as the lake it overlooks.",
        "Building at Possum Kingdom Lake comes with its own set of considerations. Palo Pinto County permitting is different from Tarrant or Parker County. Lakefront lots often have elevation changes, shoreline setback requirements, and site access challenges that require a contractor with real rural and semi-rural build experience. We've worked in these conditions and know how to deliver a finished product that meets regulations without compromising the design.",
        "There is virtually no contractor in this market with a dedicated presence targeting Possum Kingdom Lake. That's an opportunity for property owners who want to work with someone who takes their project seriously — and it's an opportunity we intend to fill with the same owner-operated quality we bring to every build.",
      ]}
      neighborhoodLabel="Areas We Serve at Possum Kingdom Lake"
      neighborhoods={[
        'Possum Kingdom Lake',
        'Graford',
        'Palo Pinto',
        'Gordon',
        'Mineral Wells',
      ]}
      localConsiderationsHeading="Palo Pinto County Permitting & Lakefront Site Conditions"
      localConsiderations="Construction at Possum Kingdom Lake involves Palo Pinto County permitting, which differs significantly from permits in urban DFW counties. Lakefront properties may be subject to shoreline setback rules, Texas Commission on Environmental Quality (TCEQ) considerations for work near water, and elevation grading requirements that demand careful excavation planning. Properties without city utilities require planning for water access during construction and pool fill. Rocky terrain common to the Palo Pinto hills can also affect excavation depth and cost. We assess all of these factors during the site visit and give you a scope that reflects the real work involved — before you sign anything."
      poolTypesHeading="Pool Designs for Possum Kingdom Lake Properties"
      poolTypesSection="A Possum Kingdom Lake property demands a pool design that earns its place in the landscape. Vanishing-edge pools that drop toward the waterline, infinity designs framed by limestone outcroppings, and elevated deck configurations that capture the lake view are all designs we've executed or designed for properties with similar topography. Vacation home buyers here often want the full outdoor package: a pool, an outdoor kitchen, a fire feature, and comfortable covered seating that makes the property work as hard on weekends as it looks on listing photos. We design all of it together so the finished backyard tells one consistent story."
      ownerOperatedParagraph="Second-home buyers at Possum Kingdom Lake often work with contractors they've never met in person, managing a build from a distance while they're in Fort Worth or Dallas during the week. That requires a level of trust that a large franchise operation simply can't provide. With Epic Custom Pools, you have a direct line to the owner — the person making decisions, sourcing materials, and managing the crew. You'll know what's happening on your site, when it's happening, and why. When something needs your input, you hear it from the person who matters, not a call center."
      source="possum-kingdom-landing"
      defaultCity="Possum Kingdom Lake"
      citySlug="possum-kingdom-pool-builder"
      geo={{ lat: 32.9207, lng: -98.5126 }}
      faqs={FAQS}
    />
  );
}
