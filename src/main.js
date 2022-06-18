import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
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
import store from '@/store'




new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')



Vue.filter('formatPrice', (value) => {
    return `￥${value.toFixed(2)}元`
})
