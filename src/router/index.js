import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import Layout from "../views/layout/Layout.vue";
import Login from '../views/login/Login.vue'
const Dest = () => import('../views/destination/Index.vue')
const Cotravel = () => import('../views/co_travel/Co-travel.vue')
const Note = () => import('../views/note/note.vue')
const Vlog = () => import('../views/vlog/vlog.vue')
// 在VueRouter上配置路由跳转
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
    return routerPush.call(this, location).catch(err => { })
};

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "/",
                name: "home",
                component: HomeView,
            },
            {
                path: '/dest',
                component: Dest,
                meta: {
                    isLogin: true
                }
            },
            {
                path: '/cotravel',
                component: Cotravel,
                meta: {
                    isLogin: true
                }
            },
            {
                path: '/note',
                component: Note,
                meta: {
                    isLogin: true
                }
            },
            {
                path: '/vlog',
                component: Vlog,
                meta: {
                    isLogin: true
                }
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
