import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import NewsPage from "@/views/NewsPage.vue";
import CarPage from "@/views/CarPage.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";
import ServicePage from "@/views/ServicePage.vue";
import BoilerRoomPage from "@/views/BoilerRoomPage.vue";
import BoilerPage from "@/views/BoilerPage.vue";
import PrivacyPage from "@/views/PrivacyPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/news",
    name: "news",
    component: NewsPage,
  },

  {
    path: "/car",
    name: "car",
    component: CarPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutUsPage,
  },
  {
    path: "/service",
    name: "service",
    component: ServicePage,
  },
  {
    path: "/boiler-room",
    name: "boiler-room",
    component: BoilerRoomPage,
  },
  {
    path: "/kotelnye/:id",
    name: "boiler",
    component: BoilerPage,
  },
  {
    path: "/privacy",
    name: "privacy",
    component: PrivacyPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
