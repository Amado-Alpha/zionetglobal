<template>
    <div class="fixed bottom-8 right-8 z-50">
        <a href="#" @click="openWhatsApp"
            class="relative block w-16 h-16 overflow-hidden rounded-full shadow-lg transform hover:scale-110">
            <img src="https://cdn-icons-png.freepik.com/256/3983/3983877.png?semt=ais_hybrid" alt="WhatsApp Icon"
                class="w-full h-full object-cover">
            <div
                class="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-75 text-white text-xs font-semibold animate-pulse">
                Chat
            </div>
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const openWhatsApp = () => {
    const phoneNumber = '+255714327327'; // Replace with your WhatsApp number
    const message = encodeURIComponent('Hello! I have a question.');
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, '_blank');
}
</script>
