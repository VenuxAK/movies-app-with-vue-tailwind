<script setup></script>

<template>
    <div class="basis-1/2 md:basis-1/3">
        <div class="flex items-center justify-end space-x-2">
            <div class="relative">
                <input
                    type="text"
                    class="rounded-full focus:outline-none text-gray-700 pl-8 pr-2 py-1 w-full"
                    placeholder="Search..."
                />
                <span class="text-gray-400 absolute top-1 left-2">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
            <div class="">
                <img
                    src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt=""
                    class="hidden md:block w-14 rounded-full object-cover"
                />
            </div>
        </div>
    </div>
</template>

<style></style>
