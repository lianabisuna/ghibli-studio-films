<template>
  <div class="px-10">
    <v-img
        cover
        height="400"
        :src="film.movie_banner"
    >
        <AppRating :value="film.rt_score" />
    </v-img>
  </div>
</template>

<script>
  import FilmData from '../api/film'

  export default {
    name: 'FilmView',

    data: () => ({
      film: null
    }),

    mounted() {
      this.getFilm();
    },

    methods: {
      async getFilm() {
        let response = await FilmData.getFilm(this.$route.params.id)
        this.film = response.data
        console.log('film', this.film)
      }
    },
  }
</script>