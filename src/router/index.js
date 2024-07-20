import { createRouter, createWebHistory } from "vue-router";
import About from "../sections/About.vue";
import Home from "../components/Home.vue";
import ServicesPage from "../sections/ServicesPage.vue";
import ContactUs from "../sections/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/About-us",
    name: "aboutus",
    component: About,
  },

  {
    path: "/Services",
    name: "services",
    component: ServicesPage,
  },

  {
    path: "/ContactUs",
    name: "contacts",
    component: ContactUs,
  },
];

const router = createRouter({
  mode: "hash",
  history: createWebHistory(),
  routes,

  // This function can handle scrolling both to specific position and to the top.
  scrollBehavior(to, from, savedPosition) {
    // Handle hash-based scrolling
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    // Handle savedPosition (e.g., for back/forward navigation)
    if (savedPosition) {
      return savedPosition;
    }
    // Default behavior: scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
