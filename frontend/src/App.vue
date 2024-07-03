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
        <span>{{ tasks.filter(task => !task.completed).length }}/{{ tasks.length }}</span>
      </div>
    </div>
    <div class="task-input-group d-flex mb-4 w-100">
      <input v-model="newTaskText" type="text" class="form-control bg-dark text-white border-dark" placeholder="write your next task">
      <button @click="handleAddTask" class="btn btn-success ms-2"><i data-feather="plus" width="24" height="24"></i></button>
    </div>
    <div class="task-list w-100">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggleTask="toggleTask"
        @removeTask="removeTask"
      />
    </div>
  </div>
</template>

<script>
import './assets/main.css';
import feather from 'feather-icons';
import TaskItem from './components/TaskItem.vue';
import { mapState, mapActions } from 'vuex';

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
    ...mapState(['tasks'])
  },
  methods: {
    ...mapActions(['addTask', 'toggleTask', 'removeTask']),
    handleAddTask() { // Renamed to avoid conflict
      if (this.newTaskText.trim()) {
        const newTask = {
          id: Date.now(),
          text: this.newTaskText,
          completed: false
        };
        this.addTask(newTask);
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
.max-w-600 {
  max-width: 600px;
}

.task-counter {
  text-align: center;
  width: 100%;
  max-width: 400px;
  border: 2px solid #fff;
  border-radius: 10px;
}

.counter-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  line-height: 80px;
  color: white;
  font-size: 1.5rem;
  margin: 0 auto;
}

.task-input-group {
  max-width: 400px;
}

.task-list {
  max-width: 400px;
}

.task-actions .btn {
  border-color: transparent;
}
</style>
