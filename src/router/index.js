import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BooksView from "../views/BooksView.vue";
import BooksDetailView from "../views/BooksDetailView.vue";
import AboutView from "../views/AboutView.vue";
import AddBookView from "../views/AddBookView.vue";
import EditBookView from "../views/EditBookView.vue";
import FavoritBooksView from "../views/FavoritBooksView.vue";
import SaleLabelView from "../views/SaleLabelView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/books",
    name: "books",
    component: BooksView,
  },
  {
    path: "/books/:id",
    name: "book-detail",
    component: BooksDetailView,
  },
  {
    path: "/add-book",
    name: "add-book",
    component: AddBookView,
  },
  {
    path: "/books/:id/edit",
    name: "edit-book",
    component: EditBookView,
  },
  {
    path: "/favorits",
    name: "favorits",
    component: FavoritBooksView,
  },
  {
    path: "/sales",
    name: "sales",
    component: SaleLabelView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    //route level code-splitting
    //this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
