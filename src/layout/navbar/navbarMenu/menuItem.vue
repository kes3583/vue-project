<template>
  <li>
    <router-link :to="{name: data.name}">{{data.name}}</router-link>
    <ul v-if="data.children && data.children.length > 0" >
      <menuItem v-for="(child,index) in data.children" :key="index" :data="child"/>
    </ul>
  </li>
</template>

<script>

export default {
  name: 'menuItem',
  props: {
    data: Object
  },
  watch: {
    $route (to, from) {
      // react to route changes...
     
      //console.log('currentRoute1', this.$router.currentRoute.name)
    
      
    }
  }
}

</script>
