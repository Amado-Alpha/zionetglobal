import { createRouter, createWebHistory } from "vue-router";
import About from "../sections/About.vue";
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/About-us",
    name: "aboutus",
    component: About,
  },
];

const router = createRouter({
  mode: "hash",
  history: createWebHistory(),
  routes,

  // This is to enable scrolling to a specific section of the page
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
