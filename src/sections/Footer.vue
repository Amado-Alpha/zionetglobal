<template>
  <footer class="bg-red-100 text-black py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <!-- Footer Columns -->
        <div class="lg:w-1/4 mb-8 lg:mb-0">
          <h3 class="text-lg font-semibold mb-4">About Us</h3>
          <p class="text-black text-justify mr-8">We are dedicated to providing high-quality services to meet your
            needs. Our
            team is
            committed to ensuring your satisfaction with every interaction.</p>
        </div>
        <div class="lg:w-1/4 mb-8 lg:mb-0">
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link :to="{ name: 'home' }" class="hover:text-red-600">Home</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'services' }" class="hover:text-red-600">Services</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'aboutus' }" class="hover:text-red-600">About Us</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'contacts' }" class="hover:text-red-600">Contact Us</router-link>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/4 mb-8 lg:mb-0">
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="fas fa-envelope text-black mr-3"></i>
              <span>zionet@info.com</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone-alt text-black mr-3"></i>
              <span>+255 714 327327</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt text-black mr-3"></i>
              <span>Posta, Dar Es Salaam, Tanzania</span>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/4">
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="https://facebook.com" target="_blank" class="text-black hover:text-red-600">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="text-black hover:text-red-600">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" class="text-black hover:text-red-600">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="text-black hover:text-red-600">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" class="text-black hover:text-red-600">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center mt-10 border-t border-black pt-6">
        <p class="text-black">© 2024 Company Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional logic is needed for this component
</script>

<style scoped>
/* Additional styles if needed */
</style>
