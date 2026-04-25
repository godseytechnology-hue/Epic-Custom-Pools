import type { Metadata } from 'next';
import Link from 'next/link';
import siteConfig from '@/config/siteConfig';
import FormSubmitTracker from '@/components/FormSubmitTracker';

export const metadata: Metadata = {
  title: 'Thank You — We\'ll Be in Touch Soon',
  description: 'Your consultation request has been received. Epic Custom Pools will call you within one business day.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <FormSubmitTracker />
      <main className="min-h-screen bg-navy flex flex-col items-center justify-center px-4 text-center py-24">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <span className="text-gold text-5xl select-none" aria-hidden="true">◆</span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            We&apos;ll Be In Touch Soon!
          </h1>
          <p className="font-inter text-gold-light text-lg mb-8 leading-relaxed">
            Your consultation request has been received. Expect a call from us within{' '}
            <strong className="text-white">one business day</strong> — usually the same day.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-10">
            <p className="font-inter text-white/70 text-sm mb-3">
              In the meantime, feel free to reach us directly:
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 font-inter font-semibold text-gold text-xl hover:text-gold-light transition-colors"
            >
              <span aria-hidden="true">📞</span>
              {siteConfig.phone}
            </a>
            <p className="font-inter text-white/40 text-xs mt-2">Mon–Sat, 7am–7pm Central</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gallery"
              className="font-inter text-sm font-medium text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-6 py-2.5 rounded transition-colors"
            >
              Browse Our Gallery
            </Link>
            <Link
              href="/pricing"
              className="font-inter text-sm font-medium text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-6 py-2.5 rounded transition-colors"
            >
              See Pricing & Process
            </Link>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="font-inter text-white/30 text-xs hover:text-white/60 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
