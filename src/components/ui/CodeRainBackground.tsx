"use client";

import { useMemo } from "react";

const CODE_SNIPPETS = [
  "const fiscal = await calcularImpostos(empresa);",
  "export function gerarBalanço(periodo: string) {",
  "const nfe = await emitirNotaFiscal(dados);",
  "async function sincronizareSocial() {",
  "const folha = processarFolhaPagamento(mes);",
  "if (regime === 'SimplesNacional') {",
  "return await api.post('/contabilidade', lancamento);",
  "const fluxoCaixa = calcularFluxo(contas);",
  "export const ALIQUOTA_IRPJ = 0.15;",
  "function validarCNPJ(cnpj: string): boolean {",
  "const obrigacoes = listarObrigacoes(competencia);",
  "await db.transaction(async (tx) => {",
  "interface LancamentoContabil {",
  "  debito: ContaContabil;",
  "  credito: ContaContabil;",
  "const sped = gerarArquivoSPED(empresa, periodo);",
  "type RegimeTributario = 'SN' | 'LP' | 'LR';",
  "const dashboard = await getMetricas(empresa_id);",
  "export class ContabilidadeService {",
  "const impostos = apurarImpostosMes(competencia);",
];

export default function CodeRainBackground() {
  const lines = useMemo(() => {
    // Deterministic pseudo-random to avoid hydration mismatch
    const seeded = (i: number, offset: number) => ((i * 2654435761 + offset) % 1000) / 1000;
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      text: CODE_SNIPPETS[i % CODE_SNIPPETS.length],
      left: `${(i * 7.3) % 100}%`,
      duration: 15 + seeded(i, 1) * 25,
      delay: seeded(i, 2) * -30,
      opacity: 0.03 + seeded(i, 3) * 0.05,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lines.map((line) => (
        <div
          key={line.id}
          className="code-rain-line"
          style={{
            left: line.left,
            animationDuration: `${line.duration}s`,
            animationDelay: `${line.delay}s`,
            opacity: line.opacity,
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
}
