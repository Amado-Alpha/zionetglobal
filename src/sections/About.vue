<template>
    <div class="about-us-page">
        <HeroSectionAboutUs />
        <OurMission />
        <OurTeam />
        <OurHistory />
        <!-- <Testimonials /> -->
        <CTAButtonAboutUs />
    </div>
</template>

<script setup>
import HeroSectionAboutUs from '../components/HeroSectionAboutUs.vue';
import OurMission from '../components/OurMission.vue';
import OurTeam from '../components/OurTeam.vue';
import OurHistory from '../components/OurHistory.vue';
import Testimonials from '../components/Testimonials.vue';
import CTAButtonAboutUs from '../components/CTAButtonAboutUs.vue';

</script>

<style scoped>
.about-us-page {
    @apply space-y-12;
}
</style>