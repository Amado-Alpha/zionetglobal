<template>
    <div class="fixed inset-0 flex flex-col items-center justify-center bg-gray-400 z-50">
        <img src="" alt="Company Logo" class="w-32 h-32 mb-6">
        <div class="w-3/4 md:w-1/2 bg-gray-200 rounded-full h-4">
            <div :style="{ width: progress + '%' }"
                class="bg-red-500 h-full rounded-full transition-all duration-500 ease-out"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const progress = ref(0);

onMounted(() => {
    const interval = setInterval(() => {
        if (progress.value < 100) {
            progress.value += 1;
        } else {
            clearInterval(interval);
        }
    }, 30); // Adjust the interval duration for your needs
});
</script>

<style scoped>
/* Optional styling for the logo and progress bar */
</style>