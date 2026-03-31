import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudConta | Plataforma Contábil Inteligente",
  description:
    "NF-e, NFSe, obrigações fiscais, envio por WhatsApp, portal do cliente — tudo que você faz manualmente, o CloudConta automatiza. Um sistema. Todos os módulos. Zero dor de cabeça.",
  keywords: [
    "CloudConta",
    "contabilidade automática",
    "NF-e",
    "NFSe",
    "obrigações fiscais",
    "WhatsApp contabilidade",
    "portal do cliente contábil",
    "escritório contábil automático",
    "sistema contábil",
  ],
  openGraph: {
    title: "CloudConta | Seu escritório contábil no piloto automático",
    description:
      "NF-e, NFSe, obrigações fiscais, envio por WhatsApp, portal do cliente — tudo automatizado. Um sistema. Todos os módulos.",
    url: "https://v2.cloudconta.com.br",
    siteName: "CloudConta",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="min-h-screen bg-[#0d0b1a] text-[#e2e8f0]">
        {children}
      </body>
    </html>
  );
}
