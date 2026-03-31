"use client";

import { motion } from "framer-motion";
import { Cloud, Globe, Link2, Mail, Phone } from "lucide-react";

const footerLinks = {
  módulos: [
    { label: "CloudConta Impostos", href: "#modulos" },
    { label: "NF-e / NFSe", href: "#modulos" },
    { label: "WhatsApp Multi", href: "#modulos" },
    { label: "Portal do Cliente", href: "#modulos" },
    { label: "Contabilidade & Fiscal", href: "#modulos" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#porque" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ],
  suporte: [
    { label: "Portal Cliente", href: "#" },
    { label: "Falar com Especialista", href: "#contato" },
    { label: "Documentação", href: "#" },
    { label: "Status do Sistema", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#08071a]">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5 group">
              <Cloud className="w-7 h-7 text-[#3b82f6]" />
              <span className="text-lg font-bold text-white">Cloud<span className="text-[#3b82f6]">Conta</span></span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Plataforma contábil inteligente. Seu escritório no piloto automático.
            </p>
            <div className="flex items-center gap-3">
              {[Globe, Link2, Mail, Phone].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#8b5cf6]/20 transition-all">
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-500 text-sm hover:text-gray-300 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">&copy; 2026 CloudConta. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            {["Termos de Uso", "Política de Privacidade", "LGPD"].map((t) => (
              <a key={t} href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
