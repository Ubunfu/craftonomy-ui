import {createRouter, createWebHistory} from "vue-router";
import {isAuthenticated} from "@/services/securityService";

import Home from "@/components/Home";
import Authorize from "@/components/Authorize";
import Error from "@/components/Error";
import Secret from "@/components/Secret";
import ShopHome from "@/components/shop/ShopHome";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        props: route => ({
            isAuthenticated: route.params.isAuthenticated,
            idToken: route.params.idToken
        })
    },
    {
        path: "/shop",
        name: "Shop",
        component: ShopHome,
        props: route => ({
            isAuthenticated: route.params.isAuthenticated,
            idToken: route.params.idToken
        })
    },
    {
        path: "/secret",
        name: "Secret",
        component: Secret,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/authorize",
        name: "Authorize",
        component: Authorize
    },
    {
        path: "/error",
        name: "Error",
        component: Error,
        props: route => ({
            error: route.params.error,
            callToAction: route.params.callToAction
        })
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    if(isAuthenticated(window.$cookies.get('authn'))) {
        to.params.isAuthenticated = true
        to.params.idToken = window.$cookies.get('authn').idToken
    }
})

router.beforeEach((to) => {
    if(to.meta.requiresAuth && !to.params.isAuthenticated) {
        console.error('Unauthenticated request to privileged page')
        return {
            name: 'Error',
            params: {
                error: 'Forbidden',
                callToAction: 'Log in first'
            }
        }
    }
})

export default router;