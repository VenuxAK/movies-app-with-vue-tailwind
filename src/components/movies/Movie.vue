<script setup>
import Loading from "../Loading.vue";
let props = defineProps(["movie"]);
let movie = props.movie;
</script>

<template>
    <div class="movie mx-3 my-2">
        <div class="flex flex-col">
            <div>
                <div class="overflow-hidden">
                    <div v-if="true">
                        <router-link to="#">
                            <img
                                src="https://imgs.search.brave.com/I7wwvi8VhC8_HLKkbvKi6dAIJui71JSaPPpm7u0YcX4/rs:fit:320:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/cDRJZ2VEWng0aDdC/TDFVUlU3OURBSGFL/LSZwaWQ9QXBp"
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
                    <h1 class="truncate">Stranger Things</h1>
                    <p>2022-2-2</p>
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
