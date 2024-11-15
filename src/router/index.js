import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // Импортируйте вашу домашнюю страницу
import NewsPage from '@/views/NewsPage.vue'; // Импортируйте компонент страницы новостей

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
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    // Другие маршруты...
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;