<template>
  <div role="presentation" class="dropdown multi-dropdown" ref="dropdownMenu">
    <a id="drop6" href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button"
      aria-expanded="false" @click.prevent='toggleDropdown'>
       {{item.title}}
       <span class="caret"></span>
    </a>
    <div v-show='iAmSelected' class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start"
      style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 44px, 0px);">
       <input type="text" placeholder="Search.." id="myInput" />
      <div class='list-scroll'>
        <ul class='col-md-9 col-sm-9'>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox" checked="checked">가나다</label>
          </li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>
          <li><label class="dropdown-item" title="가나다"><input type="checkbox">가나다</label></li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/sass/forms.scss'
import { mapGetters } from 'vuex'
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
  computed: {
    iAmSelected () {
      return this.isSelected === this.item.id
    }
  },
  methods: {
    toggleDropdown () {
      this.$emit('selected', this.item.id)
    },
    close (e) {
      let el = this.$refs.dropdownMenu
      if (!this.$el.contains(e.target)) {
        console.log(el)
        console.log(this.$el)
        //this.$emit('selected', -1)
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.close)
  }
}

</script>

<style>
</style>
