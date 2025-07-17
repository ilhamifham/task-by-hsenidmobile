import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import PricingView from "../views/PricingView.vue";
import APIDocsView from "../views/APIDocsView.vue";
import ContactUsView from "../views/ContactUsView.vue";

const routers = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about-us",
            name: "about us",
            component: AboutUsView,
        },
        {
            path: "/pricing",
            name: "pricing",
            component: PricingView,
        },
        {
            path: "/api-documentation",
            name: "api documentation",
            component: APIDocsView,
        },
        {
            path: "/contact-us",
            name: "contact us",
            component: ContactUsView,
        }
    ]
})

export default routers;