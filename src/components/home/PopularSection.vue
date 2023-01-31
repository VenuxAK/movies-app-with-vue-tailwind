<script setup>
import Movie from "../movies/Movie.vue";
import Loading from "../Loading.vue";
import { useMoviesStore } from "../../store/useMoviesStore";
import { ref, computed } from "vue";

let moviesStore = useMoviesStore();
let movies = ref([]);
moviesStore.fetchMovies().then((_movies) => {
    setTimeout(() => {
        movies.value = _movies;
    }, 1000);
});
</script>

<template>
    <div class="container">
        <h1 class="text-2xl text-yellow-500 font-semibold mx-4 mb-6">Popular Now</h1>
        <div v-if="movies.length != 0">
            <div class="movies-container">
                <Movie v-for="movie in movies" :key="movie" :movie="movie" />
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
