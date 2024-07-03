<template>
  <div id="app" class="container-fluid bg-black text-light vh-100 d-flex flex-column align-items-center py-4 px-5">
    <div class="d-flex justify-content-between w-100 mb-4">
      <h1 class="text-success d-flex align-items-center display-4"><div class="text-white pe-1">Do</div> It</h1>
    </div>
    <div class="d-flex justify-content-between border border-white border-2 rounded-5 mw-400 text-light py-3 px-4 mb-4">
      <div>
        <h2 class="m-0 display-6">Tasks Left</h2>
        <h5 class="fw-light text-muted">Keep it up!</h5>
      </div>
      <div class="counter-circle bg-success text-center">
        <span>{{ completedTasks }}/{{ totalTasks }}</span>
      </div>
    </div>
    <div class="task-input-group d-flex mb-4 w-100">
      <input 
        type="text" 
        class="form-control bg-dark border-dark text-white" 
        placeholder="write your next task" 
        v-model="newTaskText" 
        @keyup.enter="addTask"
      >
      <button class="btn btn-success ms-2" @click="addTask"><i data-feather="plus"></i></button>
    </div>
    <div class="task-list w-100">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggleTask="toggleTask"
        @editTask="editTask"
        @removeTask="removeTask"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import feather from 'feather-icons';
import TaskItem from './components/TaskItem.vue';

export default {
  name: 'App',
  components: {
    TaskItem
  },
  data() {
    return {
      newTaskText: ''
    };
  },
  computed: {
    ...mapState(['tasks']),
    completedTasks() {
      return this.tasks.filter(task => task.completed).length;
    },
    totalTasks() {
      return this.tasks.length;
    }
  },
  methods: {
    ...mapActions(['toggleTask', 'createTask', 'editTask', 'removeTask']),
    addTask() {
      if (this.newTaskText.trim() !== '') {
        this.createTask(this.newTaskText);  // Call the renamed Vuex action
        this.newTaskText = '';
      }
    }
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
</script>

<style scoped>
.task-input-group {
  max-width: 400px;
}

.task-list {
  max-width: 400px;
}

</style>
