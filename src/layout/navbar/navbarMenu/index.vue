<template>
  <!-- sidebar menu -->
  <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
    <div class="menu_section">
      <h3>General</h3>
      <ul class="nav side-menu">
        <li v-for="(route, index) in routes" :key="index" >
          <navbarMenu :route="route" />
        </li>
      </ul>
    </div>
   

  </div>
  <!-- /sidebar menu -->
</template>

<script>
import navbarMenu from '@/layout/navbar/navbarMenu/navbarMenu'
import { mapGetters } from 'vuex'
export default {
  name: 'navbarMenuDefault',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    navbarMenu
  },
  data () {
    return {
     
    }
  },
  computed: {
    ...mapGetters({
      routes: 'routes',
      menuOpen: 'menuOpen',
    }),
    currentPage () {
      return this.$router.currentRoute.fullPath
    }
  },
  mounted () {
    //console.log('path', this.$route.path)
  },
  methods: {
    toggleMenu () {
      // this.$store.commit('TOGGLE_MENU');
      console.log('path', this.$route.path)
    }
  },
  watch: {
    $route (to, from) {
      // react to route changes...
      //console.log('li >', this.$el)
    }
  }
}

</script>
