import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import siteConfig from '@/config/siteConfig';

export const metadata: Metadata = {
  title: 'Free Pool Design Consultation Fort Worth | Epic Custom Pools',
  description:
    'Schedule your free pool design consultation in Fort Worth and DFW. No obligation — we listen, design, estimate, and plan. Epic Custom Pools.',
  openGraph: {
    title: 'Free Pool Design Consultation Fort Worth | Epic Custom Pools',
    description:
      'Book a free design consultation with Epic Custom Pools. We come to you, design your dream pool, and deliver a real estimate — no pressure.',
  },
};

const CONSULTATION_STEPS = [
  {
    icon: '👂',
    title: 'We Listen',
    desc: 'We start by understanding your vision, your budget, your timeline, and how you want to use the space — before we draw a single line.',
  },
  {
    icon: '✏️',
    title: 'We Design',
    desc: 'Our designer creates a 3D rendering of your custom pool. You see exactly what it will look like in your yard before any money changes hands.',
  },
  {
    icon: '📋',
    title: 'We Estimate',
    desc: 'You receive a detailed, itemized written estimate. Every cost is explained — no vague ranges, no surprises when the invoice arrives.',
  },
  {
    icon: '🗓️',
    title: 'We Plan',
    desc: 'If you choose to move forward, we walk you through the permitting and build timeline so you know exactly what to expect and when.',
  },
];

const FAQS = [
  {
    question: 'How long does a consultation take?',
    answer:
      'Most consultations run 60–90 minutes. We spend time in your backyard, discuss your vision in detail, and make sure we understand your priorities before we leave.',
  },
  {
    question: 'Is there any obligation after the consultation?',
    answer:
      'None whatsoever. The consultation is completely free and comes with no strings attached. Our goal is to give you enough information to make a confident decision — whether that\'s with us or not.',
  },
  {
    question: 'What should I prepare before we meet?',
    answer:
      'Nothing required, but it helps to have a rough idea of your budget range, any photos of pools you love, and access to your backyard. If you have a property survey or plot plan, that\'s a bonus — but not required.',
  },
  {
    question: 'Do you serve my area?',
    answer: `We serve ${siteConfig.serviceAreaPhrase}. If you're outside that footprint, contact us anyway — we may still be able to help or refer you to someone we trust.`,
  },
];

export default function ConsultationPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="bg-navy py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-inter text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Fort Worth &mdash; DFW
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Let&apos;s Design Your Dream Pool — At No Cost to You
          </h1>
          <p className="font-inter text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our free design consultations are the first step for every pool we build. No pressure. No obligation. Just a real conversation about what&apos;s possible in your backyard.
          </p>
        </div>
      </section>

      {/* ─── WHAT HAPPENS ─────────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            What Happens in a Consultation
          </h2>
          <p className="font-inter text-gray-500 text-center mb-14 max-w-2xl mx-auto">
            We don&apos;t show up with a pitch. We show up with a notepad and an open mind.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONSULTATION_STEPS.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                  <span className="text-xl" aria-hidden="true">{s.icon}</span>
                </div>
                <div className="absolute top-5 left-12 right-0 h-px bg-gold/20 hidden lg:block" aria-hidden={i === CONSULTATION_STEPS.length - 1 ? 'true' : 'false'} />
                <h3 className="font-playfair text-lg font-bold text-navy mb-2">{s.title}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD FORM ────────────────────────────────────── */}
      <LeadForm source="consultation-page" />

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-10">
            Common Questions
          </h2>
          <div className="space-y-5">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-playfair text-lg font-bold text-navy mb-3">{faq.question}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE CITIES ───────────────────────────────── */}
      <section className="bg-white py-14 px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-2xl font-bold text-navy mb-4">
            Areas We Serve
          </h2>
          <p className="font-inter text-gray-500 text-sm mb-6">
            We currently serve the following communities in the Fort Worth / DFW area:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {siteConfig.serviceCities.map((city: string) => (
              <span
                key={city}
                className="font-inter text-sm text-navy font-semibold bg-navy/5 border border-navy/10 px-4 py-2 rounded-full"
              >
                {city}
              </span>
            ))}
            <span className="font-inter text-sm text-gray-400 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full">
              + Surrounding Areas
            </span>
          </div>
          <p className="font-inter text-gray-400 text-xs mt-6">
            Not sure if we serve your area? Call us at{' '}
            <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="text-teal underline">
              {siteConfig.phone}
            </a>{' '}
            or submit the form above.
          </p>
        </div>
      </section>
    </>
  );
}
