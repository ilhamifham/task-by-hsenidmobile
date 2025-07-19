<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    as: {
        type: String,
        default: 'button',
    },
    to: {
        type: [String, Object],
        default: null
    },
    type: {
        type: String,
        default: 'button',
    },
    customClass: {
        type: String,
        default: "",
    }
});
</script>

<template>
    <component :is="as === 'router-link' ? RouterLink : 'button'" :to="as === 'router-link' ? to : undefined" :type="as === 'button' ? type : undefined" :class="`bg-black border border-neutral-300 px-5 py-3 block text-center text-sm font-medium text-white duration-300 hover:bg-neutral-200 hover:text-black ${customClass}`">
        <slot />
    </component>
</template>