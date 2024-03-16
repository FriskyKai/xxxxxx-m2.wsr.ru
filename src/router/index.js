import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: () => import('../views/AuthorizationView.vue')
    },
    {
      path: '/files',
      name: 'files',
      component: () => import('../views/FilesView.vue')
    },
    {
      path: '/available-files',
      name: 'available-files',
      component: () => import('../views/AvailableFilesView.vue')
    },
    {
      path: '/access',
      name: 'access',
      component: () => import('../views/AccessView.vue')
    },
  ]
})

export default router
