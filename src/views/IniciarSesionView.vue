<template>
    <div>
        <h2 class="h2">Inicio Sesion</h2>
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Usuario:" />
            <input v-model="password" type="password" placeholder="Contraseña:" />
            <button type="submit" @click="loginHandler">Iniciar sesion</button>
        </form>
    </div>
</template>

<script>
    import { useLoginStore } from "../stores/login.js"
    import { storeToRefs } from "pinia"
    import { ref } from "vue"

    export default {
        setup() {
            const loginStore = storeToRefs(useLoginStore())
            const email = ref("")
            const password = ref("")
            return { loginStore, email, password }
        },

        methods: {
            async loginHandler() {
                const success = await this.loginStore.login({
                    username: this.email,
                    password: this.password
                })
                if (success && this.loginStore.role === "user") {
                    this.$router.push("/tareas")
                } else if (success && this.loginStore.role === "admin") {
                    this.$router.push("/admin")
                } else {
                    alert("Usuario o contraseña incorrectas")
                }
            },
        }
    }

</script>
