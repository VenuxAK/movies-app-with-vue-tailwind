<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useMoviesStore } from "../../store/useMoviesStore";
import FsLightbox from "fslightbox-vue/v3";
import Loading from "../Loading.vue";
import Casts from "./Casts.vue";
import Posters from "./Posters.vue";

let moviesStore = useMoviesStore();
let movie = ref({
    videos: {
        results: [{}],
    },
});
let route = useRoute();
let img_db = "https://image.tmdb.org/t/p/w500/";
let toggler = ref(false);
let video = ref(null);
let casts = ref([]);
let posters = ref([]);

moviesStore
    .fetchAboutMovie(route.params.id)
    .then((_movie) => {
        movie.value = _movie;
        // console.log(movie.value);
    })
    .then(() => {
        video.value = `https://youtu.be/${movie.value.videos.results[0].key}`;
    })
    .then(() => {
        casts.value = movie.value.credits.cast;
        posters.value = movie.value.images.posters;
    });
</script>

<template>
    <div v-if="movie" class="container my-6">
        <div
            class="grid grid-cols-1 items-center sm:grid-cols-2 gap-3 pb-8 border-b border-gray-600"
        >
            <div class="mx-auto my-3 sm:my-0">
                <div v-if="movie.poster_path" class="about-movie-poster">
                    <img :src="`${img_db}${movie.poster_path}`" alt="" />
                </div>
                <div v-else>
                    <Loading :roller="true" />
                </div>
            </div>
            <div
                v-if="movie.title && movie.genres.length > 0 && movie.overview"
                class="flex flex-col space-y-4 px-4"
            >
                <h1 class="text-2xl text-gray-300">
                    {{ movie.title }}
                </h1>
                <div class="text-gray-500">
                    <p class="mb-2">
                        <span>Rating </span>
                        <span>{{ movie.vote_average }}</span>
                    </p>
                    <p class="mb-2">
                        <!-- <span>Genres</span> -->
                        <span v-for="genre in movie.genres">
                            <span>{{ genre.name }}, </span>
                        </span>
                    </p>
                    <p class="mb-2">
                        <!-- <span>Released date</span> -->
                        <span>
                            {{ movie.release_date }}
                        </span>
                    </p>
                </div>
                <div>
                    <p class="text-gray-400">{{ movie.overview }}</p>
                </div>
                <div>
                    <div class="flex space-x-6">
                        <button class="btn-warning" @click="toggler = !toggler">
                            <i class="fa-solid fa-play pr-2"></i> Play Trailer
                        </button>
                        <button class="btn-warning">
                            <i class="fa-regular fa-heart pr-2"></i> Favourite
                        </button>
                    </div>
                </div>
            </div>
            <div v-else>
                <Loading :roller="true" />
            </div>
        </div>
        <div v-if="casts.length > 0">
            <Casts :casts="casts" />
        </div>
        <div v-if="posters.length > 0">
            <Posters :posters="posters" />
        </div>
    </div>
    <div v-else>
        <Loading :ellipsis="true" />
    </div>
    <div>
        <FsLightbox :toggler="toggler" :sources="[video]" />
    </div>
</template>

<style>
.about-movie-poster {
    @apply rounded-md overflow-hidden;
    width: 15rem;
    height: 25rem;
}
.about-movie-poster img {
    @apply w-full h-full object-cover;
}
.btn-warning {
    @apply bg-yellow-400 px-3 py-2 rounded-md text-black hover:bg-yellow-300;
}
</style>
