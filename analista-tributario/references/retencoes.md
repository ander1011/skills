# Retenções — IRRF, INSS, ISS, PIS/COFINS/CSLL

> Referência técnica. Carregar quando o pedido envolver tomador/prestador de serviço, fonte pagadora ou responsabilidade tributária.

## IRRF (Imposto de Renda Retido na Fonte)

### Pessoa Física — Tabela Progressiva 2026
| Base mensal (R$) | Alíquota | Dedução (R$) |
|------------------|----------|--------------|
| Até 2.428,80     | 0%       | —            |
| 2.428,81–2.826,65 | 7,5%    | 182,16       |
| 2.826,66–3.751,05 | 15%     | 394,16       |
| 3.751,06–4.664,68 | 22,5%   | 675,49       |
| Acima de 4.664,68 | 27,5%   | 908,73       |

Dedução por dependente: **R$ 189,59**.
> A partir de 2026 vigora também a **isenção para renda até R$ 5.000/mês** (Lei 15.000/2025), com tabela progressiva mantida para reduzir alíquota efetiva.

### Pessoa Jurídica — alíquotas mais comuns
- **1,5%** — serviços profissionais prestados por PJ a PJ (IN RFB 1.234/2012, lista do art. 647 RIR/2018: medicina, advocacia, engenharia, contabilidade, auditoria, consultoria, propaganda, etc.).
- **1,5%** — comissões e corretagens.
- **1,0%** — limpeza, conservação, segurança, vigilância, transporte de valores, locação de mão de obra.
- **4,8%** — alíquota agregada da IN 1.234 (1,2% IRRF + 1% CSLL + 0,65% PIS + 3% COFINS), para pagamentos a PJ por **órgãos públicos federais e suas autarquias**, bem como alguns tomadores específicos.

### Códigos DARF principais
- IRRF PJ serviços (1,5%): **1708**.
- IRRF PJ limpeza/vigilância (1,0%): **1708**.
- IRRF Trabalho Assalariado: **0561**.
- IRRF Aluguéis e Royalties PF: **3208**.
- IRRF Prêmios e Sorteios: **8053**.

### Dispensa
- Valor a reter ≤ R$ 10,00 (art. 67 Lei 9.430/96): **não retém e não recolhe**, salvo se acumular no mês.
- Pagamento a empresa do **Simples Nacional**: regra geral **não retém** IRRF/CSLL/PIS/COFINS (IN 1.234, art. 4º), salvo serviços fora do Simples (anexo IV em alguns casos).

## INSS — Retenção Previdenciária

### Cessão de mão de obra e empreitada (Lei 8.212/91 art. 31)
- Alíquota: **11%** sobre o valor bruto da nota fiscal.
- **Tomador retém e recolhe** em GPS código **2640** (empresa em geral) ou **2658** (obras de construção civil) em nome do **prestador** (CNPJ do prestador).
- Se prestador é optante da **desoneração (CPRB)**: alíquota cai para **3,5%**.
- Prestador no **Simples Nacional**:
  - **Anexo IV** (construção, limpeza, vigilância, conservação): retém 11%.
  - **Anexos III/V**: **não retém** (LC 123/06 art. 13, §1º, VI; SC COSIT 84/2025 reafirma).
- Compensação: prestador compensa o valor retido na sua GFIP/DCTFWeb do mês.

### Serviços sujeitos
Lista do art. 117 IN RFB 2.110/2022 (substituiu IN 971): limpeza, conservação, vigilância, construção civil, segurança, transporte de valores, montagem industrial, manutenção predial, telemarketing com cessão de mão de obra, etc.

### Base de cálculo
Valor bruto da NF – materiais (se discriminados e comprovados, conforme contrato/NF).

## ISS — Retenção pelo Tomador

- **Quem retém:** o município de destino do serviço, conforme **LC 116/2003 art. 6º** e legislação municipal específica.
- **Quando obrigatório (LC 116/03 art. 3º + §2º):** tomador é responsável quando o serviço é prestado em município diverso do estabelecimento prestador nos itens da lista anexa (construção civil, vigilância, limpeza, decoração, planejamento, organização de eventos, hospedagem, propaganda etc.).
- **Alíquota:** definida pelo município **do local do serviço** (mín. 2%, máx. 5% — LC 116/03 art. 8º).
- **Recolhimento:** guia municipal própria; cada município tem layout (ISS-DF, NFTS São Paulo, etc.).

### Cuidado com bitributação
- Verificar onde é "local da prestação" pela LC 116/03 → muitos municípios cobram indevidamente.
- LC 175/2020 (vigência plena em 2023): muda local de incidência de planos de saúde, cartões e leasing para o **município do tomador**.

## CSRF (CSLL + PIS + COFINS Retidos na Fonte) — Lei 10.833/03 art. 30

- **Quem retém:** PJ que paga a outra PJ por:
  - Limpeza, conservação, manutenção, segurança, vigilância, transporte de valores, locação de mão de obra.
  - Assessoria creditícia, mercadológica, gestão de crédito, seleção e riscos, administração de contas a pagar/receber.
  - Serviços profissionais (lista do RIR art. 647).
- **Alíquotas:** **4,65%** (1% CSLL + 0,65% PIS + 3% COFINS).
- **Dispensa:** pagamentos ≤ **R$ 215,05** (Lei 13.137/2015).
- **Prestador no Simples Nacional:** **não retém** (declaração específica deve ser entregue pelo prestador — anexo IV IN 1.234).
- **Código DARF:** **5952** (única retenção); **5987** (CSLL isoladamente); **5960** (PIS isolado); **5979** (COFINS isolado).

## Recolhimento — prazo

- **IRRF / CSRF:** até o **último dia útil** do 2º decêndio do mês subsequente ao fato gerador (regra geral pós Lei 13.137/15).
- **INSS retido:** dia **20** do mês seguinte (antecipa se cair em fds/feriado).
- **ISS retido:** prazo do município do tomador.

## EFD-Reinf — reporting

- Retenção previdenciária (R-2010 — tomador / R-2020 — prestador): mensal, até dia 15.
- Retenção IR/CSLL/PIS/COFINS (R-4020): mensal, **substitui DIRF a partir de 2024**.
- Pagamentos a PF (R-4040): mensal.

## DCTFWeb

A partir de 2025, débitos de retenção previdenciária, IRRF e CSRF são consolidados na **DCTFWeb** mensal, gerada a partir do eSocial e EFD-Reinf. DARF emitido pela própria DCTFWeb.

## Erros mais comuns

1. Reter de Simples Nacional sem checar o anexo (anexo IV retém INSS; outros geralmente não).
2. Reter IRRF de PF sem aplicar a tabela progressiva e a dedução de dependentes.
3. Recolher INSS retido em **GPS do tomador**, e não no CNPJ do prestador.
4. Esquecer da CSRF em consultoria, marketing, advocacia (lista do RIR).
5. Aplicar 11% INSS sobre o bruto sem deduzir materiais discriminados em contrato e NF.
6. Reter ISS para o município errado (regra do "local da prestação").
7. Não emitir comprovante anual de retenção (obrigatório pela IN 1.234).
