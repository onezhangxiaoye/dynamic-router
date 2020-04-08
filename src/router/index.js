import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]



export const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

router.$addRoutes = (params) => {
    router.matcher = new VueRouter({routes}).matcher; // 重置路由规则
    router.addRoutes(params) // 添加路由
};

export default router;
