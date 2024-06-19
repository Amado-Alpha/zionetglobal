<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-12 text-gray-800">Our Services</h2>
      <div class="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <ServiceCard v-for="service in services" :key="service.id" :icon="service.icon" :title="service.title"
          :description="service.description" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import ServiceCard from '../components/ServiceCard.vue'

const services = reactive([
  {
    id: 1,
    icon: '🌐',
    title: 'Internet Service Provider',
    description: 'Providing high-speed internet with excellent customer support.',
  },
  {
    id: 2,
    icon: '🖥️',
    title: 'IT Support',
    description: '24/7 IT support for all your technical needs and troubleshooting.',
  },
  {
    id: 3,
    icon: '📶',
    title: 'Wi-Fi Installation',
    description: 'Professional Wi-Fi installation for homes and businesses.',
  },
  {
    id: 4,
    icon: '🛒',
    title: 'ICT Shop',
    description: 'Your one-stop shop for all ICT products and accessories.',
  },
  {
    id: 5,
    icon: '💻',
    title: 'Software Development',
    description: 'Custom software development services to meet your business needs.',
  },
])
</script>
