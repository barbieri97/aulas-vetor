<!--
  agradecimento — o último slide: o obrigado e o contato de quem deu a aula.

  É a contracapa da `capa`: mesmo papel, mesma coluna de 62%, o título no
  mesmo corpo. O que muda é o que fica embaixo dele — o nome de quem falou e
  os canais por onde a turma continua perguntando.

  ---
  layout: agradecimento
  kicker: Obrigado
  title: Vamos continuar a conversa.
  nome: Fulana de Tal
  contatos:
    - { rotulo: Instagram, valor: "@fulana", href: "https://instagram.com/fulana" }
    - { rotulo: E-mail, valor: "fulana@exemplo.com", href: "mailto:fulana@exemplo.com" }
  nota: As dúvidas que ficaram cabem em qualquer um dos dois.
  ---

  `kicker`, `title`, `nome` e `nota` aceitam HTML. Em cada contato, `rotulo` é
  o nome do canal e `valor` é o que a turma copia; `href` é opcional e serve ao
  PDF, onde o contato vira link clicável — na projeção ele não muda nada.

  Um valor que começa com `@` PRECISA de aspas: `@` é caractere reservado do
  YAML e o build para sem ele.
-->
<script setup lang="ts">
// `title` chega pelo objeto `frontmatter`, não como prop — ver o comentário em capa.vue.
const props = defineProps<{
  kicker?: string
  nome?: string
  contatos?: { rotulo: string, valor: string, href?: string }[]
  nota?: string
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-agradecimento">
    <div class="texto">
      <p v-if="kicker" class="ds-kicker" v-html="kicker" />
      <h1 v-if="title" v-html="title" />
      <div class="ds-rule" />
      <p v-if="nome" class="nome" v-html="nome" />

      <ol v-if="contatos?.length" class="contatos">
        <li v-for="(contato, i) in contatos" :key="i">
          <span class="rotulo">{{ contato.rotulo }}</span>
          <a v-if="contato.href" class="valor" :href="contato.href">{{ contato.valor }}</a>
          <span v-else class="valor">{{ contato.valor }}</span>
        </li>
      </ol>

      <div class="corpo"><slot /></div>
    </div>

    <p v-if="nota" class="nota ds-small" v-html="nota" />
  </div>
</template>

<style scoped>
/* Centralizado como a capa, e pelo mesmo motivo: o slide é uma página inteira
   com pouca coisa dentro. O `padding-bottom` reserva a faixa da `nota` (que é
   `absolute` e não empurraria nada) e a do logotipo. */
.ds-agradecimento {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-bottom: 5rem;
}

/* A coluna do texto para antes da marca-d'água, que ocupa a faixa direita. */
.texto {
  max-width: 62%;
}

/* O corpo da capa, não o do destaque: a coluna aqui tem a mesma largura da
   capa, e 54px quebrariam o título em linhas curtas demais. */
.ds-agradecimento :deep(h1) {
  margin: 0;
  padding: 0;
  font-size: 2.9rem;
  line-height: 1.06;
}

/* A régua vem DEPOIS do título, como na capa — então o fio automático do h1
   sobra e sairia dobrado. */
.ds-agradecimento :deep(h1::after) {
  display: none;
}

.nome {
  max-width: none;
  margin: 0;
  font-family: var(--ds-font-serif);
  font-size: var(--ds-text-xl);
  line-height: var(--ds-leading-tight);
}

/* Os fios entre contatos são os mesmos do `fecho`: é a mesma família de slide,
   e a lista se lê do mesmo jeito — uma linha de cada vez.

   É um `<ol>` como as outras listas do DS, e não um `<ul>`, porque `base.css`
   dá a todo `ul > li` um quadrado de ouro e um recuo de 1,5em — que aqui
   apareceriam por cima do rótulo. */
.contatos {
  display: grid;
  gap: 0;
  max-width: none;
  margin: var(--ds-space-5) 0 0;
  padding: 0;
  list-style: none;
}

.contatos li {
  display: flex;
  align-items: baseline;
  gap: var(--ds-space-4);
  margin: 0;
  padding: var(--ds-space-3) 0;
  border-top: var(--ds-border) solid var(--ds-rule);
}

.contatos li:last-child {
  border-bottom: var(--ds-border) solid var(--ds-rule);
}

/* Largura fixa para os rótulos alinharem em coluna, como numa ficha. */
.rotulo {
  flex: none;
  width: 7.5rem;
  color: var(--ds-accent-forte);
  font-size: var(--ds-text-xs);
  font-weight: 700;
  letter-spacing: var(--ds-tracking-kicker);
  text-transform: uppercase;
}

/* O contato é para ser COPIADO da projeção, não clicado: tinta cheia, corpo
   grande e nenhuma marca de link — o `href`, quando existe, serve ao PDF.
   Daí desfazer aqui o ouro e o fio que `base.css` dá a todo <a>. */
.valor {
  color: var(--ds-ink);
  border-bottom: 0;
  font-size: var(--ds-text-lg);
  font-weight: 600;
}

.corpo:not(:empty) {
  margin-top: var(--ds-space-5);
  color: var(--ds-muted);
}

/* O rodapé para em 35% da direita: dali para lá é o canto do logotipo. É a
   mesma faixa do `proximo` do `fecho`. */
.nota {
  position: absolute;
  left: 4.4rem;
  right: 35%;
  bottom: 1.9rem;
  max-width: none;
  margin: 0;
  padding-left: var(--ds-space-4);
  border-left: var(--ds-border-thick) solid var(--ds-ouro);
}
</style>
