import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import store from './store';
createApp(App).use(store).use(BootstrapVue3).mount('#app');
