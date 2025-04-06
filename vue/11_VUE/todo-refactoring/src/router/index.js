// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/pages/TodoList.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodoList,
  },
  { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
