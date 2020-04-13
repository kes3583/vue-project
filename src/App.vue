<template>
  <div id="app" :style="STYLE_VARIABLES">
    <v-app id="inspire">
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {

  },
  computed: {
    ...mapGetters({
      STYLE_VARIABLES: 'STYLE_VARIABLES'
    })
  }
}
</script>
