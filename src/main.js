import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import i18n from './i18n';

// Crear una instancia de Axios con configuración global
const axiosInstance = axios.create({
  baseURL: 'http://localhost/mi_proyecto/',  // Ajusta la URL base según sea necesario
});
  
  // Crear la aplicación
  const app = createApp(App);
  
  // Agregar Axios a la instancia de la aplicación
  app.config.globalProperties.$http = axiosInstance
  
  // Usar router y store en la aplicación
  app.use(store);
  app.use(router);
  app.use(i18n); // Usar i18n para el idioma
  
  // Montar la aplicación en el elemento con id "app"
  app.mount('#app');