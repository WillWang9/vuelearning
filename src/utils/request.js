import axios from "axios";



// 输出环境变量
//process.env 是node中的全局变量  类似于js中的 window

//?console.log(process.env.NODE_ENV); 
// development 或 production
//?console.log(process.env.VUE_APP_BASE_URL); 
// 开发对应的值是 /api 或 生产环境对应的值是 http://kumanxuan1.f3322.net:8001



//创建自定义配置实例
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,

    //配置请求时长  超时无响应则中断请求
    timeout: 5000,

    //配置请求头
    headers: { 'Content-Type': 'application/json' }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {

    // 在发送请求之前做些什么
    // 一半用于给请求头设置参数,一般是携带token

    const token = localStorage.getItem('token');
    if (token) {
        // 请求发送前,设置headers 属性,添加参数
        config.headers['X-Nideshop-Token'] = token
    }

    return config;

}, function (error) {

    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {

    // 对响应数据做点什么
    // 例如判断状态码 更新本地储存内容
    return response;

}, function (error) {

    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance


