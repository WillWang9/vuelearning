import Vue from 'vue'
import App from './App.vue'


//引入amfe-flexible
import 'amfe-flexible'

//引入全局样式表
import '@/assets/css/reset.css'

//引入less
import less from 'less'
Vue.use(less)

//引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


//引入vue router
import router from '@/router'


//引入vuex
// import store from '@/store'


//引入懒加载插件
import VueLazyload from 'vue-lazyload'
//定义懒加载GIF图片
const loadimage = require('./assets/images/loading.gif')
const errorimage = require('./assets/images/w.jpg')
Vue.use(VueLazyload, {
    loading: loadimage,
    error: errorimage,
    attempt: 1
});


//价格格式化的过滤器
Vue.filter('formatPrice', (value) => {
    return `￥${value.toFixed(2)}元`
})


//取消开发模式提示
Vue.config.productionTip = false


new Vue({
    // store,
    router,
    render: h => h(App),
    components: {
        App
    }
}).$mount('#app')






