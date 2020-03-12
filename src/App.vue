<template>
  <div id="app" :style="STYLE_VARIABLES">
    <router-view></router-view>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.css'
import '@/assets/sass/custom.scss'
import '@/assets/sass/_reboot.scss'
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

<style lang="scss">

</style>
