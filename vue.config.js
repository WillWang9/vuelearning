const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 去掉lint提示
    devServer: {
        port: 9999, // 修改端口号
        proxy: { // proxy 代理的意思
            '/api': { // /api表示当请求的地址中包含 /api 字段,那么该请求我就代理到target 这个目标地址
                target: 'http://kumanxuan1.f3322.net:8001',
                ws: true, // 远程连接 允许连接
                changeOrigin: true // 允许设置跨域
            }
        }
    },
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true, // 去掉打包后的.map文件,减少打包体积
})
