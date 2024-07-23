<template>
    <div class=" bg-red-600 flex items-center justify-center">
        <div class="mx-auto py-8">
            <h1 class="text-3xl font-semibold mb-6 text-center text-white">Payment Options</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <div class="flex items-center p-4 bg-white rounded-lg shadow-md">
                    <img :src="CRDBLogo" alt="Bank A" class="w-24 h-24 rounded-full shadow-md">
                    <div class="ml-4">
                        <h2 class="text-lg font-semibold text-gray-800">CRDB Bank</h2>
                        <p class="text-sm text-gray-600">Account Name: ZIONET GLOBAL LIMITED</p>
                        <p class="text-sm text-gray-600">Account Number: 0150795070100</p>
                    </div>
                </div>

                <div class="flex items-center p-4 bg-white rounded-lg shadow-md">
                    <img :src="MpesaLogo" alt="Bank B" class="w-24 h-24 rounded-full shadow-md">
                    <div class="ml-4">
                        <h2 class="text-lg font-semibold text-gray-800">M Pesa</h2>
                        <p class="text-sm text-gray-600">LIPA Name: ZIONET GLOBAL LIMITED</p>
                        <p class="text-sm text-gray-600">LIPA Number: 5208052</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CRDBLogo, MpesaLogo } from '../assets/images';

// No script setup needed for static data
</script>

<style scoped>
/* You can add custom styles here */
</style>