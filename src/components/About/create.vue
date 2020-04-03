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
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="key">Key</label>
                <div class="col-md-6 col-sm-6">
                  <b-form-input id="key" size="sm" placeholder="" v-model='key'></b-form-input>
                </div>
              </div>
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="subject">제목 <span
                    class="required"> *</span>
                </label>
                <div class="col-md-6 col-sm-6 ">
                  <b-form-input id="subject" v-model='subject' size="sm" placeholder="제목입력"></b-form-input>
                </div>
              </div>
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="context">내용<span
                    class="required"> *</span>
                </label>
                <div class="col-md-6 col-sm-6 ">
                 <b-form-input id="context" v-model="context" size="sm" placeholder="내용"></b-form-input>
                </div>
              </div>
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="tags">태그 </label>
                <div class="col-md-6 col-sm-6 ">
                  <vue-tags-input id='tags' v-model="tag" :tags="tags" @tags-changed="newTags => tags = newTags" placeholder='태그입력' />
                </div>
              </div>
              <div class="item form-group">
                <label class="col-form-label col-md-3 col-sm-3 label-align" for="used">사용<span
                    class="required"> *</span>
                </label>
                <div class="col-md-6 col-sm-6 ">
                 <b-form-input id="used" v-model="link" size="sm" placeholder="사용"></b-form-input>
                </div>
              </div>
              <div class="ln_solid"></div>
              <div class="item form-group">
                <div class="col-md-12 col-sm-12">
                  <button class="btn btn-primary" type="button" @click.prevent="goTo('/')">취소</button>
                  <button type="submit" class="btn btn-success" @click.prevent="index !== undefined ? updateContent() : uploadContent() ">저장</button>
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
import data from '@/data'
export default {
  name: 'contents',
  components: {
    VueTagsInput
  },
  data () {
    const contentId = Number(this.$route.params.contentId)
    const contentData = data.Content.filter(
      contentItem => contentItem.content_id === contentId
    )[0]
    console.log('contentData.tags', contentData.tags)
    var contentTags = contentData.tags.map((v, i) => ({ 'text': contentData.tags[i] }))
    // console.log('contentTags',contentTags)
    return {
      index: contentId,
      tag: '',
      subject: contentId !== undefined ? contentData.title : '',
      key: contentId !== undefined ? contentData.key : '',
      context: contentId !== undefined ? contentData.context : '',
      tags: contentId !== undefined ? contentTags : [],
      used: contentId !== undefined ? contentData.used : ''
    }
  },
  methods: {
    // get tags' text
    getTagsText (item) {
      return item.text
    },
    uploadContent () { // 저장
      let contentItems = data.Content.sort((a, b) => { return b.content_id - a.content_id })
      console.log()
      const contentId = contentItems[0].content_id + 1 // 마지막 데이터의 id + 1

      data.Content.push({
        content_id: contentId,
        key: this.key,
        title: this.subject,
        context: this.context,
        tags: this.tags.map(this.getTagsText),
        used: this.used
      })

      this.$router.push({
        path: '/'
      })
    },
    goTo (url) {
      this.$router.push({
        path: url
      })
    },
    updateContent () { // 수정
      const contentIndex = data.Content.findIndex(
        contentItem => contentItem.content_id === this.index
      )
      // console.log(this.subject)
      // console.log(this.index)
      // console.log(data.Content[29])
      // console.log('contentIndex', contentIndex)

      data.Content[contentIndex].key = this.key
      data.Content[contentIndex].title = this.subject
      data.Content[contentIndex].context = this.context
      data.Content[contentIndex].tags = this.tags.map(this.getTagsText)
      data.Content[contentIndex].link = this.link
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
