<template>
  <v-list-group ref="vList"  no-action  value="true" v-model="active" prepend-icon="fa-edit" >
    <template v-slot:activator>
      <v-list-item-title>컨텐츠 관리</v-list-item-title>
    </template>
    <v-list flat dense>
      <v-list-item link :to="route.path" :key="index" v-for="(route, index) in routes">
        <!-- <v-list-item-icon><v-icon>{{ route.meta.icon }}</v-icon></v-list-item-icon> -->
        <v-list-item-title>{{route.name}} </v-list-item-title>
      </v-list-item>

      <!-- <v-list-item link :to="{ path: '/board/imageUpload' }">
        <v-list-item-title>이미지 업로드</v-list-item-title>
      </v-list-item> -->
    </v-list>
  </v-list-group>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'menuItems',
  data () {
    return {
      active: true,
      icon: 'mdi-view-dashboard'
    }
  },
  computed: {
    routes () {
      return this.$store.getters.routes.filter(i => {
        return i.meta.icon
      })
    }
  },
  mounted () {

  },
  watch: {
    active: function (newVal, oldVal) { // watch it
      var vm = this
      console.log('props', newVal, oldVal)
      console.log('data', vm.toggle)
      // this.toggle = true
    }
  }

}

</script>
<style scoped lang="scss">
  a:hover{text-decoration:none}
</style>
