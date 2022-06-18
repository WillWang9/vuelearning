import instance from "./request";

//home的axios请求

export function getHomeData(params) {
    return instance({
        url: '/index/index',
        method: 'get',
        params: {},
    })
}