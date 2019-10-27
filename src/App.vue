<template>
  <div>
    <b-navbar class="navbar" toggleable="md" type="dark" >
         <b-navbar-brand href="#">
            <div class="brand-name-wrapper">
               <img class="logo" src="src/assets/logo.jpg">
             </div>
         </b-navbar-brand>
         <b-navbar-brand >
             <img class="logo" src="src/assets/popcorn.png">
         </b-navbar-brand>
         <b-collapse is-nav id="nav_collapse">
             <b-navbar-nav class="ml-auto">
            </b-navbar-nav>
         </b-collapse>
      </b-navbar>
      <router-view></router-view>

      <footer class="pie" >
          <img style="padding-top:20px;" src="src/assets/pie2.png">
          <a href="https://www.themoviedb.org/documentation/api">API DEVELOP</a>
          <a href="https://github.com/Bonato12/Vue-TMDB">GITHUB</a>
          <a href="#">@Sebastian Bonato 2018</a>
      </footer>
  </div>
</template>
<script>
	import Vue from 'vue'
  import axios from 'axios'

	import BootstrapVue from 'bootstrap-vue'
	import 'bootstrap/dist/css/bootstrap.css'
	import 'bootstrap-vue/dist/bootstrap-vue.css'
	Vue.use(BootstrapVue);


	export default {
		name: "app",
  		 created() {
        this.$router.push('/home');

  		},
  		data () {
  			return {

  		}
      },

  		methods: {

      }
		}
</script>

<style>

.lista {
  top: -65px;
  margin: 80px;
  padding-right: 200px;
  display: inline-block;
  vertical-align: top;
  width: 250px;
  position: relative;
  font-family: Arial, sans-serif
}

.logo{
width: 55px;
height: 55px;
}

.logo1{
width: 80px;
height: 80px;
position:relative;
padding-left: -50px;
top: -07px;
}

.navbar{
background-color: rgb(8, 28, 36);
}

.principal{
background-color: #81c7db;
}

.voto{
position:absolute;
top: 35px;
padding-left: 30px;
}

.pie{
width: 100%;
background-color: rgb(8, 28, 36);
}

</style>
