import { defineStore } from "pinia";
import { ref } from "vue";

export const useMoviesStore = defineStore("moviesStore", () => {
    let movies = ref([]);

    let fetchMovie = async () => {};

    return { movies, fetchMovie };
});
