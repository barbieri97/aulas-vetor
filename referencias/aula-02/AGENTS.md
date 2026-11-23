# Aula 02 · Avaliação neuropsicológica de TEA e TDAH — mapa e regras

Este arquivo é **produção**: diz como o deck é montado (estrutura, sequência, layouts, recursos
visuais) e onde está cada coisa. O **conteúdo** — o embasamento teórico e técnico — está em
[`docs/`](docs/index.md), escrito como um livro. Para trabalhar um bloco, leia este arquivo, o
capítulo do bloco e o [glossário](docs/glossario.md) — não o resto.

Convenções do repositório, layouts, componentes e armadilhas do Slidev: [`AGENTS.md`](../../AGENTS.md)
da raiz e [`docs/design-system.md`](../../docs/design-system.md). Deck: `aulas/aula-02-avaliacao-tea-tdah.md`.

## Contexto

Minicurso de Psicologia (data no headmatter: `2026-09-02`) sobre a **avaliação neuropsicológica
do transtorno do espectro autista (TEA) e do transtorno de déficit de atenção/hiperatividade
(TDAH)**, do desenvolvimento típico ao diagnóstico diferencial: *o que se investiga, com o quê, e
por quê*. Base primária: capítulo de Transtornos do Neurodesenvolvimento do DSM-5 (edição
brasileira, Artmed), mais a literatura citada nos slides.

Duração: o deck anuncia **três horas** (o slide de abertura diz "as três horas"). Os blocos
somam 2h30 de conteúdo (30 + 45 + 45 + 30 min); o restante é intervalo e discussão.

**Estrutura de raciocínio que a aula repete.** Para cada transtorno, na mesma ordem: o quadro
(critérios) → o perfil cognitivo → os domínios a cobrir → a anamnese → os instrumentos. O
último bloco põe os dois lado a lado e fecha no diagnóstico diferencial. A advertência que
atravessa tudo: **nenhum instrumento apresentado diagnostica TEA ou TDAH**; os diagnósticos são
clínicos, por critérios do DSM-5, a partir de história, observação e múltiplas fontes.

## Regras de montagem

- **Base única:** DSM-5. Todo slide de critério, tabela ou diferencial termina com `<Fonte>`
  apontando o capítulo ou a tabela. Estudo de fora leva **autor e ano no slide** (ex.: Hull et
  al., 2020; Townes et al., 2023; Rong et al., 2021).
- **Dado de instrumento só com fonte** (manual técnico ou ficha síntese da Vetor Editora), citada
  em `<Fonte>`. O que não foi confirmado fica `[conferir no manual]` e **fora do slide**.
- **Molde do slide de instrumento** (reaproveitado pela aula 03): `default` com `<Grade :cols="2">`
  de quatro `<Cartao>` — *objetivo* · *público* (idade de referência) · *aplicação* (cor ouro,
  `:destaque="true"`) · *resultado* — e `<Fonte>`; ou `<Criterios>` numerado 1–4 (objetivo ·
  idade de referência · aplicação · o que se extrai). Quando há desenho da tarefa, um slide
  `esquema` com SVG **antes** da ficha.
- **Glosa nas notas:** toda sigla e todo termo técnico é glosado no comentário final do slide
  (glosas em [`docs/glossario.md`](docs/glossario.md)).
- **Perfis e vinheta são ilustrativos.** Os dois slides `Perfil` (TEA e TDAH) usam escores
  inventados para mostrar a *forma*, e a vinheta de L., 8 anos é construída para a aula; a
  legenda ou as notas dizem isso.
- **Exemplos clínicos como cena:** os slides de critério A e B do TEA trazem "três cenas" em
  `<Grade :cols="3">` e, em seguida, um `<Nota>` alertando que cena isolada não indica TEA.
- **Perguntas de anamnese** vão em `<Cartao>` com a fala entre aspas e em itálico, e o `<Fonte>`
  traz o princípio ("peça episódios, não julgamentos").
- **Imagens:** fotos do Wikimedia Commons com autor e licença na legenda (`figura`, campo
  `imagem`, nunca `src`; caminho `/aula-02/...`); os **dezesseis esquemas** são autorais, em SVG,
  dentro do layout `esquema`. As curvas do slide de janelas são **ilustrativas da forma**.
