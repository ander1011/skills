"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxSection from "./ui/ParallaxSection";

const showcaseItems = [
  {
    image: "/screenshots/dashboard.png",
    label: "DASHBOARD",
    title: "Visão geral em tempo real",
    description: "110 empresas, 13 obrigações, 40 aguardando — tudo em um painel. Status de envio, leitura e vencimentos centralizados.",
    color: "#10b981",
    align: "right" as const,
  },
  {
    image: "/screenshots/consultar-nfe.png",
    label: "GESTÃO DE IMPOSTOS",
    title: "560 notas fiscais consultadas automaticamente",
    description: "Busca automática na SEFAZ, importação de XMLs, apuração de PIS, COFINS, ICMS e IPI — tudo em um clique.",
    color: "#8b5cf6",
    align: "left" as const,
  },
  {
    image: "/screenshots/calendario.png",
    label: "CALENDÁRIO FISCAL",
    title: "Nunca perca um prazo novamente",
    description: "Calendário visual com todos os vencimentos do mês. Federal, Estadual, Municipal — com alertas e resumo lateral.",
    color: "#3b82f6",
    align: "right" as const,
  },
  {
    image: "/screenshots/emitir-nfse.png",
    label: "EMISSÃO DE NFSe",
    title: "Notas fiscais de serviço integradas",
    description: "Emissão de NFSe direto pelo sistema. Prestador, tomador, serviço e tributos — com IBS/CBS da Reforma 2026.",
    color: "#f97316",
    align: "left" as const,
  },
  {
    image: "/screenshots/automacao-bancaria.png",
    label: "AUTOMAÇÃO BANCÁRIA",
    title: "IA que classifica seus lançamentos",
    description: "Sistema de IA para classificação automática de lançamentos bancários. Processamento, regras de IA e limpeza integrados.",
    color: "#ef4444",
    align: "right" as const,
  },
];

function ShowcaseHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [8, 0]);

  return (
    <div ref={ref} className="mb-16 md:mb-24">
      <ParallaxSection speed={0.1}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-4 block">
            CONHEÇA O SISTEMA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Veja o CloudConta <span className="gradient-text">por dentro</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Cada tela foi pensada para simplificar o dia a dia do seu escritório contábil.
          </p>
        </motion.div>
      </ParallaxSection>

      {/* Hero image — Dashboard large */}
      <motion.div
        style={{ y, scale, rotateX, transformPerspective: 1200 }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(16,185,129,0.15),0_10px_40px_rgba(0,0,0,0.5)]">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-[#0d0b1a]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="ml-3 flex-1 bg-white/5 rounded-full h-6 flex items-center px-3">
              <span className="text-gray-500 text-[10px]">v2.cloudconta.com.br/workspace</span>
            </div>
          </div>
          <div className="relative aspect-[16/9] bg-[#0d0b1a]">
            <Image
              src="/screenshots/dashboard.png"
              alt="CloudConta Dashboard — 110 empresas, obrigações fiscais em tempo real"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
        {/* Glow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#10b981] rounded-full blur-[80px] opacity-15" />
      </motion.div>
    </div>
  );
}

function ShowcaseItem({
  item,
  index,
}: {
  item: (typeof showcaseItems)[0];
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
  const rotateY = item.align === "right" ? -6 : 6;

  // Skip first item (dashboard) — it's the hero
  if (index === 0) return null;

  return (
    <div ref={ref} className="py-12 md:py-20">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          item.align === "left" ? "lg:direction-rtl" : ""
        }`}
        style={{ direction: item.align === "left" ? "rtl" : "ltr" }}
      >
        {/* Image */}
        <motion.div
          style={{ y: imgY, scale, transformPerspective: 1000 }}
          initial={{ opacity: 0, rotateY: rotateY * 2, x: item.align === "right" ? 60 : -60 }}
          whileInView={{ opacity: 1, rotateY, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
          dir="ltr"
        >
          <div
            className="rounded-2xl overflow-hidden border border-white/10"
            style={{
              boxShadow: `0 25px 80px ${item.color}20, 0 10px 30px rgba(0,0,0,0.5)`,
            }}
          >
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-[#0d0b1a]">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-2 flex-1 bg-white/5 rounded-full h-5 flex items-center px-2">
                <span className="text-gray-600 text-[9px]">v2.cloudconta.com.br</span>
              </div>
            </div>
            <div className="relative aspect-[16/10] bg-[#0d0b1a]">
              <Image
                src={item.image}
                alt={`CloudConta — ${item.title}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
          </div>
          {/* Glow */}
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-12 rounded-full blur-[50px] opacity-15"
            style={{ backgroundColor: item.color }}
          />
        </motion.div>

        {/* Text */}
        <motion.div style={{ y: textY }} dir="ltr">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: item.color }}
            >
              {item.label}
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
              {item.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SystemShowcase() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShowcaseHero />
        {showcaseItems.map((item, i) => (
          <ShowcaseItem key={item.label} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
