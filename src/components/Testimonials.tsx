"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Tilt3DCard from "./ui/Tilt3DCard";
import ParallaxSection from "./ui/ParallaxSection";

const testimonials = [
  {
    name: "Ana Carolina Silva",
    role: "CEO",
    company: "TechStart Soluções",
    content:
      "A CloudConta revolucionou nossa contabilidade. Economizamos 40 horas por mês com as automações e temos total visibilidade financeira em tempo real.",
    rating: 5,
    gradient: "from-[#2563eb] to-[#00d4ff]",
  },
  {
    name: "Roberto Mendes",
    role: "Diretor Financeiro",
    company: "Grupo Meridian",
    content:
      "Migramos de um escritório tradicional para a CloudConta e a diferença é absurda. Relatórios em tempo real e zero atraso nas obrigações fiscais.",
    rating: 5,
    gradient: "from-[#8b5cf6] to-[#2563eb]",
  },
  {
    name: "Juliana Ferreira",
    role: "Empreendedora",
    company: "JF Consultoria",
    content:
      "Como MEI, achava que não precisava de contabilidade digital. A CloudConta me mostrou que organização financeira muda tudo no negócio.",
    rating: 5,
    gradient: "from-[#00d4ff] to-[#8b5cf6]",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="bg-orb bg-orb-1 w-[400px] h-[400px] bg-[#00d4ff] top-[20%] right-[-100px]" />

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
              Depoimentos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              O que nossos clientes{" "}
              <span className="gradient-text">dizem</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Empresas de todos os tamanhos confiam na CloudConta para sua gestão contábil.
            </p>
          </motion.div>
        </ParallaxSection>

        {/* Testimonials grid with 3D cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Tilt3DCard key={testimonial.name} delay={index * 0.15}>
              <div className="p-7 flex flex-col h-full">
                {/* Quote icon with glow */}
                <div className="relative mb-5">
                  <Quote className="w-10 h-10 text-[#2563eb]/20" />
                  <div className="absolute inset-0 w-10 h-10 bg-[#2563eb] rounded-full blur-2xl opacity-10" />
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-8 flex-1 text-[15px]">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15 + i * 0.08, duration: 0.4 }}
                    >
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    </motion.div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
