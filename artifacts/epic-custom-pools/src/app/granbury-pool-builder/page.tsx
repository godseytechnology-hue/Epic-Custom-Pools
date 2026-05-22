import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Pool Builder Granbury TX | Epic Custom Pools',
  description:
    'Custom pool builder serving Granbury, TX. Custom pools and outdoor living for Lake Granbury lakefront and Hood County properties. Free design consultation.',
  openGraph: {
    title: 'Pool Builder Granbury TX | Epic Custom Pools',
    description:
      "Granbury's custom pool builder. Custom pools and outdoor living spaces for lakefront properties and Hood County acreage. Free design consultation.",
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=80';

const FAQS = [
  {
    question: 'Do you build pools in Granbury TX?',
    answer:
      'Yes. Epic Custom Pools builds custom inground pools and outdoor living spaces throughout Granbury and Hood County. We serve lakefront properties on Lake Granbury as well as acreage and subdivision builds across the area.',
  },
  {
    question: 'How much does a pool cost in Granbury TX?',
    answer:
      'Custom inground pools in Granbury typically range from $75,000 to $150,000+ depending on size, design, and features. Lakefront properties with special grading or retaining wall requirements may vary. We provide transparent pricing upfront — no surprises.',
  },
  {
    question: 'Can you build a pool on a lakefront property in Granbury?',
    answer:
      'Yes. Lakefront pools on Lake Granbury require careful planning around setbacks, drainage, and the relationship between the pool and the shoreline. We have experience with these builds and factor all site-specific requirements into your design from day one.',
  },
  {
    question: 'What cities near Granbury do you serve?',
    answer:
      'We serve Granbury, Acton, Tolar, Glen Rose, Weatherford, and surrounding Hood and Parker County communities. If you\'re in the greater Granbury area, we can build for you.',
  },
];

export default function GranburyPoolBuilderPage() {
  return (
    <CityPageTemplate
      cityName="Granbury"
      county="Hood"
      heroImage={HERO_IMAGE}
      heroImageAlt="Custom pool builder serving Granbury and Lake Granbury Texas"
      headline="Granbury's Custom Pool Builder"
      subheadline="Granbury is one of the most distinctive communities in the DFW area — a historic lakefront town where the properties are unique and the expectations are high. We build pools that match both."
      openingParagraphs={[
        "Granbury sits at the intersection of small-town character and genuine affluence. Lake Granbury draws buyers who want outdoor living done right — people who have seen resort-quality pools and know the difference between a contractor who understands lakefront design and one who just follows a standard template. We build for the former.",
        "Hood County properties come with their own set of considerations. Lakefront lots on Lake Granbury often involve slope, retaining walls, and careful planning around the relationship between pool, deck, and shoreline. Acreage properties outside town have their own permitting paths and site challenges. We've worked through both and know what to expect before the first shovel goes in the ground.",
        "Whether you're on the water in Granbury or on a private acre outside Acton, the process starts the same way: we come to your property, walk it with you, and design something that fits the land — not a standard catalog pool forced onto terrain that doesn't suit it.",
      ]}
      neighborhoodLabel="Areas We Serve from Granbury"
      neighborhoods={[
        'Granbury',
        'Lake Granbury',
        'Acton',
        'Tolar',
        'Glen Rose',
        'Hood County',
      ]}
      localConsiderationsHeading="Granbury Permitting, Lakefront Builds & Hood County"
      localConsiderations="Building a pool in Granbury and Hood County involves different considerations depending on your lot type. Lakefront properties on Lake Granbury require coordination with local setback rules and drainage planning to protect the shoreline relationship. Properties in unincorporated Hood County follow county permitting rather than city processes. Acreage lots often involve terrain grading, retaining walls, and equipment placement that suburban lots don't require. We factor all of this into your scope from the first conversation — not as a change order after you've signed a contract."
      poolTypesHeading="Pool Designs for Granbury Properties"
      poolTypesSection="Granbury properties offer some of the most compelling canvas for custom pool design in the DFW region. Lakefront lots can accommodate infinity and vanishing-edge pools that frame the water view and blur the line between your pool and the lake beyond. Larger acreage properties outside town are ideal for freeform designs with natural stone, attached spas, outdoor kitchens, and fire features that create a full resort-style environment. Subdivision lots in Granbury proper are perfect for well-proportioned custom pools with outdoor living combinations that make the most of the space. Whatever your property, we design to fit it — and Granbury's variety makes it one of the more interesting markets we work in."
      ownerOperatedParagraph="Granbury is the kind of place where trust matters more than marketing. People who own property here have high standards and limited patience for contractors who overpromise and underdeliver. As an owner-operated business, you work directly with the person who designs your pool and oversees your build — no project managers, no handoffs, no franchise playbook. The same person who walks your property at the beginning is the one who picks up the phone when you call during construction. That level of accountability is rare in this industry, and it's the way we've built every client relationship since day one."
      source="granbury-landing"
      defaultCity="Granbury"
      citySlug="granbury-pool-builder"
      geo={{ lat: 32.4418, lng: -97.7975 }}
      faqs={FAQS}
    />
  );
}
