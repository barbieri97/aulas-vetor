# Aula 03 · Testes na avaliação do TEA e do TDI — mapa e regras

Este arquivo é **produção**: diz o que fazer e onde está cada coisa. O **conteúdo** da aula
está em [`docs/`](docs/index.md), escrito como um livro. Para trabalhar um bloco, leia este
arquivo, o capítulo do bloco e o [glossário](docs/glossario.md) — não o resto.

Convenções do repositório, layouts, componentes e armadilhas do Slidev: [`AGENTS.md`](../../AGENTS.md)
da raiz e [`docs/design-system.md`](../../docs/design-system.md). Deck: `aulas/aula-03-testes-tea-tdi.md`.

## Contexto

Aula de **25 a 35 minutos** sobre os principais instrumentos usados na avaliação do **TEA**
(transtorno do espectro autista) e do **TDI** (transtorno do desenvolvimento intelectual;
deficiência intelectual no DSM-5). Público: profissionais que já atuam na área. O objetivo não
é exaurir o assunto nem ser superficial: o que cada instrumento mede, como é montado, o que
devolve e **onde entra no raciocínio clínico**.

## Regras de conteúdo (valem para todos os blocos)

- **Dados dos instrumentos vêm de fontes públicas da Vetor Editora** (páginas de produto e
  blog), não do manual técnico. O que está `[conferir no manual]` **não vai para o slide**.
  Nunca preencher lacuna por dedução.
- Cada slide de instrumento termina com `<Fonte>`. Siglas e termos vão glosados nas notas do
  slide (as glosas estão em [`docs/glossario.md`](docs/glossario.md)).
- O que o fabricante afirma fica separado do raciocínio clínico do autor. Se a página do
  produto não associa o teste a um quadro, o slide diz isso.
- A aula traz o aviso de que **nenhum instrumento diagnostica sozinho**.
- **A aula 02 é referência** e pode ser consultada e reaproveitada em qualquer bloco. Em
  particular, **reaproveitar a aula 02** (`aulas/aula-02-avaliacao-tea-tdah.md`) para PROTEA-R, BINAUT e
  EFA: mesma estrutura de cartões, mesmos números, sem reescrever.
- Capas de manual: `aulas/public/aula-03/capa-<instrumento>.<ext>`, layout `figura` com o campo
  `imagem` (nunca `src`). **As imagens são fornecidas pelo autor**; se o arquivo não existir,
  deixar o slide sem a imagem e avisar — não inventar nem baixar de loja.

## Blocos

Ordem dos instrumentos: nível cognitivo → desenvolvimento e funcionalidade → sinais do
espectro e o que mais está presente. Orçamento do bloco de instrumentos: **15 a 17 min**,
cerca de 3 slides por instrumento (ficha com capa e faixa etária · estrutura e resultados ·
papel na avaliação); PROTEA-R, BINAUT e EFA, já vistos na aula 02, ficam em 1 slide de
retomada. O tempo economizado vai para RIAS-2 e Battelle 3, que a turma ainda não viu.

| # | Bloco | Primeiro slide no deck | Tempo | Capítulo | Status no deck |
|---|---|---|---|---|---|
| 1 | Abertura e introdução do tema | capa | 7–15 min | [`01`](docs/01-abertura-e-introducao.md) | pronto |
| 2 | RIAS-2 | *(vem antes de "Battelle 3 · Inventário de Desenvolvimento Infantil")* | — | [`02`](docs/02-rias-2.md) | **pendente** |
| 3 | Battelle 3 | "Battelle 3 · Inventário de Desenvolvimento Infantil" | — | [`03`](docs/03-battelle-3.md) | pronto (9 slides; ver nota) |
| 4 | EFA e EIFE | "EFA · Escala de Funcionamento Adaptativo" | — | [`04`](docs/04-efa-eife.md) | pronto |
| 5 | PROTEA-R (retomada) | "PROTEA-R · de onde vem a observação" (último: "O que o PROTEA-R acrescenta ao TEA e ao TDI") | ~2,5 min | [`05`](docs/05-protea-r.md) | pronto (5 slides, acima do orçamento; ver nota) |
| 6 | BINAUT (retomada) | "BINAUT · de onde vem o modelo binário" (último: "O que o BINAUT acrescenta ao TEA e ao TDI") | ~2,5 min | [`06`](docs/06-binaut.md) | pronto (6 slides, acima do orçamento; ver nota) |
| 7 | TriC e TriA | "TriC · Triagem de problemas emocionais e comportamentais em crianças" (último: "O que o TriC acrescenta ao TEA e ao TDI") | — | [`07`](docs/07-tric-tria.md) | pronto (4 slides) |
| 8 | Fechamento, encerramento e revisão | depois dos slides do bloco 7 | 2–3 min | [`08`](docs/08-encerramento-e-revisao.md) | **pendente** |

