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
                <dropdown2  v-for="(item, idx) in dropdownItems" :key="idx" :item="item" />
              </div>
              <b-table fixed responsive :items="items" :fields='fields' :per-page="perPage"       :current-page="currentPage" @row-clicked="rowClick">
                <template v-slot:table-colgroup="scope">
                  <col width='50px'>
                  <col width='50px'>
                  <col width='150px'>
                  <col width='*'>
                  <col width='200px'>
                  <col width='*'>
                </template>
                <template v-slot:cell(tags)="row">
                  <span class="tag" v-for="(item, idx) in row.item.tags" :key="idx" :item="item"><span>{{ item }}</span></span>
                </template>
              </b-table>
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" align="center"></b-pagination>
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
import data from '@/data'
export default {
  name: 'boardList',
  components: {
    dropdown2
  },
  data () {
    let contentItems = data.Content.sort((a, b) => {
      return b.content_id - a.content_id
    }) // 내림차순 30 - 0

    return {
      selectedItem: null,
      dropdownItems: [{
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
      ],
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 보여줄 갯수
      fields: [
        {
          key: 'content_id',
          label: '번호'
        },
        {
          key: 'key',
          label: '키'
        },
        {
          key: 'title',
          label: '제목'
        },
        {
          key: 'context',
          label: '내용'
        },
        {
          key: 'tags',
          label: '태그'
        },
        {
          key: 'used',
          label: '사용'
        }
      ],
      // listItems: [
      //   { key: 21, title: 'Larsen', content: 'Shaw', tag: ['운전습관', '주유할인'], used: 'test' },
      //   { key: 40, title: 'Dickerson', content: 'Macdonald', tag: [], used: '' },
      //   { key: 89, title: 'Geneva', content: 'Wilson', tag: ['운전습관'], used: '' },
      //   { key: 38, title: 'Jami', content: 'Carney', tag: ['운전습관','주유할인'], used: '' }
      // ]
      items: contentItems

    }
  },
  methods: {
    // handleSelected (id) {
    //   this.selectedItem = id
    // },
    rowClick (item, index, e) {
      this.$router.push({
        path: `/board/view/${item.content_id}`
      })
    },
    goCreate () {
      this.$router.push({ path: '/board/create' })
    }
  },
  created () {
    
  },
  computed: {
    rows () {
      return this.items.length
    }
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
