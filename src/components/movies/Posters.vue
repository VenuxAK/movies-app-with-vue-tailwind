<script setup>
let props = defineProps(["posters"]);
let posters = props.posters;
let img_db = "https://image.tmdb.org/t/p/w500/";
console.log(posters);
</script>

<template>
    <div class="container px-4 py-2 border-b border-gray-600">
        <h1 class="text-3xl text-gray-300 mt-2 mb-4">Posters</h1>
        <div>
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
                <div v-for="poster in posters" :key="poster.file_path">
                    <div class="poster m-2">
                        <img :src="img_db + poster.file_path" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* .poster {
    width: 15rem;
    height: 10rem;
} */
.poster img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
