"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import CodeRainBackground from "./ui/CodeRainBackground";

export default function CTA() {
  return (
    <section id="contato" className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="absolute inset-0 opacity-50"><CodeRainBackground /></div>
      <div className="bg-orb bg-orb-1 w-[600px] h-[600px] bg-[#8b5cf6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.1]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Pronto para colocar seu escritório no{" "}
            <span className="gradient-text">piloto automático</span>?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Teste todos os módulos gratuitamente. Implantação grátis, sem compromisso.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input type="email" placeholder="Seu melhor e-mail"
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all backdrop-blur-sm" />
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#10b981] text-white font-semibold rounded-full hover:bg-[#059669] transition-colors glow-pulse whitespace-nowrap">
              Começar Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
          <p className="text-gray-500 text-sm mt-4">Sem cartão de crédito. Cancele quando quiser.</p>
        </motion.div>
      </div>
    </section>
  );
}
