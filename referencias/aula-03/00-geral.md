# Aula 03 · Contexto geral (ler antes de qualquer etapa)

> **Aviso:** o mapa e as regras gerais desta aula agora estão em `AGENTS.md`, e fontes em
> `docs/fontes.md`. Este arquivo vale só até os capítulos 01, 03 e 04 serem convertidos.

Este arquivo vale para **todas** as etapas. Cada etapa (`01-…` a `07-…`) traz só o seu
conteúdo e pressupõe que este aqui foi lido.

## Contexto

Você é um professor de avaliação neuropsicológica dando uma aula de 25 a 35 minutos sobre os
principais instrumentos psicológicos usados na avaliação do TEA (transtorno do espectro
autista) e do TDI (transtorno do desenvolvimento intelectual, ou deficiência intelectual no
DSM-5).

O público são profissionais que já atuam na área. O objetivo não é exaurir o assunto, mas
também não ser superficial: apresentar o que cada instrumento mede, como é montado, o que
devolve e **onde entra no raciocínio clínico**.

Arquivo da aula: `aulas/aula-03-testes-tea-tdi.md`. Convenções, layouts, componentes e
armadilhas do Slidev estão no `AGENTS.md` e em `docs/design-system.md`; os arquivos desta
pasta só tratam do conteúdo.

## Regras de conteúdo (valem para todas as etapas)

- **Os dados dos instrumentos vêm de fontes públicas da Vetor Editora (páginas de produto e
  blog), e não do manual técnico.** Tudo o que estiver marcado `[conferir no manual]` não foi
  confirmado e **não vai para o slide** sem conferência. Não preencher lacuna por dedução.
- Cada slide de instrumento termina com `<Fonte>` (manual ou página do produto). Siglas e
  termos técnicos vão glosados no comentário de notas do slide, como na aula 02.
- **Reaproveitar a aula 02** (`aulas/aula-02-avaliacao-tea-tdah.md`) para PROTEA-R, BINAUT e
  EFA: mesma estrutura de cartões (objetivo · público · aplicação · resultado), os mesmos
  números, sem reescrever. Aqui eles ganham só o ângulo da aula 03.
- Capa do manual: arquivo em `aulas/public/aula-03/`, nome `capa-<instrumento>.<ext>`, usado
  com o layout `figura` (campo `imagem: /aula-03/capa-<instrumento>.<ext>`, não `src`). **As
  imagens são fornecidas pelo autor**; se o arquivo não existir, não inventar nem baixar de
  loja: deixar o slide sem a imagem e avisar.

## Escopo de cada etapa

- Mexer **só** no trecho do deck que a etapa pede. Não reescrever slides de etapas anteriores.
- Novos slides entram **depois** do último slide já existente, na ordem do roteiro abaixo,
  salvo instrução contrária na etapa.
- Ao terminar: `npm run lint`, e listar no fim da resposta (a) os slides criados, (b) as
  lacunas `[conferir no manual]` que ficaram de fora, (c) as imagens que faltaram.

## Roteiro e tempos (visão geral)

Tempo total: 25 a 35 minutos.

| Etapa | Arquivo | Bloco | Tempo |
|---|---|---|---|
| 1 | `01-abertura-e-introducao.md` | Apresentação + introdução do tema | 7 a 15 min |
| 2 | `02-rias-2.md` | RIAS-2 | |
| 3 | `03-battelle-3.md` | Battelle 3 | |
| 4 | `04-efa-eife.md` | EFA e EIFE | 15 a 17 min no bloco de instrumentos |
| 5–8 | já migrados para `docs/05` a `docs/08` | PROTEA-R, BINAUT, TriC/TriA, encerramento | ver `AGENTS.md` |

**Orçamento de slides do bloco de instrumentos.** Cerca de 3 slides por instrumento (ficha com
capa e faixa etária · estrutura e resultados · papel na avaliação), perto de 18 slides no
bloco. PROTEA-R, BINAUT e EFA, já vistos na aula 02, ficam em **1 slide de retomada** cada. O
tempo economizado vai para RIAS-2 e Battelle 3, os dois que a turma ainda não viu.

A ordem dos instrumentos segue a tabela da justificativa (etapa 1): nível cognitivo →
desenvolvimento e funcionalidade → sinais do espectro e o que mais está presente.

## Fontes consultadas (páginas da Vetor Editora, consulta em 2026-11-19)

- Coleção RIAS-2: vetoreditora.com.br/colecao-rias-2-escala-reynolds-inteligencia-72189
- Coleção Battelle 3: vetoreditora.com.br/colecao-battelle-3-inventario-de-desenvolvimento-71956
  e blog.vetoreditora.com.br (post sobre o lançamento do Battelle 3)
- Coleção TriC: vetoreditora.com.br/produto/colecao-tric-triagem-de-problemas-emocionais-e-comportamentais-em-criancas-71542
- Coleção TriA: vetoreditora.com.br/produto/colecao-tria-triagem-de-psicopatologia-para-adultos-71543
- Coleção EIFE: vetoreditora.com.br/produto/colecao-eife-escala-de-independencia-funcional-e-expressiva-71793
- Maenner et al. (2023), *MMWR Surveill Summ* 72(2): prevalência de TEA, ADDM 2020.
