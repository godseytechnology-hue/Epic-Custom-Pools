'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <Image src="/logo-icon.webp" alt="" width={64} height={64} className="mx-auto" aria-hidden="true" />
        <h1 className="font-playfair text-3xl font-bold text-white mt-6 mb-3">
          Something went wrong
        </h1>
        <p className="font-inter text-white/60 text-base leading-relaxed mb-8">
          We hit an unexpected error. Try refreshing the page — if the problem continues, please call us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center bg-gold text-navy font-inter font-bold text-sm px-6 py-3 rounded hover:bg-gold-light transition-colors duration-200"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-white/30 text-white font-inter font-semibold text-sm px-6 py-3 rounded hover:bg-white/10 transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
