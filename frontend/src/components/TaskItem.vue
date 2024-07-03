<template>
    <b-card no-body class="bg-dark text-light mb-3 border-secondary p-2">
      <b-row align-v="center">
        <b-col cols="auto">
          <b-form-checkbox
          class="bg-dark border border-2 border-success"
            :checked="task.completed"
            @change="toggleTask(task.id)"
          ></b-form-checkbox>
        </b-col>
        <b-col>
          <span
            :class="{
              'fw-bold': !task.completed,
              'text-white-50 text-decoration-line-through': task.completed,
            }"
          >
            {{ task.text }}
          </span>
        </b-col>
        <b-col cols="auto" class="text-end">
          <b-button-group size="sm">
            <b-button variant="outline-secondary" class="border-0" @click="openEditModal">
              <i data-feather="edit-2"></i>
            </b-button>
            <b-button variant="outline-secondary" class="border-0" @click="removeTask(task.id)">
              <i data-feather="trash-2"></i>
            </b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <!-- Edit Task Modal -->
      <EditTaskModal :task="task" @editTask="editTask" ref="editTaskModal"></EditTaskModal>
    </b-card>
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
  </style>
  