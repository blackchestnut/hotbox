import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Импортируйте маршрутизатор
import './assets/main.css';


const app = createApp(App); // Создайте приложение
app.use(router); // Используйте маршрутизатор
app.mount('#app'); // Смонтируйте приложение
