"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`gradient-text ${className}`}
    >
      {children}
    </motion.span>
  );
}
