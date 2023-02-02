<script setup>
import { useMoviesStore } from "../../store/useMoviesStore";
import { useRoute } from "vue-router";
import { ref } from "vue";
import Loading from "../Loading.vue";

let moviesStore = useMoviesStore();
let route = useRoute();
let actor = ref({});
let actor_movies = ref([]);
let actor_id = route.params.id;
let img_db = "https://image.tmdb.org/t/p/w500";
moviesStore.fetchActorDetail(actor_id).then((person) => {
    actor.value = person;
    // console.log(actor.value);
});

moviesStore.fetchActorMovies(actor_id).then((data) => {
    actor_movies.value = data.cast.filter((cast) => {
        return cast.poster_path;
    });
    // console.log(actor_movies.value);
});
</script>

<template>
    <div v-if="Object.keys(actor).length != 0" class="container px-4 sm:px-0">
        <div class="md:flex mt-4">
            <div class="basis-1/3 p-3 md:p-0">
                <div class="actor-profile mx-auto">
                    <img :src="img_db + actor.profile_path" alt="" />
                </div>
                <div
                    class="flex space-x-3 mt-3 justify-center md:justify-start"
                >
                    <router-link
                        to="#"
                        class="text-2xl text-gray-400 hover:text-gray-100"
                    >
                        <i class="fa-solid fa-brands fa-instagram"></i>
                    </router-link>
                    <router-link
                        to="#"
                        class="text-2xl text-gray-400 hover:text-gray-100"
                    >
                        <i class="fa-solid fa-brands fa-twitter"></i>
                    </router-link>
                    <router-link
                        to="#"
                        class="text-2xl text-gray-400 hover:text-gray-100"
                    >
                        <i class="fa-solid fa-brands fa-facebook"></i>
                    </router-link>
                    <router-link
                        to="#"
                        class="text-2xl text-gray-400 hover:text-gray-100"
                    >
                        <i class="fa-solid fa-brands fa-youtube"></i>
                    </router-link>
                </div>
            </div>
            <div class="basis-2/3">
                <div class="ml-0 mt-8 md:mt-0 md:ml-32">
                    <div>
                        <h1 class="text-3xl text-gray-200 hover:text-white">
                            {{ actor.name }}
                        </h1>
                        <h5 class="text-md text-gray-300">
                            <i class="fa-solid fa-cake-candles"></i>
                            <span class="ml-2">{{ actor.birthday }}</span>
                        </h5>
                        <p class="text-gray-400 my-12">
                            {{ actor.biography }}
                        </p>
                    </div>
                    <div v-if="actor_movies.length > 0">
                        <h1 class="text-3xl text-gray-200 mb-3">Known For</h1>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <div v-for="movie in actor_movies" :key="movie.id">
                                <div>
                                    <div v-if="movie.poster_path">
                                        <router-link :to="`/movie/${movie.id}`">
                                            <img
                                                :src="
                                                    img_db + movie.poster_path
                                                "
                                                alt=""
                                            />
                                        </router-link>
                                        <h1
                                            class="text-lg text-gray-400 truncate"
                                        >
                                            {{ movie.title }}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <Loading :roller="true" />
    </div>
</template>

<style>
.actor-profile {
    @apply w-[18.785rem];
}
.actor-profile img {
    @apply w-full h-full object-cover;
}
</style>
