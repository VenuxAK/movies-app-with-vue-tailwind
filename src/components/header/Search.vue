<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();
let query = ref("");

let searchMovie = () => {
    router.push(`/movies/search=${query.value}`);
};

let isOpen = ref(false);
</script>

<template>
    <div class="basis-1/2 md:basis-1/3 relative">
        <div class="flex items-center justify-end space-x-2">
            <div class="relative">
                <form @submit.prevent="searchMovie">
                    <input
                        type="text"
                        class="rounded-full focus:outline-none text-gray-700 pr-8 pl-3 py-2 w-full"
                        placeholder="Search..."
                        v-model="query"
                    />
                </form>
                <span
                    class="text-gray-500 absolute top-2 right-3 cursor-pointer"
                    @click="searchMovie"
                >
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
            <div class="">
                <img
                    src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt=""
                    class="hidden md:block w-14 rounded-full object-cover cursor-pointer"
                    @click="isOpen = !isOpen"
                />
            </div>
        </div>
        <div v-if="isOpen">
            <div
                class="bg-white py-2 w-60 rounded-lg absolute right-0 z-20 mt-2"
            >
                <div>
                    <a
                        href="#"
                        class="text-gray-500 block px-3 py-2 hover:bg-indigo-600 hover:text-white"
                        >Account Settings</a
                    >
                    <a
                        href="#"
                        class="text-gray-500 block px-3 py-2 hover:bg-indigo-600 hover:text-white"
                        >Support</a
                    >
                    <a
                        href="#"
                        class="text-gray-500 block px-3 py-2 hover:bg-indigo-600 hover:text-white"
                        >Logout</a
                    >
                </div>
            </div>
        </div>
        <div
            v-if="isOpen"
            class="w-full h-full fixed top-0 left-0 bottom-0 bg-black opacity-50"
            @click="isOpen = false"
        ></div>
    </div>
</template>

<style></style>
