import type { Metadata } from 'next';
import Link from 'next/link';
import PricingLeadForm from '@/components/PricingLeadForm';
import ServiceJsonLd from '@/components/ServiceJsonLd';

export const metadata: Metadata = {
  title: 'Pool Pricing Fort Worth TX | Epic Custom Pools',
  description:
    'Transparent pool and outdoor living pricing for Fort Worth and DFW. Typical cost ranges — no forms, no pressure, no surprises.',
  openGraph: {
    title: 'Pool Pricing Fort Worth TX | Epic Custom Pools',
    description:
      'Transparent pricing for Fort Worth and DFW. Pool and outdoor living cost ranges — no forms, no pressure.',
  },
};

const PRICING_TIERS = [
  {
    name: 'Entry Level',
    range: '$55,000 – $80,000',
    tagline: 'A clean, well-built pool at a price that makes sense.',
    features: [
      'Typical size: 12×24 ft – 14×28 ft',
      'Rectangular or simple freeform shape',
      'White plaster finish',
      'Standard pump and filter package',
      'Basic LED lighting',
      'No attached spa or water features',
      'Minimal decking included',
    ],
  },
  {
    name: 'Mid-Range',
    range: '$80,000 – $130,000',
    tagline: 'Custom shape, upgraded finishes, and real features.',
    features: [
      'Typical size: 14×28 ft – 18×36 ft',
      'Custom freeform or geometric shape',
      'Quartz or pebble finish',
      'Variable-speed pump, salt-system ready',
      'Color LED lighting package',
      'Tanning ledge or attached spa',
      '1–2 water features (deck jets or sheer descent)',
      'Automation-compatible equipment',
    ],
    highlight: true,
  },
  {
    name: 'Luxury',
    range: '$130,000 – $250,000+',
    tagline: 'A fully realized backyard experience — no compromises.',
    features: [
      'Any shape and size — no limitations',
      'Vanishing or negative edge option',
      'Glass tile or premium plaster finish',
      'Full smart automation (phone-controlled)',
      'Integrated spa and multiple water features',
      'Grotto, fire/water feature, or custom lighting design',
      'Premium coping, travertine, or natural stone decking',
      'Full outdoor living integration available',
    ],
  },
];

const OUTDOOR_LIVING_ROWS = [
  { type: 'Outdoor Kitchen (basic grill station)', range: '$8,000 – $15,000', notes: 'Built-in grill, counter, storage' },
  { type: 'Outdoor Kitchen (full)', range: '$25,000 – $60,000+', notes: 'Grill, fridge, sink, pizza oven, bar seating' },
  { type: 'Fire Pit (built-in gas)', range: '$5,000 – $12,000', notes: 'Custom gas fire pit or linear fire feature' },
  { type: 'Pergola / Patio Cover', range: '$12,000 – $35,000', notes: 'Wood or steel, attached or freestanding' },
  { type: 'Hardscape / Patio', range: '$8,000 – $25,000', notes: 'Flagstone, travertine, pavers, or stamped concrete' },
  { type: 'Complete Backyard Package', range: 'Priced as full project', notes: 'Pool + outdoor living built together — most cost-effective' },
];

const COST_FACTORS = [
  { icon: '📐', label: 'Pool Size & Shape', desc: 'Larger pools and complex freeform shapes require more materials, labor, and engineering.' },
  { icon: '🏊', label: 'Depth', desc: 'Deep end upgrades, beach entries, and tanning ledges all affect excavation and concrete costs.' },
  { icon: '✨', label: 'Water Features', desc: 'Waterfalls, grottos, deck jets, and sheer descents add dramatic value — and real cost.' },
  { icon: '🪨', label: 'Finish & Tile', desc: 'Plaster is the entry point. Quartz and glass tile finishes last longer and cost more upfront.' },
  { icon: '⚙️', label: 'Equipment', desc: 'Variable-speed pumps, saltwater systems, and smart automation raise upfront cost but lower long-term expenses.' },
  { icon: '🚧', label: 'Site Access', desc: 'Difficult lots, retaining walls, and limited equipment access add excavation and staging costs.' },
  { icon: '🪵', label: 'Decking', desc: 'Travertine, cool deck, and pavers vary significantly in price. Deck size is often as big a factor as the pool.' },
  { icon: '🌿', label: 'Landscaping & Fencing', desc: 'Required fencing and landscaping restoration around the pool area adds to total project cost.' },
];

const PROCESS_STEPS = [
  { step: 1, title: 'Free Consultation', weeks: '1–2 weeks', desc: 'We visit your yard, discuss your vision, and deliver a detailed proposal with no obligation.' },
  { step: 2, title: 'Design', weeks: '2–3 weeks', desc: 'Our designer creates a 3D rendering of your pool. You review and approve every detail before we break ground.' },
  { step: 3, title: 'Permitting', weeks: '3–6 weeks', desc: 'We handle all permit submissions and city approvals. Timeline varies by jurisdiction.' },
  { step: 4, title: 'Construction', weeks: '8–14 weeks', desc: 'Excavation through final finish. We keep you updated at every milestone and coordinate all trades.' },
  { step: 5, title: 'Final Walkthrough', weeks: '1 week', desc: 'We walk the finished pool with you, run equipment checks, and hand over your operating manual and warranty.' },
];

