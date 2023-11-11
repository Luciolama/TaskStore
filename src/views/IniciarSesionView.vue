<template>
    <div>
        <h2 class="h2">Inicio Sesion</h2>
        <form @submit.prevent="login">
            <input v-model="username" type="email" placeholder="Usuario:" />
            <input v-model="password" type="password" placeholder="Contraseña:" />
            <button type="submit">Iniciar sesion</button>
        </form>
    </div>
</template>

<script>
    import { useLoginStore } from "../stores/login"

    setup() {
        const store = useLoginStore()
        const { login } = login()
        return { login }
    }

    data() {
        return {
            email: "",
            password: ""
        }
    }

    methods: {
        login() {
            if (this.usuario.email
        }

    }
</script>
