"use client";

import { useEffect, useRef, useCallback } from "react";

// ── Types ──────────────────────────────────────────────
interface Point { x: number; y: number; }

interface LightningArc {
  points: Point[];
  life: number;
  maxLife: number;
  width: number;
  side: "left" | "right";
}

interface Spark {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number;
}

// ── Generate organic arc path around content ───────────
function generateArc(
  startX: number, startY: number,
  endX: number, endY: number,
  bulge: number, segments: number
): Point[] {
  const points: Point[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const x = startX + (endX - startX) * t;
    const y = startY + (endY - startY) * t;

    // Organic bulge: sine curve + noise for natural lightning shape
    const bulgeFactor = Math.sin(t * Math.PI) * bulge;
    const noise = (Math.random() - 0.5) * bulge * 0.4;
    const microNoise = Math.sin(t * 20 + Math.random() * 10) * bulge * 0.08;

    points.push({
      x: x + bulgeFactor + noise + microNoise,
      y: y + (Math.random() - 0.5) * 15,
    });
  }
  return points;
}

// ── Generate lightning bolt with jagged segments ───────
function jaggedPath(points: Point[], displacement: number): Point[] {
  if (points.length < 2) return points;

  let result = [...points];
  for (let detail = 0; detail < 3; detail++) {
    const newResult: Point[] = [result[0]];
    for (let i = 0; i < result.length - 1; i++) {
      const p1 = result[i];
      const p2 = result[i + 1];
      const mid: Point = {
        x: (p1.x + p2.x) / 2 + (Math.random() - 0.5) * displacement,
        y: (p1.y + p2.y) / 2 + (Math.random() - 0.5) * displacement * 0.5,
      };
      newResult.push(mid, p2);
    }
    result = newResult;
    displacement *= 0.5;
  }
  return result;
}

