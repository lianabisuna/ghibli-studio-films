<template>
    <router-link
        :to="{ name: 'film', params: { id: id }}"
        class="flex-grow-1 d-flex"
    >
        <v-card rounded="0">
            <v-img
                cover
                height="300"
                :src="banner"
            >
                <AppRating :value="rating" />
            </v-img>

            <v-card-text>
                <v-row>
                    <v-col cols="3" :style="{ position: 'relative' }">
                        <v-img
                            contain
                            height="200"
                            :src="image"
                            class="float-image"
                        ></v-img>
                    </v-col>

                    <v-col cols="9" :style="{ minHeight: '11.2rem' }">
                        <h1 class="break-word">{{ title }}</h1>
                        <div class="subtitle-1 pb-2">{{ originalTitle }} ({{ releaseDate }})</div>
                        <div class="truncate">{{ description }}</div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
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
        -webkit-line-clamp: 4;
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