<template>
    <!-- Header -->
    <header class="padding-x py-8 absolute z-10 w-full">
        <nav class="flex justify-between items-center">
            <router-link to="/">
                <img
                    :src="headerLogo"
                    alt="logo"
                    width="100"
                    height="100"
                    class="m-0 w-[70px] h-[35px]"
                />
            </router-link>
            <ul class="nav-links flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                <li v-for="item in navLinks" :key="item.label">
                    <router-link
                        :to="item.href"
                        class="font-montserrat leading-normal text-lg text-slate-gray
                            hover:text-xl hover:text-red-700 hover:font-bold"
                    >
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
            <div id="open-sidebar" @click="toggleSidebar" class="hidden max-lg:block">
                <img
                    v-if="!isSidebarOpen"
                    :src="hamburger"
                    alt="hamburger"
                    width="25"
                    height="25"
                />
                <img
                    v-else
                    :src="closeIcon"
                    alt="close"
                    width="25"
                    height="25"
                />  
            </div>
        </nav>
    </header>
    
    <!-- Sidebar -->
    <div class="absolute top-0 bg-white text-black w-full min-h-screen overflow-y-auto transition-transform 
    transform -translate-x-full ease-in-out duration-300 z-40 mt-20"
        id="sidebar">
        <div  class="p-4">
            <ul id="sidebarLink" class="mt-4">
                <li class="mb-2" v-for="item in navLinks" :key="item.label">
                    <router-link
                        :to="item.href"
                        class="block hover:text-indigo-400"
                    >
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<!-- script setup can not support export syntax, hence why we used multiple scripts -->
<script setup>

import { hamburger } from "../assets/icons";
import { closeIcon } from "../assets/icons";
import { headerLogo } from "../assets/images";

</script>

<script>
import { data } from '../constants/index.js';

export default {
  data() {
    return {
      navLinks: data.navLinks,
      footerLinks: data.footerLinks,
      socialMedia: data.socialMedia,
      isSidebarOpen: false,
    };
  },
 
  mounted() {
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar');
    const openSidebarButtonLinkPress = document.getElementById('sidebarLink');
    

    // Opening and closing the sidebar when an icon is pressed
    openSidebarButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.isSidebarOpen = !this.isSidebarOpen;

      if(this.isSidebarOpen){
        sidebar.classList.remove('-translate-x-full');
        console.log('Opening');
      }else{
        sidebar.classList.add('-translate-x-full');
        this.isSidebarOpen = false;
        console.log('Closing');
      }
    });

    // Closing sidebar when a link is pressed
    openSidebarButtonLinkPress.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.add('-translate-x-full');
      this.isSidebarOpen = false;
    });
    
    // Disable body scrolling when the sidebar is open
    document.body.style.overflow = 'auto'; // Initially enable scrolling

    // Update body overflow based on sidebar state
    this.$watch('isSidebarOpen', (newValue) => {
      if (newValue) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
      } else {
        document.body.style.overflow = 'auto'; // Enable scrolling
      }
    });

  }

};
</script>