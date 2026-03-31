"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const layers = [
  { src: "/screenshots/cloud-background.jpg", speed: 0.1, scaleFrom: 1, scaleTo: 1.15, opFrom: 0.7, opTo: 0.4, z: 0 },
  { src: "/screenshots/storm-sky.jpg", speed: 0.2, scaleFrom: 1.05, scaleTo: 1.25, opFrom: 0.5, opTo: 0.2, z: 1 },
  { src: "/screenshots/cloud-midground.jpg", speed: 0.35, scaleFrom: 1.1, scaleTo: 1.4, opFrom: 0.6, opTo: 0.15, z: 2 },
  { src: "/screenshots/cloud-foreground.jpg", speed: 0.5, scaleFrom: 1.15, scaleTo: 1.6, opFrom: 0.5, opTo: 0.1, z: 3 },
  { src: "/screenshots/lightning-bolt.jpg", speed: 0.15, scaleFrom: 1, scaleTo: 1.1, opFrom: 0.3, opTo: 0.5, z: 1, blend: "screen" },
];

function ParallaxLayer({ layer }: { layer: (typeof layers)[0] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * layer.speed]);
  const scale = useTransform(scrollYProgress, [0, 1], [layer.scaleFrom, layer.scaleTo]);
  const opacity = useTransform(scrollYProgress, [0, 1], [layer.opFrom, layer.opTo]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity, zIndex: layer.z }}
      className="absolute inset-0"
    >
      {/* Use img tag with onError fallback */}
      <img
        src={layer.src}
        alt=""
        className="w-full h-full object-cover"
        style={{ mixBlendMode: (layer.blend as React.CSSProperties["mixBlendMode"]) || "normal" }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
    </motion.div>
  );
}

export default function StormParallax() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fallback gradient when images don't exist */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e] via-[#0d0b1a] to-[#0d0b1a] z-[-1]" />

      {layers.map((layer, i) => (
        <ParallaxLayer key={i} layer={layer} />
      ))}

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b1a]/50 via-[#0d0b1a]/30 to-[#0d0b1a] z-[4]" />
    </div>
  );
}
