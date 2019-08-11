import Vue from 'vue'
import App from './App.vue'
import rutas from './routes.js'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)

new Vue({
  el: '#app',
  router: rutas,
  render: h => h(App)
})
