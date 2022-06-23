
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//引入页面组件
import Home from "@/views/Home";
import Category from "@/views/Category";
import Cart from "@/views/Cart";
import Topic from "@/views/Topic";
import User from "@/views/User";
import SearchPage from "@/views/SearchPage"
import GoodsDetail from "@/views/GoodsDetail"
import Channel from "@/views/Channel"

//配置路由规则
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/channel',
        component: Channel,
        name: 'channel',
        meta: {
            isTabbar: false
        }
    },
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            isTabbar: true
        },
        children: [{
            path: 'search',
            component: SearchPage,
            name: 'searchpage',
            meta: {
                isTabbar: false
            }
        }]
    },
    {
        path: '/category',
        component: Category,
        name: 'category',
        meta: {
            isTabbar: true
        },
    },
    {
        path: '/cart',
        component: Cart,
        name: 'cart',
        meta: {
            isTabbar: true
        },
    },
    {
        path: '/topic',
        component: Topic,
        name: 'topic',
        meta: {
            isTabbar: true
        },
    },
    {
        path: '/user',
        component: User,
        name: 'user',
        meta: {
            isTabbar: true
        },
    },
    {
        path: '/detail',
        component: GoodsDetail,
        name: 'detail',
        meta: {
            isTabbar: false
        },
    },
];


//如下代码结局路由重复 点击报错问题 这个报错是vue-router 3.X 报错, 4.x该报错没有
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};


const router = new VueRouter({
    mode: 'history',
    routes,
})

router.beforeEach((to, from, next) => {
    next()
    if (to.path == '/cart') {
        let token = localStorage.getItem('token');
        if (token) {
            next();
        } else {
            Vue.prototype.$toast({
                type: 'fail',
                message: '请先登录',
                duration: 1000
            })
            next('/user')
        }
    }
})


export default router


