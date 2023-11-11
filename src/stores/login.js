import { defineStore } from "pinia"

export const useLoginStore = defineStore(
    "login", {
        state: () => ({
            isLoggedIn: false,
            role: "",
        }),

        actions: {
            login({ username, password }) {
               let result = false
                if (username === "user" && password === "password") {
                    this.isLoggedIn = true
                    this.role = "user"
                    result = true
                } else if (username === "admin" && password === "adminPassword") {
                    this.isLoggedIn = true
                    this.role = "admin"
                    result = true
                }
                return result
            },
            logout() {
                this.isLoggedIn = false
                this.role = ""
            }
        }
    }
)
