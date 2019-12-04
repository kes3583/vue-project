// eslint-disable-next-line no-unused-vars
import Home from '@/views/Home.vue'
const fullRoutes = [{
  path: '/',
  name: 'home',
  component: Home,
  meta: {
    icon: 'home'
  }
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  meta: {
    icon: 'edit'
  }
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login.vue')
}
]

export default fullRoutes