- **Roteiro:** o slide `roteiro` ("O caminho de hoje", três itens) aparece depois da capa
  (`atual: 1`), depois da seção 02 (`atual: 2`) e depois da seção 04 (`atual: 3`). O item 2 do
  roteiro ("Avaliação do TEA e do TDAH") cobre duas seções do deck, 02 e 03, uma por transtorno —
  por isso a seção 03 não repete o roteiro. Os números de bloco que aparecem nos slides de seção
  ("Bloco 1 · 30 minutos" etc.) seguem o roteiro, não a tabela abaixo.
- **Fecho de bloco:** cada bloco acaba em slide `destaque` com a mensagem síntese; o deck acaba
  em `fecho` ("Quatro coisas que ficam").
- **Slides de `destaque`** carregam uma frase só (campo `title`, com `<span class="ds-grifo">`
  na palavra-chave) e, no corpo ou em `fonte:`, a justificativa de uma linha.

## Sequência e blocos

Os blocos têm slide de seção numerado de `01` a `04`. Posição sempre pelo **título do slide**.

| # | Bloco | Primeiro slide no deck | Último slide | Slides | Tempo | Visão geral | Capítulo | Status no deck |
|---|---|---|---|---|---|---|---|---|
| 0 | Abertura | capa · "TEA e TDAH: avaliação neuropsicológica" | "O que esta aula é, e o que não é" | 3 | — | Capa, roteiro e a advertência de que nenhum instrumento diagnostica. | — | pronto |
| 1 | Transtornos do neurodesenvolvimento | "Transtornos do neurodesenvolvimento" (seção 01) | "O desenvolvimento é a régua. Sem ela, nenhum sintoma tem tamanho." | 18 | 30 min | A categoria do DSM-5; o desenvolvimento típico como régua; marcos nas quatro áreas; atraso × transtorno; genes e ambiente. | [`01`](docs/01-neurodesenvolvimento.md) | pronto |
| 2 | Avaliação do TEA — quadro, perfil e anamnese | "Avaliação do transtorno do espectro autista" (seção 02) | "Não existe teste que diagnostique TEA." | 23 | 45 min (com o cap. 3) | Critérios A–E, gravidade, especificadores, camuflagem, domínios, perfil, anamnese, múltiplos informantes. | [`02`](docs/02-avaliacao-tea.md) | pronto |
| 3 | Instrumentos do TEA | "BINAUT · a entrevista com os responsáveis" | "Três instrumentos, três recortes" | 10 | (dentro dos 45 min do bloco 2) | BINAUT (entrevista), PROTEA-R (observação), EFA (adaptação) e a comparação dos três. | [`03`](docs/03-instrumentos-tea.md) | pronto |
| 4 | Avaliação do TDAH — quadro, perfil e anamnese | "Avaliação do transtorno de déficit de atenção/hiperatividade" (seção 03) | "Nenhum teste isolado diagnostica TDAH." | 17 | 45 min (com o cap. 5) | Critérios A–E, apresentações, curso ao longo da vida, domínios, perfil, anamnese. | [`04`](docs/04-avaliacao-tdah.md) | pronto |
| 5 | Instrumentos do TDAH | "Bateria SAFE · três testes independentes" | "Quatro instrumentos, quatro recortes" | 11 | (dentro dos 45 min do bloco 3) | Bateria SAFE (TOL-BR, CPT-Flex, MFFT-BR) e TAVIS-4; a limitação de faixa etária. | [`05`](docs/05-instrumentos-tdah.md) | pronto |
| 6 | Semelhanças, diferenças e diagnósticos diferenciais | "Semelhanças, diferenças e diagnósticos diferenciais" (seção 04) | "E a terceira possibilidade? Os dois." | 20 | 30 min | Diferenciais do TEA e do TDAH; a mesma cena, dois mecanismos; funções executivas; comorbidade; ordem do raciocínio; vinheta. | [`06`](docs/06-diferenciais.md) | pronto |
| 7 | Fechamento e referências | "Quatro coisas que ficam" | "Vamos continuar a conversa." | 5 | — | Quatro mensagens, três listas de referências, agradecimento. | [`fontes`](docs/fontes.md) | pronto |

