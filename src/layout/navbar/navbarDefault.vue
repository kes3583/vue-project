<template>
  <div class="col-md-3 left_col" id="sidebar">
    <div class="left_col scroll-view">
      <logo />

      <div class="clearfix"></div>

      <profile />

      <br />

      <navbarMenu />

      <navbarFooter />
    </div>
  </div>
</template>

<script>
import logo from '@/layout/navbar/logo'
import navbarMenu from '@/layout/navbar/navbarMenu/index.vue'
import profile from '@/layout/navbar/profile.vue'
import navbarFooter from '@/layout/navbar/navbarFooter.vue'

export default {
  name: 'navbarDefault',
  components: {
    logo,
    navbarMenu,
    profile,
    navbarFooter
  }
}

</script>

<style lang="scss" scoped>
.left_col {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    transition: width 0.3s;
    //background-color: var(--sidebar-bgc);
    width: var(--sidebar-width);
    height: 100vh;

}
</style>
