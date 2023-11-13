import { defineStore } from "pinia"

export const useLoginStore = defineStore(
    "login", {
        state: () => ({
            isLoggedIn: false,
            role: "",
        }),
        actions: {
            login({ username, password }) {
                if (username === "user@user.com" && password === "password") {
                    this.isLoggedIn = true
                    this.role = "user"
                    return true
                } else if (username === "admin@admin.com" && password === "adminPassword") {
                    this.isLoggedIn = true
                    this.role = "admin"
                    return true
                }
                return false
            },
            logout() {
                this.isLoggedIn = false
                this.role = ""
            }
        }
    }
)
