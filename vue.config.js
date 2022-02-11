const path = require('path')
module.exports = {
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/base.less')]
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('components', path.resolve(__dirname, 'src/components'))
      .set('assets', path.resolve(__dirname, 'src/assets'))
      .set('views', path.resolve(__dirname, 'views'))
  }
}
