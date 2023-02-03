<script setup>
import Navbar from "./header/Navbar.vue";
import Actor from "./actors/Actor.vue";
import Loading from "./Loading.vue";
import { useMoviesStore } from "../store/useMoviesStore";
import { ref } from "vue";

let moviesStore = useMoviesStore();
let actors = ref([]);
let page = ref(1);

moviesStore.fetchPopularPeople(page.value).then((people) => {
    actors.value = people;
    // console.log(people);
});

let next = (pg) => {
    page.value += pg;
    moviesStore.fetchPopularPeople(page.value).then((people) => {
        actors.value = people;
    });
};
let prev = (pg) => {
    page.value -= pg;
    if (page.value > 0) {
        moviesStore.fetchPopularPeople(page.value).then((people) => {
            actors.value = people;
        });
    } else {
        page.value = 1;
    }
};
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
            <div class="mt-5 mb-3">
                <div class="flex justify-center space-x-4">
                    <a href="#" class="text-lg p-1" @click.prevent="prev(1)"
                        >Previous</a
                    >
                    <a href="#" class="text-lg p-1" @click.prevent="next(1)"
                        >Next</a
                    >
                </div>
            </div>
        </div>
        <div v-else>
            <Loading :ellipsis="true" />
        </div>
    </div>
</template>

<style></style>
