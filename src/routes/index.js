import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import PhaserGame from '../views/PhaserGame.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/game',
    name: 'Game',
    component: PhaserGame
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
