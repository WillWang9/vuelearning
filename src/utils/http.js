import instance from "./request";

//home的axios请求
export function getHomeData(params) {
    return instance({
        url: '/index/index',
        method: 'get',
        params: params,
    })
}

//topic的axios请求
//参数  page当前页数    size每页显示个数
export function getTopicData(params) {
    return instance({
        url: "/topic/list",
        method: 'get',
        params: params,
    })
}

//category全部分类数据的axios请求
export function getCategoryData(params) {
    return instance({
        url: "/catalog/index",
        method: 'get',
        params: params,
    })
}


//category当前分类数据的axios请求
export function getCurrentCategoryData(params) {
    return instance({
        url: "/catalog/current",
        method: 'get',
        params: params,
    })
}


//login数据axios请求
export function postLogin(data) {
    return instance({
        url: "/auth/loginByWeb",
        method: 'post',
        data: data,
        headers: { 'content-type': 'application/json' }
    })
}