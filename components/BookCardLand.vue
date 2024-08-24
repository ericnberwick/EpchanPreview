<template>
  <div class="container grid  gap-8 ">
    <div
      class="relative flex-col bg-clip-border rounded-lg bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2 border-2 border-black">
      <div class="relative bg-clip-border  overflow-hidden bg-white text-gray-700 shadow-lg m-0">

        <a :href="review.fields.linkToBook">
          <img :src="'https:' + review.fields.bookImage.fields.file.url" class="object-cover w-full " />
        </a>
      </div>
      <div class="p-6 px-2 sm:pr-6 sm:pl-4">

        <a href="#"
          class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">{{
            review.fields.title }}</a>
        <RichTextRenderer
          class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500"
          :document="review.fields.description" />
        <a class="inline-block" :href="review.fields.linkToBook">
          <button
            class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" aria-hidden="true" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  </div>

</template>

<script setup>
import { defineProps } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

const props = defineProps({
  review: {
    type: Object,
    required: true
  }
})
</script>

<style>
/* You can add component-specific styles here */
</style>