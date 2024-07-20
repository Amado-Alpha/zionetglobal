<!-- src/components/ServiceCard.vue -->
<template>
    <div class="service-item p-6 border rounded-lg shadow-lg bg-white">
        <i :class="icon" class="text-red-600 text-4xl mb-4"></i>
        <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    icon: String,
    title: String,
    description: String,
});
</script>

<style scoped>
/* Additional styles if needed */
</style>