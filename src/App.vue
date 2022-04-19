<template>
  <v-app>
    <div
      v-if="isHome"
      class="white--text text-center"
    >
      <span style="font-size: 3.5rem; font-weight: bold;">GHIBLI STUDIO</span>
    </div>

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

  computed: {
    isHome() { return this.$route.name == 'home' }
  }
};
</script>

<style>
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  #app {
    background: #263238;
    font-family: 'Inter';
    padding: 4rem 2rem 4rem 2rem;
  }
</style>
