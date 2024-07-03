<template>
    <b-modal v-model="show" centered title="Edit Task" :header-bg-variant="isDarkMode ? 'dark' : 'light'"
        :header-text-variant="isDarkMode ? 'light' : 'dark'" :body-bg-variant="isDarkMode ? 'dark' : 'light'"
        :body-text-variant="isDarkMode ? 'light' : 'dark'" :footer-bg-variant="isDarkMode ? 'dark' : 'light'"
        :footer-text-variant="isDarkMode ? 'light' : 'dark'" @ok="handleEditTask" ok-title="Save" ok-variant="success">
        <b-form @submit.prevent="handleEditTask">
            <b-form-group label="Task" label-for="task-input">
                <b-form-input id="task-input" type="text" :class="{
        'form-control bg-transparent border border-secondary': true,
        'text-white': isDarkMode,
        'text-dark': !isDarkMode
    }" v-model="editedTaskText" required></b-form-input>
            </b-form-group>
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
        },
        isDarkMode: {
            type: Boolean,
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
.modal-header {
    border-bottom: 0 !important;
}

.modal-footer {
    border-top: 0 !important;
}
</style>
