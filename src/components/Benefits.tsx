"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ParallaxSection from "./ui/ParallaxSection";

const benefits = [
  { title: "Economia de 15+ horas por semana", description: "Busca de notas, envio de documentos e controle de prazos — tudo automático." },
  { title: "Zero obrigações vencidas", description: "Dashboard com alertas em tempo real. Você sabe exatamente o que falta e quando vence." },
  { title: "Clientes mais satisfeitos", description: "Portal com acesso direto a notas, relatórios e emissão. Menos ligações, mais autonomia." },
  { title: "Equipe organizada por setores", description: "Cada colaborador vê só o que é dele. Fiscal, contábil, DP — tudo separado." },
  { title: "Multi-empresa, multi-escritório", description: "Multi-tenant com isolamento total. Cada escritório com seus dados. Escala sem complicação." },
  { title: "Implantação gratuita", description: "Não cobramos setup. Você começa a usar hoje. Suporte na configuração incluso." },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 md:py-32 overflow-hidden">
      <div className="bg-orb bg-orb-1 w-[400px] h-[400px] bg-[#10b981] top-[30%] -right-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.12}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
            <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-4 block">BENEFÍCIOS CONCRETOS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">O que muda no seu dia a dia.</h2>
            <p className="text-gray-400 text-lg">Não é sobre tecnologia. É sobre tempo, controle e tranquilidade.</p>
          </motion.div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, i) => (
            <motion.div key={benefit.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-full bg-[#10b981]/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#10b981]/25 transition-colors">
                <Check className="w-4 h-4 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-24" />
    </section>
  );
}
