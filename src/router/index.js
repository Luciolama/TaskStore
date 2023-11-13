import { createRouter, createWebHistory } from 'vue-router'
import InicioSesion from '../views/IniciarSesionView.vue'
import Tareas from '../views/Tareas.vue'
import AdminView from '../views/AdminView.vue'
import { useLoginStore } from '../stores/login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: InicioSesion
    },
    {
      path: '/tareas',
      name: 'tareas',
      component: Tareas
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: { requiresAuth: true, role: 'admin' }
    }
  ]
})

router.beforeEach((to, from, next) => {
    const store = useLoginStore();

    if(to.matched.some(r => r.meta.RequireAuth) && store.isLoggedIn) {
        next('/InicioSesion')
    }
    next()
})

export default router
