import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/cv",
    name: "CV",
    component: () =>
      import("../views/CV.vue")
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () =>
      import("../views/Impressum.vue")
  },
  {
    path: "/publications",
    name: "Publications",
    component: () =>
      import("../views/Publications.vue")
  },
  {
    path: "/lectures",
    name: "Lectures",
    component: () =>
      import("../views/Lectures.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
