import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Pool Builder Fort Worth TX | Epic Custom Pools',
  description:
    "Fort Worth's trusted custom pool builder. Gunite, fiberglass, and swim spas. Serving all Fort Worth neighborhoods and Tarrant County. Free design consultation.",
  openGraph: {
    title: 'Pool Builder Fort Worth TX | Epic Custom Pools',
    description:
      "Fort Worth's trusted custom pool builder. Gunite, fiberglass, and swim spas for every Tarrant County neighborhood. Free design consultation.",
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1920&q=80';

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
      localConsiderations="Building a pool in Fort Worth and Tarrant County comes with specific permitting requirements that vary by municipality and HOA. Some west-side communities — particularly master-planned developments like Walsh Ranch and Ventana — have architectural review boards that require design pre-approval before any permit can be filed. We've worked through these processes dozens of times and handle every submission on your behalf. You don't need to navigate the permit office or decode the HOA design guidelines — we do that work so you can focus on choosing your tile and finish."
      poolTypesHeading="Pool Types for Fort Worth Properties"
      poolTypesSection="Most Fort Worth lots — from Ridglea to Benbrook — suit a mid-size custom gunite pool with room for a spa, tanning ledge, or water feature. Homes on larger west-side acreage have even more opportunity: vanishing edges, full outdoor living integration, and resort-scale designs that take full advantage of the landscape. For buyers who want faster installation or lower long-term maintenance, fiberglass pools are an excellent fit for typical subdivision lots. We'll walk you through both options and make an honest recommendation based on your specific yard, budget, and goals."
      ownerOperatedParagraph="You won't be handed off to a project manager you've never met or a crew that changes week to week. Epic Custom Pools is an owner-operated business — the same person who gives you your consultation is the same person who shows up at your site, knows your permit status, and answers your calls. In a market full of franchises and large-scale operations, that personal accountability is increasingly rare. It's also the reason our clients in Westover Hills, Walsh Ranch, and Aledo refer us to their neighbors without hesitation."
      source="fort-worth-landing"
      defaultCity="Fort Worth"
      citySlug="fort-worth-pool-builder"
      geo={{ lat: 32.7555, lng: -97.3308 }}
    />
  );
}
