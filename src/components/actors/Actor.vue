<script setup>
let props = defineProps(["actor"]);

let actor = props.actor;
let img_db = "https://image.tmdb.org/t/p/w500";
</script>

<template>
    <div v-if="actor.profile_path">
        <router-link :to="`/actor/${actor.id}`">
            <img :src="img_db + actor.profile_path" alt="" />
        </router-link>
        <div>
            <h1 class="text-md text-gray-300">{{ actor.name }}</h1>
        </div>
    </div>
</template>

<style></style>
