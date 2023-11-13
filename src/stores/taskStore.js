import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
	state: () => ({
		tasks: [],
		loading: false,
	}),
	getters: {
		favourites() {
			return this.tasks.filter((t) => t.isFav);
		},
		favCount() {
			return this.tasks.reduce((p, c) => {
				return c.isFav ? p + 1 : p;
			}, 0);
		},
		totalTasks: (state) => {
			return state.tasks.length;
		},
	},
	actions: {
		async getTasks() {
			this.loading = true;

			const res = await fetch("http://localhost:3000/tasks"); //  se utiliza en JavaScript para realizar solicitudes de recursos en la web, como datos JSON, archivos, imágenes u otros recursos, desde un servidor o una ubicación en línea.
			const data = await res.json();

			this.tasks = data;
			this.loading = false;
		},
		async addTask(task) {
			this.tasks.push(task);

			const res = await fetch("http://localhost:3000/tasks", {
				method: "POST",
				body: JSON.stringify(task),
				headers: { "Content-Type": "application/json" },
			});

			if (res.error) {
				console.log(res.error);
			}
		},
		async deleteTask(id) {
			this.tasks = this.tasks.filter((task) => {
				return task.id !== id;
			});

			const res = await fetch("http://localhost:3000/tasks/" + id, {
				method: "delete",
			});

			if (res.error) {
				console.log(res.error);
			}
		},

		async deleteAllTasks() {
			this.tasks.forEach(async (task) => {
				const res = await fetch("http://localhost:3000/tasks/" + task.id, {
					method: "delete",
				})
					.then((res) => {
						location.reload();
					})
					.catch((err) => {
						console.log(err);
					});
			});
		},
		async toggleFav(id) {
			const task = this.tasks.find((task) => task.id === id);
			task.isFav = !task.isFav;

			const res = await fetch("http://localhost:3000/tasks/" + id, {
				method: "PATCH",
				body: JSON.stringify({ isFav: task.isFav }),
				headers: { "Content-Type": "application/json" },
			});

			if (res.error) {
				console.log(res.error);
			}
		},
	},
});
