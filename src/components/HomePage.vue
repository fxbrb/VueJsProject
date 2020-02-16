<template>
    <div>
        <h2>Les Films</h2>
        <b-card-group>

        <ImgCard v-for="film in films"
        :title="film.Title"
        :img="film.Poster"
        :key="film.imdbID" 
        />
    
        </b-card-group>


    </div>
</template>

<script>

const axios = require('axios').default;

import ImgCard from './ImgCard.vue'

export default {
    name: 'HomePage',
    data(){
      return{
        films: null
      
      };
    },
    mounted(){

      axios
      .get("http://www.omdbapi.com/?s=batman&apikey=904eed5c")
      .then( response => (this.films = response.data.Search));
    },
    components:{
      ImgCard
    },
}
</script>

<style scoped>

</style>