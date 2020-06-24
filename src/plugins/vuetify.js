
import Vue from 'vue'
import Vuetify from 'vuetify'


Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    //disable: false,
    dark: false, // default - light 
    default: 'light',
    options: {
      customProperties: true
    },
    themes: {
      light: {
        // primary: '#464d69',
        // secondary: '#464d69',
        // drawer: '#464d69',
        // accent: '#464d69',
        // error: '#f44336',
        // warning: '#ff5722',
        // info: '#607d8b',
        // success: '#ff9800',
        // anchor: '#464d69'     
      }
    }
  }
})
