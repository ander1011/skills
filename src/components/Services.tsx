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
import GlowCard from "./ui/GlowCard";

const services = [
  {
    icon: Calculator,
    title: "Contabilidade Digital",
    description:
      "Gestão contábil completa na nuvem com lançamentos automáticos, conciliação bancária e balancetes em tempo real.",
    color: "#2563eb",
  },
  {
    icon: FileText,
    title: "Fiscal & Tributário",
    description:
      "Apuração de impostos, obrigações acessórias, SPED, EFD e planejamento tributário inteligente.",
    color: "#00d4ff",
  },
  {
    icon: Users,
    title: "Folha de Pagamento",
    description:
      "eSocial, admissões, rescisões, férias e 13º automatizados. Cálculos precisos e conformidade total.",
    color: "#8b5cf6",
  },
  {
    icon: BarChart3,
    title: "ERP & Gestão",
    description:
      "Controle financeiro, contas a pagar/receber, fluxo de caixa e gestão de estoque integrados.",
    color: "#ff6b35",
  },
  {
    icon: Brain,
    title: "Relatórios Inteligentes",
    description:
      "Dashboards interativos em tempo real com insights gerados por IA para tomada de decisão estratégica.",
    color: "#60a5fa",
  },
  {
    icon: Building2,
    title: "Abertura de Empresa",
    description:
      "Do CNPJ ao alvará de funcionamento, tudo 100% digital. Abra sua empresa sem sair de casa.",
    color: "#10b981",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2563eb] text-sm font-medium tracking-wider uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Tudo que sua empresa{" "}
            <span className="gradient-text">precisa</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma plataforma completa que integra contabilidade, fiscal, RH e
            gestão empresarial em um só lugar.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlowCard key={service.title} delay={index * 0.1}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon
                  className="w-6 h-6"
                  style={{ color: service.color }}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
