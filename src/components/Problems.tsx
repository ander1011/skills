"use client";

import { motion } from "framer-motion";
import { Search, Send, Clock, Unplug } from "lucide-react";
import Tilt3DCard from "./ui/Tilt3DCard";
import ParallaxSection from "./ui/ParallaxSection";

const problems = [
  { icon: Search, title: "Horas perdidas buscando notas", description: "Portais da prefeitura, SEFAZ, baixar XML um por um. Multiplique por 200 empresas.", color: "#ef4444", glow: "239, 68, 68" },
  { icon: Send, title: "Envio manual de documentos", description: "Separar guias, montar mensagens, enviar para cada cliente. Um a um.", color: "#f97316", glow: "249, 115, 22" },
  { icon: Clock, title: "Obrigações sem controle", description: "Planilhas e lembretes. Quando percebe, o prazo já passou.", color: "#eab308", glow: "234, 179, 8" },
  { icon: Unplug, title: "Sistemas desconectados", description: "Um para notas, outro para contabilidade, outro para atendimento.", color: "#a855f7", glow: "168, 85, 247" },
];

const painStats = [
  { value: "15h+", label: "perdidas/semana" },
  { value: "47%", label: "prazos em risco" },
  { value: "5+", label: "sistemas separados" },
];

export default function Problems() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - text */}
          <ParallaxSection speed={0.1}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-4 block">O PROBLEMA QUE VOCÊ CONHECE BEM</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Você não deveria perder tempo com o que pode ser automático.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Se o seu escritório ainda depende de processos manuais, você está deixando dinheiro e horas na mesa — todos os dias.
              </p>
              <div className="flex flex-wrap gap-8">
                {painStats.map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, type: "spring" }} className="text-center">
                    <div className="text-3xl md:text-4xl font-black gradient-text-red">{stat.value}</div>
                    <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ParallaxSection>

          {/* Right - problem cards */}
          <div className="space-y-4">
            {problems.map((problem, i) => (
              <Tilt3DCard key={problem.title} delay={i * 0.1} glowColor={problem.glow}>
                <div className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${problem.color}15` }}>
                    <problem.icon className="w-5 h-5" style={{ color: problem.color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{problem.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider mt-24" />
    </section>
  );
}
