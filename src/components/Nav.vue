<template>
  <!-- Header -->
  <nav class="bg-white dark:bg-gray-900 fixed w-full z-40 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="headerLogo" class="h-8" alt="Logo" />
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
import { headerLogo } from "../assets/images";

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
nav {
  transition: background-color 0.3s ease;
}

nav:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

nav a {
  transition: color 0.3s ease;
}

nav a:hover {
  color: #1d4ed8;
  /* Change this color to match your theme */
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 160px;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
