// Visualizador LOCAL das referências. Não versionado (ver .git/info/exclude).
//
// Os .md do repositório são a fonte da verdade: nada é copiado. O VitePress usa a
// raiz do repositório como srcDir e só lê o que está liberado abaixo.
//   - AGENTS.md da raiz vira a página inicial (rewrites)
//   - docs/                       → "Raiz"
//   - referencias/aula-NN/        → uma seção por aula (AGENTS.md + docs/)
// A barra lateral é montada lendo o disco: aula nova em referencias/ aparece sozinha.

import { defineConfig, type DefaultTheme } from 'vitepress'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join, posix } from 'node:path'
import { fileURLToPath } from 'node:url'

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..')

/** Primeiro `# título` do arquivo (ignora o frontmatter); senão, o nome do arquivo. */
function titulo(arquivo: string, padrao: string): string {
  const texto = readFileSync(join(raiz, arquivo), 'utf8').replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
  const h1 = texto.match(/^#\s+(.+)$/m)
  return (h1 ? h1[1] : padrao).replace(/[`*]/g, '').trim()
}

const link = (arquivo: string) => '/' + arquivo.replace(/\.md$/, '')
const md = (dir: string) =>
  existsSync(join(raiz, dir)) ? readdirSync(join(raiz, dir)).filter((f) => f.endsWith('.md')).sort() : []

// Ordem dos arquivos de uma pasta docs/: index, capítulos numerados, depois apoio.
function ordenar(arquivos: string[]) {
  const peso = (f: string) => (f === 'index.md' ? 0 : /^\d/.test(f) ? 1 : 2)
  return [...arquivos].sort((a, b) => peso(a) - peso(b) || a.localeCompare(b))
}

const aulas = readdirSync(join(raiz, 'referencias'), { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^aula-\d+/.test(d.name))
  .map((d) => d.name)
  .sort()

const sidebar: DefaultTheme.Sidebar = {}
const nav: DefaultTheme.NavItem[] = [{ text: 'Início', link: '/' }]

// --- Raiz ---
const itensRaiz: DefaultTheme.SidebarItem[] = [
  { text: 'AGENTS.md (início)', link: '/' },
  ...(existsSync(join(raiz, 'README.md')) ? [{ text: titulo('README.md', 'README'), link: '/README' }] : []),
  ...ordenar(md('docs')).map((f) => ({ text: titulo(`docs/${f}`, f), link: link(`docs/${f}`) })),
]
sidebar['/docs/'] = [{ text: 'Raiz do repositório', items: itensRaiz }]
sidebar['/README'] = sidebar['/docs/']
nav.push({ text: 'Raiz', link: '/docs/design-system' })

// --- Uma seção por aula ---
for (const aula of aulas) {
  const base = `referencias/${aula}`
  const numero = aula.replace(/^aula-0*/, '')

  const docs = ordenar(md(`${base}/docs`)).map((f) => ({
    text: titulo(`${base}/docs/${f}`, f),
    link: link(`${base}/docs/${f}`),
  }))
  // Arquivos soltos na pasta da aula (formato antigo, em migração), exceto o AGENTS.md.
  const soltos = md(base)
    .filter((f) => f !== 'AGENTS.md')
    .map((f) => ({ text: titulo(`${base}/${f}`, f), link: link(`${base}/${f}`) }))

  const itens: DefaultTheme.SidebarItem[] = [
    { text: 'Mapa e regras (AGENTS.md)', link: link(`${base}/AGENTS.md`) },
    { text: 'Conteúdo (docs/)', items: docs, collapsed: false },
  ]
  if (soltos.length) itens.push({ text: 'Formato antigo', items: soltos, collapsed: true })

  sidebar[`/${base}/`] = [{ text: `Aula ${numero}`, items: itens }]
  nav.push({ text: `Aula ${numero}`, link: link(`${base}/AGENTS.md`) })
}

export default defineConfig({
  lang: 'pt-BR',
  title: 'Aulas · referências',
  description: 'Consulta local de AGENTS.md e docs das aulas',
  srcDir: '.',

  // Só estes arquivos entram. Tudo o mais (decks, skills, node_modules...) fica de fora.
  srcExclude: [
    'aulas/**',
    'node_modules/**',
    '.agents/**',
    '.github/**',
    '.vscode/**',
    '.vitepress/**',
    'dist/**',
    'scripts/**',
    'public/**',
  ],
  // O AGENTS.md da raiz é a página inicial; o arquivo continua sendo o mesmo.
  rewrites: { 'AGENTS.md': 'index.md' },

  // O AGENTS.md da raiz é a página "/". Links que o apontam (ex.: ../../AGENTS.md, escritos
  // nos AGENTS.md das aulas) são redirecionados para lá.
  markdown: {
    config(md) {
      const padrao =
        md.renderer.rules.link_open ?? ((tokens, i, opts, _env, self) => self.renderToken(tokens, i, opts))
      md.renderer.rules.link_open = (tokens, i, opts, env, self) => {
        const t = tokens[i]
        const href = t.attrGet('href')
        if (href && !/^[a-z]+:/i.test(href) && env.relativePath) {
          const [caminho, ancora = ''] = href.split('#')
          const abs = posix.normalize(posix.join('/', posix.dirname(env.relativePath), caminho))
          if (abs === '/AGENTS' || abs === '/AGENTS.md') t.attrSet('href', '/' + (ancora ? '#' + ancora : ''))
        }
        return padrao(tokens, i, opts, env, self)
      }
    },
  },

  // Links para arquivos fora do que é publicado aqui (decks, código) não devem barrar nada.
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: false,

  themeConfig: {
    nav,
    sidebar,
    outline: { level: [2, 3], label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próxima' },
    returnToTopLabel: 'Voltar ao topo',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tema',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
          modal: {
            noResultsText: 'Nada encontrado para',
            resetButtonTitle: 'Limpar',
            footer: { selectText: 'abrir', navigateText: 'navegar', closeText: 'fechar' },
          },
        },
      },
    },
  },
})
