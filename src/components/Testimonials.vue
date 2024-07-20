<template>
    <div class="testimonials bg-gray-100 p-8">
        <h2 class="text-2xl font-bold text-center">What Our Clients Say</h2>
        <div class="testimonial-list mt-4">
            <div class="testimonial-item" v-for="testimonial in testimonials" :key="testimonial.id">
                <p class="italic">"{{ testimonial.feedback }}"</p>
                <p class="mt-2 font-bold">- {{ testimonial.client }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonials',
    data() {
        return {
            testimonials: [
                { id: 1, feedback: 'Great service!', client: 'Client A' },
                { id: 2, feedback: 'Very professional.', client: 'Client B' },
                // Add more testimonials as needed
            ],
        };
    },
};
</script>

<style scoped>
.testimonials {
    @apply bg-gray-100 p-8;
}

.testimonial-list {
    @apply mt-4;
}

.testimonial-item {
    @apply p-4 border rounded-lg shadow-lg mb-4;
}
</style>