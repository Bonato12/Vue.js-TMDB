<template>
  <div id="app" class="principal">
	    <div>
        <li v-for="item in movies" class="lista" >
            
            <div style="height:400px">
               <img class="card-img-top" @click="getIdMovies(item.id)" :src="imageUrl + item.poster_path" style="width:15rem; height:25rem;" alt="Card image cap">
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
                this.axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b80639b9f5a2e4e880b931dedbec575b&with_genres='+genero+'&sort_by=vote_average.desc&vote_count.gte=10').then((response)=>{
                     this.movies = response.data.results;
                     console.log(this.movies);
                });
          },
        getCine(){
                 axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b80639b9f5a2e4e880b931dedbec575b&sort_by=popularity.desc').then((response)=>{
                     this.movies = response.data.results;
                     console.log(this.movies);

                });
          },
        getBuscar (){
          var pelicula = document.getElementById("Buscar1").value;
                axios.get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&api_key=b80639b9f5a2e4e880b931dedbec575b&query='+pelicula+'&language=en-US'+
                    '').then((response)=>{
                     this.movies = response.data.results;
                });
          },
          getIdMovies(id){
              console.log(id);
              this.$router.push('/pelicula/'+id)
          }

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
  height:23rem;
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

.card-img-top:hover{
  opacity: 0.5;

}



.voto{
position:absolute;
top: 35px;
padding-left: 30px;
}



</style>
