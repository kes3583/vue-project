<template>
 <div>
    <b-dropdown split  split-variant="outline-primary" variant="primary" class="m-2">
      <template v-slot:button-content>{{item.title}}    </template>
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import '@/assets/sass/forms.scss'
export default {
  name: 'dropdown',
  props: {
    item: Object,
    isSelected: Number

  },
  data () {
    return {
      // iAmSelected: false
    }
  },

  methods: {

  }
}

</script>

<style>
</style>
