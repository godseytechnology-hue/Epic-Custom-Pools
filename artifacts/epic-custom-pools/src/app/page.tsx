import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fort Worth\'s Premier Custom Pool Builder',
  description:
    'Epic Custom Pools builds luxury gunite, fiberglass, and swim spa pools across Fort Worth, Weatherford, Aledo, Granbury, and DFW. Get your free consultation.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 py-24 text-center">
      {/* Brand wordmark */}
      <div className="mb-6">
        <span className="text-gold/40 text-6xl select-none">◆</span>
      </div>
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        Epic Custom Pools
      </h1>
      <p className="font-inter text-gold-light text-lg md:text-xl mb-3 max-w-xl">
        Fort Worth&apos;s Premier Custom Pool Builder
      </p>
      <p className="font-inter text-white/50 text-sm mb-12 max-w-md">
        Serving Fort Worth, Weatherford, Aledo, Granbury &amp; the surrounding DFW communities.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/consultation"
          className="inline-block bg-gold text-navy font-inter font-semibold px-8 py-3 rounded hover:bg-gold-light transition-colors duration-200"
        >
          Get Your Free Consultation
        </Link>
        <Link
          href="/gunite-pools"
          className="inline-block border border-gold/40 text-gold font-inter font-medium px-8 py-3 rounded hover:border-gold hover:bg-white/5 transition-colors duration-200"
        >
          Explore Our Pools
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl w-full text-left">
        {[
          { title: 'Gunite Pools', desc: 'Fully custom concrete pools built to your exact specifications.' },
          { title: 'Fiberglass Pools', desc: 'Smooth, low-maintenance fiberglass pools installed in days.' },
          { title: 'Swim Spas', desc: 'Year-round aquatic wellness for exercise and relaxation.' },
        ].map((item) => (
          <div key={item.title} className="border border-white/10 rounded-lg p-5">
            <h3 className="font-playfair text-gold font-semibold text-lg mb-2">{item.title}</h3>
            <p className="font-inter text-white/60 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
