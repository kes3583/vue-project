<template>
  <section class="forms">
    <div class="page-title">
      <div class="title_left">
        <h3>컨텐츠 관리</h3>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2>컨텐츠 리스트 <small>컨텐츠 내용을 검색합니다.</small></h2>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <br>
            <form id="demo-form2" data-parsley-validate="" class="form-horizontal form-label-left" novalidate="">
              <div class="item form-group">
                <dropdown v-for="(item, idx) in items" :key="idx" :item="item" :is-selected="selectedItem" @selected="handleSelected($event)" ref='dropdownMenu'>  </dropdown>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/sass/forms.scss'
import dropdown from '@/components/Forms/dropdown'
export default {
  name: 'contents',
  components: {
    dropdown
  },
  data () {
    return {
      selectedItem: null,
      items: [
        {
          title: 'Foo',
          description: 'I am the description for Foo'
        },
        {
          title: 'Bar',
          description: 'I am the description for Bar'
        },
        {
          title: 'ohh',
          description: 'I am the description for ohh'
        }
      ]

    }
  },
  methods: {
    handleSelected (id) {
      this.selectedItem = id
    }
  },
  created () {
    let count = 0
    this.items.forEach(el => {
      el.id = count
      count++
    })
    console.log(this.items)
  }
}

</script>
<style lang='scss'>
  .forms{
    .row{
      margin-top: 20px;
    }
  }
</style>
