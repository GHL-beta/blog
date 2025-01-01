import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Ad",
  lang: "zh-CN",
  description: "Ad 的博客",
  head: [['link', { rel: 'icon', href: 'https://raw.gitcode.com/Ad_closeNN/img/blobs/b734bc5d42a27b2316158d87bf0f48e1773e0fe7/103355026.jpg' }]],
  lastUpdated: true,
  titleTemplate: 'Ad 博客',
  cleanUrls: true,
  sitemap: {hostname: 'https://www.19991230.xyz'},
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://raw.gitcode.com/Ad_closeNN/img/blobs/b734bc5d42a27b2316158d87bf0f48e1773e0fe7/103355026.jpg',
    nav: [
      { text: '> 主页 <', link: '/' },
      { text: '所有文章',
        items: [
          { text: '教程', link: '/docs/guide' },
        ]
      },
      { text: '特别文章',
        items: [
          { text: 'EdgeTunnel', link: '/docs/guide/EdgeTunnel' },
          { text: 'BPB Panel', link: '/docs/guide/BPB-Panel'}
        ]
      }
    ],

    sidebar: [
      {
        text: '教程',
        items: [
          { text: 'MCSI', link: '/docs/guide/MCSI' },
          { text: 'EdgeTunnel', link: '/docs/guide/EdgeTunnel' },
          { text: 'BPB Panel', link: '/docs/guide/BPB-Panel' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '团队展示页', link: '/docs/team' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ad-closeNN/blog' },
      { icon: 'x', link: 'https://x.com/Ad_Cattt' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Ad-closeNN' },
      { icon: 'discord', link: 'https://discord.19991230.xyz' }
    ],

    editLink: {
      pattern: 'https://github.com/Ad-closeNN/blog/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    lastUpdated: {
      text: '本文档最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      }
    },
    
    footer: {
      message: '<a href="https://status.19991230.xyz" target="_blank">Ad System 状态页</a><br><a href="https://icp.gov.moe/?keyword=20252024" target="_blank">萌ICP备20252024号</a>',
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
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        },
    outline: {
      label: '本页面内导航',
      level: [2,3]
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
    },
}
)
