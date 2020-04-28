<template>
<div>
  <v-list-group ref="vList" no-action v-model="active">
    
    <template v-slot:activator>
      
      <v-list-item-title>컨텐츠 관리</v-list-item-title>
    </template>
    <v-list nav dense >
      <v-list-item link  :to="{ path: '/board/boardList' }">
        <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
        <v-list-item-title>컨텐츠 리스트</v-list-item-title>
      </v-list-item>
      <v-list-item link :to="{ path: '/board/imageUpload' }">
        <v-list-item-title>이미지 업로드</v-list-item-title>
      </v-list-item>
    </v-list>
    
  </v-list-group>
  
</div>
</template>

<script>

export default {
  inheritAttrs: false,
  name: 'menuItems',
  data () {
    return {
      active: false,
      icon: 'mdi-view-dashboard'      
    }
  },
  computed: {

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