> **Migração em andamento.** Os capítulos 02 e 05 a 08 já estão em `docs/` (fonte da
> verdade). Os capítulos 01, 03 e 04 ainda estão no formato antigo, um arquivo por etapa nesta
> pasta (`01-abertura-e-introducao.md`, `03-battelle-3.md`, `04-efa-eife.md`), com o conteúdo
> misturado ao briefing; o arquivo em `docs/` desses três é um **ponteiro** para o antigo até
> a conversão. O deck desses três blocos já existe e não deve ser reescrito.

### Notas por bloco (orçamento e instruções de construção)

- **2 · RIAS-2** — Instrumento novo para a turma: pode passar dos ~3 slides do orçamento.
  Entra logo depois da introdução, antes do Battelle 3. Não aparecem no slide: os três
  subtestes sem nome em português e os índices da edição brasileira.
- **3 · Battelle 3** — O desenho (ficha, aplicações, um slide por domínio, procedimentos,
  importância) já deu 9 slides, acima do orçamento. Se o tempo apertar, cortar é decisão do
  autor.
- **4 · EFA e EIFE** — O foco é o EFA (reutilizar o slide da aula 02); o EIFE é comentado como
  a versão para adolescentes, adultos e idosos.
- **5 · PROTEA-R** e **6 · BINAUT** — Um slide de retomada para cada, com `<Fonte>` igual à da
  aula 02 e nenhum número divergente. O ângulo da aula 03 entra como raciocínio do autor,
  separado do que o fabricante afirma. A leitura pela idade de desenvolvimento só entra se
  confirmada no manual. **Referência permitida:** os slides já feitos na aula 02
  (`aulas/aula-02-avaliacao-tea-tdah.md`) podem e devem ser usados como modelo e fonte de
  estrutura e dados; os capítulos de `docs/` só acrescentam o que é novo desta aula.
- **5 e 6 · decisão do autor** — Em vez de 1 slide por instrumento, seguiram o molde da aula 02 (ficha, estrutura, itens/escore ou escalas/áreas), mais um slide breve de fundamentação teórica e um de papel na avaliação. Cortar é decisão do autor.
- **7 · TriC e TriA** — Os últimos do bloco de instrumentos. Não são específicos de TEA nem de
  TDI: apresentar como rastreio de comorbidade. A lacuna de **6 a 17 anos** aparece no slide,
  não só nas notas. Itens do TriA: "89 itens (Vetor)" ou fora do slide; nunca 76. O foco é o TriC e o Tria mensionado como a versão para adultos.
- **8 · Fechamento** — (1) slide de fechamento do bloco de instrumentos, com o aviso e a tabela
  da justificativa (bloco 1) retomada; (2) encerramento; (3) revisão do deck inteiro, sem
  reescrever conteúdo de outros blocos: apontar, ou corrigir só o que for de forma.

## Protocolo de trabalho

1. Leia este arquivo, o capítulo do bloco em `docs/` e `docs/glossario.md`.
2. Mexa **só** no trecho do deck que o bloco pede. Slide novo entra na posição da tabela.
3. Rode `npm run lint`.
4. Ao terminar, liste: (a) slides criados, (b) lacunas `[conferir no manual]` que ficaram de
   fora, (c) imagens que faltaram.
5. Se o conteúdo do bloco mudar, mude o capítulo em `docs/` **primeiro**; o slide só resume.

## Revisão geral (bloco 8)

- Somar o tempo estimado de cada bloco: entre 25 e 35 min; instrumentos entre 15 e 17.
- Contar slides do bloco de instrumentos contra o orçamento.
- Todo slide de instrumento termina com `<Fonte>`; toda sigla tem glosa nas notas.
- Nenhum trecho `[conferir no manual]` chegou ao slide.
- O aviso "nenhum instrumento diagnostica sozinho" está presente.
- `npm run lint` limpo; listar as capas que ainda faltam em `aulas/public/aula-03/`.
