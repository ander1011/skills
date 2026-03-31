"use client";

import { motion } from "framer-motion";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FloatingCard({ children, className = "", delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative bg-[#0d0b1a]/80 backdrop-blur-xl border border-white/[0.06] rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] ${className}`}
    >
      {/* Top edge glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent" />
      {children}
    </motion.div>
  );
}
