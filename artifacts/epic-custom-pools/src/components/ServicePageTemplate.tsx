import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import MarqueeTicker from '@/components/MarqueeTicker';
import SectionDivider from '@/components/SectionDivider';

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContentSection = {
  heading: string;
  body: string | string[];
};

export type BenefitItem = {
  icon: string;
  title: string;
  desc: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  desc: string;
};

export type ComparisonRow = {
  feature: string;
  left: string;
  right: string;
};

export type ServicePageTemplateProps = {
  heroImage: string;
  heroImageAlt: string;
  heroHeadline: string;
  heroSubheadline: string;
  source: string;
  sections: ContentSection[];
  benefits?: BenefitItem[];
  processSteps?: ProcessStep[];
  comparisonTable?: {
    caption: string;
    leftHeader: string;
    rightHeader: string;
    rows: ComparisonRow[];
  };
  extraContent?: React.ReactNode;
  faq: FaqItem[];
};

export default function ServicePageTemplate({
  heroImage,
  heroImageAlt,
  heroHeadline,
  heroSubheadline,
  source,
  sections,
  benefits,
  processSteps,
  comparisonTable,
  extraContent,
  faq,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section data-dark-section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/72" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full py-20">
          <div className="max-w-2xl">
            <div className="mb-5">
              <Image
                src="/logo-icon.webp"
                alt="Epic Custom Pools"
                width={72}
                height={72}
                className="drop-shadow-[0_4px_16px_rgba(26,179,232,0.60)]"
              />
            </div>
            <p className="font-inter text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              Fort Worth &mdash; DFW
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              {heroHeadline}
            </h1>
            <p className="font-inter text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-base px-8 py-4 rounded hover:bg-gold-light transition-colors duration-200"
              >
                Get My Free Quote
              </a>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white font-inter font-semibold text-base px-8 py-4 rounded hover:border-white hover:bg-white/5 transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarqueeTicker />
      <SectionDivider fill="#e1f3fc" bg="#0d2540" variant="wave" height={56} />

      {/* ─── CONTENT SECTIONS ─────────────────────────────── */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-4">
                {section.heading}
              </h2>
              {Array.isArray(section.body) ? (
                <div className="space-y-3">
                  {section.body.map((para, j) => (
                    <p key={j} className="font-inter text-gray-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="font-inter text-gray-600 leading-relaxed">{section.body}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────── */}
      {benefits && benefits.length > 0 && (
        <>
          <section className="bg-gray-100 py-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-12">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex flex-col items-start bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                >
                  <span className="text-3xl mb-4" aria-hidden="true">{b.icon}</span>
                  <h3 className="font-playfair text-lg font-bold text-navy mb-2">{b.title}</h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </>
      )}

      {/* ─── PROCESS STEPS ────────────────────────────────── */}
      {processSteps && processSteps.length > 0 && (
        <>
          <section className="bg-slate-100 py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-12">
              Our Build Process
            </h2>
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                    <span className="font-playfair font-bold text-white text-lg">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-navy mb-1">{step.title}</h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </>
      )}

      {/* ─── COMPARISON TABLE ─────────────────────────────── */}
      {comparisonTable && (
        <>
          <section className="bg-white py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-10">
              {comparisonTable.caption}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm font-inter">
                <thead>
                  <tr className="bg-teal text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold">{comparisonTable.leftHeader}</th>
                    <th className="text-center px-6 py-4 font-semibold">{comparisonTable.rightHeader}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.left}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.right}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        </>
      )}

      {/* ─── EXTRA CONTENT ────────────────────────────────── */}
      {extraContent}

      {/* ─── INTERNAL LINKS ───────────────────────────────── */}
      <section className="bg-gray-100 py-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center bg-navy text-white font-inter font-semibold text-sm px-8 py-3 rounded hover:bg-navy/80 transition-colors duration-200"
          >
            View Pricing &amp; Process →
          </Link>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center border-2 border-navy text-navy font-inter font-semibold text-sm px-8 py-3 rounded hover:bg-navy hover:text-white transition-colors duration-200"
          >
            Book Free Consultation →
          </Link>
        </div>
      </section>

      {/* ─── LEAD FORM ────────────────────────────────────── */}
      <LeadForm source={source} />

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-playfair text-lg font-bold text-navy mb-3">{item.question}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile bottom padding */}
      <div className="md:hidden h-14" aria-hidden="true" />
    </>
  );
}
