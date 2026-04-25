'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function FormSubmitTracker() {
  useEffect(() => {
    trackEvent('form_submit', { page: 'home' });
  }, []);
  return null;
}
