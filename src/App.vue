<template>
  <div id="app">
    <div class="container body">
      <div class="main_container">
        <Navbar />
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/views/navbar/Navbar.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.css'
import '@/assets/sass/custom.scss'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
