# Aula: Testes para a avaliação do TEA e do TDI

## Contexto

Você é um professor de avaliação neuropsicológica dando uma aula de 25 a 35 minutos sobre os
principais instrumentos psicológicos usados na avaliação do TEA (transtorno do espectro
autista) e do TDI (transtorno do desenvolvimento intelectual, ou deficiência intelectual no
DSM-5).

O público são profissionais que já atuam na área. O objetivo não é exaurir o assunto, mas
também não ser superficial: apresentar o que cada instrumento mede, como é montado, o que
devolve e **onde entra no raciocínio clínico**.

Arquivo da aula: `aulas/aula-03-testes-tea-tdi.md`. Convenções, layouts, componentes e
armadilhas do Slidev estão no `CLAUDE.md` e em `docs/design-system.md`; este arquivo só trata
do conteúdo.

## Regras de conteúdo desta aula

- **Os dados dos instrumentos abaixo vêm de fontes públicas da Vetor Editora (páginas de
  produto e blog), e não do manual técnico.** Tudo o que estiver marcado `[conferir no
  manual]` não foi confirmado e **não vai para o slide** sem conferência. Não preencher lacuna
  por dedução.
- Cada slide de instrumento termina com `<Fonte>` (manual ou página do produto). Siglas e
  termos técnicos vão glosados no comentário de notas do slide, como na aula 02.
- **Reaproveitar a aula 02** (`aulas/aula-02-avaliacao-tea-tdah.md`) para PROTEA-R, BINAUT e
  EFA: mesma estrutura de cartões (objetivo · público · aplicação · resultado), os mesmos
  números, sem reescrever. Aqui eles ganham só o ângulo da aula 03 (ver cada seção).
- Capa do manual: arquivo em `aulas/public/`, nome `capa-<instrumento>.<ext>`, usado com o
  layout `figura` (campo `imagem`, não `src`). **As imagens são fornecidas pelo autor**; se o
  arquivo não existir, não inventar nem baixar de loja: deixar o slide sem a imagem e avisar.

## Roteiro da aula

Tempo total: 25 a 35 minutos.

### 1. Apresentação

Tempo estimado: 2 a 5 minutos.

Minha apresentação, agradecimentos e o tema da aula.

### 2. Introdução do tema

Tempo estimado: 5 a 10 minutos.

Introduzir os dois transtornos pelas semelhanças e diferenças.

#### 2.1 Semelhanças

- Ambos podem apresentar atrasos globais do desenvolvimento significativos.
- Padrões comportamentais restritos e repetitivos, como a estereotipia, aparecem nos dois.
- No TDI há sempre rebaixamento intelectual; no TEA ele também é frequente: **37,9% das
  crianças norte-americanas de 8 anos com TEA** (Maenner et al., 2023, *MMWR*, rede ADDM,
  vigilância de 2020).

#### 2.2 Diferenças

- No TDI, a reciprocidade social **acompanha o nível de desenvolvimento**: desenvolvimento
  socioemocional e relações sociais compatíveis com a idade mental.
- No TEA, o prejuízo social é **desproporcional** ao nível de desenvolvimento geral. Esse é o
  critério que a aula 02 já usa (comunicação social abaixo do esperado para o nível geral).

#### 2.3 Justificativa dos testes selecionados

Em ambos os casos é preciso uma boa compreensão do **desenvolvimento global**. Os dois
diagnósticos exigem separar três coisas, e cada instrumento da aula responde a uma delas:

| Pergunta | Instrumentos |
|---|---|
| Qual o nível cognitivo? | RIAS-2 |
| Como está o desenvolvimento, domínio a domínio, e o que a criança faz sozinha? | Battelle 3, EFA, EIFE |
| Há sinais do espectro, e o que mais está presente? | PROTEA-R, BINAUT, TriC, TriA |

Dado técnico que sustenta o argumento: o DSM-5 define TDI por **déficits intelectuais e
adaptativos juntos**, com início no período do desenvolvimento, e a gravidade se classifica
pelo funcionamento adaptativo, não pelo QI. Daí o peso das escalas adaptativas na aula.

