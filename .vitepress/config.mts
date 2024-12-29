import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "Ad Blog",
  lang: "zh",
  description: "Ad 的博客",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    nav: [
      { text: '> 主页 <', link: '/' },
      { text: '所有文章',
        items: [
          { text: '教程', link: '/docs' },
        ]
      },
      { text: '特别文章',
        items: [
          { text: 'EdgeTunnel', link: '/docs/guide/EdgeTunnel' },
        ]
      }
    ],

    sidebar: [
      {
        text: '教程',
        items: [
          { text: 'MCSI', link: '/docs/guide/MCSI' },
          { text: 'EdgeTunnel', link: '/docs/guide/EdgeTunnel' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'x', link: 'https://x.com/Ad_Cattt' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Ad-closeNN' }
    ],

    editLink: {
      pattern: 'https://github.com/Ad-closeNN/blog/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    lastUpdated: {
      text: '最后更新于：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      }
    },
    
    footer: {
      message: '由 <a href="https://vitepress.dev" target="_blank">VitePress</a> 强力驱动<br><a href="https://icp.gov.moe/?keyword=20245460" target="_blank">萌ICP备20245460号</a>',
      copyright: 'Copyright © 2024 <a href="https://github.com/Ad-closeNN" target="_blank">Ad_closeNN</a>'
    },
    search: {
      provider: 'local',
      options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        },
    outline: {
      label: '本页面内导航'
    },
        docFooter: {
          prev: '上一页',
          next: '下一页'
      },
      langMenuLabel: '多语言',
      returnToTopLabel: '回到顶部',
      sidebarMenuLabel: '菜单',
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',
    
    }
}
)
