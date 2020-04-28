
import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    disable: false,
    //dark: true, // default - light 
    default: 'light',
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#00bcd4',
        secondary: '#3f51b5',
        accent: '#e91e63',
        error: '#f44336',
        warning: '#ff5722',
        info: '#607d8b',
        success: '#ff9800',
        anchor: '#fff'
      },
      dark: {
        primary: colors.blue.lighten - 3
      }
    }
  }
})
