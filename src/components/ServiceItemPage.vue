<template>
    <div class="service-item mx-8 mt-6 p-6 border rounded-xl shadow-lg transition-transform transform hover:scale-105">
        <h2 class="text-2xl font-semibold text-black mb-4">{{ service.title }}</h2>
        <p class="text-gray-700 text-justify mb-6">{{ service.description }}</p>
        <ul class="mt-4 list-disc pl-5 space-y-2 text-gray-600">
            <li v-for="feature in service.features" :key="feature" class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 4.293a1 1 0 010 1.414l-7.657 7.657a1 1 0 01-1.414 0L3.293 9.657a1 1 0 011.414-1.414l3.293 3.293 7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
                {{ feature }}
            </li>
        </ul>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    service: Object,
})

</script>

<style scoped>
.service-item {
    @apply p-4 border rounded-lg shadow-lg;
}
</style>