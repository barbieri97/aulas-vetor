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
armadilhas do Slidev estão no `AGENTS.md` e em `docs/design-system.md`; este arquivo só trata
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

Para cada instrumento seguir o que foi descrito no tópico de Instrumentos

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
- Publico alvo: **Do nascimento a 7 anos e 11 meses**.
- Capa: `aulas/public/capa-battelle-3.*` (a fornecer).

**Aplicações e objetivos da Battelle**

A Battelle pode ser usado para uma variedade de contextos, desde de propóstitos clinicos a escolares, alguns destes objetivos são:

- Avaliação da criança com desenvolvimento típico
- Avaliação e identificação de crianças com deficiência ou atrasos no desenvolvimento
- Planejamento e fornecimento de instruções e intervenções
- Monitoração de progresso
- Avaliação de programas que atendem crianças.

**Dominios e subdominios avaliados pela Battelle**

Para os slides desse dominio eu penso em um slide para cada dominio. Com um titulo e uma descrição breve para o dominio e abaixo o mesmo padrão com cards diferentes para cada subdominio, acrescentando bullets com os exemplos nos subdominios.

1. Domínio Adaptativo (ADP)

Este dominio avalia a capacidade da criança utilzar as informações e habilidades adquiridas nos outros dominios como instrumento de adaptação ao seu cotidiano. Inclui habilidades de Autocuidado e Responsabilidade Social

1.1 Autocuidado
Capacidade da criança de realizar as tarefas associadas a rotina diária com autonomia.

envolvem:

- Alimentação
- Vestir
- Uso do banheiro
- Higiene Pessoal
- Sono

1.2 Responsabilidade Pessoal
Os itens desse subdominio avaliam a capacidade da criança de usar comportamentos apropriados, cuidar de pertences pessoais e lidar com dinheiro.

2. Dominio Socioemocional (SE)
As habilidades socioemocionais permitem que uma criança se envolva em interações sociais significativas com pares e adultos e desenvolva o seu autoconceito e senso de papel social, avalia habilidades como: autoconsciência, autogestão, consciência social, relacionamentos positivos, tomada de decisão


2.1 Interação com adultos
Nesse subdominio se avalia o a qualidade e frequencia da interação com adultos como: Apego infantil, interação com adultos, resposta e inicio de contato, uso do adulto como recuros para resolver problemas.

Exemplos:

- Reage à atenção positiva de adultos e à retirada de atenção;
- Imita as expressões faciais de um adulto familiar;
- Segue as instruções de um adulto.

2.2 Interação com pares
Este subdominio avaliam a qualidade e frequência das interações de uma criança com seus pares, envolve capacidade de formar amizades, responder e iniciar contatos sociais, interagir em pequenos grupos, cooperação.

Exemplos

- Reveza e compartilha voluntáriamente;
- Envolve-se em brincadeiras de faz de conta coordenadas;
- Usa colegas apropriadamente como recursos.

2.3 Autoconceito e Papel Social
Esse subdominio avalia a capacidade da criança em: Autoconsciência, conhecimento pessoal, autoestima e orgulho, moral, sensibilidade a necessidade dos outros, Habilidades de enfrentamento

Exemplos:

- Expressa emoções;
- Transita de um ambiente ou atividade para outro;
- Faz comparações sociais.


3. Dominio Comunicação (COM)
Mensura a eficácia com que crianças recebem e expressam informações e ideias por meios verbais e não verbais

3.1 Comunicação receptiva
Na comunicação receptiva avalia-se a capacidade de discriminar, reconhecer e entender sons e palavras

Exemplos:

- Responde a diferentes tons de voz;
- Responde a um "Não";
- Segue comandos verbais de duas etapas;
- Lê dicas não verbais de outras pessoas.

3.2 Comunicação Expressiva 
Avalia a habilidade de de produzir sons, palavras ou gestos para transmitir informações a outras pessoas.

Exemplo:

- Estabelece sons labiais;
- Usa gestos para indicar desejos ou necessidades;
- Comunica-se usando frases simples;
- Fala sobre coisas que podem ser.

4. Dominio Motor (MOT)
Avalia a capacidade da criança em usar os musculos grandes e pequenos do corpo

4.1 Motricidade Grossa
Avalia o desenvolvimento dos grandes sistemas musculares em habilidades de locomoção, como andar, correr e pular, e movimentos coordenados, como arremessar.

Exemplos:

- Junta as mãos na linha média;
- Sobre e desce as escadas, alternando os pés, sem ajuda;
- Salta para a frente em um pé sem apoio;
- Pega uma bola de tênis.

4.2 Motricidade Fina
Avalia o desenvolvimento e controle da coordenação muscular fina que permitem a execução de tarefas cada vez mais complexas.

Exemplos:

- Pega um objeto pequneo com vários dedos opostos ao polegar;
- Vira páginas de um livro;
- Corta papel com tesoura;
- Dá um único nó simples.

4.3 Percepção motora
Mensura a habilidade de coordenar habilidades motoras e perceptuais para executar tarefas como empilhar blocos, colocar argolas em um suporte, copiar formas.

Exemplos:

- Coloca dois objetos em um frasco;
- Empilha blocos verticalmente;
- Copia letras, palavras e números.

5. Dominio Cognitivo (COG)
Este dominio mensura as habilidades e capacidades comumentes chamadas de mentais ou intelectuais. Envolvem atividades como atender, perceber, processar informações, lembrar, pensar e saber.

