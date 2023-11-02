import { createRouter, createWebHistory } from 'vue-router'
import InicioSesion from '../views/InicioSesionView.vue'
import Tareas from '../views/Tareas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: InicioSesion
    },
    {
      path: '/tareas',
      name: 'tareas',
      component: Tareas
    }
  ]
})

export default router
