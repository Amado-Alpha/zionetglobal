<template>
  <section class="max-container">
    <Hero />
  </section>
  <section class="">
    <Services />
  </section>
  <section>
    <OurTeam />
  </section>
  <section>
    <PaymentDetails />
  </section>
  <section>
    <WhatsAppIcon />
  </section>
</template>


<script setup>
import Hero from '../sections/Hero.vue';
import Services from '../sections/Services.vue';
import PaymentDetails from '../sections/PaymentDetails.vue';
import OurTeam from './OurTeam.vue';
import WhatsAppIcon from './WhatsAppIcon.vue';
</script>