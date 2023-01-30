import { defineStore } from "pinia";
import { ref } from "vue";

export const useMoviesStore = defineStore("moviesStore", () => {
    let movies = ref([]);

    let fetchMovies = async () => {};

    return { movies, fetchMovies };
});
