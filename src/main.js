import Vue from 'vue'
import NProgress from 'vue-nprogress'
// eslint-disable-next-line no-unused-vars
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(NProgress)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
