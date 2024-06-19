<template>
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div class="mb-4 text-red-700 text-4xl">
            {{ icon }}
        </div>
        <h3 class="text-2xl font-semibold text-gray-800 mb-2">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    icon: String,
    title: String,
    description: String,
})
</script>