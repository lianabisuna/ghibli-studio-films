<template>
    <span class="rating white--text">{{ value }}</span>
</template>

<script>
export default {
    name: 'AppRating',

    props: {
        value: { type: String, default: '' }
    }
}
</script>

<style scoped>
    .rating {
        right: 1rem;
        bottom: 0;
        position: absolute;
        font-size: 3rem;
        text-shadow: 2px 2px #263238;
    }
</style>