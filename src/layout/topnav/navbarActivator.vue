<template>
  <div id="sidebar-activator" class="nav toggle" @click="toggleSidebar">
    <a id="menu_toggle" :class="{'activator-turn':!sidebarOpen}"><i class="fa fa-bars" ></i></a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
var body = document.body
export default {
  name: 'navbarActivator',
  methods: {
    toggleSidebar () {
      this.$store.commit('TOGGLE_SIDEBAR')

      console.log(this.$store.state.sidebar.open)
      if (!this.$store.state.sidebar.open) {
        // console.log('false1')
        this.setBodyClassSm()
      } else {
        // console.log('true1')
        this.setBodyClassMd()
      }
    },
    setBodyClassMd () {
      body.classList.add('nav-md')
      body.classList.remove('nav-sm')
    },
    setBodyClassSm () {
      body.classList.add('nav-sm')
      body.classList.remove('nav-md')
    }
  },
  computed: {
    ...mapGetters({
      sidebarOpen: 'sidebarOpen'
    })
  }
}

</script>

<style lang="scss" scoped>
 #sidebar-activator {
		//width: var(--toolbar-height);
		//text-align: center;
		//line-height: var(--toolbar-height);
		//padding-left: calc(var(--sidebar-width) - 65px);
		//transition: padding-left 0.3s;
	}
</style>
