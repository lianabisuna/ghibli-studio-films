<template>
  <div>
    <div class="text-center pb-5">
      <v-pagination
        v-model="page"
        :length="4"
      ></v-pagination>
    </div>

    <v-row class="mx-10">
      <v-col
        class="d-flex flex-column"
        v-for="(film, index) in films"
        :key="index"
        cols="12"
        md="6"
      >
        <FilmCard
          :id="film.id"
          :title="film.title"
          :original-title="film.original_title"
          :description="film.description"
          :release-date="film.release_date"
          :rating="film.rt_score"
          :banner="film.movie_banner"
          :image="film.image"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import FilmCard from '../components/FilmCard'
  import FilmData from '../api/film'

  export default {
    name: 'HomeView',

    components: {
      FilmCard,
    },

    data: () => ({
      films: null,
      page: 1
    }),

    created() {
      this.getFilms();
    },

    methods: {
      async getFilms() {
        let response = await FilmData.getFilms()
        this.films = response.data
        console.log(this.films, response)
      }
    }
  }
</script>
