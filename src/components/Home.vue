<template>
  <div id="app" class="principal">
      <b-navbar class="navbar" toggleable="md" type="dark" >
         <b-navbar-brand href="#">
            <div class="brand-name-wrapper">
               <img class="logo" src="src/assets/logo.jpg">
             </div>
         </b-navbar-brand>
         <b-navbar-brand v-on:click="getCine">
             <img class="logo" src="src/assets/popcorn.png">
         </b-navbar-brand>
         <b-collapse is-nav id="nav_collapse">
             <select  class="col-sm-2 form-control form-control-lg" v-model="selected" v-on:click="getMovies" >
                 <option v-for="g in genres" v-bind:value="g.value" v-on:click="getMovies" >{{g.name}} </option>
             </select>
             <b-navbar-nav class="ml-auto">
                 <b-nav-form>
                     <b-form-input size="sm" class="col-sm-8 form-control form-control-lg" type="text" placeholder="Buscar" id="Buscar1"/>
                     <b-navbar-brand role="button" v-on:click="getBuscar">
                         <img class="logo" src="src/assets/search.png">
                     </b-navbar-brand>
                 </b-nav-form>
            </b-navbar-nav>
         </b-collapse>
      </b-navbar>
	    <div>
        <li v-for="item in movies" class="lista" >
            <div style="width:17rem;">
               <img class="card-img-top" :src="imageUrl + item.poster_path" style="width:17rem; height:25rem;" alt="Card image cap">
               <ul>
                   <div class="link">
                     <router-link :to="/pelicula/+item.id"  class="btn" tag="" style="background-color:#01d277; width:30px;"></router-link>
                   </div>
               </ul>
            </div>
        </li>
      </div>
      <br>
      <br>
      <br>
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
		 created: function() {
			this.getCine();

		},
		data () {
			return {
				imageUrl: 'https://image.tmdb.org/t/p/w342',
				selected: '1',
        url: '',
         trailer: [],
				 movies: [],
				 genres: [
			{ name: "Genero", value: '1' },
			{ name: "Accion", value: '28' },
			{ name: "Animada", value: '16' },
			{ name: "Fantasia", value: '14' },
			{ name: "Drama", value: '18' },
			{ name: "Guerra", value: '10752' },
			{ name: "Romance", value: '10749' },
			{ name: "Comedia", value: '35' },
			{ name: "Terror", value: '27' },
			{ name: "Aventura", value: '12' },
			{ name: "Familia", value: '107' }
			]
			}
		},

		methods: {
        getMovies(){
          console.log(this.selected);
          var genero = this.selected;
                this.axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1b62ccff88d2cd537027e1d82920197b&with_genres='+genero+'&sort_by=vote_average.desc&vote_count.gte=10').then((response)=>{
                     this.movies = response.data.results;
                     console.log(this.movies);
                });
          },
        getCine(){
                 axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1b62ccff88d2cd537027e1d82920197b&primary_release_date.gte=2018-05-15&primary_release_date.lte=2018-7-28').then((response)=>{
                     this.movies = response.data.results;
                     console.log(this.movies);

                });
          },
        getBuscar (){
          var pelicula = document.getElementById("Buscar1").value;
                axios.get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&api_key=1b62ccff88d2cd537027e1d82920197b&query='+pelicula+'&language=en-US'+
                    '').then((response)=>{
                     this.movies = response.data.results;
                });
          },

		}
	}
</script>

<style>

.lista {
  top: 25px;
  padding-right: 0px;
  display: inline-block;
  margin: 26px;
  width: 13rem;
  height:21rem;
  text-align: center;
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


.link{
  display: none;
}

.card-img-top: hover{
  

}



.voto{
position:absolute;
top: 35px;
padding-left: 30px;
}



</style>
