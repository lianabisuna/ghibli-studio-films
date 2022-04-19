<template>
  <div style="max-width: 80rem; margin-left: auto; margin-right: auto">
    <!-- Pagination -->
    <div class="d-flex justify-center align-center pb-10 hidden">
      <v-pagination
        v-model="pagination.page"
        :length="pages"
        @input="onPageChange"
        circle
        color="#FFA500"
      ></v-pagination>
    </div>

    <!-- Card List -->
    <v-row class="mx-10" align="center" justify="center">
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
      pagination: {
        films: null,
        page: 1,
        total: 0,
        perPage: 4,
        visible: 4
      }
    }),

    watch() {
      // this.pagination.page
    },

    computed: {
      pages () {
        return Math.ceil(this.pagination.total/this.pagination.perPage)
      },
      shownFilms() {
        // Splice items from list
        let tempFilms = JSON.parse(JSON.stringify(this.films));
        let spliceIndex = (this.pagination.page*this.pagination.perPage)-this.pagination.perPage

        console.log('count', this.pagination.page, this.pagination.perPage)
        console.log('films', spliceIndex, tempFilms)

        return tempFilms.splice(spliceIndex, this.pagination.perPage)
      }
    },

    mounted() {
      this.getFilms();
    },

    methods: {
      onPageChange(event) {
        console.log(event)
      },
      async getFilms() {
        // Retrive all films
        let response = await FilmData.getFilms()
        this.pagination.total = response.data.length
        this.films = response.data
      },

      // Pagination
      showNextPage() {
        this.pagination.page++
      },

      showPrevPage() {
        this.pagination.page--
      }
    }
  }
</script>
