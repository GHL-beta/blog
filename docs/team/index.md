---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://raw.gitcode.com/Ad_closeNN/img/blobs/b734bc5d42a27b2316158d87bf0f48e1773e0fe7/103355026.jpg',
    name: 'Ad_closeNN',
    title: '所有者',
    links: [
      { icon: 'github', link: 'https://github.com/Ad-closeNN' },
      { icon: 'x', link: 'https://x.com/Ad_Cattt' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      Ad Blog Website 开发离不开下列成员
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>