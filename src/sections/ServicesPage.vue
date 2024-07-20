<template>
    <HeroSectionServices />
    <div class="p-4 mt-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceItemPage v-for="service in services" :key="service.id" :service="service" />
        </div>
        <!-- <Testimonials /> -->
        <!-- <CTAButton /> -->
    </div>
    <PaymentDetails />
</template>

<script setup>
import ServiceItemPage from '../components/ServiceItemPage.vue';
import Testimonials from '../components/Testimonials.vue';
import CTAButton from '../components/CTAButton.vue';
import PaymentDetails from './PaymentDetails.vue';
import HeroSectionServices from '../components/HeroSectionServices.vue';


const services = [
    {
        id: 1,
        title: 'High-Speed Internet Service Provider',
        description: 'Experience lightning-fast internet with our reliable and affordable internet services. We offer a variety of plans to suit your needs, ensuring seamless connectivity for both home and business use.',
        features: [
            'Unlimited data plans',
            'High-speed downloads and uploads',
            '24/7 customer support',
            'Competitive pricing',
            'No hidden fees'
        ],
    },
    {
        id: 2,
        title: 'Professional Wi-Fi Installation Services',
        description: 'Get seamless and strong Wi-Fi coverage throughout your home or office. Our expert technicians will install and configure your Wi-Fi network to ensure optimal performance and security.',
        features: [
            'Comprehensive site survey',
            'Professional installation',
            'Secure network setup',
            'Coverage optimization',
            'Troubleshooting and support'
        ],
    },
    {
        id: 3,
        title: 'Comprehensive ICT Shop',
        description: 'Explore our wide range of ICT products including computers, peripherals, networking equipment, and accessories. We offer the latest technology at competitive prices to meet all your IT needs.',
        features: [
            'Latest tech gadgets and devices',
            'Affordable pricing',
            'Expert advice and support',
            'Convenient online and offline shopping',
            'Warranty and after-sales service'
        ],
    },
    {
        id: 4,
        title: 'Reliable Camera Installation Services',
        description: 'Enhance the security of your property with our professional camera installation services. We provide tailored solutions to fit your specific security requirements, ensuring peace of mind.',
        features: [
            'High-definition cameras',
            'Indoor and outdoor solutions',
            'Remote viewing capability',
            'Professional installation',
            'Maintenance and support'
        ],
    },
    {
        id: 5,
        title: 'Expert IT Support Services',
        description: 'Keep your IT infrastructure running smoothly with our dedicated IT support services. Our team of experts is ready to assist you with any technical issues, ensuring minimal downtime and maximum productivity.',
        features: [
            'Remote and on-site support',
            'Hardware and software troubleshooting',
            'Network setup and maintenance',
            'Data backup and recovery',
            'Cybersecurity solutions'
        ],
    },
];

</script>