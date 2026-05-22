'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';

/* ── constants ───────────────────────────────────────── */
const SCROLL_FADE_PX  = 250;   // px of scroll to reach opacity 0
const AUTO_FADE_MS    = 2500;  // ms before auto-fade starts if no scroll
const AUTO_FADE_DUR   = 800;   // ms the auto-fade takes
const RING_DUR_MS     = 1800;  // ms for one ring to expand fully
const RINGS_PER_DROP  = 4;     // concentric rings per impact point
const RING_DELAY_MS   = 180;   // stagger between rings of the same drop

interface Drop {
  x: number;
  y: number;
  startTime: number; // performance.now() when this drop should start
}

interface State {
  animId:        number;
  drops:         Drop[];
  masterAlpha:   number;   // 0–1, reduced by auto-fade
  scrollAlpha:   number;   // 0–1, reduced by scroll
  autoFadeStart: number | null; // timestamp when auto-fade began
  done:          boolean;
}

export default function SplashOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef  = useRef<State>({
    animId: 0, drops: [], masterAlpha: 1,
    scrollAlpha: 1, autoFadeStart: null, done: true,
  });
  const pathname = usePathname();

  /* ── scroll listener (shared across navigations) ──── */
  useEffect(() => {
    const onScroll = () => {
      stateRef.current.scrollAlpha =
        Math.max(0, 1 - window.scrollY / SCROLL_FADE_PX);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── splash trigger ──────────────────────────────── */
  const startSplash = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cvs = canvas;   // stable non-null aliases for closures
    const gfx = ctx;
    const state = stateRef.current;

    /* cancel any running animation */
    cancelAnimationFrame(state.animId);
    state.masterAlpha   = 1;
    state.autoFadeStart = null;
    state.done          = false;
    state.scrollAlpha   = Math.max(0, 1 - window.scrollY / SCROLL_FADE_PX);

    /* size canvas to full viewport */
    const dpr = window.devicePixelRatio || 1;
    const vw  = window.innerWidth;
    const vh  = window.innerHeight;
    cvs.style.width  = `${vw}px`;
    cvs.style.height = `${vh}px`;
    cvs.width  = Math.round(vw * dpr);
    cvs.height = Math.round(vh * dpr);
    gfx.setTransform(dpr, 0, 0, dpr, 0, 0);

    /* spawn impact drops with slight time-stagger */
    const numDrops = 5 + Math.floor(Math.random() * 3); // 5–7
    const now      = performance.now();
    state.drops    = Array.from({ length: numDrops }, (_, i) => ({
      x:         Math.random() * vw,
      y:         Math.random() * vh,
      startTime: now + i * 110,
    }));

    const MAX_R = Math.hypot(vw, vh) * 0.55;

    function draw(ts: number) {
      if (state.done) return;

      /* compute effective opacity */
      const eff = state.masterAlpha * state.scrollAlpha;
      cvs.style.opacity = eff.toFixed(3);

      if (eff <= 0.01) {
        state.done = true;
        cvs.style.opacity = '0';
        return;
      }

      gfx.clearRect(0, 0, vw, vh);

      let allSettled = true;

      for (const drop of state.drops) {
        for (let r = 0; r < RINGS_PER_DROP; r++) {
          const ringStart = drop.startTime + r * RING_DELAY_MS;
          const elapsed   = ts - ringStart;
          if (elapsed < 0) { allSettled = false; continue; }

          const t = elapsed / RING_DUR_MS;
          if (t >= 1) continue;
          allSettled = false;

          const radius    = MAX_R * Math.pow(t, 0.60);
          const ringAlpha = (1 - t) * 0.85;

          /* subtle fill */
          gfx.beginPath();
          gfx.arc(drop.x, drop.y, radius, 0, Math.PI * 2);
          gfx.fillStyle = `rgba(26,179,232,${(ringAlpha * 0.12).toFixed(3)})`;
          gfx.fill();

          /* crisp stroke */
          gfx.beginPath();
          gfx.arc(drop.x, drop.y, radius, 0, Math.PI * 2);
          gfx.strokeStyle = `rgba(26,179,232,${ringAlpha.toFixed(3)})`;
          gfx.lineWidth   = Math.max(0.5, (1 - t) * 3);
          gfx.stroke();
        }
      }

      /* progress auto-fade if running */
      if (state.autoFadeStart !== null) {
        const fadeT        = Math.min(1, (ts - state.autoFadeStart) / AUTO_FADE_DUR);
        state.masterAlpha  = 1 - fadeT;
        if (state.masterAlpha <= 0) {
          state.done = true;
          cvs.style.opacity = '0';
          return;
        }
      }

      /* start auto-fade once all rings have settled */
      if (allSettled && state.autoFadeStart === null) {
        state.autoFadeStart = ts;
      }

      state.animId = requestAnimationFrame(draw);
    }

    /* fallback timer: start fade after AUTO_FADE_MS even if rings still going */
    const timer = window.setTimeout(() => {
      const s = stateRef.current;
      if (!s.done && s.autoFadeStart === null) {
        s.autoFadeStart = performance.now();
      }
    }, AUTO_FADE_MS);

    state.animId = requestAnimationFrame(draw);
    return timer;
  }, []);

  /* ── fire on every route change ──────────────────── */
  useEffect(() => {
    const timer = startSplash();
    return () => {
      if (timer !== undefined) clearTimeout(timer);
      cancelAnimationFrame(stateRef.current.animId);
    };
  }, [pathname, startSplash]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none"
      style={{ zIndex: 60, display: 'block' }}
    />
  );
}
