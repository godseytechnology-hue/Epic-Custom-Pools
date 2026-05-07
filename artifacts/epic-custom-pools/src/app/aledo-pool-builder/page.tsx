import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Pool Builder Aledo TX | Epic Custom Pools',
  description:
    'Custom pool builder serving Aledo, TX. Custom pools and outdoor living for Parker County acreage and new construction. Free design consultation.',
  openGraph: {
    title: 'Pool Builder Aledo TX | Epic Custom Pools',
    description:
      "Aledo's custom pool builder. Custom pools and outdoor living spaces for acreage properties and new construction in Parker County.",
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1920&q=80';

const FAQS = [
  {
    question: 'Do you build pools in Aledo TX?',
    answer:
      'Yes. Epic Custom Pools builds custom inground pools and outdoor living spaces throughout Aledo and Parker County. We\'re familiar with local permitting, acreage lot builds, and new construction timelines in the Aledo ISD area.',
  },
  {
    question: 'How much does a pool cost in Aledo TX?',
    answer:
      'Custom inground pools in Aledo typically range from $75,000 to $150,000+ depending on size, design, and features. We provide transparent pricing ranges upfront — no surprises. Visit our pricing page for detailed estimates.',
  },
  {
    question: 'Do you work on acreage properties near Aledo?',
    answer:
      "Yes. Many of our Aledo builds are on larger acreage lots where terrain, well water, and county permitting add complexity. We've navigated Parker County's permitting process many times and factor all of this into your scope from day one.",
  },
  {
    question: 'What cities near Aledo do you serve?',
    answer:
      'We serve Aledo, Annetta, Walsh Ranch, Weatherford, Fort Worth, and the surrounding Parker County area. If you\'re in or near Parker County, we can build for you.',
  },
];

export default function AledoPoolBuilderPage() {
  return (
    <CityPageTemplate
      cityName="Aledo"
      county="Parker"
      heroImage={HERO_IMAGE}
      heroImageAlt="Custom pool builder serving Aledo and Parker County Texas"
      headline="Aledo's Custom Pool Builder"
      subheadline="Aledo is one of the fastest-growing communities in Parker County — and one of the most underserved by local pool contractors who actually know the area. We build here."
      openingParagraphs={[
        "Aledo ISD is growing faster than almost any school district in the DFW area, and with that growth comes a surge of new construction, acreage subdivisions, and buyers who expect resort-quality outdoor spaces to match their homes. The problem is that most pool contractors who serve the broader Fort Worth market treat Aledo as an afterthought. Nobody has a dedicated presence here. We do.",
        "Epic Custom Pools has built on the kinds of properties that define Aledo — one-to-five acre lots where the terrain slopes, the well is on-site, and the county permitting process is different from anything inside the city limits. We know Parker County's jurisdiction boundaries, the difference between a city permit and an ETJ build, and how to navigate the Aledo ISD corridor where many lots sit in multiple overlapping jurisdictions.",
        "Whether you're in a master-planned community like Walsh Ranch or on a private acreage lot outside Annetta, the design process starts the same way: we come to your property, walk the land, and build a plan that fits the space — not a plan that forces the space to fit a standard template.",
      ]}
      neighborhoodLabel="Areas We Serve from Aledo"
      neighborhoods={[
        'Aledo',
        'Annetta',
        'Annetta North',
        'Annetta South',
        'Walsh Ranch',
        'Parker County',
      ]}
      localConsiderationsHeading="Aledo Permitting, Acreage Lots & New Construction"
      localConsiderations="Building a pool in Aledo and the surrounding Parker County areas involves different permitting paths depending on whether your property is inside Aledo city limits, in the ETJ, or in unincorporated Parker County. Aledo ISD-area new construction often involves tight coordination between your home builder's schedule and pool construction sequencing — we've done this many times and know how to work within those timelines. Properties with well water require a separate planning layer around fill volume and chemical setup. We factor all of this into your scope at the beginning, not as a surprise after the contract is signed."
      poolTypesHeading="Pool Designs for Aledo Properties"
      poolTypesSection="Aledo properties range from quarter-acre lots in newer subdivisions to sprawling acreage with room for serious ambition. On larger lots we regularly design freeform pools with natural stone features, attached spas, tanning ledges, and vanishing edges that frame the open Parker County sky. Smaller subdivision lots in Walsh Ranch and Annetta South are perfect for well-proportioned custom pools with outdoor kitchen and pergola combinations that make the most of every square foot. Whatever your lot, we design to it — and Aledo acreage makes some of the most impressive finished projects we build."
      ownerOperatedParagraph="Aledo is the kind of community where word travels fast and reputations are earned over time. New residents ask their neighbors who built their pool before they call anyone else. We've built our reputation in Parker County by doing things the hard way — being honest about timelines, transparent about costs, and personally accountable to every client. As an owner-operated business, the same person who walks your property and designs your pool is the one who shows up during construction and picks up the phone when you call. No handoffs. No franchise playbook. Just a contractor who cares what gets built with their name on it."
      source="aledo-landing"
      defaultCity="Aledo"
      citySlug="aledo-pool-builder"
      geo={{ lat: 32.6957, lng: -97.6044 }}
      faqs={FAQS}
    />
  );
}
