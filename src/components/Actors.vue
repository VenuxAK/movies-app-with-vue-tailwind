<script setup>
import Navbar from "./header/Navbar.vue";
import Actor from "./actors/Actor.vue";
import Loading from "./Loading.vue";
import { useMoviesStore } from "../store/useMoviesStore";
import { ref } from "vue";

let moviesStore = useMoviesStore();
let actors = ref([]);
moviesStore.fetchPopularPeople(1).then((people) => {
    actors.value = people;
    // console.log(people);
});
</script>

<template>
    <Navbar />
    <div class="container px-5 sm:px-0">
        <h1 class="text-2xl text-yellow-500 font-semibold mx-4 mb-6">Actors</h1>
        <div v-if="actors.length > 0">
            <div
                class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3"
            >
                <Actor v-for="actor in actors" :key="actor.id" :actor="actor" />
            </div>
        </div>
        <div v-else>
            <Loading :ellipsis="true" />
        </div>
    </div>
</template>

<style></style>
