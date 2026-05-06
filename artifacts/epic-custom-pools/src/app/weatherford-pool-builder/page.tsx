import type { Metadata } from 'next';
import CityPageTemplate from '@/components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Pool Builder Weatherford TX | Epic Custom Pools',
  description:
    "Custom pool builder in Weatherford, TX. Gunite pools and outdoor living for Parker County acreage. Acreage builds welcome. Free consultation.",
  openGraph: {
    title: 'Pool Builder Weatherford TX | Epic Custom Pools',
    description:
      "Parker County's custom pool builder. Gunite pools and outdoor living for acreage, ranch properties, and growing Weatherford communities.",
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80';

const FAQS = [
  {
    question: 'Can you build a pool on acreage or a property with well water in Weatherford?',
    answer:
      'Yes — this is one of our specialties. Acreage builds often involve sloped terrain, elevated equipment pads, retaining walls, and custom excavation plans that require extra coordination. Properties on well water need additional planning around the pool fill process, chemical balance, and equipment selection to ensure the system runs properly long-term. We account for all of this in your quote from day one so there are no surprises mid-project.',
  },
  {
    question: 'How does permitting work in Parker County?',
    answer:
      'Permitting in Parker County depends on where your property sits — inside a city like Weatherford or Willow Park, within an extraterritorial jurisdiction (ETJ), or in unincorporated county territory. Each has different requirements and timelines. We have worked through all three scenarios and handle every permit submission, inspection request, and final sign-off on your behalf. Typical timelines run 3–6 weeks depending on jurisdiction.',
  },
  {
    question: 'How much does a custom pool cost in the Weatherford area?',
    answer:
      'Custom gunite pools in the Weatherford and Parker County area typically range from $85,000 to $170,000 depending on size, terrain, and features. Larger acreage properties that take advantage of hillside views, vanishing edges, or full outdoor living integration often run $150,000–$250,000+. We provide a detailed, itemized quote after a free on-site consultation — no ballpark estimates, no surprises.',
  },
  {
    question: 'What cities and communities near Weatherford do you serve?',
    answer:
      'We serve Weatherford and the surrounding Parker County area, including Willow Park, Hudson Oaks, Brock, Millsap, Springtown, Mineral Wells, and Aledo. We also work across the Tarrant County line for clients in far west Fort Worth. If you are in Parker County or nearby, we are likely already working in your area — reach out for a free consultation.',
  },
];

export default function WeatherfordPoolBuilderPage() {
  return (
    <CityPageTemplate
      cityName="Weatherford"
      county="Parker"
      heroImage={HERO_IMAGE}
      heroImageAlt="Custom pool builder serving Weatherford and Parker County Texas"
      headline="Weatherford's Premier Custom Pool Builder"
      subheadline="Parker County is growing — and so is the demand for custom pools that match the scale and character of the land. We build for acreage, for ranches, and for the families putting down roots in Weatherford."
      openingParagraphs={[
        "Weatherford and Parker County are unlike any other market in the DFW area. Lots are larger. Properties have character — rolling terrain, native cedar, well systems, and the kind of breathing room that makes a truly ambitious pool design possible. Buyers here aren't looking for a basic rectangle. They want something that belongs on the land.",
        "Epic Custom Pools has experience building on the properties that challenge other contractors — sloped terrain, acreage lots, homes on well water, and rural builds outside city utility service areas. We've worked with Parker County's permitting offices and know the additional steps that come with building in unincorporated areas.",
        "Weatherford is also growing fast. Communities like Willow Park and Hudson Oaks are attracting buyers from Fort Worth and beyond, and those buyers expect the same quality they'd find anywhere in DFW. We bring that quality west — with the local knowledge to match.",
      ]}
      neighborhoodLabel="Areas We Serve from Weatherford"
      neighborhoods={[
        'Weatherford',
        'Willow Park',
        'Hudson Oaks',
        'Brock',
        'Millsap',
        'Aledo',
        'Springtown',
        'Mineral Wells',
        'Parker County',
      ]}
      localConsiderationsHeading="Parker County Permits, Well Water & Acreage Builds"
      localConsiderations="Building a pool in Parker County involves permitting through multiple jurisdictions depending on your property's location — city, ETJ, or unincorporated county. Properties on well water require additional planning around the pool fill process, chemical balance, and equipment selection. Sloped or terraced lots often call for retaining walls, elevated equipment pads, or custom excavation plans that a contractor unfamiliar with the terrain won't anticipate. We've managed all of these scenarios and factor them into your scope and price from day one — no surprises mid-project."
      poolTypesHeading="Pool Designs for Parker County Properties"
      poolTypesSection="Larger Weatherford properties open the door to pool designs that simply aren't possible on typical suburban lots. Freeform gunite pools with natural rock features, resort-scale vanishing edges that frame a hillside view, dedicated swim-up bars, and full-length lap pools are all within reach when you have the space. Many Weatherford homeowners also take advantage of their acreage to add outdoor kitchens, fire pits, and covered pergolas — features that transform a pool project into a complete backyard destination. Whatever the design, we size it to the property — not the other way around."
      ownerOperatedParagraph="Weatherford is still the kind of place where your reputation travels fast. Your neighbors know which contractors show up on time, do what they say, and stand behind their work. As an owner-operated business, we've built our reputation in small communities like Parker County by being exactly that contractor — no excuses, no handoffs, no franchise playbook. When you call, you talk to the person running your project. When something needs fixing, it gets fixed. That's the standard we've held since day one, and it's why we keep earning referrals in communities where trust is everything."
      source="weatherford-landing"
      defaultCity="Weatherford"
      citySlug="weatherford-pool-builder"
      geo={{ lat: 32.759, lng: -97.7976 }}
      faqs={FAQS}
    />
  );
}
