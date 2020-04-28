<template>
  <!-- sidebar menu -->
  <v-navigation-drawer app v-bind:value="value" v-on:input="$emit('input', $event)" fixed >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-title>John Leider</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>
    
    <menuItems></menuItems>
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
