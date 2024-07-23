<template>
    <section class="py-10 bg-red-100 text-center">
        <div class="mb-8">
            <h2 class="text-3xl text-gray-800 font-semibold sm:text-3xl md:text-3xl ">Meet Our Team </h2>
            <h1 class="px-4 text-2xl sm:text-2xl md:text-2xl mx-auto">We work around the clock to deliver the best
                services to you.
            </h1>
        </div>

        <Carousel v-bind="settings" :breakpoints="breakpoints" :autoplay="2000" :wrapAround="true">
            <Slide v-for="member in teamMembers" :key="member.id">
                <div class="p-5 text-center">
                    <img :src="member.image" alt="team member"
                        class="rounded-full w-36 h-36 object-cover mb-3 mx-auto grayscale">
                    <h3 class="text-xl font-bold text-gray-800 mb-1">{{ member.name }}</h3>
                    <p class="text-gray-500">{{ member.role }}</p>
                </div>
            </Slide>
            <template #addons>
                <!-- <Navigation /> -->
                <Pagination />
            </template>
        </Carousel>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { Alphax, bannerMediumScreen } from '../assets/images';


const settings = reactive({
    itemsToShow: 1,
    snapAlign: 'center',
})

const breakpoints = reactive({
    700: {
        itemsToShow: 3,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
})

const teamMembers = reactive([
    { id: 1, image: 'https://p7.hiclipart.com/preview/402/235/698/businessperson-computer-icons-avatar-passport.jpg', name: 'Eng.Elikana Nyaruhima', role: 'CEO' },
    { id: 2, image: 'https://p7.hiclipart.com/preview/402/235/698/businessperson-computer-icons-avatar-passport.jpg', name: 'Sarah John', role: 'COO' },
    { id: 3, image: 'https://p7.hiclipart.com/preview/402/235/698/businessperson-computer-icons-avatar-passport.jpg', name: 'Joseph Jumbe', role: 'Graphics designer' },
    { id: 4, image: Alphax, name: 'Eng. Alphax Stanslaus', role: 'CTO' },
])
</script>

<style scoped>
/* Black and White feature on the image */
.grayscale {
    filter: grayscale(100%);
}
</style>