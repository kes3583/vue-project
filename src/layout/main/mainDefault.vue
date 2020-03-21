<template>
  <div id="app-main" class="right_col" role="main">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

import { setContentHeight } from '@/utils/commonUtils'
export default {
  name: 'appMain',
  mounted () {
    setContentHeight()
  }
}
</script>
