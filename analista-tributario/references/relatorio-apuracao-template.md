# Template — Relatório Executivo de Apuração / Revisão Tributária

> Referência técnica. Carregar quando o entregável final for um relatório formal para cliente.

Estrutura obrigatória do relatório. Manter ordem, títulos e numeração. Tudo em markdown — pode virar PDF (Pandoc) ou apresentação (Gamma) sem reformatação.

---

# Relatório de Apuração e Revisão Tributária

**Cliente:** {{razão social}}
**CNPJ:** {{cnpj}}
**Regime tributário:** Lucro Real {{anual|trimestral}}
**Competência analisada:** {{mm/aaaa}} a {{mm/aaaa}}
**Data de emissão:** {{dd/mm/aaaa}}
**Responsável técnico:** Anderson Muller — CRC/{{UF}} {{nº}}
**Escritório:** DICON Contabilidade

---

## 1. Sumário Executivo (1 página)

### 1.1 Objeto
Apuração e revisão dos tributos federais (IRPJ, CSLL, PIS, COFINS) e demais obrigações do período {{competência}}, com checagem de conformidade frente às exigências da Receita Federal do Brasil.

### 1.2 Resultado consolidado

| Tributo  | Apurado (R$) | Pago (R$) | Diferença (R$) | Status |
|----------|--------------|-----------|----------------|--------|
| IRPJ     | {{apurado}}  | {{pago}}  | {{dif}}        | ✅ / ⚠️ / ❌ |
| CSLL     |              |           |                |        |
| PIS      |              |           |                |        |
| COFINS   |              |           |                |        |
| IRRF a recuperar |      |           |                |        |
| **TOTAL**|              |           |                |        |

### 1.3 Achados em destaque
- 🟢 **{{N}} pontos conformes** com a legislação vigente.
- 🟡 **{{N}} ajustes recomendados** sem urgência fiscal.
- 🔴 **{{N}} pontos críticos** com exposição estimada de R$ {{valor}}.

### 1.4 Recomendação principal
{{Uma frase. Ex.: "Retificar EFD-Contribuições de mar/2026 para excluir ICMS destacado da base, recuperando R$ X em PIS/COFINS já pago a maior."}}

---

## 2. Premissas e Escopo

### 2.1 Documentos analisados
- [ ] Balancete mensal (jan a {{mês}}/{{ano}}).
- [ ] Razão analítico das contas de resultado.
- [ ] EFD-Contribuições — meses {{...}}.
- [ ] EFD ICMS/IPI — meses {{...}}.
- [ ] ECD {{ano anterior}}.
- [ ] ECF {{ano anterior}}.
- [ ] DCTFs / DCTFWeb do período.
- [ ] XMLs de NF-e (entrada/saída) — amostra de {{N}}% / 100%.
- [ ] DARFs recolhidos do período.
- [ ] Comprovantes de retenção recebidos (IRRF/CSRF/INSS).

### 2.2 Premissas adotadas
- Regime: Lucro Real {{anual com estimativas mensais | trimestral}}.
- PIS/COFINS: regime não-cumulativo (alíquotas 1,65% / 7,60%).
- CNAE principal: {{código}} — {{descrição}}.
- UF de tributação ICMS: {{UF}}.
- Municípios de ISS retidos: {{lista}}.
- {{Outras premissas específicas — Lei do Bem, RECAP, REIDI, CPRB etc.}}

### 2.3 Limitações
{{Ex.: "Análise de XMLs feita por amostragem estatística de 15% dos documentos, com seleção dos itens de maior valor."}}

---

## 3. Apuração

### 3.1 PIS / COFINS — não-cumulativo

#### Receita bruta
| Mês | Receita Bruta | Exclusões | Base PIS/COFINS |
|-----|---------------|-----------|-----------------|
| ... |               |           |                 |

Exclusões aplicadas:
- ICMS destacado (STF Tema 69): R$ {{valor}}.
- Vendas canceladas / devoluções: R$ {{valor}}.
- Descontos incondicionais: R$ {{valor}}.
- Receitas não-tributáveis (reversões, dividendos): R$ {{valor}}.

#### Créditos apurados
| Origem | Valor base | Crédito PIS (1,65%) | Crédito COFINS (7,6%) |
|--------|-----------|---------------------|------------------------|
| Insumos (NCMs {{lista}}) |           |                     |                        |
| Energia elétrica |                  |                     |                        |
| Aluguel PJ |                        |                     |                        |
| Depreciação máquinas (1/48) |        |                     |                        |
| Edificações (1/240) |                |                     |                        |
| Devoluções de venda |                |                     |                        |
| Armazenagem e frete na venda |       |                     |                        |
| **Total** |                          |                     |                        |

#### Apuração mensal
| Mês | PIS débito | PIS crédito | PIS a pagar | COFINS débito | COFINS crédito | COFINS a pagar |
|-----|-----------|-------------|-------------|---------------|----------------|----------------|

### 3.2 IRPJ / CSLL

#### Lucro líquido contábil
R$ {{valor}}

#### Adições (LALUR Parte A)
| Item | Valor | Base legal |
|------|-------|-----------|
| Provisões não-dedutíveis |  | Art. 13 Lei 9.249/95 |
| Brindes |  | Art. 13 VII Lei 9.249/95 |
| Multas punitivas |  | Art. 41 Lei 8.981/95 |
| Subvenções (Lei 14.789/2023) |  | Lei 14.789/2023 |
| ... |  |  |
| **Total adições** |  |  |

