// Letters in any .flex element get heavier as the pointer approaches.
const MIN = 420;
const MAX = 800;

export function initFlex() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const letters = [...document.querySelectorAll<HTMLElement>('.flex .ch')];
  if (!letters.length) return;

  let frame = 0;
  let px = -9999;
  let py = -9999;

  const update = () => {
    const radius = Math.max(window.innerWidth * 0.22, 200);
    for (const el of letters) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > window.innerHeight + 100) continue;
      const d = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2));
      const t = Math.max(0, 1 - d / radius);
      el.style.setProperty('--w', String(Math.round(MIN + (MAX - MIN) * t * t)));
    }
  };

  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(update);
  };
  window.addEventListener('pointermove', (e) => { px = e.clientX; py = e.clientY; schedule(); }, { passive: true });
  window.addEventListener('scroll', schedule, { passive: true });
  document.addEventListener('pointerleave', () => { px = py = -9999; schedule(); });
}
