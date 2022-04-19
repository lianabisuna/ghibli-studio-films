<template>
    <router-link
        :to="{ name: 'film', params: { id: id }}"
        class="flex-grow-1 d-flex"
    >
        <v-hover v-slot="{ hover }">
            <v-card tile light flat style="position: relative">
                <v-img
                    cover
                    height="300"
                    :src="banner"
                >
                    <AppRating :value="rating" />
                </v-img>

                <div v-if="hover" style="height: 5px; background-color: orange; position: absolute; top: 0; left: 0; width: 100%;"></div>

                

                <v-card-text style="color: #263238;">
                    <v-row class="px-3">
                        <v-col cols="3" :style="{ position: 'relative' }">
                            <div class="">
                                <v-img
                                    contain
                                    height="200"
                                    :src="image"
                                    class="float-image"
                                ></v-img>
                            </div>
                        </v-col>

                        <v-col cols="9" :style="{ minHeight: '11.5rem' }" class="pl-6">
                            <h1 class="break-word">{{ title }}</h1>
                            <div class="subtitle-1 pb-2">{{ originalTitle }} ({{ releaseDate }})</div>
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
</style>