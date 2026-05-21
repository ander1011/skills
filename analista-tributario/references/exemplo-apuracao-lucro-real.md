# Worked Example — Apuração Lucro Real (caso completo)

> Referência didática. Caso fictício, números arredondados para fluência. Usar como modelo de raciocínio.

## Cenário

**Cliente:** Indústria Metalúrgica Aurora Ltda. (fictícia)
**CNPJ:** 12.345.678/0001-90
**CNAE:** 2511-0/00 — Fabricação de estruturas metálicas.
**Regime:** Lucro Real **trimestral**.
**UF:** Pernambuco.
**Competência:** 1º trimestre de 2026 (jan–mar).
**Receita Bruta 12 meses anteriores:** R$ 18,4 milhões.

Pedido do cliente: "apure o 1T26, revise se está RFB-proof e me entrega um relatório que eu possa apresentar pro sócio".

---

## Passo 1 — Coleta de contexto (a skill faz primeiro)

Confirmado com o cliente:
- ✅ Regime: Lucro Real trimestral.
- ✅ PIS/COFINS: não-cumulativo (1,65% + 7,6%).
- ✅ ICMS-PE alíquota interna padrão 18%; produtos com NCM 73.08.x.
- ✅ Sem CPRB (não optou pela desoneração).
- ✅ Sem benefícios fiscais ativos (SUDENE expirado 2024).
- ✅ Não há venda interestadual a consumidor final.
- ✅ Prejuízo fiscal acumulado: R$ 240.000 (saldo de Parte B do e-LALUR).

Documentos recebidos:
- Balancete jan/fev/mar/2026 fechados.
- EFD-Contribuições jan, fev, mar (transmitidas).
- EFD ICMS/IPI jan, fev, mar (transmitidas).
- XMLs de entrada e saída (47 NF-e emitidas, 312 NF-e recebidas).
- DARFs recolhidos: PIS, COFINS, IRPJ estimativa zerada, CSLL idem.
- ECD 2025 transmitida.

---

## Passo 2 — Apuração de PIS/COFINS

### Receita bruta do trimestre
| Mês | Receita Bruta (R$) | ICMS destacado (R$) | Vendas canceladas (R$) | **Base PIS/COFINS** |
|-----|--------------------|---------------------|------------------------|---------------------|
| Jan | 1.420.000 | 255.600 | 18.000 | **1.146.400** |
| Fev | 1.580.000 | 284.400 | 12.000 | **1.283.600** |
| Mar | 1.640.000 | 295.200 |  9.000 | **1.335.800** |
| **Tri** | **4.640.000** | **835.200** | **39.000** | **3.765.800** |

> Aplicado STF Tema 69 (ICMS destacado fora da base).

### Débito do trimestre
- PIS 1,65% × 3.765.800 = **R$ 62.135,70**
- COFINS 7,60% × 3.765.800 = **R$ 286.200,80**

### Créditos do trimestre (não-cumulativo)

| Origem | Base (R$) | Crédito PIS (R$) | Crédito COFINS (R$) |
|--------|-----------|------------------|---------------------|
| Aço (insumo, NCM 72.08) — 950.000 | 950.000 | 15.675,00 | 72.200,00 |
| Solda, tinta, parafuso (insumo) | 180.000 | 2.970,00 | 13.680,00 |
| Energia elétrica fábrica | 84.000 | 1.386,00 | 6.384,00 |
| Aluguel galpão (PJ) | 60.000 | 990,00 | 4.560,00 |
| Depreciação máquinas (1/48 sobre 480.000) | 30.000 | 495,00 | 2.280,00 |
| Frete venda CIF | 42.000 | 693,00 | 3.192,00 |
| Devoluções de venda | 39.000 | 643,50 | 2.964,00 |
| **Total** | | **22.852,50** | **105.260,00** |

> ⚠️ Conta "Despesas com brindes" (R$ 8.500) e "Marketing digital" (R$ 22.000) **não** geram crédito (não são insumos).

### PIS/COFINS a recolher (trimestre)

| Tributo | Débito | Crédito | A recolher |
|---------|--------|---------|------------|
| PIS    | 62.135,70 | 22.852,50 | **39.283,20** |
| COFINS | 286.200,80 | 105.260,00 | **180.940,80** |

---

## Passo 3 — Apuração de IRPJ/CSLL

### Lucro líquido contábil do trimestre
**R$ 412.000** (do balancete consolidado jan-mar).

### LALUR Parte A — Adições

