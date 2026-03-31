"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const STORM_BG = "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=1920&q=80";

const stats = [
  { value: "7+", label: "Módulos integrados", color: "#10b981" },
  { value: "100%", label: "Multi-tenant", color: "#8b5cf6" },
  { value: "24/7", label: "Automação ativa", color: "#3b82f6" },
  { value: "R$0", label: "Implantação", color: "#ef4444" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOp = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Single background image — storm */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img src={STORM_BG} alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b1a]/60 via-[#0d0b1a]/40 to-[#0d0b1a]" />

      {/* Purple ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#8b5cf6] rounded-full blur-[150px] opacity-[0.1] animate-pulse pointer-events-none" />

      {/* Content */}
      <motion.div style={{ y: textY, opacity: textOp }} className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#a855f7] text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]" />
              </span>
              Plataforma contábil inteligente — Teste gratuito disponível
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mt-8 mb-8 tracking-tight">
            <span className="text-white">Seu escritório contábil</span><br />
            <span className="gradient-text">no piloto automático.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            NF-e, NFSe, obrigações fiscais, envio por WhatsApp, portal do cliente — tudo que você faz manualmente, o CloudConta automatiza. Um sistema. Todos os módulos. Zero dor de cabeça.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a href="#precos" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-8 py-4 bg-[#10b981] text-white font-semibold rounded-full glow-pulse text-lg">
              Começar Teste Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </motion.a>
            <motion.a href="#contato" whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white font-medium rounded-full backdrop-blur-sm text-lg">
              <MessageCircle className="w-5 h-5 text-[#a855f7]" />
              Falar com Especialista
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black" style={{ color: s.color }}>{s.value}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
