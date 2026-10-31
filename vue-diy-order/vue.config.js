module.exports = {
  devServer: {
    proxy: {
      '/api': {                                  // api 表示拦截以/api开头的请求路径
        target: 'http://hmajax.itheima.net/api', // 跨域的域名（不需要写路径）  axios请求地址要改成api/news
        // ws:true                               // 是否代理websocked
        changeOrigin: true,                      // 是否开启跨域   
        pathRewrite: {                           // 重写路径 
          '/api': ''                             // 把/api变为空字符
          // 如果target 路径后面去掉/api,可以忽略pathRewrite
        }
      }
    }
  }
}