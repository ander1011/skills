"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const screens = [
  {
    id: "dashboard",
    label: "DASHBOARD",
    title: "Visão geral em tempo real",
    description: "110 empresas, 13 obrigações, 40 aguardando — tudo em um painel. Status de envio, leitura e vencimentos centralizados.",
    color: "#10b981",
    mockup: {
      topCards: [
        { label: "EMPRESAS", value: "110", color: "#3b82f6" },
        { label: "OBRIGAÇÕES", value: "13", color: "#a855f7" },
        { label: "RECEBIDOS", value: "0", color: "#10b981" },
        { label: "AGUARDANDO", value: "40", color: "#eab308" },
        { label: "VENCIDOS", value: "0", color: "#ef4444" },
      ],
      rows: ["ALURO BEAUTY — Mapa Apuração — Simples Nacional — 01/2026", "ALURO BEAUTY — Mapa Apuração — Simples Nacional — 02/2026", "ALURO BEAUTY — Relação Difal — Simples Nacional — 03/2026", "ALURO BEAUTY — Guia Simples — Simples Nacional — 03/2026"],
    },
  },
  {
    id: "impostos",
    label: "GESTÃO DE IMPOSTOS",
    title: "560 notas fiscais consultadas automaticamente",
    description: "Busca automática na SEFAZ, importação de XMLs, apuração de PIS, COFINS, ICMS e IPI — tudo em um clique.",
    color: "#8b5cf6",
    mockup: {
      topCards: [
        { label: "PIS (0,65%)", value: "R$ 1.308,04", color: "#ef4444" },
        { label: "COFINS (3,00%)", value: "R$ 6.036,89", color: "#f97316" },
        { label: "IRPJ (15%)", value: "R$ 0,00", color: "#3b82f6" },
        { label: "CSLL (9%)", value: "R$ 0,00", color: "#a855f7" },
      ],
      rows: ["NF-e  E  534906 — LUIZA BARCELOS — R$ 300,58", "NF-e  E  534905 — LUIZA BARCELOS — R$ 112,18", "NF-e  E  29587 — J E J IND EMBALAGENS — R$ 7.226,27", "NF-e  S  11291 — LUIZA BARCELOS — R$ 21.524,45"],
    },
  },
  {
    id: "calendario",
    label: "CALENDÁRIO FISCAL",
    title: "Nunca perca um prazo novamente",
    description: "Calendário visual com todos os vencimentos do mês. Federal, Estadual, Municipal — com alertas e resumo lateral.",
    color: "#3b82f6",
    mockup: {
      topCards: [
        { label: "VENCIMENTOS", value: "11", color: "#ef4444" },
        { label: "DIAS C/ VENC", value: "4", color: "#f97316" },
        { label: "FEDERAL", value: "6", color: "#10b981" },
        { label: "MUNICIPAL", value: "1", color: "#3b82f6" },
      ],
      rows: ["Darf IRPJ - Parcelado — Dia 31/03", "Darf CSLL - Parcelado — Dia 31/03", "BALANCETE — Dia 31/03", "Guia Simples Nacional — Dia 20/03"],
    },
  },
  {
    id: "nfse",
    label: "EMISSÃO DE NFSe",
    title: "Notas fiscais de serviço integradas",
    description: "Emissão de NFSe direto pelo sistema. Dados do prestador, tomador, serviço e tributos — com IBS/CBS da Reforma 2026.",
    color: "#f97316",
    mockup: {
      topCards: [
        { label: "PRESTADOR", value: "SIM IND.", color: "#10b981" },
        { label: "MUNICÍPIO", value: "N.HAMBURGO", color: "#3b82f6" },
        { label: "ISS (%)", value: "3,38", color: "#a855f7" },
        { label: "SÉRIE DPS", value: "900", color: "#eab308" },
      ],
      rows: ["Prestador: SIM INDUSTRIA DE BOLSAS LTDA", "Tomador: Digite CNPJ/CPF — Q Receita", "Serviço: Selecione o serviço primeiro...", "IBS/CBS: Reforma Tributária 2026"],
    },
  },
  {
    id: "automacao",
    label: "AUTOMAÇÃO BANCÁRIA",
    title: "IA que classifica lançamentos",
    description: "Sistema de IA para classificação automática de lançamentos bancários. Processamento, regras de IA e limpeza integrados.",
    color: "#ef4444",
    mockup: {
      topCards: [
        { label: "PROCESSAMENTO", value: "Ativo", color: "#10b981" },
        { label: "REGRAS IA", value: "Auto", color: "#8b5cf6" },
        { label: "REGRAS LIMPEZA", value: "Config", color: "#3b82f6" },
        { label: "LAYOUT", value: "Banco", color: "#eab308" },
      ],
      rows: ["Automação Bancária — IA classificação automática", "Processamento — Regras de IA — Regras de Limpeza", "Layout do Banco: Selecione um layout", "Crie ou selecione um layout antes de importar"],
    },
  },
];

function MockupFrame({ screen }: { screen: (typeof screens)[0] }) {
  return (
    <div className="relative w-full max-w-2xl">
      {/* Browser frame */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]" style={{ background: "rgba(13,11,26,0.95)" }}>
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.03]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="ml-3 flex-1 bg-white/5 rounded-full h-6 flex items-center px-3">
            <span className="text-gray-600 text-[10px]">v2.cloudconta.com.br/workspace</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 space-y-3">
          {/* Top metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {screen.mockup.topCards.map((card) => (
              <div key={card.label} className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
                <div className="text-gray-500 text-[9px] uppercase tracking-wider">{card.label}</div>
                <div className="font-bold text-sm mt-0.5" style={{ color: card.color }}>{card.value}</div>
              </div>
            ))}
          </div>

          {/* Rows */}
          <div className="space-y-1">
            {screen.mockup.rows.map((row, i) => (
              <div key={i} className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/[0.02] border border-white/[0.03] text-gray-400 text-[11px]">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: screen.color }} />
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full blur-[50px] opacity-20" style={{ backgroundColor: screen.color }} />
    </div>
  );
}

export default function SystemShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    if (!containerRef.current) return;
    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // No pin on mobile

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${screens.length * 600}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const idx = Math.min(Math.floor(self.progress * screens.length), screens.length - 1);
          setActiveIndex(idx);
        },
      },
    });

    return () => { tl.kill(); };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <motion.span
              key={`label-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold tracking-widest uppercase mb-4 block"
              style={{ color: screens[activeIndex].color }}
            >
              {screens[activeIndex].label}
            </motion.span>

            <motion.h2
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
            >
              {screens[activeIndex].title}
            </motion.h2>

            <motion.p
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              {screens[activeIndex].description}
            </motion.p>

            {/* Progress dots */}
            <div className="flex items-center gap-3">
              {screens.map((s, i) => (
                <div
                  key={s.id}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIndex ? 32 : 8,
                    backgroundColor: i === activeIndex ? s.color : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — mockup */}
          <div className="flex justify-center" style={{ perspective: "1200px" }}>
            <motion.div
              key={`mockup-${activeIndex}`}
              initial={{ opacity: 0, rotateY: 15, scale: 0.9, x: 60 }}
              animate={{ opacity: 1, rotateY: -5, scale: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <MockupFrame screen={screens[activeIndex]} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
