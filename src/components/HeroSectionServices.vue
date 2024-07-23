<template>
    <section class="bg-cover bg-center bg-gray-600 text-white py-20 relative"
        :style="{ backgroundImage: `url(${bannerMediumScreen})` }">

        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="container mx-auto text-center relative z-10 mt-10">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p class="text-xl md:text-2xl max-w-2xl mx-auto">We offer a wide range of services to meet your needs.</p>
        </div>
    </section>
</template>

<script setup>
import { bannerMediumScreen } from '../assets/images';
</script>
