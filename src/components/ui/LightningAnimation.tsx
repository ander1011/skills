"use client";

import { useEffect, useRef, useCallback } from "react";

// ── Types ──────────────────────────────────────────────
interface Point {
  x: number;
  y: number;
}

interface LightningBolt {
  segments: Point[];
  life: number;
  maxLife: number;
  width: number;
  opacity: number;
  branches: LightningBolt[];
}

interface ElectricParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

// ── Lightning Generation ───────────────────────────────
function generateBolt(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  displacement: number,
  depth: number
): LightningBolt {
  const segments: Point[] = [];
  const branches: LightningBolt[] = [];

  // Midpoint displacement algorithm
  const points: Point[] = [{ x: x1, y: y1 }, { x: x2, y: y2 }];
  let currentDisplacement = displacement;

  for (let detail = 0; detail < 5; detail++) {
    const newPoints: Point[] = [points[0]];
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const midX = (p1.x + p2.x) / 2 + (Math.random() - 0.5) * currentDisplacement;
      const midY = (p1.y + p2.y) / 2 + (Math.random() - 0.5) * currentDisplacement * 0.3;
      newPoints.push({ x: midX, y: midY });
      newPoints.push(p2);

      // Branching
      if (depth > 0 && detail === 2 && Math.random() > 0.55) {
        const angle = (Math.random() - 0.5) * Math.PI * 0.6;
        const len = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2) * (0.3 + Math.random() * 0.4);
        const bx = midX + Math.cos(angle) * len;
        const by = midY + Math.sin(angle) * len * 0.5;
        branches.push(generateBolt(midX, midY, bx, by, displacement * 0.4, depth - 1));
      }
    }
    points.length = 0;
    points.push(...newPoints);
    currentDisplacement *= 0.5;
  }

  segments.push(...points);

  const maxLife = 0.15 + Math.random() * 0.25;
  return {
    segments,
    life: maxLife,
    maxLife,
    width: 1.5 + depth * 1.5,
    opacity: 1,
    branches,
  };
}

