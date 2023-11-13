<template>
    <div>
        <div>
            <div class="login-container">
                <div class="login-box">
                    <h2>Iniciar Sesion</h2>
                    <form @submit.prevent="login">
                        <input v-model="email" type="email" placeholder="Usuario:" />
                        <input v-model="password" type="password" placeholder="Contraseña:" />
                        <button class="btn" type="submit" @click="loginHandler">Iniciar sesion</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useLoginStore } from "../stores/login.js"
    import { storeToRefs } from "pinia"
    import { ref } from "vue"

    export default {
        setup() {
            const store = useLoginStore()
            const { isLoggedIn, role } = storeToRefs(store)
            const { login } = store
            const email = ref("")
            const password = ref("")
            return { isLoggedIn, role, login, email, password }
        },

        methods: {
            async loginHandler() {
                const success = await this.login({
                    username: this.email,
                    password: this.password
                })
                if (success && this.role === "user") {
                    this.$router.push("/tareas")
                } else if (success && this.role === "admin") {
                    this.$router.push("/admin")
                } else {
                    alert("Usuario o contraseña incorrectas")
                }
            },
        }
    }

</script>

<style>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

h2 {
    font-size: 2em;
    text-align: center;
}

.login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    border-radius: 2em;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
}

input { width: 100%; padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn {
    width: 100%;
    padding: 12px;
    background-color: #333333;
    color: #45a049;
    border: none;
    border-radius: 4em;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, transform 0.3s ease;
    font-size: 1.5em;

    &:hover {
        background-color: #45a049;
        color: #333333; 
        transform: scale(1.1);
    }
}

</style>
