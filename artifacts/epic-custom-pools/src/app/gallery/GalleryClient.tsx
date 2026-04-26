'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const BASE = 'https://images.unsplash.com';
const OPT = '?w=800&h=600&q=80&auto=format&fit=crop';

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: `${BASE}/photo-1600596542815-ffad4c1539a9${OPT}`,
    alt: 'Gunite pool built by Epic Custom Pools in Fort Worth TX',
    category: 'Gunite Pools',
  },
  {
    src: `${BASE}/photo-1560472355-536de3962603${OPT}`,
    alt: 'Custom gunite pool built by Epic Custom Pools in Weatherford TX',
    category: 'Gunite Pools',
  },
  {
    src: `${BASE}/photo-1582719478250-c89cae4dc85b${OPT}`,
    alt: 'Gunite pool with spa built by Epic Custom Pools in Aledo TX',
    category: 'Gunite Pools',
  },
  {
    src: `${BASE}/photo-1574362848149-11496d93a7c7${OPT}`,
    alt: 'Custom gunite pool built by Epic Custom Pools in Granbury TX',
    category: 'Gunite Pools',
  },
  {
    src: `${BASE}/photo-1536939459926-301728717817${OPT}`,
    alt: 'Gunite pool and outdoor area built by Epic Custom Pools in Benbrook TX',
    category: 'Gunite Pools',
  },
  {
    src: `${BASE}/photo-1562788869-4ed32648eb72${OPT}`,
    alt: 'Fiberglass pool built by Epic Custom Pools in Fort Worth TX',
    category: 'Fiberglass Pools',
  },
  {
    src: `${BASE}/photo-1600585154340-be6161a56a0c${OPT}`,
    alt: 'Fiberglass pool installation built by Epic Custom Pools in Weatherford TX',
    category: 'Fiberglass Pools',
  },
  {
    src: `${BASE}/photo-1581092795360-fd1ca04f0952${OPT}`,
    alt: 'Fiberglass pool backyard built by Epic Custom Pools in Aledo TX',
    category: 'Fiberglass Pools',
  },
  {
    src: `${BASE}/photo-1610375461246-83df859d849d${OPT}`,
    alt: 'Fiberglass pool and deck built by Epic Custom Pools in Mineral Wells TX',
    category: 'Fiberglass Pools',
  },
  {
    src: `${BASE}/photo-1571019613454-1cb2f99b2d8b${OPT}`,
    alt: 'Swim spa installation built by Epic Custom Pools in Fort Worth TX',
    category: 'Swim Spas',
  },
  {
    src: `${BASE}/photo-1572802419224-296b0aeee0d9${OPT}`,
    alt: 'Luxury swim spa built by Epic Custom Pools in Weatherford TX',
    category: 'Swim Spas',
  },
  {
    src: `${BASE}/photo-1527489377706-5bf97e608852${OPT}`,
    alt: 'Swim spa and hot tub built by Epic Custom Pools in Granbury TX',
    category: 'Swim Spas',
  },
  {
    src: `${BASE}/photo-1559329007-40df8a9345d8${OPT}`,
    alt: 'Outdoor living space and pool built by Epic Custom Pools in Fort Worth TX',
    category: 'Outdoor Living',
  },
  {
    src: `${BASE}/photo-1558618666-fcd25c85cd64${OPT}`,
    alt: 'Outdoor kitchen and pool area built by Epic Custom Pools in Aledo TX',
    category: 'Outdoor Living',
  },
  {
    src: `${BASE}/photo-1501854140801-50d01698950b${OPT}`,
    alt: 'Pergola and poolside outdoor living built by Epic Custom Pools in Weatherford TX',
    category: 'Outdoor Living',
  },
  {
    src: `${BASE}/photo-1580587771525-78b9dba3b914${OPT}`,
    alt: 'Backyard outdoor entertaining area built by Epic Custom Pools in Granbury TX',
    category: 'Outdoor Living',
  },
  {
    src: `${BASE}/photo-1569317002804-ab77bcf1bce4${OPT}`,
    alt: 'Pool deck and outdoor seating built by Epic Custom Pools in Fort Worth TX',
    category: 'Outdoor Living',
  },
  {
    src: `${BASE}/photo-1523867574998-1a336b6ded04${OPT}`,
    alt: 'Outdoor living and pool area built by Epic Custom Pools in Benbrook TX',
    category: 'Outdoor Living',
  },
];

const CATEGORIES = ['All', 'Gunite Pools', 'Fiberglass Pools', 'Swim Spas', 'Outdoor Living'];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    trackEvent('gallery_image_open', { category: filtered[index].category });
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevImage() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }

  function nextImage() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }

  return (
    <>
      {/* ─── FILTER BAR ──────────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-wrap gap-2 items-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                trackEvent('gallery_filter', { category: cat });
              }}
              className={`font-inter text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-150 ${
                activeCategory === cat
                  ? 'bg-navy text-gold'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-inter text-xs text-gray-400">
            {filtered.length} photo{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* ─── GRID ────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <button
                key={img.src}
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`View full size: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-end p-4">
                  <span className="font-inter text-xs font-semibold text-white/0 group-hover:text-white/90 transition-colors duration-300 bg-navy/50 px-3 py-1 rounded-full">
                    {img.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* ─── PLACEHOLDER NOTE ──────────────────────────────── */}
          <p className="font-inter text-gray-400 text-sm text-center mt-10 italic">
            Real project photos coming soon — these represent the quality and style we deliver.
          </p>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Love What You See? Let&apos;s Build Yours.
          </h2>
          <p className="font-inter text-white/70 text-lg mb-8">
            Every backyard we build starts with a conversation. No pressure — just ideas, honesty, and a clear plan.
          </p>
          <Link
            href="/consultation"
            onClick={() => trackEvent('cta_click', { button_location: 'gallery_bottom' })}
            className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-base px-10 py-4 rounded hover:bg-gold-light transition-colors duration-200"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* ─── LIGHTBOX ────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white font-inter text-sm font-semibold px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            ✕ Close
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl font-bold px-3 py-4 rounded bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl font-bold px-3 py-4 rounded bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Caption + counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="font-inter text-white/70 text-xs">
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
