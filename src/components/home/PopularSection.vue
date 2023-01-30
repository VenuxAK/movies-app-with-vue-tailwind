<script setup>
import Movie from "../movies/Movie.vue";
import Loading from "../Loading.vue";
</script>

<template>
    <div class="container">
        <h1 class="text-2xl text-yellow-500 font-semibold mx-4 mb-6">Popular Now</h1>
        <div v-if="true">
            <div class="movies-container">
                <Movie v-for="movie in 21" :key="movie" :movie="movie" />
            </div>
        </div>
        <div v-else>
            <Loading :ellipsis="true" />
        </div>
    </div>
</template>

<style>
.movies-container {
    @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9;
}
</style>
