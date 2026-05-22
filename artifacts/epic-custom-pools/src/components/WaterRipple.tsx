'use client';

import { useEffect, useRef } from 'react';

const CELL_SIZE = 6;   // px — wave resolution
const TENSION  = 0.025;
const DAMPING  = 0.984;
const CANVAS_H = 100;  // px — strip height

export default function WaterRipple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cvs = canvas;  // stable non-null references for nested functions
    const gfx = ctx;
    const dpr = window.devicePixelRatio || 1;
    let cols = 0;
    let heights   = new Float32Array(0);
    let velocities = new Float32Array(0);
    let animId = 0;

    /* ── sizing ─────────────────────────────────── */
    function resize() {
      const w = window.innerWidth;
      cvs.style.width  = `${w}px`;
      cvs.style.height = `${CANVAS_H}px`;
      cvs.width  = Math.round(w * dpr);
      cvs.height = Math.round(CANVAS_H * dpr);
      gfx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols       = Math.ceil(w / CELL_SIZE) + 2;
      heights    = new Float32Array(cols);
      velocities = new Float32Array(cols);
    }

    /* ── physics ─────────────────────────────────── */
    function addDisturbance(xFrac: number, amount: number) {
      const col    = Math.floor(xFrac * cols);
      const radius = Math.max(4, Math.ceil(cols * 0.07));
      for (let i = Math.max(0, col - radius); i < Math.min(cols, col + radius); i++) {
        const t = Math.abs(i - col) / radius;
        velocities[i] += amount * (1 - t * t);
      }
    }

    function step() {
      for (let i = 1; i < cols - 1; i++) {
        velocities[i] += TENSION * (heights[i - 1] + heights[i + 1] - 2 * heights[i]);
        velocities[i] *= DAMPING;
        heights[i]    += velocities[i];
      }
      heights[0]        = heights[1];
      heights[cols - 1] = heights[cols - 2];

      // Idle micro-ripples so the surface is never completely still
      if (Math.random() < 0.025) {
        addDisturbance(Math.random(), 0.3 + Math.random() * 0.5);
      }
    }

    /* ── rendering ───────────────────────────────── */
    function draw() {
      const w = window.innerWidth;
      const h = CANVAS_H;
      gfx.clearRect(0, 0, w, h);

      // Water surface rests at 30 % from top of the strip
      const surfaceY = h * 0.30;

      // Build smooth wave path using midpoint quadratic bezier
      gfx.beginPath();
      gfx.moveTo(-2, h + 2);
      gfx.lineTo(-2, surfaceY + heights[0]);

      for (let i = 0; i < cols - 1; i++) {
        const x0   = i * CELL_SIZE;
        const y0   = heights[i]     + surfaceY;
        const x1   = (i + 1) * CELL_SIZE;
        const y1   = heights[i + 1] + surfaceY;
        const xmid = (x0 + x1) * 0.5;
        const ymid = (y0 + y1) * 0.5;
        gfx.quadraticCurveTo(x0, y0, xmid, ymid);
      }
      gfx.lineTo(w + 2, surfaceY + heights[cols - 1]);
      gfx.lineTo(w + 2, h + 2);
      gfx.closePath();

      // Very transparent gradient fill — logo blue fading to near-black
      const grad = gfx.createLinearGradient(0, surfaceY, 0, h);
      grad.addColorStop(0,   'rgba(26,179,232,0.13)');
      grad.addColorStop(0.55,'rgba(26,179,232,0.08)');
      grad.addColorStop(1,   'rgba(8,14,20,0.55)');
      gfx.fillStyle = grad;
      gfx.fill();

      // Surface shimmer line
      gfx.beginPath();
      gfx.moveTo(-2, surfaceY + heights[0]);
      for (let i = 0; i < cols - 1; i++) {
        const x0   = i * CELL_SIZE;
        const y0   = heights[i]     + surfaceY;
        const x1   = (i + 1) * CELL_SIZE;
        const y1   = heights[i + 1] + surfaceY;
        const xmid = (x0 + x1) * 0.5;
        const ymid = (y0 + y1) * 0.5;
        gfx.quadraticCurveTo(x0, y0, xmid, ymid);
      }
      gfx.lineTo(w + 2, surfaceY + heights[cols - 1]);
      gfx.strokeStyle = 'rgba(93,208,245,0.30)';
      gfx.lineWidth   = 1.5;
      gfx.stroke();
    }

    function loop() {
      step();
      draw();
      animId = requestAnimationFrame(loop);
    }

    /* ── scroll / touch ──────────────────────────── */
    let lastScrollY   = window.scrollY;
    let lastScrollTime = performance.now();

    const onScroll = () => {
      const now = performance.now();
      const dy  = Math.abs(window.scrollY - lastScrollY);
      const dt  = Math.max(now - lastScrollTime, 1);
      const vel = dy / dt;                     // px/ms

      if (vel > 0.25) {
        const intensity = Math.min(vel * 7, 12);
        const count     = Math.max(1, Math.round(intensity * 0.35));
        for (let k = 0; k < count; k++) {
          addDisturbance(Math.random(), intensity * (0.5 + Math.random() * 0.5));
        }
      }
      lastScrollY    = window.scrollY;
      lastScrollTime = now;
    };

    let lastTouchY = 0;
    const onTouchStart = (e: TouchEvent) => { lastTouchY = e.touches[0].clientY; };
    const onTouchMove  = (e: TouchEvent) => {
      const dy        = Math.abs(lastTouchY - e.touches[0].clientY);
      const intensity = Math.min(dy * 0.4, 12);
      if (intensity > 0.5) {
        addDisturbance(Math.random(), intensity);
        addDisturbance(Math.random(), intensity * 0.6);
      }
      lastTouchY = e.touches[0].clientY;
    };

    const onResize = () => resize();

    resize();
    loop();

    window.addEventListener('scroll',      onScroll,      { passive: true });
    window.addEventListener('touchstart',  onTouchStart,  { passive: true });
    window.addEventListener('touchmove',   onTouchMove,   { passive: true });
    window.addEventListener('resize',      onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll',     onScroll);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove',  onTouchMove);
      window.removeEventListener('resize',     onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed bottom-0 left-0 pointer-events-none select-none"
      style={{ zIndex: 5, display: 'block' }}
      aria-hidden="true"
    />
  );
}
