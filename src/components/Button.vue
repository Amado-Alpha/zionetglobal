<template>
    <button class="flex justify-center items-center 
        gap-2 px-7 py-4 corder font-montserrat text-lg
        leading-none bg-red-600 rounded-full text-white
        border-red-600">
        {{ label }}
        <img
            :src="iconUrl"
            alt="Arrow right icon"
            class="ml-2 rounded-full w-5 h-5"
        />
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    iconUrl: String,
    label: String
})
</script>