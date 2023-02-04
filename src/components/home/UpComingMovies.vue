<script setup>
import { ref } from "vue";
import { useMoviesStore } from "../../store/useMoviesStore";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Loading from "../Loading.vue";

let moviesStore = useMoviesStore();
let movies = ref([]);
let img_db = "https://image.tmdb.org/t/p/w500/";
moviesStore.fetchUpcomingMovies().then((_movies) => {
    movies.value = _movies;
});
</script>

<template>
    <div class="container mt-5 mb-3" v-if="movies.length > 0">
        <h1 class="text-2xl text-yellow-500 font-semibold mx-4 mb-6">
            Up Coming Movies
        </h1>
        <div>
            <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
                <Slide v-for="movie in movies" :key="movie">
                    <div class="carousel__item">
                        <div>
                            <div>
                                <router-link :to="`/movie/${movie.id}`">
                                    <img
                                        :src="img_db + movie.poster_path"
                                        alt=""
                                    />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Pagination />
                    <Navigation>
                        <template #next>
                            <i
                                class="fa-solid fa-circle-arrow-right text-yellow-400 hover:text-yellow-300"
                            ></i>
                        </template>
                        <template #prev>
                            <i
                                class="fa-solid fa-circle-arrow-left text-yellow-400 hover:text-yellow-300"
                            ></i>
                        </template>
                    </Navigation>
                </template>
            </Carousel>
        </div>
    </div>
    <div v-else>
        <Loading :ellipsis="true" />
    </div>
</template>

<style>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>
