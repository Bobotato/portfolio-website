import LandingPageView from '@/views/LandingPageView.vue';
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
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/workexperience',
      name: 'workexperience',
      component: () => import('../views/WorkExperienceView.vue')
    }
  ]
});

export default router
