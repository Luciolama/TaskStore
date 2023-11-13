import { createRouter, createWebHistory } from "vue-router";
import InicioSesion from "../views/InicioSesionView.vue";
import Tareas from "../views/Tareas.vue";
import PanelAdmin from "../views/PanelAdmin.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/login",
			name: "login",
			component: InicioSesion,
		},
		{
			path: "/tareas",
			name: "tareas",
			component: Tareas,
		},
		{
			path: "/admin",
			name: "admin",
			component: PanelAdmin,
		},
	],
});

export default router;
