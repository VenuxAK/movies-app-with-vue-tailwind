<script setup>
let props = defineProps(["ellipsis", "roller"]);

let ellipsis = props.ellipsis;
let roller = props.roller;
</script>

<template>
    <div class="loading-container">
        <div v-if="ellipsis">
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div v-else-if="roller">
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style>
.loading-container {
    width: 100%;
    height: 70vh;
    display: grid;
    place-items: center;
}
</style>
