import axios from "axios";


//创建自定义配置实例
const instance = axios.create({
    baseURL: 'http://kumanxuan1.f3322.net:8001/',

    //配置请求时长  超时无响应则中断请求
    timeout: 1000,

    //配置请求头
    headers: { 'Content-Type': 'application/json' }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {

    // 在发送请求之前做些什么
    // 一半用于给请求头设置参数,一般是携带token
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