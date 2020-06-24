<template>
  <!-- sidebar menu -->
  <v-navigation-drawer app v-bind:value="value" v-on:input="$emit('input', $event)" fixed >
    <h1 class="d-flex">
        <a href="index.html"  class="d-flex justify-center align-center">
          <!-- <i class="logo"></i> -->
          Admin
        </a>
    </h1>
    <v-list-item>      
      <v-avatar color="red">
        <span class="white--text headline">CJ</span>
      </v-avatar>
      <v-list-item-title  flex-column class="user-name">
        <span>Welcome,</span>
        <h6>강은심</h6>
      </v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>
    
    <menuItems></menuItems>
    <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
    </template>
  </v-navigation-drawer>
  <!-- /sidebar menu -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navigation',
  props: {    
    value: {
      type: Boolean,
      default: false
    }
  },  
  data () {
    return {
      permanent: false,
      miniVariant: true
    }
  },
  created () {

  },
  mounted () {

  },
  computed: {
    ...mapGetters({
      routes: 'routes'
    })
  },

}

</script>
<style lang="scss">
.v-navigation-drawer {
    background-color: primary;
}
</style>
