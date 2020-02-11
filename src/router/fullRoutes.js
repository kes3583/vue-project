/* eslint-disable no-trailing-spaces */
// eslint-disable-next-line no-unused-vars
import Home from '@/components/Home.vue'
const fullRoutes = [
  {
    path: '/',
    name: 'Home', //first letter to uppercase
    component: Home,
    meta: {
      icon: 'home'
    }
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/About/About.vue'),
    meta: {
      icon: 'bug'
    },
    children: [
      {
        path: 'child1-1',
        name: 'child11',
        component: () => import('@/components/About/child1'),
        children: [{
          path: 'subChild1',
          name: 'subChild1',
          component: () => import('@/components/About/subChild1')
        },
        {
          path: 'subChild2',
          name: 'subChild2',
          component: () => import('@/components/About/subChild2')
        }]
      },
      {
        path: 'child1-2',
        name: 'child12',
        component: () => import('@/components/About/child2')
      }
    ]
  },
  {
    path: '/Forms',
    name: 'Forms',
    component: () => import( /* webpackChunkName: "forms" */ '@/components/Forms/Forms.vue'),
    meta: {
      icon: 'edit'
    },
    // children: [
    //   {
    //     path: 'child2-1',
    //     name: 'child21',
    //     component: () => import('@/components/Forms/child1')
    //   },
    //   {
    //     path: 'child2-2',
    //     name: 'child22',
    //     component: () => import('@/components/Forms/child2'),
    //   }
    // ]
  },
  {
    path: '/Tables',
    name: 'Tables',
    component: () => import('@/components/Tables/Tables.vue'),
    meta: {
      icon: 'table'
    },
    children: [
      {
        path: 'child3-1',
        name: 'child31',
        component: () => import('@/components/Tables/child1')
      },
      {
        path: 'child3-2',
        name: 'child32',
        component: () => import('@/components/Tables/child2')
      }
    ]
  }
]

export default fullRoutes
