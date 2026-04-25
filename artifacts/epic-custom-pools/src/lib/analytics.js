/**
 * Track a custom GA4 event.
 * Wraps window.gtag safely — no-ops during SSR or if GA4 is not loaded.
 *
 * @param {string} eventName - GA4 event name (e.g., 'form_submit', 'cta_click', 'phone_click')
 * @param {Record<string, unknown>} [params] - Optional event parameters
 *
 * @example
 * trackEvent('cta_click', { button_location: 'hero' });
 * trackEvent('phone_click', { source: 'navbar' });
 * trackEvent('form_submit', { page: '/consultation' });
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}
