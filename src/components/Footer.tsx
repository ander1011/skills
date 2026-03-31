"use client";

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
    <footer className="border-t border-white/5 bg-[#030308]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Cloud className="w-7 h-7 text-[#2563eb]" />
              <span className="text-lg font-bold text-white">
                cloud<span className="text-[#2563eb]">conta</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Plataforma de contabilidade digital que simplifica a gestão
              contábil, fiscal e financeira da sua empresa.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2563eb]/20 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 capitalize">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
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
            <a href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
