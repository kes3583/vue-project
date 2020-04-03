
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
        component: () => import(/* webpackChunkName: "boardList" */ '@/components/About/child1.vue'),
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
        path: 'about/create/:contentId?',
        name: 'create',
        component: () => import(/* webpackChunkName: "Create" */ '@/components/About/create.vue')
      },
      {
        path: 'about/view/:contentId',
        name: 'view',
        component: () => import(/* webpackChunkName: "View" */ '@/components/About/view.vue')
      }
    ]
  }
]

export default fullRoutes
