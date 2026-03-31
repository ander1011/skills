"use client";

import { motion } from "framer-motion";
import { Check, Shield, ArrowRight } from "lucide-react";
import ParallaxSection from "./ui/ParallaxSection";

const features = [
  "Todos os módulos liberados no teste",
  "Implantação e configuração gratuita",
  "Suporte direto com o time",
  "Dados isolados por escritório",
  "Sem multa, sem fidelidade",
  "Portal do cliente incluso",
  "Automações ativas desde o dia 1",
];

export default function Pricing() {
  return (
    <section id="precos" className="relative py-12 md:py-16 overflow-hidden">
      <div className="bg-orb bg-orb-1 w-[500px] h-[500px] bg-[#8b5cf6] top-0 -right-[200px]" />
      <div className="bg-orb bg-orb-2 w-[400px] h-[400px] bg-[#10b981] bottom-0 -left-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.12}>
          <motion.div initial={{ opacity: 0, y: 30, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-4 block">COMECE AGORA</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Teste o CloudConta gratuitamente.<br />Sem compromisso.
            </h2>
            <p className="text-gray-400 text-lg">Implantação grátis. Cancele quando quiser. Pague apenas pelos módulos que usar.</p>
          </motion.div>
        </ParallaxSection>

        <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }} className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent" />

          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-[#ef4444] text-white text-xs font-bold rounded-full uppercase tracking-wider">
              Período Gratuito Ativo
            </span>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-4">CloudConta Completo</h3>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-6xl font-black gradient-text">Grátis</span>
              <span className="text-gray-400 text-lg">para começar</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">Depois, planos acessíveis por módulo</p>
          </div>

          <ul className="space-y-4 mb-10 max-w-sm mx-auto">
            {features.map((feature, i) => (
              <motion.li key={feature} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.06 }} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="group w-full py-4 rounded-full text-center font-semibold text-white bg-gradient-to-r from-[#ef4444] to-[#8b5cf6] hover:from-[#dc2626] hover:to-[#7c3aed] transition-all block text-lg flex items-center justify-center gap-2">
            Quero Meu Acesso Gratuito
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm">
            <Shield className="w-4 h-4" />
            Seus dados protegidos. Cancele a qualquer momento.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
