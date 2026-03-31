"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  FileText,
  Users,
  BarChart3,
  Brain,
  Building2,
} from "lucide-react";
import Tilt3DCard from "./ui/Tilt3DCard";
import ParallaxSection from "./ui/ParallaxSection";

const services = [
  {
    icon: Calculator,
    title: "Contabilidade Digital",
    description:
      "Gestão contábil completa na nuvem com lançamentos automáticos, conciliação bancária e balancetes em tempo real.",
    color: "#2563eb",
    glow: "37, 99, 235",
  },
  {
    icon: FileText,
    title: "Fiscal & Tributário",
    description:
      "Apuração de impostos, obrigações acessórias, SPED, EFD e planejamento tributário inteligente.",
    color: "#00d4ff",
    glow: "0, 212, 255",
  },
  {
    icon: Users,
    title: "Folha de Pagamento",
    description:
      "eSocial, admissões, rescisões, férias e 13º automatizados. Cálculos precisos e conformidade total.",
    color: "#8b5cf6",
    glow: "139, 92, 246",
  },
  {
    icon: BarChart3,
    title: "ERP & Gestão",
    description:
      "Controle financeiro, contas a pagar/receber, fluxo de caixa e gestão de estoque integrados.",
    color: "#ff6b35",
    glow: "255, 107, 53",
  },
  {
    icon: Brain,
    title: "Relatórios Inteligentes",
    description:
      "Dashboards interativos em tempo real com insights gerados por IA para tomada de decisão estratégica.",
    color: "#60a5fa",
    glow: "96, 165, 250",
  },
  {
    icon: Building2,
    title: "Abertura de Empresa",
    description:
      "Do CNPJ ao alvará de funcionamento, tudo 100% digital. Abra sua empresa sem sair de casa.",
    color: "#10b981",
    glow: "16, 185, 129",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background orb */}
      <div className="bg-orb bg-orb-2 w-[500px] h-[500px] bg-[#2563eb] top-[20%] -left-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with parallax */}
        <ParallaxSection speed={0.15}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-[#2563eb] text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Nossos Serviços
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Tudo que sua empresa{" "}
              <span className="gradient-text">precisa</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Uma plataforma completa que integra contabilidade, fiscal, RH e
              gestão empresarial em um só lugar.
            </p>
          </motion.div>
        </ParallaxSection>

        {/* Services grid with 3D tilt cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <Tilt3DCard key={service.title} delay={index * 0.1} glowColor={service.glow}>
              <div className="p-7">
                {/* Animated icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative"
                  style={{ backgroundColor: `${service.color}12` }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-30"
                    style={{ backgroundColor: service.color }}
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
                {/* Hover arrow */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: service.color }}
                >
                  Saiba mais →
                </motion.div>
              </div>
            </Tilt3DCard>
          ))}
        </motion.div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
