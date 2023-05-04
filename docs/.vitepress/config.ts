import mathjax3 from 'markdown-it-mathjax3'
import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
const customElements = ['mjx-container'];
export default defineConfig({
  base: '/Algorithm/',
  title: 'Algorithm Note',
  description: 'Algorithm Note.',
  appearance: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { async: '', src: "//finicounter.eu.org/finicounter.js" }],
  ],
  vite: {
    plugins: [
      Unocss()
    ]
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
    theme: {
      light: 'github-light',
      dark: 'vitesse-dark',
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  themeConfig: {
    siteTitle: 'Algorithm',
    logo: 'img/logo.png',
    outline: 'deep',
    search: {
      provider: 'local'
    },
    nav: [
    ],
    sidebar: [
      {
        text: '代码模板',
        items: [
          {
            text: '线段树',
            link: '/paradigm/SegmentTree.md'
          }, {
            text: 'gcd lcm',
            link: '/paradigm/gcd&lcm.md'
          }, {
            text: 'dijkstra',
            link: '/paradigm/dijkstra.md'
          }, {
            text: 'prim',
            link: '/paradigm/prim.md'
          }
        ]
      }, {
        text: '刷题',
        items: [
          {
            text: '统计子矩阵',
            link: '/question/统计子矩阵.md'
          }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Casper Huang.'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/howcasperwhat/Algorithm' }
    ]
  },
})