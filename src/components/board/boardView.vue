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
            <h2>컨텐츠 보기 <small>컨텐츠 보기입니다.</small></h2>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <br>

              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="name">Key</label>
                <div class="col-md-6 col-sm-6">
                  {{data.key}}
                </div>
              </div>
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="subject">제목 <span
                    class="required"> *</span>
                </label>
                <div class="col-md-6 col-sm-6 ">
                  {{data.title}}
                </div>
              </div>
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="contents">내용<span
                    class="required"> *</span>
                </label>
                <div class="col-md-6 col-sm-6 ">
                  {{data.context}}
                </div>
              </div>
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="tag">태그 </label>
                <div class="col-md-6 col-sm-6 ">
                  <template v-for="(item, index) in data.tags" :item='item' :index='index'>{{item}}, </template> 
                </div>
              </div>
               <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="used">사용 </label>
                <div class="col-md-6 col-sm-6 ">
                 {{data.used}}
                </div>
              </div>
              <div class="ln_solid"></div>
              <div class="item form-group">
                <div class="col-md-12 col-sm-12">
                  <button type="submit" class="btn btn-success" @click.prevent='updateData'>수정</button>
                  <button class="btn btn-primary" type="button" @click.prevent='deleteData'>삭제</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/sass/forms.scss'
import data from '@/data'
export default {
  name: 'view',
  components: {

  },
  data () {
    const contentId = Number(this.$route.params.contentId)

    // 내림차순일경우 params 과 content_id와 같은 값을 찾아 리턴
    const contentData = data.Content.filter(
      contentItem => contentItem.content_id === contentId
    )[0]
    console.log(contentId)
    console.log(contentData)
    return {
      data: contentData,
      index: contentId
    }
  },
  methods: {
    goTo (url) {
      this.$router.push({
        path: url
      })
    },
    updateData () {
      this.$router.push({
        path: `/board/create/${this.index}`
      })
    },
    deleteData () {
      // 내림차순이므로 30부터 세기 시작하니 맞는 인덱스를 찾아서 리턴
      const contentIndex = data.Content.findIndex(
        contentItem => contentItem.content_id === this.index
      )
      console.log('content_index', contentIndex)
      data.Content.splice(contentIndex, 1)
      this.$router.push({
        path: '/'
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
