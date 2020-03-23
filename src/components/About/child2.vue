<template>
  <section class="forms">
    <div class="page-title">
      <div class="title_left">
        <h3>이미지 관리</h3>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2>이미지 등록 <small>이미지 등록합니다.</small></h2>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <br>
            <form action="form_upload.html" class="dropzone dz-clickable">
              <vue-dropzone ref="dropzone" id="dropzone" :options="dropzoneOptions" @vdropzone-complete="afterComplete"></vue-dropzone>
              <div ref="dropzoneUrl"></div>
              <div class="form-group row">
                <div class="col-md-12 tr">
                  <button type="button" class="btn btn-secondary" @click="removeAllFiles">removeAllFiles</button>
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
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  name: 'contents',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        addRemoveLinks: true
      }
    }
  },
  methods: {
    removeAllFiles () {
      this.$refs.dropzone.removeAllFiles()
    },
    afterComplete (file) {
      console.log(file.name)
      console.log(this.dropzoneOptions.url + '/' + file.name)
    }
  }
}

</script>
<style lang='scss'>
  .forms {
    .row {
      margin-top: 20px;
    }
  }

</style>
