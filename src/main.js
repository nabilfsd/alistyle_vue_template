import Vue from 'vue'
import App from './App.vue'
import router from './router'

import jQuery from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css'
// custom css
// import './assets/css/nav-sidebar.css'
import './assets/fonts/font-awesome-5/css/all.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

import 'popper.js'
import 'bootstrap'
window.$ = window.jQuery = jQuery

// custom scripts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