| Item | Valor (R$) | Base legal |
|------|-----------|------------|
| Brindes | 8.500 | Art. 13, VII, Lei 9.249/95 |
| Multa de trânsito | 1.200 | Art. 41 Lei 8.981/95 |
| Provisão para contingência cível | 35.000 | Art. 13, I, Lei 9.249/95 |
| Doação ao Sindicato Patronal | 4.000 | Art. 13, II, Lei 9.249/95 |
| Despesa veículo do sócio (não-operacional) | 6.300 | Art. 311 RIR/2018 |
| Subvenção ICMS recebida no período | 18.000 | Lei 14.789/2023 — voltou a tributar |
| **Total adições** | **73.000** | |

### LALUR Parte A — Exclusões

| Item | Valor (R$) | Base legal |
|------|-----------|------------|
| Reversão provisão contingência (antes adicionada) | 12.000 | Art. 41 RIR/2018 |
| Equivalência patrimonial positiva (subsidiária) | 9.500 | Art. 23 DL 1.598/77 |
| **Total exclusões** | **21.500** | |

### Compensação de prejuízo (trava 30%)

- Lucro real antes da compensação: 412.000 + 73.000 − 21.500 = **R$ 463.500**.
- Limite de 30%: 463.500 × 30% = **R$ 139.050**.
- Saldo de prejuízo fiscal disponível: R$ 240.000.
- Compensação efetiva: **R$ 139.050** (limitado).
- Saldo remanescente: 240.000 − 139.050 = **R$ 100.950** (vai para Parte B).

### Lucro Real do trimestre

| Linha | Valor (R$) |
|-------|-----------|
| Lucro líquido contábil | 412.000,00 |
| (+) Adições | 73.000,00 |
| (-) Exclusões | (21.500,00) |
| (-) Compensação prejuízo | (139.050,00) |
| **Lucro Real** | **324.450,00** |

### IRPJ

- 15% × 324.450 = **R$ 48.667,50**.
- Adicional 10% sobre o que excede R$ 60.000 no trimestre: (324.450 − 60.000) × 10% = **R$ 26.445,00**.
- **IRPJ devido: R$ 75.112,50**.
- (-) IRRF retido sobre receitas (consultorias prestadas — pequenas): R$ 1.840,00.
- **IRPJ a recolher: R$ 73.272,50** — DARF 0220.

### CSLL

Base CSLL = mesma lógica, sem o adicional (CSLL não tem adicional).
Para simplificar, assumimos mesmas adições/exclusões (na prática há diferenças pontuais).
- Base = 324.450,00.
- 9% × 324.450 = **R$ 29.200,50**.
- (-) CSRF retida: R$ 1.225,00.
- **CSLL a recolher: R$ 27.975,50** — DARF 2372.

---

## Passo 4 — Revisão RFB (aplicação do checklist)

| # | Item | Status | Achado |
|---|------|--------|--------|
| A.1 | Saldos abertura conciliados | ✅ | Confere com ECD 2025. |
| A.2 | Plano contas referencial | ✅ | Mapeamento OK. |
| B.1 | Receita × NFs | ✅ | Casa exato. |
| B.2 | Receita financeira tributada | ⚠️ | Rendimento de aplicação R$ 4.200 não tributado em PIS/COFINS — **ajustar**. |
| B.3 | Variação cambial — regime | N/A | Sem operações em moeda estrangeira. |
| C.1 | ICMS destacado fora da base | ✅ | Aplicado corretamente. |
| C.2 | Créditos só sobre permitido | ✅ | Brindes e marketing **não** creditados — correto. |
| C.3 | Crédito 1/48 e 1/240 | ✅ | Memória paralela em planilha. |
| C.5 | Concil. EFD-Contrib × DCTFWeb | ⚠️ | DCTFWeb fev não foi transmitida ainda — **prazo 15/abr**. |
| D.1 | Adições obrigatórias | ✅ | Todas identificadas. |
| D.3 | Trava 30% | ✅ | Respeitada. |
| D.4 | Adicional IRPJ | ✅ | Calculado. |
| D.5 | Estimativa mensal | N/A | Regime trimestral. |
| E.1 | IRRF/CSRF compensados | ✅ | OK. |
| E.3 | DARF código correto | ⚠️ | DARF de PIS jan foi recolhido no código 8109 (cumulativo) em vez de **6912** (não-cumulativo) — pagamento sem alocação, débito permanece. **Pedir Perdcomp para corrigir.** |
| F.1 | Receita ECF × EFD-Contrib × NFs | ✅ | OK. |
| F.4 | Folha × eSocial × ECD | ✅ | Conferido. |
| F.5 | Compras × EFD ICMS × EFD-Contrib | ✅ | OK. |

### Sinais de alerta verificados
- Caixa crescente? ❌ não — saldo decrescente, operacional. OK.
- Fornecedor único >30%? ✅ sim, um fornecedor de aço representa 41% das compras. **Não é parte relacionada**, mas vale documentar relação comercial para defesa.
- Despesa de sócio? ⚠️ veículo já adicionado, OK.

