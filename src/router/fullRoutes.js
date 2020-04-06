
const fullRoutes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/components/Login')
  },
  {
    path: '/',
    redirect: '/board/boardList',
    component: () => import('@/layout/layoutDefault'),
    children: [
      {
        path: 'board/boardList',
        name: 'boardList',
        component: () => import(/* webpackChunkName: "BoardList" */ '@/components/board/boardList.vue'),
        meta: {
          icon: 'bug'
        }
      },
      {
        path: 'board/imageUpload',
        name: 'imageUpload',
        component: () => import(/* webpackChunkName: "ImageUpload" */ '@/components/board/imageUpload.vue'),
        meta: {
          icon: 'bug'
        }
      },
      {
        path: 'board/create/:contentId?',
        name: 'create',
        component: () => import(/* webpackChunkName: "Create" */ '@/components/board/boardCreate.vue')
      },
      {
        path: 'board/view/:contentId',
        name: 'view',
        component: () => import(/* webpackChunkName: "View" */ '@/components/board/boardView.vue')
      }
    ]
  }
]

export default fullRoutes
