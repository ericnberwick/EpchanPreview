<template>
  <div class="container grid  gap-8 pr-2">
    <div
      class="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
      <div class="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">

        <a :href="review.fields.linkToBook">
          <img :src="'https:' + review.fields.bookImage.fields.file.url" alt="Revolutionizing Our Production Process"
            class="object-cover w-full " />
        </a>
      </div>
      <div class="p-6 px-2 sm:pr-6 sm:pl-4">

        <a href="#"
          class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">{{
            review.fields.title }}</a>
        <RichTextRenderer
          class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500"
          :document="review.fields.description" />

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