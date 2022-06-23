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

// 购物车数据请求
export function getCartData(params) {
    return instance({
        url: '/cart/index',
        method: 'get',
        params: params, // get 请求属性名为params
        headers: {
            'X-Nideshop-Token': localStorage.getItem('token')
        }
    })
}


//商品步进器
export function cartUpdate(data) {
    return instance({
        url: '/cart/update',
        method: 'post',
        data: data,
        headers: { 'content-type': 'application/json' }
    })
}


//商品删除
export function cartDelete(data) {
    return instance({
        url: '/cart/delete',
        method: 'post',
        data: data,
        // headers: { 'content-type': 'X-WWW-FORM-URLENCODED' }
        headers: { 'content-type': 'application/json' }
    })
}


//搜索数据
export function getSearchData(params) {
    return instance({
        url: "/search/index",
        method: 'get',
        params: params,
    })
}

//删除历史搜索
export function clearHistory(data) {
    return instance({
        url: '/search/clearhistory',
        method: 'post',
        data: data,
        headers: { 'content-type': 'application/json' }

    })
}

// 根据搜索的关键字进行搜索
export function searchGoods(params) {
    return instance({
        url: '/goods/list',
        method: 'get',
        params: params,

    })
}

//搜索商品列表
export function search(params) {
    return instance({
        url: '/goods/list',
        method: 'get',
        params: params,
    })
}


//商品详情
export function goodsDetail(params) {
    return instance({
        url: '/goods/detail',
        method: 'get',
        params: params,
    })
}

//相关商品
export function goodsRelated(params) {
    return instance({
        url: '/goods/related',
        method: 'get',
        params: params,
    })
}


//加入购物车
export function addCartAJAX(data) {
    return instance({
        url: '/cart/add',
        method: 'post',
        data: data,
        headers: { 'content-type': 'application/json' }
    })
}

//购物车产品数量
export function cartNum(params) {
    return instance({
        url: '/cart/goodscount',
        method: 'get',
        params: params,
    })
}



export function getGoodsCate(params) {
    return instance({
        url: '/goods/category',
        method: 'get',
        params: params,
    })
}