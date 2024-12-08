import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // Импортируйте вашу домашнюю страницу
import NewsPage from '@/views/NewsPage.vue'; // Импортируйте компонент страницы новостей
import CarPage from '@/views/CarPage.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage, // Укажите компонент для домашней страницы
    },
    {
        path: '/news',
        name: 'news',
        component: NewsPage, // Укажите компонент для страницы новостей
    },
    // Другие маршруты...
    {
        path: '/car',
        name: 'car',
        component: CarPage,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;