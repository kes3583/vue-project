
const fullRoutes = [
  // {
  //   path: '/',
  //   component: () => import('@/components/board/boardList.vue')
  // },
  {
    path: '/',
    //redirect: '/board/boardList',
    name: '컨텐츠 게시판 ',
    component: () => import(/* webpackChunkName: "BoardList" */ '@/components/board/boardList.vue'),
    meta: {
      icon: 'mdi-playlist-plus' // material-design-icons https://cdn.materialdesignicons.com/4.5.95/
    }
  },
  {
    path: '/board/imageUpload',
    name: '이미지 업로드',
    component: () => import(/* webpackChunkName: "ImageUpload" */ '@/components/board/imageUpload.vue'),
    meta: {
      icon: 'mdi-upload'
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
