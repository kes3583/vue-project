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
            <h2>컨텐츠 등록 <small>컨텐츠를 등록합니다.</small></h2>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <br>
            <form id="demo-form2" data-parsley-validate="" class="form-horizontal form-label-left" novalidate="">
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="name">Key</label>
                <div class="col-md-6 col-sm-6">
                  tmapweb-afede135f1d
                </div>
              </div>
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="subject">제목 <span
                    class="required"> *</span>
                </label>
                <div class="col-md-6 col-sm-6 ">
                  <input type="text" id="subject" required="required" class="form-control" placeholder="제목입력">
                </div>
              </div>
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="contents">내용<span
                    class="required"> *</span>
                </label>
                <div class="col-md-6 col-sm-6 ">
                  <input type="text" id="contents" name="contents" required="required" class="form-control" placeholder="내용입력">
                </div>
              </div>
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="tag">태그 </label>
                <div class="col-md-6 col-sm-6 ">
                  <vue-tags-input v-model="tag" :tags="tags" :autocomplete-items="filteredItems" @tags-changed="newTags => tags = newTags" id="tag"/>
                </div>
              </div>
              <div class="ln_solid"></div>
              <div class="item form-group">
                <div class="col-md-12 col-sm-12">
                  <button class="btn btn-primary" type="button" @click.prevent="go('/about/child1')">취소</button>
                  <button type="submit" class="btn btn-success">저장</button>
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
import VueTagsInput from '@johmun/vue-tags-input'
export default {
  name: 'contents',
  components: {
    VueTagsInput
  },
  data () {
    return {
      tag: '',
      tags: [{
        text: '운전습관'
      }, {
        text: '주유할인'
      }],
      autocompleteItems: [{
        text: 'Spain'
      }, {
        text: 'France'
      }, {
        text: 'USA'
      }, {
        text: 'Germany'
      }, {
        text: 'China'
      }]
    }
  },
  computed: {
    filteredItems () {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    go (url) {
      this.$router.push({
        path: url
      })
    }
  }
}

</script>
<style lang='scss'>
  .form-group{
    input{font-size:.85em}
    .col-md-12.col-sm-12 {display:flex; justify-content: center;}
    .col-md-6.col-sm-6 {display:flex; align-items: center;}
  }
  .ln_solid{clear:both;}
  /* default styles for vue tags input */
  .vue-tags-input{
    max-width: 100% !important;
    width: 100%;
    .ti-tag {
      position: relative;
      background: #26B99A;
      color: #fff;
    }
  }
</style>
