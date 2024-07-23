<template>
    <section class=" bg-red-600 text-white py-10">
        <div class="container mx-auto text-center">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Join Us Today!</h2>
            <p class="text-lg md:text-xl mb-6">Contact us to learn more about our services and how we can help you
                achieve your goals.</p>
            <button
                class="bg-white text-red-800 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-400 hover:text-white transition-colors">
                <router-link :to="{ name: 'contacts' }"> Contact Us</router-link>
            </button>
        </div>
    </section>
</template>