# Aula 01 · Transtornos neurocognitivos — mapa e regras

Este arquivo é **produção**: diz como o deck é montado (estrutura, sequência, layouts, recursos
visuais) e onde está cada coisa. O **conteúdo** — o embasamento teórico e técnico — está em
[`docs/`](docs/index.md), escrito como um livro. Para trabalhar um bloco, leia este arquivo, o
capítulo do bloco e o [glossário](docs/glossario.md) — não o resto.

Convenções do repositório, layouts, componentes e armadilhas do Slidev: [`AGENTS.md`](../../AGENTS.md)
da raiz e [`docs/design-system.md`](../../docs/design-system.md). Deck: `aulas/aula-01-neuropsicologia-tnc.md`.

## Contexto

Aula de abertura da série, apresentada na **Semana da Psicologia** (data no headmatter:
`2026-09-14`). Tema: **transtornos neurocognitivos (TNC)** — conceito, critérios diagnósticos,
etiologias, domínios cognitivos e o lugar da avaliação neuropsicológica. A base primária é o
capítulo de Transtornos Neurocognitivos do DSM-5 (edição brasileira, Artmed).

O fio condutor é uma ordem de raciocínio que a aula repete em cada bloco: **primeiro a
síndrome, depois a causa; primeiro o desempenho, depois a funcionalidade**. O deck termina em
três mensagens: déficit primário, adquirido, com etiologia buscada; o que separa leve de maior
é a independência, não o escore; um escore baixo tem muitas origens.

> Duração total e perfil do público **não estão registrados** no deck. Preencher aqui quando o
> autor definir — a coluna de tempo da tabela abaixo ficou em aberto por isso.

## Regras de montagem

- **Base única:** o DSM-5 sustenta a aula. Cada slide que traz critério, tabela ou subtipo do
  manual termina com `<Fonte>` apontando o capítulo ou a tabela. Dado de fora do manual leva
  autor e ano **no slide** (ex.: Jessen et al., 2014; Trejo-Lopez et al., 2021).
- **Glosa nas notas:** toda sigla e todo termo técnico do slide é glosado no comentário de
  notas do mesmo slide (as glosas estão em [`docs/glossario.md`](docs/glossario.md)). O
  comentário é o **último** do slide — o Slidev o lê como nota do apresentador.
- **Imagem de exame ou de lâmina** vem do Wikimedia Commons, com **autor, licença e fonte na
  legenda**, no layout `figura` (campo `imagem`, nunca `src`; caminho em `/aula-01/...`). Os
  esquemas são **autorais**, em SVG, e entram por `<img>` dentro do layout `esquema`.
- **Perfil e vinheta são ilustrativos:** o slide do perfil de seis domínios usa escores
  inventados para mostrar a *forma*; a legenda e as notas dizem isso. Nunca apresentar como caso real.
- **Respostas ficam nas notas.** No slide "As quatro perguntas por trás do escore" só a pergunta
  está na tela; a resposta é fala do apresentador e vive no comentário.
- **Padrão por etiologia** (bloco 3): uma etiologia = 1 a 3 slides `figura` (lesão, imagem,
  exame) + 1 slide `default` "**onde, e o que cai**", com `<Grade :cols="2">` de dois
  `<Cartao>` — *regiões* (cor azul) e *cognição* (cor ouro) — e `<Fonte>`. Fecha o bloco um
  slide `comparacao` com as cinco assinaturas lado a lado.
- **Alternância visual:** `figura` alterna `lado: esquerda` e `lado: direita` ao longo do
  bloco; `ajuste: contain` sempre (nenhuma imagem é cortada).
- A aula **não traz instrumento psicométrico nomeado** como dado de produto (apenas MEEM, MoCA,
  FCSRT e P-FAQ como exemplos citados). Dado de instrumento, se entrar, segue a regra da raiz:
  só com fonte; o que não foi confirmado fica `[conferir no manual]` e fora do slide.
- **Aviso de limite:** a aula afirma, no bloco 5, que **nenhum rastreio separa as hipóteses
  que levam a um escore baixo** e que a linha entre leve e maior é clínica, não estatística.

## Sequência e blocos

