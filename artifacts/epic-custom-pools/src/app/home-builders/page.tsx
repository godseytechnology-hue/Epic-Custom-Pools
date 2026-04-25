import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Pool Installation for Home Builders | Epic Custom Pools',
  description: `Reliable trade partner for residential home builders in ${siteConfig.serviceAreaPhrase}. We handle pool design, permitting, and installation so you can focus on your build.`,
  openGraph: {
    title: 'Pool Installation for Home Builders | Epic Custom Pools',
    description: `Partner with Epic Custom Pools for new construction pool installations across ${siteConfig.serviceAreaPhrase}. Consistent quality, on-schedule delivery.`,
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80';

export default function HomeBuildersPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Pool Installation for Home Builders"
        serviceDescription={`New construction pool installation for residential home builders across ${siteConfig.serviceAreaPhrase}`}
        serviceUrl="/home-builders"
      />
      <ServicePageTemplate
        heroImage={HERO_IMAGE}
        heroImageAlt="new construction pool installation for home builders"
        heroHeadline="Pool Installation for Home Builders"
        heroSubheadline={`A dependable trade partner for residential developers and general contractors across ${siteConfig.serviceAreaPhrase}. We deliver pools on schedule and on spec — every time.`}
        source="home-builders-page"
        sections={[
          {
            heading: 'Why Home Builders Choose Epic Custom Pools',
            body: [
              'When you are building a new home, every trade partner affects your timeline and your reputation. Pool installation is no exception. A missed deadline or a sloppy finish hurts the sale and reflects on you — regardless of who is at fault.',
              `Epic Custom Pools works exclusively with reputable home builders and developers across ${siteConfig.serviceAreaPhrase}. We understand construction schedules, coordinate directly with your site super, and deliver finished pools that are ready for buyer walkthroughs.`,
              'From the design consultation through final inspection, we function as an extension of your build team — not a vendor you have to manage.',
            ],
          },
          {
            heading: 'What the Partnership Looks Like',
            body: [
              'We integrate into your build process at whatever stage makes sense — pre-slab, during framing, or after landscaping. Our team reviews your site plan, identifies the optimal placement for the pool and equipment pad, and coordinates with your excavation contractor if needed.',
              'We handle all permitting in the relevant jurisdiction, manage our own crew through every phase of the build, and complete a thorough punch list before final handover. You get a single point of contact from start to finish.',
            ],
          },
        ]}
        benefits={[
          {
            icon: '📋',
            title: 'We Handle All Permitting',
            desc: 'Our team submits, tracks, and closes all pool permits with the relevant city or county — no burden on your office.',
          },
          {
            icon: '📅',
            title: 'Schedule-Driven',
            desc: 'We work backward from your closing date and build a pool installation schedule that keeps your project on track.',
          },
          {
            icon: '🔧',
            title: 'Single Trade Responsibility',
            desc: 'Excavation, plumbing, electrical, decking, and finish work are all managed under one contract. No finger-pointing between subs.',
          },
          {
            icon: '📐',
            title: 'Design Coordination',
            desc: 'We review your architectural plans and coordinate pool placement, equipment runs, and electrical with your MEP trades early — before it costs money to change.',
          },
          {
            icon: '🏡',
            title: 'Buyer-Ready Finish',
            desc: 'Every pool is completed to a presentation standard your buyers expect — clean lines, spotless tile, and full operational testing.',
          },
          {
            icon: '🤝',
            title: 'Repeat-Friendly Pricing',
            desc: 'Builders who work with us on multiple projects receive preferred scheduling and volume pricing. We grow with you.',
          },
        ]}
        processSteps={[
          {
            step: 1,
            title: 'Project Review',
            desc: 'Share your site plan and timeline. We review pool placement, equipment pad location, and permit jurisdiction, then provide a detailed scope and price.',
          },
          {
            step: 2,
            title: 'Design Sign-Off',
            desc: 'We finalize the pool design with your team — shape, finish, water features, and any builder-specified options — and prepare permit documents.',
          },
          {
            step: 3,
            title: 'Permitting',
            desc: 'We submit all permit applications and track approvals with the city or county on your behalf.',
          },
          {
            step: 4,
            title: 'Installation',
            desc: 'Our crew handles excavation, steel, plumbing, electrical, concrete or shell placement, tile, coping, and decking per the approved plan.',
          },
          {
            step: 5,
            title: 'Inspections & Punch List',
            desc: 'We schedule and pass all required inspections, complete a detailed punch list, and bring the pool to final operational status before your walkthrough.',
          },
          {
            step: 6,
            title: 'Buyer Handover',
            desc: 'We provide the homeowner with an equipment orientation, operating manual, and warranty documentation — so your buyer is confident from day one.',
          },
        ]}
        faq={[
          {
            question: 'What size developments do you work with?',
            answer: `We partner with builders on everything from single custom homes to communities with dozens of lots across ${siteConfig.serviceAreaPhrase}. Contact us to discuss volume scheduling and preferred builder arrangements.`,
          },
          {
            question: 'Can you work from our architectural plans?',
            answer: 'Yes. We routinely work from architectural site plans and coordinate with your structural and MEP engineers to ensure the pool scope integrates cleanly with the home design.',
          },
          {
            question: 'Do you offer a warranty on new construction pools?',
            answer: 'Yes. All pools we install for new construction carry a structural warranty and equipment warranty. Warranty documentation is provided at buyer handover.',
          },
          {
            question: 'What geographic areas do you serve for home builder projects?',
            answer: `We serve home builders across ${siteConfig.serviceAreaPhrase}. Reach out to discuss any project outside our standard footprint.`,
          },
        ]}
      />
    </>
  );
}
