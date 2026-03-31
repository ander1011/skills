"use client";

import { useEffect, useRef, useCallback } from "react";

interface Point { x: number; y: number; }
interface Arc { points: Point[]; life: number; maxLife: number; width: number; }
interface Spark { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number; }

function generateArc(sx: number, sy: number, ex: number, ey: number, bulge: number, segs: number): Point[] {
  const pts: Point[] = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const x = sx + (ex - sx) * t + Math.sin(t * Math.PI) * bulge + (Math.random() - 0.5) * Math.abs(bulge) * 0.35;
    const y = sy + (ey - sy) * t + (Math.random() - 0.5) * 12;
    pts.push({ x, y });
  }
  return pts;
}

function jagged(pts: Point[], disp: number): Point[] {
  let r = [...pts];
  for (let d = 0; d < 3; d++) {
    const n: Point[] = [r[0]];
    for (let i = 0; i < r.length - 1; i++) {
      n.push({ x: (r[i].x + r[i + 1].x) / 2 + (Math.random() - 0.5) * disp, y: (r[i].y + r[i + 1].y) / 2 + (Math.random() - 0.5) * disp * 0.4 }, r[i + 1]);
    }
    r = n;
    disp *= 0.5;
  }
  return r;
}

export default function FullPageLightning() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const arcsRef = useRef<Arc[]>([]);
  const sparksRef = useRef<Spark[]>([]);
  const lastRef = useRef(0);
  const tRef = useRef(0);

  const resize = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = window.innerWidth * dpr;
    c.height = window.innerHeight * dpr;
    const ctx = c.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    resize();
    window.addEventListener("resize", resize);
    const ctx = c.getContext("2d")!;
    const arcs = arcsRef.current;
    const sparks = sparksRef.current;
    let last = performance.now();

    const spawn = (x: number, y: number, n: number) => {
      for (let i = 0; i < n; i++) sparks.push({
        x: x + (Math.random() - 0.5) * 25, y: y + (Math.random() - 0.5) * 25,
        vx: (Math.random() - 0.5) * 80, vy: (Math.random() - 0.5) * 80,
        life: 0.3 + Math.random() * 0.7, maxLife: 0.3 + Math.random() * 0.7, size: 0.8 + Math.random() * 1.5,
      });
    };

    const drawArc = (a: Arc) => {
      if (a.points.length < 2) return;
      const al = Math.pow(a.life / a.maxLife, 0.4);
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.lineJoin = "round"; ctx.lineCap = "round";

      // Wide glow
      ctx.strokeStyle = `rgba(139, 92, 246, ${al * 0.12})`;
      ctx.lineWidth = a.width * 10; ctx.shadowColor = "rgba(139, 92, 246, 0.3)"; ctx.shadowBlur = 50;
      ctx.beginPath(); ctx.moveTo(a.points[0].x, a.points[0].y);
      for (const p of a.points.slice(1)) ctx.lineTo(p.x, p.y);
      ctx.stroke();

      // Mid
      ctx.strokeStyle = `rgba(59, 130, 246, ${al * 0.35})`;
      ctx.lineWidth = a.width * 3; ctx.shadowColor = "rgba(59, 130, 246, 0.4)"; ctx.shadowBlur = 20;
      ctx.beginPath(); ctx.moveTo(a.points[0].x, a.points[0].y);
      for (const p of a.points.slice(1)) ctx.lineTo(p.x, p.y);
      ctx.stroke();

      // Core
      ctx.strokeStyle = `rgba(200, 220, 255, ${al * 0.6})`;
      ctx.lineWidth = a.width; ctx.shadowColor = "rgba(100, 180, 255, 0.5)"; ctx.shadowBlur = 8;
      ctx.beginPath(); ctx.moveTo(a.points[0].x, a.points[0].y);
      for (const p of a.points.slice(1)) ctx.lineTo(p.x, p.y);
      ctx.stroke();

      // White
      ctx.strokeStyle = `rgba(255, 255, 255, ${al * 0.3})`;
      ctx.lineWidth = a.width * 0.35; ctx.shadowBlur = 3;
      ctx.beginPath(); ctx.moveTo(a.points[0].x, a.points[0].y);
      for (const p of a.points.slice(1)) ctx.lineTo(p.x, p.y);
      ctx.stroke();
      ctx.restore();
    };

    const animate = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      tRef.current += dt;
      const t = tRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(13, 11, 26, 0.2)";
      ctx.fillRect(0, 0, w, h);

      // Ambient
      ctx.globalCompositeOperation = "lighter";
      const pulse = 0.5 + Math.sin(t * 1.2) * 0.12;
      const g = ctx.createRadialGradient(cx, h * 0.5, 0, cx, h * 0.5, h * 0.6);
      g.addColorStop(0, `rgba(139, 92, 246, ${0.015 * pulse})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);

      // Spawn arcs
      if (t - lastRef.current > 0.6 + Math.random() * 1.2) {
        lastRef.current = t;

        // Multiple arc spawn points distributed vertically
        const spawnY = Math.random() * h;
        const side = Math.random() > 0.5 ? 1 : -1;
        const contentHalf = Math.min(w * 0.35, 380);

        // Arc from edge toward content area
        const s: Point = { x: side > 0 ? w + 20 : -20, y: spawnY + (Math.random() - 0.5) * 200 };
        const e: Point = { x: cx + side * (contentHalf + 20 + Math.random() * 40), y: spawnY + (Math.random() - 0.5) * 300 };
        const bulge = side * (60 + Math.random() * 80);
        const smooth = generateArc(s.x, s.y, e.x, e.y, bulge, 18);
        const j = jagged(smooth, 20 + Math.random() * 15);
        const ml = 0.3 + Math.random() * 0.5;
        arcs.push({ points: j, life: ml, maxLife: ml, width: 1 + Math.random() * 1.2 });
        spawn(e.x, e.y, 3 + Math.floor(Math.random() * 4));

        // Vertical arc along the side of content
        if (Math.random() > 0.4) {
          const vSide = Math.random() > 0.5 ? 1 : -1;
          const vx = cx + vSide * (contentHalf + 10 + Math.random() * 30);
          const vs: Point = { x: vx + (Math.random() - 0.5) * 30, y: Math.random() * h * 0.3 };
          const ve: Point = { x: vx + (Math.random() - 0.5) * 50, y: vs.y + h * (0.2 + Math.random() * 0.4) };
          const vBulge = vSide * (30 + Math.random() * 60);
          const vSmooth = generateArc(vs.x, vs.y, ve.x, ve.y, vBulge, 14);
          const vj = jagged(vSmooth, 15 + Math.random() * 10);
          const vml = 0.2 + Math.random() * 0.35;
          arcs.push({ points: vj, life: vml, maxLife: vml, width: 0.8 + Math.random() * 0.8 });
          spawn(vs.x, vs.y, 2);
          spawn(ve.x, ve.y, 2);
        }

        // Horizontal connecting arc
        if (Math.random() > 0.65) {
          const hy = Math.random() * h;
          const hs: Point = { x: cx - contentHalf - 30 - Math.random() * 60, y: hy };
          const he: Point = { x: cx + contentHalf + 30 + Math.random() * 60, y: hy + (Math.random() - 0.5) * 100 };
          const hSmooth = generateArc(hs.x, hs.y, he.x, he.y, (Math.random() - 0.5) * 80, 16);
          const hj = jagged(hSmooth, 18);
          const hml = 0.15 + Math.random() * 0.25;
          arcs.push({ points: hj, life: hml, maxLife: hml, width: 0.6 + Math.random() * 0.6 });
        }
      }

      // Draw arcs
      for (let i = arcs.length - 1; i >= 0; i--) {
        arcs[i].life -= dt;
        if (arcs[i].life <= 0) arcs.splice(i, 1);
        else drawArc(arcs[i]);
      }

      // Sparks
      ctx.globalCompositeOperation = "lighter";
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life -= dt;
        if (s.life <= 0) { sparks.splice(i, 1); continue; }
        s.vx += (Math.random() - 0.5) * 150 * dt; s.vy += (Math.random() - 0.5) * 150 * dt;
        s.vx *= 0.96; s.vy *= 0.96;
        s.x += s.vx * dt; s.y += s.vy * dt;
        const al = Math.pow(s.life / s.maxLife, 0.5) * (0.7 + Math.random() * 0.3);
        ctx.save();
        ctx.shadowColor = "rgba(139, 92, 246, 0.4)"; ctx.shadowBlur = 5;
        ctx.fillStyle = `rgba(160, 190, 255, ${al * 0.6})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size * al, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(255, 255, 255, ${al * 0.4})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size * al * 0.35, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }

      // Ambient sparks
      if (Math.random() > 0.92) {
        const sx = Math.random() > 0.5 ? cx + 250 + Math.random() * 150 : cx - 250 - Math.random() * 150;
        sparks.push({ x: sx, y: Math.random() * h, vx: (Math.random() - 0.5) * 15, vy: -10 - Math.random() * 20, life: 1 + Math.random(), maxLife: 1 + Math.random(), size: 0.6 + Math.random() });
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize", resize); };
  }, [resize]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-[1]" style={{ mixBlendMode: "screen" }} />;
}
