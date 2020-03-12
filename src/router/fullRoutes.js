
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
        name: '컨텐츠관리',
        component: () => import(/* webpackChunkName: "about" */ '@/components/About/child1.vue'),
        meta: {
          icon: 'bug'
        }
      },
      {
        path: 'about/child2',
        name: '이미지관리',
        component: () => import( /* webpackChunkName: "about" */ '@/components/About/child2.vue'),
        meta: {
          icon: 'bug'
        },
      }
    ]
  }
]

export default fullRoutes
