<template>
  <!-- sidebar menu -->
  <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
    <div class="menu_section">
      <h3>General</h3>
      <ul class="nav side-menu">
        <!-- <router-link to="/" exact tag="li">
          <a>
            <i class='fa-home fa'></i> 컨텐츠 관리 <span class='fa'></span>
          </a>
        </router-link> -->
        <li><a @click="toggleChildren"><i class="fa fa-edit"></i> 컨텐츠 관리 <span class="fa fa-chevron-down"></span></a>
          <ul class="nav child_menu" v-show='showChildren'>
            <router-link to="/board/boardList" exact tag="li"> <a>컨텐츠 관리</a></router-link>
            <router-link to="/board/imageUpload" exact tag="li"> <a>이미지 관리</a></router-link>
          </ul>
        </li>

      </ul>
    </div>

  </div>
  <!-- /sidebar menu -->
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'navbarMenuDefault',
  data () {
    return {
      showChildren: true
    }
  },
  computed: {
    ...mapGetters({
      routes: 'routes',
      menuOpen: 'menuOpen'
    })
  },
  mounted () {

  },
  methods: {
    toggleChildren () {
      this.showChildren = !this.showChildren
    }
  },
  watch: {
    $route (to, from) {
      // react to route changes...
      // console.log('li >', this.$el)
    }
  }
}

</script>
