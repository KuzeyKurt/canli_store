import Vue from "vue";
import Router from "vue-router";

import canCatalog from "../components/can-catalog";
import canCart from "../components/can-cart";

Vue.use(Router);

let router = new Router({
    routes:
    [
    {
        path: '/',
        name: 'catalog',
        component: canCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: canCart,
        props: true
    }
]
});

export default router;