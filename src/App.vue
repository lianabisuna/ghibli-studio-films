<template>
  <v-app>
    <PageHeader v-if="isHome" />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import PageHeader from './components/PageHeader'

  export default {
    name: 'App',

    components: {
      PageHeader
    },

    computed: {
      isHome() { return this.$route.name == 'home' }
    }
  };
</script>

<style>
  #app {
    background: #263238;
    font-family: Inter, Helvetica, Arial, sans-serif;
    padding: 4rem 2rem 4rem 2rem;
  }

  .page-wrap {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
  }

  .title-text {
    font-size: 3.5rem;
  }

  .subtitle-text {
    width: 25rem !important;
  }

  .text-dark {
    color: #263238 !important;
  }
</style>
