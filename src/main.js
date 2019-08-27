import Vue from 'vue'
import App from './App.vue'

import GYUI from './index.js'
Vue.use(GYUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
