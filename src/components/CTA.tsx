"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/20 via-[#050510] to-[#8b5cf6]/20" />
      <div className="bg-orb w-[600px] h-[600px] bg-[#2563eb] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para transformar sua{" "}
            <span className="gradient-text">contabilidade</span>?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Junte-se a mais de 5.000 empresas que já simplificaram sua gestão
            contábil com a CloudConta. Comece grátis por 14 dias.
          </p>
        </motion.div>

        {/* Email capture form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#2563eb]/50 focus:ring-1 focus:ring-[#2563eb]/30 transition-all"
              />
            </div>
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-all glow-pulse whitespace-nowrap"
            >
              Começar Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            Sem cartão de crédito. Cancele quando quiser.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
