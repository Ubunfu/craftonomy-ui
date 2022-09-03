import {createRouter, createWebHistory} from "vue-router";
import {isAuthenticated} from "../services/securityService";

import Home from "../components/Home.vue";
import Authorize from "../components/Authorize.vue";
import Error from "../components/Error.vue";
import ShopHome from "../components/shop/ShopHome.vue";
import ShopAddItem from "../components/shop/ShopAddItem/ShopAddItem.vue";

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
        path: "/shop/addItem",
        name: "ShopAddItem",
        component: ShopAddItem,
        meta: {
          requiresAuth: true
        },
        props: route => ({

            isAuthenticated: route.params.isAuthenticated,
            idToken: route.params.idToken
        })
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

/*
* Middleware interceptor
* Checks if the `authn` cookie is set, and if so, extracts the ID Token held within to pass along to components that
* need it
*/
router.beforeEach((to) => {
    if(isAuthenticated(window.$cookies.get('authn'))) {
        to.params.isAuthenticated = true
        to.params.idToken = window.$cookies.get('authn').idToken
    }
})

/*
* Middleware interceptor
* If the route we're going to requires authn, but requestor isn't authn'd, ask them to log in first
*/
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