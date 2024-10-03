<template>
  <div class="">
    <div class="border-white border-2 hover:border-pink-500 rounded-lg text-gray-700 grid grid-cols-2 transition-all">
      <div class="flex h-full p-2">
        <a :href="review.fields.linkToBook" class="flex">
          <img :src="'https:' + review.fields.bookImage.fields.file.url" class="object-cover h-[400px] w-auto"
            alt="Book cover" />
        </a>
      </div>

      <div class=" p-6 px-2 sm:pr-6 sm:pl-4 text-white flex flex-col h-[400px] overflow-hidden">
        <a :href="review.fields.linkToBook"
          class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-2 normal-case transition-colors hover:text-blue-700">
          {{ review.fields.title }}
        </a>
        <div class="flex-grow overflow-y-auto">
          <RichTextRenderer class="block antialiased font-sans text-base leading-relaxed mb-8 font-normal text-white"
            :document="review.fields.description" />
        </div>
        <a class="inline-block mt-auto" :href="review.fields.linkToBook">
          <button
            class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" aria-hidden="true" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3">
              </path>
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