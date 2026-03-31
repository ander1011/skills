"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Shield, Clock, Award } from "lucide-react";
import CodeRainBackground from "./ui/CodeRainBackground";

const trustBadges = [
  { icon: Shield, label: "SSL Seguro" },
  { icon: Clock, label: "99.9% Uptime" },
  { icon: Award, label: "LGPD Compliant" },
];

export default function CTA() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const orbX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="contato" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 animated-gradient-bg" />

      {/* Code rain */}
      <div className="absolute inset-0 opacity-50">
        <CodeRainBackground />
      </div>

      {/* Animated orbs */}
      <motion.div style={{ x: orbX }} className="bg-orb bg-orb-1 w-[600px] h-[600px] bg-[#2563eb] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15]" />
      <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], [30, -30]) }} className="bg-orb bg-orb-2 w-[400px] h-[400px] bg-[#8b5cf6] top-0 right-0 opacity-[0.1]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Pronto para transformar sua{" "}
            <span className="gradient-text">contabilidade</span>?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Junte-se a mais de 5.000 empresas que já simplificaram sua gestão
            contábil com a CloudConta. Comece grátis por 14 dias.
          </p>
        </motion.div>

        {/* Email capture form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto"
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
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#2563eb]/50 focus:ring-2 focus:ring-[#2563eb]/20 transition-all backdrop-blur-sm"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors glow-pulse whitespace-nowrap"
            >
              Começar Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            Sem cartão de crédito. Cancele quando quiser.
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-8 mt-12"
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-gray-500">
              <badge.icon className="w-4 h-4" />
              <span className="text-xs font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
