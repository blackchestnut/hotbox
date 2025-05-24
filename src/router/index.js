import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";
import news from "@/views/news.vue";
import boiler_ford_transit from "@/views/boiler_ford_transit.vue";
import about_us from "@/views/about_us.vue";
import service from "@/views/service.vue";
import product_room from "@/views/product_room.vue";
import product from "@/views/product.vue";
import privacy from "@/views/privacy.vue";

const routes = [
  { path: "/", name: "home", component: home },
  { path: "/news", name: "news", component: news },
  { path: "/car", name: "car", component: boiler_ford_transit },
  { path: "/about", name: "about", component: about_us },
  { path: "/service", name: "service", component: service },
  { path: "/boiler-room", name: "boiler_room", component: product_room },
  { path: "/kotelnye/:id", name: "boiler", component: product },
  { path: "/privacy", name: "privacy", component: privacy },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
