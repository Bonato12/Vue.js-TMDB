import Vue from 'vue'
import App from './App.vue'
import rutas from './routes.js'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

new Vue({
  el: '#app',
  router: rutas,
  render: h => h(App)
})
