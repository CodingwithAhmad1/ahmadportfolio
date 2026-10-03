// Text that decodes into place: each character cycles through random glyphs,
// then locks, left to right. Used by the boot and the departures board.
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%+-/<>*';

export function scramble(el: HTMLElement, opts: { duration?: number; delay?: number } = {}): Promise<void> {
  const { duration = 700, delay = 0 } = opts;
  const target = el.dataset.text ?? el.textContent ?? '';
  el.dataset.text = target;
  return new Promise((resolve) => {
    const t0 = performance.now() + delay;
    const tick = (now: number) => {
      const t = Math.max(0, (now - t0) / duration);
      let out = '';
      for (let i = 0; i < target.length; i++) {
        const ch = target[i];
        // Each character locks a little after the one before it.
        const lock = (i / target.length) * 0.7 + 0.3;
        if (ch === ' ' || t >= lock) out += ch;
        else if (t <= 0) out += ' ';
        else out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.textContent = out;
      if (t < 1) requestAnimationFrame(tick);
      else { el.textContent = target; resolve(); }
    };
    requestAnimationFrame(tick);
  });
}
