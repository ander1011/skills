"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import CodeRainBackground from "./ui/CodeRainBackground";
import ProceduralStorm from "./ui/ProceduralStorm";

const stats = [
  { value: "7+", label: "Módulos integrados", color: "text-[#10b981]" },
  { value: "100%", label: "Multi-tenant", color: "text-[#8b5cf6]" },
  { value: "24/7", label: "Automação ativa", color: "text-[#3b82f6]" },
  { value: "R$0", label: "Implantação", color: "text-[#ef4444]" },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Procedural storm clouds - no images needed */}
      <ProceduralStorm />

      {/* Additional effects on top of clouds */}
      <div className="absolute inset-0 z-[5]">
        <CodeRainBackground />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <motion.div style={{ y: textY, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <motion.div variants={stagger} initial="hidden" animate="show" className="text-center max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#a855f7] text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]" />
              </span>
              Plataforma contábil inteligente — Teste gratuito disponível
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
            <span className="text-white">Seu escritório contábil</span><br />
            <span className="gradient-text">no piloto automático.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            NF-e, NFSe, obrigações fiscais, envio por WhatsApp, portal do cliente — tudo que você faz manualmente, o CloudConta automatiza. Um sistema. Todos os módulos. Zero dor de cabeça.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a href="#precos" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-8 py-4 bg-[#10b981] text-white font-semibold rounded-full glow-pulse text-lg">
              Começar Teste Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.a>
            <motion.a href="#contato" whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }} whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-8 py-4 border border-white/15 text-white font-medium rounded-full transition-all text-lg backdrop-blur-sm">
              <MessageCircle className="w-5 h-5 text-[#a855f7]" />
              Falar com Especialista
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.6 }} className="text-center">
                <div className={`text-3xl md:text-4xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
