<template>
  <div style="max-width: 80rem; margin-left: auto; margin-right: auto">
    <v-card class="mx-10">
      <v-img
          cover
          height="400"
          :src="film.movie_banner"
      >
          <AppRating :value="film.rt_score" />
      </v-img>

      <v-row class="px-10 pt-6 pb-3" style="color: #263238;">
        <v-col cols="3">
          <v-img
              :src="film.image"
          ></v-img>
      </v-col>

      <v-col cols="9" class="pl-6">
        <h1 class="pb-1">{{ film.title }}</h1>
        <div class="text-justify">{{ film.description }}</div>

        <v-row class="pt-5">
          <v-col>
            <div class="pb-5"><span class="font-weight-bold">Original Title:</span> {{ film.original_title }}</div>
            <div class="pb-5"><span class="font-weight-bold">Also Known As:</span> {{ film.original_title_romanised }}</div>
            <div class="pb-5"><span class="font-weight-bold">Director:</span> {{ film.director }}</div>
            <div class="pb-5"><span class="font-weight-bold">Producer:</span> {{ film.producer }}</div>
          </v-col>

          <v-col>
            <div class="pb-5"><span class="font-weight-bold">Release Date:</span> {{ film.release_date }}</div>
            <div class="pb-5"><span class="font-weight-bold">Running Time:</span> {{ film.running_time }}</div>
          </v-col>
        </v-row>
      </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
  import FilmData from '../api/film'

  export default {
    name: 'FilmView',

    data: () => ({
      film: []
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

<style scoped>
  .float-image {
    position: absolute;
    top: -5rem;
    left: .2rem;
  }
</style>