"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import ParallaxSection from "./ui/ParallaxSection";

const faqs = [
  {
    question: "Como funciona a migração para a CloudConta?",
    answer:
      "Nossa equipe cuida de todo o processo de migração. Importamos seus dados do sistema anterior, configuramos tudo e oferecemos treinamento completo para sua equipe. O processo leva em média 3 a 5 dias úteis, sem interrupção das suas operações.",
  },
  {
    question: "A CloudConta atende empresas do Simples Nacional, Lucro Presumido e Lucro Real?",
    answer:
      "Sim! Atendemos todos os regimes tributários brasileiros: Simples Nacional, Lucro Presumido, Lucro Real e MEI. Nossa plataforma se adapta automaticamente às exigências de cada regime.",
  },
  {
    question: "Meus dados estão seguros na plataforma?",
    answer:
      "Absolutamente. Utilizamos criptografia AES-256 para dados em repouso e TLS 1.3 para dados em trânsito. Nossos servidores ficam em data centers certificados ISO 27001 no Brasil, com backups automáticos a cada hora.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, não temos fidelidade ou multa de cancelamento. Você pode cancelar seu plano a qualquer momento diretamente pela plataforma. Seus dados ficam disponíveis para exportação por 90 dias após o cancelamento.",
  },
  {
    question: "Vocês oferecem integração com bancos e ERPs?",
    answer:
      "Sim! Temos integração nativa com os principais bancos brasileiros (Itaú, Bradesco, Santander, BB, Nubank, Inter) e ERPs como SAP, TOTVS e Omie. Além disso, nossa API aberta permite integrações customizadas.",
  },
  {
    question: "Como funciona o suporte técnico?",
    answer:
      "Oferecemos suporte por chat em tempo real, e-mail e telefone. No plano Profissional, o suporte é 24/7 com tempo médio de resposta de 5 minutos. No Enterprise, você conta com um consultor dedicado.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${
        open ? "ring-1 ring-[#2563eb]/20 shadow-[0_0_30px_rgba(37,99,235,0.08)]" : ""
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className={`font-semibold pr-4 transition-colors duration-300 ${open ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0, scale: open ? 1.1 : 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
            open ? "bg-[#2563eb]/20 text-[#60a5fa]" : "bg-white/5 text-gray-400 group-hover:text-white"
          }`}
        >
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="bg-orb bg-orb-2 w-[300px] h-[300px] bg-[#2563eb] top-[30%] -left-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ParallaxSection speed={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Perguntas{" "}
              <span className="gradient-text">frequentes</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Tire suas dúvidas sobre a plataforma CloudConta.
            </p>
          </motion.div>
        </ParallaxSection>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
