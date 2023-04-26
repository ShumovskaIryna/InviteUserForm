import { createRouter, createWebHistory } from 'vue-router'
import FirstStep from '../views/FirstStep.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/step1',
      name: 'step1',
      component: FirstStep
    },
    {
      path: '/step2',
      name: 'step2',
      component: () => import('../views/SecondStep.vue')
    },
    {
      path: '/step3',
      name: 'step3',
      component: () => import('../views/ThirdStep.vue')
    }
  ]
})

export default router
