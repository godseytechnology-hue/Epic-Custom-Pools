import Link from 'next/link';
import siteConfig from '@/config/siteConfig';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/10">
      {/* Call Now */}
      <a
        href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
        className="flex-1 flex items-center justify-center gap-2 bg-navy text-gold font-inter font-semibold text-sm py-4 hover:bg-navy/90 transition-colors"
        style={{ minHeight: '56px' }}
        aria-label={`Call us at ${siteConfig.phone}`}
      >
        <span aria-hidden="true">📞</span>
        <span>Call Now</span>
      </a>

      {/* Divider */}
      <div className="w-px bg-white/10" />

      {/* Get Free Quote */}
      <Link
        href="/consultation"
        className="flex-1 flex items-center justify-center bg-gold text-navy font-inter font-semibold text-sm py-4 hover:bg-gold-light transition-colors"
        style={{ minHeight: '56px' }}
      >
        Get Free Quote
      </Link>
    </div>
  );
}
