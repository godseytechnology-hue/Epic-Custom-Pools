'use client';
import { useEffect, useRef } from 'react';

export default function GlobalEffects() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = spotlightRef.current;
    if (!el) return;

    let rafId: number;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const target = document.elementFromPoint(e.clientX, e.clientY);
        const overDark = !!target?.closest('[data-dark-section]');
        el.style.setProperty('--cursor-x', `${e.clientX}px`);
        el.style.setProperty('--cursor-y', `${e.clientY}px`);
        el.style.opacity = overDark ? '1' : '0';
      });
    };

    const onLeave = () => {
      el.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />;
}
