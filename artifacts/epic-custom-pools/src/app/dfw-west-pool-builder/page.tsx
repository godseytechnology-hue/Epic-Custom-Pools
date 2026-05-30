import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Pool Builder Serving Greater Fort Worth & DFW West Corridor | Epic Custom Pools',
  description:
    'Custom pool builder serving the DFW west corridor — Benbrook, Azle, Springtown, Hudson Oaks, Willow Park, White Settlement, Mineral Wells, Cresson, and Crowley. Owner-operated. Free consultation.',
  alternates: {
    canonical: `${siteConfig.siteUrl}/dfw-west-pool-builder`,
  },
  openGraph: {
    title: 'Pool Builder Serving Greater Fort Worth & DFW West Corridor | Epic Custom Pools',
    description:
      'Serving Benbrook, Azle, Springtown, Hudson Oaks, Willow Park, White Settlement, Mineral Wells, Cresson, and Crowley. Custom pools and outdoor living — owner-operated.',
  },
};

const FAQS = [
  {
    question: 'How much does a custom pool cost in Benbrook, Azle, or the DFW west corridor?',
    answer:
      'Most custom inground pools in the DFW west corridor range from $75,000 to $150,000 depending on size, shape, and features. Properties with larger lots — common in Springtown, Mineral Wells, and acreage communities along the I-20 corridor — often add outdoor kitchens, fire pits, or attached spas, bringing total project budgets to $120,000–$200,000+. We provide detailed, itemized quotes after a free on-site consultation so you know exactly what you are getting before any money changes hands.',
  },
  {
    question: 'How long does it take to build a pool in these west-corridor suburbs?',
    answer:
      'From signed contract to swim-ready, most custom pools in Tarrant and Parker County take 12–18 weeks. Permitting timelines vary by municipality — cities like Benbrook and White Settlement run their own permit offices, while unincorporated areas follow county processes, which are often faster. We build your permit timeline into the project schedule from day one so there are no surprises. We handle all permit submissions and inspection coordination on your behalf.',
  },
  {
    question: 'Do you handle permits in Azle, Springtown, and smaller west-corridor towns?',
    answer:
      'Yes. Each municipality in the DFW west corridor has its own permitting process — Azle, Springtown, Crowley, and Hudson Oaks all operate independently from Tarrant County and from each other. We have experience navigating each of these processes and handle all permit applications, inspection scheduling, and final sign-offs on your behalf. You will not need to visit a permit office or decode a municipal code.',
  },
  {
    question: 'Can you build a pool on an acreage property or rural lot in the west corridor?',
    answer:
      'Absolutely. Many of the most rewarding projects we build are on acreage properties in communities like Springtown, Mineral Wells, and the rural stretches between Hudson Oaks and Cresson. Larger lots open up design possibilities — freeform shapes, natural stone, full outdoor living integration, and resort-scale concepts that simply are not possible on a standard suburban lot. We assess the terrain, soil, and site access at our first visit and design to what the land actually offers.',
  },
  {
    question: 'What areas west of Fort Worth do you serve?',
    answer:
      'We serve the full DFW west corridor including Benbrook, Azle, Springtown, Hudson Oaks, Willow Park, White Settlement, Mineral Wells, Cresson, Crowley, and the communities in between. If you are in western Tarrant County, Parker County, or Palo Pinto County, reach out — we are likely already working in your area.',
  },
];

export default function DfwWestPoolBuilderPage() {
  return (
    <CityPageTemplate
      cityName="Greater DFW West Corridor"
      county="Tarrant / Parker"
      headline="Pool Builder Serving Greater Fort Worth & DFW West Corridor"
      subheadline="From Benbrook to Springtown, Azle to Crowley — we build custom pools and outdoor living spaces across the full west corridor of the DFW metroplex. Owner-operated, locally rooted, and built to last a Texas lifetime."
      openingParagraphs={[
        "The suburbs and communities stretching west of Fort Worth represent one of the fastest-growing regions in Texas — and one of the most varied landscapes for custom pool construction. Benbrook's established neighborhoods, Azle's lakeside properties, Springtown's acreage lots, and the growing communities along the I-20 corridor from Hudson Oaks to Willow Park all offer compelling opportunities for outdoor living done right.",
        "Building in this corridor requires local knowledge that goes beyond a standard permit checklist. Each municipality — Azle, Crowley, White Settlement, Springtown — operates independently and has its own permitting office, timeline, and inspection process. Rural properties in Parker and Palo Pinto Counties follow county-level paths that differ again from city processes. We know these distinctions because we work in these communities regularly, not as an occasional market.",
        "As an owner-operated business, every project in the DFW west corridor carries our personal reputation. You deal directly with the owner from the first consultation through the final walkthrough — no project managers, no call centers, no franchise playbook. If you are in Benbrook, Azle, Springtown, or anywhere across this corridor, you are close enough for us to serve you the right way.",
      ]}
      neighborhoodLabel="DFW West Corridor Communities We Serve"
      neighborhoods={[
        'Benbrook',
        'Azle',
        'Springtown',
        'Hudson Oaks',
        'Willow Park',
        'White Settlement',
        'Mineral Wells',
        'Cresson',
        'Crowley',
        'Annetta',
        'Briar',
        'Aledo',
        'Millsap',
        'Weatherford',
        'Parker County',
        'Tarrant County',
        'Palo Pinto County',
      ]}
      localConsiderationsHeading="Permitting & Site Considerations Across the West Corridor"
      localConsiderations="No two municipalities in the DFW west corridor handle pool permits the same way. Benbrook and White Settlement have city-run permit offices within Tarrant County. Azle, Springtown, and Crowley each operate their own independent processes with different timelines and inspection requirements. Properties in unincorporated Parker County or Palo Pinto County follow county-level permitting, which is often faster but requires its own coordination. On the site side, acreage properties common throughout this corridor frequently involve terrain grading, retaining walls, and equipment placement that suburban lots do not. We assess all of this at your first consultation and build it into your project timeline from the start — not as a surprise after you have signed a contract."
      poolTypesHeading="Pool Designs for Every West-Corridor Property"
      poolTypesSection="The range of property types across the DFW west corridor makes it one of the most interesting markets we build in. Established neighborhoods in Benbrook and White Settlement often suit a well-proportioned custom pool with a spa, tanning ledge, and outdoor kitchen — creating a complete backyard resort in a setting that already has mature landscaping and curb appeal. Acreage properties in Springtown, Mineral Wells, and Cresson open up freeform designs with natural stone, fire and water features, and full outdoor living environments that take full advantage of open land. Lakeside and waterfront lots near Azle and the Palo Pinto area call for designs that complement the natural setting — vanishing edges, stone coping, and pools that feel like part of the landscape rather than dropped into it. Whatever your property type, we design to fit it."
      ownerOperatedParagraph="In a market full of franchises and volume builders, owner-operated still means something. When you work with Epic Custom Pools, the person you meet at the first consultation is the same person who walks your site during construction, knows your permit status without looking it up, and picks up the phone when you call. That level of personal accountability is increasingly rare in this industry — and it is the reason clients in Benbrook, Azle, Springtown, and across the west corridor refer us to their neighbors without hesitation. Your pool is a significant investment. You deserve a contractor who treats it that way."
      source="dfw-west-landing"
      defaultCity="DFW West Corridor"
      citySlug="dfw-west-pool-builder"
      geo={{ lat: 32.6826, lng: -97.4617 }}
      faqs={FAQS}
    />
  );
}
