"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}

export default function Tilt3DCard({
  children,
  className = "",
  delay = 0,
  glowColor = "37, 99, 235",
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setShinePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transformStyle: "preserve-3d", transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
      className={`relative glass-card rounded-2xl overflow-hidden ${className}`}
    >
      {/* Shine effect following mouse */}
      <div
        className="absolute inset-0 pointer-events-none z-10 rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,255,255,0.07) 0%, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Border glow following mouse */}
      <div
        className="absolute -inset-px pointer-events-none z-0 rounded-2xl transition-opacity duration-400"
        style={{
          background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(${glowColor}, 0.4) 0%, transparent 50%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </motion.div>
  );
}
