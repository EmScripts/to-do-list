// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      tasks: [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: false },
        { id: 3, text: 'Task 3', completed: false }
      ]
    };
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    toggleTask(state, taskId) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    toggleTask({ commit }, taskId) {
      commit('toggleTask', taskId);
    },
    removeTask({ commit }, taskId) {
      commit('removeTask', taskId);
    }
  },
  getters: {
    tasks(state) {
      return state.tasks;
    }
  }
});

export default store;