---

## Passo 5 — Achados críticos e correções

### 🟡 Achado 1 — Receita financeira não tributada
- **Descrição:** rendimentos de aplicação R$ 4.200 não foram tributados pelo PIS/COFINS no não-cumulativo (alíquota 4,65% conforme Decreto 8.426/2015).
- **Exposição:** R$ 195,30 + multa 75% + SELIC.
- **Correção:** retificar EFD-Contribuições do mês de competência; recolher diferença com **denúncia espontânea** (afasta multa, paga só mora).
- **Prazo:** imediato, antes de qualquer fiscalização.

### 🔴 Achado 2 — DARF de PIS jan código errado
- **Descrição:** PIS jan recolhido em DARF 8109 (cumulativo) em vez de 6912 (não-cumulativo).
- **Exposição:** débito permanece "em aberto" na CND. Pagamento foi alocado como pagamento indevido.
- **Correção:** transmitir **PER/DCOMP** alocando o pagamento indevido ao débito correto, OU reabrir o DARF via REDARF.
- **Prazo:** antes da próxima emissão de CND.

### 🟡 Achado 3 — DCTFWeb fev pendente
- **Descrição:** DCTFWeb de fev/2026 ainda não transmitida.
- **Exposição:** R$ 500/mês (multa por atraso na obrigação acessória — Lucro Real).
- **Correção:** transmitir até 15/abr/2026.

---

## Passo 6 — Oportunidades identificadas

### Oportunidade 1 — Lei do Bem (Lei 11.196/2005)
- Cliente faz desenvolvimento de novos perfis estruturais. Pode habilitar P&D.
- Benefício potencial: exclusão de 60% a 80% dos dispêndios + depreciação acelerada.
- **Estimativa:** R$ 35.000/ano de economia (assumindo R$ 200k em P&D).
- **Ação:** levantar projetos elegíveis, formalizar projeto MCTI até 31/jul/2026.

### Oportunidade 2 — JCP (Juros sobre Capital Próprio)
- PL acumulado: R$ 1,2 mi. TJLP atual ~6%.
- JCP dedutível para IRPJ/CSLL, tributado a 15% IRRF na PF.
- **Economia líquida estimada:** ~10% sobre o JCP pago.

### Oportunidade 3 — Recuperação retroativa Tema 69
- Cliente nunca pediu restituição dos 5 anos anteriores de PIS/COFINS sobre ICMS na base.
- **Estimativa preliminar:** R$ 180–230 mil em créditos administrativos/judiciais.
- **Ação:** levantamento + Perdcomp ou ação judicial (prescrição quinquenal).

---

## Passo 7 — Entrega ao cliente

### 7.1 Documento técnico (este relatório)
Versão completa em PDF, assinada digitalmente.

### 7.2 Deck executivo (10 slides) — sugestão de estrutura

1. Capa — DICON × Aurora — Apuração 1T26.
2. Resultado do trimestre (1 número grande de imposto total a recolher).
3. Tabela consolidada dos 4 tributos.
4. Top 3 achados críticos (cards visuais).
5. Quadro de status do checklist (semáforo).
6. Top 3 oportunidades (potencial de economia).
7. Plano de ação 30/60/90 dias.
8. Próximos prazos (calendário até jun/26).
9. Quem faz o quê (responsabilidades cliente × DICON).
10. Q&A / Contato.

Gerar com Gamma: `mcp__f616300a-fd61-4605-9538-9574f14900e3__generate` passando este conteúdo como inputText e tema corporativo sóbrio.

### 7.3 Carta de recomendação (1 página)
Resumo dos 3 achados + 3 oportunidades + plano de 30 dias, assinada por Anderson Muller (CRC).

---

## Lições aplicadas neste caso

1. **Sempre confirmar regime e período antes de calcular.**
2. **ICMS destacado** sai da base de PIS/COFINS — economia direta.
3. **Brindes e marketing** não geram crédito de PIS/COFINS — não cair na tentação de creditar.
4. **Adicional de IRPJ** é R$ 60.000 no trimestre (não R$ 20.000 × 3 com travas mensais separadas).
5. **Trava dos 30%** se aplica ao lucro real **antes** da compensação.
6. **Subvenção ICMS** (Lei 14.789/2023) voltou a ser tributada — não excluir mais.
7. **Receita financeira** tem PIS/COFINS específico (Decreto 8.426/2015), não esquecer.
8. **Código de DARF errado** é gerador clássico de "imposto pago, débito aberto" — sempre revisar.
9. **Denúncia espontânea** vale ouro: pagar antes da fiscalização afasta multa de 75–150%.
10. **Oportunidades** valem mais que economia de R$ 200 em alíquota — sempre mostrar ao cliente.
