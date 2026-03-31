"use client";

import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";
import Tilt3DCard from "./ui/Tilt3DCard";
import ParallaxSection from "./ui/ParallaxSection";

const testimonials = [
  {
    name: "DICON Contabilidade",
    type: "Escritório Contábil — Novo Hamburgo/RS",
    initial: "D",
    color: "bg-[#8b5cf6]",
    content: "O CloudConta mudou completamente a forma como gerenciamos as obrigações dos nossos clientes. O que levava horas agora é automático.",
    rating: 5,
  },
  {
    name: "SIM Indústria de Bolsas",
    type: "Indústria — Novo Hamburgo/RS",
    initial: "S",
    color: "bg-[#f97316]",
    content: "A automação de busca de notas fiscais é impressionante. Economizamos mais de 20 horas por semana só nessa função.",
    rating: 5,
  },
  {
    name: "Seu Escritório Aqui",
    type: "Agende uma demonstração",
    initial: "+",
    color: "bg-[#8b5cf6]",
    content: "O portal do cliente nos deu tranquilidade. Nossos clientes emitem notas e consultam tudo sem precisar nos ligar.",
    rating: 5,
    isCta: true,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-12 md:py-16 overflow-hidden">
      <div className="bg-orb bg-orb-1 w-[400px] h-[400px] bg-[#8b5cf6] top-[20%] -right-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.12}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-4 block">QUEM JÁ USA</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Escritórios e empresas que transformaram sua operação.
            </h2>
          </motion.div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Tilt3DCard key={t.name} delay={i * 0.15} glowColor={t.isCta ? "139, 92, 246" : "168, 85, 247"}>
              <div className="p-7 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <motion.div key={j} initial={{ opacity: 0, scale: 0, rotate: -180 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15 + j * 0.08 }}>
                      <Star className="w-4 h-4 fill-[#eab308] text-[#eab308]" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 flex-1 text-[15px]">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.isCta ? <Plus className="w-5 h-5" /> : t.initial}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.type}</div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
