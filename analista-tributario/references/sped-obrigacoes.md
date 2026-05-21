# SPED e Obrigações Acessórias

> Referência técnica. Carregar quando o pedido envolver transmissão, calendário, layout ou multa.

## SPED Fiscal — EFD ICMS/IPI

- **Obrigados:** contribuintes de ICMS e/ou IPI (exceto MEI; Simples só se obrigado por UF).
- **Periodicidade:** mensal.
- **Prazo:** até o **dia 20** do mês subsequente (regra geral; UF pode antecipar — ex.: SP dia 25).
- **Layout vigente:** Guia Prático EFD-ICMS/IPI 3.1.9+ (atualizado anualmente pelo Ato COTEPE/ICMS).
- **Multa:** R$ 500,00 a R$ 1.500,00/mês de atraso (varia por UF) + 0,02%/dia sobre operações não escrituradas.

### Blocos principais
- **0** Identificação e tabelas do contribuinte.
- **C** Documentos fiscais — mercadorias (NF-e, NFC-e, NF modelo 1).
- **D** Documentos fiscais — serviços (CT-e, NFST).
- **E** Apuração ICMS e IPI.
- **G** CIAP (Crédito de ICMS sobre Ativo Permanente).
- **H** Inventário (entrega em fevereiro, referente a 31/12 anterior).
- **K** Controle de Produção e Estoque (indústria e atacado de determinados CNAEs).
- **1** Outras informações (DIFAL, FCP, exportação).
- **9** Encerramento.

## EFD-Contribuições (PIS/COFINS/CPRB)

- **Obrigados:** PJs do Lucro Real, Presumido com CPRB ou que retêm contribuições.
- **Periodicidade:** mensal.
- **Prazo:** até o **10º dia útil** do 2º mês subsequente.
- **Multa:** R$ 500,00/mês (Presumido) ou R$ 1.500,00/mês (Real); 0,02%/dia sobre receita omitida.

### Blocos principais
- **A** Documentos fiscais de serviços (ISS, com PIS/COFINS).
- **C** Documentos fiscais de bens/mercadorias.
- **D** Documentos de transporte.
- **F** Demais documentos e operações.
- **I** Operações das instituições financeiras.
- **M** Apuração de PIS e COFINS.
- **P** Apuração da CPRB.
- **1** Complemento.

## ECD — Escrituração Contábil Digital

- **Obrigados:** PJs em geral exceto Simples e MEI; obrigatória para imunes/isentas com receita > R$ 4,8 mi.
- **Periodicidade:** anual.
- **Prazo:** último dia útil de **maio** do ano seguinte.
- Substitui os livros Diário e Razão físicos.
- **Multa:** R$ 500,00 a R$ 1.500,00/mês.

## ECF — Escrituração Contábil Fiscal

- **Obrigados:** todas as PJs exceto Simples, MEI, imunes/isentas com receita < limite.
- **Periodicidade:** anual.
- **Prazo:** último dia útil de **julho** do ano seguinte.
- Inclui apuração de IRPJ/CSLL, LALUR/LACS, e-LALUR/e-LACS.
- **Multa:** 0,25% da RB/mês (limitada a 10%); 3% do valor omitido (mínimo R$ 100).

## DCTF / DCTFWeb

- **DCTFWeb:** Declaração de Débitos e Créditos Tributários Federais Previdenciários e de Outras Entidades e Fundos.
  - Substitui GFIP a partir do eSocial + EFD-Reinf.
  - Geração automática a partir do eSocial/Reinf.
  - **Prazo:** até o **dia 15** do mês seguinte.
  - Recolhimento: DARF gerado pela própria DCTFWeb.

- **DCTF Mensal:** débitos federais (IRPJ, CSLL, PIS, COFINS, IRRF, IPI, IOF, CIDE, etc.).
  - **Prazo:** até o **15º dia útil** do 2º mês subsequente.

## eSocial

- **Periodicidade:** eventos enviados continuamente; fechamento mensal.
- **Fechamento:** até o **dia 15** do mês seguinte (evento S-1299).
- Eventos principais: S-1000 (empregador), S-1200 (remunerações), S-1210 (pagamentos), S-2200 (admissão), S-2299 (desligamento), S-2210 (CAT).

## EFD-Reinf

- **Obrigados:** PJs com retenção previdenciária, pagamentos a beneficiários, comercialização produtor rural, recursos de espetáculos esportivos.
- **Prazo:** até o **dia 15** do mês seguinte.
- Eventos: R-2010 (serviços tomados), R-2020 (serviços prestados), R-4020 (retenções IR/PIS/COFINS/CSLL — IN 1.234), R-4040 (rendimentos pagos PF).

## Calendário rápido (mês N+1)

| Dia | Obrigação |
|-----|-----------|
| 7   | FGTS / DAE Doméstico |
| 10  | EFD-Contribuições (10º dia útil do mês N+2) |
| 15  | EFD-Reinf, eSocial fechamento, DCTFWeb, DARF DCTFWeb, DCTF (15º dia útil do mês N+2) |
| 20  | DAS Simples Nacional, EFD ICMS/IPI (varia por UF) |
| 25  | IPI, PIS/COFINS Presumido/Real |
| 31  | IRPJ/CSLL Lucro Real estimativa, ISS variável por município |

## Retificações

- **EFDs:** retificação livre até início de fiscalização, sem multa adicional.
- **ECD/ECF:** retificação permitida (cuidar com transmissão de substitutiva sem registro Q100/Y).
- **DCTF/DCTFWeb:** retificação substitui a original.
- **eSocial:** S-3000 (exclusão), reabrir período (S-1298).

## Multas e mitigação

- Denúncia espontânea (art. 138 CTN): pagar antes de qualquer fiscalização **afasta multa**, paga só multa de mora (até 20%) + juros SELIC.
- Atraso de obrigação acessória: não cabe denúncia espontânea (Súmula 49 TFR), multa devida.

## Boas práticas

1. **Fechamento contábil até dia 10** para conseguir cumprir todos os prazos.
2. **Conciliação cruzada:** EFD-Contribuições × ECF × DCTFWeb (PIS/COFINS coerentes).
3. **Backup de XMLs** por 5 anos (prescrição) + tempo do processo, se houver.
4. **Monitorar atos**: COTEPE, RFB, CONFAZ publicam mudanças quase semanais.
