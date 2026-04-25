'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const POOL_TYPES = ['Gunite / Concrete', 'Fiberglass', 'Swim Spa / Hot Tub', 'Not Sure Yet'];

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  poolType: string;
  message: string;
};

type LeadFormProps = {
  source?: string;
  defaultCity?: string;
};

export default function LeadForm({ source, defaultCity }: LeadFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    city: defaultCity ?? '',
    poolType: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const payload = source ? { ...form, source } : form;
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
    <section id="lead-form" className="bg-navy py-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="font-inter text-gold-light text-lg">
            Let&apos;s Design Your Dream Pool.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
                Full Name <span className="text-gold">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
                Phone Number <span className="text-gold">*</span>
              </label>
              <input
                id="phone"
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
              <label htmlFor="city" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
                City / Zip Code <span className="text-gold">*</span>
              </label>
              <input
                id="city"
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

          <div>
            <label htmlFor="poolType" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
              Pool Type Interest
            </label>
            <select
              id="poolType"
              name="poolType"
              value={form.poolType}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer`}
            >
              <option value="" className="bg-navy">Select a pool type...</option>
              {POOL_TYPES.map((t) => (
                <option key={t} value={t} className="bg-navy">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-inter text-white/70 text-xs mb-1.5 ml-1">
              Tell Us More (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              placeholder="Backyard size, budget range, timeline, or any other details..."
              className={`${inputClass} resize-none`}
            />
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
            {submitting ? 'Sending...' : 'Get My Free Consultation →'}
          </button>

          <p className="font-inter text-white/30 text-xs text-center">
            No spam, ever. We&apos;ll call you within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}
