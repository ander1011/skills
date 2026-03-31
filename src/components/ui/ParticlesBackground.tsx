"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const particlesOptions: ISourceOptions = {
  fullScreen: false,
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 0.3,
          color: "#00d4ff",
        },
      },
    },
  },
  particles: {
    number: {
      value: 80,
      density: { enable: true, width: 1920, height: 1080 },
    },
    color: { value: ["#2563eb", "#00d4ff", "#8b5cf6", "#60a5fa"] },
    opacity: {
      value: { min: 0.05, max: 0.3 },
      animation: { enable: true, speed: 0.3, sync: false },
    },
    size: {
      value: { min: 1, max: 3 },
      animation: { enable: true, speed: 1, sync: false },
    },
    links: {
      enable: true,
      distance: 120,
      color: "#2563eb",
      opacity: 0.06,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      outModes: { default: "bounce" },
      attract: { enable: true, rotate: { x: 600, y: 1200 } },
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
