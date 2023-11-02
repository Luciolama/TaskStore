<template>
  <form class="form" @submit.prevent="addTasksForm">
    <input type="text" placeholder="Necesito hacer..." v-model="newTask" />
    <button>Enviar</button>
  </form>
</template>

<script>
import { useTaskStore } from '../stores/taskStore';
import { ref } from 'vue';

    export default {
        setup(){
            const taskStore = useTaskStore()
            const newTask = ref('')

            const addTasksForm = () =>{
                if(newTask.value.length > 0){
                    taskStore.addTask({
                        title : newTask.value,
                        isFav : false,
                        id : Math.floor(Math.random() *10000)
                    })
                }
                newTask.value =  ''
            }

            return {addTasksForm, newTask}
        }
        
    };
</script>
