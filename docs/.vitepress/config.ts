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
      dark: 'github-dark-dimmed',
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
    siteTitle: '算法笔记',
    logo: 'img/logo.png',
    outline: 'deep',
    outlineTitle: '本页目录',
    search: { provider: 'local' },
    nav: [],
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
          }, {
            text: 'floyd',
            link: '/paradigm/floyd.md'
          }, {
            text: '背包问题',
            link: '/paradigm/package/index.md',
          }, {
            text: '求素数',
            link: '/paradigm/prime.md'
          }, {
            text: '数学基础知识',
            link: '/paradigm/math.md'
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
      }, {
        text: '培训',
        collapsed: true,
        items: [{
          text: '2023-05-07',
          link: '/training/2023-05-07/',
          collapsed: true,
          items: [{
            text: '数组分段',
            link: '/training/2023-05-07/Q1'
          }, {
            text: '奶牛晒衣服',
            link: '/training/2023-05-07/Q2'
          }, {
            text: '借教室',
            link: '/training/2023-05-07/Q3'
          }, {
            text: '填涂颜色',
            link: '/training/2023-05-07/E1'
          }, {
            text: '油滴扩展',
            link: '/training/2023-05-07/E2'
          }, {
            text: '机器人塔',
            link: '/training/2023-05-07/E3'
          }, {
            text: '移动字母',
            link: '/training/2023-05-07/E4'
          }, {
            text: '数的划分',
            link: '/training/2023-05-07/Q4'
          }, {
            text: 'Don\'t Really Like How The Story Ends',
            link: '/training/2023-05-07/Q5'
          }, {
            text: '01迷宫',
            link: '/training/2023-05-07/Q6'
          }, {
            text: '填涂颜色',
            link: '/training/2023-05-07/E5'
          }, {
            text: '油滴扩展',
            link: '/training/2023-05-07/E6'
          }, {
            text: '机器人塔',
            link: '/training/2023-05-07/E7'
          }, {
            text: '移动字母',
            link: '/training/2023-05-07/E8'
          }]
        }]
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