"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import GlowCard from "./ui/GlowCard";

const testimonials = [
  {
    name: "Ana Carolina Silva",
    role: "CEO",
    company: "TechStart Soluções",
    content:
      "A CloudConta revolucionou nossa contabilidade. Economizamos 40 horas por mês com as automações e temos total visibilidade financeira.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Diretor Financeiro",
    company: "Grupo Meridian",
    content:
      "Migramos de um escritório tradicional para a CloudConta e a diferença é absurda. Relatórios em tempo real e zero atraso nas obrigações.",
    rating: 5,
  },
  {
    name: "Juliana Ferreira",
    role: "Empreendedora",
    company: "JF Consultoria",
    content:
      "Como MEI, achava que não precisava de contabilidade digital. A CloudConta me mostrou que organização financeira muda tudo no negócio.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
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
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            O que nossos clientes{" "}
            <span className="gradient-text">dizem</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empresas de todos os tamanhos confiam na CloudConta para sua gestão contábil.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlowCard key={testimonial.name} delay={index * 0.15} className="flex flex-col">
              <Quote className="w-8 h-8 text-[#2563eb]/30 mb-4" />
              <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
