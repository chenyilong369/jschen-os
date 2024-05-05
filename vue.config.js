const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // SVG 规则排除 icons 目录
    config.module.rule('svg')
      .exclude.add(path.resolve('src/assets/icons'))

    // 添加 icons 目录的 SVG loader
    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(path.resolve('src/assets/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
})
