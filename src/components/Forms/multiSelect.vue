<template>
  <div>
    <label class="typo__label">key</label>
    <multiselect v-model="value" :options="options1" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="false" placeholder="Pick multiple option" :preselect-first="false" @select="dispatchAction" @remove="removeAction(value)">
      <template slot="tag" slot-scope=""><span></span></template>
      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
          v-if="values.length && !isOpen">{{ values.length }} options selected</span></template>
    </multiselect>

  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
  components: {
    Multiselect
  },
  props: {
    data: []
  },
  data () {
    return {
      value: [],
      options1: ['options1', 'Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect'],
      options2: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  },
  methods: {
    dispatchAction (actionName) {
      console.log('action!')
    },
    removeAction (value) {
      console.log('remove!')
      console.log(`remove! ${value}`)
    }
  }
}

</script>

<style>
</style>