### 3. Apresentação dos instrumentos

Tempo estimado: 15 a 17 minutos (~2,5 minutos por instrumento).

Para cada instrumento:

- Nome + capa do manual + faixa etária de aplicação
- O que avalia + resumo da fundamentação teórica
- Estrutura do teste + forma de aplicação e correção (escala, tarefas etc.): informar
  superficialmente, sem ensinar a aplicar
- Resultados possíveis de extrair
- Importância na avaliação do TEA e do TDI

**Orçamento de slides.** Cerca de 3 slides por instrumento (ficha com capa e faixa etária ·
estrutura e resultados · papel na avaliação), perto de 18 slides no bloco. PROTEA-R, BINAUT e
EFA, já vistos na aula 02, ficam em **1 slide de retomada** cada. O tempo economizado vai para
RIAS-2 e Battelle 3, os dois que a turma ainda não viu.

**Aviso para o fim do bloco.** TriC, TriA e EIFE não são específicos de TEA nem de TDI: a
página da Vetor não os associa a esses quadros. Apresentá-los pelo que são (rastreio de
comorbidade e funcionalidade) e dizer isso à turma. Nenhum instrumento da aula diagnostica.

### 4. Encerramento

Tempo estimado: 2 a 3 minutos.

Últimas considerações, meus contatos e agradecimento.

## Instrumentos

Editora de todos: Vetor Editora (grupo Giunti Psychometrics). Uso restrito a psicólogos, salvo
indicação em contrário. Situação no SATEPSI: `[conferir no manual]` para todos, antes de
afirmar "aprovado" em slide.

### RIAS-2 · Escala Reynolds de Avaliação da Inteligência, 2ª edição

**Nome + capa do manual + faixa etária de aplicação**

- Reynolds Intellectual Assessment Scales, Second Edition. Autores: Cecil R. Reynolds e Randy
  W. Kamphaus. Adaptação brasileira: Fabián Javier Marín Rueda.
- **3 anos a 20 anos e 11 meses** (a edição original vai até 94 anos; a brasileira, não).
- Capa: `aulas/public/capa-rias-2.*` (a fornecer).
- Normatização brasileira com mais de 3 mil participantes, mais de 250 por região.

**O que avalia + resumo da fundamentação teórica**

- Inteligência geral (*g*), a partir da inteligência **verbal (cristalizada)** e **não verbal
  (fluida)**; mais **memória** (verbal e não verbal) e **velocidade de processamento** (verbal
  e visual).
- Modelo hierárquico: fator geral, habilidades amplas, processos específicos. Fundamentação
  detalhada e relação com o modelo CHC: `[conferir no manual]`.

**Estrutura do teste + forma de aplicação e correção**

- **8 subtestes**, em ordem fixa, definida pelo Formulário de Registro. Individual, presencial,
  sessão única de **40 a 45 minutos**. Sem materiais manipuláveis.
- Subtestes confirmados pelos livros de estímulos: Item Diferente (OIO), O que está faltando?
  (WHM), Memória Não Verbal (NVM), Tarefa de Nomeação Rápida (SNT), Busca Rápida de Imagens
  (SPS). Os outros três (na edição original: Verbal Reasoning, Guess What e Verbal Memory)
  têm nome em português `[conferir no manual]`.
- Pontuação atribuída durante a aplicação; os brutos entram na plataforma VOL. A licença de
  correção on-line vem no kit.
- Kit: Livro de Instruções (Vol. 1), Formulários de Registro, Livros de Estímulos 1 a 5 (Vols.
  2 a 6), Livro de Avaliação (Vol. 7), Guia Rápido (Vol. 8), prancheta.

**Resultados possíveis de extrair**

- QI, percentil, escore Z, escore T, NCEs e stanines; cálculo de **discrepâncias** entre
  escores e de **mudança confiável**.
- Na edição original, os índices são: Inteligência Verbal (VIX), Não Verbal (NIX), Geral
  (CIX), Memória (CMX) e Velocidade de Processamento (SPI). Nomes e composição na edição
  brasileira: `[conferir no manual]`.

