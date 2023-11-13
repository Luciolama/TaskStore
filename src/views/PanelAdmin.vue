<template>
	<main>
		<header><h2>Panel de administrador</h2></header>
		<div class="row dashboardContainer">
			<ColumnaUsuarios />
			<div class="col dashboardRightColumn">
				<ColumnaTareas />
				<div class="row buttons">
					<div class="row deleteButtons">
						<button class="btn delete">Eliminar usuario</button>
						<button class="btn deleteSecondary"
							>Eliminar todas las tareas</button
						>
					</div>
					<button class="btn download">Descargar Informe</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ColumnaTareas from "./ColumnaTareas.vue";
import ColumnaUsuarios from "./ColumnaUsuarios.vue";

export default {
	components: { ColumnaTareas, ColumnaUsuarios },
};
</script>

<style></style>
