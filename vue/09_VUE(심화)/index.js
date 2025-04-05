import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Members from '@/pages/Members.vue'
import MemberInfo from '@/pages/MemberInfo.vue'
import NotFound from '@/pages/NotFound.vue'

const membersIdGuard = (to, from) => {
  if (from.name !== 'members' && from.name !== 'members/id') {
    return false
  }
}
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', name: 'members', component: Members },
    {
      path: '/members/:id(\\d+)',
      name: 'members/id',
      component: MemberInfo,
      beforeEnter: membersIdGuard,
    },
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
  ],
})

export default router
