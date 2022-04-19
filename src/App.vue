<template>
  <v-app>
    <h1 class="py-5 flex text-center white--text">Ghibli Studio Films</h1>
    <!-- <v-img
      width="300"
      src="@/assets/logo.png"
    ></v-img> -->

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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  #app {
    background: #263238;
    font-family: 'Poppins';
  }
</style>
