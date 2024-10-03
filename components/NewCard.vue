<template>
    <a :href="review.fields.linkToBook"
        class=" flex flex-col items-center bg-gray-800 rounded-lg shadow md:flex-row md:max-w-xl ">
        <img class="object-cover w-auto rounded-t-lg h-[400px]  md:rounded-none md:rounded-s-lg"
            :src="'https:' + review.fields.bookImage.fields.file.url" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{{ review.fields.title }}</h5>
            <p class="mb-3 font-normal text-white dark:text-gray-400">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
            <a class="inline-block" :href="review.fields.linkToBook">
                <button
                    class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3">
                        </path>
                    </svg>
                </button>
            </a>
        </div>
    </a>
</template>

<script setup>
import { defineProps } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

defineProps({
    review: {
        type: Object,
        required: true
    }
})
</script>

<style>
/* You can add component-specific styles here */
</style>