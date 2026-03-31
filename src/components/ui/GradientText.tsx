"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`gradient-text ${className}`}
    >
      {children}
    </motion.span>
  );
}
