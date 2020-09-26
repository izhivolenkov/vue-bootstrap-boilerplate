import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import building from '@/views/building.vue'

import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }, {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: false,
    },
  },
  {
    path: '/building',
    name: 'building',
    component: building,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
