<script>
import { RouterLink, RouterView } from "vue-router"
import { useLoginStore } from "./stores/login.js"
import { storeToRefs } from "pinia"
import { ref } from "vue"

export default {
    components: { RouterLink, RouterView },
    setup() {
        const store = useLoginStore()
        const { isLoggedIn, role } = storeToRefs(store)
        const { logout } = store
        return { isLoggedIn, role, logout }
    }
}
</script>

<template>
  <div>
  <header class="fixed-header">
    <div>
      <nav>
        <RouterLink v-if="!isLoggedIn" to="/">Login</RouterLink>
        <RouterLink v-if="isLoggedIn" to="/tareas">Tareas </RouterLink>
        <RouterLink v-if="isLoggedIn && role === 'admin'" to="/admin">admin</RouterLink>
        <RouterLink v-if="isLoggedIn" to="/" @click="logout"> | Cerrar sesión</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</div>
</template>

<style>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333; /* Puedes personalizar el color de fondo */
  color: #fff; /* Puedes personalizar el color del texto */
  padding: 10px;
}

/* Estilo para el contenido que sigue al encabezado */
</style>
