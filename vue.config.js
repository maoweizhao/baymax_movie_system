
const path = require('path')
module.exports = {

  //   配置路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@cp', path.resolve('src/components'))
      .set('@vi', path.resolve('src/views'))
  },
  //   配置server
  devServer: {
    host: 'localhost',
    port: 3000,
    // 代理配置
    // proxy: {
    //   '/api': {
    //     // 代理
    //     target: 'https://',
    //     changeOrigin: true,
    //     PathRewrite: {
    //       '/api': ''
    //     }
    //   }
    // },
    // 配置自动启动浏览器
    open: true
  },
  // 配置icon图标
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }

  }
}
