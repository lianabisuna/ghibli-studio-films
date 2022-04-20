<template>
  <div class="page-wrap">
    <!-- Pagination -->
    <div class="d-flex justify-center align-center pb-10">
      <v-pagination
        circle
        v-if="shownFilms.length"
        v-model="pagination.page"
        :length="pages"
        color="#FFA500"
      ></v-pagination>
    </div>

    <!-- Card List -->
    <v-row
      :class="{ 'mx-10': screen.md }"
      align="center"
      justify="center"
    >
      <v-col
        class="d-flex flex-column"
        v-for="(film, index) in shownFilms"
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
      films: [],
      pagination: {
        page: 1,
        total: 0,
        perPage: 4
      }
    }),

    computed: {
      pages () {
        return Math.ceil(this.pagination.total/this.pagination.perPage)
      },
      shownFilms() {
        let spliceIndex = (this.pagination.page*this.pagination.perPage)-this.pagination.perPage
        return this.films.slice(spliceIndex, spliceIndex + this.pagination.perPage)
      },
      screen() { return this.$vuetify.breakpoint }
    },

    created() {
      this.getFilms();
    },

    methods: {
      async getFilms() {
        let response = await FilmData.getFilms()
        this.films = response.data
        this.pagination.total = this.films.length
      },
    }
  }
</script>
