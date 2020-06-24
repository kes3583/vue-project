import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { setupComponents } from '@/utils/setupComponents'

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.css'
import '@/assets/sass/_reboot.scss'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/sass/_custom.scss'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
setupComponents(Vue)

Vue.config.productionTip = false

window.myVueComponent = new Vue({
  // data () {
  //   return {
  //     userEmail: 'admin@admin.com',
  //     password: '1234'
  //   }
  // },
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
