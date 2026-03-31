"use client";

import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import ParallaxSection from "./ui/ParallaxSection";

const reasons = [
  { num: "01", title: "Feito por quem vive contabilidade", description: "Criado dentro de um escritório contábil real. Cada funcionalidade nasceu de uma necessidade do dia a dia." },
  { num: "02", title: "Modular — pague só o que usar", description: "Não precisa comprar tudo. Escolha os módulos que fazem sentido para sua operação." },
  { num: "03", title: "Automação real, não promessa", description: "Robôs que buscam notas, verificam cancelamentos, enviam documentos e atualizam sozinhos." },
  { num: "04", title: "Desenvolvimento sob encomenda", description: "Precisa de algo que não existe? Nós criamos. Módulos, integrações, automações — sob medida." },
];

export default function WhyCloudConta() {
  return (
    <section id="porque" className="relative py-24 md:py-32 overflow-hidden">
      <div className="bg-orb bg-orb-2 w-[400px] h-[400px] bg-[#8b5cf6] bottom-[20%] -left-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.1}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
            <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-4 block">POR QUE CLOUDCONTA</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Não é mais um sistema contábil.<br />É o último que você vai precisar.
            </h2>
          </motion.div>
        </ParallaxSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {reasons.map((reason, i) => (
              <motion.div key={reason.num} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#ef4444] flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                  {reason.num}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{reason.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent" />
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.4 }}>
              <Cloud className="w-20 h-20 text-[#3b82f6]/50 mx-auto mb-6" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-3">Cloud Native</h3>
            <p className="text-gray-400 leading-relaxed">
              Acesse de qualquer lugar.<br />Seus dados seguros na nuvem.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="section-divider mt-24" />
    </section>
  );
}