Os cinco blocos têm slide de seção numerado de `01` a `05` (layout `secao`), e um slide
`roteiro` ("O caminho de hoje") logo depois da capa. Posição sempre pelo **título do slide**.

| # | Bloco | Primeiro slide no deck | Último slide | Slides | Visão geral | Capítulo | Status no deck |
|---|---|---|---|---|---|---|---|
| 0 | Abertura | capa · "Transtornos Neurocognitivos: alterações na cognição e funcionalidade" | "O caminho de hoje" | 2 | Capa e roteiro dos cinco blocos. | — | pronto |
| 1 | Conceito e classificação | "Conceito e classificação" (seção 01) | "A mesma queixa, três lugares diferentes do manual" | 4 | O que faz de um transtorno um TNC: déficit primário, adquirido, com etiologia buscada; onde ele se separa de neurodesenvolvimento e de outros transtornos mentais. | [`01`](docs/01-conceito-e-classificacao.md) | pronto |
| 2 | Critérios diagnósticos | "Critérios diagnósticos" (seção 02) | "Comprometimento cognitivo subjetivo" | 7 | Delirium, TNC maior e TNC leve, e o contínuo que vai da cognição típica ao TNC maior. | [`02`](docs/02-criterios-diagnosticos.md) | pronto |
| 3 | Etiologias | "Etiologias" (seção 03) | "Cinco etiologias, cinco assinaturas" | 17 | A síndrome vem antes da causa; cinco etiologias (Alzheimer, frontotemporal, vascular, corpos de Lewy, príon), cada uma com lesão, exame, região e perfil cognitivo. | [`03`](docs/03-etiologias.md) | pronto |
| 4 | Domínios cognitivos | "Domínios cognitivos" (seção 04) | "O resultado é um perfil, não um número" | 6 | Os seis domínios do DSM-5, o que se vê e o que se testa em cada um, o mesmo domínio em dois níveis. | [`04`](docs/04-dominios-cognitivos.md) | pronto |
| 5 | Avaliação neuropsicológica — função e cognição | "Avaliação neuropsicológica — função e cognição" (seção 05) | "A ordem do raciocínio" | 7 | Cognição e funcionalidade como duas perguntas; as quatro perguntas por trás de um escore; memória livre, com pista e reconhecimento; AIVD; ordem do raciocínio. | [`05`](docs/05-avaliacao-neuropsicologica.md) | pronto |
| 6 | Fechamento e referências | "Três coisas que ficam" | "Vamos continuar a conversa." | 5 | Três mensagens, slide de imagem, duas listas de referências e agradecimento. | [`fontes`](docs/fontes.md) | pronto |

Total: **48 slides** (contando os de seção). Tempo por bloco: *a definir pelo autor*.

### Layouts por slide (estrutura de cada bloco)

**Bloco 1** — `secao` · `default` (`<Termo>` + `<Nota>` + `<Fonte>`) · `esquema` (SVG das três
marcas, com `legenda`) · `comparacao` (3 colunas: TNC · neurodesenvolvimento · outro transtorno
mental; 4 linhas).

**Bloco 2** — `secao` · `default` com `<Criterios>` (Delirium, A–E) · `esquema` (curso do delirium
× curso do TNC) · `default` com `<Criterios>` + `<Nota>` (TNC maior) · `comparacao` (maior × leve,
critérios A e B) · `esquema` com `<Continuum>` e `<Legenda>` (cognição típica → TNC maior) ·
`default` com `<Termo>` (CCS).

**Bloco 3** — `secao` · `esquema` (síndrome e etiologia) · `default` com `<Grade :cols="3">` de
cinco `<Cartao>` mais um "Outras" (cinza) · `figura` (Alois Alzheimer) · depois, por etiologia:

| Etiologia | Slides (nesta ordem) |
|---|---|
| Alzheimer | `figura` histologia · `figura` PET de amiloide · `default` onde e o que cai |
| Frontotemporal | `figura` ressonância · `default` onde e o que cai |
| Vascular | `figura` ressonância (leucoaraiose) · `default` onde e o que cai |
| Corpos de Lewy | `figura` imuno-histoquímica · `default` onde e o que cai |
| Príon | `figura` histologia · `figura` ressonância e exames · `default` onde e o que cai |

