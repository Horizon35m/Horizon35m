import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

import AviView from "@/views/AviView.vue";
import BannersView from "@/views/BannersView.vue";
import LiveView from "@/views/LiveView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "Live",
    name: "/live",
    component: LiveView,
  },
  {
    path: "/avis",
    name: "Avis",
    component: AviView,
  },
  {
    path: "/banners",
    name: "Banners",
    component: BannersView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
