// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      tasks: [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true },
        { id: 3, text: 'Task 3', completed: false }
      ]
    };
  },
  mutations: {
    toggleTask(state, taskId) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    addTask(state, taskText) {
      const newTask = {
        id: state.tasks.length + 1,
        text: taskText,
        completed: false
      };
      state.tasks.push(newTask);
    },
    editTask(state, editedTask) {
      const index = state.tasks.findIndex(task => task.id === editedTask.id);
      if (index !== -1) {
        state.tasks[index] = editedTask;
      }
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  },
  actions: {
    toggleTask({ commit }, taskId) {
      commit('toggleTask', taskId);
    },
    createTask({ commit }, taskText) {
      commit('addTask', taskText);
    },
    editTask({ commit }, editedTask) {
      commit('editTask', editedTask);
    },
    removeTask({ commit }, taskId) {
      commit('removeTask', taskId);
    }
  }
});

export default store;
