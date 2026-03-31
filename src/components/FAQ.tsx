"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a migração para a CloudConta?",
    answer:
      "Nossa equipe cuida de todo o processo de migração. Importamos seus dados do sistema anterior, configuramos tudo e oferecemos treinamento completo para sua equipe. O processo leva em média 3 a 5 dias úteis.",
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

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-white font-medium pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#60a5fa]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed">
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
    <section id="faq" className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2563eb] text-sm font-medium tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Perguntas{" "}
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tire suas dúvidas sobre a plataforma CloudConta.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