Total: **107 slides** (contando os de seção). Os capítulos 3 e 5 (instrumentos) são **reaproveitados
pela aula 03** como retomada de PROTEA-R, BINAUT e EFA: qualquer mudança neles exige conferir
[`../aula-03/AGENTS.md`](../aula-03/AGENTS.md) — mesma estrutura de cartões, mesmos números.

### Layouts por slide (estrutura de cada bloco)

**Bloco 1** — `secao` · `default` (`<Termo>` + `<Nota>`) ×2 · `esquema` (linha do tempo do
neurodesenvolvimento) · `figura` (ressonância em cinco idades) · `comparacao` (típico × atípico) ·
`destaque` · `default` com `<Grade :cols="2">` (quatro áreas) · `esquema` (quatro trilhas) ·
`comparacao` (marcos aos 12, 24 e 36 meses) · `default` com `<Criterios>` (o que um atraso
autoriza) · `destaque` · `pergunta` · `esquema` (janelas de oportunidade) · `comparacao` (atraso ×
transtorno) · `esquema` (fluxo de decisão) · `default` com `<Termo>` (critério do transtorno
específico da aprendizagem) · `esquema` (gene × ambiente) · `destaque` (fecho do bloco).

**Bloco 2** — `secao` · `roteiro` · `default` (quadro) · `default` com `<Criterios>` (A) ·
`destaque` · `default` com `<Criterios>` (B) · `esquema` (estrutura do diagnóstico) · `comparacao`
(níveis de gravidade) · `default` (especificadores) · `figura` (cotidiano do déficit social) ·
`default` com `<Grade :cols="3">` ×2 (cenas A e B) · `default` (o que vem junto) · `esquema`
(espectro) · `default` (camuflagem) · `comparacao` (apresentação reconhecida × a que se perde) ·
`destaque` · `default` (domínios) · `esquema` com `<Perfil>` e `<Legenda>` · `default` com
`<Criterios>` (anamnese) · `default` com `<Grade :cols="2">` (perguntas) · `esquema` (múltiplos
informantes) · `destaque`.

**Bloco 3** (instrumentos do TEA) — por instrumento: ficha em `default` + `<Grade :cols="2">`
(BINAUT, PROTEA-R, EFA); BINAUT acrescenta `comparacao` (duas escalas), `destaque` (regra do
ponto de corte) e `default` com `<Grade :cols="3">` (cinco áreas); PROTEA-R acrescenta `esquema`
(a sala), `default` com `<Criterios>` (cinco itens críticos) e `default` com `<Termo>` + `<Nota>`
(escore); fecha com `comparacao` dos três.

**Bloco 4** — `secao` · `default` (quadro) · `default` com `<Criterios>` ×2 (A1, em duas
metades) · `pergunta` · `default` com `<Criterios>` ×2 (A2 hiperatividade; A2 impulsividade) ·
`default` com `<Criterios>` (B a E) · `esquema` (duas listas, três apresentações) · `figura`
(perfil desatento) · `default` (as duas cenas que mais confundem) · `esquema` (curso ao longo
da vida) · `default` (domínios, `<Grade :cols="2">`) · `esquema` com `<Perfil>` · `default`
(anamnese) · `default` (perguntas + `<Nota tipo="alerta">`) · `destaque`.

**Bloco 5** (instrumentos do TDAH) — `default` com `<Termo>` + `<Grade :cols="3">` (SAFE) ·
`default` com `<Termo>` + `<Nota tipo="alerta">` (limitação de faixa etária) · para TOL-BR,
CPT-Flex, MFFT-BR e TAVIS-4, nesta ordem: `esquema` (a tarefa) + `default` com `<Criterios>`
(ficha de quatro itens) · fecha com `comparacao`.

**Bloco 6** — `secao` · `roteiro` · `comparacao` ×2 (diferenciais do TEA, A e B) · `destaque` ×2 ·
`comparacao` ×3 (TDAH: neurodesenvolvimento; humor e regulação; o que vem de fora) · `destaque`
(regra prática) · `default` com `<Grade :cols="3">` (o ambiente) · `comparacao` (a mesma cena, dois
mecanismos) · `default` com `<Citacao>` (funções executivas) · `default` com `<Dado>` ×3
(comorbidade) · `default` com `<Criterios>` + `<Nota>` · `esquema` com `<Fluxo :por-linha="4">` ·
`pergunta` · `caso` (vinheta) · `default` (o que faria a hipótese pender) · `destaque`.

