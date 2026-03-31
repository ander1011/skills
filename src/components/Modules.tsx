"use client";

import { motion } from "framer-motion";
import { FileText, Receipt, MessageCircle, Users, Calculator, Zap } from "lucide-react";
import Tilt3DCard from "./ui/Tilt3DCard";
import ParallaxSection from "./ui/ParallaxSection";

const modules = [
  {
    icon: Receipt, title: "CloudConta Impostos", badge: "NOVO", badgeColor: "bg-[#10b981]",
    url: "impostos.cloudconta.com.br", color: "#10b981", glow: "16, 185, 129",
    features: ["Robô monitor de PDFs automático", "Envio automático via WhatsApp", "Confirmação de leitura em tempo real", "Multi-empresa — escritório completo", "Controle de vencimentos e períodos"],
    tags: [{ label: "Auto", sub: "Sync" }, { label: "SEFAZ", sub: "+ ADN" }],
    cta: "Acessar Sistema de Impostos →",
    extraStats: ["100% Automatizado", "24/7 Robô Ativo"],
  },
  {
    icon: FileText, title: "NF-e / NFSe Inteligente", badge: null, badgeColor: "",
    color: "#3b82f6", glow: "59, 130, 246",
    features: ["Consulta automática SEFAZ + Portal Nacional", "Busca prestadas e tomadas por NSU", "Emissão de NFSe Integrada", "Detecção de cancelamentos"],
    tags: [{ label: "Auto", sub: "Sync" }, { label: "SEFAZ", sub: "+ ADN" }],
  },
  {
    icon: MessageCircle, title: "WhatsApp Multi-Atendimento", badge: "POPULAR", badgeColor: "bg-[#10b981]",
    color: "#22c55e", glow: "34, 197, 94",
    features: ["Múltiplos atendentes simultâneos", "Kanban de conversas", "Automações e chatbot", "Envio programado de documentos"],
    tags: [{ label: "Multi", sub: "Atendentes" }, { label: "Bot", sub: "Integrado" }],
  },
  {
    icon: Users, title: "Portal do Cliente", badge: null, badgeColor: "",
    color: "#f97316", glow: "249, 115, 22",
    features: ["Acesso direto a notas e relatórios", "Emissão de NFSe pelo cliente", "Dashboard personalizado", "Autonomia total para o cliente"],
    tags: [{ label: "Self", sub: "Service" }, { label: "24/7", sub: "Acesso" }],
  },
  {
    icon: Calculator, title: "Contabilidade & Fiscal", badge: null, badgeColor: "",
    color: "#eab308", glow: "234, 179, 8",
    features: ["Plano de contas e lançamentos", "Apurações fiscais e DRE", "Balanço patrimonial", "Regras inteligentes automáticas"],
    tags: [{ label: "AI", sub: "Rules" }, { label: "ECD", sub: "Ready" }],
  },
  {
    icon: Zap, title: "Sob Encomenda", badge: "CUSTOM", badgeColor: "bg-[#10b981]",
    color: "#ef4444", glow: "239, 68, 68",
    features: ["Módulos 100% personalizados", "Automações sob medida", "Integrações com qualquer API", "Relatórios específicos"],
    tags: [{ label: "∞", sub: "Possibilidades" }, { label: "Dev", sub: "Dedicado" }],
  },
];

export default function Modules() {
  return (
    <section id="modulos" className="relative py-12 md:py-16 overflow-hidden">
      <div className="bg-orb bg-orb-2 w-[500px] h-[500px] bg-[#8b5cf6] top-[20%] -left-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.12}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-10">
            <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-4 block">NOSSOS MÓDULOS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Tudo que seu escritório precisa.<br />Em uma única plataforma.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">Cada módulo resolve um problema real. Escolha o que precisa — ou use todos.</p>
          </motion.div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <Tilt3DCard key={mod.title} delay={i * 0.08} glowColor={mod.glow} className={mod.title === "CloudConta Impostos" ? "md:row-span-2" : ""}>
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${mod.color}15` }}>
                    <mod.icon className="w-5 h-5" style={{ color: mod.color }} />
                  </div>
                  {mod.badge && (
                    <span className={`${mod.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{mod.badge}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{mod.title}</h3>
                {mod.url && <p className="text-[#8b5cf6] text-xs mb-3">{mod.url}</p>}

                <ul className="space-y-2 mb-5 flex-1">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: mod.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mt-auto">
                  {mod.tags.map((tag) => (
                    <div key={tag.label} className="flex-1 glass-card rounded-xl px-3 py-2 text-center">
                      <div className="font-bold text-sm" style={{ color: mod.color }}>{tag.label}</div>
                      <div className="text-gray-500 text-xs">{tag.sub}</div>
                    </div>
                  ))}
                </div>

                {mod.extraStats && (
                  <div className="flex gap-2 mt-3">
                    {mod.extraStats.map((s) => (
                      <div key={s} className="flex-1 glass-card rounded-xl px-3 py-2 text-center text-xs text-gray-400">{s}</div>
                    ))}
                  </div>
                )}

                {mod.cta && (
                  <a href="#precos" className="mt-4 w-full py-3 rounded-full text-center font-semibold text-sm transition-all block"
                    style={{ backgroundColor: mod.color, color: "white" }}>
                    {mod.cta}
                  </a>
                )}
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