5.1 Atenção e Memória
Avalia a capacidade da criança em atender visual e auditivamente a estimulos do ambiente e recuperar informações de curto e longo prazo.

Exemplos:

- Segue estimulos auditivos e visuais;
- Olha, aponta, nomeia imagens em um livro;
- Localiza itens ocultos em uma imagem complexa;
- Classifica, mediante comando, por cor, forma e tamanho.

5.2 Raciocínio e Habilidades Acadêmicas
Avalia componenentes do raciocínio critico para perceber, identificar e resolver problemas; analisar e avaliar elementos de um contexto; Identificar ausências, contradições e inconsistências; julgamento de ideias, processos e produtos. Além também de avaliar habilidades acadêmicas básicas.

Exemplos:

- Nomeia e combina cores;
- Demonstra habilidades nas 4 operações matemáticas;
- Lê palavras com grafia irregular;
- Identifica letras.

5.3 Percepção e Conceitos
Avalia as interações sensoriais e motoras de uma criança com o seu ambiente e a capacidade de conceituar e discriminar caracteristicas de objetos como tamanho, forma e cor; desenhar relações entre eles e responder seletivamente entre eles.

Exemplos: 

- Compara objetos com base nas suas caracteristicas físicas;
- Identifica diversos tipos de texturas;
- Conhece o lado direito e esquerdo do corpo;
- Diferencia papéis sociaispresentes e futuros.

**3 procedimentos de aplicação**

O Battelle oferece 3 procedimentos de aplicação: Estruturado, Observação e Entrevista.

- Cada item tem pelo menos um desses tipos de aplicação.
- O Profissional é responsável por decidir quando usar cada um.
- é permitido realizar mais de um procedimento para o mesmo item.
- Mas é recomendado a utilizar, sempre que disponível o estruturado.

1. Estruturado
Neste o profissional faz a pontuação através da observação em ambiente controlado, com a utilização de estimulação e materiais padronizados pela Battelle.

2. Observação
Quando não for possivel a observação de um comportamento no ambiente estruturado, é possivel fazer a observação em ambiente natural da criança. 

- Recomenda-se que a observação se extenda ao longo de uma semana.
- Se não puder ter esse contato, recomenda-se usar a entrevista.

3. Entrevista
Para muitos itens da area adaptativa e/ou sócioemocional a informação só fica acessivel através de entrevistas.

- Pode ser realizada com os pais, responsáveis ou professores.


**Importância na avaliação do TEA e do TDI**

O Battelle nos permite ter uma ótima compreensaão do desenvolvimento da criança, principalmente quando utilizamos as diversas fontes de informações. Com esses dados, conseguimos comparar as areas de desenvolvimento e avaliar se trata-se de um atraso global no desenvolvimento ou de algumas areas específicas, auxiliando na nossa compreensão das potencialidades e dificuldades.

### EFA · Escala de Funcionamento Adaptativo, e EIFE · Escala de Independência Funcional e Expressiva

O foco será no EFA, o EIFE será comentado como a versão de adolescentes, adultos e idosos.

Mesma dupla de papel: o que a pessoa faz sozinha. Divididas por idade. **EFA: reutilizar o
slide da aula 02** (6 a 15 anos, relato parental, 50 itens, ~30 min, domínios conceitual,
social e prático, correção na VOL).

**Nome + capa do manual + faixa etária de aplicação**

- **EFA**: Escala de Funcionamento Adaptativo. Autoras: Thais Selau; Mônia Aparecida da Silva e Denise Ruschel Bandeira.
- **6 a 15 anos** (adolescentes, adultos e idosos), a partir da percepção de **cuidadores ou responsáveis**. 
- Capa: `aulas/public/aula-03/capa-eife.png` e `aulas/public/aula-03/capa-efa.png`.

**O que avalia + resumo da fundamentação teórica**

(Nesse tópico não é para transcrever direto para o slide, mas use esse texto como base para produzir o conteúdo de fundamentação teórica.)

O funcionamento adaptativo é entendido como um conjunto de habilidades práticas, conceituais e sociais que são aprendidas e executadas pelas pessoas em suas vidas diárias. Corresponde a capacidade da pessoa atingir o padrão da sua comunidade em termos de autonomia, independência pessoas e responsabilidade social em comparação com os seus pares de mesma idade e antecedentes socioculturais. Ou seja, trata-se de realizar as tarefas cotidianas sem avisos, suportes ou lembretes.

1. Dominio conceitual
Habilidades cognitivas essenciais, como a compreensão relacionada a conceitos acadêmicos e a capacidade de resolver problemas complexos.

2. Dominio social
abrange aspectos sociais da inteligência, incluindo a habilidade de se relacionar e interpretar sinais sociais de maneira adequada.

3. Dominio Prático
Capacidade de autogerenciamento e aprendizagem aplicado em atividades cotidianas, envolvem o autocuidado e a independência.

**Estrutura do teste + forma de aplicação e correção**

É um instrumento de heterorelato respondido pelo responsável (em formulário impresso ou online). A correção é online e traz como resultado o desempenho em cada uma das esferas mais um resultado geral do funcionamento adaptativo.

**Importância na avaliação do TEA e do TDI**

Funciona como uma medida rápida e complementar do funcionamento adaptativo da criança, ou seja, o quanto consegue aproveitar de seus recursos que possui para gerar adaptação ao seu contexto e realidade. No caso específico do TDI, a avaliação do funcionamento adaptativo faz parte dos critérios diagnósticos e o EFA nos auxilia na identificação do nível de comprometimento.

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
