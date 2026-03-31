import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudConta | Contabilidade Digital Inteligente",
  description:
    "Plataforma completa de contabilidade digital, fiscal, folha de pagamento e gestão empresarial na nuvem. Automatize sua empresa com a CloudConta.",
  keywords: [
    "contabilidade digital",
    "contabilidade online",
    "ERP",
    "gestão fiscal",
    "folha de pagamento",
    "eSocial",
    "abertura de empresa",
    "CloudConta",
  ],
  openGraph: {
    title: "CloudConta | Contabilidade Digital Inteligente",
    description:
      "Automatize sua gestão fiscal, folha de pagamento e contabilidade em uma única plataforma na nuvem.",
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
      <body className="min-h-screen bg-[#050510] text-[#e2e8f0]">
        {children}
      </body>
    </html>
  );
}
