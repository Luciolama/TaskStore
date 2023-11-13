import { createRouter, createWebHistory } from "vue-router";
import InicioSesion from "../views/IniciarSesionView.vue";
import Tareas from "../views/Tareas.vue";
import PanelAdmin from "../views/PanelAdmin.vue";
import { useLoginStore } from "../stores/login";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "login",
			component: InicioSesion,
		},
		{
			path: "/tareas",
			name: "tareas",
			component: Tareas,
			meta: { requiresAuth: true, role: "user" },
		},
		{
			path: "/admin",
			name: "admin",
			component: PanelAdmin,
			meta: { requiresAuth: true, role: "admin" },
		},
	],
});

router.beforeEach((to, from, next) => {
	const store = useLoginStore();

	if (to.meta.requiresAuth && to.meta.role !== store.role) {
		if (store.role === "admin") {
			next("/admin");
		} else if (store.role === "user") {
			next("/tareas");
		} else {
			next("/");
		}
	} else if (to.fullPath === "/" && store.isLoggedIn) {
		if (store.role === "admin") {
			next("/admin");
		} else if (store.role === "user") {
			next("/tareas");
		}
	}
	next();
});

export default router;
