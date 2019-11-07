//mixin.js
const CURRENT_URL = window.location.href.split('#')[0].split('?')[0]
const BODY = document.querySelector('body')
const MENU_TOGGLE = document.querySelector('#menu_toggle')
const SIDEBAR_MENU = document.querySelector('#sidebar-menu')
const SIDEBAR_FOOTER = document.querySelector('.sidebar-footer')
const LEFT_COL = document.querySelector('.left_col')
const RIGHT_COL = document.querySelector('.right_col')
const NAV_MENU = document.querySelector('.nav_menu')
const FOOTER = document.querySelector('footer')
  
const MyMixin = {
  methods: {
    setContentHeight () {
      // reset height
      RIGHT_COL.css('min-height', window.outerHeight);

      const bodyHeight = BODY.outerHeight,
        footerHeight = BODY.hasClass('footer_fixed') ? -10 : FOOTER.offsetHeight,
        leftColHeight = LEFT_COL.eq(1).offsetHeight + SIDEBAR_FOOTER.offsetHeight,
        contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

      // normalize content
      contentHeight -= NAV_MENU.offsetHeight + footerHeight;

      RIGHT_COL.css('min-height', contentHeight);
    };
  }
}
export default MyMixin