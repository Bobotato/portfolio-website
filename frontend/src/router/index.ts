import LandingPageView from '@/views/LandingPageView.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/work-experience',
      name: 'workexperience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/:notFound',
      name: 'notfound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
