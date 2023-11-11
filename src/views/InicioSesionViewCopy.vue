<template>
    <div>
        <h2 class="h2">Inicio Sesion</h2>
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="Usuario:" />
            <input v-model="password" type="password" placeholder="Contraseña:" />
            <button type="submit">Iniciar sesion</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from "vue"
    import { useLoginStore } from "../stores/login"

    const username = ref("")
    const password = ref("")
    const loginStore = useLoginStore()

    const login = async () => {
        const success = await loginStore.login({ username: username.value, password: password.value })
        if (success && login.role === "user") {
            // redirect to user view
            router.push("/tarea")
        } else if (success && login.role === "admin") {
            // redirect to user view
        }
    }

</script>

<style>

</style>
