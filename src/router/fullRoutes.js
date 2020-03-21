
const fullRoutes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/components/Login')
  },
  {
    path: '/',
    redirect: '/about/child1',
    component: () => import('@/layout/layoutDefault'),
    children: [
      {
        path: 'about/child1',
        name: 'child1',
        component: () => import(/* webpackChunkName: "List" */ '@/components/About/child1.vue'),
        meta: {
          icon: 'bug'
        }
      },
      {
        path: 'about/child2',
        name: 'child2',
        component: () => import(/* webpackChunkName: "ImageList" */ '@/components/About/child2.vue'),
        meta: {
          icon: 'bug'
        }
      },
      {
        path: 'about/create',
        name: 'create',
        component: () => import(/* webpackChunkName: "Create" */ '@/components/About/create.vue')
      },
    ]
  }
]

export default fullRoutes
