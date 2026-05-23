'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function FormSubmitTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // generate_lead is fired on form submission in LeadForm.tsx — no duplicate needed here
  }, [searchParams]);

  return null;
}
