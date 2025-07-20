<script setup>
import { ref, useTemplateRef, watch } from 'vue';
import { RouterLink } from 'vue-router';

const isToggleNav = ref(false);
const navElement = useTemplateRef("navElement");
const links = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "About Us",
        url: "/about-us",
    },
    {
        name: "Pricing",
        url: "/pricing",
    },
    {
        name: "API Documentation",
        url: "/api-documentation",
    },
    {
        name: "Contact Us",
        url: "/contact-us",
    }
]

function handleToggleNav() {
    isToggleNav.value = !isToggleNav.value;
}

function handleToggleNavClose() {
    isToggleNav.value = false;
}

function handleClickOutside() {
    document.addEventListener('click', (event) => {
        if (isToggleNav.value && navElement.value && !navElement.value.contains(event.target)) {
            handleToggleNavClose();
        }
    })
}

watch(isToggleNav, () => {
    handleClickOutside();
});
</script>

<template>
    <header class="pt-4 px-4 sticky top-0 z-1">
        <div class="bg-neutral-100 p-2 pl-6 flex items-center justify-between rounded-full relative h-15 max-w-[65.75rem] mx-auto border border-neutral-300 lg:pr-6">
            <RouterLink to="/" class="font-bold text-2xl text-black">API PRO</RouterLink>
            <button @click.stop="handleToggleNav" class="bg-black text-white border border-neutral-300 rounded-full transition-[background-color] duration-300 hover:bg-neutral-200 hover:text-black lg:hidden">
                <svg v-if="isToggleNav" viewBox="0 0 24 24" class="w-10 h-10">
                    <path d="M7 17L16.8995 7.10051" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 7.00001L16.8995 16.8995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else viewBox="0 0 24 24" class="w-10 h-10">
                    <path d="M6 12H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 15.5H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 8.5H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="sr-only">{{ isToggleNav ? "close" : "menu" }}</span>
            </button>
            <nav :class="!isToggleNav && 'invisible opacity-0 overflow-hidden'" ref="navElement" class="absolute top-19 left-0 right-0 rounded-2xl bg-neutral-100 p-4 text-lg border border-neutral-300 font-medium duration-300 lg:static lg:visible lg:overflow-visible lg:opacity-100 lg:p-0 lg:border-0 lg:rounded-none lg:duration-[0ms] lg:text-base">
                <ul class="-mt-1.75 -mb-2 lg:flex lg:mt-0 lg:mb-0">
                    <li v-for="(link, index) in links" :key="index" class="mb-4.25 last:mb-0 transition-all duration-300 hover:text-black lg:mb-0 lg:mr-6 lg:last:mr-0">
                        <RouterLink @click="handleToggleNavClose" :to="link.url" active-class="font-bold text-black" class="block">{{ link.name }}</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>