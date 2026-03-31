"use client";

import { motion } from "framer-motion";
import { Cloud, Globe, Link2, Mail, Phone } from "lucide-react";

const footerLinks = {
  empresa: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Carreiras", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Parceiros", href: "#" },
  ],
  servicos: [
    { label: "Contabilidade Digital", href: "#servicos" },
    { label: "Fiscal & Tributário", href: "#servicos" },
    { label: "Folha de Pagamento", href: "#servicos" },
    { label: "Abertura de Empresa", href: "#servicos" },
  ],
  suporte: [
    { label: "Central de Ajuda", href: "#" },
    { label: "Documentação", href: "#" },
    { label: "Status do Sistema", href: "#" },
    { label: "Contato", href: "#contato" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "E-mail" },
  { icon: Phone, href: "#", label: "Telefone" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030308]">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2.5 mb-5 group"
              whileHover={{ x: 5 }}
            >
              <div className="relative">
                <Cloud className="w-8 h-8 text-[#2563eb] group-hover:text-[#00d4ff] transition-colors" />
                <div className="absolute inset-0 bg-[#2563eb] rounded-full blur-xl opacity-30" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                cloud<span className="text-[#2563eb]">conta</span>
              </span>
            </motion.a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Plataforma de contabilidade digital que simplifica a gestão
              contábil, fiscal e financeira da sua empresa.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2563eb]/20 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], groupIndex) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5 capitalize">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2026 CloudConta. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {["Termos de Uso", "Política de Privacidade", "LGPD"].map((text) => (
              <a
                key={text}
                href="#"
                className="text-gray-600 text-sm hover:text-gray-400 transition-colors duration-300"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
