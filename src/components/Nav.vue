<template>
  <!-- Header -->
  <nav
    class="mb-24 bg-white dark:bg-gray-900 fixed w-full z-40 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse relative">
        <img :src="headerLogo" class="mt-4 h-8 relative z-10" alt="Logo" />
        <div class="absolute -top-2 left-1/4 transform -translate-x-1/2 flex items-center justify-center">
          <i class="fas fa-wifi text-red-600 text-2xl animate-pulse"></i>
          <i class="fas fa-wifi absolute top-0 left-0 text-red-600 text-2xl opacity-0 animate-connecting delay-200"></i>
        </div>
      </router-link>
      <div class="flex md:order-2">
        <button data-collapse-toggle="navbar-menu" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-menu">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li v-for="item in navLinks" :key="item.label">
            <router-link :to="item.href"
              class="block py-2 px-3 text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { data } from '../constants/index.js';
import { headerLogo } from '../assets/images';  // Adjusted import for logo

const navLinks = ref(data.navLinks);
const isSidebarOpen = ref(false);

onMounted(() => {
  // Disable body scrolling when the sidebar is open
  document.body.style.overflow = 'auto'; // Initially enable scrolling

  // Update body overflow based on sidebar state
  watch(isSidebarOpen, (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('[data-collapse-toggle]');
    toggleButtons.forEach(button => {
      button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-collapse-toggle');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.classList.toggle('hidden');
        }
      });
    });
  });
});
</script>

<style scoped>
@keyframes connecting {

  0%,
  100% {
    opacity: 0;
    transform: scale(0.5);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-connecting {
  animation: connecting 1s infinite;
}
</style>