#### Exclusões
| Item | Valor | Base legal |
|------|-------|-----------|
| Dividendos recebidos |  | Art. 10 Lei 9.249/95 |
| Equivalência patrimonial positiva |  | Art. 23 DL 1.598/77 |
| Reversão de provisões antes adicionadas |  |  |
| **Total exclusões** |  |  |

#### Compensação de prejuízo (trava 30%)
- Lucro real antes da compensação: R$ {{...}}
- Limite (30%): R$ {{...}}
- Prejuízo fiscal disponível: R$ {{...}}
- Compensação efetiva: R$ {{...}}
- Saldo remanescente para próximos exercícios: R$ {{...}}

#### Lucro real final
| Linha | Valor |
|-------|-------|
| Lucro líquido | {{...}} |
| (+) Adições | {{...}} |
| (-) Exclusões | {{...}} |
| (-) Compensação prejuízo | {{...}} |
| **Lucro Real** | **{{...}}** |

#### Cálculo IRPJ
- IRPJ 15%: R$ {{...}}
- Adicional 10% sobre o que excede R$ {{20k × meses}}: R$ {{...}}
- (-) Incentivos fiscais (PAT, Lei Rouanet, etc.) — limite 4%/2%/1%: R$ {{...}}
- (-) IRRF retido sobre receitas: R$ {{...}}
- **IRPJ a recolher: R$ {{...}}**

#### Cálculo CSLL
- Base CSLL = Lucro Real + ajustes próprios.
- CSLL 9%: R$ {{...}}
- (-) CSRF retida: R$ {{...}}
- **CSLL a recolher: R$ {{...}}**

---

## 4. Revisão de Conformidade (Checklist RFB)

Resultado da aplicação do checklist `lucro-real-checklist-rfb.md`:

| # | Item | Status | Observação |
|---|------|--------|------------|
| A.1 | Saldos de abertura conciliados | ✅ | |
| A.2 | Plano de contas mapeado ao referencial | ✅ | |
| ... | | | |
| C.1 | Exclusão do ICMS destacado | ⚠️ | Aplicar a partir de {{mês}}, recuperar período anterior. |
| C.2 | Créditos somente sobre permitidos | 🔴 | Glosa estimada de R$ {{...}} sobre brindes e marketing. |
| D.1 | Adições obrigatórias | ✅ | |
| D.3 | Trava dos 30% respeitada | ✅ | |
| F.2 | Conciliação DARF × EFD-Contrib × DCTFWeb | ⚠️ | Divergência de R$ {{...}} em {{mês}}, retificar. |
| ... | | | |

Legenda: ✅ Conforme · ⚠️ Ajustar · 🔴 Crítico

---

## 5. Achados Críticos e Plano de Correção

### Achado 1 — {{Título}}
- **Descrição:** {{...}}
- **Base legal:** {{lei/artigo}}
- **Exposição:** R$ {{...}} ({{principal}} + multa de ofício 75% potencial + SELIC).
- **Mitigação:** {{retificação | denúncia espontânea | ajuste contábil}}.
- **Prazo:** {{...}}.
- **Responsável:** {{cliente | DICON | terceiros}}.

### Achado 2 — ...

---

## 6. Oportunidades (planejamento tributário lícito)

### Oportunidade 1 — {{Título}}
- **Descrição:** {{...}}
- **Base legal:** {{...}}
- **Economia estimada:** R$ {{...}}/ano.
- **Implementação:** {{...}}.

Exemplos típicos a avaliar: Lei do Bem (P&D), JCP, REIDI, REPENEC, Drawback, recuperação de PIS/COFINS sobre insumos, ICMS na base PIS/COFINS (período retroativo de 5 anos), revisão de CFOP/CST em compras.

---

## 7. Próximos Passos

| # | Ação | Responsável | Prazo |
|---|------|-------------|-------|
| 1 | Retificar EFD-Contrib {{competência}} | DICON | {{data}} |
| 2 | Recolher diferença via denúncia espontânea | Cliente | {{data}} |
| 3 | Reclassificar contas {{...}} no plano | Cliente | {{data}} |
| 4 | Reunião de alinhamento sobre {{...}} | Ambos | {{data}} |

---

## 8. Anexos

- **Anexo I** — Memória de cálculo detalhada (PIS/COFINS por mês).
- **Anexo II** — LALUR Parte A (adições/exclusões detalhadas).
- **Anexo III** — Relação de XMLs analisados.
- **Anexo IV** — Cópia dos DARFs do período.
- **Anexo V** — Conciliações cruzadas (EFD × DCTFWeb × ECF).

---

## 9. Declaração do Responsável Técnico

> O presente relatório foi elaborado com base nos documentos fornecidos pelo cliente listados em 2.1, à luz da legislação vigente em {{data}}. A responsabilidade pelo fornecimento de informações completas e fidedignas é do cliente. Eventuais omissões ou inconsistências documentais limitam o alcance da revisão.
>
> {{Cidade}}, {{data}}.
>
> **Anderson Muller**
> Contador — CRC/{{UF}} {{nº}}
> DICON Contabilidade
> contato@dicon.cnt.br

---

## Notas para o operador da skill

Quando o cliente pedir **apresentação visual** (não documento técnico), gerar duas versões:
1. **Esta versão completa** (markdown → PDF via Pandoc) — vai assinada.
2. **Deck executivo** (10–12 slides), gerado a partir das seções 1, 4, 5, 6 e 7, usando o servidor Gamma (`mcp__f616300a-fd61-4605-9538-9574f14900e3__generate`). Estilo: corporativo sóbrio, paleta da DICON (azul escuro + branco).

Quando o cliente pedir somente "carta de apuração mensal" (rotina), usar apenas seções 2.1, 3 e 8 — versão enxuta de 2-3 páginas.
