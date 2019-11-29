<template>
  <div id="app" :style="STYLE_VARIABLES">
    <layoutDefault  />
  </div>
</template>

<script>
import layoutDefault from '@/layout/layoutDefault.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.css'
import '@/assets/sass/custom.scss'
import {mapGetters} from 'vuex';

export default {
  name: 'app',
  components: {
    layoutDefault
  },
  computed: {
			...mapGetters({
				STYLE_VARIABLES: 'STYLE_VARIABLES',
			})
	},
}
</script>

<style lang="scss">

</style>
