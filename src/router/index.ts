import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import LandingPage from '@/views/LandingPage.vue'
import ReservationPage from '@/views/ReservationPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/reservation',
    component: ReservationPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
