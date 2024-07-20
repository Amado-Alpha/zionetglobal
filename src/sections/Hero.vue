<template>
    <section id="home" class="mt-16">
        <div class="carousel-container relative w-full overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                <div v-for="(slide, index) in slides" :key="index"
                    class="carousel-container flex-shrink-0 w-full relative">
                    <img :src="slide.image" :alt="slide.alt"
                        :srcset="`${slide.image} 640w, ${slide.imageMediumScreen} 768w, ${slide.imageLargeScreen} 1024w`"
                        sizes="(max-width: 640px) 100vw,
                                (max-width: 768px) 100vw,
                                (max-width: 1024px) 100vw,
                                100vw" class="w-full h-full object-cover">
                    <div class="gradient-overlay absolute inset-0"></div>
                    <div
                        class="carousel-caption absolute bottom-8 left-8 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                        <h2 class="text-2xl font-semibold">{{ slide.title }}</h2>
                        <p class="mt-2">{{ slide.description }}</p>
                    </div>
                </div>
            </div>
            <button @click="prevSlide"
                class="carousel-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none">
                &#10094;
            </button>
            <button @click="nextSlide"
                class="carousel-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none">
                &#10095;
            </button>
            <div class="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <span v-for="(slide, index) in slides" :key="index" @click="gotoSlide(index)"
                    :class="{ 'bg-white': currentSlide === index, 'bg-gray-400': currentSlide !== index }"
                    class="block w-3 h-3 rounded-full cursor-pointer"></span>
            </div>
        </div>
    </section>
</template>

<script setup>
import { bannerBiggerScreen, bannerBiggerScreen1, banner } from "../assets/images";
import { bannerMediumScreen } from "../assets/images";

import { ref, onMounted, onUnmounted } from 'vue';

// Recommended image size for bigger screens (1200x600)
const slides = [
    {
        image: bannerMediumScreen,
        imageMediumScreen: bannerMediumScreen,
        imageLargeScreen: bannerBiggerScreen1,
        alt: 'Slide 1',
        title: 'Dedicated to serve you',
        description: 'Let us have your business infrastructure connected like never before!'
    },
    {
        image: bannerMediumScreen,
        imageMediumScreen: bannerMediumScreen,
        imageLargeScreen: bannerBiggerScreen1,
        alt: 'Slide 1',
        title: 'Dedicated to serve you',
        description: 'Let us have your business infrastructure connected like never before!'
    },
    {
        image: 'https://easywebdigital.com/sites/default/files/news/intelligent-wireless-2-large.jpg',
        imageMediumScreen: bannerMediumScreen,
        imageLargeScreen: bannerBiggerScreen1,
        alt: 'Slide 2',
        title: 'Microwave link installation',
        description: 'We install both single purpose and hybrid wireless links at an affordable price to enhance your business productivity'
    },
    {
        image: 'https://tricon-services.com/sites/default/files/Point-to-Point-Links-Pic.jpg',
        imageMediumScreen: bannerMediumScreen,
        imageLargeScreen: bannerBiggerScreen1,
        alt: 'Slide 3',
        title: 'Reliable services',
        description: 'Continous support for our clients, we are just one call away.'
    },
];

const currentSlide = ref(0);
const totalSlides = slides.length;
let slideInterval;


function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
}

function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
}

function gotoSlide(index) {
    currentSlide.value = index;
}

onMounted(() => {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

onUnmounted(() => {
    clearInterval(slideInterval);
});

</script>

<style scoped>
.carousel-container {
    height: 600px;
    /* Adjust height as needed */
}

.carousel-item img {
    height: 600px;
    /* Ensure all images are the same height */
}

.carousel-inner {
    display: flex;
}

.carousel-caption {
    max-width: 50%;
    /* Adjust as needed */
}

.carousel-prev,
.carousel-next {
    top: 50%;
    transform: translateY(-50%);
}

.carousel-indicators span {
    transition: background-color 0.3s ease;
}

/* Gradient overlay */
.gradient-overlay {
    background: linear-gradient(to top, rgba(21, 19, 19, 0.8), rgba(74, 0, 0, 0.1));
    position: absolute;
    inset: 0;
    pointer-events: none;
    /* Ensures the overlay doesn't interfere with interactions */
}
</style>