const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap:false,
  lintOnSave:false,
  runtimeCompiler: true,
  devServer: {
    compress: true,
    disableHostCheck: true,
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    proxy: {
      '/api/v1': {
        //39.97.178.218
        target: 'http://localhost:3000/api/v1',
        changeOrigin: true,
        ws:true,
        pathRewrite: {
          '^/api/v1': '',
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
