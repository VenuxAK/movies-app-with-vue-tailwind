<script setup>
import Loading from "../Loading.vue";
let props = defineProps(["movie"]);
let img_db = "https://image.tmdb.org/t/p/w500";
let movie = props.movie;
// console.log(movie);
</script>

<template>
    <div class="movie mx-3 my-2">
        <div class="flex flex-col">
            <div>
                <div class="overflow-hidden">
                    <div v-if="movie.poster_path">
                        <router-link :to="'/movie/' + movie.id">
                            <img
                                :src="img_db + movie.poster_path"
                                alt=""
                                class="movie-poster"
                            />
                        </router-link>
                    </div>
                    <div v-else>
                        <Loading :roller="true" />
                    </div>
                </div>
                <div class="text-gray-500 text-base">
                    <h1 class="truncate">
                        {{ movie.title || movie.name }}
                    </h1>
                    <p>{{ movie.release_date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.movie-poster {
    @apply w-full h-full object-cover transition-all duration-200 hover:scale-125 rounded-sm;
}
</style>
