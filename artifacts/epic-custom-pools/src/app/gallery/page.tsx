import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Custom Pool Gallery Fort Worth TX | Epic Custom Pools',
  description:
    'Browse our custom pool and outdoor living gallery — gunite pools, outdoor kitchens, fire pits, and hardscapes built across Fort Worth and the DFW west corridor.',
  openGraph: {
    title: 'Custom Pool Gallery | Epic Custom Pools',
    description:
      'See the quality and style we deliver — custom gunite pools, outdoor kitchens, fire pits, and hardscapes across Fort Worth, Weatherford, Aledo, and beyond.',
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* ─── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-navy py-16 md:py-20 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-inter text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Fort Worth · Weatherford · Aledo · DFW West
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Our Work
          </h1>
          <p className="font-inter text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Browse projects by type. Every pool below reflects the craftsmanship and attention to detail we bring to every build.
          </p>
        </div>
      </section>

      <GalleryClient />
    </>
  );
}
