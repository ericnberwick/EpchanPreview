<template>
    <div class=" bg-black grid grid-cols-1 md:grid-cols-6 ">
        <div class="col-start-2 col-span-2 flex justify-center ">
            <div class="flex gap-4 justify-center flex-col px-4">
                <h3 class="font-bold text-white text-3xl mb-4">
                    Complete list of our pre-recorded online courses
                </h3>
                <p class="text-white mb-4"> Contact ernest@epchan.com for further questions </p>
                <a class="block lgw-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="/EP Chan Course Offerings.pdf" target="_blank" rel="noopener noreferrer">
                    Download brochure
                </a>
                <NuxtLink
                    class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto mb-2"
                    to="/contact">
                    Get in touch
                </NuxtLink>
            </div>
        </div>
        <div class="col-start-4 col-span-2 overflow-hidden flex items-center">
            <video autoplay loop muted class="w-full object-cover ">
                <source src="public/img/finance3.mp4" type="video/webm" />
            </video>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    course: {
        type: Object,
        required: true
    }
})
</script>