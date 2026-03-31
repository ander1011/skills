"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const particlesOptions: ISourceOptions = {
  fullScreen: false,
  fpsLimit: 60,
  particles: {
    number: {
      value: 60,
      density: { enable: true, width: 1920, height: 1080 },
    },
    color: { value: ["#2563eb", "#00d4ff", "#8b5cf6"] },
    opacity: {
      value: { min: 0.1, max: 0.4 },
      animation: { enable: true, speed: 0.5, sync: false },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#2563eb",
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      outModes: { default: "bounce" },
    },
  },
  detectRetina: true,
};

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 pointer-events-none"
      options={particlesOptions}
    />
  );
}
