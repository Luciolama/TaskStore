import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
	state: () => ({
		isLoggedIn: localStorage.getItem("loggedIn"),
		role: localStorage.getItem("role"),
	}),
	actions: {
		login({ username, password }) {
			if (username === "user@user.com" && password === "password") {
				this.isLoggedIn = true;
				this.role = "user";
				localStorage.setItem("loggedIn", true);
				localStorage.setItem("role", "user");
				return true;
			} else if (
				username === "admin@admin.com" &&
				password === "adminPassword"
			) {
				this.isLoggedIn = true;
				this.role = "admin";
				localStorage.setItem("loggedIn", true);
				localStorage.setItem("role", "admin");
				return true;
			}
			return false;
		},
		logout() {
			this.isLoggedIn = false;
			this.role = "";
			localStorage.removeItem("loggedIn");
			localStorage.removeItem("role");
		},
	},
});
