import Vue from 'vue'
import Vuex from 'vuex'
import fullRoutes from '@/router/fullRoutes'

Vue.use(Vuex)

// module 폴더 안 파일 불러오기
const modulesFiles = require.context('./modules', false, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  modules,
  state: {
    title: 'admin',
    sidebar: {
      open: true
    },
    menu: {
      open: true
    },
    permittedRoutes: fullRoutes
  },
  getters: {
    sidebarOpen: state => state.sidebar.open,
    routes: state => state.permittedRoutes,
    menuOpen: state => state.menu.open
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.open = !state.sidebar.open
    },
    TOGGLE_MENU: state => {
      state.menu.open = !state.menu.open
    }
  },
  actions: {
  }
})
