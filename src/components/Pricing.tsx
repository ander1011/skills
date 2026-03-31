"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Tilt3DCard from "./ui/Tilt3DCard";
import ParallaxSection from "./ui/ParallaxSection";

const plans = [
  {
    name: "Starter",
    description: "Ideal para MEI e microempresas",
    price: "99",
    popular: false,
    glow: "96, 165, 250",
    features: [
      "Contabilidade básica",
      "Emissão de notas fiscais",
      "Apuração de impostos (Simples)",
      "Relatórios mensais",
      "Suporte por e-mail",
      "1 empresa",
    ],
  },
  {
    name: "Profissional",
    description: "Para PMEs em crescimento",
    price: "249",
    popular: true,
    glow: "37, 99, 235",
    features: [
      "Tudo do Starter +",
      "Folha de pagamento completa",
      "eSocial e SPED",
      "Planejamento tributário",
      "Dashboards em tempo real",
      "Suporte prioritário 24/7",
      "Até 5 empresas",
      "Integrações bancárias",
    ],
  },
  {
    name: "Enterprise",
    description: "Para grandes empresas",
    price: null,
    popular: false,
    glow: "139, 92, 246",
    features: [
      "Tudo do Profissional +",
      "Consultor dedicado",
      "API personalizada",
      "SLA garantido 99.99%",
      "Auditoria e compliance",
      "Empresas ilimitadas",
      "Treinamento da equipe",
      "Migração assistida",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="relative py-24 md:py-32 overflow-hidden">
      <div className="bg-orb bg-orb-1 w-[500px] h-[500px] bg-[#2563eb] top-0 -right-[200px]" />
      <div className="bg-orb bg-orb-2 w-[400px] h-[400px] bg-[#8b5cf6] bottom-0 -left-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ParallaxSection speed={0.12}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Preços
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Planos que cabem no seu{" "}
              <span className="gradient-text">bolso</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Sem taxa de adesão. Cancele quando quiser. Comece gratuitamente por 14 dias.
            </p>
          </motion.div>
        </ParallaxSection>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Tilt3DCard
              key={plan.name}
              delay={index * 0.12}
              glowColor={plan.glow}
              className={plan.popular ? "ring-1 ring-[#2563eb]/30 md:scale-105 z-10" : ""}
            >
              <div className="p-8 flex flex-col h-full relative">
                {/* Popular badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <div className="flex items-center gap-1.5 px-5 py-2 bg-[#2563eb] text-white text-sm font-semibold rounded-full glow-pulse shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Mais Popular
                    </div>
                  </motion.div>
                )}

                <div className="mb-6 pt-2">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  {plan.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-400 text-lg">R$</span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="text-5xl font-black text-white"
                      >
                        {plan.price}
                      </motion.span>
                      <span className="text-gray-400">/mês</span>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl font-black gradient-text"
                    >
                      Sob consulta
                    </motion.div>
                  )}
                </div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#00d4ff]" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="#contato"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-full text-center font-semibold transition-all block ${
                    plan.popular
                      ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8] glow-pulse"
                      : "border border-white/15 text-white hover:bg-white/5 hover:border-white/25"
                  }`}
                >
                  {plan.price ? "Começar Agora" : "Falar com Consultor"}
                </motion.a>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
