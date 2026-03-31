"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Clock, Star } from "lucide-react";
import ParticlesBackground from "./ui/ParticlesBackground";

const stats = [
  { icon: Users, value: "+5.000", label: "empresas" },
  { icon: Clock, value: "99.9%", label: "uptime" },
  { icon: Star, value: "4.9/5", label: "avaliação" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <ParticlesBackground />
        <div className="bg-orb w-[600px] h-[600px] bg-[#2563eb] top-[-200px] left-[-200px]" />
        <div className="bg-orb w-[500px] h-[500px] bg-[#8b5cf6] bottom-[-150px] right-[-150px]" />
        <div className="bg-orb w-[300px] h-[300px] bg-[#00d4ff] top-[40%] right-[20%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563eb]/30 bg-[#2563eb]/10 text-[#60a5fa] text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            Plataforma de contabilidade #1 do Brasil
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Contabilidade</span>{" "}
            <span className="gradient-text">inteligente</span>{" "}
            <span className="text-white">para empresas que querem</span>{" "}
            <span className="gradient-text">crescer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Automatize sua gestão fiscal, folha de pagamento e contabilidade
            em uma única plataforma na nuvem. Simples, segura e poderosa.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contato"
              className="group flex items-center gap-2 px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-all glow-pulse text-lg"
            >
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="group flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all text-lg"
            >
              <Play className="w-5 h-5 text-[#00d4ff]" />
              Ver Demonstração
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#2563eb]/10">
                  <stat.icon className="w-5 h-5 text-[#60a5fa]" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Dashboard frame */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
              <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="ml-4 flex-1 bg-white/5 rounded-full h-6 max-w-xs" />
              </div>
              <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Mini stat cards */}
                {[
                  { label: "Receita Mensal", value: "R$ 245.890", change: "+12.5%", color: "text-green-400" },
                  { label: "Notas Emitidas", value: "1.847", change: "+8.3%", color: "text-green-400" },
                  { label: "Impostos a Pagar", value: "R$ 18.420", change: "-3.2%", color: "text-red-400" },
                  { label: "Clientes Ativos", value: "432", change: "+5.1%", color: "text-green-400" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-gray-500 text-xs mb-2">{item.label}</div>
                    <div className="text-white font-bold text-lg">{item.value}</div>
                    <div className={`text-xs ${item.color} mt-1`}>{item.change}</div>
                  </div>
                ))}
                {/* Chart placeholder */}
                <div className="col-span-2 md:col-span-4 bg-white/5 rounded-xl p-4 border border-white/5 h-40 flex items-end gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#2563eb] to-[#00d4ff] rounded-t opacity-60"
                      style={{ height: `${20 + Math.random() * 80}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Glow effect under dashboard */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#2563eb] rounded-full blur-[60px] opacity-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
