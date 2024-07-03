<template>
    <div class="modal" tabindex="-1" role="dialog" style="display: block;" v-if="show">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Task</h5>
                    <button type="button" class="btn-close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="handleEditTask">
                        <div class="mb-3">
                            <label for="editTaskText" class="form-label">Task Text</label>
                            <input type="text" class="form-control" id="editTaskText" v-model="editedTaskText" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
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
            handler(newValue) {
                this.editedTaskText = newValue.text;
            },
            deep: true
        }
    }
};
</script>

<style scoped>
/* Scoped styles specific to this component */
.modal {
    display: none;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1050;
}

.modal-dialog {
    margin: 1.75rem auto;
    max-width: 500px;
}

.modal-content {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
}

.modal-header {
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
    background-color: #f7f7f9;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}

.modal-title {
    margin-bottom: 0;
}

.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 1rem;
}

.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
}
</style>