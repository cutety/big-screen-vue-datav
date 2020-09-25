const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave:false,
  runtimeCompiler: true,
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8282/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      }
    } // 设置代理
  },
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
}