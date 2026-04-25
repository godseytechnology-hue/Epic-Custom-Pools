'use client';

import { trackEvent } from '@/lib/analytics';

type Props = {
  phone: string;
  source: string;
  className?: string;
  children: React.ReactNode;
};

export default function PhoneLink({ phone, source, className, children }: Props) {
  const digits = phone.replace(/\D/g, '');
  return (
    <a
      href={`tel:${digits}`}
      onClick={() => trackEvent('phone_click', { source })}
      className={className}
    >
      {children}
    </a>
  );
}