**Importância na avaliação do TEA e do TDI**

- A página do produto **não menciona TEA nem TDI**. O que se sustenta sem extrapolar:
  - TDI: fornece o critério de funcionamento intelectual (o DSM-5 usa cerca de 2 desvios-padrão
    abaixo da média, com avaliação clínica e adaptativa junto).
  - TEA: separa o desempenho verbal do não verbal, e o índice de velocidade permite ver se o
    baixo rendimento é de raciocínio ou de ritmo.
  - Aplicação sem material manipulável e de curta duração; ajuste ao paciente com pouca
    linguagem: `[conferir no manual]`.

### Battelle 3 · Inventário de Desenvolvimento (BDI-3)

> A versão comercializada no Brasil é a **3ª edição** (Battelle 3 / BDI-3). Os dados abaixo
> são dela; números de edições anteriores (como os 450 itens do BDI-2) **não** valem aqui.

**Nome + capa do manual + faixa etária de aplicação**

- Battelle 3 · Inventário de Desenvolvimento Infantil. Autor: Jean Newborg. Adaptação
  brasileira: Leandro Fernandes Malloy-Diniz e Débora Marques de Miranda. Validação brasileira
  com mais de 2 mil crianças.
- **Do nascimento a 7 anos e 11 meses** (blog da Vetor).
- Capa: `aulas/public/capa-battelle-3.*` (a fornecer).

**O que avalia + resumo da fundamentação teórica**

- Cinco domínios: **adaptativo, socioemocional, comunicação, motor (grosso e fino) e
  cognitivo**. Mapeia as habilidades já consolidadas e as áreas que se beneficiam de estímulo.
  Segundo a Vetor, **não tem caráter classificatório**.
- Fundamentação teórica (marcos do desenvolvimento, modelo de domínios) e número de itens:
  `[conferir no manual]`. A Vetor não os informa.

**Estrutura do teste + forma de aplicação e correção**

- Individual e presencial. Cada item indica o método: **tarefa estruturada, observação ou
  entrevista** com pais e cuidadores. Duração de **10 a 90 minutos**, conforme a idade e a
  extensão (aplicar todos os domínios ou só alguns).
- Um Livro de Aplicação por domínio (Vols. 2 a 6), Cartões de Apresentação, Caderno do Aluno,
  Formulários de Registro e kit de manipuláveis. Valor de tabela da coleção, na página da
  Vetor: R$ 6.700 (útil para explicar por que é um instrumento de serviço, não de consultório
  pequeno; opcional).
- Correção manual ou pela VOL: soma os brutos e gera escores escalonados e **quociente de
  desenvolvimento**.

**Resultados possíveis de extrair**

- Resultado por domínio e total, escores escalonados, quociente de desenvolvimento e
  **intervalos de confiança**. O perfil entre os cinco domínios é a leitura central.
- Triagem breve (BDI-3 Screening): a página não a menciona. `[conferir no manual]`.

**Importância na avaliação do TEA e do TDI**

- A página do produto cita uso em **avaliação de autismo e atraso global**, acompanhamento de
  **deficiência intelectual**, intervenção precoce e PEI.
- Argumento de aula: é o instrumento que dá o **desenvolvimento global** do item 2.3, em
  crianças pequenas demais ou com linguagem insuficiente para testes de QI. O perfil
  desigual entre domínios (socioemocional e comunicação abaixo do cognitivo) é o que diferencia
  TEA; o perfil **uniformemente rebaixado**, o que sugere TDI. Isso é raciocínio clínico, não
  afirmação do fabricante.

### EFA · Escala de Funcionamento Adaptativo, e EIFE · Escala de Independência Funcional e Expressiva

Mesma dupla de papel: o que a pessoa faz sozinha. Divididas por idade. **EFA: reutilizar o
slide da aula 02** (6 a 15 anos, relato parental, 50 itens, ~30 min, domínios conceitual,
social e prático, correção na VOL). Falta só o EIFE.

