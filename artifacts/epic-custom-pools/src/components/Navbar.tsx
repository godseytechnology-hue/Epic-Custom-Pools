'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import siteConfig from '@/config/siteConfig';
import { trackEvent } from '@/lib/analytics';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleConsultationClick() {
    trackEvent('cta_click', { button_location: 'navbar', destination: '/consultation' });
  }

  function handlePhoneClick() {
    trackEvent('phone_click', { source: 'navbar' });
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-gold/20 ${
        scrolled
          ? 'bg-navy/85 backdrop-blur-[16px] shadow-lg'
          : 'bg-navy/50 backdrop-blur-[8px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-[88px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="Epic Custom Pools — Home"
          >
            <Image
              src="/logo-icon.png"
              alt="Epic Custom Pools logo"
              width={66}
              height={66}
              className="shrink-0 animate-logo-breathe"
              priority
            />
            <span
              className="font-barlow text-xl md:text-2xl font-black tracking-wide leading-tight uppercase"
              style={{
                background: 'linear-gradient(to bottom, #ffffff 0%, #7ed321 52%, #1ab3e8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Epic Custom Pools
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-inter text-sm font-medium transition-colors duration-[250ms] ${
                  pathname === link.href
                    ? 'text-gold active'
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
              className="font-inter text-sm text-teal hover:text-teal-light transition-colors duration-[250ms]"
            >
              {siteConfig.phone}
            </a>

            {/* CTA with pulse ring */}
            <div className="relative inline-flex">
              <span
                className="absolute inset-0 rounded animate-pulse-ring border-2 border-gold pointer-events-none"
                aria-hidden="true"
              />
              <Link
                href="/consultation"
                onClick={handleConsultationClick}
                className="relative inline-block bg-gradient-to-r from-gold to-gold-light text-navy font-inter font-bold text-sm px-5 py-2.5 rounded hover:brightness-110 transition-all duration-200"
              >
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-[16px] border-t border-white/10 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-inter text-base py-3 px-2 border-b border-white/10 transition-colors duration-[250ms] ${
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
              className="font-inter text-center text-teal font-medium py-3 border border-teal/40 rounded"
              style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/consultation"
              onClick={() => { handleConsultationClick(); setMenuOpen(false); }}
              className="block text-center bg-gradient-to-r from-gold to-gold-light text-navy font-inter font-bold py-3 rounded"
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
