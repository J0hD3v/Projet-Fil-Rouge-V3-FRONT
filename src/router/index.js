import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import('../views/BookingView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/tournois',
      name: 'tournois',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/concours',
      name: 'concours',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/galerie',
      name: 'galerie',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../views/UsersView.vue'),
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'default',
      component: () => import('../views/NotFound.vue'),
    }
  ],
})

export default router