import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Pool Builder Fort Worth TX',
  description:
    "Pool builder Fort Worth TX — owner-operated, hands-on. Serving Walsh Ranch, Westover Hills & Tarrant County. You deal with the owner. Free consultation.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/fort-worth-pool-builder`,
  },
  openGraph: {
    title: 'Pool Builder Fort Worth TX | Epic Custom Pools',
    description:
      "Fort Worth's custom pool builder. Pools, kitchens, fire pits, and hardscapes for every Tarrant County neighborhood.",
  },
};

const HERO_IMAGE = '/hero-fort-worth.webp';

const FAQS = [
  {
    question: 'How much does a custom pool cost in Fort Worth?',
    answer:
      'Most custom pools in Fort Worth range from $80,000 to $160,000 depending on size, features, and finishes. Homes in neighborhoods like Walsh Ranch and Westover Hills often add outdoor kitchens, fire pits, or spa features that bring total projects to $120,000–$200,000+. We provide detailed, itemized quotes after a free on-site consultation so you know exactly what you are getting before signing anything.',
  },
  {
    question: 'Can you build a pool in HOA communities like Walsh Ranch or Ventana?',
    answer:
      "Yes. Master-planned communities like Walsh Ranch and Ventana require design pre-approval from their architectural review boards before any permit can be filed. We prepare and submit the full ARB package on your behalf, including drawings, material samples, and equipment specs, and coordinate directly with the HOA so you don't have to navigate that process yourself.",
  },
  {
    question: 'How does the Tarrant County permitting process work for a pool?',
    answer:
      'Permitting requirements in Tarrant County vary by municipality — the City of Fort Worth has its own process, while unincorporated Tarrant County follows county-level rules. Either way, we handle every permit submission, inspection coordination, and sign-off on your behalf. Typical permit timelines run 3–6 weeks depending on city workload. We factor this into your project schedule from day one so there are no surprises.',
  },
  {
    question: 'What cities and areas do you serve in and around Fort Worth?',
    answer:
      'We serve the full Fort Worth metro and west Tarrant County, including Westover Hills, Ridglea, Benbrook, the TCU area, Hulen, Walsh Ranch, Ventana, Riverton, Mira Vista, and Aledo. If you are in Tarrant County or just across the Parker County line, reach out — we are likely already working in your area.',
  },
];

export default function FortWorthPoolBuilderPage() {
  return (
    <CityPageTemplate
      cityName="Fort Worth"
      county="Tarrant"
      heroImage={HERO_IMAGE}
      heroImageAlt="Custom pool builder serving Fort Worth and Tarrant County Texas"
      headline="Fort Worth's Trusted Custom Pool Builder"
      subheadline="Owner-operated, locally rooted, and built for the way Fort Worth families live. From Westover Hills to Walsh Ranch — we build pools that last a Texas lifetime."
      openingParagraphs={[
        "Fort Worth summers are long, hot, and unforgiving — the kind of heat that turns a backyard pool from a luxury into a necessity. For families across Tarrant County, an Epic Custom Pool is the centerpiece of outdoor life from April through October and beyond.",
        "Our owner has spent years building pools across Fort Worth's growing west side — Walsh Ranch, Ventana, Riverton, and Aledo — and understands exactly what these neighborhoods demand. Larger lots, HOA design guidelines, Tarrant County permitting timelines, and buyers who expect resort-quality finishes. We speak that language because we've lived it.",
        "As an owner-operated business, every pool we build carries our name and our personal reputation. That's not something we take lightly. From your first consultation to the day you take your first swim, you'll have a direct line to the person who is personally responsible for your project.",
      ]}
      neighborhoodLabel="Fort Worth Neighborhoods We Serve"
      neighborhoods={[
        'Westover Hills',
        'Aledo',
        'Benbrook',
        'Ridglea',
        'TCU Area',
        'Walsh Ranch',
        'Hulen Area',
        'Ventana',
        'Riverton',
        'Mira Vista',
        'West Fort Worth',
        'Tarrant County',
      ]}
      localConsiderationsHeading="Tarrant County Permits & HOA Requirements"
      localConsiderations="Building a pool in Fort Worth and Tarrant County comes with specific permitting requirements that vary by municipality and HOA. Some west-side communities — particularly master-planned developments like Walsh Ranch and Ventana — have architectural review boards that require design pre-approval before any permit can be filed. We handle every submission on your behalf. You don't need to navigate the permit office or decode the HOA design guidelines — we do that work so you can focus on choosing your tile and finish."
      poolTypesHeading="Pool Types for Fort Worth Properties"
      poolTypesSection="Most Fort Worth lots — from Ridglea to Benbrook — suit a mid-size custom pool with room for a spa, tanning ledge, or water feature. Homes on larger west-side acreage have even more opportunity: vanishing edges, full outdoor living integration, and resort-scale designs that take full advantage of the landscape. Many Fort Worth families also add outdoor kitchens, fire pits, and pergolas to complete the backyard — we design the pool and outdoor living spaces together so everything flows as one finished project."
      ownerOperatedParagraph="You won't be handed off to a project manager you've never met or a crew that changes week to week. Epic Custom Pools is an owner-operated business — the same person who gives you your consultation is the same person who shows up at your site, knows your permit status, and answers your calls. In a market full of franchises and large-scale operations, that personal accountability is increasingly rare. It's also the reason our clients in Westover Hills, Walsh Ranch, and Aledo refer us to their neighbors without hesitation."
      source="fort-worth-landing"
      defaultCity="Fort Worth"
      citySlug="fort-worth-pool-builder"
      geo={{ lat: 32.7555, lng: -97.3308 }}
      faqs={FAQS}
    />
  );
}
