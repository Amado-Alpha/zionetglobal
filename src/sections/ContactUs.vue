<template>
    <HeroSectionContactUs />
    <section class="contact bg-white py-20">
        <div class="container mx-auto px-4 lg:px-8">
            <div class="flex flex-col lg:flex-row lg:space-x-12">
                <!-- Contact Form -->
                <div class="lg:w-1/2">
                    <form @submit.prevent="openWhatsApp" class="bg-gray-100 p-8 rounded-lg shadow-md">
                        <h3 class="text-2xl font-semibold mb-6">Get in Touch</h3>
                        <div class="grid grid-cols-1 gap-6 mb-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" v-model="form.name" required
                                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" v-model="form.message" rows="4" required
                                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                            </div>
                        </div>
                        <button type="submit"
                            class="w-full py-2 px-4 bg-green-700 text-white font-bold rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Send Message via WhatsApp
                        </button>
                    </form>
                </div>
                <!-- Contact Info -->
                <div class="lg:w-1/2 mt-12 lg:mt-0">
                    <h3 class="text-2xl font-semibold mb-6">Our Contact Information</h3>
                    <div class="flex flex-col space-y-6">
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-black mr-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 7a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" />
                            </svg>
                            <span class="text-gray-600">zionet@info.com</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-black mr-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2 2 2-2 2 2 2-2 2 2 2-2 2 2" />
                            </svg>
                            <span class="text-gray-600">+255 714 327327</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-black mr-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 15a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
                            </svg>
                            <span class="text-gray-600">Posta, Dar Es Salaam, Tanzania</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import HeroSectionContactUs from '../components/HeroSectionContactUs.vue';


const form = ref({
    name: '',
    message: ''
});

const whatsappNumber = '+255714327327'; // Replace with your WhatsApp number in international format

const openWhatsApp = () => {
    const { name, message } = form.value;
    const whatsappMessage = encodeURIComponent(`Name: ${name}\nMessage: ${message}`);
    const url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(url, '_blank');
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>