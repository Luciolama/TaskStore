<template>
  <main>
    <header><h1>Tareas</h1></header>

    <div class="new-task-form">
      <FormTarea/>
    </div>
    
   

    <nav class="filter">
        <button @click="filter = 'all'">Todas las tareas</button>
    <button @click="filter = 'favourites'">Favoritas</button>
    </nav>
    
    <div class="loading" v-if="taskStore.loading"> Cargando...</div>


    <div class="task-list" v-if="filter === 'all'">
        <p> Tenes {{ taskStore.totalTasks }} tareas para hacer </p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TareaDetalle :task="task" />
      </div>
    </div>

    

    <div class="task-list" v-if="filter === 'favourites'">
        <p> Hay {{ taskStore.favCount }} tareas favoritas</p>
      <div v-for="task in taskStore.favourites" :key="task.id">
        <TareaDetalle :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from "../stores/taskStore";
import FormTarea from './FormTarea.vue';
import TareaDetalle from "./TareaDetalle.vue";

export default {
  components: { TareaDetalle, FormTarea },
  setup() {
    const taskStore = useTaskStore();

    taskStore.getTasks()  

    const filter = ref('all')

    return { taskStore, filter };
  }
};
</script>

<style>

</style>
