// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'echarts/theme/macarons.js'
import './assets/js/bootstrap.min.js'
import './assets/css/bootstrap.min.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
//   router,
  components: { App },
  template: '<App/>'
})  