export default function PricingPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Pool Pricing & Design Consultation"
        serviceDescription="Transparent pricing for Fort Worth and DFW. See real cost ranges for custom pools, outdoor kitchens, fire pits, and hardscapes — no forms, no pressure. Free design consultation included."
        serviceUrl="/pricing"
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="bg-navy py-28 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-inter text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Fort Worth &mdash; DFW
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Honest Pricing. No Surprises.
          </h1>
          <p className="font-inter text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            We publish our pricing because we&apos;re confident in our value — and because you deserve to know what you&apos;re getting into before you ever pick up the phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing-form-mid-page"
              className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-base px-8 py-4 rounded hover:bg-gold-light transition-colors duration-200"
            >
              Get a Personalized Estimate →
            </a>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-inter font-semibold text-base px-8 py-4 rounded hover:border-white hover:bg-white/5 transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRICING TIER CARDS ───────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Pool Pricing
          </h2>
          <p className="font-inter text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Real ranges based on current pool projects in the DFW area. Find the tier that fits your vision — your actual price depends on size, features, and site conditions.
          </p>
          <div className="space-y-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-6 md:p-8 ${
                  tier.highlight
                    ? 'border-gold bg-navy text-white shadow-xl'
                    : 'border-gray-200 bg-white text-navy shadow-sm'
                }`}
              >
                {tier.highlight && (
                  <span className="inline-block font-inter text-xs font-bold text-navy bg-gold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className={`font-playfair text-2xl font-bold ${tier.highlight ? 'text-white' : 'text-navy'}`}>
                    {tier.name}
                  </h3>
                  <span className={`font-inter text-2xl font-bold ${tier.highlight ? 'text-gold' : 'text-gold'}`}>
                    {tier.range}
                  </span>
                </div>
                <p className={`font-inter text-sm mb-5 ${tier.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                  {tier.tagline}
                </p>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                      <span className={`font-inter text-sm ${tier.highlight ? 'text-white/85' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="font-inter text-gray-400 text-sm text-center mt-6">
            All estimates are provided in writing before any work begins. No surprises.
          </p>
        </div>
      </section>

      {/* ─── OUTDOOR LIVING PRICING ───────────────────────── */}
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Outdoor Living Estimates
          </h2>
          <p className="font-inter text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Build your outdoor kitchen, fire pit, pergola, and hardscape at the same time as your pool — one mobilization, better coordination, and no scheduling delays.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="bg-teal text-white">
                  <th className="text-left px-6 py-4 font-semibold">Outdoor Living Service</th>
                  <th className="text-left px-6 py-4 font-semibold">Typical Range</th>
                  <th className="text-left px-6 py-4 font-semibold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {OUTDOOR_LIVING_ROWS.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-navy font-semibold">{row.type}</td>
                    <td className="px-6 py-4 text-teal font-bold text-base">{row.range}</td>
                    <td className="px-6 py-4 text-gray-500 hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-inter text-gray-400 text-sm text-center mt-4">
            Outdoor living estimates vary by materials, square footage, and site conditions. All pricing provided in writing before any work begins.
          </p>
        </div>
      </section>

      {/* ─── FIRST INLINE FORM ────────────────────────────── */}
      <PricingLeadForm
        position="mid-page"
        headline="Want a More Accurate Estimate for Your Yard?"
        subtext="Tell us a little about your project and we'll give you a realistic range — no obligation."
        buttonLabel="Get My Personalized Estimate →"
      />

      {/* ─── COST FACTORS ─────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            What Affects Your Final Price
          </h2>
          <p className="font-inter text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Every backyard is different. Here are the eight factors that move the needle most on total project cost.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COST_FACTORS.map((f) => (
              <div key={f.label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <span className="text-2xl mb-3 block" aria-hidden="true">{f.icon}</span>
                <h3 className="font-playfair text-base font-bold text-navy mb-2">{f.label}</h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS TIMELINE ─────────────────────────────── */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Our Process, Start to Finish
          </h2>
          <p className="font-inter text-gray-500 text-center mb-14 max-w-2xl mx-auto">
            Most pools take 4–6 months from first call to first swim. Here&apos;s exactly what happens at each stage.
          </p>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/30 hidden md:block" aria-hidden="true" />
            <div className="space-y-8">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center z-10">
                    <span className="font-playfair font-bold text-navy text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                      <h3 className="font-playfair text-lg font-bold text-navy">{step.title}</h3>
                      <span className="font-inter text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full self-start sm:self-auto">
                        {step.weeks}
                      </span>
                    </div>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY WE SHOW PRICING ──────────────────────────── */}
      <section className="bg-navy/5 border-y border-navy/10 py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-6">
            Why We Show Our Pricing
          </h2>
          <p className="font-inter text-gray-600 text-lg leading-relaxed">
            Most contractors make you call before they&apos;ll mention a number. We think that&apos;s backwards. You&apos;re about to make one of the biggest investments in your home. You should be able to do your research without feeling pressured. We publish our pricing because we&apos;re confident in what we build — and because the builders who choose us do so knowing exactly what they&apos;re getting.
          </p>
        </div>
      </section>

      {/* ─── SECOND INLINE FORM ───────────────────────────── */}
      <PricingLeadForm
        position="bottom"
        headline="Ready to Talk Through the Numbers?"
        subtext="Schedule a free design consultation — we'll walk through your yard, your vision, and give you a real estimate with no surprises."
        buttonLabel="Get My Free Consultation →"
      />
    </>
  );
}
