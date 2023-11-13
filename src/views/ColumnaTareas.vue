<template>
	<div class="col dashboardItem">
		<h2>Tareas</h2>

		<div v-for="task in taskList" :key="task.id">
			<TareaDetalle :task="task" class="listItem" />
		</div>
	</div>
</template>

<script>
import TareaDetalle from "./TareaDetalle.vue";
export default {
	props: ["taskList"],
	components: { TareaDetalle },
	setup() {},
};
</script>

<style></style>
