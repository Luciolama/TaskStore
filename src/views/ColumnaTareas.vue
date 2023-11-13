<template>
	<div class="col dashboardItem">
		<h2>Tareas</h2>

		<div v-for="task in taskStore.tasks" :key="task.id">
			<TareaDetalle :task="task" class="listItem" />
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "../stores/taskStore";
import TareaDetalle from "./TareaDetalle.vue";
export default {
	components: { TareaDetalle },
	setup() {
		const taskStore = useTaskStore();
		let taskSelected;
		taskStore.getTasks();

		const filter = ref("all");

		const setTaskSelected = (taskId) => {
			taskSelected = taskId;
			console.log(taskSelected);
		};

		return { taskStore, filter, setTaskSelected, taskSelected };
	},
};
</script>

<style></style>
