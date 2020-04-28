import Navigation from '@/layout/navbar/NavigationDrawer.vue'
import MenuItems from '@/layout/navbar/menuItems.vue'

function setupComponents (Vue) {
  Vue.component('navigation', Navigation)
  Vue.component('menuItems', MenuItems)
}

export {
  setupComponents
}
