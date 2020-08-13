const path = require('path')
const config = require('./src/config.js')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    /**
     * Criação automática de certificado auto-assinado para ambiente de desenvolvimento
     * Referencia: https://webpack.js.org/configuration/dev-server/#devserverhttps
     *
     * Outra opção é adicionar --https em "vue-cli-service serve" no package.json
     * Referência: https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-serve
     */

    // https: true
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-vuetify-admin/'
    : '/',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: config.title,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
