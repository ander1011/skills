# Checklist RFB-proof — Apuração de Lucro Real

> Referência técnica. Carregar SEMPRE que o pedido envolver apuração, conferência ou revisão de Lucro Real para reduzir risco de autuação.

Cada item lista: **O quê** + **Onde olhar** + **Base legal** + **Risco se errado**.

## A. Bloco contábil (ECD)

### A.1 Saldos de abertura conciliados
- **O quê:** balanço de abertura do exercício casa com o de encerramento do anterior.
- **Onde:** ECD ano anterior × razão atual; Registro J100/J150.
- **Base:** Art. 1.179 CC; Decreto-Lei 1.598/77.
- **Risco:** glosa de prejuízo fiscal acumulado.

### A.2 Plano de contas referencial
- **O quê:** plano de contas mapeado para o referencial PJ Em Geral (Anexo IV IN 2.003/2021).
- **Onde:** Registro I050 da ECD + J051 (mapeamento).
- **Risco:** ECF não importa corretamente, gera divergência automática.

### A.3 Termo de abertura/encerramento + assinaturas
- **O quê:** ECD assinada por contador (CRC ativo) + representante legal com e-CNPJ.
- **Onde:** Registro J930/J800.
- **Risco:** ECD não substitui livro Diário; risco de descaracterização da escrituração.

## B. Receitas

### B.1 Receita bruta × notas fiscais emitidas
- **O quê:** conta 3.x.x (receitas) bate com somatório de NF-e/NFS-e emitidas no período.
- **Onde:** EFD-Contrib bloco C + ECF L210 + razão analítico.
- **Diferença máxima tolerável:** zero. Quebra justifica nota explicativa.
- **Risco:** autuação por omissão de receita (multa 75% a 150%).

### B.2 Receita financeira tributada
- **O quê:** rendimentos de aplicação financeira tributados a 9,25% (Decreto 8.426/2015).
- **Onde:** conta 3.5.x × EFD-Contrib bloco M.
- **Risco:** insuficiência de PIS/COFINS, multa de ofício.

### B.3 Variação cambial — regime de competência ou caixa
- **O quê:** opção feita em janeiro e mantida no ano (art. 30 MP 2.158-35/2001).
- **Onde:** DCTF jan × ECF M300/M500.
- **Risco:** alterar regime no meio do ano = autuação.

### B.4 Receitas não tributáveis identificadas
- **O quê:** reembolsos, recuperações, reversões de provisões — não compõem base do PIS/COFINS não-cumulativo no não-cumulativo (Lei 10.637/02 art. 1º).
- **Onde:** razão + EFD-Contrib (CST 49).
- **Risco:** tributar receita não-tributável (pagar a mais).

## C. PIS / COFINS — Não-cumulativo

### C.1 Exclusão do ICMS destacado da base
- **O quê:** ICMS **destacado** (não o recolhido) excluído da base.
- **Onde:** EFD-Contrib bloco M (ajuste).
- **Base:** STF Tema 69 (modulado a partir de 15/03/2017).
- **Risco:** se ainda inclui = pagando a mais; se exclui sem trânsito em julgado individual = risco de questionamento da modulação.

### C.2 Créditos só sobre o permitido
- **O quê:** crédito apenas em insumos (STJ REsp 1.221.170 — essencialidade/relevância), energia elétrica, aluguel PJ, depreciação de máquina produtiva, frete na venda, armazenagem.
- **NÃO gera crédito:** material de uso/consumo, despesa administrativa, marketing, brindes, hospedagem, refeição (salvo vale-refeição vinculado), serviços não-essenciais.
- **Onde:** EFD-Contrib bloco F.
- **Risco:** glosa de crédito + multa 75%.

### C.3 Crédito 1/48 (máquinas) e 1/240 (edificações)
- **O quê:** crédito de depreciação calculado mês a mês, não no momento da compra.
- **Onde:** controle paralelo (planilha) + EFD-Contrib F120/F130.
- **Risco:** antecipar crédito = creditamento indevido.

### C.4 Receitas monofásicas com CST correto
- **O quê:** revenda de monofásico = CST 04 (alíquota zero), não tomar crédito na compra (revenda não dá crédito).
- **Onde:** EFD-Contrib bloco C.
- **Risco:** crédito indevido.

### C.5 Conciliação EFD-Contrib × DCTFWeb × ECF
- **O quê:** o que está na EFD-Contrib bloco M (apuração) deve constar na DCTFWeb e ser igual ao M350/M610 da ECF.
- **Risco:** malha automática da RFB cruza essas 3 fontes.

## D. IRPJ / CSLL — LALUR / e-LACS

### D.1 Adições obrigatórias frequentemente esquecidas
- Provisões não-dedutíveis (exceto férias, 13º, créditos de liquidação duvidosa nos termos do art. 347+ RIR/2018).
- Doações (exceto às listadas no art. 13 Lei 9.249/95 e Lei do Bem).
- Brindes (art. 13, VII, Lei 9.249/95).
- Multas punitivas (não de mora) — art. 41 Lei 8.981/95.
- Depreciação acima da taxa legal sem laudo (IN 162/98).
- Despesas com veículo não-relacionado à atividade.
- Tributos com exigibilidade suspensa sem depósito judicial (art. 41 Lei 8.981/95).
- Pagamentos a beneficiário não identificado (art. 304 RIR/2018) — IRRF 35%.
- **Subvenção para investimento — pós Lei 14.789/2023:** voltou a ser tributada (com crédito fiscal de 25% para projetos habilitados na RFB). **NÃO** excluir mais como antes da MP 1.185/2023.

