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
            <form id="demo-form1" data-parsley-validate="" class="form-horizontal form-label-left" novalidate="">
              <div class="item form-group">
                <dropdown2  v-for="(item, idx) in items" :key="idx" :item="item" />
              </div>   

              <table class="table">
                <colgroup>
                  <col span='3' width='15%'>
                  <col width='300px'>
                  <col width='*'>
                </colgroup>
                <thead>
                  <tr>
                    <th>key</th>
                    <th>title</th>
                    <th>contents</th>
                    <th>tag</th>
                    <th>*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <span class="tag"><span>social&nbsp;&nbsp;</span><a href="#" title="Removing tag">x</a></span>
                      <span class="tag"><span>social&nbsp;&nbsp;</span><a href="#" title="Removing tag">x</a></span>
                    </td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
              <div class="form-group row">
                <div class="col-md-12 tr">
                  <button type="submit" class="btn btn-success" @click.prevent="goCreate">등록</button>
                </div>
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
import dropdown2 from '@/components/Forms/dropdown2'
export default {
  name: 'contents',
  components: {
    dropdown2
  },
  data () {
    return {
      selectedItem: null,
      items: [{
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
    },
    goCreate () {
      this.$router.push({ path: '/about/create' })
      
    }
  },
  created () {
    let count = 0
    this.items.forEach(el => {
      el.id = count
      count++
    })
    //console.log(this.items)
  }
}

</script>
<style lang='scss'>
  .forms {
    .row {
      margin-top: 20px;
    }
    table th, table td{text-align: center;}
    
  }
  td span{line-height: 1 !important}
</style>
