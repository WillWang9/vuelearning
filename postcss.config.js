module.exports = {
    plugins: {
        "postcss-pxtorem": {
            rootValue: 37.5, // 根据设计稿尺寸填写 
            propList: ["*"], //是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
            unitPrecision: 5, //保留rem小数点多少位
            selectorBlackList: ['.van'],  //过滤黑名单 排除vant
            minPixelValue: 1, //px小于1的不会被转换
        },
    },
};