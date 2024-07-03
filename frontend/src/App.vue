<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }"
    class="container-fluid text-light vh-100 d-flex flex-column align-items-center py-4 px-5 overflow-auto">
    <div class="d-flex justify-content-between w-100 mb-4">
      <h1 class="text-success d-flex align-items-center display-4">
        <div :class="{ 'pe-1': true, 'text-white': isDarkMode, 'text-dark': !isDarkMode }">Do</div> It
      </h1>
      <div class="d-flex">
        <i data-feather="sun" width="20" height="20" class="me-2 text-muted"></i>
        <b-form-checkbox class="form-switch bg-success border-success" v-model="isDarkMode" switch :true-value="true" :false-value="false">
        </b-form-checkbox>
        <i data-feather="moon" width="20" height="20" class="ms-2 text-muted"></i>

      </div>
    </div>
    <!-- display card -->
    <div
      :class="{ 'd-flex justify-content-between border border-2 rounded-5 mw-400 w-100 p-3 mb-4': true, 'border-white text-light': isDarkMode, 'border-black text-dark': !isDarkMode }">
      <div>
        <h2 class="m-0 display-6">Tasks Left</h2>
        <div class="progress mt-2">
          <div class="progress-bar bg-success" role="progressbar" :style="{ width: taskCompletionPercentage + '%' }"
            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="counter-circle bg-success text-center">
        <span>{{ incompleteTasks }}</span>
      </div>
    </div>
    <!-- display card -->
    <!-- Celebration message -->
    <div v-if="incompleteTasks === 0" class="celebration-message text-center text-success my-2">
      <h3>Congratulations! 🎉 All tasks completed!</h3>
    </div>
    <!-- celebration message -->
    <div class="task-input-group d-flex mb-4 w-100">
      <input type="text"
        :class="{ 'form-control': true, 'bg-dark text-white  border-dark ': isDarkMode, 'text-dark': !isDarkMode }"
        placeholder="write your next task" v-model="newTaskText" @keyup.enter="addTask">
      <button class="btn btn-success ms-2" @click="addTask"><i data-feather="plus"></i></button>
    </div>
    <div class="task-list w-100">
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" :is-dark-mode="isDarkMode" @toggleTask="toggleTask"
        @editTask="editTask" @removeTask="removeTask" />
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
      newTaskText: '',
      isDarkMode: true  // Default to dark mode
    };
  },
  computed: {
    ...mapState(['tasks']),
    incompleteTasks() {
      return this.tasks.filter(task => !task.completed).length;
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed).length;
    },
    totalTasks() {
      return this.tasks.length;
    },
    taskCompletionPercentage() {
      return this.totalTasks === 0 ? 0 : Math.floor((this.completedTasks / this.totalTasks) * 100);
    }
  },
  methods: {
    ...mapActions(['toggleTask', 'createTask', 'editTask', 'removeTask']),
    addTask() {
      if (this.newTaskText.trim() !== '') {
        this.createTask(this.newTaskText);
        this.newTaskText = '';
      }
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style scoped>
#app {
  height: 100vh;
  overflow-y: auto;
}

.task-input-group {
  max-width: 400px;
}

.task-list {
  max-width: 400px;
}

.celebration-message {
  animation: bounce 1s infinite alternate;
}

.dark-mode {
  background-color: #1b1b1b;
  color: #ffffff;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}
</style>