Fecha com `comparacao` (3 colunas: lesão · regiões · o que cai primeiro; 5 linhas).

**Bloco 4** — `secao` · `esquema` (seis domínios) · `comparacao` ×2 (domínios 1 de 2 e 2 de 2:
sintomas × exemplos de avaliação) · `default` com `<Grade :cols="2">` (mesmo domínio, dois níveis) ·
`esquema` com `<Perfil>` e `<Legenda>` (z por domínio).

**Bloco 5** — `secao` · `esquema` (cognição × funcionalidade) · `pergunta` (com `pistas`) ·
`default` com `<Criterios>` (quatro perguntas; respostas nas notas) · `esquema` (livre, com pista,
reconhecimento) · `default` com `<Termo>` + `<Nota>` (AIVD) · `esquema` com `<Fluxo :por-linha="4">`
(ordem do raciocínio).

**Fechamento** — `fecho` (três pontos) · `default` com imagem · `default` com `<Criterios>`
(referências) ×2 · `agradecimento` (nome e contatos do autor).

## Recursos visuais

Em `aulas/public/aula-01/`. Esquemas autorais em SVG; imagens de terceiros com crédito na legenda.

| Arquivo | Onde entra (título do slide) |
|---|---|
| `tnc-tres-marcas.svg` | "Três marcas separam o TNC" |
| `curso-delirium-tnc.svg` | "O que o tempo mostra" |
| `sindrome-e-etiologia.svg` | "Primeiro a síndrome, depois a causa" |
| `alois-alzheimer.jpg` | "Uma causa nomeada não muda a síndrome" |
| `hist-alzheimer.jpg` | "Alzheimer: duas lesões, dois compartimentos" |
| `pet-amiloide-alzheimer.jpg` | "O que se vê antes da necropsia" |
| `rm-frontotemporal.png` | "Frontotemporal: uma síndrome, três proteínas" |
| `rm-vascular-leucoaraiose.jpg` | "Vascular: a lesão é tecido perdido" |
| `hist-lewy-sinucleina.jpg` | "Corpos de Lewy: uma sinucleinopatia" |
| `hist-prion-espongiforme.jpg` | "Príon: uma proteína que muda de forma" |
| `rm-prion-flair.jpg` | "O exame que sustenta a suspeita" |
| `seis-dominios.svg` | "Os seis domínios" |
| `cognicao-e-funcionalidade.svg` | "Duas perguntas, não uma" |
| `memoria-com-dica.svg` | "Livre, com pista, reconhecimento" |
| `oqueachamoquee.jpg` | slide de imagem após "Três coisas que ficam" |
| `capa-tnc.svg` | arte de capa (não referenciada no corpo do deck) |

Imagens **fornecidas pelo autor**; se um arquivo faltar, deixar o slide sem a imagem e avisar —
não baixar nem gerar outra no lugar.

## Protocolo de trabalho

1. Leia este arquivo, o capítulo do bloco em `docs/` e `docs/glossario.md`.
2. Mexa **só** no trecho do deck que o bloco pede. Slide novo entra na posição da tabela.
3. Rode `npm run lint`.
4. Ao terminar, liste: (a) slides criados ou alterados, (b) pontos marcados `[verificar na fonte]`
   ou `[conferir no manual]` que ficaram de fora do slide, (c) imagens que faltaram.
5. Se o conteúdo mudar, mude o capítulo em `docs/` **primeiro**; o slide só resume.

## Revisão geral

- Todo slide com critério, tabela ou subtipo do DSM-5 termina com `<Fonte>`.
- Toda sigla e todo termo técnico tem glosa nas notas.
- Toda imagem de terceiros tem autor e licença na legenda; os esquemas autorais estão
  identificados como tal na lista de referências.
- Os slides de perfil e de vinheta dizem que são **ilustrativos**.
- `npm run lint` limpo.
- A lista de referências do deck cobre todo autor-ano citado nos slides (ver
  [`docs/fontes.md`](docs/fontes.md), seção de pendências).
