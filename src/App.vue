<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
          <v-app id="inspire">
            <div class="app-container">
              <v-app-bar app>
                <v-app-bar-nav-icon @click.native.stop="sidebarOpen = !sidebarOpen" />
                <v-toolbar-title>Application</v-toolbar-title>
              </v-app-bar>
              <navigation v-model="sidebarOpen" />
              <v-content>
                <router-view></router-view>
              </v-content>
            </div>
          </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>
<script>

export default {
  name: 'app',
  computed: {
    sidebarOpen: {
      get () { return this.$store.getters.sidebarOpen },
      set (v) { return this.$store.commit('TOGGLE_SIDEBAR', v) }
    }

  }

}

</script>
