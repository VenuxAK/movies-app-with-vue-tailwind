import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import ActorsView from "../views/ActorsView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/movies",
            name: "movies",
            component: MoviesView,
        },
        {
            path: "/actors",
            name: "actors",
            component: ActorsView,
        },
        {
            path: "/profile",
            name: "profile",
            component: ProfileView,
        },
    ],
});

export default router;