**Nome + capa do manual + faixa etária de aplicação**

- **EIFE**: Escala de Independência Funcional e Expressiva. Autora: Sabrina Martins Barroso.
  **12 a 98 anos** (adolescentes, adultos e idosos), a partir da percepção de **cuidadores ou
  responsáveis**. Capa: `aulas/public/capa-eife.*` e `capa-efa.*` (a fornecer).
- A sobreposição entre EFA (até 15) e EIFE (a partir de 12) é de 12 a 15 anos: dizer à turma.

**O que avalia + resumo da fundamentação teórica**

- EIFE: duas dimensões, **autonomia nas atividades de vida diária** e **capacidade de
  expressão e comunicação funcional**. Fundamentação teórica: `[conferir no manual]`.
- EFA: funcionamento adaptativo nos três domínios do DSM-5 (aula 02).

**Estrutura do teste + forma de aplicação e correção**

- EIFE: respondida por cuidador, em papel ou on-line pela VOL, individual ou coletiva,
  **~10 minutos**. Pode ser feita como entrevista se o cuidador tiver baixa escolaridade. Correção
  manual (soma dos itens) ou digital, com relatório. Número de itens: `[conferir no manual]`.

**Resultados possíveis de extrair**

- EIFE: **níveis** de independência funcional e expressiva. EFA: escore z, padronizado,
  percentil e classificação por domínio e global (aula 02).

**Importância na avaliação do TEA e do TDI**

- Para o TDI, o DSM-5 exige o déficit adaptativo, e a gravidade é dada por ele. Por isso o
  EFA, descrito pela Vetor como apoio ao diagnóstico de DI e TEA, é o ponto central.
- Para o TEA, o prejuízo adaptativo costuma ficar abaixo do QI (aula 02).
- EIFE: a página **não associa o instrumento a TEA nem a TDI** (cita doenças crônicas, sequelas
  neurológicas, trauma e degenerativas). Apresentá-lo como a opção de **funcionalidade para
  adolescentes e adultos** e dizer que o uso em TDI e TEA adulto depende de evidência no
  manual.

### TriC / TriA · triagens de psicopatologia

> O prompt original dizia "TRIC/TRIA". Grafia da Vetor: **TriC** e **TriA**.

**Nome + capa do manual + faixa etária de aplicação**

- **TriC**: Triagem de Problemas Emocionais e Comportamentais em Crianças. Autores: Lucas de
  Francisco Carvalho e Tatiana Pontrelli Mecca. **2 a 5 anos** (primeira infância).
- **TriA**: Triagem de Psicopatologia para Adultos. Autores: Lucas de Francisco Carvalho e
  André Pereira Gonçalves. **18 a 70 anos**.
- Capas: `aulas/public/capa-tric.*` e `capa-tria.*` (a fornecer).
- **Faixa sem cobertura: 6 a 17 anos.** Dizer à turma.

**O que avalia + resumo da fundamentação teórica**

- TriC: três escalas, **internalizante** (medos, tristeza, retraimento), **externalizante**
  (agitação, agressividade, desobediência) e **pró-social** (empatia, colaboração, vínculo).
  Fundamentação teórica: a página só diz "validado cientificamente". `[conferir no manual]`.
- TriA: modelo dimensional **HiTOP**. Três fatores: **externalizante, transtornos do pensamento
  e internalizante**, mais um índice de **incongruência**.

**Estrutura do teste + forma de aplicação e correção**

- TriC: ~10 minutos, respondido por responsáveis, profissionais ou cuidadores, em papel ou
  on-line (VOL). Pode-se aplicar só o domínio pró-social. Correção **100% pela VOL**.
- TriA: **autorrelato**, 15 minutos, papel ou on-line. **89 itens** segundo a Vetor (revendedores
  citam 76; conferir). Correção pela VOL.

**Resultados possíveis de extrair**

- TriC: fatores de **risco** e de **proteção**, por domínio, com normas brasileiras da primeira
  infância; relatório interpretativo automático.
