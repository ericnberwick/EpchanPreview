<template>
<div class="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border-2 border-black m-2">
    <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
      <img :src="'https:' + review.fields.bookImage.fields.file.url" style="width: 20rem;"
        alt="image"
        class=""
      />
    </div>
    <div class="p-6 w-full">
      
      <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {{ review.fields.title }}
      </h4>
      <RichTextRenderer :document="review.fields.description" />
      <a class="inline-block" :href="review.fields.amazonLink.content[0].content[0].value">
        <button
          class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </a>
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
  