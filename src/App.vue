<template>

  <main class="">
    <section class="mb-14">
      <Nav />
    </section>

    <router-view />

    <section>
      <Footer />
    </section>
  </main>


  <!-- <div>
    <transition name="curtain">
      <LoadingScreen v-if="isLoading" />
    </transition>
    <div v-show="!isLoading" class="transition-transform duration-1000 transform">
     
      <section class="">
        <Nav />
      </section>
      <router-view />
      <section>
        <Footer />
      </section>
    </div>
  </div> -->


  <!-- <div>
    <LoadingScreen v-if="isLoading" />
    <div v-else>
      
      <main class="">
        <section class="mb-14">
          <Nav />
        </section>

        <router-view />

        <section>
          <Footer />
        </section>
      </main>
      <router-view />
    </div>
  </div> -->
  <!-- <main class="">
    <section class="mb-14">
      <Nav />
    </section>

    <router-view />

    <section>
      <Footer />
    </section>
  </main> -->
</template>

<script setup>
import Nav from './components/Nav.vue';
import Footer from './sections/Footer.vue';


import { ref, onMounted } from 'vue';
import LoadingScreen from './components/LoadingScreen.vue';

const isLoading = ref(true);

onMounted(() => {
  // Simulate loading time with a timeout
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // Adjust the timeout duration as needed
});


</script>


<style scoped>
/* Curtain opening effect */
.curtain-enter-active,
.curtain-leave-active {
  transition: all 1s ease;
}

.curtain-enter,
.curtain-leave-to {
  transform: translateY(100%);
}

/* Additional styles */
.bg-red-500 {
  background-color: #f44336;
}
</style>