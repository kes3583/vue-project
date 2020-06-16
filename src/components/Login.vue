<template>
  <v-app id="login" class="secondary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>               
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                    v-model="userEmail"
                    :error="error"
                    :rules="rules.email"/>
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="hidePassword ? 'visibility_off' : 'visibility'"
                    name="password"
                    label="Password"
                    id="password"
                    :rules="[rules.required]"
                    v-model="password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
        v-model="showResult"
        :timeout="2000"
        top>
        {{ result }}
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      userEmail: 'admin@yopmail.com',
      password: '123456',
      testEmail: 'admin@admin.com',
      testPassword: '1234',
      hidePassword: true,
      error: false,
      showResult: false,
      result: '',
      rules: {
        email: [value => !!value || 'E-mail is required', value => /.+@.+/.test(value) || 'E-mail must be valid'],
        required: value => !!value || 'Required.'
      }
    }
  },

  methods: {
    login () {
      const vm = this

      if (!vm.userEmail || !vm.password) {
        vm.result = "Email and Password can't be null."
        vm.showResult = true

        return
      }

      if (vm.userEmail === vm.testEmail && vm.password === vm.testPassword) {
        vm.$router.push({ path: '/' })
      } else {

        vm.error = true
        vm.result = 'Email or Password is incorrect.'
        vm.showResult = true
      }
    }
  }
}
</script>

<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
