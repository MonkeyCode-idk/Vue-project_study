module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://hmajax.itheima.net/api',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}