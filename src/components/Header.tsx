"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cloud } from "lucide-react";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Cloud className="w-8 h-8 text-[#2563eb] group-hover:text-[#00d4ff] transition-colors" />
              <div className="absolute inset-0 bg-[#2563eb] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-white">
              cloud<span className="text-[#2563eb]">conta</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563eb] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contato"
              className="px-5 py-2.5 bg-[#2563eb] text-white text-sm font-medium rounded-full hover:bg-[#1d4ed8] transition-all glow-pulse"
            >
              Começar Agora
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-glass border-t border-white/5"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 bg-[#2563eb] text-white text-center font-medium rounded-full hover:bg-[#1d4ed8] transition-all mt-2"
              >
                Começar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
