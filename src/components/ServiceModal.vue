<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" v-if="visible"
        @click.self="closeModal">
        <div class="bg-white rounded-lg max-w-lg w-11/12 p-6 relative">
            <span class="close-button absolute top-2 right-2 text-red-600 text-2xl cursor-pointer"
                @click="closeModal">&times;</span>
            <div v-html="details"></div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    visible: Boolean,
    details: String
});

const emits = defineEmits(['close']);

function closeModal() {
    emits('close');
}
</script>
