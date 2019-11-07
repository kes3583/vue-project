<template>
  <div id="app">
    <layoutDefault />
  </div>
</template>

<script>
import layoutDefault from '@/layout/layoutDefault.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.css'
import '@/assets/sass/custom.scss'

export default {
  name: 'app',
  components: {
    layoutDefault
  }
}
</script>

<style lang="scss">

</style>
