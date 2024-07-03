import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store';
createApp(App).use(store).mount('#app');
