<script setup>
import { computed } from "vue";

let props = defineProps(["casts"]);
let casts = props.casts;
let img_db = "https://image.tmdb.org/t/p/w500/";

let filteredCasts = computed(() => {
    return casts.filter((cast) => {
        return cast.profile_path != null;
    });
});

// console.log(filteredCasts);
// console.log(casts);
</script>

<template>
    <div class="container px-4 py-2 border-b border-gray-600">
        <h1 class="text-3xl text-gray-300 mt-2 mb-4">Casts</h1>
        <div>
            <div
                class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
            >
                <div v-for="cast in filteredCasts" :key="cast.id" class="m-1">
                    <img
                        :src="img_db + cast.profile_path"
                        class="cast-profile"
                        alt=""
                    />
                    <h3 class="text-gray-300">{{ cast.character }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.cast-profile {
    /* @apply w-24 h-36 object-cover; */
}
</style>
