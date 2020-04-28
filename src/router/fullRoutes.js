
const fullRoutes = [
  {
    path: '/',
    component: () => import('@/components/board/boardList.vue')
  },
  {
    path: '/board/boardList',
    name: 'boardList',
    component: () => import(/* webpackChunkName: "BoardList" */ '@/components/board/boardList.vue'),
    meta: {
      icon: 'bug'
    }
  },
  {
    path: '/board/imageUpload',
    name: 'imageUpload',
    component: () => import(/* webpackChunkName: "ImageUpload" */ '@/components/board/imageUpload.vue'),
    meta: {
      icon: 'bug'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/components/Login.vue'),
    meta: {
      allowAnonymous: true
    }
  }, {
    path: '/error',
    name: 'Error',
    component: () => import(/* webpackChunkName: "Error" */ '@/components/Error.vue'),
    meta: {
      allowAnonymous: true
    }
  }
]

export default fullRoutes
