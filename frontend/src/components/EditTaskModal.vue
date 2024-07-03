<template>
    <b-modal v-model="show" title="Edit Task" hide-footer class="text-white-50">
        <b-form @submit.prevent="handleEditTask">
            <b-form-group label="Task" label-for="task-input">
                <b-form-input id="task-input" type="text" class="form-control bg-transparent border border-secondary text-white"
                    v-model="editedTaskText" required></b-form-input>
            </b-form-group>
            <template #modal-footer>
                <b-button variant="secondary" @click="closeModal">Cancel</b-button>
                <b-button variant="primary" type="submit">Save changes</b-button>
            </template>
        </b-form>
    </b-modal>
</template>

<script>
export default {
    name: 'EditTaskModal',
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            editedTaskText: this.task.text,
            show: false
        };
    },
    methods: {
        openModal() {
            this.show = true;
        },
        closeModal() {
            this.show = false;
        },
        handleEditTask() {
            const editedTask = { ...this.task, text: this.editedTaskText };
            this.$emit('editTask', editedTask);
            this.closeModal();
        }
    },
    watch: {
        task: {
            handler(newTask) {
                this.editedTaskText = newTask.text;
            },
            deep: true
        }
    }
};
</script>

<style>
.modal-content {
    background-color: #1b1b1b !important;
}

.modal-header {
    border-bottom: 0 !important;
}

.btn-close {
  position: relative;
  width: 1.25rem; /* Adjust size as needed */
  height: 1.25rem; /* Adjust size as needed */
  background: transparent;
  border: none;
  cursor: pointer;
}

.btn-close::before,
.btn-close::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 2px;
  background-color: #ffffff80; /* Color of the cross lines */
  transform: translate(-50%, -50%);
}

.btn-close::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.btn-close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

</style>