"use client";

import { motion } from "framer-motion";
import { Shield, Zap, HeartHandshake, Award } from "lucide-react";
import AnimatedCounter from "./ui/AnimatedCounter";

const reasons = [
  {
    icon: Zap,
    title: "Automação Total",
    description: "Reduza 80% do trabalho manual com automações inteligentes e integrações.",
  },
  {
    icon: Shield,
    title: "Segurança Máxima",
    description: "Dados criptografados, backup em nuvem e conformidade com LGPD.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Humanizado",
    description: "Equipe especializada disponível por chat, telefone e e-mail.",
  },
  {
    icon: Award,
    title: "Compliance Garantido",
    description: "Sempre atualizado com as últimas regulamentações fiscais e trabalhistas.",
  },
];

const counters = [
  { target: 5000, prefix: "+", suffix: "", label: "Empresas Atendidas" },
  { target: 50000, prefix: "+", suffix: "", label: "Notas Fiscais/Mês" },
  { target: 98, prefix: "", suffix: "%", label: "Satisfação dos Clientes" },
  { target: 12, prefix: "", suffix: " anos", label: "De Experiência" },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      {/* Background orb */}
      <div className="bg-orb w-[400px] h-[400px] bg-[#8b5cf6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2563eb] text-sm font-medium tracking-wider uppercase">
            Por que CloudConta?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            A contabilidade do{" "}
            <span className="gradient-text">futuro</span>, hoje
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Combinamos tecnologia de ponta com expertise contábil para entregar
            resultados excepcionais.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2563eb]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2563eb]/20 transition-colors">
                <reason.icon className="w-7 h-7 text-[#60a5fa]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Counters */}
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map((counter) => (
              <AnimatedCounter key={counter.label} {...counter} />
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
