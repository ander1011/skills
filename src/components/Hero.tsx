"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Users, Clock, Star } from "lucide-react";
import ParticlesBackground from "./ui/ParticlesBackground";
import CodeRainBackground from "./ui/CodeRainBackground";

const stats = [
  { icon: Users, value: "+5.000", label: "empresas" },
  { icon: Clock, value: "99.9%", label: "uptime" },
  { icon: Star, value: "4.9/5", label: "avaliação" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Layered backgrounds with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <ParticlesBackground />
        <CodeRainBackground />
        {/* Animated gradient orbs */}
        <div className="bg-orb bg-orb-1 w-[700px] h-[700px] bg-[#2563eb] -top-[300px] -left-[200px]" />
        <div className="bg-orb bg-orb-2 w-[600px] h-[600px] bg-[#8b5cf6] -bottom-[200px] -right-[200px]" />
        <div className="bg-orb bg-orb-1 w-[400px] h-[400px] bg-[#00d4ff] top-[30%] right-[10%]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-40" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2563eb]/30 bg-[#2563eb]/10 text-[#60a5fa] text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00d4ff]" />
              </span>
              Plataforma de contabilidade #1 do Brasil
            </span>
          </motion.div>

          {/* Title with 3D perspective */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight"
          >
            <span className="text-white">Contabilidade</span>
            <br />
            <span className="gradient-text">inteligente</span>{" "}
            <span className="text-white">para</span>
            <br />
            <span className="text-white">empresas que querem</span>{" "}
            <span className="gradient-text">crescer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Automatize sua gestão fiscal, folha de pagamento e contabilidade
            em uma única plataforma na nuvem. Simples, segura e poderosa.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full transition-colors glow-pulse text-lg"
            >
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.a>
            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-8 py-4 border border-white/15 text-white font-medium rounded-full transition-all text-lg backdrop-blur-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Play className="w-5 h-5 text-[#00d4ff]" />
              </motion.div>
              Ver Demonstração
            </motion.a>
          </motion.div>

          {/* Stats with stagger */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
                className="flex items-center gap-3 group"
              >
                <div className="p-2.5 rounded-xl bg-[#2563eb]/10 group-hover:bg-[#2563eb]/20 transition-colors duration-300">
                  <stat.icon className="w-5 h-5 text-[#60a5fa]" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dashboard mockup with parallax + 3D */}
        <motion.div
          style={{ y: dashboardY }}
          initial={{ opacity: 0, y: 80, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 relative"
          whileHover={{ rotateX: -2, rotateY: 2, scale: 1.01 }}
        >
          <div className="relative mx-auto max-w-5xl" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
            {/* Dashboard frame */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {/* Browser bar */}
              <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="ml-4 flex-1 flex items-center gap-2">
                  <div className="bg-white/5 rounded-full h-7 flex-1 max-w-sm px-4 flex items-center">
                    <span className="text-gray-600 text-xs">app.cloudconta.com.br/dashboard</span>
                  </div>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6 md:p-8">
                {/* Top metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Receita Mensal", value: "R$ 245.890", change: "+12.5%", color: "text-emerald-400", barColor: "from-emerald-500/20 to-emerald-500/5" },
                    { label: "Notas Emitidas", value: "1.847", change: "+8.3%", color: "text-emerald-400", barColor: "from-blue-500/20 to-blue-500/5" },
                    { label: "Impostos a Pagar", value: "R$ 18.420", change: "-3.2%", color: "text-red-400", barColor: "from-purple-500/20 to-purple-500/5" },
                    { label: "Clientes Ativos", value: "432", change: "+5.1%", color: "text-emerald-400", barColor: "from-cyan-500/20 to-cyan-500/5" },
                  ].map((item) => (
                    <div key={item.label} className={`bg-gradient-to-b ${item.barColor} rounded-xl p-4 border border-white/5`}>
                      <div className="text-gray-500 text-xs mb-1.5">{item.label}</div>
                      <div className="text-white font-bold text-lg mb-1">{item.value}</div>
                      <div className={`text-xs ${item.color} font-medium`}>{item.change}</div>
                    </div>
                  ))}
                </div>
                {/* Chart */}
                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm font-medium">Faturamento 2026</span>
                    <div className="flex gap-3">
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#2563eb]" /> Receita
                      </span>
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#00d4ff]" /> Despesas
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-32">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                        <div
                          className="w-full bg-gradient-to-t from-[#2563eb] to-[#60a5fa] rounded-t opacity-70 hover:opacity-100 transition-opacity duration-300"
                          style={{ height: `${30 + Math.sin(i * 0.8) * 20 + i * 4}%` }}
                        />
                        <div
                          className="w-full bg-gradient-to-t from-[#00d4ff]/40 to-[#00d4ff]/10 rounded-t"
                          style={{ height: `${15 + Math.cos(i * 0.6) * 10 + i * 2}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effects under dashboard */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#2563eb] rounded-full blur-[80px] opacity-20" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-16 bg-[#00d4ff] rounded-full blur-[60px] opacity-10" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
