<template>
  <!-- sidebar menu -->
  <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
    <div class="menu_section">
      <h3>General</h3>
      <ul class="nav side-menu">
        <li v-for="route in routes" :key="route.fullPath">
          <router-link :to="{name: route.name}" :key="route.path">{{route.name}} <span class="fa fa-chevron-down"></span></router-link>
        </li>
        <!-- <li>
          <router-link to="/" >home {{$route.fullPath}} <span class="fa fa-chevron-down"></span></router-link>
        </li>
         <li>
          <router-link to="/about" >about<span class="fa fa-chevron-down"></span></router-link>
        </li>
         <li>
          <router-link to="/login" >login<span class="fa fa-chevron-down"></span></router-link>
        </li> -->
       
       
      </ul>
    </div>
   

  </div>
  <!-- /sidebar menu -->
</template>

<script>
  //import fullRoutes from '@/router/fullRoutes'
  import {mapGetters} from 'vuex'
  export default {
    name: "navbarMenu",
    data(){
      return{
        basePath: {
          type: String,
          default: ''
        },
      }
    },
    computed: {
      // fullPath() {
			// 	return (this.basePath + '/' + route.path).replace(/^\/\//, '\/') ;
			// },
			...mapGetters({
				routes: 'routes',
				sidebarOpen: 'sidebarOpen',
			})
    },
    mounted() {
    //console.log('Post has been mounted - routes', routes)
    }
  }

</script>
