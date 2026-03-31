"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Ideal para MEI e microempresas",
    price: "99",
    popular: false,
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
    <section id="precos" className="relative py-24 md:py-32">
      {/* Background orb */}
      <div className="bg-orb w-[500px] h-[500px] bg-[#2563eb] top-0 right-[-200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2563eb] text-sm font-medium tracking-wider uppercase">
            Preços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Planos que cabem no seu{" "}
            <span className="gradient-text">bolso</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sem taxa de adesão. Cancele quando quiser. Comece gratuitamente por 14 dias.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative glass-card rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "border-[#2563eb]/50 ring-1 ring-[#2563eb]/30 scale-[1.02] md:scale-105"
                  : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-[#2563eb] text-white text-sm font-medium rounded-full glow-pulse">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                {plan.price ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-400 text-lg">R$</span>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/mês</span>
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-white">Sob consulta</div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`w-full py-3.5 rounded-full text-center font-medium transition-all ${
                  plan.popular
                    ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8] glow-pulse"
                    : "border border-white/20 text-white hover:bg-white/5"
                }`}
              >
                {plan.price ? "Começar Agora" : "Falar com Consultor"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
