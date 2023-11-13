<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<div>
		<header class="fixed-header">
			<div>
				<nav>
					<RouterLink to="/login">Login |</RouterLink>
					<RouterLink to="/tareas"> Tareas |</RouterLink>
					<RouterLink to="/admin"> Admin</RouterLink>
				</nav>
			</div>
		</header>
		<RouterView />
	</div>
</template>

<style>
.fixed-header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #333; /* Puedes personalizar el color de fondo */
	color: #fff; /* Puedes personalizar el color del texto */
	padding: 10px;
}

/* Estilo para el contenido que sigue al encabezado */
</style>
