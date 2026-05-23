'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

export default function FormSubmitTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('submitted') === '1') {
      trackEvent('generate_lead', { page: 'home' });
    }
  }, [searchParams]);

  return null;
}
