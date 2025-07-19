import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import PricingView from "../views/PricingView.vue";
import APIDocsView from "../views/APIDocsView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import NotFoundView from "../views/NotFoundView.vue";

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
            meta: {
                title: "About Us",
            }
        },
        {
            path: "/pricing",
            name: "pricing",
            component: PricingView,
            meta: {
                title: "Pricing",
            }
        },
        {
            path: "/api-documentation",
            name: "api documentation",
            component: APIDocsView,
            meta: {
                title: "API Documentation",
            }
        },
        {
            path: "/contact-us",
            name: "contact us",
            component: ContactUsView,
            meta: {
                title: "Contact Us",
            }
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundView,
            meta: {
                title: "Page Not Found",
            }
        }
    ]
})

routers.beforeEach((to) => {
    document.title = to.meta.title ? `${to.meta.title} | API PRO` : "API PRO";
})

export default routers;