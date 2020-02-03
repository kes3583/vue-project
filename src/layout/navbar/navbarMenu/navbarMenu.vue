<template>
  <router-link :to="{name: route.name}" ><i :class="['fa-' + route.meta.icon, 'fa']"></i> {{route.name}}
  <span :class="['fa', route.children && route.children.length > 0 ? 'fa-chevron-down': '']" v-show="route.name !='home'"></span>
  <ul class="nav child_menu" v-if="hasActiveChildren(route)">
    <menuItem v-for="(child,index) in route.children" :key="index" :data="child"/>
  </ul>
  </router-link>
</template>

<script>
import menuItem from '@/layout/navbar/navbarMenu/menuItem'
// import { setContentHeight } from "@/utils/commonUtils"

export default {
  name: 'navbarMenu',
  props:{
    route: Object
  },
  components: {
    menuItem
  },
  data () {
    return {
      currentRoute: ''
    }
  },
  // mounted () {
  //   console.log('Post has been mounted - sidebarOpen')
  //   // eslint-disable-next-line no-undef
  //   //hasActiveClass()
  //   //this.toggleMenu()
  // },
  methods: {
    toggleMenu () {
      // this.$store.commit('TOGGLE_MENU');
      console.log('currentRoute', this.$router.currentRoute.name)
      console.log('route name', this.route.name)
      //this.$router.currentRoute.name === this.route.name
    },
    hasActiveChildren (route) {
      if (this.route.children && this.route.children.length > 0) {
        for (let r of this.route.children) {
          if (!r.hidden) {
            return true
          }
        }
        return false
      }
      return false
    }
  },
  watch: {
    $route (to, from) {
      // react to route changes...
      //console.log('li >', this.$el)
     
      //this.$el.parentElement.classList.add('active')
      //console.log('currentRoute', this.$router.currentRoute.name)
      //console.log('route name', this.route.name)
      if (this.$router.currentRoute.name !== this.route.name && !this.$router.currentRoute.fullPath.includes(this.route.name) ) {
        // console.log('this.$router.fullpath??', this.$router.currentRoute.fullPath)
        // console.log('this.$router.fullpath.includes??', )
        // console.log('this.route.name?', this.route.name)
        // console.log('current Route???', this.$router.currentRoute.name)
       
        this.$el.parentElement.classList.remove('active')
        if (this.route.children && this.route.children.length > 0) {
         
          this.$el.lastChild.style.display = 'none'
        }
          
        
      } else {
        this.$el.parentElement.classList.add('active')        
        
        if (this.route.children && this.route.children.length > 0) {
          //console.log('this.el?', this.$el.querySelectorAll('a'))
          //console.log('this.current route.name?', this.$router.currentRoute)
          this.$el.lastChild.style.display = 'block'
        }
      }
    }
  }
}

</script>
