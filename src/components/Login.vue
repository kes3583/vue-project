<template>
  <div class="login">
    <div>
      <a class="hiddenanchor" id="signup"></a>
      <a class="hiddenanchor" id="signin"></a>

      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
            <form>
              <h1>로그인</h1>
              <div>
                <input type="text" class="form-control" placeholder="아이디를 입력해주세요" required="" />
              </div>
              <div>
                <input type="password" class="form-control" placeholder="비밀번호를 입력해주세요" required="" />
              </div>
              <div>
                <a class="btn btn-default submit" href="/">Log in</a>
                <a class="reset_pass" href="#">Lost your password?</a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">처음이신가요?
                  <a href="#signup" class="to_register"> 관리자신청 </a>
                </p>

                <div class="clearfix"></div>
                <br />
              </div>
            </form>
          </section>
        </div>

        <div id="register" class="animate form registration_form">
          <section class="login_content">
            <form>
              <h1>관리자 신청</h1>
              <div>
                <input type="text" class="form-control" placeholder="아이디" required="" id="first-id"/>
                <label class="col-form-label col-md-3 col-sm-3 label-align" for='first-id'>First Name <span
                    class="required">*</span>
                </label>
              </div>
              <div>
                <input type="text" class="form-control" placeholder="이름" required="" />
              </div>
              <div>
                <input type="email" class="form-control" placeholder="이메일" required="" />
              </div>
              <div>
                <input type="password" class="form-control" placeholder="비밀번호" required="" />
              </div>
              <div>
                <a class="btn btn-default submit" href="/">신청</a>
              </div>

              <div class="clearfix"></div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  name: 'login',
  data () {
    return {
      form: {
        email: '',
        name: '',
        checked: []
      },
      show: true,
      isActive: false
    }
  },
  created () {
    this.isActive = true
  },
  mounted () {
    // console.log('body', document.querySelector('body'))
    // console.log('this', this.$el.parentNode.parentElement)
    document.querySelector('body').classList.add('login')
    // this.$el.parentNode.parentElement.parentElement.parentElement.classList.remove('login')
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  beforeDestroy () {
    // console.log('body', document.querySelector('body'))
    this.isActive = false
    // document.querySelector('body').classList.remove('login')
  }
}
</script>
<style lang="scss" scoped>
  .login{

      background: #f7f7f7 !important

  }
</style>
