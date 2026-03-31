"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, HeartHandshake, Award } from "lucide-react";
import AnimatedCounter from "./ui/AnimatedCounter";
import ParallaxSection from "./ui/ParallaxSection";

const reasons = [
  {
    icon: Zap,
    title: "Automação Total",
    description: "Reduza 80% do trabalho manual com automações inteligentes e integrações.",
    color: "#ff6b35",
  },
  {
    icon: Shield,
    title: "Segurança Máxima",
    description: "Dados criptografados, backup em nuvem e conformidade com LGPD.",
    color: "#2563eb",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Humanizado",
    description: "Equipe especializada disponível por chat, telefone e e-mail.",
    color: "#00d4ff",
  },
  {
    icon: Award,
    title: "Compliance Garantido",
    description: "Sempre atualizado com as últimas regulamentações fiscais e trabalhistas.",
    color: "#8b5cf6",
  },
];

const counters = [
  { target: 5000, prefix: "+", suffix: "", label: "Empresas Atendidas" },
  { target: 50000, prefix: "+", suffix: "", label: "Notas Fiscais/Mês" },
  { target: 98, prefix: "", suffix: "%", label: "Satisfação dos Clientes" },
  { target: 12, prefix: "", suffix: " anos", label: "De Experiência" },
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const orbY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="sobre" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated orbs with parallax */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="bg-orb w-[500px] h-[500px] bg-[#8b5cf6] top-1/3 left-1/2"
      />
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], [50, -80]), y: useTransform(scrollYProgress, [0, 1], [30, -60]) }}
        className="bg-orb w-[300px] h-[300px] bg-[#00d4ff] bottom-1/4 right-1/4"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ParallaxSection speed={0.15}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Por que CloudConta?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              A contabilidade do{" "}
              <span className="gradient-text">futuro</span>, hoje
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Combinamos tecnologia de ponta com expertise contábil para entregar
              resultados excepcionais.
            </p>
          </motion.div>
        </ParallaxSection>

        {/* Reasons grid with 3D float */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 relative"
                style={{ backgroundColor: `${reason.color}12` }}
              >
                <reason.icon className="w-8 h-8" style={{ color: reason.color }} />
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundColor: reason.color }}
                />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Counters with glassmorphism and parallax */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-14 relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#2563eb]/50 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {counters.map((counter) => (
              <AnimatedCounter key={counter.label} {...counter} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