- TriA: pontuação por fator, índice de incongruência (consistência das respostas) e
  interpretação clínica. A Vetor diz que **não categoriza nem diagnostica**.

**Importância na avaliação do TEA e do TDI**

- As páginas **não mencionam TEA nem DI**. Papel em aula: rastrear o que costuma **acompanhar**
  os quadros (ansiedade, agitação, desregulação), para que o relatório não termine no
  diagnóstico principal. Que a comorbidade é frequente: citar fonte (DSM-5 já traz em
  "especificadores"; aula 02).
- Limite a declarar: nenhum dos dois mede sintomas do espectro; **o pró-social do TriC** é
  o único recorte próximo a competência social, e não substitui avaliação específica.
- O TriA tem um fator de pensamento: observar com cuidado, pois não é desenhado para o
  espectro.

### PROTEA-R

**Reutilizar da aula 02** (slides "PROTEA-R · a observação clínica sistematizada", "A sala é
parte do instrumento", "Os cinco itens críticos" e "E o escore que sai dos cinco"). Dados:
Bosa e Salles (orgs.); **24 a 60 meses**, sobretudo não verbais; **3 sessões de ~45 min** em
dias diferentes (brincadeira livre ≈15 min + semiestruturada ≈30 min); 17 itens em 3 áreas,
com Escala de Qualidade (A–E) e de Frequência (1–3); cinco itens críticos; escore 9–15 =
risco, 1–8 = risco relativo, 0 = ausência; reavaliação a cada 6 meses no mínimo; sistema de
**rastreamento**, não diagnóstico.

**Ângulo da aula 03**: é o instrumento que **não depende de linguagem**. Em criança pequena
com TDI e linguagem ausente, a atenção compartilhada, a imitação e o faz de conta ajudam a ver
se a reciprocidade está proporcional à idade mental ou abaixo dela. (Raciocínio clínico:
confirmar que o manual orienta a leitura pela idade de desenvolvimento, não pela cronológica.
`[conferir no manual]`.)

### BINAUT

**Reutilizar da aula 02** (slides "BINAUT · a entrevista com os responsáveis", "Duas escalas,
dois momentos", "A regra do ponto de corte" e "As cinco áreas do desenvolvimento").
Dados: Jorge, L. M.; **2 a 12 anos**; entrevista semiestruturada com os responsáveis, ~2h30
na versão completa; Escala I (12 itens gerais, 30 a 40 min, frequência e intensidade) e Escala
II (itens finos por idade, graus leve/moderado/severo); escore T e percentil; ponto de corte:
7–8 itens = moderada a forte, 9–12 = forte; cinco áreas.

**Ângulo da aula 03**: a Escala II, indicada para **menores de 5 anos**, "separa atípico de
falha desenvolvimental", o que é a pergunta central TEA × atraso/TDI. A aula 02 já traz essa
frase. **Atenção ao nome**: o prompt usa "BINAUT-II"; na aula 02 o instrumento é BINAUT, com as
Escalas I e II. Confirmar se "II" se refere à Escala II ou a uma edição. `[conferir no
manual]`.

## Fontes consultadas (páginas da Vetor Editora, consulta em 2026-11-19)

- Coleção RIAS-2: vetoreditora.com.br/colecao-rias-2-escala-reynolds-inteligencia-72189
- Coleção Battelle 3: vetoreditora.com.br/colecao-battelle-3-inventario-de-desenvolvimento-71956
  e blog.vetoreditora.com.br (post sobre o lançamento do Battelle 3)
- Coleção TriC: vetoreditora.com.br/produto/colecao-tric-triagem-de-problemas-emocionais-e-comportamentais-em-criancas-71542
- Coleção TriA: vetoreditora.com.br/produto/colecao-tria-triagem-de-psicopatologia-para-adultos-71543
- Coleção EIFE: vetoreditora.com.br/produto/colecao-eife-escala-de-independencia-funcional-e-expressiva-71793
- Maenner et al. (2023), *MMWR Surveill Summ* 72(2): prevalência de TEA, ADDM 2020.