### D.2 Exclusões válidas
- Reversão de provisão antes adicionada.
- Dividendos recebidos (art. 10 Lei 9.249/95).
- Resultado positivo de equivalência patrimonial (art. 23 DL 1.598/77).
- Ganho na venda de bens com isenção (incentivos fiscais regionais — SUDAM, SUDENE).
- JCP recebido (até limites — Lei 9.249/95 art. 9º).

### D.3 Compensação de prejuízo fiscal — trava dos 30%
- **O quê:** compensação limitada a 30% do lucro líquido ajustado do período.
- **Onde:** Parte B do e-LALUR / Bloco M ECF.
- **Base:** Lei 9.065/95 art. 42; STF Tema 117 (constitucional).
- **Controle separado:** prejuízo fiscal × base negativa CSLL (não se confundem).
- **Risco:** zerar IRPJ com prejuízo acima da trava = autuação clara.

### D.4 Adicional de IRPJ
- **O quê:** 10% sobre o que exceder R$ 20.000/mês de lucro real (ou R$ 60.000/trimestre).
- **Onde:** ECF M300.
- **Atenção:** o adicional **não admite** redução por incentivos fiscais regionais.

### D.5 Estimativas mensais (regime anual)
- **O quê:** estimativa mensal sobre receita bruta com presunções do art. 15 Lei 9.249/95 + outras receitas integralmente.
- **Suspensão/redução:** balancete mensal acumulado pode reduzir/suspender estimativa (art. 35 Lei 8.981/95).
- **Risco:** estimativa zero sem balancete = multa isolada 50% do que devia (art. 44 Lei 9.430/96).

### D.6 Despesas dedutíveis — usuais, normais, necessárias
- Critério tríplice (art. 311 RIR/2018): usual + normal + necessária à atividade.
- Comprovação documental obrigatória (NF, contrato, recibo com identificação).
- **Cuidado:** pró-labore sem GFIP/eSocial = não dedutível.

## E. Tributos retidos e recolhidos

### E.1 IRRF/CSRF compensados corretamente
- **O quê:** IRRF e CSRF retidos sobre receitas devem ser compensados na própria DCTFWeb/ECF (não em apuração separada).
- **Onde:** ECF L210 (receita bruta + retenções) → M300 (apuração).
- **Risco:** pagar imposto sobre receita já retida = duplicidade.

### E.2 INSS retido (cessão de mão de obra) recuperado
- **O quê:** 11% (ou 3,5% CPRB) retidos pelos tomadores compensados na DCTFWeb do prestador.
- **Onde:** EFD-Reinf R-2020 + DCTFWeb.
- **Risco:** perda do crédito previdenciário (R$ relevante).

### E.3 Recolhimento no DARF correto
- IRPJ Lucro Real estimativa: **2362**; trimestral: **0220**; ajuste: **2430**; LR anual ajuste: **2456**.
- CSLL Real estimativa: **2484**; trimestral: **2372**; ajuste: **6773**.
- Diferença de código = pagamento sem alocação, vai para "pagamento indevido", débito permanece em aberto.

## F. Conciliações cruzadas (a RFB faz automaticamente)

### F.1 Receita ECF × EFD-Contrib × NFs emitidas
Triângulo perfeito. Diferença = malha.

### F.2 PIS/COFINS pago (DARF) × EFD-Contrib × DCTF/DCTFWeb
Tudo deve fechar centavo a centavo.

### F.3 IRPJ/CSLL pago × ECF × DCTFWeb
Idem.

### F.4 Folha de pagamento — eSocial × FGTS × DCTFWeb × ECD
A RFB cruza salários declarados no eSocial com despesa contábil de pessoal.

### F.5 Compras × EFD ICMS/IPI × EFD-Contrib × ECD
Crédito de PIS/COFINS sobre insumos tem que constar como entrada na EFD ICMS/IPI.

### F.6 Saldo bancário × DIMOF (atual e-Financeira)
Bancos reportam movimentação. Receita não declarada que passa em conta = sinalizada.

### F.7 DECRED, DIMOB, DOI, DME
Cartões, imóveis, operações em espécie — todos cruzados.

## G. Documentação a manter (5 anos = prazo decadencial; mais se houver tese)

- Todos XMLs de NF-e/NFS-e/CT-e (entrada e saída).
- Razão analítico assinado.
- Balancetes mensais.
- Conciliações bancárias.
- Memórias de cálculo de PIS/COFINS, IRPJ, CSLL, ICMS, IPI, INSS, ISS.
- Contratos relevantes (locação, prestação de serviço de TI/consultoria, mútuo intercompany).
- Atas, procurações, alterações contratuais.
- Comprovantes de retenção emitidos a fornecedores.
- Laudos de avaliação (ativo, mais-valia, ágio).

## H. Sinais de alerta — quando parar e investigar

🚨 Caixa com saldo crescente sem justificativa operacional → suspeita de receita omitida.
🚨 Despesa com fornecedor único representando >30% custo → preço de transferência, partes relacionadas.
🚨 Empréstimo de sócio recorrente sem contrato → distribuição disfarçada de lucros.
🚨 Despesa com cartão corporativo sem fatura conciliada → indedutibilidade.
🚨 Adições do LALUR caindo ano a ano sem explicação → glosa preventiva.
🚨 Margem de lucro muito abaixo do setor (SUSEP, IBGE) → questionamento.
🚨 Sócio com despesas pessoais pagas pela PJ → desconsideração de PJ + autuação PF.

## Saída obrigatória da revisão

Toda revisão Lucro Real entrega:
1. **Status por item** do checklist (OK / Ajustar / Crítico).
2. **Valor estimado** de exposição em cada achado crítico.
3. **Plano de correção** (retificação de EFD/DCTF, ajuste contábil, denúncia espontânea).
4. **Carta de recomendação** ao cliente assinada pelo contador responsável.
