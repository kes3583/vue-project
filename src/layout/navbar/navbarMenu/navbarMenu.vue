<template>
  <router-link :to="{name: route.name}" exact tag="div">
    <a>
      <i :class="['fa-' + route.meta.icon, 'fa']"></i> {{route.name}} <span :class="['fa', route.children && route.children.length > 0 ? 'fa-chevron-down': '']" v-show="route.name !='home'"></span>
    </a>
    <ul class="nav child_menu" v-if="hasActiveChildren(route)">
      <menuItem v-for="(child,index) in route.children" :key="index" :data="child"/>
    </ul>
  </router-link>
</template>

<script>
import menuItem from '@/layout/navbar/navbarMenu/menuItem'
import { setContentHeight } from '@/utils/commonUtils'
import { hasActiveChildren } from '@/utils/routerUtils'

export default {
  name: 'navbarMenu',
  props: {
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
  mounted () {
    // console.log('window.location.pathname', window.location.pathname)
    setContentHeight()
  },
  methods: {
    hasActiveChildren
  },
  watch: {
    $route (to, from) {
      // react to route changes...
      if (this.$router.currentRoute.name !== this.route.name && !this.$router.currentRoute.fullPath.includes(this.route.name)) {
        this.$el.parentElement.classList.remove('active')
        if (this.route.children && this.route.children.length > 0) this.$el.lastChild.style.display = 'none'
      } else {
        this.$el.parentElement.classList.add('active')
        if (this.route.children && this.route.children.length > 0) {
          // console.log('this.$route.fullPath', this.$route.fullPath)
          // this.$el.parentElement.classList.add('current-page')
          this.$el.lastChild.style.display = 'block'
        }
      }
    }
  }
}

</script>

<style lang="scss">
  .side-menu{
    //li.active>div>a{font-weight: bold;color:#fff}
    li.active .active.router-link-active .nav li div a.sub{font-weight: none;}
  }
  .child_menu li div.router-link-active {
    a.sub{font-weight: bold; color:#fff}
  }

</style>
