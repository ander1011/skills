"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cloud } from "lucide-react";

const navLinks = [
  { href: "#modulos", label: "Módulos" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#porque", label: "Por que nós" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <motion.div className="relative" whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }} transition={{ duration: 0.6 }}>
              <Cloud className="w-9 h-9 text-[#3b82f6] group-hover:text-[#60a5fa] transition-colors duration-300" />
              <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
            </motion.div>
            <span className="text-xl font-bold text-white tracking-tight">
              Cloud<span className="text-[#3b82f6]">Conta</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <motion.a key={link.href} href={link.href} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                className="text-sm text-gray-400 hover:text-white transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#10b981] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Portal Cliente</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Entrar</a>
              <motion.a initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} href="#precos"
                className="px-5 py-2.5 bg-[#8b5cf6] text-white text-sm font-semibold rounded-full hover:bg-[#7c3aed] transition-all glow-pulse-purple hover:scale-105">
                Cadastrar
              </motion.a>
            </div>
          </nav>

          <motion.button whileTap={{ scale: 0.9 }} onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2" aria-label="Menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }}
            className="lg:hidden bg-[#0d0b1a]/95 border-t border-white/5 backdrop-blur-xl overflow-hidden">
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a key={link.href} href={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-white/5">
                  {link.label}
                </motion.a>
              ))}
              <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-white/5">Portal Cliente</a>
              <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-white/5">Entrar</a>
              <motion.a initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} href="#precos"
                onClick={() => setMobileOpen(false)} className="mt-2 px-5 py-3.5 bg-[#8b5cf6] text-white text-center font-semibold rounded-full">
                Cadastrar
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
