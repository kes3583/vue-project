//mixin.js

const MyMixin = {
  methods: {
    setContentHeight () {
      //const CURRENT_URL = window.location.href.split('#')[0].split('?')[0]
      const BODY = document.querySelector('body')
      //const MENU_TOGGLE = document.querySelector('#menu_toggle')
      //const SIDEBAR_MENU = document.querySelector('#sidebar-menu')
      const SIDEBAR_FOOTER = document.querySelector('.sidebar-footer')
      const LEFT_COLS = document.querySelectorAll('.left_col')
      const RIGHT_COL = document.querySelector('.right_col')
      const NAV_MENU = document.querySelector('.nav_menu')
      const FOOTER = document.querySelector('footer')
      const FOOTER_FIXED = document.querySelector('footer_fixed')
      
      // reset height
      //console.log('RIGHT_COL mixin', RIGHT_COL)
      RIGHT_COL.style.minHeight = window.outerHeight + 'px'
      const bodyHeight = BODY.outerHeight
      const footerHeight = BODY.contains(FOOTER_FIXED) ? -10 : FOOTER.offsetHeight
      const leftColHeight = LEFT_COLS[1].offsetHeight + SIDEBAR_FOOTER.offsetHeight
      let contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight

      // normalize content
      contentHeight -= NAV_MENU.offsetHeight + footerHeight

      RIGHT_COL.style.minHeight = contentHeight + 'px'
    }
  },
  mounted () {
    this.setContentHeight() //여기에 실행하거나 컴포넌트에서 실행하여도 상관없으나, 각 컴포넌트에 실행하는게 나을거 같다. 
  }
}

export default MyMixin
