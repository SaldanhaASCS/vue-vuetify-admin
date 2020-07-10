import 'normalize.css/normalize.css'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import Vue from 'vue'
import VueTheMask from 'vue-the-mask'
import Axios from 'axios'
import vuetify from './plugins/vuetify'
import i18n from './locale' // Internationalization

import App from './App.vue'
import router from './router'
import store from './store'

import './router/permission'
import './registerServiceWorker'

/* Deixando o axios disponível de forma global somente para componentes
através de herança(prototype do javascript). Use this.$axios. */
Vue.prototype.$axios = Axios

new Vue({
  router,
  store,
  i18n,
  vuetify,
  VueTheMask,
  render: (h) => h(App)
}).$mount('#app')
