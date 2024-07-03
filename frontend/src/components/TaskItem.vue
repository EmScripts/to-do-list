<template>
    <div class="border border-secondary bg-dark d-flex align-items-center justify-content-between p-2 mb-2 rounded">
      <div class="d-flex align-items-center">
        <input type="checkbox" class="form-check-input bg-dark border border-2 border-success me-2" :checked="task.completed" @change="toggleTask(task.id)">
        <span :class="{ 'fw-bold': !task.completed, 'text-white-50': task.completed, 'text-decoration-line-through': task.completed }">{{ task.text }}</span>
      </div>
      <div class="task-actions">
        <button class="btn btn-outline-secondary btn-sm me-1" @click="openEditModal"><i data-feather="edit-2"></i></button>
        <button class="btn btn-outline-secondary btn-sm" @click="removeTask(task.id)"><i data-feather="trash-2"></i></button>
      </div>
  
      <!-- Edit Task Modal -->
      <EditTaskModal :task="task" @editTask="editTask" ref="editTaskModal"></EditTaskModal>
    </div>
  </template>
  
  <script>
  import feather from 'feather-icons';
  import EditTaskModal from './EditTaskModal.vue';
  
  export default {
    name: 'TaskItem',
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    components: {
      EditTaskModal
    },
    methods: {
      toggleTask(taskId) {
        this.$emit('toggleTask', taskId);
      },
      removeTask(taskId) {
        this.$emit('removeTask', taskId);
      },
      openEditModal() {
        this.$refs.editTaskModal.openModal(); // Call the openModal method of EditTaskModal
      },
      editTask(editedTask) {
        this.$emit('editTask', editedTask);
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
  /* Scoped styles specific to this component */
  .task-actions .btn {
    border-color: transparent;
  }
  </style>
  