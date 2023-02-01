<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { useMoviesStore } from "../store/useMoviesStore";
import Movie from "./movies/Movie.vue";
import Loading from "./Loading.vue";

let moviesStore = useMoviesStore();
let route = useRoute();
let query = route.params.name;
let searchedMovies = ref([]);

moviesStore.searchMovies(query).then((_movies) => {
    searchedMovies.value = _movies;
});

</script>

<template>
    <div class="container">
        <h1 class="text-2xl text-yellow-500 font-semibold mx-4 mb-6">Search</h1>
        <div v-if="searchedMovies.length > 0">
            <div class="movies-container">
                <Movie
                    v-for="movie in searchedMovies"
                    :key="movie"
                    :movie="movie"
                />
            </div>
        </div>
        <div v-else>
            <Loading :ellipsis="true" />
        </div>
    </div>
</template>

<style></style>
