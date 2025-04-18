import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // Импортируйте вашу домашнюю страницу
import NewsPage from '@/views/NewsPage.vue'; // Импортируйте компонент страницы новостей
import CarPage from '@/views/CarPage.vue';
import AboutUsPage from '@/views/AboutUsPage.vue';
import ServicePage from '@/views/ServicePage.vue';
import BoilerRoomPage from '@/views/BoilerRoomPage.vue';
import BoilerPage from '@/views/BoilerPage.vue';



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
    {
        path: '/us',
        name: 'us',
        component: AboutUsPage,
    },
    {
        path: '/service',
        name: 'service',
        component: ServicePage,
    },
    {
        path: '/boiler-room',
        name: 'boiler-room',
        component: BoilerRoomPage,
    },
    {
        path: '/kotelnye/:id',
        name: 'boiler',
        component: BoilerPage,
    },
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }; // Прокручиваем к началу страницы
    }
});


export default router;