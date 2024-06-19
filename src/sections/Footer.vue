<template>
  <footer class="bg-red-100 p-6 px-12">
    <div class="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col pt-8">
      <div class="flex flex-col items-start">
        <a href="/">
          <img :src="headerLogo" alt="logo" width="150" height="46" class="m-0" />
        </a>
        <p class="mt-6 text-base leading-7 font-montserrat text-black sm:max-w-sm">
          Get the best possible services around the clock.
        </p>
        <div class="flex items-center gap-5 mt-8">
          <div v-for="icon in socialMediaLinks" :key="icon.alt"
            class="flex justify-center items-center w-12 h-12 bg-white rounded-full">
            <img :src="icon.src" :alt="icon.alt" width="24" height="24" />
          </div>
        </div>
      </div>

      <div class="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        <div v-for="section in footerLinks" :key="section.title">
          <h4 class="font-montserrat text-2xl leading-normal font-medium mb-6 text-black">
            {{ section.title }}
          </h4>
          <ul>
            <li v-for="link in section.links" :key="link.name"
              class="mt-3 font-montserrat text-base leading-normal text-black hover:text-white hover:rounded-lg hover:bg-red-600 ho">
              <a :href="link.link">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center text-black mt-16 max-sm:flex-col max-sm:items-center">
      <p class="flex justify-center font-montserrat cursor-pointer">© 2024 Zionet</p>
      <p class="flex justify-center font-montserrat cursor-pointer">All Rights Reserved</p>
    </div>
  </footer>
</template>

<script setup>
import { copyrightSign } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { data } from '../constants/index.js';
import { ref } from 'vue';

const footerData = () => {
  const footerLinks = ref(data.footerLinks);

  return {
    footerLinks
  };
};

const { footerLinks } = footerData();

const socialMediaData = () => {
  const socialMediaLinks = ref(data.socialMedia);

  return {
    socialMediaLinks
  };
};

const { socialMediaLinks } = socialMediaData();
</script>