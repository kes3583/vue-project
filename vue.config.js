module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint')
  },
  devServer: {
    port: 8002
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass/_variables.scss";`
      }
    }
  }
}
