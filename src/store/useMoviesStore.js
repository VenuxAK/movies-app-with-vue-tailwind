import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../services/api";

export const useMoviesStore = defineStore("moviesStore", () => {
    let movies = ref([]);
    let movie = ref({});
    let fetchMovies = async () => {
        let response = await api.get("/movie/popular");
        movies.value = await response.data.results;
        return movies.value;
    };

    let fetchAboutMovie = async (movie_id) => {
        let url = `/movie/${movie_id}?append_to_response=videos,images,credits`;
        let response = await api.get(url);
        movie.value = await response.data;
        return movie.value;
    };

    let searchMovies = async (query) => {
        let url = `/search/movie?query=${query}`;
        let response = await api.get(url);
        movies.value = await response.data.results;
        return movies.value;
    };

    return { movies, fetchMovies, fetchAboutMovie, searchMovies };
});
