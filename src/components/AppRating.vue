<template>
    <span class="rating px-3">{{ value }}</span>
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
        right: .5rem;
        bottom: .5rem;
        position: absolute;
        color: white;
        font-size: 1.5rem;
        background-color: orange;
        border-radius: 5px;
    }
</style>