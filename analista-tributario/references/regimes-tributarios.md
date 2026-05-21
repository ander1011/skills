# Regimes Tributários Brasileiros

> Referência técnica. Carregar quando a análise envolver enquadramento, troca de regime ou simulação comparativa.

## Simples Nacional (LC 123/2006)

### Limites (2026)
- **Microempresa (ME):** até R$ 360.000,00/ano.
- **Empresa de Pequeno Porte (EPP):** até R$ 4.800.000,00/ano (limite federal).
- **Sublimite estadual:** R$ 3.600.000,00 — acima disso, ICMS/ISS apurados fora do DAS.
- **MEI:** até R$ 81.000,00/ano (PLP 108/2021 em tramitação para R$ 144.913,41).

### Anexos
| Anexo | Atividades | Alíquota inicial |
|-------|-----------|------------------|
| I     | Comércio                                | 4,00% |
| II    | Indústria                               | 4,50% |
| III   | Serviços (com Fator R ≥ 28%)            | 6,00% |
| IV    | Serviços (limpeza, vigilância, advocacia) | 4,50% |
| V     | Serviços (intelectuais, sem Fator R)   | 15,50% |

### Fator R
Fator R = Folha de Salários (12 meses) ÷ Receita Bruta (12 meses).
- ≥ 28% → tributação pelo **Anexo III** (mais barato).
- < 28% → tributação pelo **Anexo V** (mais caro).
- Atividades sujeitas ao Fator R: art. 18, §5º-M, LC 123/06 (fisioterapia, arquitetura, medicina, odontologia, advocacia em sociedade, engenharia, contabilidade, TI etc.).

### Vedações comuns
- Ter sócio PJ.
- Filial de empresa estrangeira.
- Atividade financeira, factoring (com exceções).
- Débito com INSS ou Fazenda sem suspensão de exigibilidade.

## Lucro Presumido

### Limites
- Receita bruta anual ≤ R$ 78.000.000,00.

### Presunção (base IRPJ/CSLL)
| Atividade | IRPJ | CSLL |
|-----------|------|------|
| Revenda de combustíveis            | 1,6% | 12% |
| Comércio, indústria, transporte de carga | 8% | 12% |
| Serviços hospitalares              | 8% | 12% |
| Transporte de passageiros          | 16% | 12% |
| Serviços em geral                  | 32% | 32% |
| Serviços < R$ 120 mil/ano (não regulamentados) | 16% | 32% |

### Alíquotas
- **IRPJ:** 15% + adicional de 10% sobre lucro presumido > R$ 20 mil/mês.
- **CSLL:** 9%.
- **PIS:** 0,65% (cumulativo) sobre receita bruta.
- **COFINS:** 3% (cumulativo) sobre receita bruta.

### Período de apuração
Trimestral (IRPJ/CSLL): 31/mar, 30/jun, 30/set, 31/dez.

## Lucro Real

### Obrigatório quando
- Receita > R$ 78 milhões/ano.
- Bancos, seguradoras, factorings, cooperativas de crédito.
- Empresas com lucros do exterior.
- Empresas que usufruem benefícios fiscais (SUDENE, SUDAM, etc.).

### Alíquotas
- **IRPJ:** 15% + 10% adicional sobre o que exceder R$ 20 mil/mês de lucro.
- **CSLL:** 9% (15% para instituições financeiras).
- **PIS:** 1,65% (não-cumulativo, com direito a crédito).
- **COFINS:** 7,6% (não-cumulativo, com direito a crédito).

### Apuração
- Trimestral OU Anual (com estimativas mensais e ajuste em 31/dez).
- Base: Lucro Líquido + adições - exclusões - compensações (LALUR/ECF Bloco M).
- Compensação de prejuízo fiscal: limite de 30% do lucro do período (trava dos 30%).

## MEI

### Limites
- Faturamento até R$ 81.000,00/ano.
- Até 1 empregado com salário mínimo ou piso da categoria.
- Atividades permitidas: lista da Resolução CGSN 140/2018.

### Tributos
DAS-MEI fixo mensal: INSS (5% do salário mínimo) + ICMS (R$ 1) e/ou ISS (R$ 5) conforme atividade.

## Tabela de decisão rápida

| Cenário | Regime indicado |
|---------|-----------------|
| Faturamento < R$ 81 mil, atividade permitida | MEI |
| Comércio/indústria pequeno, baixa margem | Simples (Anexo I/II) |
| Serviços com folha alta (≥ 28% receita) | Simples Anexo III via Fator R |
| Serviços com baixa folha e alta margem | Lucro Presumido (avaliar) |
| Margem líquida real < presunção | Lucro Real |
| Exportador relevante | Lucro Real (créditos PIS/COFINS) |
| Receita > R$ 4,8 mi | Presumido ou Real |
| Receita > R$ 78 mi ou setor obrigado | Lucro Real |

## Simulação comparativa (template)

Toda recomendação de troca de regime exige planilha com:
1. Receita bruta projetada (12 meses).
2. Carga total por regime (todos os tributos, inclusive INSS patronal de 20% no Real/Presumido).
3. Custo da folha e impacto do Fator R no Simples.
4. Aproveitamento de créditos (Real).
5. Obrigações acessórias adicionais e custo contábil.
6. Análise de sensibilidade (±20% receita).
