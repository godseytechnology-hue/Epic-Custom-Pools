'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

type Props = {
  href: string;
  eventName: string;
  eventParams?: Record<string, string>;
  className?: string;
  children: React.ReactNode;
};

export default function TrackingLink({
  href,
  eventName,
  eventParams = {},
  className,
  children,
}: Props) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent(eventName, eventParams)}
      className={className}
    >
      {children}
    </Link>
  );
}
