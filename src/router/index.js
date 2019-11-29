import Vue from 'vue'
import VueRouter from 'vue-router'
import fullRoutes from './fullRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  fullRoutes

})

export default router