// ── Main Component ─────────────────────────────────────
export default function LightningAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const arcsRef = useRef<LightningArc[]>([]);
  const sparksRef = useRef<Spark[]>([]);
  const lastArcRef = useRef(0);
  const timeRef = useRef(0);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d")!;
    const arcs = arcsRef.current;
    const sparks = sparksRef.current;
    let lastTime = performance.now();

    const spawnSparks = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        sparks.push({
          x: x + (Math.random() - 0.5) * 30,
          y: y + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 100,
          vy: (Math.random() - 0.5) * 100,
          life: 0.3 + Math.random() * 0.8,
          maxLife: 0.3 + Math.random() * 0.8,
          size: 0.8 + Math.random() * 2,
        });
      }
    };

    const drawArc = (arc: LightningArc) => {
      if (arc.points.length < 2) return;
      const alpha = Math.pow(arc.life / arc.maxLife, 0.4);
      if (alpha <= 0.01) return;

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      // Wide outer glow
      ctx.strokeStyle = `rgba(139, 92, 246, ${alpha * 0.15})`;
      ctx.lineWidth = arc.width * 8;
      ctx.shadowColor = "rgba(139, 92, 246, 0.4)";
      ctx.shadowBlur = 40;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(arc.points[0].x, arc.points[0].y);
      for (let i = 1; i < arc.points.length; i++) {
        ctx.lineTo(arc.points[i].x, arc.points[i].y);
      }
      ctx.stroke();

      // Mid glow
      ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.4})`;
      ctx.lineWidth = arc.width * 3;
      ctx.shadowColor = "rgba(59, 130, 246, 0.5)";
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.moveTo(arc.points[0].x, arc.points[0].y);
      for (let i = 1; i < arc.points.length; i++) {
        ctx.lineTo(arc.points[i].x, arc.points[i].y);
      }
      ctx.stroke();

      // Core bright line
      ctx.strokeStyle = `rgba(180, 210, 255, ${alpha * 0.7})`;
      ctx.lineWidth = arc.width;
      ctx.shadowColor = "rgba(100, 180, 255, 0.6)";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(arc.points[0].x, arc.points[0].y);
      for (let i = 1; i < arc.points.length; i++) {
        ctx.lineTo(arc.points[i].x, arc.points[i].y);
      }
      ctx.stroke();

      // White hot center
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
      ctx.lineWidth = arc.width * 0.4;
      ctx.shadowBlur = 4;
      ctx.beginPath();
      ctx.moveTo(arc.points[0].x, arc.points[0].y);
      for (let i = 1; i < arc.points.length; i++) {
        ctx.lineTo(arc.points[i].x, arc.points[i].y);
      }
      ctx.stroke();

      ctx.restore();
    };

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      timeRef.current += dt;
      const t = timeRef.current;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h * 0.5; // Center of content area

      // Clear with trail
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(13, 11, 26, 0.25)";
      ctx.fillRect(0, 0, w, h);

      // ── Ambient glow around text area ──
      ctx.globalCompositeOperation = "lighter";
      const pulse = 0.5 + Math.sin(t * 1.5) * 0.15;
      const ambGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, h * 0.5);
      ambGrad.addColorStop(0, `rgba(139, 92, 246, ${0.02 * pulse})`);
      ambGrad.addColorStop(0.5, `rgba(59, 130, 246, ${0.01 * pulse})`);
      ambGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = ambGrad;
      ctx.fillRect(0, 0, w, h);

      // ── Spawn arc bolts that frame the content ──
      const timeSinceArc = t - lastArcRef.current;
      if (timeSinceArc > 0.8 + Math.random() * 1.5) {
        lastArcRef.current = t;

        const side = Math.random() > 0.5 ? "left" : "right";
        const contentWidth = Math.min(w * 0.4, 350); // Half of text area width
        const contentHeight = h * 0.35;

        // Arc type: top-side, side-bottom, or full-side
        const arcType = Math.floor(Math.random() * 3);
        let startP: Point, endP: Point;
        let bulge: number;

        if (arcType === 0) {
          // Top to side arc
          startP = { x: cx + (Math.random() - 0.5) * 100, y: h * 0.05 };
          endP = { x: side === "left" ? cx - contentWidth - 20 : cx + contentWidth + 20, y: cy + (Math.random() - 0.5) * contentHeight };
          bulge = side === "left" ? -(120 + Math.random() * 150) : (120 + Math.random() * 150);
        } else if (arcType === 1) {
          // Side arc flowing around content
          startP = { x: side === "left" ? cx - contentWidth - 50 : cx + contentWidth + 50, y: cy - contentHeight * 0.8 };
          endP = { x: side === "left" ? cx - contentWidth - 30 : cx + contentWidth + 30, y: cy + contentHeight * 0.8 };
          bulge = side === "left" ? -(80 + Math.random() * 120) : (80 + Math.random() * 120);
        } else {
          // Side to bottom arc
          startP = { x: side === "left" ? cx - contentWidth : cx + contentWidth, y: cy };
          endP = { x: cx + (Math.random() - 0.5) * 150, y: h * 0.92 };
          bulge = side === "left" ? -(100 + Math.random() * 130) : (100 + Math.random() * 130);
        }

        const smoothPath = generateArc(startP.x, startP.y, endP.x, endP.y, bulge, 20);
        const jaggedPoints = jaggedPath(smoothPath, 25 + Math.random() * 20);

        const maxLife = 0.3 + Math.random() * 0.5;
        arcs.push({
          points: jaggedPoints,
          life: maxLife,
          maxLife,
          width: 1 + Math.random() * 1.5,
          side,
        });

        // Spawn sparks at start and end
        spawnSparks(startP.x, startP.y, 3 + Math.floor(Math.random() * 5));
        spawnSparks(endP.x, endP.y, 3 + Math.floor(Math.random() * 5));

        // Sometimes spawn a second complementary arc
        if (Math.random() > 0.5) {
          const otherSide = side === "left" ? "right" : "left";
          const s2: Point = { x: otherSide === "left" ? cx - contentWidth - 40 : cx + contentWidth + 40, y: cy - contentHeight * 0.5 + Math.random() * contentHeight };
          const e2: Point = { x: cx + (Math.random() - 0.5) * 80, y: h * (Math.random() > 0.5 ? 0.05 : 0.92) };
          const b2 = otherSide === "left" ? -(80 + Math.random() * 100) : (80 + Math.random() * 100);
          const smooth2 = generateArc(s2.x, s2.y, e2.x, e2.y, b2, 16);
          const jagged2 = jaggedPath(smooth2, 20);
          const ml2 = 0.2 + Math.random() * 0.4;
          arcs.push({ points: jagged2, life: ml2, maxLife: ml2, width: 0.8 + Math.random(), side: otherSide });
          spawnSparks(s2.x, s2.y, 2);
        }
      }

      // ── Update and draw arcs ──
      for (let i = arcs.length - 1; i >= 0; i--) {
        arcs[i].life -= dt;
        if (arcs[i].life <= 0) {
          arcs.splice(i, 1);
        } else {
          drawArc(arcs[i]);
        }
      }

      // ── Sparks ──
      ctx.globalCompositeOperation = "lighter";
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life -= dt;
        if (s.life <= 0) { sparks.splice(i, 1); continue; }

        s.vx += (Math.random() - 0.5) * 200 * dt;
        s.vy += (Math.random() - 0.5) * 200 * dt;
        s.vx *= 0.96;
        s.vy *= 0.96;
        s.x += s.vx * dt;
        s.y += s.vy * dt;

        const alpha = Math.pow(s.life / s.maxLife, 0.5);
        const flicker = 0.7 + Math.random() * 0.3;

        ctx.save();
        ctx.shadowColor = "rgba(139, 92, 246, 0.5)";
        ctx.shadowBlur = 6;
        ctx.fillStyle = `rgba(160, 180, 255, ${alpha * flicker * 0.7})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * flicker * 0.5})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * alpha * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Ambient floating sparks
      if (Math.random() > 0.9) {
        const side = Math.random() > 0.5 ? -1 : 1;
        sparks.push({
          x: cx + side * (200 + Math.random() * 150),
          y: cy + (Math.random() - 0.5) * h * 0.6,
          vx: (Math.random() - 0.5) * 20,
          vy: -15 - Math.random() * 30,
          life: 1 + Math.random() * 1.5,
          maxLife: 1 + Math.random() * 1.5,
          size: 0.8 + Math.random() * 1.2,
        });
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
