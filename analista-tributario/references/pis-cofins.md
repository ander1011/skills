# PIS/PASEP e COFINS

> Referência técnica. Carregar quando envolver crédito, monofásico, recuperação ou regime.

> ⚠️ **Atenção:** PIS/COFINS são **extintos em 01/01/2027** pela Reforma Tributária (LC 214/2025), substituídos pela CBS. Recuperações e teses ainda valem para o passado (5 anos retroativos).

## Regimes

### Cumulativo
- **Quem:** Lucro Presumido, Arbitrado, e atividades específicas mesmo no Lucro Real (telecom, transporte, serviços hospitalares, educação básica, etc. — art. 10 Lei 10.833/2003).
- **Alíquotas:** PIS 0,65% + COFINS 3,00% = 3,65%.
- **Base:** faturamento bruto (exclusões: vendas canceladas, descontos incondicionais, IPI, ICMS-ST quando destacado, receitas de venda de ativo, reversões de provisões).
- **Sem direito a crédito.**

### Não-Cumulativo
- **Quem:** Lucro Real (exceto atividades do cumulativo).
- **Alíquotas:** PIS 1,65% + COFINS 7,60% = 9,25%.
- **Base:** receita bruta (mesmas exclusões + outras específicas, art. 1º Leis 10.637/02 e 10.833/03).
- **Direito a crédito** sobre:
  - Bens adquiridos para revenda.
  - Insumos (matéria-prima, embalagem, serviços aplicados na produção).
  - Energia elétrica e térmica.
  - Aluguéis de prédios, máquinas, equipamentos pagos a PJ.
  - Arrendamento mercantil.
  - Depreciação de máquinas/equipamentos no imobilizado (taxa mensal: 1/48).
  - Edificações e benfeitorias (1/240).
  - Devoluções de venda.
  - Armazenagem e frete na operação de venda.
  - Vale-transporte, vale-refeição, fardamento (limpeza, conservação, manutenção).

#### Conceito de insumo (STJ REsp 1.221.170)
Critério da **essencialidade ou relevância** para a atividade. Não é só MP/embalagem. Inclui EPI, manutenção de máquina produtiva, etc.

## Monofásico

Alíquota concentrada no **fabricante/importador**; demais elos da cadeia tributam à **alíquota zero** sobre a revenda.

### Produtos monofásicos
- Combustíveis (gasolina, diesel, GLP, álcool, querosene).
- Veículos, autopeças (lista da Lei 10.485/2002).
- Medicamentos, perfumaria, cosméticos (Lei 10.147/2000).
- Bebidas frias (cerveja, refrigerantes, água — Lei 13.097/2015).
- Pneus e câmaras de ar.

### Recuperação de crédito de monofásico (Simples Nacional)
- **Antes do STJ Tema 1.050 (2024):** Receita negava. Vários processos pendentes.
- **STJ Tema 1.050 (set/2024):** Empresa do Simples **não tem direito** a segregar receita de monofásico para excluir do DAS. Tese consolidada **desfavorável** ao contribuinte.
- **Lucro Real/Presumido:** revenda à alíquota zero não gera crédito, mas também não é tributada novamente.

## Recuperação de créditos — teses vivas (2026)

### ICMS na base PIS/COFINS (Tema 69 STF — "Tese do Século")
- **Decidido em 2017, modulado em 2021:** ICMS **destacado** na nota fiscal **não** integra a base de PIS/COFINS.
- Repercussão para fatos geradores **a partir de 15/03/2017** (salvo ações ajuizadas antes).
- Tese ainda gera créditos a recuperar (administrativo ou judicial) para empresas no Lucro Real e Presumido.

### ISS na base PIS/COFINS (Tema 118 STF)
- Aguardando julgamento. Tendência simétrica à do ICMS.

### PIS/COFINS sobre receitas financeiras
- Decreto 8.426/2015 majorou: PIS 0,65% + COFINS 4% sobre receitas financeiras (não-cumulativo).
- Discussão sobre legalidade (LC 70/91 e Lei 9.718/98) — STF Tema 939, ainda em curso.

### CPRB (Desoneração da Folha)
- Lei 14.973/2024 prorrogou a reoneração gradual até 2027.
- **Setores beneficiados:** TI, call center, hotelaria, transporte rodoviário, construção civil, etc.
- Alíquotas (2026): 80% das contribuições previdenciárias normais + 20% da CPRB.

## Substituição tributária PIS/COFINS

Limitada: principalmente cigarros, veículos novos (concessionárias), produtos farmacêuticos com regime opcional. Sempre verificar lei específica.

## Suspensão e alíquota zero

- **Suspensão:** PADIS, REIDI, REPENEC, RECAP, Drawback, vendas para preponderante exportador (≥ 50% receita).
- **Alíquota zero:** PRONAS/PCD, hortifruti in natura, papel para jornais, livros, defensivos agrícolas.

## Créditos presumidos

Atividades específicas têm crédito presumido (compensa a aquisição de não contribuinte): agroindústria (Lei 10.925/2004 — soja, café, leite, carnes), transporte rodoviário de cargas, etc.

## Cálculo prático (não-cumulativo)

```
1. Receita bruta do mês: R$ 1.000.000
2. Exclusões (ICMS destacado, vendas canceladas, etc.): R$ 180.000
3. Base de cálculo: R$ 820.000
4. PIS devido (1,65%): R$ 13.530
5. COFINS devida (7,60%): R$ 62.320

Créditos:
- Compras de insumos: R$ 400.000 → crédito PIS R$ 6.600 + COFINS R$ 30.400
- Energia elétrica: R$ 20.000 → R$ 330 + R$ 1.520
- Aluguel de PJ: R$ 15.000 → R$ 248 + R$ 1.140
Total créditos: PIS R$ 7.178 + COFINS R$ 33.060

A pagar:
- PIS: 13.530 − 7.178 = R$ 6.352
- COFINS: 62.320 − 33.060 = R$ 29.260
```

## DARFs

- **PIS Não-Cumulativo:** código **6912**.
- **PIS Cumulativo:** código **8109**.
- **COFINS Não-Cumulativa:** código **5856**.
- **COFINS Cumulativa:** código **2172**.
- **PIS Importação:** **5602** (mercadorias) / **5434** (serviços).
- **COFINS Importação:** **5629** (mercadorias) / **5442** (serviços).

## Prazo de recolhimento

Até o **25º dia** do mês seguinte ao da apuração.

## Erros mais comuns

1. Empresa do Simples tentar tomar crédito (não pode — STJ Tema 1.050).
2. Excluir ICMS recolhido em vez do destacado (Tema 69 STF — é o **destacado**).
3. Creditar despesa administrativa (não-cumulativo só permite o ligado à atividade).
4. Não atualizar tabela de monofásicos quando entram/saem produtos da lista.
5. Esquecer da CPRB quando a empresa optou pela desoneração.
