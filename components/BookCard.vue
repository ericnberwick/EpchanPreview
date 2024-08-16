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
        <p class="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">
          Technology</p>
        <a href="#"
          class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">{{
            review.fields.title }}</a>
        <RichTextRenderer
          class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500"
          :document="review.fields.description" />
        <div class="flex items-center gap-4">
          <img src="/img/ernie.png"
            class="inline-block relative object-cover object-center !rounded-full w-12 h-12 rounded-lg" />
          <div>
            <p
              class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">
              Ernest P Chan</p>
            <p class="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">2022-08-15</p>
          </div>
        </div>
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