// ── Main Component ─────────────────────────────────────
export default function LightningAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const boltsRef = useRef<LightningBolt[]>([]);
  const particlesRef = useRef<ElectricParticle[]>([]);
  const lastBoltRef = useRef(0);
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
    const bolts = boltsRef.current;
    const particles = particlesRef.current;

    let lastTime = performance.now();

    const spawnParticles = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 60,
          y: y + (Math.random() - 0.5) * 60,
          vx: (Math.random() - 0.5) * 150,
          vy: (Math.random() - 0.5) * 150,
          life: 0.5 + Math.random() * 1,
          maxLife: 0.5 + Math.random() * 1,
          size: 1 + Math.random() * 2.5,
        });
      }
    };

    const drawBolt = (bolt: LightningBolt) => {
      if (bolt.segments.length < 2) return;
      const alpha = Math.pow(bolt.life / bolt.maxLife, 0.5) * bolt.opacity;
      if (alpha <= 0) return;

      // Outer glow
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 0.3})`;
      ctx.lineWidth = bolt.width * 6;
      ctx.shadowColor = "rgba(0, 212, 255, 0.5)";
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.moveTo(bolt.segments[0].x, bolt.segments[0].y);
      for (let i = 1; i < bolt.segments.length; i++) {
        ctx.lineTo(bolt.segments[i].x, bolt.segments[i].y);
      }
      ctx.stroke();

      // Core bright line
      ctx.strokeStyle = `rgba(180, 220, 255, ${alpha * 0.9})`;
      ctx.lineWidth = bolt.width;
      ctx.shadowColor = "rgba(0, 212, 255, 0.8)";
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.moveTo(bolt.segments[0].x, bolt.segments[0].y);
      for (let i = 1; i < bolt.segments.length; i++) {
        ctx.lineTo(bolt.segments[i].x, bolt.segments[i].y);
      }
      ctx.stroke();

      // White hot center
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.7})`;
      ctx.lineWidth = bolt.width * 0.4;
      ctx.shadowBlur = 5;
      ctx.beginPath();
      ctx.moveTo(bolt.segments[0].x, bolt.segments[0].y);
      for (let i = 1; i < bolt.segments.length; i++) {
        ctx.lineTo(bolt.segments[i].x, bolt.segments[i].y);
      }
      ctx.stroke();
      ctx.restore();

      // Draw branches
      for (const branch of bolt.branches) {
        branch.life = bolt.life * 0.8;
        branch.opacity = alpha * 0.6;
        drawBolt(branch);
      }
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

      // Clear with trail effect
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(5, 5, 16, 0.35)";
      ctx.fillRect(0, 0, w, h);

      // ── Layer 1: Ambient glow ──
      ctx.globalCompositeOperation = "lighter";
      const pulse = 0.6 + Math.sin(t * 2) * 0.15 + Math.sin(t * 5.3) * 0.08;

      // Large ambient glow
      const ambientGrad = ctx.createRadialGradient(cx, h * 0.5, 0, cx, h * 0.5, h * 0.6);
      ambientGrad.addColorStop(0, `rgba(0, 212, 255, ${0.04 * pulse})`);
      ambientGrad.addColorStop(0.3, `rgba(37, 99, 235, ${0.02 * pulse})`);
      ambientGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, w, h);

      // ── Layer 2: Central energy beam ──
      const beamWidth = 3 + Math.sin(t * 3) * 1;
      const beamIntensity = 0.5 + Math.sin(t * 2.5) * 0.2;

      // Outer beam glow
      const beamGrad = ctx.createLinearGradient(cx - 80, 0, cx + 80, 0);
      beamGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
      beamGrad.addColorStop(0.3, `rgba(37, 99, 235, ${0.03 * beamIntensity})`);
      beamGrad.addColorStop(0.5, `rgba(0, 212, 255, ${0.08 * beamIntensity})`);
      beamGrad.addColorStop(0.7, `rgba(37, 99, 235, ${0.03 * beamIntensity})`);
      beamGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = beamGrad;
      ctx.fillRect(cx - 80, 0, 160, h);

      // Core beam line
      ctx.save();
      ctx.shadowColor = "rgba(0, 212, 255, 0.6)";
      ctx.shadowBlur = 25;
      ctx.strokeStyle = `rgba(100, 180, 255, ${0.25 * beamIntensity})`;
      ctx.lineWidth = beamWidth * 3;
      ctx.beginPath();
      ctx.moveTo(cx + Math.sin(t * 4) * 2, 0);
      ctx.lineTo(cx + Math.sin(t * 3 + 1) * 2, h);
      ctx.stroke();

      ctx.strokeStyle = `rgba(200, 230, 255, ${0.15 * beamIntensity})`;
      ctx.lineWidth = beamWidth;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(cx + Math.sin(t * 4) * 1, 0);
      ctx.lineTo(cx + Math.sin(t * 3 + 1) * 1, h);
      ctx.stroke();
      ctx.restore();

      // ── Layer 3: Lightning bolts ──
      // Spawn new bolts
      const timeSinceBolt = t - lastBoltRef.current;
      const spawnInterval = 0.3 + Math.random() * 0.8;
      if (timeSinceBolt > spawnInterval) {
        lastBoltRef.current = t;

        // Main bolt from center
        const startY = h * (0.1 + Math.random() * 0.3);
        const endY = h * (0.5 + Math.random() * 0.4);
        const direction = Math.random() > 0.5 ? 1 : -1;
        const endX = cx + direction * (100 + Math.random() * 200);
        const displacement = 60 + Math.random() * 80;

        bolts.push(generateBolt(cx + (Math.random() - 0.5) * 10, startY, endX, endY, displacement, 2));

        // Spawn particles at bolt origin
        spawnParticles(cx, startY, 5 + Math.floor(Math.random() * 8));

        // Occasionally spawn a vertical bolt
        if (Math.random() > 0.6) {
          const vStartY = Math.random() * h * 0.3;
          const vEndY = vStartY + h * (0.3 + Math.random() * 0.4);
          bolts.push(generateBolt(
            cx + (Math.random() - 0.5) * 20,
            vStartY,
            cx + (Math.random() - 0.5) * 40,
            vEndY,
            40 + Math.random() * 50,
            1
          ));
        }
      }

      // Update and draw bolts
      for (let i = bolts.length - 1; i >= 0; i--) {
        bolts[i].life -= dt;
        if (bolts[i].life <= 0) {
          bolts.splice(i, 1);
        } else {
          drawBolt(bolts[i]);
        }
      }

      // ── Layer 4: Electric particles ──
      ctx.globalCompositeOperation = "lighter";
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= dt;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Erratic movement
        p.vx += (Math.random() - 0.5) * 300 * dt;
        p.vy += (Math.random() - 0.5) * 300 * dt;
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        const alpha = Math.pow(p.life / p.maxLife, 0.5);
        const flicker = 0.7 + Math.random() * 0.3;

        // Glow
        ctx.save();
        ctx.shadowColor = "rgba(0, 212, 255, 0.6)";
        ctx.shadowBlur = 8;
        ctx.fillStyle = `rgba(150, 210, 255, ${alpha * flicker * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fill();

        // Bright center
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * flicker * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Spawn ambient floating particles
      if (Math.random() > 0.85) {
        particles.push({
          x: cx + (Math.random() - 0.5) * 200,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 30,
          vy: -20 - Math.random() * 40,
          life: 1 + Math.random() * 2,
          maxLife: 1 + Math.random() * 2,
          size: 1 + Math.random() * 1.5,
        });
      }

      // ── Layer 5: Connection lines between nearby particles ──
      if (particles.length > 2) {
        ctx.strokeStyle = "rgba(0, 212, 255, 0.04)";
        ctx.lineWidth = 0.5;
        for (let i = 0; i < Math.min(particles.length, 30); i++) {
          for (let j = i + 1; j < Math.min(particles.length, 30); j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80) {
              const alpha = (1 - dist / 80) * 0.08;
              ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
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
