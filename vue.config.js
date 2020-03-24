const path = require('path')

module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'package'))
      .end()
      .use('bable')
      .loader('babel-loader')
      // 修改配置
      .tap(options => {
        return options
      })
  }
}
