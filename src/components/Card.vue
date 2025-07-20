<script setup>
defineProps({
    customClass: {
        type: String,
        default: ''
    }
});
</script>

<template>
    <li :class="`bg-neutral-100 p-4 rounded-2xl mb-4 last:mb-0 md:mb-0 md:w-90 xl:w-85 border border-neutral-300 ${customClass}`">
        <slot />
    </li>
</template>