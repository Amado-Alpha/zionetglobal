<template>
  <section
      id="services"
      class=""
  >
      <div class="justify-center">
        <h2 class="text-4xl leading-none sm:text-4xl lg:text-4xl md:text-4xl xl:text-4xl 2xl:text-4xl text-red-600 font-palanquin font-bold text-center">
          Our<br class="sm:hidden"> Services
        </h2>
      </div>
      <br/>
      <div class="flex min-h-screen items-center justify-center reduce-bottom-space">
          <div class="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              <div v-for="(item, index) in cardItems" :key="index" class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-red/30 rounded-lg">
                  <div class="h-80 w-90">
                      <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" :src="item.imageUrl" alt="" />
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 class="font-dmserif text-3xl font-bold text-white move-serviceTitleUp-820 leading-tight">{{ item.title }}</h1>
                      <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{{ item.description }}</p>
                      <button class="rounded-full bg-red-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-red/60">See More</button>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { isp } from "../assets/images";
import { wifi } from "../assets/images";
import {camera} from "../assets/images"; 
import {networkInst} from "../assets/images";
import {itSupport} from "../assets/images";
import {ictshop} from "../assets/images";

const cardData = () => {
  const cardItems = ref([]);

  onMounted(() => {
    // Simulated async data fetch
    fetchData();
  });

  async function fetchData() {
    // Simulated data
    cardItems.value = [
      {
        imageUrl: isp,
        title: 'ISP',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.'
      },
      {
        imageUrl: wifi,
        title: 'Wi-Fi',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.'
      },
      {
        imageUrl: itSupport,
        title: 'IT Support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.'
      },
      {
        imageUrl: camera,
        title: 'Camera Installation',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.'
      },
      {
        imageUrl: networkInst,
        title: 'Net Installation',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.'
      },
      {
        imageUrl: ictshop,
        title: 'ICT Shop',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.'
      }
    ];
  }

  return {
      cardItems 
    };
};

const { cardItems } = cardData();

</script>