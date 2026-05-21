# ICMS — Substituição Tributária e DIFAL

> Referência técnica. Carregar quando envolver ST, DIFAL, FCP, antecipação ou interestadual.

## ICMS — visão geral

- Tributo **estadual** (CF art. 155, II).
- Base: LC 87/1996 (Lei Kandir).
- Alíquotas internas: cada UF fixa, padrão 17%–20% (SP 18%, RJ 20%+1% FCP, MG 18%, RS 17%, etc.).
- Alíquotas interestaduais (Res. SF 22/1989 + 13/2012):
  - **4%** — bens importados ou com >40% de conteúdo importado (entre quaisquer UFs).
  - **7%** — de Sul/Sudeste (exceto ES) para Norte/Nordeste/CO/ES.
  - **12%** — demais operações interestaduais.

## Substituição Tributária (ICMS-ST)

### O que é
Mecanismo em que **um contribuinte da cadeia** (geralmente o industrial ou importador) recolhe o ICMS devido **por toda a cadeia até o consumidor final**.

### Quem é o substituto
- Indústria, importador ou primeiro adquirente intra-UF de produto sujeito a ST.
- Recolhe o ICMS próprio (operação dele) + ICMS-ST (cadeia à frente).

### Cálculo
```
BC_ST = (Valor da Mercadoria + IPI + Frete + Seguro + Despesas) × (1 + MVA)
ICMS-ST = (BC_ST × Alíquota interna do destino) − ICMS próprio
```

- **MVA (Margem de Valor Agregado):** percentual definido pelo CONFAZ ou UF, presunção da margem até o consumidor.
- **MVA Ajustada (operação interestadual):**
  ```
  MVA_ajust = [(1 + MVA_original) × (1 − Aliq_inter) / (1 − Aliq_interna)] − 1
  ```

### Produtos sujeitos a ST
- Lista no Convênio ICMS 142/2018 (CEST + NCM).
- Exemplos clássicos: bebidas, cigarros, combustíveis, autopeças, cosméticos, materiais de construção, medicamentos, sorvetes.
- **CEST obrigatório** mesmo onde a UF não exige ST (NF-e).

### Ressarcimento e complemento
- Se a venda final for **menor** que a base presumida → ressarcimento (STF RE 593.849, repercussão geral).
- Se a venda for **maior** → complemento (algumas UFs exigem).

### CST/CSOSN ST
- CST: 010, 030, 060, 070 (substituído ou retido anteriormente).
- CSOSN (Simples): 201, 202, 203 (com permissão de crédito), 500 (ST anterior).

## DIFAL — Diferencial de Alíquota

### Operações abrangidas
1. **Aquisição interestadual de ativo imobilizado ou uso/consumo** (contribuinte do ICMS).
2. **Venda interestadual para consumidor final não-contribuinte** (EC 87/2015, LC 190/2022).

### DIFAL para consumidor final não-contribuinte (EC 87/2015)
- **Origem:** alíquota interestadual (4%/7%/12%) → recolhida à UF de origem.
- **Destino:** diferença entre alíquota interna do destino e a interestadual → recolhida à UF de destino.
- Responsabilidade: **remetente**.
- Cálculo "por dentro" (LC 190/2022): a base do DIFAL inclui o próprio DIFAL.

```
Base = Valor sem ICMS / (1 − Aliq_interna_destino)
ICMS_interestadual = Base × Aliq_inter
ICMS_interna_destino = Base × Aliq_interna_destino
DIFAL = ICMS_interna_destino − ICMS_interestadual
```

- Recolhimento via **GNRE** por operação ou inscrição estadual como substituto na UF de destino.
- **FCP (Fundo de Combate à Pobreza):** adicional de 1% a 2% sobre o DIFAL para UFs que instituíram (RJ, BA, MG, PE, etc.).

### DIFAL para contribuinte
- Diferença entre alíquota interna e interestadual recolhida pelo **destinatário** (uso/consumo ou ativo).
- Não há FCP.

## Antecipação tributária

Diferente de ST. UF cobra ICMS na entrada interestadual para evitar guerra fiscal mesmo sem ST formal. Comum em BA, PE, MA, SP (Comunicado CAT antecipação).

## CFOPs essenciais

| CFOP | Operação |
|------|----------|
| 1102 / 2102 / 3102 | Compra para comercialização |
| 1403 / 2403 | Compra com ST (substituído) |
| 5102 / 6102 | Venda de mercadoria |
| 5405 / 6404 | Venda de mercadoria substituída |
| 5403 / 6403 | Venda com ST (substituto) |
| 5910 / 6910 | Remessa em bonificação |
| 5916 / 6916 | Remessa para conserto |
| 5949 / 6949 | Outras saídas/entradas (cautela: a SEFAZ olha de perto) |

## Convênios e protocolos relevantes

- **Conv. ICMS 142/2018** — uniformização da ST.
- **Conv. ICMS 52/2017** — regras de cálculo da ST (declarada inconstitucional na cláusula 8ª, mantidas as demais).
- **LC 190/2022** — DIFAL EC 87/2015 (gatilho da anualidade).
- **Conv. ICMS 100/97** — insumos agropecuários (reduções).
- **Conv. ICMS 87/02** — medicamentos.

## Erros mais comuns

1. Usar MVA original em operação interestadual (deve ser ajustada).
2. Esquecer FCP no DIFAL.
3. Aplicar 4% sem ter ato COTEPE/CAMEX do conteúdo de importação (FCI obrigatória).
4. Empresa do Simples emitir nota com ST e creditar — **não pode** (salvo CSOSN 201/202).
5. Não recolher DIFAL por venda online para consumidor de outra UF.
6. Recolher ICMS-ST sobre base sem incluir IPI quando destinatário é não-contribuinte.
