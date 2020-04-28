<template>
  <v-container fluid grid-list-xl>
    <v-layout d-flex flex-column pa-5>
      <h2 class="mb-6 mt-5">이미지 업로드</h2>
      <v-form class="dropzone dz-clickable">
        <vue-dropzone ref="dropzone" id="dropzone" :options="dropzoneOptions" @vdropzone-complete="afterComplete"></vue-dropzone>
        <div ref="dropzoneUrl"></div>
        <div class="form-group row">
          <div class="col-md-12 tr">
            <button type="button" class="btn btn-secondary" @click="removeAllFiles">removeAllFiles</button>
          </div>
        </div>
      </v-form>
    </v-layout>
  </v-container>
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
