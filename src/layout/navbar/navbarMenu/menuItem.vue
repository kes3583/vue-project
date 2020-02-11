<template>
  <li>
    <router-link :to="{name: data.name}" tag="div"><a class="sub">{{data.name}}</a><span :class="['fa', data.children && data.children.length > 0 ? 'fa-chevron-down': '']"></span></router-link>
    <ul v-if="data.children && data.children.length > 0" class="nav">
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
     
       
    }
}
}

</script>
