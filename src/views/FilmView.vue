<template>
  <div class="page-wrap">
    <v-card :class="{ 'mx-10': screen.md }">
      <!-- Banner -->
      <v-img
          contain
          :src="film.movie_banner"
      >
          <AppRating :value="film.rt_score" />
      </v-img>

      <!-- Details -->
      <v-row :class="[ 'pb-3 text-dark pt-5', {'px-10': screen.mdAndUp, 'px-3': screen.smAndDown}]">
        <!-- Image -->
        <v-col cols="12" md="3">
          <v-img
              contain
              :src="film.image"
              alt="film-imge"
          ></v-img>
        </v-col>

        <!-- Description -->
        <v-col
          cols="12"
          md="9"
          :class="{'pl-6': screen.mdAndUp, 'px-5': screen.smAndDown}"
        >
          <h1 class="pb-1">{{ film.title }}</h1>
          <div class="text-justify">{{ film.description }}</div>

          <v-row no-gutters class="pt-5">
            <v-col cols="12" md="6">
              <div class="pb-5"><span class="font-weight-bold">Original Title:</span> {{ film.original_title }}</div>
              <div class="pb-5"><span class="font-weight-bold">Also Known As:</span> {{ film.original_title_romanised }}</div>
              <div class="pb-5"><span class="font-weight-bold">Director:</span> {{ film.director }}</div>
              <div class="pb-5"><span class="font-weight-bold">Producer:</span> {{ film.producer }}</div>
            </v-col>

            <v-col cols="12" md="6">
              <div class="pb-5"><span class="font-weight-bold">Release Date:</span> {{ film.release_date }}</div>
              <div class="pb-5"><span class="font-weight-bold">Running Time:</span> {{ film.running_time }} minutes</div>
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

    computed: {
      screen() { return this.$vuetify.breakpoint }
    },

    created() {
      this.getFilm();
    },

    methods: {
      async getFilm() {
        let response = await FilmData.getFilm(this.$route.params.id)
        this.film = response.data
      }
    },
  }
</script>