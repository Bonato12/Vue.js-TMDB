import Home from './components/Home.vue'
import Pelicula from './components/Pelicula.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const rutas = new VueRouter({
          routes:[
            {
              path:'/home',
              component: Home
            },
            {
              path:'/pelicula/:id',
              component: Pelicula
            }
          ]
});

export default rutas;
