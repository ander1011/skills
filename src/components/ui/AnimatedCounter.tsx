"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-2">
        {prefix}
        {count.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
