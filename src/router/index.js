
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//引入页面组件
import Home from "@/views/Home";
import Category from "@/views/Category";
import Cart from "@/views/Cart";
import Topic from "@/views/Topic";
import User from "@/views/User";


//配置路由规则
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        name: 'home'
    },
    {
        path: '/category',
        component: Category,
        name: 'category'
    },
    {
        path: '/cart',
        component: Cart,
        name: 'cart'
    },
    {
        path: '/topic',
        component: Topic,
        name: 'topic'
    },
    {
        path: '/user',
        component: User,
        name: 'user'
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
})


//如下代码结局路由重复 点击报错问题 这个报错是vue-router 3.X 报错, 4.x该报错没有
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

export default router


