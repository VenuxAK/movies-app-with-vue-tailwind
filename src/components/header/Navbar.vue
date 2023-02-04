<script setup>
import { ref } from "vue";
import Search from "./Search.vue";

let openMenu = ref(false);
let isMenuOpen = ref(false);

let toggleMenu = (bool) => {
    if (bool) {
        return (openMenu.value = bool);
    } else {
        return (openMenu.value = bool);
    }
};
</script>

<template>
    <div class="container py-3 relative">
        <nav class="navbar">
            <div class="basis-1/2 md:basis-2/3 flex-1">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <div class="px-3 cursor-pointer md:hidden">
                            <i
                                class="fa-solid fa-bars p-2"
                                @click="toggleMenu(true)"
                            ></i>
                        </div>
                        <router-link to="/" class="text-lg">
                            Mov Flix
                        </router-link>
                    </div>
                    <div class="navbar-nav">
                        <router-link to="/movies" class="nav-link">
                            Movies
                        </router-link>
                        <router-link to="/actors" class="nav-link">
                            Actors
                        </router-link>
                        <router-link to="/profile" class="nav-link">
                            Profile
                        </router-link>
                    </div>
                </div>
            </div>
            <Search />
        </nav>
    </div>
    <div class="mobile-menu" :class="openMenu ? 'showMenu' : 'hideMenu'">
        <div class="menu">
            <div class="mb-8">
                <router-link to="/" class="text-lg">Mov Flix</router-link>
                <div class="absolute top-0 right-2">
                    <i
                        class="fa-solid fa-xmark text-2xl cursor-pointer"
                        @click="toggleMenu(false)"
                    ></i>
                </div>
            </div>
            <div class="flex flex-col space-y-4">
                <router-link to="/movies" class="nav-link">
                    Movies
                </router-link>
                <router-link to="/actors" class="nav-link">
                    Actors
                </router-link>
                <router-link to="/profile" class="nav-link">
                    Profile
                </router-link>
                <hr class="border border-gray-600" />
                <router-link to="/profile" class="nav-link">
                    Account Settings
                </router-link>
                <router-link to="/profile" class="nav-link">
                    Support
                </router-link>
                <router-link to="/profile" class="nav-link">
                    Logout
                </router-link>
            </div>
        </div>
    </div>
    <div
        v-if="openMenu"
        class="w-full h-full fixed top-0 left-0 bottom-0 bg-black opacity-70"
        @click="openMenu = false"
    ></div>
</template>

<style>
.navbar {
    @apply flex items-center;
}
.navbar-nav {
    @apply hidden md:flex md:ml-10 space-x-3;
}
.nav-link {
    @apply text-lg text-gray-200 hover:text-gray-400;
}

.mobile-menu {
    @apply bg-gray-800 p-3 absolute top-0 w-48 h-screen z-50;
    transition: all 400ms;
}
.menu {
    @apply relative;
}

.showMenu {
    @apply left-0 opacity-100 !important;
}
.hideMenu {
    @apply -left-48 opacity-0;
    /* @apply left-0; */
}
.backdrop {
    background-color: rgba(0, 0, 0, 0.295);
    filter: blur(1.3px);
}
</style>
