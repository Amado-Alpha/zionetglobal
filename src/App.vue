<template>
  <main class="relative">
    <section class="esx:pb-20 es:pb-20 md:pb-0 lg:pb-5">
      <Nav />
    </section>
    
    <router-view/>
   
    <section class=" bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
</template>

<script setup>
import Nav from './components/Nav.vue';
import Footer from './sections/Footer.vue';

</script>


<style scoped>

</style>