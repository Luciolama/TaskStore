import { createRouter, createWebHistory } from 'vue-router'
import InicioSesion from '../views/IniciarSesionView.vue'
import Tareas from '../views/Tareas.vue'
import UserView from '../views/UserView.vue'
import AdminView from '../views/AdminView.vue'
import { useLoginStore } from '../stores/login'

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
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      meta: { requiresAuth: true, role: 'user' }
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

// router.beforeEach((to, from, next) => {
//     const loginStore = useLoginStore()
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!loginStore.isLoggedIn) {
//             next({ name: 'login' }) // El usuario no inicio sesión, entonces lo redirige al login
//         } else {
//             const userRole = loginStore.role
//             const requiredRole = to.meta.role
// 
//             if (requiredRole && userRole !== requiredRole) {
//                 next({ name: 'login' }) // El usuario no requiere está autenticado para esta ruta
//             } else {
//                 next() // El usuario inicio sesión
//             }
//         }
//     } else {
//         next() // No se requiere autenticación para esta ruta
//     }
// 
// })

export default router
