<template>
    <section class="history bg-gray-100 py-20">
        <div class="container mx-auto px-4 lg:px-8">
            <h2 class="text-3xl md:text-3xl font-bold text-center mb-12">Our History</h2>
            <div class="relative">
                <div class="border-r-4 border-red-400 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
                <ul class="timeline grid grid-cols-1 md:grid-cols-2 gap-y-12">
                    <li v-for="event in history" :key="event.year" class="relative flex flex-col items-center ">
                        <div
                            class="timeline-date bg-white text-red-600 border border-red-600 rounded-full px-6 py-3 font-bold shadow-md transform -translate-y-1/2 md:-translate-y-0 mb-4 md:mb-0">
                            {{ event.year }}
                        </div>
                        <div
                            class="timeline-content bg-white p-6 shadow-md rounded-lg border-l-4 border-red-400 w-full md:w-96 transform transition-transform duration-500 ease-in-out hover:scale-105 flex flex-col items-center text-center md:ml-8">
                            <img :src="event.image" alt="Event Image" class="w-32 h-32 object-cover rounded-full mb-4">
                            <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
                            <p>{{ event.description }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>

const history = [
    { year: '2020', title: 'Company Founded', description: 'Our company was founded with a vision to revolutionize the tech industry.', image: 'src/assets/images/about.jpg' },
    { year: '2021', title: 'First Milestone', description: 'Reached 100 satisfied customers in just one year.', image: 'src/assets/images/about.jpg' },
    { year: '2022', title: 'Expansion', description: 'Opened new offices in three additional cities.', image: 'src/assets/images/about.jpg' },
    { year: '2023', title: 'Innovation Award', description: 'Received the Innovation Award for our cutting-edge solutions.', image: 'src/assets/images/about.jpg' },
    // Add more historical events here
];

</script>