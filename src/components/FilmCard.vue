<template>
    <router-link
        :to="{ name: 'film', params: { id: id }}"
        class="flex-grow-1 d-flex"
    >
        <v-hover v-slot="{ hover }">
            <v-card tile light flat style="position: relative">
                <!-- Card Banner -->
                <v-img
                    cover
                    height="300"
                    :src="banner"
                    alt="film-banner"
                >
                    <AppRating :value="rating" />
                </v-img>
                
                <div v-if="hover" class="card-border"></div>

                <!-- Card Body -->
                <v-card-text class="text-dark">
                    <v-row class="px-3">
                        <!-- Image -->
                        <v-col
                            :class="[ 'hidden-sm-and-down', { 'd-block': screen.mdAndUp }]"
                            cols="3"
                            :style="{ position: 'relative' }"
                        >
                            <div>
                                <v-img
                                    height="200"
                                    :src="image"
                                    class="float-image"
                                    alt="film-image"
                                ></v-img>
                            </div>
                        </v-col>

                        <!-- Description -->
                        <v-col
                            cols="12"
                            md="9"
                            :style="{ minHeight: '11.5rem' }"
                            :class="{ 'pl-6': screen.mdAndUp }"
                        >
                            <h1 class="break-word">{{ title }}</h1>
                            <div class="py-2">{{ originalTitle }} ({{ releaseDate }})</div>
                            <div class="truncate text-justify">{{ description }}</div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-hover>
    </router-link>
</template>

<script>
export default {
    name: 'FilmCard',

    props: {
        id: { type: String, default: '' },
        title: { type: String, default: '' },
        originalTitle: { type: String, default: '' },
        description: { type: String, default: '' },
        releaseDate: { type: String, default: '' },
        rating: { type: String, default: '' },
        banner: { type: String, default: '' },
        image: { type: String, default: '' },
    },

    computed: {
        screen() { return this.$vuetify.breakpoint }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .truncate {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }

    .break-word {
        word-break: break-word;
        line-height: 1.2;
    }

    .float-image {
        position: absolute;
        top: -2rem;
        left: .2rem;
    }

    .card-border {
        height: 5px;
        background-color: #FFA500;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
</style>