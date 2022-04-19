<template>
    <span class="rating">{{ value }}</span>
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
        color: white;
        font-size: 3rem;
        text-shadow: 2px 2px #263238;
    }
</style>