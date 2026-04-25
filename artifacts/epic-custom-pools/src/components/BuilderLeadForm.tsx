'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PROJECT_COUNTS = ['1–5 pools/year', '6–15 pools/year', '16+ pools/year', 'Not Sure Yet'];

type FormState = {
  companyName: string;
  name: string;
  phone: string;
  email: string;
  projectCount: string;
  city: string;
};

export default function BuilderLeadForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    companyName: '',
    name: '',
    phone: '',
    email: '',
    projectCount: '',
    city: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: form.companyName,
          name: form.name,
          contactName: form.name,
          phone: form.phone,
          email: form.email,
          projectCount: form.projectCount,
          city: form.city,
          source: 'home-builders-page',
        }),
      });

      if (res.ok) {
        router.push('/thank-you?submitted=1');
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Unable to submit. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    'w-full font-inter text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 rounded px-4 py-3 focus:outline-none focus:border-gold focus:bg-white/15 transition-colors';

  return (
    <section id="builder-form" className="bg-navy py-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
            Let&apos;s Talk About Your Next Project
          </h2>
          <p className="font-inter text-white/70 text-base leading-relaxed">
            Tell us about your company and typical project volume. We&apos;ll reach out to discuss preferred builder pricing and scheduling.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="companyName" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
                Company Name <span className="text-gold">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={form.companyName}
                onChange={handleChange}
                placeholder="Acme Homes LLC"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="builderName" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
                Contact Name <span className="text-gold">*</span>
              </label>
              <input
                id="builderName"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="builderPhone" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
                Phone Number <span className="text-gold">*</span>
              </label>
              <input
                id="builderPhone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="(817) 555-0100"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="builderEmail" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
                Email Address <span className="text-gold">*</span>
              </label>
              <input
                id="builderEmail"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@acmehomes.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="projectCount" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
                Typical Project Count / Year
              </label>
              <select
                id="projectCount"
                name="projectCount"
                value={form.projectCount}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" className="bg-navy">Select a range...</option>
                {PROJECT_COUNTS.map((c) => (
                  <option key={c} value={c} className="bg-navy">{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="builderCity" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
                Primary Build Area <span className="text-gold">*</span>
              </label>
              <input
                id="builderCity"
                name="city"
                type="text"
                required
                value={form.city}
                onChange={handleChange}
                placeholder="Fort Worth, TX"
                className={inputClass}
              />
            </div>
          </div>

          {error && (
            <p className="font-inter text-red-300 text-sm text-center py-2 px-4 bg-red-900/30 rounded border border-red-500/30">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold text-navy font-inter font-bold text-base py-4 px-8 rounded hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {submitting ? 'Sending...' : 'Start the Conversation →'}
          </button>

          <p className="font-inter text-white/30 text-xs text-center">
            We respond to builder inquiries within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}
