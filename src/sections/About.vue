<template>
     <section class="bg-gray-100">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div class="max-w-lg">
                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                        <p class="mt-4 text-gray-600 text-lg text-justify">
                            Zionet, headquartered in Dar es Salaam, Tanzania, stands as a leading telecommunications company dedicated to revolutionizing connectivity solutions across the region. 
                            Established with a vision to bridge digital divides and empower communities through seamless communication, Zionet has been at the forefront of innovation, delivering 
                            cutting-edge services tailored to meet diverse needs.
                        </p>
                        <p class="mt-4 text-gray-600 text-lg text-justify">
                            With a commitment to excellence, Zionet specializes in a comprehensive range of services, including network installation, security camera installation, and high-speed 
                            internet provisioning. Whether it's setting up robust networks for businesses to thrive in the digital age or ensuring residential areas are equipped with reliable connectivity, 
                            Zionet's expertise and dedication shine through in every project undertaken.
                        </p>
                        <p class="mt-4 text-gray-600 text-lg text-justify">
                            At Zionet, we understand the critical role that connectivity plays in driving progress and fostering growth. That's why we go above and beyond to deliver solutions that not only 
                            meet but exceed expectations. Our team of seasoned professionals brings unparalleled expertise and passion to every endeavor, ensuring that our clients receive top-tier service 
                            and support at every step of the way.
                        </p>
                        <div class="mt-8">
                            <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                                <span class="ml-2">&#8594;</span></a>
                        </div>
                    </div>
                    <div class="mt-12 md:mt-0 lg:mt-14">
                        <!-- <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md"> -->
                        <img :src="about" alt="About Us Image" class="object-cover rounded-lg shadow-md">
                    </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { about } from "../assets/images";

</script>