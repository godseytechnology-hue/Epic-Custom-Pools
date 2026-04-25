import Link from 'next/link';
import siteConfig from '@/config/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Gold accent bar */}
      <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* Column 1 — Services */}
          <div>
            <h3 className="font-playfair text-gold text-lg font-bold mb-5">Services</h3>
            <ul className="space-y-3">
              {siteConfig.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="font-inter text-white/70 text-sm hover:text-white transition-colors duration-150"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Cities Served */}
          <div>
            <h3 className="font-playfair text-gold text-lg font-bold mb-5">Cities Served</h3>
            <ul className="space-y-3">
              {siteConfig.serviceCities.map((city) => (
                <li key={city}>
                  <span className="font-inter text-white/70 text-sm">{city}, TX</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="font-playfair text-gold text-lg font-bold mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                  className="font-inter text-white/70 text-sm hover:text-gold transition-colors duration-150 flex items-start gap-2"
                >
                  <span className="text-gold mt-0.5" aria-hidden="true">📞</span>
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-inter text-white/70 text-sm hover:text-gold transition-colors duration-150 flex items-start gap-2"
                >
                  <span className="text-gold mt-0.5" aria-hidden="true">✉</span>
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="font-inter text-white/70 text-sm flex items-start gap-2">
                  <span className="text-gold mt-0.5" aria-hidden="true">🕐</span>
                  <span>Mon–Sat: 7am–7pm</span>
                </div>
              </li>
              <li>
                <div className="font-inter text-white/70 text-sm flex items-start gap-2">
                  <span className="text-gold mt-0.5" aria-hidden="true">📍</span>
                  <span>{siteConfig.address}</span>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/consultation"
                className="inline-block bg-gold text-navy font-inter font-semibold text-sm px-6 py-2.5 rounded hover:bg-gold-light transition-colors duration-200"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Brand tagline + divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gold text-xl select-none" aria-hidden="true">◆</span>
              <span className="font-playfair text-white font-bold text-lg">Epic Custom Pools</span>
            </div>
            <p className="font-inter text-gold/70 text-sm italic text-center md:text-right">
              {siteConfig.tagline}
            </p>
          </div>
          <p className="font-inter text-white/30 text-xs text-center mt-6">
            &copy; {year} {siteConfig.siteName}. All rights reserved. | Fort Worth, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
