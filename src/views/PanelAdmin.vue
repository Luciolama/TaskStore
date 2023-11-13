<template>
	<main>
		<header><h2>Panel de administrador</h2></header>
		<div class="row dashboardContainer">
			<ColumnaUsuarios />
			<div class="col dashboardRightColumn">
				<ColumnaTareas :taskList="taskStore.tasks" />
				<div class="row buttons-right">
					<Button
						class="btn-admin deleteSecondary"
						@click="
							() => {
								taskStore.deleteAllTasks();
							}
						"
						>Eliminar todas las tareas</Button
					>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ColumnaTareas from "./ColumnaTareas.vue";
import ColumnaUsuarios from "./ColumnaUsuarios.vue";
import { useTaskStore } from "../stores/taskStore";

export default {
	setup() {
		const taskStore = useTaskStore();

		taskStore.getTasks();

		return { taskStore };
	},
	components: { ColumnaTareas, ColumnaUsuarios },
};
</script>

<style></style>
