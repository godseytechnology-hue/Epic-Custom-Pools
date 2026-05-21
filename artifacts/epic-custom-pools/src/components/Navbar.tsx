'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import siteConfig from '@/config/siteConfig';
import { trackEvent } from '@/lib/analytics';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function handleConsultationClick() {
    trackEvent('cta_click', { button_location: 'navbar', destination: '/consultation' });
  }

  function handlePhoneClick() {
    trackEvent('phone_click', { source: 'navbar' });
  }

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Epic Custom Pools — Home"
          >
            <Image
              src="/logo-icon.png"
              alt="Epic Custom Pools logo"
              width={38}
              height={38}
              className="shrink-0"
              priority
            />
            <span className="font-playfair text-gold text-lg md:text-xl font-bold tracking-wide leading-tight">
              Epic Custom Pools
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
              onClick={handlePhoneClick}
              className="font-inter text-sm text-gold/80 hover:text-gold transition-colors duration-150"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/consultation"
              onClick={handleConsultationClick}
              className="inline-block bg-gold text-navy font-inter font-semibold text-sm px-5 py-2 rounded hover:bg-gold-light transition-colors duration-200"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-inter text-base py-3 px-2 border-b border-white/10 transition-colors duration-150 ${
                  pathname === link.href ? 'text-gold' : 'text-white/80'
                }`}
                style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
              onClick={handlePhoneClick}
              className="font-inter text-center text-gold font-medium py-3 border border-gold/40 rounded"
              style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/consultation"
              onClick={() => {
                handleConsultationClick();
                setMenuOpen(false);
              }}
              className="block text-center bg-gold text-navy font-inter font-semibold py-3 rounded"
              style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
