"use client";

import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function GlowCard({ children, className = "", delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
