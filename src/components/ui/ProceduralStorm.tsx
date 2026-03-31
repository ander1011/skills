"use client";

import { useEffect, useRef, useCallback } from "react";

// ── Simplex Noise ──────────────────────────────────────
const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;
const grad3 = [[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];

class SimplexNoise {
  private perm: number[] = [];

  constructor(seed = 42) {
    const p: number[] = [];
    for (let i = 0; i < 256; i++) p[i] = i;
    let s = seed;
    for (let i = 255; i > 0; i--) {
      s = (s * 16807) % 2147483647;
      const j = s % (i + 1);
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  noise2D(x: number, y: number): number {
    const s = (x + y) * F2;
    const i = Math.floor(x + s);
    const j = Math.floor(y + s);
    const t = (i + j) * G2;
    const x0 = x - (i - t);
    const y0 = y - (j - t);
    const i1 = x0 > y0 ? 1 : 0;
    const j1 = x0 > y0 ? 0 : 1;
    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;
    const ii = i & 255;
    const jj = j & 255;
    let n0 = 0, n1 = 0, n2 = 0;

    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) { t0 *= t0; const g = grad3[this.perm[ii + this.perm[jj]] % 8]; n0 = t0 * t0 * (g[0] * x0 + g[1] * y0); }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) { t1 *= t1; const g = grad3[this.perm[ii + i1 + this.perm[jj + j1]] % 8]; n1 = t1 * t1 * (g[0] * x1 + g[1] * y1); }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) { t2 *= t2; const g = grad3[this.perm[ii + 1 + this.perm[jj + 1]] % 8]; n2 = t2 * t2 * (g[0] * x2 + g[1] * y2); }

    return 70 * (n0 + n1 + n2);
  }

  fbm(x: number, y: number, octaves: number = 4): number {
    let val = 0, amp = 1, freq = 1, max = 0;
    for (let i = 0; i < octaves; i++) {
      val += amp * this.noise2D(x * freq, y * freq);
      max += amp; amp *= 0.5; freq *= 2;
    }
    return val / max;
  }
}

// ── Cloud Layers ───────────────────────────────────────
const layers = [
  { scale: 0.002, speed: 0.006, ox: 0, oy: 0, opacity: 0.65, thresh: -0.15, r: 35, g: 18, b: 60 },
  { scale: 0.004, speed: 0.012, ox: 100, oy: 50, opacity: 0.5, thresh: -0.05, r: 25, g: 14, b: 50 },
  { scale: 0.007, speed: 0.02, ox: 200, oy: 100, opacity: 0.35, thresh: 0.05, r: 18, g: 10, b: 40 },
];

// ── Component ──────────────────────────────────────────
export default function ProceduralStorm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const noiseRef = useRef(new SimplexNoise(42));
  const tRef = useRef(0);

  const RES = 4; // Pixel skip for performance

  const resize = useCallback(() => {
    const c = canvasRef.current;
    if (!c || !c.parentElement) return;
    c.width = Math.ceil(c.parentElement.clientWidth / RES);
    c.height = Math.ceil(c.parentElement.clientHeight / RES);
  }, []);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    resize();
    window.addEventListener("resize", resize);
    const ctx = c.getContext("2d", { willReadFrequently: true })!;
    const noise = noiseRef.current;

    const animate = () => {
      const w = c.width, h = c.height;
      if (w === 0 || h === 0) { animRef.current = requestAnimationFrame(animate); return; }
      tRef.current += 0.016;
      const t = tRef.current;

      const img = ctx.createImageData(w, h);
      const d = img.data;
      const bgR = 13, bgG = 11, bgB = 26;

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = (y * w + x) * 4;
          let r = bgR, g = bgG, b = bgB;

          for (const L of layers) {
            const nx = (x + L.ox) * L.scale + t * L.speed;
            const ny = (y + L.oy) * L.scale + t * L.speed * 0.25;
            const n = noise.fbm(nx, ny, 4);

            if (n > L.thresh) {
              const dens = Math.min((n - L.thresh) * 2.5, 1) * L.opacity;
              const vFade = 1 - (y / h) * 0.5;
              const a = dens * vFade;
              r += (L.r - r) * a;
              g += (L.g - g) * a;
              b += (L.b - b) * a;

              // Lightning flash highlight on dense clouds
              if (n > L.thresh + 0.3) {
                const hl = (n - L.thresh - 0.3) * 0.7;
                const flash = Math.sin(t * 0.4) * 0.3 + 0.7;
                r += hl * 30 * flash;
                g += hl * 18 * flash;
                b += hl * 50 * flash;
              }
            }
          }

          // Center purple glow
          const dx = (x - w / 2) / w;
          const dy = (y * 0.6) / h;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 0.45) {
            const gl = (1 - dist / 0.45) * 0.07 * (Math.sin(t * 1.2) * 0.3 + 0.7);
            r += gl * 90; g += gl * 35; b += gl * 130;
          }

          d[idx] = Math.min(255, Math.max(0, r));
          d[idx + 1] = Math.min(255, Math.max(0, g));
          d[idx + 2] = Math.min(255, Math.max(0, b));
          d[idx + 3] = 255;
        }
      }

      ctx.putImageData(img, 0, 0);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize", resize); };
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: "auto" }}
    />
  );
}
