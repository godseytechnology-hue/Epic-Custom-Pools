'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

const POOL_TYPES = ['Custom Pool', 'Outdoor Living Space', 'Pool + Outdoor Living', 'Not Sure Yet'];

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
        trackEvent('form_submit', { source: source || 'lead-form', pool_type: form.poolType });
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
    'w-full font-inter text-sm text-white placeholder-white/30 rounded-[10px] px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-[250ms]';
  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.10)',
  };
  const inputFocusStyle = `
    .lead-input:focus { border-color: #7ed321 !important; }
  `;

  return (
    <section id="lead-form" className="relative bg-navy py-20 px-4 md:px-8 overflow-hidden border-t border-border-dark">
      {/* Blue radial glow in center background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(26,179,232,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Ripple rings — bottom right */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{ width: 280, height: 280 }}
        aria-hidden="true"
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border animate-ripple-slow"
            style={{
              borderColor: i % 2 === 0 ? 'rgba(26,179,232,0.15)' : 'rgba(126,211,33,0.10)',
              animationDelay: `${i * 1.67}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        .lead-input:focus { border-color: #7ed321 !important; background: rgba(255,255,255,0.08) !important; }
        .lead-input { border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.05); }
      `}</style>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-barlow font-black uppercase leading-tight mb-3" style={{ fontSize: 'clamp(36px, 6vw, 52px)' }}>
            <span className="block text-white">Ready to Get Started?</span>
            <span className="block text-teal-light">Let&apos;s Design Your Dream Pool.</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-inter text-white/60 text-xs mb-1.5 ml-1">
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
                className={`${inputClass} lead-input`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-inter text-white/60 text-xs mb-1.5 ml-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className={`${inputClass} lead-input`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block font-inter text-white/60 text-xs mb-1.5 ml-1">
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
                className={`${inputClass} lead-input`}
              />
            </div>
            <div>
              <label htmlFor="city" className="block font-inter text-white/60 text-xs mb-1.5 ml-1">
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
                className={`${inputClass} lead-input`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="poolType" className="block font-inter text-white/60 text-xs mb-1.5 ml-1">
              What are you interested in?
            </label>
            <select
              id="poolType"
              name="poolType"
              value={form.poolType}
              onChange={handleChange}
              className={`${inputClass} lead-input cursor-pointer`}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
            >
              <option value="" style={{ background: '#080e14' }}>Select an option...</option>
              {POOL_TYPES.map((t) => (
                <option key={t} value={t} style={{ background: '#080e14' }}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-inter text-white/60 text-xs mb-1.5 ml-1">
              Tell Us More (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              placeholder="Backyard size, budget range, timeline, or any other details..."
              className={`${inputClass} lead-input resize-none`}
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
            className="w-full bg-gradient-to-r from-gold to-gold-light text-navy font-inter font-black text-base uppercase py-4 px-8 rounded-[10px] hover:brightness-110 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {submitting ? 'Sending...' : 'Get My Free Consultation →'}
          </button>

          <p className="font-inter text-white/25 text-xs text-center">
            No spam, ever. We&apos;ll call you within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}
