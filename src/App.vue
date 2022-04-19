<template>
  <v-app>
    <h1 class="py-5 flex text-center white--text">Ghibli Studio Films</h1>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  #app {
    background: #263238;
  }
</style>
