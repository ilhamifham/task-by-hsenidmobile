<script setup>
import { ref, useTemplateRef, onMounted, onUnmounted } from 'vue';
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

function handleClickOutside(event) {
    if (isToggleNav.value && navElement.value && !navElement.value.contains(event.target)) {
        isToggleNav.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <header class="p-4">
        <div class="bg-neutral-100 p-2 pl-6 flex items-center justify-between rounded-full border border-neutral-200 relative h-15 max-w-5xl mx-auto lg:pr-6">
            <RouterLink to="/" class="font-bold font-source-code-pro text-3xl -mt-2.5 -mb-1.75 text-black">API PRO</RouterLink>
            <button @click.stop="handleToggleNav" class="bg-neutral-200 border border-neutral-300 rounded-full transition-[background-color] duration-300 hover:bg-white lg:hidden">
                <svg v-if="isToggleNav" viewBox="0 0 24 24" class="w-10 h-10">
                    <path d="M7 17L16.8995 7.10051" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else viewBox="0 0 24 24" class="w-10 h-10">
                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 15.5H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 8.5H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="sr-only">{{ isToggleNav ? "close" : "menu" }}</span>
            </button>
            <nav :class="!isToggleNav && 'invisible opacity-0 overflow-hidden'" ref="navElement" class="absolute top-19 left-0 right-0 rounded-lg bg-neutral-100 border border-neutral-200 p-4 text-lg font-medium duration-300 lg:static lg:visible lg:overflow-visible lg:opacity-100 lg:p-0 lg:border-0 lg:rounded-none lg:duration-[0ms]">
                <ul class="-mt-1.75 -mb-2 lg:flex lg:mt-0 lg:mb-0">
                    <li v-for="(link, index) in links" :key="index" class="mb-4.25 last:mb-0 transition-all duration-300 hover:text-black lg:mb-0 lg:mr-4.25 lg:last:mr-0">
                        <RouterLink @click="handleToggleNav" :to="link.url" active-class="font-bold text-black" class="block">{{ link.name }}</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>