**Fechamento** — `fecho` · `default` com `<Criterios>` (referências: fontes primárias) ·
`default` (desenvolvimento e genética) · `default` (TEA, TDAH e comorbidade) · `agradecimento`.

## Recursos visuais

Em `aulas/public/aula-02/`. Esquemas autorais em SVG; fotos e figuras de terceiros com crédito.

| Arquivo | Onde entra (título do slide) |
|---|---|
| `Neurodesenvolvimento.png` | "O sistema nervoso não fica pronto de uma vez" |
| `desenvolvimento-encefalo-mri.png` | "O que muda, e quando" |
| `marcos-quatro-areas.svg` | "As quatro trilhas correm juntas" |
| `janelas-oportunidade.svg` | "Não há uma janela: há várias" |
| `atraso-ou-transtorno.svg` | "Por isso a estimulação é método, não só tratamento" |
| `gene-ambiente.svg` | "Genes e ambiente não se somam — eles interagem" |
| `tea-dois-eixos.svg` | "A estrutura inteira do diagnóstico" |
| `brincadeira-simbolica.jpg` | "O déficit social, no cotidiano" |
| `tea-variabilidade.svg` | "Por que a palavra é espectro" |
| `avaliacao-tea-arranjo.svg` | "Um informante nunca basta" |
| `protea-ilhas.svg` | "A sala é parte do instrumento" |
| `tdah-triade.svg` | "Duas listas, três apresentações" |
| `criancas-brincando-blocos.jpg` | "O perfil desatento, no cotidiano" |
| `tdah-curso.svg` | "O quadro muda de cara ao longo da vida" |
| `torre-de-londres.svg` | "Torre de Londres · a tarefa" |
| `cpt-flex-regra.svg` | "CPT-Flex" |
| `mfft-reflexivo-impulsivo.svg` | "MFFT-BR · velocidade contra precisão" |
| `tavis-tres-tarefas.svg` | "TAVIS-4 · três tarefas de atenção visual" |
| `nd-etapas.svg`, `tea-tdah-sobreposicao.svg` | não referenciados no corpo do deck atual |

Imagens **fornecidas pelo autor** ou de licença aberta; se um arquivo faltar, deixar o slide sem
a imagem e avisar — não baixar nem gerar outra no lugar.

## Material externo

Arquivos de terceiros desta aula (manuais, artigos, capturas de página) ficam em
[`externos/`](externos/), somente leitura: consulte para conferir um dado, mas o que se confirmar
entra em `docs/` e é citado em `docs/fontes.md` com o nome do arquivo. Regras gerais em
[`AGENTS.md`](../../AGENTS.md) da raiz, seção "Referências por aula". Nenhum arquivo registrado
ainda.

## Protocolo de trabalho

1. Leia este arquivo, o capítulo do bloco em `docs/` e `docs/glossario.md`.
2. Mexa **só** no trecho do deck que o bloco pede. Slide novo entra na posição da tabela.
3. Rode `npm run lint`.
4. Ao terminar, liste: (a) slides criados ou alterados, (b) lacunas `[conferir no manual]` e
   `[verificar na fonte]` que ficaram de fora do slide, (c) imagens que faltaram.
5. Se o conteúdo mudar, mude o capítulo em `docs/` **primeiro**; o slide só resume.
6. Mudança nos capítulos 3 ou 5 → conferir a aula 03.

## Revisão geral

- Soma dos tempos: 30 + 45 + 45 + 30 min = 2h30 de conteúdo.
- Todo slide de instrumento termina com `<Fonte>`; todo dado de instrumento tem fonte; nenhum
  `[conferir no manual]` chegou ao slide.
- Toda sigla e todo termo técnico tem glosa nas notas.
- O aviso "nenhum instrumento diagnostica" aparece no começo (abertura), no meio (fim do TEA e
  fim do TDAH) e no fecho.
- Slides de perfil e vinheta dizem que são ilustrativos.
- Todo autor-ano citado em slide ou nota aparece nas listas de referências do deck (ver
  pendências em [`docs/fontes.md`](docs/fontes.md)).
- `npm run lint` limpo.
